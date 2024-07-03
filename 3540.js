// https://quera.org/problemset/3540
// TODO: solve it

class Solution {
   /**
    * @param {number,number,number} name
    */
   fnc(n, x, y) {
      let tSteps = Math.floor(n / x);
      let aSteps = (n % x) / y;
      if (aSteps == Math.floor(aSteps)) {
         console.log(tSteps, aSteps);
      } else {
         console.log(-1);
      }
   }
}

let solution = new Solution();
if (typeof readline === "function") {
   // This is for Quera judge
   solution.fnc(readline());
} else {
   //This is for manual test
   solution.fnc(100, 6, 1);
}
