function openCenter(doc, win, w, h){
  var left = (screen.availWidth-w) / 2;
  var top = (screen.availHeight-h) / 2;
  var opt = "left=" + left + ", top=" + top + ", width=" + w + ", height=" + h;
  window.open(doc, win, opt);
}
openCenter("notice.html", "pop", 500, 400);    