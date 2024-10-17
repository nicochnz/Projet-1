//*********************** QUESTION DU MODE FACILE  ***********************
export const questions = [
  {
    question: "Quelle est la capitale de la France ?",
    answers: ["Paris", "Bordeaux", "Lyon", "Marseille"],
    description:
      "Paris devient définitivement la capitale en 1792, malgré, des défaites militaires contraignant des gouvernements à s'exiler hors de Paris, sans enlever à la ville son statut",
    correct: 0,
  },
  {
    question: "Que représentent les mascarons ?",
    answers: [
      " Ornement d’inspiration multiple se trouvant principalement en haut des façades",
      "C'est un petit gâteau",
      "Un masque porté lors des festivals bordelais",
      "Un accessoire de mode du XVIIe siècle",
    ],
    description:
      "Bordeaux présente plus de 3 000 mascarons qui participent à l'ornementation des façades et des fontaines de la ville. ",
    correct: 0,
  },
  {
    question:
      "Qu’était le stade Chaban-Delmas avant d’être dédié au foot et au rugby ?",
    answers: [
      "Un pré où broutaient des chèvres",
      "Un vélodrome",
      "Un amphithéâtre romain",
      " Un parking pour carrosses",
    ],
    description:
      "Né en 1924, avant le stade Chaban, le premier parc des sports Lescure fut imaginé par un certain Robert Hüe, pour accueillir un grand vélodrome. ",
    correct: 1,
  },
  {
    question: "Quand est apparu le premier tramway à Bordeaux ?",
    answers: ["1932", "2003", "2000", "1880"],
    description:
      "Lors de sa mise en circulation le 4 mai 1880, la première ligne bordelaise présentait des tramways tractés par des chevaux.",
    correct: 3,
  },
  {
    question: "Qu’est donc le Palais Rohan ?",
    answers: [
      "Un château dans Le Seigneur des Anneaux",
      "L’actuelle mairie de Bordeaux.",
      "Les bâtiments composant la Place de la Bourse.",
      "Une échoppe célèbre pour ses huîtres.",
    ],
    description:
      "Palais impérial de Napoléon Ier en 1808 et palais royal en 1815 sous Louis XVIII, le palais Rohan devient hôtel de ville en 1835. ",
    correct: 1,
  },
  {
    question: "Combien de lignes possède le Tramway de la ville de Bordeaux ?",
    answers: ["2", "4", "6", "8"],
    description: "Les lignes portent les noms A, B, C et D",
    correct: 1,
  },
  {
    question: "Lequel de ces quartiers n’est pas situé à Bordeaux ?",
    answers: [
      "Quartier Pey-Berland",
      "Quartier Saint-Pierre",
      "Quartier Mériadeck",
      "Quartier Tannique",
    ],
    description:
      "La ville est découpée en huit quartiers officiels, chacun comprenant plusieurs quartiers informels. ",
    correct: 3,
  },

  {
    question: "Combien de ponts y a-t-il sur l’agglomération bordelaise ?",
    answers: ["3", "4", "5", "6"],
    description:
      "Bordeaux métropole possède huit ponts qui traversent la Garonne ; du nord au sud : le pont d'Aquitaine, le pont Jacques-Chaban-Delmas, le pont de pierre, le pont Saint-Jean, le pont ferroviaire, la passerelle Eiffel (désaffectée), le pont Simone-Veil et le pont François-Mitterrand.",
    correct: 2,
  },

  {
    question: "Que trouve-t-on sur le nouveau blason de la ville de Bordeaux ?",
    answers: [
      "3 demi-cercles",
      "3 croissants",
      "3 triangles isocèles",
      "3 bouteilles de vins",
    ],
    description:
      "Il s’agit de trois croissants de lune entrelacés que l'on appelle aussi le chiffre de Bordeaux.",
    correct: 1,
  },

  {
    question: "Quelle est le nom de la vague bordelaise ?",
    answers: ["Le mascaret", "Le mascara", "La mascarade", "Le masque à Ray"],
    description:
      "Le mascaret correspond à une brusque surélévation de l'eau d'un fleuve ou d'un estuaire provoqué par l'onde de la marée montante lors des grandes marées.Imperceptible la plupart du temps, il se manifeste au moment des nouvelles et pleines lunes. ",
    correct: 0,
  },
];
//*********************** QUESTIONS DU MODE DIFFICILE ***********************
export const questions2 = [
  {
    question: "En quelle année l’Union Bordeaux Bègles a-t-elle été créée ?",
    answers: ["1969", "1991", "2007", "2006"],
    description:
      "L'Union Bordeaux Bègles né de la fusion en 2006 du Stade bordelais université club et du Club athlétique béglais. Il est basé à Bègles dans la banlieue sud de Bordeaux en Gironde.",
    correct: 3,
  },
  {
    question: "Quel est le surnom donné à la ville de Bordeaux ?",
    answers: [
      "Port de la Gazette",
      "Port des Vignerons",
      "Port de la Bastide",
      "Port de la Lune",
    ],
    description:
      "Le port de la Lune est le nom donné au port de Bordeaux depuis le Moyen Âge, par un large méandre en forme de croissant, que décrit la Garonne lorsqu'elle passe dans la ville.",
    correct: 3,
  },
  {
    question: "Combien d’habitants possède la métropole de Bordeaux en 2019 ?",
    answers: ["495 000", "820 000", "780 000", "1 000 000"],
    description: "Chiffre de l'Insee en 2019",
    correct: 1,
  },
  {
    question: "D'où vient le nom de Bordeaux ?",
    answers: [
      "De l’ancien nom latin Burdigala",
      "D’une légende sur les eaux du port",
      "Des bordures du fleuve",
      "D’une famille noble locale.",
    ],
    description:
      "« Burdigala » serait composé de deux racines aquitaniques burd- qui signifie « boueux » et de cal- qui voudrait dire « abri, crique » et signifierait à peu près « abri dans les marais » en (proto-basque). Ce nom a évolué en Bordigala, puis Bordale en basque, Bordèu en gascon et « Bordeaux » en français.",
    correct: 0,
  },
  {
    question: "Bordeaux a t-elle déjà été la capitale de la France ?",
    answers: [
      "Vrai",
      "Faux",
      "Seulement capitale économique",
      "C'est la capitale de la chocolatine",
    ],
    description:
      "Pendant la Première Guerre mondiale, le gouvernement français déménagea brièvement la capitale à Bordeaux, de peur que Paris tombe rapidement aux mains des Allemands. Il en a été de même entre le 14 et 28 juin 1940, devant la débandade contre l’Allemagne nazie, le gouvernement s’arrête quelques jours à Bordeaux avant la signature de l’armistice du 22 juin 1940 où l’Allemagne inclut Bordeaux dans la zone occupée.",
    correct: 0,
  },
  {
    question: "Qu’est donc le bordeluche ?",
    answers: [
      "Un sac à vin bordelais.",
      "Une danse traditionnelle bordelaise",
      "Le vieux parlé bordelais. ",
      "Une sorte de fromage.",
    ],
    description:
      "Le bordeluche est un registre de langue autrefois très usité à Bordeaux. Il a perdu un peu de terrain, mais beaucoup de Bordelais emploient des mots spécifiques à leur région, sans le savoir. Ca daille gavé !",
    correct: 2,
  },
  {
    question:
      "Qui était Pey Berland, un homme important dans l’histoire de la ville de Bordeaux ?",
    answers: [
      "Un écrivain de Bordeaux",
      "Un homme politique de Bordeaux",
      "Un archevêque de Bordeaux",
      "Un roi de France",
    ],
    description:
      "Il est archevêque de Bordeaux de 1430 à 1456. Pey Berland lutta pour rétablir l'image de l'Église dans son diocèse. Le plus célèbre monument qu'il fit élever reste la tour qui porte son nom, construite derrière l'abside de la cathédrale Saint-André à Bordeaux.",
    correct: 2,
  },
  {
    question:
      "Sur une carte, où se situe Mérignac par rapport à la ville de Bordeaux ?",
    answers: ["Au Nord", "Au Sud", "A l'Est", "A l'Ouest"],
    description:
      "On peut voir que Mérignac est à gauche de Bordeaux, donc à l’ouest de la ville.",
    correct: 3,
  },
  {
    question:
      "Laquelle de ces affirmations est vraie concernant la ville de Bordeaux ?",
    answers: [
      "C'est le plus grand port Atlantique de France",
      "C'est le berceau de la Franc-maçonnerie au siècle des lumières",
      "C'est l'ancienne capitale du royaume de Majorque",
      "C'est une ville qui a été connue pour son vin rouge",
    ],
    description:
      "Connue pour son vin blanc, La conversion vers le vin rouge remonte aux années 1970 et pour information, La Rochelle est un plus grand port que Bordeaux sur l’Atlantique.",
    correct: 1,
  },
  {
    question:
      "Laquelle de ces personnalités politiques n’a jamais été maire de Bordeaux ?",
    answers: [
      "Jacques Chaban-Delmas",
      "Alain Juppé",
      "Pierre Hurmic",
      "Jacques Attali",
    ],
    description:
      "Jacques Attali, né le 1er novembre 1943 à Alger, est un économiste, homme politique, ancien haut fonctionnaire français, chef d'entreprise, écrivain et chef d'orchestre. ",
    correct: 3,
  },
];
