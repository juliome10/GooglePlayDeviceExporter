# GooglePlayDeviceExporter
This JS exports compatible devices list for published app on Google Play.

# Why is written?
Google Play Developer Console not allows to export a list of compatible devices with your published APK.

# How it works?
Parses HTML code looking for all devices shown on your setup panel. When all items are registered, browser will open a new tab with device list.

# How to use?
## Installation
You can download any web extension that executes JS on webpages, and include <a href="https://github.com/juliome10/GooglePlayDeviceExporter">exporter.js</a> on it.

For example, <a href="https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo"> Tampermonkey </a> (Chrome Store link)

## Execution

1. Go to Google Play Developer Console
2. Open an app detail
3. Go to APK section
4. Click on "See list" link below the number of supported devices
5. Exporter will parse html and open new tab with the info (remember to allow pop-up)
