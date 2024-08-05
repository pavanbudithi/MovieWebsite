let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

const filterForm = document.getElementById('filterForm');
filterForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(cb => cb.value);
    const selectedLanguages = Array.from(document.querySelectorAll('input[name="language"]:checked')).map(cb => cb.value);
    filterMovies(selectedCategories, selectedLanguages);
});

function filterMovies(selectedCategories, selectedLanguages) {
    const movies = document.querySelectorAll('.current-movie');
    movies.forEach(movie => {
        const movieCategory = movie.getAttribute('data-category').toLowerCase();
        const movieLanguage = movie.getAttribute('data-language').toLowerCase();
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.some(category => movieCategory.includes(category));
        const matchesLanguage = selectedLanguages.length === 0 || selectedLanguages.some(language => movieLanguage.includes(language));
        if (matchesCategory && matchesLanguage) {
            movie.style.display = '';
        } else {
            movie.style.display = 'none';
        }
    });
}

document.querySelectorAll('.buy-tickets').forEach(button => {
    button.addEventListener('click', function() {
      const movieTitle = this.closest('.current-movie').querySelector('.movie-title').textContent;
      console.log("movieTitle",movieTitle )
      
      window.location.href = `booking.html?movie=${encodeURIComponent(movieTitle)}`;
    });
  });