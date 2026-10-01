function filterImages(category) {

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {

        if (category === "all") {
            card.style.display = "block";
        }
        else if (card.dataset.category === category) {
            card.style.display = "block";
        }
        else {
            card.style.display = "none";
        }

    });
}