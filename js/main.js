const btns = document.getElementsByClassName('mainBtn');

const btnActive = document.getElementById('active');
const btnPopular = document.getElementById('popular');
const btnNewst = document.getElementById('newst');


for (const btn of btns) {
    btn.addEventListener('click', function() {
      this.classList.toggle('disabled');
      console.log(this.textContent)
      switch (this.textContent) {
        case "Active":
            btnPopular.classList.add('disabled');
            btnNewst.classList.add('disabled');
            break;
        case "Popular":
            btnActive.classList.add('disabled');
            btnNewst.classList.add('disabled');
            break;
        case "Newst":
            btnPopular.classList.add('disabled');
            btnActive.classList.add('disabled');
            break;
      }
    });
  }

