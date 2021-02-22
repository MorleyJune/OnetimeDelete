function deleteOldGmails() {
  // 1日前の onetime-pass メールを狙い撃ちして自動削除
  var deleteThreads = GmailApp.search('onetime-pass uec.ac.jp older-than:1d');
  Logger.log('該当スレッド: ' + deleteThreads.length + '件');
  for (var i = 0; i < deleteThreads.length; i++) {
    deleteThreads[i].moveToTrash();
    if (i > 1000) {
      Logger.log('1000件削除しました');
      break;
    }
  }
  Logger.log('終了');
}