const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);

setTimeout(function(){alert("Hello! Welcome to my site!"); }, 3000);