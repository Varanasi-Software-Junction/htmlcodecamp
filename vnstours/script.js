// Function to show tour details when a tour card is clicked
function showTourDetails(tour) {
    const details = {
        tour1: {
            title: "Heritage Walk",
            description: "A detailed exploration of Varanasi's rich heritage.",
            image: "dummy-image1.jpg"
        },
        tour2: {
            title: "Evening Aarti Tour",
            description: "Witness the mesmerizing Ganga Aarti.",
            image: "dummy-image2.jpg"
        },
        tour3: {
            title: "Sarnath Day Trip",
            description: "Visit the historical site where Buddha gave his first sermon.",
            image: "dummy-image3.jpg"
        }
    };

    const tourDetail = details[tour];
    document.getElementById("tour-title").innerText = tourDetail.title;
    document.getElementById("tour-description").innerText = tourDetail.description;
    document.getElementById("tour-image").src = tourDetail.image;
}

// Live search functionality
document.getElementById("search").addEventListener("input", function() {
    const filter = this.value.toLowerCase();
    const cards = document.querySelectorAll(".tour-card");
    
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(filter)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
});
