// https://quera.org/problemset/10231
// TODO: solve it
class Solution {
   /**
    * @param {number} name
    */
   fnc() {
      console.log("result");
   }
}

let solution = new Solution();
if (typeof readline === "function") {
   // This is for Quera judge
   solution.fnc(readline());
} else {
   //This is for manual test
   solution.fnc();
}
