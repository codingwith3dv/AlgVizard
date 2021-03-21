var container = document.getElementById("arrayContainer")
var startButton = document.getElementById("startButton")
var input_size = document.getElementById("size");
var valueText = document.getElementById("value")
var alg = document.getElementById("selectAlg");

var block_divs = [];
var block_divs_value = [];
var array_length = 100 //Math.floor(Math.random() * (500 - 5 + 1)) + 5;
var alg_speed = 0;
var margin = 0.1;
var anim_speed = 0.2;

var time_interval = 0;
var start_enabled = true;

function openTab(evt, name) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(name).style.display = "block";
  evt.currentTarget.className += " active";
}

array_length = input_size.value;
value.innerText = "Number Of bars: " + array_length;
input_size.addEventListener("input", () => {
    array_length = input_size.value;
    value.innerText = "Number Of bars: " + array_length;
    start_enabled = true;
    startButton.innerText = "Sort"
    alg.disabled=false
    enableSpinner()
    generateArray()
})

function generateArray() {
    container.innerHTML = ''

    margin = (100 * 0.2) / array_length;
    alg_speed = (10 * 100) / array_length;

    for (var i = 0; i < array_length; i++) {
        block_divs[i] = document.createElement("div");
        block_divs_value[i] = Math.floor(Math.random() * (98 - 5 + 1)) + 5;

        block_divs[i].style =
            `margin: ${margin}%; 
                 height: ${block_divs_value[i]}%; 
                 background-color: blue; 
                 width: ${(100 / array_length - (1 * margin))}%; 
                 border-radius: 50px; 
                 transition: ${anim_speed}}s all ease-in-out;`;
        container.appendChild(block_divs[i]);
    }
}

function update_block(block, value, color) {
    window.setTimeout(() => {
        block.style =
            `margin: ${margin}%; 
                height: ${value}%; 
                background-color: ${color};
                width: ${(100 / array_length - (1 * margin))}%; 
                border-radius: 50px; 
                transition: ${anim_speed}s all ease-in-out;`;
    }, time_interval += alg_speed)
}

function swap(j) {
    var temp = block_divs_value[j];
    block_divs_value[j] = block_divs_value[j + 1];
    block_divs_value[j + 1] = temp;
}

window.onload = generateArray();

startButton.addEventListener("click", () => {
    if (start_enabled === true) {
        var value = alg.options[alg.selectedIndex].text;
        console.log(value);
        alg.style.backgroundColor='#AAA'
        switch (value) {
            case "Bubble Sort":
                // code
                bubble_Sort()
                
                break;
            case "Quick Sort":
                // code
                quick_Sort()
                break;
            case "Merge Sort":
                // code
                merge_Sort()
                break;
            case "Selection Sort":
                selection_Sort()
                break;
            default:
                break;

        }
        alg.disabled = true;
        start_enabled = false;
        startButton.innerText = "Generate"
    } else {
        generateArray();
        enableSpinner();
        start_enabled = true;
        alg.disabled = false;
        startButton.innerText = "Sort"
    }
});

function enableSpinner(){
    alg.style.backgroundColor='#FFF'
}

function checkIfDropIsValid(){
    if (start_enabled !== true) {
        return;
    }
}