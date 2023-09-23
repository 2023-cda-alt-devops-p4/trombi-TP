const positionsProfiles = [
    { left: 20, top: 30, name: "Theo Pierson" }, 
    { left: 40, top: 60, name: "Camille Lafrance" }, 
    { left: 40, top: 50, name: "Diego Garcia" },
    { left: 40, top: 30, name: "Alexandre Foucher" },
    { left: 40, top: 40, name: "Jonathan Moreschi" },
    { left: 40, top: 60, name: "Pierre Fraisse" },
    { left: 30, top: 60, name: "Yassine El Azzati" },
    { left: 40, top: 70, name: "Thomas Mortelette" },
    { left: 40, top: 80, name: "Zakaria Laskari" },
    { left: 20, top: 80, name: "Marine Beauvois" },
    { left: 70, top: 80, name: "Audrey Carpentier" },
    { left: 40, top: 90, name: "Nassim Deflandre" },
    { left: 40, top: 95, name: "Mélanie Chauvin" },
    { left: 10, top: 80, name: "Ludovic Phounphonh" }
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