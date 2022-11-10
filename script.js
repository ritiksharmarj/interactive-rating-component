const ratingBox = document.querySelector('.rc-wrapper');
const thankYouBox = document.querySelector('.tu-wrapper');
const submit = document.querySelector('.submit');
const numberRating = document.querySelectorAll('.number-rating');
const ratingValue = document.querySelector('.rating-value');

numberRating.forEach((rate) => {
  rate.addEventListener('click', () => {
    ratingValue.innerHTML = rate.innerHTML;
  });
});

submit.addEventListener('click', () => {
  if (ratingValue.innerHTML > 0) {
    ratingBox.classList.add('hidden');
    thankYouBox.classList.remove('hidden');
  } else {
    alert('Please give a rating.');
  }
});
