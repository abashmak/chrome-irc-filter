function toggleFilter() {
  if (filter_enabled) {
    chrome.browserAction.setTitle({title:"Filter current log"});
    chrome.browserAction.setIcon({path:"/images/off.png"});
  }
  else {
    chrome.browserAction.setTitle({title:"Show full log"});
    chrome.browserAction.setIcon({path:"/images/on.png"});
  }
  filter_enabled = !filter_enabled;

  chrome.tabs.executeScript(null, {
    code: 'var filter_enabled = ' + filter_enabled + ';'
  }, function() {
    chrome.tabs.executeScript(null, {file: 'javascript/filter.js'});
  });
}

function resetFilter() {
  if (filter_enabled) {
    toggleFilter();
  }
}

var filter_enabled = false;
chrome.browserAction.onClicked.addListener(toggleFilter);
chrome.tabs.onUpdated.addListener(resetFilter);
