# Chrome extension onSuspend test

## The experiment
Using a simple backround script and making it non-persistent:

```json
    "background": {
        "scripts": [ "background.js" ],
        "persistent": false
    },
```

Log the extension starting time using `chrome.storage.local`.

Using `chrome.runtime.onSuspend` event and `chrome.storage.local` to store the time when the extension goes idle (this should trigger the `onSuspend` event).

## The result
The extension doesn't seem to go idle, even after wait 10 minutes.
Looking at the local storage, I see the start time, but there is no "on suspend" time being logged:
```javascript
chrome.storage.local.get(console.log)
undefined
{started-on: "Wed May 01 2019 09:31:46 GMT-0700 (Pacific Daylight Time)"}
```