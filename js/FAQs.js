document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.question');
  
    questions.forEach(question => {
      question.addEventListener('click', function() {
        // Toggle active class to show/hide answer
        this.classList.toggle('active');
      });
    });
  });
  