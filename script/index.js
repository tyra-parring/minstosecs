// function minsToSecs(minute) {
//     return minute * 60;
// }
  
  function convert() {
    let minutes = document.getElementById('minutesInput').value;

    //convert minutes to seconds
    let seconds = minutes * 60;

    //show the result in the result input field
    document.getElementById('result').value = seconds + " seconds";
}