// https://quera.org/problemset/9774

class Solution {
   /**
    * @param {number} name
    */
   fnc(n) {
      let intArr = Array.from(String(n), (num) => Number(num));
      for (let i = 0; i < intArr.length; i++) {
         fncHelper(intArr[i]);
      }
   }
}

let solution = new Solution();
if (typeof readline === "function") {
   // This is for Quera judge
   solution.fnc(readline());
} else {
   //This is for manual test
   solution.fnc(50943);
}

function fncHelper(n) {
   let a = "";
   for (let i = 0; i < n; i++) {
      a = a + n;
   }
   console.log(`${n}: ${a}`);
}
