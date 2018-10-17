% everything is 0-indexed
dataDir = 'C:\Users\Praneeth\Desktop\Hutch 2a\';

% find all data files with more than 2 sample bags, and more than 5 trials
nTrials_min = 6;
nSampleBags_min = 3;

allDataFiles = dir([dataDir '*.txt']);
nFiles = numel(allDataFiles);
nSampleBags = zeros(nFiles, 1);
nTestBags = zeros(nFiles, 1);
nTrials = zeros(nFiles, 1);
res = cell(nFiles, 1);
for fileCount = 1:numel(allDataFiles)
    res{fileCount} = mkTurk_readLog([dataDir allDataFiles(fileCount).name]);
    nSampleBags(fileCount) = numel(res{fileCount}.Ordered_Samplebag_Filenames);
    nTestBags(fileCount) = numel(res{fileCount}.Ordered_Testbag_Filenames);
    nTrials(fileCount) = numel(res{fileCount}.StartTime);
end
fileSel = nSampleBags >= nSampleBags_min & nTrials >= nTrials_min & cellfun(@(x) ~x.HideTestDistractors, res);

dataFiles = allDataFiles(fileSel);
nFiles = numel(dataFiles);
nSampleBags = nSampleBags(fileSel);
nTestBags = nTestBags(fileSel);
nTrials = nTrials(fileSel);
res = res(fileSel);

% find unique indices for the images
allSampleNames = {};
allTestNames = {};
for fileCount = 1:numel(dataFiles)
    allSampleNames = [allSampleNames; res{fileCount}.Ordered_Samplebag_Filenames];
    allTestNames = [allTestNames; res{fileCount}.Ordered_Testbag_Filenames];
end

allSampleFileNames = cell(size(allSampleNames));
allTestFileNames = cell(size(allTestNames));
for imCount = 1:numel(allSampleNames)
    [~, allSampleFileNames{imCount, 1}] = fileparts(allSampleNames{imCount});
    [~, allTestFileNames{imCount, 1}] = fileparts(allTestNames{imCount});
end

% allImfileNames = unique([allSampleFileNames; allTestFileNames]);
allImfileNames = unique(allSampleFileNames);
tmp1 = cellfun(@(x) strsplit(x, '_'), allImfileNames, 'UniformOutput', false);

dataSet_fileSpace = cellfun(@(x) x{1}, tmp1, 'UniformOutput', false);
objectCat_fileSpace = cellfun(@(x) x{2}, tmp1, 'UniformOutput', false);

allDatasetNames = unique(dataSet_fileSpace);
allObjectcatNames = unique(objectCat_fileSpace);

%%make a trial database
trialDb = struct;
trialCount = 0;
for fileCount = 1:numel(dataFiles)
    this_fName = dataFiles(fileCount).name;
    this_dateID = strrep(this_fName(1:10), '-', '');
    this_timeID = strrep(this_fName(12:19), '_', '');
    this_subjectID = this_fName(21:end-4);
    
    this_fields = fieldnames(res{fileCount});
    this_nTrials = numel(res{fileCount}.StartTime);
    
    for this_trialCount = 1:this_nTrials
        trialCount = trialCount + 1;
        trialDb(trialCount, 1).fName = this_fName;
        trialDb(trialCount, 1).dateID = this_dateID;
        trialDb(trialCount, 1).timeID = this_timeID;
        trialDb(trialCount, 1).subjectID = this_subjectID;
        for fieldCount = 1:numel(this_fields)
            if size(res{fileCount}.(this_fields{fieldCount}), 1) == this_nTrials
                trialDb(trialCount, 1).(this_fields{fieldCount}) = res{fileCount}.(this_fields{fieldCount})(this_trialCount, :);
            else
                trialDb(trialCount, 1).(this_fields{fieldCount}) = res{fileCount}.(this_fields{fieldCount});
            end
        end
        % get the absolute imageID, objectID and datasetID
        [~, trialDb(trialCount).sample_imageName] = fileparts(trialDb(trialCount).Ordered_Samplebag_Filenames{trialDb(trialCount).Sample+1}); % 0 indexed to 1 indexed
        trialDb(trialCount).sample_absImageID = find(contains(allImfileNames, trialDb(trialCount).sample_imageName));
        trialDb(trialCount).sample_objectName = objectCat_fileSpace{trialDb(trialCount).sample_absImageID};
        trialDb(trialCount).sample_absObjectID = find(strcmp(allObjectcatNames, trialDb(trialCount).sample_objectName));
        
        for i = 1:numel(trialDb(trialCount).Test)
            [~, trialDb(trialCount).test_imageName{i, 1}] = fileparts(trialDb(trialCount).Ordered_Testbag_Filenames{trialDb(trialCount).Test(i)+1}); % 0 indexed to 1 indexed
            if numel(find(contains(allImfileNames, trialDb(trialCount).test_imageName{i}))) == 0
                trialCount = trialCount-1;
                trialDb = trialDb(1:trialCount);
                break;
            end
            trialDb(trialCount).test_absImageID(i) = find(contains(allImfileNames, trialDb(trialCount).test_imageName{i}));
            trialDb(trialCount).test_objectName{i, 1} = objectCat_fileSpace{trialDb(trialCount).test_absImageID(i)};
            trialDb(trialCount).test_absObjectID(i) = find(strcmp(allObjectcatNames, trialDb(trialCount).test_objectName{i}));
        end
    end
end


% populate the confusion matrix
confMatrix = cell(numel(allObjectcatNames), numel(allObjectcatNames));
for trialCount = 1:numel(trialDb)
    sIdx = trialDb(trialCount).sample_absObjectID;
    for wayCount = 1:numel(trialDb(trialCount).test_absObjectID)
        tIdx = trialDb(trialCount).test_absObjectID(wayCount);
        if sIdx == tIdx
            confMatrix{sIdx, tIdx} = [confMatrix{sIdx, tIdx}, trialDb(trialCount).Response == trialDb(trialCount).CorrectItem];
        else
            confMatrix{sIdx, tIdx} = [confMatrix{sIdx, tIdx}, ~(trialDb(trialCount).Response == trialDb(trialCount).CorrectItem)];
        end
    end
end

confMatrix_avg = cellfun(@mean, confMatrix);
figure; imagesc(confMatrix_avg); colorbar; impixelinfo;
title(dataDir);

%% do internal consistency
for i = 1:numel(confMatrix)
    sel = rand(numel(confMatrix{i}), 1) > 0.5;
    confMatrix_1(i) = mean(confMatrix{i}(sel));
    confMatrix_2(i) = mean(confMatrix{i}(~sel));
end
nDiagSel = true(size(confMatrix_1));
nDiagSel(1:9:end) = false;
figure; scatter(confMatrix_1(nDiagSel), confMatrix_2(nDiagSel))
corrcoef(confMatrix_1(nDiagSel), confMatrix_2(nDiagSel))

%% time course of performance vs internal consistency - do this to saturation on the 8x8
% Do 3 blocks of 8x8
% Once they get to saturation on all of these, run the 25x25
