var Alert = new CustomAlert();

function CustomAlert() {
    this.render = function(result) {
        //Show Modal
        let popUpBox = document.getElementById('popUpBox');
        popUpBox.style.display = "block";
        //Close Modal
        document.getElementById('boxtitle').innerHTML = result + ''
        document.getElementById('closeModal').innerHTML = '<button onclick="Alert.ok()" class="okbtn">OK</button>';
    }

    this.ok = function() {
        document.getElementById('popUpBox').style.display = "none";
    }
}