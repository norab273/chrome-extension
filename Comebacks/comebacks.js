const grid = document.querySelectorAll(".grid");
const colors = document.querySelectorAll("article");
const alertMessageElement = document.querySelector(".alert-message");

const messagesAntiRacisme = [
  "As-tu déjà pensé à ce que cela représente de devoir laisser derrière soi son foyer entier parce que l'on doit fuir ?",
  "Votre message est très offensant pour la communauté juive/musulmane...",
  "Avez-vous déjà pris un moment pour réfléchir à la douleur et à la frustration que ressent une personne qui est jugée et traitée différemment uniquement à cause de la couleur de sa peau ?",
  "Avez-vous déjà pris un moment pour imaginer la détresse et la peur qu'éprouve une personne qui doit quitter son pays, sa famille et tout ce qu'elle connaît, pour chercher la sécurité et une vie meilleure ?",
  "En France, la loi interdit la discrimination raciale, ethnique ou religieuse en toutes circonstances. Le racisme est un délit puni par la loi.",
  "Le racisme est la forme de protection des simples d'esprit.",
  "Le racisme est contraire aux principes fondamentaux de l'humanité et aux lois internationales qui protègent les droits des humains. En tant que tel, il ne peut être toléré.",
  "Il existe une seule race humaine, elle est composée de plus de sept milliard d'individus tous uniques et semblables.",
  "Le racisme est la paresse de la pensée pour ne pas dire le refus de penser. Il est plus facile de répandre la haine de l'étranger que le respect de ce qui est différent.",
  "Le racisme se répand quand s'accentuent le mal être et le besoin d'arrogance pour se sentir exister et surtout se considérer supérieur à autrui.",
  "Le racisme est scientifiquement stupide. Le fait de naître dans une famille ou un pays est uniquement lié au hasard et déconnecté de tout mérite personnel.",
  "Le racisme n'est pas une opinion, mais un délit.",
  "Le racisme sert de manteau à l'ignorance, à la petitesse, aux frustrations et aux aigreurs des personnes complexées et faibles d'esprit.",
  "La science a montré que la diversité génétique d’un groupe à l’autre est plus faible que celle qui distingue les individus entre eux.",
  "Les gens se sont déplacés à travers le monde tout au long de l'histoire et ont eu des relations sexuelles chaque fois qu'ils le pouvaient. La pureté raciale est donc une pure fantaisie. Chaque nazi a des ancêtres juifs, chaque suprémaciste blanc a des ancêtres au Moyen-Orient. Chaque raciste a des ancêtres africains, indiens, est-asiatiques, ainsi que tous les autres",
  "Conformément à la loi, toute discrimination basée sur la race est illégale. Nous devrions tous promouvoir l'égalité devant la loi et l'accès équitable aux opportunités.",
  "La recherche sociologique montre que la diversité ethnique et culturelle renforce nos sociétés en encourageant l'innovation, la créativité et la compréhension interculturelle.",
];

const racismeContainer = document.getElementById("anti-racisme-container");

messagesAntiRacisme.forEach((message) => {
  const article = document.createElement("article");
  article.textContent = message;
  article.classList.add("message-anti-racisme");
  racismeContainer.appendChild(article);
  article.addEventListener("click", () => {
    copyToClipboard(message);
  });
});

const messagesAntiSexisme = [
  "Les commentaires sexuels non désirés laissent des traces. Ils réduisent une personne à un objet, négligeant son humanité et sa dignité.",
  "Essayez de vous mettre à la place d'une femme qui fait face à la discrimination et au sexisme quotidiennement. Comment vous sentiriez-vous si vos compétences et contributions étaient constamment sous-estimées ?",
  "Essayez de vous mettre à la place de quelqu'un qui vit dans la peur et l'angoisse en raison du harcèlement sexuel constant. Comment vous sentiriez-vous si votre sécurité et votre dignité étaient compromises chaque jour ?",
  "Il est essentiel de comprendre l'impact dévastateur que le harcèlement sexuel peut avoir sur la vie d'une personne. Chaque individu mérite le respect et l'intégrité de son propre corps et de son esprit.",
  "Imaginez devoir naviguer dans un monde où vos compétences et votre valeur sont souvent occultées par des commentaires non sollicités et dégradants.",
  "Le féminisme n’a jamais tué personne. Le machisme tue tous les jours",
  "Le sexisme n'est pas une opinion, mais un délit.",
  "Personne n’est plus arrogant envers les femmes, plus agressif et méprisant, qu’un homme inquiet pour sa virilité.",
  "1/3 des femmes dans le monde ont déjà subi des violences physiques ou sexuelles.",
  "Les femmes demandent des promotions et des augmentations aussi souvent que les hommes : 31% des femmes vs. 29% des hommes tous les deux ans.",
  "Si la totalité du travail de soin non rémunéré effectué par les femmes dans le monde était réalisée par une entreprise, cette dernière aurait un chiffre d’affaires de 10 000 milliards de dollars, soit 43 fois celui d’Apple.",
  "1h30 : c'est le temps supplémentaire par jour que consacrent les femmes aux tâches domestiques par rapport aux hommes !",
  "L’humour sexiste n’est pas un amusement bénin. Il peut affecter la perception qu’ont les hommes de leur environnement social et leur permet de se sentir à l’aise avec des comportements sexistes, sans avoir peur de la désapprobation de leurs pairs.",
  "Si les femmes qui aiment les femmes peuvent se comporter normalement quand une femme porte une jupe, peut-être que le problème ne vient pas des jupes.",
  "L’admission des femmes à l’égalité parfaite serait la marque la plus sûre de la civilisation et elle doublerait les forces intellectuelles du genre humain.",
  "Une femme n’est jamais responsable des violences qu’elle subit. Jamais.",
  "En 2022, 118 femmes ont été tuées par leur conjoint ou ex-conjoint en France, dont 24 avaient signalé les faits aux forces de l’ordre et 19 avaient déposé plainte.",
  "Féminicides : 30% des auteurs avaient été condamnés pour des faits de violence. 29 % des plaintes ne sont pas transmises au procureur par la police. 80% des plaintes communiquées à la justice sont classées sans suite.",
];

const antiSexismContainer = document.getElementById("anti-sexisme-container");

messagesAntiSexisme.forEach((message) => {
  const article = document.createElement("article");
  article.textContent = message;
  article.classList.add("message-anti-sexisme");
  antiSexismContainer.appendChild(article);
});

const messagesLGBT = [
  "Comment vous sentiriez-vous si l'amour que vous ressentez pour quelqu'un était constamment jugé et critiqué ?",
  "Je vous encourage à réfléchir à l'impact de vos paroles sur ceux qui luttent déjà pour l'acceptation et le droit d'aimer librement.",
  "Avez-vous envisagé l’impact de vos commentaires sur des personnes qui luttent déjà pour l’acceptation et la reconnaissance de leur identité ?",
  "Considérez la force qu'il faut pour vivre authentiquement dans une société qui n'est pas toujours accueillante. Vos mots peuvent soutenir ou saper cette force.",
  "L'homophobie n'est pas une opinion, mais un délit.",
  "L’homosexualité, la bisexualité ou la transidentité ne sont ni des maladies ni des troubles psychologiques. Chercher à vouloir 'guérir' ne sert à rien, car il n’y a rien à soigner.",
  "On ne choisit ni son orientation sexuelle ni son identité de genre. Elles sont simplement des composantes de notre personne.",
  "Depuis 2004, les actes homophobes sont punis par la loi au même titre que le racisme et les autres discriminations. Par exemple, les injures homophobes sont passibles de 6 mois d’emprisonnement et de 22 500 euros d’amende.",
  "L'homophobie sert de manteau à l'ignorance, à la petitesse, aux frustrations et aux aigreurs des personnes complexées et faibles d'esprit.",
  "On vit dans un drôle de monde dans lequel beaucoup préfèrent voir deux hommes se battre plutôt que deux hommes qui s’embrassent",
  "Tous les jeunes, indépendamment de leur orientation sexuelle ou de leur identité, méritent un environnement sûr et favorable leur permettant de réaliser leur plein potentiel.",
  "Les personnes trans sont exposées à un risque d’idées et de conduites suicidaires tout au long de leur vie. Dans une méta-analyse à partir d’études américaines et canadiennes, ayant inclus au moins 51 % de personnes de 18 ans ou plus, la prévalence moyenne sur la vie entière des idées suicidaires a été de 46,6 % (34 études) et des tentatives de suicides de 27,2 %",
  "D’après le rapport de l’IGAS, la précarité matérielle qui touche de nombreuses personnes trans est directement liée à la stigmatisation dont elles sont victimes.",
];

const LGBTContainer = document.getElementById("LGBT-container");

messagesLGBT.forEach((message) => {
  const article = document.createElement("article");
  article.textContent = message;
  article.classList.add("message-LGBT");
  LGBTContainer.appendChild(article);
});

const messagesGeneral = [
  "Comment te sentirais-tu si tu étais réduit à ton apparence ?",
  "Comment vous sentiriez-vous si les gens parlaient de vous comme ça ?",
  "Les mots ont du poids. Un commentaire haineux peut avoir un effet durable, même si c’est dit en passant.",
  "Considérez l'impact de vos paroles. Pour certains, elles peuvent résonner bien plus longtemps et profondément que vous ne le pensez.",
  "Je vous invite à réfléchir à l'impact de vos mots sur les personnes qui luttent déjà pour l'acceptation et l'égalité dans une société souvent intolérante.",
  "Pouvez-vous imaginer le sentiment d'impuissance et de découragement qui accompagne la discrimination au travail, où vos compétences et vos contributions sont ignorées ou minimisées en raison de votre genre, de votre race ou de votre orientation sexuelle ?",
  "Comment vous sentiriez-vous si chaque sortie dans la rue était accompagnée d'anxiété et de peur en raison de la discrimination et des jugements constants des autres ?",
  "Quand il sanctionne une couleur de peau, une appartenance ethnique, un genre ou une orientation sexuelle, l’humour devient une arme méprisante et méprisable.",
  "Il est évident que la liberté de rire de tout doit demeurer, tout comme doit être respectée celle de ne pas adhérer à un humour venimeux, voire de le mépriser.",
  "Selon la loi française, la discrimination en ligne est illégale. L'article 225-1 du Code pénal condamne toute forme de discrimination fondée sur la race, la religion, l'orientation sexuelle, ou d'autres caractéristiques.",
  "Les préjugés sont souvent basés sur des stéréotypes erronés. Il est essentiel de se fier à des faits et à des données scientifiques plutôt qu'à des généralisations simplistes.",
  "La discrimination en ligne peut avoir des conséquences légales graves, y compris des sanctions pénales et civiles. Il est important de respecter la loi.",
];

const generalContainer = document.getElementById("general-container");

messagesGeneral.forEach((message) => {
  const article = document.createElement("article");
  article.textContent = message;
  article.classList.add("message-general");
  generalContainer.appendChild(article);
});

// Fonction pour copier le texte dans le presse-papiers
async function copyToClipboard(text) {
  if (!navigator.clipboard) {
    // Gérer le cas où le presse-papiers n'est pas pris en charge
    console.log("🤷 Copy to clipboard not supported");
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    console.log("Texte copié dans le presse-papiers : " + text);
  } catch (err) {
    console.error("Erreur lors de la copie dans le presse-papiers : ", err);
  }
}

// Ajout d'écouteurs d'événements aux éléments de la grille
// Supposons que chaque "article" est un enfant direct de chaque élément de "grid".
for (let i = 0; i < grid.length; i++) {
  grid[i].addEventListener("click", function (event) {
    if (event.target.tagName === "ARTICLE") {
      copyToClipboard(event.target.textContent);
      const newParagraph = document.createElement("p");
      newParagraph.textContent = "Élément copié";
      newParagraph.className = "alert-message";

      // Insérer le nouveau paragraphe en dessous de l'article cliqué
      event.target.parentNode.insertBefore(
        newParagraph,
        event.target.nextSibling
      );
    }
  });
}
