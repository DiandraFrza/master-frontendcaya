/** @format */

document.addEventListener("DOMContentLoaded", function () {
  const dropdownBtn = document.querySelector(".dropdown-btn");
  const dropdownContent = document.querySelector(".dropdown-content");
  const submenuBtns = document.querySelectorAll(".submenu-btn");

  // Toggle main dropdown
  dropdownBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    dropdownBtn.classList.toggle("active");
    dropdownContent.classList.toggle("show");
  });

  // Handle submenu items
  submenuBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const submenu = this.nextElementSibling;
      const isActive = this.classList.contains("active");

      // Close other submenus
      submenuBtns.forEach((otherBtn) => {
        if (otherBtn !== btn) {
          otherBtn.classList.remove("active");
          otherBtn.nextElementSibling.classList.remove("show");
        }
      });

      // Toggle current submenu
      this.classList.toggle("active", !isActive);
      submenu.classList.toggle("show", !isActive);
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown-menu")) {
      dropdownBtn.classList.remove("active");
      dropdownContent.classList.remove("show");
    }
  });

  // Close submenu when clicking on a link
  const submenuLinks = document.querySelectorAll(".submenu-content a, .menu-link");
  submenuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      dropdownBtn.classList.remove("active");
      dropdownContent.classList.remove("show");
      submenuBtns.forEach((btn) => {
        btn.classList.remove("active");
        btn.nextElementSibling.classList.remove("show");
      });
    });
  });
});
