function appendNumber(numbers) {
   document.getElementById("result").value += numbers;    
}

function appendOperater(operaters) {
   document.getElementById("result").value += operaters;    
    
}
function clearData() {
    document.getElementById("result").value = "";
}

function deleteLastDigit() {
    let currentResult = document.getElementById("result").value;
    document.getElementById("result").value = currentResult.slice(0, -1);
  }
  

function Calculate() {
    let result = document.getElementById("result").value;
    
    
    
    try {   
        let answer = eval(result);
        document.getElementById("result").value = answer;
    } catch (error) {
        
        document.getElementById("result").value = "Error";
    }

}


