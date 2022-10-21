let dice = {
    roll: function () {
      let randomNumber = Math.floor(Math.random() * 6) + 1;
      return randomNumber;
    }
  }

  function printNumber(number) {
    let placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
  }
  
  let button = document.getElementById('button');
  
  button.onclick = function() {
    let result = dice.roll();
    printNumber(result);
  };