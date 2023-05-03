const englishProficiencyRadio = document.querySelector('input[name="english-proficiency"]');
const englishTests = document.getElementById('english-tests');
const englishTestTextboxes = document.querySelectorAll('#english-tests input[type="text"]');

englishProficiencyRadio.addEventListener('change', function() {
  if (englishProficiencyRadio.value === 'yes') {
    englishTests.style.display = 'block';
    englishTestTextboxes.forEach(textbox => {
      textbox.style.display = 'block';
    });
  } else {
    englishTests.style.display = 'none';
    englishTestTextboxes.forEach(textbox => {
      textbox.style.display = 'none';
    });
  }
});

const applicationForm = document.getElementById('application-form');

    applicationForm.addEventListener('submit', function(event) {
      event.preventDefault(); // prevent the form from submitting

      // redirect to result.html
      window.location.href = 'result.html';
    });


