document.querySelectorAll('.bar').forEach(item => {
    item.addEventListener('click', function() {
        const container = document.getElementById('skillsContainer');
        const popup = container.querySelector('.info-popup');
        
        // Jeśli popup jest już aktywny, ukryj go
        if (container.classList.contains('popup-active')) {
            container.classList.remove('popup-active');
            popup.style.display = 'none';
        } else {
            container.classList.add('popup-active');
            popup.style.display = 'block';
            
            // Możesz tutaj dostosować tekst lub inne właściwości popupu, np.:
            // popup.innerHTML = 'Nowa informacja';
        }
    });
});


