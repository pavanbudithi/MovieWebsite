const theatersByLocation = {
    "Lubbock": ["AMC Empire 25", "Regal Union Square"],
    "Dallas": ["ArcLight Hollywood", "Pacific Theatres"],
    "Chicago": ["Showplace ICON", "AMC River East 21"]
};

const moviesByTheater = {
    "AMC Empire 25": ["Inception", "The Commuter", "Bahubali"],
    "Regal Union Square": ["Arrival", "Sachin", "Arjun Reddy"],
    "ArcLight Hollywood": ["JohnWick 3", "Kill", "Your Name"],
    "Pacific Theatres": ["Inception", " Kill", " Bahubali"],
    "Showplace ICON": ["Arrival", "Sachin", "The Commuter"],
    "AMC River East 21": ["Arjun Reddy", "JohnWick 3", "Your Name"]
};

document.getElementById('location').addEventListener('change', function () {
    const location = this.value;
    const theaterSelect = document.getElementById('theater');
    theaterSelect.innerHTML = '<option value="" disabled selected>Select a theater</option>';
    
    if (location) {
        theatersByLocation[location].forEach(theater => {
            const option = document.createElement('option');
            option.value = theater;
            option.textContent = theater;
            theaterSelect.appendChild(option);
        });
    }
});

document.getElementById('theater').addEventListener('change', function () {
    const theater = this.value;
    const movieSelect = document.getElementById('movie');
    movieSelect.innerHTML = '<option value="" disabled selected>Select a movie</option>';
    
    if (theater) {
        moviesByTheater[theater].forEach(movie => {
            const option = document.createElement('option');
            option.value = movie;
            option.textContent = movie;
            movieSelect.appendChild(option);
        });
    }
});

document.getElementById('bookingForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const location = document.getElementById('location').value;
    const theater = document.getElementById('theater').value;
    const movie = document.getElementById('movie').value;
    
    alert(`Ticket booked for ${movie} at ${theater}, ${location}!`);
});
