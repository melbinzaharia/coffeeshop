
const url = "https://masai-mock-api.herokuapp.com/coffee/menu";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
    //console.log(res);
    print(res.menu.data);
    
  })
  .catch(function (err) {
    console.log(err);
  })



function print(data) {
  let Products = JSON.parse(localStorage.getItem('coffee')) || [];
  let items = document.getElementById('menu');
  items.innerHTML = null;
  data.map(function (elem) {
    let d = document.createElement('div');

    let n = document.createElement('h3');
    n.innerText = elem.title;
    // console.log(n);

    let i = document.createElement('img');
    i.src = elem.image;

    let p = document.createElement('p');
    p.innerText = elem.price;

    let button = document.createElement('button');
    button.innerText = "Add To bucket";
    button.setAttribute("id", "add_to_bucket");
    button.addEventListener("click", function () {
      addBuck(elem);
     
    })


    d.append(i, n, p, button)
    items.append(d);
  })

  function addBuck(elem) {
    Products.push(elem);
    document.getElementById("coffee_count").innerText = Products.length;
    localStorage.setItem("coffee", JSON.stringify(Products));
    
  }

}



