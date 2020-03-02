var li_elements = document.querySelectorAll(".sidebar ul li");
var item_elements = document.querySelectorAll(".item");

for (var i = 0; i < li_elements.length; i++) {
    li_elements[i].addEventListener("click", function () {
        li_elements.forEach(function (li) {
            li.classList.remove("active");
        })
        this.classList.add("active");
        var li_value = this.getAttribute("data-li");
        item_elements.forEach(function (item) {
            item.style.display = "none";
        })

        if (li_value == "home") {
            document.querySelector("." + li_value).style.display = "block";
        }
        else if (li_value == "tarefas") {
            document.querySelector("." + li_value).style.display = "block";
        }
        else if (li_value == "mensagens") {
            document.querySelector("." + li_value).style.display = "block";
        }
        else if (li_value == "usuarios") {
            document.querySelector("." + li_value).style.display = "block";
        }
        else if (li_value == "contato") {
            document.querySelector("." + li_value).style.display = "block";
        }
        else if (li_value == "cadastro") {
            document.querySelector("." + li_value).style.display = "block";
        }
        else {
            console.log("");
        }
    })
}

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});

function mostra(id) {
    if (document.getElementById(id).style.display == 'none') {
        document.getElementById(id).style.display = 'block';
    }
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();