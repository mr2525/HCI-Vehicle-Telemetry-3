function openFilterPopup() {
    document.getElementById("filterPopup").style.display = "block";
    document.getElementById("grayOverlay").style.display = "block";
  }

  function closeFilterPopup() {
    document.getElementById("filterPopup").style.display = "none";
    document.getElementById("grayOverlay").style.display = "none";
  }

  function applyFilters() {
    // Get selected filter values
    const region = document.getElementById("region").value;
    const district = document.getElementById("district").value;
    const state = document.getElementById("state").value;
    const station = document.getElementById("station").value;

    // Create active filter buttons
    addActiveFilter(region);
    addActiveFilter(district);
    addActiveFilter(state);
    addActiveFilter(station);

    // Close the popup
    closeFilterPopup();
}

function addActiveFilter(filterValue) {
    const activeFiltersContainer = document.querySelector(".active-filters");

    // Check if the filter value is not already active
    if (!Array.from(activeFiltersContainer.children).some(button => button.textContent === filterValue)) {
        const filterTag = document.createElement("button");
        filterTag.classList.add("filter-tag");
        filterTag.innerHTML = `${filterValue} <span class="close-filter">✖</span>`;
        
        // Add event listener to close filter when clicking on the close icon
        filterTag.querySelector(".close-filter").addEventListener("click", function() {
            removeActiveFilter(filterTag);
        });

        activeFiltersContainer.appendChild(filterTag);
    }
}

function removeActiveFilter(filterTag) {
    filterTag.remove();
}
