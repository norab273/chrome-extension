//This javascript is embedded into the page.
// Some of this javascript was provided by https://github.com/mjp2220/useless-chrome-extensions#text-replace
let ELEMENT = 1;
let DOCUMENT = 9;
let DOCUMENT_FRAGMENT = 11;
let TEXT = 3;

// Enter things that you'd like to replace
// You can add defaults here if you want
let BadWords = [
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
let REPLACE = ["🌸"];

//In this tab, listen for a message

chrome.runtime.onMessage.addListener(addToList);

function addToList(request, sender, sendResponse) {
  let userWords = JSON.parse(request.message);
  BadWords = BadWords.concat(userWords);
  walk(document.body);
  // Callback
  sendResponse({ message: "Content script has received that message ⚡" });
}

//replace text with emoji
walk(document.body);

function walk(node) {
  // Function from here for replacing text: http://is.gd/mwZp7E

  let child, next;

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
  let v = textNode.nodeValue;

  // Go through and BadWords/replace all the strings we've given it, using RegExp.
  for (let i = 0; i < BadWords.length; i++) {
    v = v.replace(new RegExp(`\\b${BadWords[i]}\\b`, "gi"), REPLACE[0]);
  }

  textNode.nodeValue = v;
}
