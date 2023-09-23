const dataProfiles = [
  {
    left: 32.5,
    top: 71,
    info: {
      name: "Audrey Carpentier",
      image: "assets/Photos/AudreyCarpentier.jpeg",
      city: "Fitz-James",
      stacks: "React, NodeJS, SQL",
      sports:
        "Salle de muscu une fois par semaine, boxe française, combat libre",
      passions:
        "Metal (brutal death, gothic, grind, power metal - <i>'Je déteste 'Night Wish'</i>, black metal), bachata, musique classique (Mozart, opéra), bénévole à la Jeune Chambre économique (présidente régionale Hauts-de-France cette année), 2 filles de 11 ans et 2 ans, 5-6 poules (Brienne, Coucou des Flandres, Sebright)",
      github: "https://github.com/AudreyAAOO",
      linkedIn: "https://www.linkedin.com/in/audrey3010/",
    },
  },
  {
    left: 34.5,
    top: 44,
    info: {
      name: "Theo Pierson",
      image: "assets/Photos/ThéoPierson.jpg",
      city: "Lestrem",
      stacks: "React, NextJS, PostGre",
      sports: "MMA",
      passions:
        "Lecture (romans, philosophie - <i>'J'ai envie de faire un sparing avec Platon'</i>), 'Rocky', 'Game of Thrones', 'One Piece'",
      github: "https://github.com/TheoPIERSON",
      linkedIn: "https://www.linkedin.com/in/theo-pierson-5bab87216/",
    },
  },
  {
    left: 38,
    top: 81.1,
    info: {
      name: "Camille Lafrance",
      image: "assets/Photos/CamilleLafrance.jpeg",
      city: "Paris (Montsouris)",
      stacks:
        "Angular, React, TypeScript, Java, Spring Boot, Swift/SwiftUI, MySQL",
      sports: "Roller quad, yoga",
      passions:
        "Cinéma (abonnement UGC), nanars, podcasts (cinéma, politique, true crime), romans, romans graphiques, essais, <i>'Mon chat Mao'</i>, balades dans la nature",
    },
  },
  {
    left: 40,
    top: 79,
    info: {
      name: "Diego Garcia",
      image: "assets/Photos/DiegoGarcia.png",
      city: "Paris (Nation)",
      stacks: "React, TypeScript, .NET, CSharp, NodeJS",
      sports: "Marche",
      passions: "Lecture (romans, non fiction), rock latino américain",
      github: "https://github.com/dgo-gco",
      linkedIn: "https://www.linkedin.com/in/diego-garciaco",
    },
  },
  {
    left: 52,
    top: 57.3,
    info: {
      name: "Alexandre Foucher",
      image: "assets/Photos/AlexandreFoucher.jpeg",
      city: "Valenciennes",
      stacks: "React, NodeJS, Java, PHP, VB.NET",
      sports: "Natation",
      passions:
        "Jeux vidéo ('Civilization', 'Age of Empire', 'Deep Rock Galactic', mangas ('Darwin’s Game'), animes ('Steins;Gate'), electro, metal, musique classique",
      github: "https://github.com/AlexTakoDev",
      linkedIn: "https://www.linkedin.com/in/alexandre-foucher-0050571a4/",
    },
  },
  {
    left: 44,
    top: 83,
    info: {
      name: "Jonathan Moreschi",
      image: "assets/Photos/JonathanMoreschi.jpeg",
      city: "Gretz-Armainvilliers",
      stacks: "React, NextJS, NodeJS, PHP Symphony, PHP Laravel, Flutter",
      passions:
        "Lecture (BD, romans, mangas), jeux vidéo (stratégie, 'Civilization', 'Crusader king 3'), fourmis - myrmécologie",
      github: "https://github.com/Eromnoj",
      linkedIn: "https://www.linkedin.com/in/jomoreschi/",
    },
  },
  {
    left: 33.4,
    top: 53,
    info: {
      name: "Yassine El Azzati",
      image: "assets/Photos/YassineElAzzati.jpeg",
      city: "Arras",
      stacks: "Angular, Java, Spring Boot, Docker",
      sports: "Foot, sports de combat",
      passions:
        "Jeux vidéo ('Fifa', jeu de civilisation, 'Candy Crush', <i>'Tout tout tout'</i>), ses chats Nala et Jasmine",
      github: "https://github.com/YassineElazzati",
      linkedIn: "https://www.linkedin.com/in/yassine-el-azzati-7b5a331b8/",
    },
  },
  {
    left: 39.2,
    top: 42.7,
    info: {
      name: "Thomas Mortelette",
      image: "assets/Photos/ThomasMortelette.jpeg",
      city: "Lille (Vieux Lille)",
      stacks:
        "PHP, TypeScript, CSharp, React, VueJS, Angular, Symphony, ASP.NET, NodeJS, Laravel, GraphQL, PostGre",
      sports: "",
      passions:
        "Jeux vidéo (MMORPG, FPS, tous les genres), cinéma (horreur), espace",
      github: "https://github.com/DKHexDev",
      linkedIn: "https://www.linkedin.com/in/thomas-mortelette-845318190/",
    },
  },
  {
    left: 40.7,
    top: 42,
    info: {
      name: "Marine Beauvois",
      image: "assets/Photos/MarineBeauvois.jpeg",
      city: "La Madeleine",
      stacks: "Ruby, Ruby on Rails, Cobol",
      sports: "RPM (vélo), cardio, body pump, Pilates, yoga, musculation",
      passions:
        "Cinéma, séries britanniques ('Bridgerton', 'Peaky Blinders'), restaurant (indien, asiatique), cours d’agility avec son chien Rio, son chat Rani, tchai latte, développement personnel, podcast",
      github: "https://github.com/mbeauvois",
      linkedIn: "https://www.linkedin.com/in/marine-beauvois/",
    },
  },

  {
    left: 42.2,
    top: 42,
    info: {
      name: "Zakaria Laskari",
      image: "assets/Photos/ZakariaLaskari.png",
      city: "Roubaix",
      stacks: "Symphony, PHP, React, TypeScript",
      sports:
        "Street work out (musculation et figures), foot, basket, boxe anglaise",
      passions:
        "Jeux vidéo (tous les genres), mangas, animes ('Dragon Ball', 'Parasite', 'Dr Stone'), comics ('SpiderMan', 'Flash', 'Batman')",
      github: "https://github.com/zakkios",
      linkedIn: "https://www.linkedin.com/in/zakaria-laskari/",
    },
  },
  {
    left: 42.6,
    top: 44,
    info: {
      name: "Mélanie Chauvin",
      image: "assets/Photos/MélanieChauvin.jpeg",
      city: "Lille (Saint-Maurice-Pellevoisin)",
      stacks: "Quarkus, VueJS, Java, Angular",
      sports: "Taekwondo",
      passions:
        "Manger (fan de poulet), boire de l’alcool, lecture (suspense, thriller, <i>'Du crime, du sang'</i>), karaoké, Champagne",
      github: "https://github.com/Melcn",
      linkedIn: "https://www.linkedin.com/in/melanie-cn/",
    },
  },
  {
    left: 38.7,
    top: 45,
    info: {
      name: "Pierre Fraisse",
      image: "assets/Photos/PierreFraisse.jpeg",
      city: "Lille (Bois blancs)",
      stacks: "Laravel, Flutter, Angular, .NET",
      sports: "Boxe thaï",
      passions:
        "Guitare acoustique, chant, tous les genres de musique, cinéma - <i>'Tous les genres aussi'</i>",
      github: "https://github.com/PierreFrs",
      linkedIn: "https://www.linkedin.com/in/pierre-fraisse-83b4b5253/",
    },
  },

  {
    left: 42,
    top: 46.2,
    info: {
      name: "Nassim Deflandre",
      image: "assets/Photos/NassimDeflandre.jpeg",
      city: "Ronchin",
      stacks: "React, .NET, NodeJS, NoSQL",
      sports: "Foot",
      passions:
        "Séries ('Vikings'), jeux vidéo ('Fifa', 'Call Of Duty'), 1 fille de 2 ans et demi et 1 garçon nouveau-né",
      github: "https://github.com/NassJs",
      linkedIn: "https://www.linkedin.com/in/nassim-d-aaa48a204/",
    },
  },
  {
    left: 40.3,
    top: 46.3,
    info: {
      name: "Ludovic Phounphonh",
      image: "assets/Photos/LudovicPhounphonh.jpg",
      city: "Templemars",
      stacks: "React, React Native, Java, Spring Boot, PostGre, MySQL",
      sports: "Promener son chien Rebus, flâner en forêt, randonnées",
      passions:
        "Faire à manger, manger, metal, musique classique, guitare, visite des châteaux",
      github: "https://github.com/Ludoph",
      linkedIn: "https://www.linkedin.com/in/092155113",
    },
  },
];

const modal = document.getElementById("modal-profile");
const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-image");
const modalDescription = document.getElementById("modal-description");
const closeButton = document.querySelector(".close");
const mapContainer = document.querySelector(".map-container");

dataProfiles.forEach((point, index) => {
  const pointElement = document.createElement("div");
  pointElement.classList.add("point");
  pointElement.style.left = point.left + "%";
  pointElement.style.top = point.top + "%";
  pointElement.style.backgroundImage = "url(" + point.info.image + ")";
  pointElement.dataset.index = index;

  mapContainer.appendChild(pointElement);

  /* Open modal */
  pointElement.addEventListener("click", () => {
    const person = dataProfiles[index];

    modalTitle.textContent = person.info.name;
    modalImage.src = person.info.image;

    document.getElementById("modal-city").textContent = person.info.city;
    document.getElementById("modal-stacks").textContent = person.info.stacks;
    document.getElementById("modal-sports").textContent = person.info.sports;
    document.getElementById("modal-passions").textContent =
      person.info.passions;
    document.getElementById("modal-github").href = person.info.github;
    document.getElementById("modal-linkedIn").href = person.info.linkedIn;

    // Display modal
    modal.style.display = "block";
  });
});

/* Close modal */
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
