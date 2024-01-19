var button = document.getElementById('color-change-btn');
var resumeContainer = document.getElementById('resume-container');

button.addEventListener('click', function() {
    if (resumeContainer.style.backgroundColor === 'lightblue') {
        resumeContainer.style.backgroundColor = '#fff';
    } else {
        resumeContainer.style.backgroundColor = 'lightblue';
    }
});
