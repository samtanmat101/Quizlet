var s = document.createElement('script');
s.src = chrome.extension.getURL('ScatterHacker.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);