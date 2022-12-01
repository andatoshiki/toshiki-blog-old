---
title: (Tutorial) Download Pornhub Videos with Violentmonkey 😏
date: 2021-09-26T03:36:36+08:00
lastmod: 2021-09-26T03:36:36+08:00
author: 安田俊樹
cover: /post5/Pornhub.png
avatar: /avatar/Avatar3.jpg
images:
  - /post5/Pornhub.png
categories:
  - Tutorial
tags:
  - Pornhub
  - Js
  - Download
  - Chrome
  - Extension
  - Browsers
  - Violentmonkey
mathjax: false
---
*You must had the experience of watching Pornhub without logging in, and you SUDDENLY see a good video that fits you, but just next time you can't find it, the fast yet useful solution to this is to download the video at once. No more to say, you use Pornhub, we buddies 😏.*
<!--more-->

<meting-js
  name="Worth It (Reunify vs. Kris Maydak vs. Danyka Nadeau) [feat. Danyka Nadeau] [Radio Mix]"
  artist="Danyka Nadeau / Kris Maydak / Reunify"
  url="/music/Worth It (Reunify vs. Kris Maydak vs. Danyka Nadeau) [feat. Danyka Nadeau] [Radio Mix].m4a"
  cover="/music/cover/3.jpg"
  lrc="/music/lyrics/Worth It (Reunify vs. Kris Maydak vs. Danyka Nadeau) [feat. Danyka Nadeau] [Radio Mix].lrc">
</meting-js>

> I wrote the same blog just 2 weeks ago, but when I run `hugo server`, every other blog pages shows but only this one about Pornhub, I initially thought Hugo has automatic pornography content detect feature but I was wrong, it works, well, I must met some format error before that did not make the blog page render.
 
## Introduction
First of all, [Pornhub](https://www.pornhub.com/) you **son of a bitch**, but you also an **saviour** for those people who do not have a partner yet in this current days while **Google LLC** starts to block inappropriate content again, which we cannot find any more pornographic content from web anymore.

Why Pornhub son of bitch? I don't want to explain more, you have to login for commenting or premium content, I don't know what you guys feel about this, in my sort of perspective Pornhub will sell their user information to Google to ban the users that has ever registered to their site, this is more about personal privacy concern. The other reason is common users are unable to download premium video contents,

<img align="right" width="60%" src="/post5/pricing.png">

Alright and look what the fuck is this, $9.99 per month, $7.99 per year with only $2 off, really? Really Pornhub? Why the fuck don't you go rob? I know most of the videos are free there, but imagine, when you browsed for a long time on Pornhub and suddenly you see a video you like, then you click to enter the link with a dick in flagpole, then you watched the video for around 2 minutes then a premium payment window pops out and ask you to pay to unlock the entire video, you got ruined, imagine how shit that is. So here's a way to download Pornhub Videos, both normal or premium ones by using an extension called **[🐵Violentmonkey](https://violentmonkey.github.io/)** to load JavaScript programs that can be used to modify web pages.

## Procedures

- To start with, go to [chrome web store](https://chrome.google.com/webstore/category/extensions?hl=en) to download an **[extension](https://developer.chrome.com/docs/extensions/)** (check on the link in case you don't know what an extension is), search **Violentmonkey in the side bar**. (For China users, you might need to have your VPN on since all Google products and its accessories are blocked.)

<p align="center" width="100%">
    <img width="70%" src="/post5/img.png"> 
</p>

{{< notice warning >}}
**For Firefox Users**: Download addon from [Here](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search)
{{< /notice >}}

<p align="center" width="100%">
  <img width="70%" src="/post5/img14.png"> 
</p>

{{< notice warning >}}
**⚠ For Microsoft Edge Users**: Download extension from [Here](https://microsoftedge.microsoft.com/addons/detail/violentmonkey/eeagobfjdenkkddmbclomhiblgggliao), **Chinese users can use Microsoft Edge as an alternative to Chrome, Microsoft's addon store is not accessible in China due to the special internet environment.**
{{< /notice >}}

<p align="center" width="100%">
  <img width="70%" src="/post5/img15.png"> 
  <img width="70%" src="/post5/img16.png">
</p>

- Hit <kbd>enter</kbd> there should be two results pops up, select the first result as shown in the image below

<p align="center" width="100%">
    <img width="70%" src="/post5/img2.png"> 
</p>

- Click on <kbd>Add to Chrome</kbd> button, then a notification window should pop out asking you to confirm installation, click on `Add extemson`, the extension will be installed shortly.

<p align="center" width="100%">
    <img width="70%" src="/post5/img3.png"> 
    <img width="70%" src="/post5/img4.png"> 
</p>

- **Here's the important thing, you will see an extra "🐵 monkey" icon in your navigation bar at the top of your browser, click on the icon, a drop down menu should pop out, click on `+` on the top left corner of the dropdown menu.**

<p align="center" width="100%">
    <img width="70%" src="/post5/img5.png"> 
    <img width="70%" src="/post5/img6.png"> 
</p>

- It should direct you to a code editor page, copy and paste the code **[HERE](#jump)** to the editor, then click on `Save & Close`, it'll direct you to the main page of Violentmonkey, which you can check whether the script is installed or not.

<p align="center" width="100%">
    <img width="70%" src="/post5/img7.png"> 
    <img width="70%" src="/post5/img8.png"> 
</p>

- Now navigate to [Pornhub](https://pornhub.com/), **you'll notice a small number on the icon of Violentmonkey at the navigation bar, it indicates the number of Javascript you are currently loading on that specific webpage.** Let's select a random video for a test round to test the script, as shown in the image, after you open a video, a link list will appear below the video description, you can choose the video resolution to your desire to download, click on `Click to copy address`.

<p align="center" width="100%">
    <img width="70%" src="/post5/img9.png"> 
    <img width="70%" src="/post5/img10.png"> 
</p>

- Now paste the link you copied to your browser's address bar, press <kbd>Enter</kbd> to download, if it works properly and you are currently using an external downloader, it should work like this, *(I'll write a separate blog page about downloader later)*

<p align="center" width="100%">
    <img width="70%" src="/post5/img11.png"> 
    <img width="70%" src="/post5/img12.png"> 
</p>

- Or if you do not use a downloader, it should direct you to a separate video player like this, click on the `...` at the bottom right corner, click on `download` to download with your browser's default downloader.

<p align="center" width="100%">
    <img width="70%" src="/post5/img13.png">  
</p>

- **Now wait until download finishes! Then enjoy!!! **

<h2 id="jump">Javascript</h2>

```javascript
// ==UserScript==
// @icon         https://ci.phncdn.com/www-static/favicon.ico
// @name         Download Pornhub Videos with One Click | pornhub.com
// @version      0.1.3
// @description  Download Pornhub Videos with One Click | pornhub.com | Download Pornhub Videos with no Login Requirements | Direct Pornhub Premium Video Download | Download restricted videos | Download videos with all available resolutions
// @author       安田俊樹 | Translated by 安田俊樹
// @match        *://*.pornhub.com/view_video.php?viewkey=*
// @match        *://*.pornhubpremium.com/view_video.php?viewkey=*
// @grant        unsafeWindow
// @grant        GM_setClipboard
// @grant        GM_download
// @grant        GM_addStyle
// @grant        GM_notification
// @require      https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js
// ==/UserScript==

GM_addStyle(`
.download-urls ul {
  padding: 10px;
  font-weight: bold;
  line-height: 1.5;
}
.download-urls ul li {
  display: flex;
  align-items: center;
  height: 20px;
}
.download-url-label {
  //width: 100px;
  text-align: right;
}
.download-url-copy {
  flex: 1;
}
.download-url-input {
  flex: 3;
  font-size: 12px;
  padding: 0 5px;
  border: 1px solid #ffff;
  margin: 0 5px;
}
`);

(function() {
  'use strict';

  const MutationObserver = unsafeWindow.MutationObserver || unsafeWindow.WebKitMutationObserver || unsafeWindow.MozMutationObserver;
  const mutationObserver = new MutationObserver(mutations => {
    mutationObserver.disconnect();
    setTimeout(() => {
      unsafeWindow.VideoParsing.init();
    }, 200);
  });
  const playerDom = document.querySelector('#player');

  if(playerDom) {
    mutationObserver.observe(playerDom, {
      childList: true,
      subtree: true,
    });
  }else {
    console.warn('One click to download did not work！');
  }
})();

(function() {
  class VideoParsing {
    // Retrieves the value of the object based on the key prefix, and returns an array
    static getObjectValueByStartsWithChar(obj, char) {
      const vars = [];
      Object.keys(obj).forEach(key => {
        if(key.startsWith(char)) {
          vars.push({
            key: key,
            value: obj[key],
          });
        }
      });
      return vars;
    }

    // Fetch the download address information and returns an array
    static getUrlInfo() {
      const flashvars = this.getObjectValueByStartsWithChar(unsafeWindow, 'flashvars_');
      if(!flashvars.length) {
        console.error('Error！Cannot fetch video address！', flashvars);
        return;
      }

      let videosInfo = [];

      try {
        videosInfo = flashvars[0]['value']['mediaDefinitions'];
      }catch(e) {
        console.error('Error! Failed to fetch video information！', e, flashvars);
        return;
      }

      let remoteAddress = undefined;
      let urlInfo = [];

      for(let i = 0; i < videosInfo.length; i++) {
        if(videosInfo[i]['remote']) {
          remoteAddress = videosInfo[i]['videoUrl'];
          break;
        }
      }

      // MP4 Information
      if(remoteAddress) {
        $.ajax({
          url: remoteAddress,
          async: false,
          success: (data) => {
            if(data && data.length) {
              urlInfo = urlInfo.concat(data.map(item => ({
                quality: item.quality + '.' + item.format,
                url: item.videoUrl
              })));
            }
          }
        });
      }

      console.log(videosInfo);

      return urlInfo;
    }

    // Inject into the download panel
    static injectUrls2Dom(urlInfo) {
      const li = [];

      urlInfo.forEach(item => {
        li.push(`
          <li>
            <span class="download-url-label">[ ${ item.quality } ]</span>
            <input class="download-url-input" value="${ item.url }" />
            <a target="_blank" class="download-url-copy" data-href="${ item.url }" href="javascript: void(0);">Click to copy address</a>
          </li>
        `);
      });

      $('.title-container').before(`<div class="download-urls"><h3>Download address of different video resolution：</h3><ul>${ li.join('') }</ul></div>`);
    }

    // Initialize events
    static initEvens() {
      // Click to copy download address to clipboard
      $(document).on('click', '.download-url-copy', function(e) {
        e.preventDefault();
        GM_setClipboard($(this).data('href'));
        GM_notification('Successfully copied the download address!', 'Notification');
      });
    }

    static init() {
      this.injectUrls2Dom(this.getUrlInfo());
      this.initEvens();
    }
  }

  unsafeWindow.VideoParsing = VideoParsing;
})();
```

## Afterwords
Violentmonkey was originally a addon for Firefox, but the author migrated and rewrote the extension for Chrome users and I was a heavy Firefox user not too long ago, but unexpected crashes in webkit happens from time to time, at meanwhile, Violentmonkey became available in Chrome Web Store, this made me left Firefox to chromium-based browsers.

For script-loading plugins, some people might prefers to use [Tampermonkey](https://www.tampermonkey.net) or [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) for alternatives, features of both extensions are basically the same as Violentmonkey, import scripts, export to zips, etc, but neither UI design of Tampermonkey nor Greasemonkey fits my demand, and Tampermonkey crashes really often, this drives me crazy. Under a long-term comparison, I still selected Violentmonkey as my first-hand userscript manager, yet Violentmonkey supports a wide range of browsers comparing to the other two, here's a table of the three extensions and its corresponding supported browsers to show a more explicit explanation.

| Browsers | Greasymonkey | Tampermonkey | Violentmonkey |
| -------- | ------------ | ------------ | ------------- |
| Chrome   | ❌            | ✔            | ✔             |
| Edge     | ❌            | ✔            | ✔             |
| Safari   | ❌            | ✔            | ✔             |
| Firefox  | ✔            | ✔            | ✔             |
| Opera    | ❌            | ✔            | ✔             |
| Vivaldi  | ❌            | ❌            | ✔             |
| Maxthon  | ❌            | ❌            | ✔             |
| Dolphin  | ❌            | ✔            | ❌             |
| UC       | ❌            | ✔            | ❌             |

***If I made anything wrong, please correct me at comment!***

If you decides to write more scripts for your browsing experience in Violentmonkey, that is totally appreciated, but for those people do not know how to write Javascripts, here are several sites that allows people to install scripts from.
- [GreasyFork](https://greasyfork.org/) Possibly the largest script source by far, supports various languages.
- [OpenUserJS](https://openuserjs.org/) Another open source script vault, only supports English.
- [Userscript.Zone](https://www.userscript.zone/) A relatively smaller script source, only supports English.

## Reference
---
1. Kokdemo. “油猴使用指南 01：传说中的「油猴」与用户脚本 - 少数派.” 少数派 - 高品质数字消费指南, 9 Sept. 2021, https://sspai.com/post/68574.
2. Violent Monkey. Violentmonkey, https://violentmonkey.github.io/. 
3. wanlin, liuwan. “Pornhub 视频一键下载: Pornhub.com.” Translated by 俊樹 安田, Pornhub 视频一键下载 | Pornhub.com, https://sleazyfork.org/zh-CN/scripts/392449-pornhub-%E8%A7%86%E9%A2%91%E4%B8%80%E9%94%AE%E4%B8%8B%E8%BD%BD-pornhub-com.