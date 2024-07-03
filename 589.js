// https://quera.org/problemset/589

class Solution {
   /**
    * @param {number} name
    */
   fnc(n) {
      let result = "1";
      for (let i = 1; i <= n; i++) {
         result = result * i;
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
   solution.fnc(5);
}
