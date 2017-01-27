var matrix = [
	[0, -3, -6, 4, 9],
	[-1, -2, -1, 3, 1],
	[1, 4, 5, -9, -7]
];

function dislpayMatrix(){
	for (var i = 0; i<matrix.length; i++){
				console.log(matrix[i]);
			};
}

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
		var pivotColCounter = pivotColumn; //Pointer to the columns in the pivot row
		var oRow = arr[i][pivotColumn];
		var tempoRow = oRow;

		var rowLength= arr[0].length;
		for (var j = pivotColumn; j < rowLength; j++) {
			if(pivotColCounter>=rowLength){
				pivotColCounter =0;
			}
			var pivot = arr[pivotRow][pivotColumn]; //The pivot value
			var pRow = arr[pivotRow][pivotColCounter]; //Pointer to the column values  in the pivot row
			
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
	dislpayMatrix();
};

/****************************************************************************************************
*Step 1*

Begin with the leftmost nonzero column. This is a pivot column. The pivot position is at the top.

****************************************************************************************************/
console.log('The Original Matrix');

dislpayMatrix();

var pivotRow = 0;
var pivotColumn = 0; //The first column in the matrix
var pivotFunction = function(pivotRowx, pivotColumnx){
	return matrix[pivotRowx][pivotColumnx];
};
var pivot = pivotFunction(pivotRow, pivotColumn); // The value of the pivot
var biggest = pivot;

console.log("Pivot is: ", pivot, "Pivot Column is: ", pivotColumn, "Pivot Row is: ", pivotRow);

/*************************************************************************************************************************************
*Step 2*

Select a nonzero entry in the pivot column as a pivot. I fnecessary, interchange rows to move this entry into the pivot position.

**************************************************************************************************************************************/

//Interchanging rows in case the pivot vlaue at the top of the pivot column is 0 and replacing with a row with nonzero entry
function interchangeRows(pivot, pivotRowx, pivotColumnx){
	var newPivotRow;
		if (pivot === 0){
			for (var i = 0; i<matrix.length; i++){
				var pivotColumnValue = matrix[i][pivotColumnx]; //The value of the column in each row of the pivot column
				if (pivotColumnValue != 0) { //Checks if value of the pivot column of the row is nonzero
					if (Math.abs(pivotColumnValue)>=biggest){ //Selects a pivot entry in the pivot column with the largest absolute value
						biggest = pivotColumnValue;
						newPivotRow = i;
					}
				}
			};

				if (newPivotRow != pivotRowx){
					swapRows(matrix, pivotRowx, newPivotRow) //Interchanges the nonzero entry row to the pivot row
				}
			console.log('\nInterchanging Rows');
				dislpayMatrix();
		}		
}

interchangeRows(pivot, pivotRow, pivotColumn);

/**********************************************************************************
*Step 3*

Use row replacement operations to create zeros in all positions below the pivot

***********************************************************************************/
console.log('\nEliminating enteries under the Pivot');
rowReplacemntOperation(matrix, pivotRow, pivotColumn);

pivotRow++; //Pivot row is incremented
pivotColumn++; //Pivot column is incremented
pivot = pivotFunction(pivotRow, pivotColumn); //Update pivot value



console.log("Pivot is: ", pivot, "Pivot Column is: ", pivotColumn, "Pivot Row is: ", pivotRow, "\n");

/**********************************************************************************
*Step 4*

Apply steps 1-3 to the new submatrix starting from the new pivot position

***********************************************************************************/

console.log('Echelon Form Baybeeee:')
interchangeRows(pivot, pivotRow, pivotColumn);
rowReplacemntOperation(matrix, pivotRow, pivotColumn);