// Steps Section //
  function toggleStep(id, btn) {
    const content = document.getElementById(id);
    const icon = btn.querySelector('i');
    
    if (content.style.display === "block") {
      content.style.display = "none";
      icon.classList.remove("bi-chevron-up");
      icon.classList.add("bi-chevron-down");
    } else {
      content.style.display = "block";
      icon.classList.remove("bi-chevron-down");
      icon.classList.add("bi-chevron-up");
    }
  }

  // FAQ Section //
  
  document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll('.accordion-button');

    accordions.forEach(button => {
      button.addEventListener('click', function () {
        const targetId = this.getAttribute('data-bs-target');
        const target = document.querySelector(targetId);

        if (target.classList.contains('show')) {
          target.classList.remove('show');
        } else {
          // Close all open
          document.querySelectorAll('.accordion-collapse').forEach(el => el.classList.remove('show'));
          target.classList.add('show');
        }
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.accordion-button');

    buttons.forEach(button => {
      button.addEventListener('click', function () {
        const targetId = this.getAttribute('data-bs-target');
        const target = document.querySelector(targetId);

        // Close all
        document.querySelectorAll('.accordion-collapse').forEach(el => el.classList.remove('show'));

        // Open selected
        if (!target.classList.contains('show')) {
          target.classList.add('show');
        }
      });
    });
  });



