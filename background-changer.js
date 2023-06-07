chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url.startsWith('https://www.google.com/')) {
      const backgrounds = [
        'url(https://i.ytimg.com/vi/SQJrYw1QvSQ/maxresdefault.jpg)',
        'url(https://i2-prod.mirror.co.uk/incoming/article25609246.ece/ALTERNATES/s1200d/0_PUSS-IN-BOOTS.jpg)',
        'url(https://media.istockphoto.com/id/1322123064/photo/portrait-of-an-adorable-white-cat-in-sunglasses-and-an-shirt-lies-on-a-fabric-hammock.jpg?s=612x612&w=0&k=20&c=-G6l2c4jNI0y4cenh-t3qxvIQzVCOqOYZNvrRA7ZU5o=)'
      ];
      const randomIndex = Math.floor(Math.random() * backgrounds.length);
      chrome.tabs.executeScript(tabId, {
        code: `document.body.style.backgroundImage = '${backgrounds[randomIndex]}'; document.body.style.backgroundSize = 'cover';`
      });
    }
  });
});
