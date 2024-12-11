// Dynamic content update logic
document.addEventListener("DOMContentLoaded", () => {
  const routes = document.querySelectorAll(".route");
  const dynamicContent = document.getElementById("dynamic-content");
  const secondaryContent = document.getElementById("secondary-content");

  const main_maintuse_content = document.getElementById("dynamic-maint-use");

  const listener_usehistory = document.querySelectorAll(".vehicle-use-history");
  const useHistory = document.getElementById("use-history-content");

  const listener_mainthistory = document.querySelectorAll(".vehicle-maintenance-history");
  const maintHistory = document.getElementById("maint-history-content");

  routes.forEach((route) => {
    route.addEventListener("click", () => {
      dynamicContent.style.display = "none";
      secondaryContent.style.display = "block";
    });
  });

  listener_usehistory.forEach((item) => {
    item.addEventListener("click", () => {
      main_maintuse_content.style.display = "none";
      useHistory.style.display = "block";
      maintHistory.style.display = "none";
    });
  });

  listener_mainthistory.forEach((item) => {
    item.addEventListener("click", () => {
      main_maintuse_content.style.display = "none";
      useHistory.style.display = "none";
      maintHistory.style.display = "block";
    });
  });
  
  const tabUseHistory = document.querySelectorAll(".vehicle-use-history");
  const tabMaintHistory = document.querySelectorAll(".vehicle-maintenance-history")

  tabUseHistory.forEach((item) => {
    item.addEventListener("click", () => {
      main_maintuse_content.style.display = "none";
      useHistory.style.display = "block";
      maintHistory.style.display = "none";
    });
  });

  tabMaintHistory.forEach((item) => {
    item.addEventListener("click", () => {
      main_maintuse_content.style.display = "none";
      useHistory.style.display = "none";
      maintHistory.style.display = "block";
    });
  });
  


});

function maintUseBack() {
  const main_maintuse_content = document.getElementById("dynamic-maint-use");
  const useHistory = document.getElementById("use-history-content");
  const maintHistory = document.getElementById("maint-history-content");

  main_maintuse_content.style.display = "block";
  useHistory.style.display = "none";
  maintHistory.style.display = "none";
}

function routeBack() {
  const routes = document.querySelectorAll(".route");
  const dynamicContent = document.getElementById("dynamic-content");
  const secondaryContent = document.getElementById("secondary-content");
  dynamicContent.style.display = "block";
  secondaryContent.style.display = "none";
}

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

  const vtNavLinks = document.querySelector(".vt-nav-links");
  if (tabIndex === 1) {
    vtNavLinks.style.display = "block"; // Show submenu for Maintenance & Use
  } else {
    vtNavLinks.style.display = "none"; // Hide submenu for other tabs
  }

}
