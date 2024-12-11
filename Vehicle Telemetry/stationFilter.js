function openFilterPopup() {
  document.getElementById("filterPopup").style.display = "block";
  //document.getElementById("grayOverlay").style.display = "block";
}

function closeFilterPopup() {
  document.getElementById("filterPopup").style.display = "none";
  //document.getElementById("grayOverlay").style.display = "none";
}

function applyFilters() {
  const region = document.getElementById("region").value;
  const district = document.getElementById("district").value;
  const state = document.getElementById("state").value;
  const station = document.getElementById("station").value;

  addActiveFilter(region);
  addActiveFilter(district);
  addActiveFilter(state);
  addActiveFilter(station);

  closeFilterPopup();
}

function addActiveFilter(filterValue) {
  const activeFiltersContainer = document.querySelector(".active-filters");
  // check if the filter value is already present in the active filters
  const existingFilter = Array.from(activeFiltersContainer.children).find(button => 
    button.textContent.trim().toLowerCase().includes(filterValue.trim().toLowerCase())
  );

  if (!existingFilter) {
    const filterTag = document.createElement("button");
    filterTag.classList.add("filter-tag");
    filterTag.innerHTML = `${filterValue} <span class="close-filter">✖</span>`;
        
    // add event listener to close filter when clicking on the close icon
    filterTag.querySelector(".close-filter").addEventListener("click", function() {
      removeActiveFilter(filterTag);
    });

    activeFiltersContainer.appendChild(filterTag);
  }
}

function removeActiveFilter(filterTag) {
  filterTag.remove();
}

function openDateFilterPopup() {
  document.getElementById("dateFilterPopup").style.display = "block";
}

function closeDateFilterPopup() {
  document.getElementById("dateFilterPopup").style.display = "none";
}

function applyDateFilters() {
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;
    
  const filter = startDate + " - " + endDate;
  addActiveFilter(filter);

  closeDateFilterPopup();
}

