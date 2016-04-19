# GooglePlayDeviceExporter
This JS exports compatible devices list for published app on Google Play.

# Why is written?
Google Play Developer Console not allows to export a list of compatible devices with your published APK.

# How it works?
Parses HTML code looking for all devices shown on your setup panel. When all items are registered, browser will open a new tab with device list.

# How to use?
You can download any web extension that executes JS on webpages, and include exporter.js. For example, Tampermonkey on Chrome Store https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=es
