document.getElementById("toggleButton").addEventListener("click", function() {
    var dropdownBlock = document.getElementById("dropdownBlock");
    dropdownBlock.style.display = (dropdownBlock.style.display === "block") ? "none" : "block";
  });
  
  document.querySelector(".closeButton").addEventListener("click", function() {
    document.getElementById("dropdownBlock").style.display = "none";
  });
//жс для формы
function openForm() {
  var overlay = document.getElementById("overlay");
  var formContainer = document.getElementById("formContainer");
  overlay.style.display = "block";
  formContainer.style.display = "block";
}

function closeForm() {
  var overlay = document.getElementById("overlay");
  var formContainer = document.getElementById("formContainer");
  overlay.style.display = "none";
  formContainer.style.display = "none";
}//конец
  
// Получаем кнопку и выпадающее меню
var dropdownBtn = document.getElementById("dropdownBtn");
var dropdownContent = document.getElementById("myDropdown");

// При нажатии на кнопку, отобразить или скрыть выпадающее меню
dropdownBtn.onclick = function() {
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

// Закрыть выпадающее меню при клике за его пределами
window.onclick = function(event) {
    if (!event.target.matches('#dropdownBtn')) {
        var dropdowns = document.getElementsByClassName("dropdownContent");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}