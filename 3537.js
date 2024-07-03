// https://quera.org/problemset/3537

class Solution {
   /**
    * @param {string} name
    */
   makeWowWord(n) {
      let numberOfO = "";
      for (let i = 1; i <= n; i++) {
         numberOfO = numberOfO + "o";
      }
      console.log(`W${numberOfO}w!`);
   }
}

let solution = new Solution();
if (typeof readline === "function") {
   // This is for Quera judge
   solution.makeWowWord(readline());
} else {
   //This is for manual test
   solution.makeWowWord(3);
}
