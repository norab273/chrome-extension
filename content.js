//This javascript is embedded into the page.
// Some of this javascript was provided by https://github.com/mjp2220/useless-chrome-extensions#text-replace
var ELEMENT = 1;
var DOCUMENT = 9;
var DOCUMENT_FRAGMENT = 11;
var TEXT = 3;

// Enter things that you'd like to replace
// You can add defaults here if you want
var MATCH = [
  "allumeuse",
  "babtou",
  "bamboula",
  "bâtard noir",
  "bécasse",
  "bimbo",
  "blondasse",
  "bobonne",
  "bonasse",
  "boniche",
  "boucaque",
  "bouffeur de chiens",
  "bouffeuse de chiens",
  "bougnoule",
  "cagole",
  "catin",
  "chagnasse",
  "chaudasse",
  "chinetoque",
  "ching chong",
  "connard",
  "connasse",
  "crouille",
  "débile",
  "donzelle",
  "enculé",
  "fais pas ta meuf",
  "fatma",
  "FDP",
  "fille de joie",
  "fille facile",
  "fille légère",
  "fils de pute",
  "fiotte",
  "garce",
  "gogole",
  "gonzesse",
  "gouine",
  "grognasse",
  "grosse vache",
  "hystérique",
  "macaque",
  "mal-baisé",
  "mal-baisée",
  "mégère",
  "nègre",
  "négresse",
  "négro",
  "niakoué",
  "niakouée",
  "niaqué",
  "niaquée",
  "niaquoué",
  "niaquouée",
  "nigga",
  "nigger",
  "nique",
  "nique ta mère",
  "peau rouge",
  "pédale",
  "pédé",
  "pimbêche",
  "pouffiasse",
  "putain",
  "putasse",
  "pute",
  "putes",
  "racoleuse",
  "retourne dans ton pays",
  "sale arabe",
  "sale bridé",
  "sale juif",
  "sale juive",
  "sale musulman",
  "sale musulmane",
  "sale noir",
  "sale trans",
  "salope",
  "singe noir",
  "tafiole",
  "tantouze",
  "tapette",
  "tapineuse",
  "tarlouse",
  "tchoin",
  "teubé",
  "toubab",
  "trainée",
  "travelo",
  "va manger du chien",
  "veille-peau",
  "youpin",
  "youpine",
];
var REPLACE = ["🌸"];

//In this tab, listen for a message

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  let userWords = JSON.parse(request.message);
  MATCH = MATCH.concat(userWords);
  walk(document.body);
  // Callback
  sendResponse({ message: "Content script has received that message ⚡" });
});

//replace text with emoji
walk(document.body);

function walk(node) {
  // Function from here for replacing text: http://is.gd/mwZp7E

  var child, next;

  switch (node.nodeType) {
    case ELEMENT: // Element
    case DOCUMENT: // Document
    case DOCUMENT_FRAGMENT: // Document fragment
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;

    case TEXT: // Text node
      replaceText(node);
      break;
  }
}

function replaceText(textNode) {
  var v = textNode.nodeValue;

  // Go through and match/replace all the strings we've given it, using RegExp.
  for (var i = 0; i < MATCH.length; i++) {
    v = v.replace(new RegExp(`\\b${MATCH[i]}\\b`, "gi"), REPLACE[0]);
  }

  textNode.nodeValue = v;
}

// (function () {
//   "use strict";

//   let elements = document.getElementsByTagName("*"),
//     BLACKLISTED = [
//       "allumeuse",
//       "babtou",
//       "bamboula",
//       "bâtard noir",
//       "bécasse",
//       "bimbo",
//       "blondasse",
//       "bobonne",
//       "bonasse",
//       "boniche",
//       "boucaque",
//       "bouffeur de chiens",
//       "bouffeuse de chiens",
//       "bougnoule",
//       "cagole",
//       "catin",
//       "chagnasse",
//       "chaudasse",
//       "chinetoque",
//       "ching chong",
//       "connard",
//       "connasse",
//       "crouille",
//       "débile",
//       "donzelle",
//       "enculé",
//       "fais pas ta meuf",
//       "fatma",
//       "FDP",
//       "fille de joie",
//       "fille facile",
//       "fille légère",
//       "fils de pute",
//       "fiotte",
//       "garce",
//       "gogole",
//       "gonzesse",
//       "gouine",
//       "grognasse",
//       "grosse vache",
//       "hystérique",
//       "macaque",
//       "mal-baisé",
//       "mal-baisée",
//       "mégère",
//       "nègre",
//       "négresse",
//       "négro",
//       "niakoué",
//       "niakouée",
//       "niaqué",
//       "niaquée",
//       "niaquoué",
//       "niaquouée",
//       "nigga",
//       "nigger",
//       "nique",
//       "nique ta mère",
//       "peau rouge",
//       "pédale",
//       "pédé",
//       "pimbêche",
//       "pouffiasse",
//       "putain",
//       "putasse",
//       "pute",
//       "racoleuse",
//       "retourne dans ton pays",
//       "sale arabe",
//       "sale bridé",
//       "sale juif",
//       "sale juive",
//       "sale musulman",
//       "sale musulmane",
//       "sale noir",
//       "sale trans",
//       "salope",
//       "singe noir",
//       "tafiole",
//       "tantouze",
//       "tapette",
//       "tapineuse",
//       "tarlouse",
//       "tchoin",
//       "teubé",
//       "toubab",
//       "trainée",
//       "travelo",
//       "va manger du chien",
//       "veille-peau",
//       "youpin",
//       "youpine",
//     ],
//     badWords = new RegExp("\\b" + BLACKLISTED.join("|") + "\\b", "gi");
//   console.log("badWords format ? 💧" + badWords);

//   chrome.runtime.onMessage.addListener(function (
//     request,
//     sender,
//     sendResponse
//   ) {
//     let userWords = request.message;
//     for (var i = 0; i < elements.length; i++) {
//       var element = elements[i];
//       checkText(element, userWords);
//       console.log("🍓");
//     }

//     // Callback
//     sendResponse({ message: "Content script has received that message ⚡" });
//   });

//   //Text
//   function replaceText(node, array) {
//     var text = node.nodeValue,
//       newText = text.replace(array, " 🌸 ");
//     //FIXME: regex seems to skip first-letter capitalized matches
//     return element.replaceChild(document.createTextNode(newText), node);
//   }

//   function checkText(element, array) {
//     for (var j = 0; j < element.childNodes.length; j++) {
//       var node = element.childNodes[j];
//       if (node.nodeType === 3) {
//         return replaceText(node, array);
//       }
//     }
//   }

//   //find and replace
//   for (var i = 0; i < elements.length; i++) {
//     var element = elements[i];
//     checkText(element, badWords);
//     console.log("🐶");
//   }
// })();
