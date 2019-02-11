// Formats response to look presentable on webpage
const renderResponse = (word, res) => {
  // handles if res is falsey
  if(!res){
    console.log(res.status);
  }
  // in case res comes back as a blank array
  if(!res.length){
    responseField.innerHTML = "<p>Try again!</p><p>There were no suggestions found!</p>";
    return;
  }

  // creating an array to contain the HTML strings
  let wordList = [];
  // looping through the response and maxxing out at 10
  for(let i = 0; i < Math.min(res.length, 10); i++){
    // creating a list of words
    wordList.push(`<li>${res[i].word}</li>`);
  }
  // joins the array of HTML strings into one string
  wordList = wordList.join("");

  // manipulates responseField to render the modified response
  //responseField.innerHTML += `<p>You might be interested in:</p><ol>${wordList}</ol>`;
  responseField.innerHTML += `<div class="dropdown word">${word}<ul class="dropdown-content">${wordList}</ul></div>`
  return;
}

const renderRawResponse = (res) => {
  // taking the first 10 words from res
  let trimmedResponse = res; //res.slice(0, 10);
  //manipulates responseField to render the unformatted response
  //responseField
  responseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}</text>`;
}
