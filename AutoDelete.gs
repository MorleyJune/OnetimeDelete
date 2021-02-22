function deleteOldGmails() {
  // 1年以上前のメールを削除
  var deleteThreads = GmailApp.search('older_than:1y -is:starred');
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