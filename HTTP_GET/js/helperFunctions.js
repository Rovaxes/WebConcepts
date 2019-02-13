// Formats response to look presentable on webpage
const renderResponse = (word, res) => {
  // handles if res is falsey
  if(!res){
    console.log(res.status);
  }
  /*
  // in case res comes back as a blank array
  if(!res.length){
    responseField.innerHTML = "<p>Try again!</p><p>There were no suggestions found!</p>";
    return;
  }
  */

  // creating an array to contain the HTML strings
  let wordList = [];
  // looping through the response and maxxing out at 10
  for(let i = 0; i < Math.min(res.length, 10); i++){
    // creating a list of words
    wordList.push(`<li>${res[i].word}</li>`);
  }

  console.log(wordList);
  console.log(wordList.length);


/*
  // manipulates responseField to render the modified response
  if(wordList.length > 5){
    wordList = wordList.join("");
    responseField.innerHTML += `<div class="dropdown word green">${word} <ul class="dropdown-content">${wordList}</ul></div>`;
  } else if(wordList.length > 0){
    wordList = wordList.join("");
    responseField.innerHTML += `<div class="dropdown word orange">${word} <ul class="dropdown-content">${wordList}</ul></div>`;
  } else {
    responseField.innerHTML += `<div class="dropdown word">${word} <ul class="dropdown-content">${wordList}</ul></div>`;
  }
*/

if(wordList.length > 5){
  wordList = wordList.join("");
  responseField.innerHTML += `<div class="dropdown word green">${word} <ul class="dropdown-content">${wordList}</ul></div>` + " ";
} else if(wordList.length > 0){
  wordList = wordList.join("");
  responseField.innerHTML += `<div class="dropdown word orange">${word} <ul class="dropdown-content">${wordList}</ul></div>`+ " ";
} else {
  responseField.innerHTML += `<div class="dropdown word">${word} <ul class="dropdown-content">${wordList}</ul></div>` + " ";
}
  return;
}

const renderRawResponse = (res) => {
  // taking the first 10 words from res
  let trimmedResponse = res; //res.slice(0, 10);
  //manipulates responseField to render the unformatted response
  //responseField
  responseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}</text>`;
}

function findNonCharacters(word){
  for(var i = 0; i < word.length; i++){
  }
}
