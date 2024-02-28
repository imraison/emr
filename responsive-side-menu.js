const sidebar = document.querySelector(".sidebar");
const sidebarOpenBtn = document.querySelector("#sidebar-open");
const sidebarCloseBtn = document.querySelector("#sidebar-close");

// Function to show the sidebar when the mouse enter
const showSidebar = () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.add("open");
  }
};

// Function to hide the sidebar when the mouse leaves
const hideSidebar = () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("open");
  }
};
// Function to show and hide the sidebar
const toggleSidebar = () => {
  sidebar.classList.toggle("open");
};
// If the window width is less than 800px, close the sidebar and remove hoverability and lock
if (window.innerWidth < 500) {
  
  // sidebar.classList.remove("open");
  sidebar.classList.remove("hoverable");
  
}

sidebar.addEventListener("mouseleave", hideSidebar);
sidebar.addEventListener("mouseenter", showSidebar);
sidebarOpenBtn.addEventListener("click", toggleSidebar);
sidebarCloseBtn.addEventListener("click", toggleSidebar);