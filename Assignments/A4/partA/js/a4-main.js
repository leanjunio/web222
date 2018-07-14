var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)

// Take data from "petData"
// Render in #main-table-body

window.onload = () => {
    loadTableWithFilters();
};

const loadTableWithFilters = () => {
    petData.forEach(element => {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let td2 = document.createElement("td");
        let img = document.createElement("img");
        let h4 = document.createElement("h4");
        let p = document.createElement("p");
        let span = document.createElement("span");

        img.setAttribute("src", element.image.src);
        img.setAttribute("alt", element.image.alt);
        img.setAttribute("height", element.image.height);
        img.setAttribute("width", element.image.width);

        h4.innerHTML = element.name;
        p.innerHTML = element.description;
        span.innerHTML = "Age: " + element.age + " years old.";

        td.appendChild(img);
        td2.appendChild(h4);
        td2.appendChild(p);
        td2.appendChild(span);

        tr.appendChild(td);
        tr.appendChild(td2);

        document.getElementById('main-table-body').appendChild(tr);
    });
};

// must be invoked when the user clicks "Dogs"
const filterDog = () => {
    filterType = 'dog';
    loadTableWithFilters();
}

// must be invoked when the user clicks "Cats
const filterCat = () => {
    filterType = 'cat';
    loadTableWithFilters();
}

// must be invoked when the user clicks "Birds" 
const filterBird = () => {
    filterType = 'bird';
    loadTableWithFilters();
}

//  must be invoked when the user clicks "< 1 year" 
const filter_zero_1  = () => {
    filterAgeMin = 0;
    filterAgeMax = 1;
    loadTableWithFilters();
}

// must be invoked when the user clicks "1 - 3 years" 
const filter_1_3  = () => {
    filterAgeMin = 1;
    filterAgeMax = 3;
    loadTableWithFilters();
}

// must be invoked when the user clicks "4+ years"
const filter_4_plus  = () => {
    filterAgeMin = 4;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}

// must be invoked when the user clicks "All Pets
const filterAllPets  = () => {
    filterType = '';
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}
