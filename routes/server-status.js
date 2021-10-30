/**
 *  server-statusにGETアクセスを行った際のRouterオブジェクトの実装
 */ 

// 厳格モードの設定
'use strict';

// モジュールの読み込み
const express = require('express');
const router = express.Router();
const os = require('os'); // ロードアベレージ取得のため

// /に対してのハンドラを登録する
router.get('/', (req, res, next) => {
    // jsonの形式にしてレスポンスを返す
    res.json({ loadavg: os.loadavg() });
});

module.exports = router;