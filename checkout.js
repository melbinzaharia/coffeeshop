function confirmOrd() {
    let name = document.getElementById('name').value;
    let number = document.getElementById('number').value;
    let address = document.getElementById('address').value;
    console.log(name, number, address);
    

    let mypromise1 = new Promise(function (resolve) {
      setTimeout(function() {
        resolve("Your Order is accepted")
      }, 0000);
    })

    let mypromise2 = new Promise(function (resolve) {
      setTimeout(function() {
        resolve(" Your order is being Prepared  ")
      }, 3000);
    })

    let mypromise3 = new Promise(function (resolve) {
      setTimeout(function() {
        resolve("Your order is in transit")
      }, 8000);
    })

    let mypromise4 = new Promise(function (resolve) {
      setTimeout(function() {
        resolve("Your order is out for delivery ")
      }, 10000);
    })

    let mypromise5 = new Promise(function (resolve) {
      setTimeout(function() {
        resolve("Order delivered")
      }, 12000);
    })

    mypromise1.then(function(resolve){
      alert(resolve);
    })

    mypromise2.then(function(resolve){
      alert(resolve);
    })

    mypromise3.then(function(resolve){
      alert(resolve);
    })

    mypromise4.then(function(resolve){
      alert(resolve);
    })

    mypromise5.then(function(resolve){
      alert(resolve);
    })
  }