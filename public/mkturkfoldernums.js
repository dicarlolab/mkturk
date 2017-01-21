// The epsilon operator is a "spread" command for the succeeding object. 
// arr1.push(... arr2) is like list1.extend(list2), in Python. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator#A_better_push





function getImageList(images,foldernum){
	images.serial = [];
	images.obj = [];
	images.packpointer = [];
	images.packserial = [];
	images.packpos = [];
	images.pixLR = [];
	var potentialImages = {
		serial: [],
		obj: [],
	}
	var imagesPack = {
		packserial: [],
	}
	var perobj=1; //folder 0 or 4 or 12
	var perobjvec=[];
	if (foldernum == 1 || foldernum == 2 || foldernum == 3 || foldernum == 6 || foldernum == 7 || foldernum == 8 || foldernum == 10 || foldernum == 11 || foldernum == 13 || foldernum == 14 || foldernum == 15){
		perobj=100;
	}
	else if (foldernum == 5){
		perobjvec=[12,8,10,12,6,12,8,10,12,12,8,10,6,14,6,6,12,10,8,6,6,8,6,8,12,6,12,6,8,6,10,12,6,6,12,8,10,12,6,12,8,10,12,12,8,10,6,14,6,6,12,10,8,32,24,6,8,12,8,6,10,12];
		var objstart=[0];
		var objend=[perobjvec[0]-1];
		for (var i=1; i<=perobjvec.length-1; i++){
			objstart[i]=objend[i-1]+1;
			objend[i]=objstart[i]+perobjvec[i]-1;
		}
	}
	if (foldernum == 0 || foldernum == 1 || foldernum == 2 || foldernum == 3 || foldernum == 6 || foldernum == 7 || foldernum == 8 || foldernum == 9 || foldernum == 10 || foldernum == 12){
		var cnt=0;
		for (var i in trial.objectlist){
			for (var j=0; j<=perobj-1; j++){
				potentialImages.serial[cnt]=trial.objectlist[i]*perobj+j;
				potentialImages.obj[cnt]=trial.objectlist[i];
				cnt=cnt+1;
			} //for j exemplars
		} //for i objects
	}
	//only 90 images in hvm10 test set
	if (foldernum == 11){
		var cnt=0;
		for (var i in trial.objectlist){
			for (var j=0; j<=perobj-1-10; j++){
				potentialImages.serial[cnt]=trial.objectlist[i]*perobj+j;
				potentialImages.obj[cnt]=trial.objectlist[i];
				cnt=cnt+1;
			} //for j exemplars
		} //for i objects
	}
	//only 80 images in coco train set
	if (foldernum == 13){
		var cnt=0;
		for (var i in trial.objectlist){
			for (var j=0; j<=perobj-1-20; j++){
				potentialImages.serial[cnt]=trial.objectlist[i]*perobj+j;
				potentialImages.obj[cnt]=trial.objectlist[i];
				cnt=cnt+1;
			} //for j exemplars
		} //for i objects
	}
	//only 40 images in coco test set
	if (foldernum == 14){
		var cnt=0;
		for (var i in trial.objectlist){
			for (var j=0; j<=perobj-1-60; j++){
				potentialImages.serial[cnt]=trial.objectlist[i]*perobj+j;
				potentialImages.obj[cnt]=trial.objectlist[i];
				cnt=cnt+1;
			} //for j exemplars
		} //for i objects
	}
	//only 80 images in coco,objectome train set
	if (foldernum == 15){
		var cnt=0;
		for (var i in trial.objectlist){
			for (var j=0; j<=perobj-1-20; j++){
				potentialImages.serial[cnt]=trial.objectlist[i]*perobj+j;
				potentialImages.obj[cnt]=trial.objectlist[i];
				cnt=cnt+1;
			} //for j exemplars
		} //for i objects
	}
	// White button response images
	if (foldernum == 16){
		perobj = 1; // i.e. how many images are there per label 
		var cnt=0;
		for (var i in trial.objectlist){
			for (var j=0; j<=perobj-1; j++){
				potentialImages.serial[cnt]=trial.objectlist[i]*perobj+j; 
				potentialImages.obj[cnt]=trial.objectlist[i];
				cnt=cnt+1;
			} //for j exemplars
		} //for i objects
	}
	
	// Black superformula shapes, discfaded with plain bg 
	if (foldernum == 17){
		perobj = 1; 
		var cnt=0;
		// Initially added objects 
		for (var i in trial.objectlist){ 
			for (var j=0; j<=perobj-1; j++){
				potentialImages.serial[cnt]=trial.objectlist[i]*perobj+j;
				potentialImages.obj[cnt]=trial.objectlist[i];
				cnt=cnt+1;
			} //for j exemplars
		} //for i objects
	}
	// Black superformula shapes with position / rotation variation, discfaded with plain bg 10/21/2016
	if (foldernum == 18){
		perobj = 100; 
		var cnt=0;
		for (var i in trial.objectlist){ 
			for (var j=0; j<=perobj-1; j++){
				potentialImages.serial[cnt]=trial.objectlist[i]*perobj+j;
				potentialImages.obj[cnt]=trial.objectlist[i];
				cnt=cnt+1;
			} //for j exemplars
		} //for i objects
	}
	// Mutator response buttons, 12 total created on 10/21/2016
	if (foldernum == 19){
		perobj = 1; 
		var cnt=0;
		for (var i in trial.objectlist){ 
			for (var j=0; j<=perobj-1; j++){
				potentialImages.serial[cnt]=trial.objectlist[i]*perobj+j;
				potentialImages.obj[cnt]=trial.objectlist[i];
				cnt=cnt+1;
			} //for j exemplars
		} //for i objects
	}
	// Mutator objects with position / rotation variation, discfaded with plain bg; 12 objects * 100 images created 10/21/2016
	if (foldernum == 20){
		perobj = 100; 
		var cnt=0;
		for (var i in trial.objectlist){ 
			for (var j=0; j<=perobj-1; j++){
				potentialImages.serial[cnt]=trial.objectlist[i]*perobj+j;
				potentialImages.obj[cnt]=trial.objectlist[i];
				cnt=cnt+1;
			} //for j exemplars
		} //for i objects
	}


	// var3 Mutator18 objects with bg; 19 objects * 200 images created 11/20/2016
	if (foldernum == 21){

		perobj = 200; 

		var cnt=0;

		for (var i in trial.objectlist){ 
			for (var j=0; j<=perobj-1; j++){
				potentialImages.serial[cnt]=trial.objectlist[i]*perobj+j;
				potentialImages.obj[cnt]=trial.objectlist[i];
				cnt=cnt+1;
			} //for j exemplars
		} //for i objects
	}

	// holdout var3 Mutator18 objects with bg; 19 objects * 200 images created 11/20/2016
	if (foldernum == 22){

		perobj = 200; 

		var cnt=0;

		for (var i in trial.objectlist){ 
			for (var j=0; j<=perobj-1; j++){
				potentialImages.serial[cnt]=trial.objectlist[i]*perobj+j;
				potentialImages.obj[cnt]=trial.objectlist[i];
				cnt=cnt+1;
			} //for j exemplars
		} //for i objects
	}

	// var6 Mutator18 objects with bg; 19 objects * 200 images created 11/20/2016
	if (foldernum == 23){

		perobj = 200; 

		var cnt=0;

		for (var i in trial.objectlist){ 
			for (var j=0; j<=perobj-1; j++){
				potentialImages.serial[cnt]=trial.objectlist[i]*perobj+j;
				potentialImages.obj[cnt]=trial.objectlist[i];
				cnt=cnt+1;
			} //for j exemplars
		} //for i objects
	}

	// holdout var6 Mutator18 objects with bg; 19 objects * 200 images created 11/20/2016
	if (foldernum == 24){

		perobj = 200; 

		var cnt=0;

		for (var i in trial.objectlist){ 
			for (var j=0; j<=perobj-1; j++){
				potentialImages.serial[cnt]=trial.objectlist[i]*perobj+j;
				potentialImages.obj[cnt]=trial.objectlist[i];
				cnt=cnt+1;
			} //for j exemplars
		} //for i objects
	}

	// var0 Mutator18 objects with bg; 19 objects * 50 images created 11/21/2016
	if (foldernum == 25){

		perobj = 50; 

		var cnt=0;

		for (var i in trial.objectlist){ 
			for (var j=0; j<=perobj-1; j++){
				potentialImages.serial[cnt]=trial.objectlist[i]*perobj+j;
				potentialImages.obj[cnt]=trial.objectlist[i];
				cnt=cnt+1;
			} //for j exemplars
		} //for i objects
	}

	// var0 no bg Batch0 objects, 95 objects * 1 images created 1/10/2017
	if (foldernum == 26){
		perobj = 1; 
		var cnt=0;
		for (var i in trial.objectlist){ 
			for (var j=0; j<=perobj-1; j++){
				potentialImages.serial[cnt]=trial.objectlist[i]*perobj+j;
				potentialImages.obj[cnt]=trial.objectlist[i];
				cnt=cnt+1;
			} //for j exemplars
		} //for i objects
	}

	// varB bg Batch0 objects, 4 objects * 200 images created 1/10/2017
	if (foldernum == 27){
		perobj = 200; 
		var cnt=0;
		for (var i in trial.objectlist){ 
			for (var j=0; j<=perobj-1; j++){
				potentialImages.serial[cnt]=trial.objectlist[i]*perobj+j;
				potentialImages.obj[cnt]=trial.objectlist[i];
				cnt=cnt+1;
			} //for j exemplars
		} //for i objects
	}

	// holdout varB bg Batch0 objects, 4 objects * 200 images created 1/10/2017
	if (foldernum == 28){
		perobj = 200; 
		var cnt=0;
		for (var i in trial.objectlist){ 
			for (var j=0; j<=perobj-1; j++){
				potentialImages.serial[cnt]=trial.objectlist[i]*perobj+j;
				potentialImages.obj[cnt]=trial.objectlist[i];
				cnt=cnt+1;
			} //for j exemplars
		} //for i objects
	}

	// varB bg Batch0 objects, 16 objects * 200 images created 1/12/2017
	if (foldernum == 29){
		perobj = 200; 
		var cnt=0;
		for (var i in trial.objectlist){ 
			for (var j=0; j<=perobj-1; j++){
				potentialImages.serial[cnt]=trial.objectlist[i]*perobj+j;
				potentialImages.obj[cnt]=trial.objectlist[i];
				cnt=cnt+1;
			} //for j exemplars
		} //for i objects
	}

	// holdout varB bg Batch0 objects, 16 objects * 200 images created 1/12/2017
	if (foldernum == 30){
		perobj = 200; 
		var cnt=0;
		for (var i in trial.objectlist){ 
			for (var j=0; j<=perobj-1; j++){
				potentialImages.serial[cnt]=trial.objectlist[i]*perobj+j;
				potentialImages.obj[cnt]=trial.objectlist[i];
				cnt=cnt+1;
			} //for j exemplars
		} //for i objects
	}

	// holdout 2, varB bg Batch0 objects, 16 objects * 200 images created 1/12/2017
	if (foldernum == 31){
		perobj = 200; 
		var cnt=0;
		for (var i in trial.objectlist){ 
			for (var j=0; j<=perobj-1; j++){
				potentialImages.serial[cnt]=trial.objectlist[i]*perobj+j;
				potentialImages.obj[cnt]=trial.objectlist[i];
				cnt=cnt+1;
			} //for j exemplars
		} //for i objects
	}

	if (foldernum == 4){
		var cnt=0;
		for (var i in trial.objectlist){
			for (var j=0; j<=perobj-1; j++){
				potentialImages.serial[cnt]=trial.objectlist[i]*perobj+j;
				potentialImages.obj[cnt]=trial.objectlist[i];
				cnt=cnt+1;
			} //for j exemplars
		} //for i objects
	}
	if (foldernum == 5){
		var cnt=0;
		for (var i in trial.objectlist){
			for (var j=0; j<=perobjvec[trial.objectlist[i]]-1; j++){
				potentialImages.serial[cnt]=objstart[trial.objectlist[i]]+j;
				potentialImages.obj[cnt]=trial.objectlist[i];
				cnt=cnt+1;
			}
		}
	}
	// Get images
	var cnt=0;
	for (var q=0; q<=potentialImages.serial.length-1; q++){
		images.serial[cnt]=potentialImages.serial[q];
		images.packserial[cnt]=images.packsz*Math.floor(potentialImages.serial[q]/images.packsz);
		images.packpos[cnt] = potentialImages.serial[q] - images.packserial[cnt];
		images.obj[cnt]=potentialImages.obj[q];
		cnt=cnt+1;
	}
	// Get packs, assign images to packs
	var isnewpack=1;
	var packcnt = 0;
	for (var q=0; q<=images.serial.length-1; q++){
		isnewpack = 1;
		for (var q2=0; q2<=imagesPack.packserial.length-1; q2++){
			if (images.packserial[q] == imagesPack.packserial[q2]){
				isnewpack=0;
			}
		}
		if (isnewpack==1){
			imagesPack.packserial[packcnt] = images.packserial[q];			
			for (var q2=0; q2<=images.serial.length-1; q2++){
				if (images.packserial[q2] == images.packserial[q]){
					images.packpointer[q2] = packcnt;
				}
			}
			packcnt = packcnt+1;
		}
	}
	return {
			images: images,
			imagesPack: imagesPack
		};
}