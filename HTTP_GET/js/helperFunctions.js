const render = (word, res) => {
  return new Promise((resolve, reject) => {
      // handles if res is falsey
      if(!res){
        console.log(res.status);
      }
      // creating an array to contain the HTML strings
      let wordList = [];
      // looping through the response and maxxing out at 10
      for(let i = 0; i < Math.min(res.length, 10); i++){
        // creating a list of words
        wordList.push(`<li>${res[i].word}</li>`);
      }

      console.log(wordList);
      console.log(wordList.length);

      let outputContents = [];
      if(wordList.length > 5){
        wordList = wordList.join("");
        resolve(`<div class="dropdown word green">${word} <ul class="dropdown-content">${wordList}</ul></div>` + " ");
      } else if(wordList.length > 0){
        wordList = wordList.join("");
        resolve(`<div class="dropdown word orange">${word} <ul class="dropdown-content">${wordList}</ul></div>`+ " ");
      } else {
        resolve(`<div class="dropdown word">${word} <ul class="dropdown-content">${wordList}</ul></div>` + " ");
      }
    })
}

async function toResponseField(){
  //Waits for promise response
  let output = await renderResponse();
  responseField.innerHTML = output;
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
