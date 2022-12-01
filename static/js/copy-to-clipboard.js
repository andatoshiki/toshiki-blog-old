function addCopyButton(containerEl) {
    var copyBtn = document.createElement("button");
    copyBtn.className = "highlight-copy-btn";
    copyBtn.textContent = "Copy";
    containerEl.appendChild(copyBtn);
  }
  
  var highlightBlocks = document.getElementsByClassName('highlight');
  if(highlightBlocks!=null){
    Array.prototype.forEach.call(highlightBlocks, addCopyButton);
  }
  
  function selectText(node) {
  var selection = window.getSelection();
  var range = document.createRange();
  range.selectNodeContents(node);
  selection.removeAllRanges();
  selection.addRange(range);
  return selection;
  }
  
  function flashCopyMessage(el, msg) {
  el.textContent = msg;
  setTimeout(function() {
    el.textContent = "Copy";
  }, 1000);
  }
  
  function addCopyButton(containerEl) {
  var copyBtn = document.createElement("button");
  copyBtn.className = "highlight-copy-btn";
  copyBtn.textContent = "Copy";
  
  var codeEl = containerEl.firstElementChild.firstElementChild.firstElementChild.firstElementChild.children[1];
  copyBtn.addEventListener('click', function() {
    try {
      var selection = selectText(codeEl);
      document.execCommand('copy');
      selection.removeAllRanges();
      flashCopyMessage(copyBtn, '复制成功!')
    } catch(e) {
      console && console.log(e);
      flashCopyMessage(copyBtn, 'Failed :\'(')
    }
  });
  containerEl.appendChild(copyBtn);
  }