console.log("🐶");
(function () {
  "use strict";

  let elements = document.getElementsByTagName("*"),
    BLACKLISTED = [
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
    ],
    badWords = new RegExp("\\b" + BLACKLISTED.join("|") + "\\b", "gi");

  // chrome.runtime.onMessage.addListener(function (request) {
  //   let newBadWords = request.message;
  //   console.log("👺 newbadwords : " + newBadWords);
  //   for (let index = 0; index < newBadWords.length; index++) {
  //     newBadWords.push(index);
  //   }
  // });

  console.log("content 🐶");
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("content 🐶" + message.addedWords);
    return true;
  });

  //Text
  function replaceText(node) {
    var text = node.nodeValue,
      newText = text.replace(badWords, " 🌸 ");
    //FIXME: regex seems to skip first-letter capitalized matches
    return element.replaceChild(document.createTextNode(newText), node);
  }

  function checkText(element) {
    for (var j = 0; j < element.childNodes.length; j++) {
      var node = element.childNodes[j];
      if (node.nodeType === 3) {
        return replaceText(node);
      }
    }
  }

  //find and replace
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    checkText(element);
  }
})();
