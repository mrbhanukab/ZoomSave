<link rel="shortcut icon" type="image/x-icon" href="https://raw.githubusercontent.com/mrbhanukab/ZoomSave/main/icon.ico" />

# ZoomSave 3 

A user-friendly, [open Source](https://github.com/mrbhanukab/ZoomSave) user-script that lets users download Zoom Recordings quickly 🔥.

## Installation

Installing ZoomSave 3 is a breeze. Just follow these **2** steps:

1. First, download and install Tampermonkey for your browser by clicking on the relevant link:

   - [Chrome (pc)](https://chrome.google.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Edge (pc)](https://microsoftedge.microsoft.com/addons/detail/iikmkjmpaadaobahmlepeloendndfphd)
   - [Safari 12+ (MacOS 10.13+)](https://apps.apple.com/app/apple-store/id1482490089?pt=117945903&ct=tm.net&mt=8) ($1.99 🥲)
   - [Safari 6-11 (pc & iOS)](https://safari.tampermonkey.net/tampermonkey.safariextz)
   - [Firefox (mobile & android)](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - [Opera (pc)](https://addons.opera.com/extensions/details/tampermonkey-beta/)
   - [Uc (android)](https://play.google.com/store/apps/details?id=net.tampermonkey.uc)
   - [Dolpin (android)](https://play.google.com/store/apps/details?id=net.tampermonkey.dolphin)
   - [Kiwi (android)](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)

2. After installing Tampermonkey, click on the "Install" button below to add ZoomSave 3:

[Install ZoomSave 3](https://github.com/mrbhanukab/ZoomSave/raw/main/ZoomSave.user.js)

### Video Walkthrough

![Video Walkthrough, Loading ...](https://github.com/mrbhanukab/ZoomSave/blob/main/assets/install.gif?raw=true)

## How to Use?

After you've got ZoomSave 3 up and running, you'll notice a direct download link labeled "(Click Here To Download)" right next to the video title on Zoom recording pages. You can click it directly to start the download. 

**Note:** In some cases, depending on the browser and its settings, you might need to right-click the link and select "Save Link As" to download the video.

### Video Walkthrough
https://github.com/mrbhanukab/ZoomSave/assets/87383814/2b910b7a-d65c-4bf2-b860-8b42953b734e

## FAQ

#### 1. Are there any viruses, malware, adware, etc., in this script?

**No**. ZoomSave 3 is completely open-source, ensuring full transparency. If you have reservations, the [source code](https://github.com/mrbhanukab/ZoomSave) is available for your perusal.

#### 2. Does ZoomSave 3 collect personal information like emails, passwords, or browser history?

**Absolutely not.** ZoomSave 3 is designed to run exclusively on Zoom's recording pages, aiming to help users download videos. It does not have access to, nor does it collect any personal data. A snippet from the script underlines this:

```javascript
// @match      https://*.zoom.us/rec*

if (/\/rec\/component-page/.test(window.location.href)) {
    return;
}
