let bucdata = JSON.parse(localStorage.getItem('coffee'));

 


  display(bucdata);

  function display(bucdata) {

    
    let total = bucdata.reduce(function(sum, elem){
      return sum+Number(elem.price);
    },0)
    // console.log(total);
  
    document.getElementById('total_amount').innerText = `${total}`;

    document.getElementById('bucket').innerHTML = null;
    bucdata.map(function (elem, i) {

      let div = document.createElement('div');
      div.setAttribute("class", "pdiv")

      let n = document.createElement('h3');
      n.innerText = elem.title;

      let p = document.createElement('p');
      p.innerText = elem.price;

      let image = document.createElement('img');
      image.src = elem.image;

      let button = document.createElement('button');
      button.innerText = "Remove Coffee";
      button.setAttribute("id", "remove_coffee");
      button.addEventListener("click", function () {
        removecoffee(elem, i)
      });
      div.append(image,p,n,button);
      document.getElementById('bucket').append(div);
    })
  }


  function removecoffee(elem, i) {
    bucdata.splice(i, 1);
    localStorage.setItem('coffee', JSON.stringify(bucdata));
    display(bucdata);

  }