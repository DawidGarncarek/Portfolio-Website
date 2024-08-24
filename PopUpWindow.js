const textMap = {
    "element1": "Z językiem C#, mam styczność od początku studiów, który jest głównym językiem stosowanym na mojej uczelni. Posłużył mi w dużej mierze do napisania mojej aplikacji na prace inżynierską.",
    "element2": "AutoCad oraz Inventor używałem do tworzenia prostych modeli, głównie 3D. Mogę też tutaj dodać, że dość szybko pojmowałem wiedzę z obu programów i szybko tworzyłem proste modele takie jak łożysko.",
    "element3": "Z CSS mam styczność już od technikum i używam go praktycznie cały czas do urozmaicenia oraz ulepszania interfejsów swoich projektów czy aplikacji.",
    "element4": "To samo tyczy się z HTML, który jest nieodzownym elementem tworzenia moich projetków.",
    "element5": "JavaScript używam do tworzenia prostych skryptów, ulepszających działanie, niektórych elementów w moich aplikacjach oraz do pomocy przy tworzeniu animacji na stronach.",
    "element6": "Photoshopa używam sporadycznie, zwykle do prostej obróbki obrazów czy zdjęć, które chce umieścić w swoich projektach.",
    "element7": "Excel znam, nie używam zbyt często, ale wiem, że przydaje się dobre obeznanie z nim, czego doświadczyłem w poprzedniech pracy, gdzie wiele plików danych było w ten sposób eksportowane.",
    "element8": "Python z wszystkich wymienionych tutaj języków najmniej znam, posłużył mi w kilku projektach na przykład do utworzenia generatora danych do bazy danych.",
    "element9": "Z SQL jak i samymi bazami danych mam styczność od początku studiów oraz był on ważnym elementem w mojej poprzedniej pracy, gdzie moim zadaniem było między innymi tworzenie zapytań/procedur czy zarządzanie bazą.",
    "element10": "ASP.NET poznałem bardzo dobrze na studiach oraz przy pisaniu aplikacji internetowej na pracę inżynierską, który był główną składową całego mojego projektu."
};

const progressMap = {
    "element1": '<div class="progress-bar"><div class="ccc"><span>86%</span></div></div>',
    "element2": '<div class="progress-bar"><div class="autocad"><span>30%</span></div></div>',
    "element3": '<div class="progress-bar"><div class="css"><span>90%</span></div></div>',
    "element4": '<div class="progress-bar"><div class="html5"><span>95%</span></div></div>',
    "element5": '<div class="progress-bar"><div class="javascript"><span>56%</span></div></div>',
    "element6": '<div class="progress-bar"><div class="photoshop"><span>24%</span></div></div>',
    "element7": '<div class="progress-bar"><div class="excel"><span>72%</span></div></div>',
    "element8": '<div class="progress-bar"><div class="python"><span>22%</span></div></div>',
    "element9": '<div class="progress-bar"><div class="sql"><span>90%</span></div></div>',
    "element10": '<div class="progress-bar"><div class="aspnet"><span>82%</span></div></div>'
};

document.querySelectorAll('.bar').forEach(item => {
    item.addEventListener('click', function() {
        const container = document.getElementById('skillsContainer');
        const popup = container.querySelector('.info-popup');

        const bar = this.closest('.bar'); 
        const id = bar.getAttribute('data-id'); 
        const text = textMap[id]; 
        const progressBar = progressMap[id];

        popup.innerHTML = `${progressBar} <p class="progress-bar-text">${text}</p>`;
        
        if (container.classList.contains('popup-active')) {
            container.classList.remove('popup-active');
            popup.style.display = 'none';
        } else {
            container.classList.add('popup-active');
            popup.style.display = 'block';
        }
    });
});


