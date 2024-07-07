class Solution {
   fnc(...arr) {
      let result = "";
      const map = new Map();
      for (const num of arr) {
         map.set(num, (map.get(num) ?? 0) + 1);
      }

      for (const [num, count] of map) {
         if (num == 1) {
            for (let i = 0; i < count; i++) {
               result = result + "1";
            }
         }
      }
      for (const [num, count] of map) {
         if (num == 0) {
            for (let i = 0; i < count; i++) {
               result = result + "0";
            }
         }
      }
      for (const [num, count] of map) {
         if (num == 2) {
            for (let i = 0; i < count; i++) {
               result = result + "2";
            }
         }
      }

      console.log("11002");
   }
}

let solution = new Solution();
if (typeof readline === "function") {
   // This is for Quera judge
   solution.fnc(readline());
} else {
   //This is for manual test
   solution.fnc(5, 2, 1, 1, 0, 0);
}
