function showTab(tabIndex, evt) {
  var i, x, tabbuttons;
  x = document.getElementsByClassName("tab");
  
  // Hide all tabs
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  // Select all buttons inside the .tabs container
  tabbuttons = document.querySelectorAll(".tab-button");

  // Remove 'active-tab' class from all tab buttons
  for (i = 0; i < tabbuttons.length; i++) {
    tabbuttons[i].classList.remove("active-tab");
  }

  // Show the selected tab
  document.getElementById("tab-" + tabIndex).style.display = "block";

  // Add 'active-tab' class to the clicked tab
  evt.currentTarget.classList.add("active-tab");
}



// Dynamic content update logic
document.addEventListener("DOMContentLoaded", () => {
  const routes = document.querySelectorAll(".route");
  const dynamicContent = document.getElementById("dynamic-content");
  const secondaryContent = document.getElementById("secondary-content");

  routes.forEach((route) => {
    route.addEventListener("click", () => {
      const routeId = route.dataset.id;

      // Update the dynamic content with the innerHTML of secondaryContent
      dynamicContent.innerHTML = secondaryContent.innerHTML;

      // Customize content based on routeId
      const vehicleIdElement = dynamicContent.querySelector(".vehicle-id h2");
      if (vehicleIdElement) {
        vehicleIdElement.textContent = `Vehicle #${routeId}`;
      }

      // Optionally hide the clicked route
      route.style.display = "none";

      // Switch to the Route Tracking tab
      showTab(0);
    });
  });
});
