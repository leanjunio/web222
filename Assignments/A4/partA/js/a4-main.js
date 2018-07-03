var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)

// Take data from "petData"
// Render in #main-table-body
const loadTableWithFilters = () => {
    petData.forEach(element => {
        let data = 
        `
        <tr>
            <td>
                <img src="${element.image.src}" alt="${element.image.alt}" height="${element.image.height}" width="${element.image.width}">
            </td>
            <td>
                <h4>${element.name}</h4>
                <p>${element.description}</p>
                <span>Age: ${element.age} years old.</span>
            </td>
        </tr>
        `

        $('#main-table-container').append(data);
    });
};
