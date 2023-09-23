const positionsProfiles = [
    { left: 34.5, top: 44, name: "Theo Pierson" }, 
    { left: 38, top: 83, name: "Camille Lafrance" }, 
    { left: 40, top: 80, name: "Diego Garcia" },
    { left: 52.7, top: 58, name: "Alexandre Foucher" },
    { left: 45, top: 85, name: "Jonathan Moreschi" },
    { left: 39.5, top: 46, name: "Pierre Fraisse" },
    { left: 34, top: 54, name: "Yassine El Azzati" },
    { left: 40.1, top: 44, name: "Thomas Mortelette" },
    { left: 42, top: 43.5, name: "Zakaria Laskari" },
    { left: 41.2, top: 44, name: "Marine Beauvois" },
    { left: 33, top: 73, name: "Audrey Carpentier" },
    { left: 42.2, top: 46.2, name: "Nassim Deflandre" },
    { left: 42, top: 45, name: "Mélanie Chauvin" },
    { left: 41, top: 47.8, name: "Ludovic Phounphonh" }
];

const pointContainer = document.querySelector('.map-container');

positionsProfiles.forEach((point, index) => {
    const pointElement = document.createElement('div');
    pointElement.classList.add('point');
    pointElement.style.left = point.left + '%';
    pointElement.style.top = point.top + '%';
    pointElement.dataset.index = index; 

    pointContainer.appendChild(pointElement);

    
    pointElement.addEventListener('click', () => {
        alert(`Ceci est ${point.name}`);
    });
});