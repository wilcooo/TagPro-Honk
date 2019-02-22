// ==UserScript==
// @name          TagPro Honk
// @description   Press space to honk.
// @version       0.999
// @downloadURL   https://greasyfork.org/scripts/33836-tagpro-honk/code/TagPro%20Honk.user.js
// @supportURL    https://www.reddit.com/message/compose/?to=Wilcooo
// @website       https://www.reddit.com/r/TagPro/comments/6cn82i/modded_mod_honk_doot_doot/
// @match         *://*.koalabeast.com/*
// @match         *://*.jukejuice.com/*
// @match         *://*.newcompte.fr/*
// @author        CFlakes / Ballzilla / Ko
// @dootdoot      Vermite
// @grant         GM_getValue
// @grant         GM_setValue
// ==/UserScript==

if (location.pathname == '/' && !GM_getValue('stopnotify', false)) {
 if (!confirm('You still have an old version of the Honk script installed, please download the new script from https://greasyfork.org/scripts/33836 to be able to use it with the new TagPro.\n\nPress Cancel to never show again.')) {
   GM_setValue('stopnotify', true);
 }
}
