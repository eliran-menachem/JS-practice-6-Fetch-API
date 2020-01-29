document.getElementById("buttonText").addEventListener("click", getText);
document.getElementById("buttonJson").addEventListener("click", getJson);
document.getElementById("buttonAPI").addEventListener("click", getApi);

function getText(e) {
  fetch("test.txt")
    .then(function(res) {
      return res.text();
    })
    .then(function(data) {
      console.log(data);
    })
    .catch(function(err) {
      console.log(err);
    });

  e.preventDefault();
}
function getJson(e) {
  e.preventDefault();
}
function getApi(e) {
  e.preventDefault();
}
