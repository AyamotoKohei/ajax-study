'use strict';
import $, { data } from 'jquery';
const block = $('#block');
const scalingButton = $('#scaling-button');

scalingButton.click(() => {
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});

const movingButton = $('#moving-button');

movingButton.click(() => {
  block.animate({ 'marginLeft': '500px' }, 500);
  block.animate({ 'marginLeft': '20px' }, 1000);
});

// jQueryオブジェクトを取得
const loadavg = $('#loadavg');

// 第二引数に与えられたミリ秒間隔で、第一引数で渡された関数を実行する
setInterval(() => {
  // レスポンスが返ってきた際に実行する無名関数
  $.get('/server-status', {}, (data) => {
    // ロードアベレージの値を格納した配列を取得して文字列に変換し、段落の内部のテキストとして設定
    loadavg.text(data.loadavg.toString());
  });
}, 10);
