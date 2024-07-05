class Solution {
   /**
    * @param {number} name
    */
   fnc(input) {
      let tableSize = input[0];
      // make table
      let table = [];
      for (let i = 0; i < tableSize[0]; i++) {
         let temp = [];
         for (let i = 0; i < tableSize[1]; i++) {
            temp.push("");
         }
         table.push(temp);
         temp = [];
      }
      // add bomb to table
      for (let i = 2; i < input.length; i++) {
         let temp = input[i];
         let row = temp[0];
         let col = temp[1];
         table[row - 1][col - 1] = "*";
      }
      // add number to table
      let tempTable = table.flat(Infinity);
      for (let i = 0; i < tempTable.length; i++) {
         if (tempTable != "*") {
         }
      }
      console.log(table);
   }
}

let solution = new Solution();
if (typeof readline === "function") {
   // This is for Quera judge
   solution.fnc(readline());
} else {
   //This is for manual test
   solution.fnc([[5, 5], 5, [1, 1], [4, 2], [1, 3], [3, 2], [4, 3], [5, 4]]);
}
