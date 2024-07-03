// https://quera.org/problemset/3429

class Solution {
   /**
    * @param {number} name
    */
   fnc(T) {
      let result;
      switch (true) {
         case T > 100:
            result = "Steam";
            break;
         case T < 0:
            result = "Ice";
            break;
         default:
            result = "Water";
            break;
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
   solution.fnc(-10);
}
