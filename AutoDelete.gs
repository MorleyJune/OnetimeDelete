function deleteOnetimeMails() {
  // 10 分以上前の onetime-pass メールを狙い撃ちして自動削除
  //受信日時指定
  const nowDate = new Date() ;//現在時刻を取得
  const nowUnixTime = nowDate.getTime();//UNIX TIMEに変換
  const nowSecond = Math.floor(nowUnixTime/1000); //ミリ秒を秒に変換
  const pastSecond = nowSecond - 600; //現在時刻から10分（600秒）前
  //検索条件指定
  const srchCon = [ //検索条件を配列で格納
  'onetime-pass',
  'uec.ac.jp'  
  ].join("\u0020"); //半角スペースで連結

  const strTerms = 'before:'+ pastSecond.toString() +' '+ srchCon;
  const threads = GmailApp.search(strTerms, 0, 30); //条件にマッチしたスレッドを取得
  const num = threads.length;
  for (var i = 0; i < threads.length; i++) {
    threads[i].moveToTrash();
  }
  Logger.log( num + '件削除しました');
  Logger.log('終了');
}