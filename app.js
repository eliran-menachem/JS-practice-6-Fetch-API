document.getElementById("buttonText").addEventListener("click", getText);
document.getElementById("buttonJson").addEventListener("click", getJson);
document.getElementById("buttonAPI").addEventListener("click", getApi);

// Get local text data
function getText(e) {
  fetch("test.txt")
    .then(function(res) {
      return res.text();
    })
    .then(function(data) {
      document.getElementById("output").innerHTML = data;
    })
    .catch(function(err) {
      document.getElementById("output").innerHTML = err;
    });

  e.preventDefault();
}

// Get local json data
function getJson(e) {
  fetch("posts.json")
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      let output = "";
      data.forEach(function(data) {
          output += `<div>${data.title} - ${data.body}</div>`
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function(err) {
      document.getElementById("output").innerHTML = err;
    });

  e.preventDefault();
}

// Get date from external API
function getApi(e) {
    fetch("https://api.github.com/users")
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      let output = "";
      data.forEach(function(user) {
          output += `<div>${user.login}</div>`
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function(err) {
      document.getElementById("output").innerHTML = err;
    });
  e.preventDefault();
}
