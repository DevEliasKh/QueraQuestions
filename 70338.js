class Solution {
   /**
    * @param {number} name
    */
   fnc(input) {
      const tunnel = [
         [0, 0, 0, 0, 0, 0, 0, 0],
         [1, 0, 0, 0, 0, 0, 0, 0],
      ];

      let r = 1;
      let c = 0;

      for (let i = 0; i < input.length; i++) {
         switch (input[i]) {
            case "F":
               c = c + 1;
               break;
            case "R":
               r = r + 1;
               c = c + 1;
               break;
            case "L":
               r = r - 1;
               c = c + 1;
               break;

            default:
               break;
         }
         if (r > 1 || c > 7) {
            console.log("DEATH");
            return;
         }
         tunnel[r][c] = 1;
      }
      console.log(`${tunnel[0].join("")}\n${tunnel[1].join("")}`);
   }
}

let solution = new Solution();
if (typeof readline === "function") {
   // This is for Quera judge
   solution.fnc(readline());
} else {
   //This is for manual test
   solution.fnc("FLFFRLF");
}
