const locationInput = document.getElementById('location');
const submitBtn = document.getElementById('submitBtn');
const resultDiv = document.getElementById('result');

// Enable button when input is not empty
locationInput.addEventListener('input', () => {
  submitBtn.disabled = locationInput.value.trim() === '';
});

// Handle submit button click
submitBtn.addEventListener('click', () => {
  resultDiv.innerHTML = '';

  // Create progress bar
  const progressBar = document.createElement('div');
  progressBar.className = 'progress-bar';
  const progress = document.createElement('div');
  progress.className = 'progress';
  progressBar.appendChild(progress);
  resultDiv.appendChild(progressBar);

  // Simulate loading from 0% to 100%
  let percent = 0;
  const interval = setInterval(() => {
    percent += 1;
    progress.style.width = `${percent}%`;

    if (percent >= 100) {
      clearInterval(interval);
      resultDiv.innerHTML = 'Open the window and look outside to find out about the weather 🤣🤣';
    }
  }, 30);
});
