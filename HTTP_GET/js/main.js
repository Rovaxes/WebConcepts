
const url = "https://api.datamuse.com/words?";
const queryParamsRhy = 'rel_rhy=';
const queryAnd = '&';
const queryParamsSL = 'sl=';

// References to HTML elements
const inputField = document.querySelector("#input");
const submit = document.querySelector("#submit");
const responseField = document.querySelector('#responseField');

window.onload = () => {
  //Checks JS connection
  console.log("LOADED");
}

function getAllSuggestions(){
  const inputFieldArray = inputField.value.split(/[^\(\[a-z\]\[A-Z\]\)]/); //Splits the string into an array of words
  console.log(inputFieldArray);

  const filteredInputArray = inputFieldArray.filter((value, index, array) => { return value.length > 0});
  console.log(filteredInputArray);

  filteredInputArray.forEach(getSuggestions)

}

function getSuggestions(word){
  var endpoint = url + queryParamsRhy + word;
  console.log(endpoint);

  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json'

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      //Do some rendering...
      renderRawResponse(xhr.response);
    }
  }

  xhr.open('GET', endpoint);
  xhr.send();


}





/*
// clear previous results and display results to webpage
const displaySuggestions = (event) => {
  console.log("working");
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  };
  findPun();
};
*/

submit.addEventListener('click', getAllSuggestions);



const renderRawResponse = (res) => {
  // taking the first 10 words from res
  let trimmedResponse = res; //res.slice(0, 10);
  //manipulates responseField to render the unformatted response
  //responseField
  responseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}</text>`
}

/*
function findPun(){
  var wordQuery = inputField.value.split();
  console.log(wordQuery)
  var endpoint = url + queryParamsRhy + wordQuery + queryAnd + queryParamsSL + wordQuery;

  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderRawResponse(xhr.response);
    }
  };

  xhr.open("GET", endpoint);
  xhr.send();
}
*/
