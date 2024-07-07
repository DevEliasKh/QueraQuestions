class Solution {
   fnc(str) {
      const neshan = ["n", "e", "s", "h", "a", "n"];
      const temp = [];
      let newStr = str.split("");

      for (let pointer = 0; pointer < newStr.length; pointer++) {
         let i = temp.length;
         fnc2(i, pointer, temp, neshan, newStr);
      }
      if (temp.length == 6) {
         console.log("YES");
      } else {
         console.log("NO");
      }
   }
}

let solution = new Solution();
if (typeof readline === "function") {
   // This is for Quera judge
   solution.fnc(readline());
} else {
   //This is for manual test
   solution.fnc("abnoelsfhazl");
}

function fnc2(i, pointer, temp, neshan, newStr) {
   if (neshan[i] == newStr[pointer]) {
      temp.push(newStr[pointer]);
      fnc2(++i, ++pointer, temp, neshan, newStr);
   } else {
      return;
   }
}
