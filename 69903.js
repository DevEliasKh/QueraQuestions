class Solution {
   /**
    * @param {number} name
    */

   fnc([d1, m1], [d2, m2]) {
      let result;

      let numOfDay1;
      let numOfDay2;

      switch (d1) {
         case 7:
         case 8:
         case 9:
         case 10:
         case 11:
            numOfDay1 = 30;
            break;
         case 12:
            numOfDay1 = 29;
            break;
         default:
            numOfDay1 = 31;
            break;
      }
      switch (d2) {
         case 7:
         case 8:
         case 9:
         case 10:
         case 11:
            numOfDay2 = 30;
            break;
         case 12:
            numOfDay2 = 29;
            break;
         default:
            numOfDay2 = 31;
            break;
      }
      let temp = fnc2(m1, m2);

      result = numOfDay1 - d1 + (numOfDay2 - d2) + temp;
      console.log(result);
   }
}

let solution = new Solution();
if (typeof readline === "function") {
   // This is for Quera judge
   solution.fnc(readline());
} else {
   //This is for manual test
   solution.fnc([1, 3], [2, 3]);
}

function fnc2(m1, m2) {
   let result;

   if (m1 == m2 || m1 < m2) {
      result = 0;
   } else {
      if (m1 < 7 && m2 < 7) {
         result = (m1 - m2) * 31;
      } else if (m1 < 7 && m2 > 6) {
         result = (m1 - 6) * 31 + (11 - m2) * 30;
      } else if (m1 > 6) {
         result = (m1 - m2) * 30;
      }
   }

   return result;
}
