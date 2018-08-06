function [res, a, b, c, d] = readMkturkLog(fName)
if ~exist('fName', 'var')
    fName = 'exampleBehaviorFile.txt'; % just a demo file
end
fid = fopen(fName);
a = fgetl(fid); % the entire log is in one line
fclose(fid);

b = regexp(a, '"\w+":[\w:"./-]+', 'match');
c = regexp(a, '"\w+":\[[\w:".,-]+\]', 'match'); % 1-D arrays
d = regexp(a, '"\w+":\[\[[\w.\[\],]+\]\]', 'match'); % 2-D/3-D arrays

res = struct;
for bCount = 1:numel(b)
    tmp1 = strsplit(strrep(b{bCount}, '"', ''''), ':');
    res.(eval(tmp1{1})) = eval(cell2mat(tmp1(2:end)));
end
for cCount = 1:numel(c)
    tmp1 = strsplit(strrep(c{cCount}, '"', ''''), ':');
    if ischar(eval(tmp1{2}))
        tmp1{2} = strrep(strrep(tmp1{2}, '[', '{'), ']', '}');
    end
    res.(eval(tmp1{1})) = eval(tmp1{2})';
end
for dCount = 1:numel(d)
    tmp1 = strsplit(strrep(d{dCount}, '"', ''''), ':');
    evalStr = ['{' tmp1{2}(2:end-1) '}'];
    if strcmp(tmp1{1}, '''AllFixationXYT''') % this is actually a 2-D array masquerading as a 3-D array
        evalStr = strrep(strrep(evalStr, '[[', '['), ']]', ']');
    end 
    res.(eval(tmp1{1})) = cell2mat(eval(strrep(evalStr, 'null', 'NaN'))');
end
return;