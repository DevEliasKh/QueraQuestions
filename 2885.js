//quera.org/problemset/2885

class Solution {
   /**
    * @param {number} name
    */
   fnc(s) {
      let result = "";
      for (let i = 0; i < s; i++) {
         result = result + `man khoshghlab hastam \n`;
      }
      console.log(result);
   }
}

let solution = new Solution();
if (typeof readline === "function") {
   // This is for Quera judge
   solution.fnc(readline());
} else {
   //This is for manual test
   solution.fnc(3);
}
