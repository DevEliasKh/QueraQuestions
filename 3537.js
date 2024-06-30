// https://quera.org/problemset/3537

function makeWowWord(n) {
   let numberOfO = "";
   for (let i = 1; i <= n; i++) {
      numberOfO = numberOfO + "o";
   }
   return `W${numberOfO}w!`;
}
