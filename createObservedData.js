//状態遷移確率行列
var A = [
  //0へ, 1へ, 2へ
  [0.1, 0.7, 0.2],// 状態0の次の状態への遷移確率
  [0.2, 0.1, 0.7],//    1
  [0.7, 0.2, 0.1] //    2
];
// 状態が記号を出力する確率
var B = [
  //記号0 ,記号1
  [0.9, 0.1], // 状態0のときに記号を出力する確率
  [0.6, 0.4], //    1
  [0.1, 0.9]  //    2
];
// 初期状態が状態nである確率 0, 1, 2
var row = [1, 0, 0];// 合計で1
// 現在状態
var currentState = 0;


roulette = function(arr) {
  var i, j, k, len, len1, n, r, ref;
  ref = [0].concat(arr);
  for (i = j = 0, len = ref.length; j < len; i = ++j) {
    n = ref[i];
    arr[i] += arr[i - 1] || 0;
  }
  arr = arr.slice(0, arr.length - 1);
  r = Math.random();
  for (i = k = 0, len1 = arr.length; k < len1; i = ++k) {
    n = arr[i];
    if (r < n) {
      return i;
    }
  }
  return i;
};

// 出力記号列
var outputs = [];

run = function() {
  var i, j;
  for (i = j = 1; j <= 10000; i = ++j) {
    currentState = roulette(A[currentState]);
    outputs.push(roulette(B[currentState]));
  }
  var fs = require('fs');
  fs.writeFile("./.data.json", JSON.stringify(outputs))
};


run();
