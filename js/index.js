var digit = document.querySelectorAll('div.digits');
// var val = 0;
var arr = [];
var equation = '';
digit.forEach(val => {
   val.addEventListener('click', (e) => {
      var val = e.target.innerHTML
      // var type = typeof val
      console.log(`${val}`);
      if (val !== '=') {
         arr.push(val)
         equation = arr.join('')
         document.querySelector('div.display .code').innerHTML = equation
         // console.log(equation);
         if (val == 'AC') {
            arr.splice(0)
            equation = arr.join('')
            document.querySelector('div.display .code').innerHTML = equation
         }

         if (/\+\+|--|\/\/|\*\*/gi.test(equation)) {
            arr.pop();
            equation = arr.join('')
            document.querySelector('div.display .code').innerHTML = equation
         }
      }
   })
})

var result = document.querySelector('div.operator')
result.addEventListener('click', () => {
   try {
      console.log(equation)
      var ans = eval(equation);
      document.querySelector('div.display .code').innerHTML = ans
      arr.splice(0)
      arr.push(ans)
   } catch (error) {
      document.querySelector('div.display .code').innerHTML = "Syntax Error"
      arr.splice(0)
   }
   // console.log(arr);
})

digit.forEach(val => {
   val.addEventListener('mouseenter', (e) => {
      var boxToAnimate = e.target;
      boxToAnimate.classList.add('activeButton');
   })

   val.addEventListener('mouseleave', (e) => {
      var boxToAnimate = e.target;
      boxToAnimate.classList.remove('activeButton');
   })

})


var validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Enter', '+', '-', '*', '/', '.', 'Delete', '(', ')', 'Backspace'];

window.addEventListener('keydown', (e) => {
   var key = e.key

   if (validKeys.indexOf(key) !== -1) {
      if (key != 'Enter' && key != 'Backspace' && key != 'Delete') {
         var boxToAnimate = document.querySelector(`div[data-key='${e.key}']`);
         boxToAnimate.classList.add('activeButton');
         var box = document.querySelector(`div[data-key='${key}']`)
         arr.push(key)
         equation = arr.join('')
         document.querySelector('div.display .code').innerHTML = equation
         // console.log(equation);
      } else if (key == 'Backspace') {
         arr.pop()
         equation = arr.join('')
         document.querySelector('div.display .code').innerHTML = equation
         // console.log(equation);

      } else if (key == 'Delete') {
         arr.splice(0)
         equation = arr.join('')
         document.querySelector('div.display .code').innerHTML = equation
         // console.log(equation);

      } else {
         try {
            var ans = eval(equation);
            document.querySelector('div.display .code').innerHTML = ans.toFixed(4)
            arr.splice(0)
            console.log(arr);
         } catch (error) {
            document.querySelector('div.display .code').innerHTML = "Syntax Error"
            arr.splice(0)
         }
      }

      if (/\+\+|--|\/\/|\*\*/gi.test(equation)) {
         arr.pop();
         equation = arr.join('')
         document.querySelector('div.display .code').innerHTML = equation
      }
   }
})


// animating keys with Keyboard
window.addEventListener('keyup', (e) => {
   // console.log(e.key);
   if (validKeys.indexOf(e.key) !== -1) {
      if (e.key != 'Enter' && e.key != 'Backspace' && e.key != 'Delete') {
         setTimeout(function () {
            var boxToAnimate = document.querySelector(`div[data-key='${e.key}']`);
            boxToAnimate.classList.remove('activeButton')
         }, 150);
      }
   }
})


// for the HELP button
var help = document.querySelector('.help');
var helpContent = document.querySelector('.helpContent')
help.addEventListener('mouseenter', () => {
   helpContent.classList.add('helpContentVisible')
})

help.addEventListener('mouseleave', () => {
   helpContent.classList.remove('helpContentVisible')
})