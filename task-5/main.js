var names = ["Alex", "Sergei", "Olga", "Denis",];

var container = document.getElementById("menu");

var html = "";

for (var i = 0; i < names.length; i++) {
    html += `<li>${names[i]}</li>`;
}

container.innerHTML = html;



