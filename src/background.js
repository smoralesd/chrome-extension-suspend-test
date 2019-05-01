const now = new Date().toString();
console.log('started-on: ', now);

chrome.storage.local.set({
    'started-on': now
}, () => console.log('started-on to local storage success'));

chrome.runtime.onSuspend.addListener(() => {
    console.log('onSuspend');
    chrome.storage.local.set({
        'suspended-on': new Date().toString()
    }, () => console.log('suspended-on to local storage success'));
});
