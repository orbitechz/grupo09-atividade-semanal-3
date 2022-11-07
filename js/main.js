const btns = document.getElementsByClassName('mainBtn');

const btnActive = document.getElementById('active');
const btnPopular = document.getElementById('popular');
const btnNewst = document.getElementById('newst');


for (const btn of btns) {
    btn.addEventListener('click', function() {
      btnActive.classList.add('disabled');
      btnNewst.classList.add('disabled');
      btnPopular.classList.add('disabled');

      this.classList.toggle('disabled');
    });
  }

