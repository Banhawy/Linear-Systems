var matrix = [
	[0, 3, -6, 6, 4, -5],
	[3, -7, 8, -5, 8, 9],
	[3, -9, 12, -9, 6, 15]
];

for (var i = 0; i<matrix.length; i++){
	console.log(matrix[i]);
};

function swapRows(arr, oldIndex, newIndex){
	//Use Bitwise XOR to swap values between two rows in a matrix, interchanging the rows
	for (var i =0; i<arr[oldIndex].length; i++){
		arr[oldIndex][i] = arr [oldIndex][i] ^ arr[newIndex][i];
		arr[newIndex][i] = arr [oldIndex][i] ^ arr[newIndex][i];
		arr[oldIndex][i] = arr [oldIndex][i] ^ arr[newIndex][i];
	}
};

function rowReplacemntOperation(arr, pivotRow, pivotColumn){
	for (var i = pivotRow+1; i < arr.length; i++) {
		var pivotColCounter = 0; //Pointer to the columns in the pivot row
		var oRow = arr[i][pivotColumn];
		var tempoRow = oRow;
		for (var j = pivotColumn; j < arr[0].length; j++) {
			if(pivotColCounter>=arr[0].length){
				pivotColCounter =0;
			}
			var pivot = arr[pivotRow][pivotColumn]; //The pivot value
			var pRow = arr[pivotRow][pivotColCounter]; //Pointer to the column values  in the pivot row
			//oRow = arr[]
			var operationRow = arr[i][j]; //A pointer to the current row/col value
			
			/*console.log('Its ' + operationRow);
			console.log('oRow is  ' + oRow);
			console.log('pRow is ' + pRow);*/
			operationRow = operationRow + pRow*(-1)*tempoRow/pivot; //Adds the multiple of the pivot row to the current row 
			//console.log(operationRow);
			arr[i][j] = operationRow;

			pivotColCounter++;
		}
	}
};
/****************************************************************************************************
*Step 1*

Begin with the leftmost nonzero column. This is a pivot column. The pivot position is at the top.

****************************************************************************************************/

var pivot = matrix[0][0]; // The value of the pivot
var pivotRow = 0;
var pivotColumn = 0; //The first column in the matrix
var biggest = pivot;
console.log(pivot);

/*************************************************************************************************************************************
*Step 2*

Select a nonzero entry in the pivot column as a pivot. I fnecessary, interchange rows to move this entry into the pivot position.

**************************************************************************************************************************************/

//Interchanging rows in case the pivot vlaue at the top of the pivot column is 0 and replacing with a row with nonzero entry
if (pivot === 0){
	for (var i = 0; i<matrix.length; i++){
		var pivotColumnValue = matrix[i][0]; //The value of the leftmost column in each row of the pivot column
		if (pivotColumnValue != 0) { //Checks if value of leftmost column of the row is nonzero
			if (Math.abs(pivotColumnValue)>=biggest){ //Selects a pivot entry in the pivot column with the largest absolute value
				biggest = pivotColumnValue;
				pivotRow = i;
			}
		}
	};
	swapRows(matrix, pivot, pivotRow) //Interchanges the nonzero entry row to the pivot row
	pivotRow = 0; //Pivot row is set to the first row
}

for (var i = 0; i<matrix.length; i++){
	console.log(matrix[i]);
};

/**********************************************************************************
*Step 3*

Use row replacement operations to create zeros in all positions below the pivot

***********************************************************************************/

rowReplacemntOperation(matrix, 0, 0);


console.log(matrix[0][0]);

for (var i = 0; i<matrix.length; i++){
	console.log(matrix[i]);
};