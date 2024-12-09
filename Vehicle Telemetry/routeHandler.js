document.addEventListener("DOMContentLoaded", () => {
    const routes = document.querySelectorAll(".route");
    const dynamicContent = document.getElementById("dynamic-content");
    const secondaryContent = document.getElementById("secondary-content");
  
    routes.forEach((route) => {
      route.addEventListener("click", () => {
        const routeId = route.dataset.id;
  
        // Update the dynamic content with the innerHTML of secondaryContent
        dynamicContent.innerHTML = secondaryContent.innerHTML;
  
        // Optionally, you can add logic to customize the content based on routeId
        // Example:
        const vehicleIdElement = dynamicContent.querySelector(".vehicle-id h2");
        if (vehicleIdElement) {
          vehicleIdElement.textContent = `Vehicle #${routeId}`;
        }
  
        // Hide the clicked route (optional)
        route.style.display = "none";
      });
    });
  });
  

  // Function to show secondary content
  function showSecondaryContent(routeId) {
    const secondaryContent = document.getElementById('secondary-content');
    secondaryContent.style.display = 'block';
    
    const vehicleId = document.querySelector(`.route[data-id="${routeId}"] .vehicle-id h2`);
    if (vehicleId) {
      secondaryContent.querySelector('.vehicle-id h2').textContent = vehicleId.textContent;
    }
  }

  // Add event listeners to routes
  document.querySelectorAll('.route').forEach(route => {
    route.addEventListener('click', () => {
      const routeId = route.getAttribute('data-id'); // Get route ID
      showSecondaryContent(routeId); // Show the secondary content
    });
  });

