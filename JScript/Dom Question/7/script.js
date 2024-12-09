// let element = document.getElementById("my");
// element.textContent = "Welcome to my youtube channel";
// element.style.color = "red";
// element.style.backgroundColor = "yellow";
// element.style.textAlign = "center";





//  document.getElementById('textInput').addEventListener('input', function () {
    // const text = this.value;
    // document.getElementById('charCount').textContent = text.length;
// });


{/* <p id="counter">0</p>
<button id="increment">Increment</button>
<button id="decrement">Decrement</button>


JavaScript:


let count = 0;
const counterElement = document.getElementById('counter');

document.getElementById('increment').addEventListener('click', () => {
  count++;
  counterElement.textContent = count;
});

document.getElementById('decrement').addEventListener('click', () => {
  count--;
  counterElement.textContent = count;
// }); */} 



    // let increment = document.getElementById("increment");
    // let decrement = document.getElementById("decrement");

    // let count = 0;

    // increment.addEventListener("click", () => {
    //     count++;
    //     document.getElementById("counter").textContent = count;
    // });

    // decrement.addEventListener("click", () => {
    //     count--;
    //     document.getElementById("counter").textContent = count;
    // });

    function toggleContent(header) {
        const content = header.nextElementSibling;
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
      }
      
      