
function countmsg() {
  const messagesCount = document.querySelectorAll('p').length;
  document.querySelector('#count').textContent = messagesCount;
}




countmsg()


let year = new Date().getUTCFullYear();
let month;
let day;

if (new Date().getMonth() < 9) {
  month = "0" + (new Date().getMonth() + 1);
} else {
  month = new Date().getMonth() + 1;
}

if (new Date().getDate() < 9) {
  day = "0" + new Date().getDate();
} else {
  day = new Date().getDate();
}

const date = year + "-" + month + "-" + day;
document.querySelector('#footer').innerHTML += `<span id="date">${date}</span>`;


function deleteMsg() {
  for (let i = 0; i < document.querySelectorAll('.delete').length; i++) {

    document.querySelectorAll('.delete')[i].addEventListener('click',
      function () {
        this.parentNode.remove()
        i = 0
        countmsg()
      });
  }
}
deleteMsg()



document.querySelector('#btn-add').addEventListener('click',
  function () {
    let msg = document.getElementById("add-message").value;
    document.querySelector('#msg-container').innerHTML += ` 
    <div class="row new-row">
      <img class="avatar" src="images/avatar-1.jpg" />
      <div class="text-container">
        <h6>John Doe</h6>
        <p>${msg}</p>
      </div>
      <span class="delete">✖</span>
    </div>
  `;
    countmsg()
    deleteMsg()
    document.getElementById("add-message").value = ''
  }
);

document.querySelector('#btn-search').addEventListener('click',
  function () {
    let oof = document.querySelectorAll('.row')
    let textToCompare = document.getElementById("search-message").value.toLowerCase();

    let nom = document.querySelectorAll('h6').textContent;

    for (let i = 0; i < document.querySelectorAll('h6').length; i++) {

      if (document.querySelectorAll('h6')[i].textContent.toLowerCase().includes(textToCompare) === false) {
        oof[i].style.display = "none";
      } else {
        oof[i].style.display = "flex";

      }

    }
    document.getElementById("search-message").value = ''

  })

  .includes(textToCompare)











