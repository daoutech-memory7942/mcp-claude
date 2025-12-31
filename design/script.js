// Navigation functionality
document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle functionality
  const themeToggleInput = document.getElementById('theme-toggle-input');
  const themeToggleSlider = document.querySelector('.theme-toggle .toggle-slider');

  // Load saved theme preference or default to light mode
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (themeToggleInput) {
      themeToggleInput.checked = true;
      themeToggleSlider?.classList.add('checked');
    }
  }

  // Theme toggle handler
  if (themeToggleInput && themeToggleSlider) {
    themeToggleInput.addEventListener('change', () => {
      if (themeToggleInput.checked) {
        document.body.classList.add('dark-mode');
        themeToggleSlider.classList.add('checked');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark-mode');
        themeToggleSlider.classList.remove('checked');
        localStorage.setItem('theme', 'light');
      }
    });
  }

  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.component-section');

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();

      // Remove active class from all nav items and sections
      navItems.forEach(nav => nav.classList.remove('active'));
      sections.forEach(section => section.classList.remove('active'));

      // Add active class to clicked nav item
      item.classList.add('active');

      // Show corresponding section
      const componentId = item.getAttribute('data-component');
      const targetSection = document.getElementById(componentId);
      if (targetSection) {
        targetSection.classList.add('active');
      }

      // Update URL hash
      window.location.hash = componentId;
    });
  });

  // Handle direct URL hash navigation
  const hash = window.location.hash.slice(1);
  if (hash) {
    const targetNav = document.querySelector(`[data-component="${hash}"]`);
    if (targetNav) {
      targetNav.click();
    }
  }

  // Checkbox toggle functionality
  const checkboxLabels = document.querySelectorAll('.checkbox-label');
  checkboxLabels.forEach(label => {
    const checkbox = label.querySelector('.checkbox-input');
    const checkboxBox = label.querySelector('.checkbox-box');

    if (checkbox && checkboxBox && !checkbox.disabled) {
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          checkboxBox.classList.add('checked');
        } else {
          checkboxBox.classList.remove('checked');
        }
      });
    }
  });

  // Toggle switch functionality
  const toggleLabels = document.querySelectorAll('.toggle-label');
  toggleLabels.forEach(label => {
    const toggleInput = label.querySelector('.toggle-input');
    const toggleSlider = label.querySelector('.toggle-slider');

    if (toggleInput && toggleSlider) {
      toggleInput.addEventListener('change', () => {
        if (toggleInput.checked) {
          toggleSlider.classList.add('checked');
        } else {
          toggleSlider.classList.remove('checked');
        }
      });
    }
  });

  // Dropdown toggle functionality
  const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
  dropdownTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const menu = trigger.nextElementSibling;
      if (menu && menu.classList.contains('dropdown-menu')) {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
      }
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', () => {
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');
    dropdownMenus.forEach(menu => {
      menu.style.display = 'none';
    });
  });
});
