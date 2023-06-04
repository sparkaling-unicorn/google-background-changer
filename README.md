# google-background-changer
To create a Chrome extension that changes the background of google.com every time you visit the page, follow these steps:

1. Create a new folder for your extension:

Create a new folder on your Chromebook and name it something like "GoogleBackgroundChanger".

2. Create a manifest file:

In the new folder, create a file named "manifest.json". This file will define your extension and its properties. Add the following code to the file:

```json
{
  "manifest_version": 2,
  "name": "Google Background Changer",
  "version": "1.0",
  "description": "Changes the background of google.com every time you visit the page.",
  "permissions": ["tabs", "https://www.google.com/*"],
  "content_scripts": [
    {
      "matches": ["https://www.google.com/*"],
      "js": ["background-changer.js"]
    }
  ],
  "icons": {
    "48": "icon-48.png"
  },
  "browser_action": {
    "default_icon": "icon-48.png"
  }
}
```

3. Create the JavaScript file:

In the same folder, create a new file named "background-changer.js". This file will contain the JavaScript code to change the background of google.com. Add the following code to the file:

```javascript
document.addEventListener('DOMContentLoaded', function() {
  const body = document.querySelector('body');
  const backgrounds = [
    'url(https://example.com/image1.jpg)',
    'url(https://example.com/image2.jpg)',
    'url(https://example.com/image3.jpg)',
    // Add more image URLs here
  ];

  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  body.style.backgroundImage = backgrounds[randomIndex];
  body.style.backgroundSize = 'cover';
});
```

Replace the example image URLs with the URLs of the images you want to use as backgrounds.

4. Add an icon:

Create a 48x48 pixel icon for your extension and save it as "icon-48.png" in the same folder. This icon will be displayed in the Chrome extensions list.

5. Load the extension in Chrome:

- Open Chrome and go to `chrome://extensions`.
- Enable "Developer mode" by toggling the switch in the top right corner.
- Click "Load unpacked" and select the folder you created for your extension. Your extension should now be loaded and active.

Now, every time you visit google.com, the background should change according to the images you specified in the "background-changer.js" file.

