// https://quera.org/problemset/10231
// TODO: solve it
class Solution {
   /**
    * @param {number} name
    */
   fnc(...input) {
      const hRegex = new RegExp("HAFEZ");
      const mRegex = new RegExp("MOLANA");
      let result = [];
      for (let i = 0; i < input.length; i++) {
         if (hRegex.test(input[i]) || mRegex.test(input[i])) {
            result.push([i + 1]);
         }
      }
      if (result.length != 0) {
         console.log(result.join(" "));
      } else {
         console.log("NOT FOUND!");
      }
   }
}

let solution = new Solution();
if (typeof readline === "function") {
   // This is for Quera judge
   solution.fnc(readline());
} else {
   //This is for manual test
   solution.fnc(
      "47-MOLANA",
      "BOND-007",
      "RF-MOLANA18",
      "MARICA-13",
      "13A-HAFEZLsL"
   );
}
