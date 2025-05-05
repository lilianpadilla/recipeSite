document.querySelectorAll('.ingredient-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.fontWeight = 'bold';
    });
    item.addEventListener('mouseleave', () => {
      item.style.fontWeight = 'normal';
    });
  });

// form Validation
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector("form");
    if (!form) return;
  
    form.addEventListener("submit", function(e) {
      const name = document.getElementById("name")?.value.trim();
      const instructions = document.getElementById("instructions")?.value.trim();
      const ingredients = document.querySelectorAll("input[name='ingredients[]']:checked");
  
      if (!name || !instructions || ingredients.length === 0) {
        alert("Please fill out all fields and select at least one ingredient.");
        e.preventDefault(); // stop form
      }
    });
  });