/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */

const time = 500;

setTimeout(() => {
  const script = document.createElement('script');
  script.src = chrome.extension.getURL('hook.js');
  document.head.appendChild(script);
}, time);

const sendMessage = (tree) => {
  chrome.runtime.sendMessage(tree);
};

// sends data from content_script to panel.js port.onMessage.addListener
function handleMessage(request, sender, sendResponse) {
  if (request.data && request.data.tree) {
    console.log('handle message', request.data.tree);
    sendMessage(request.data.tree);
  }
}

window.addEventListener('message', handleMessage);
