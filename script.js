function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}



document.getElementById('button').addEventListener('click', (event) => {
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(getNumberOrString(document.getElementById('text').value)));

});

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}



document.getElementById('enter_button').addEventListener('click', (event) => {
  let element_final_comment = document.getElementById('final_comment');
  let new_li = document.createElement('li');
  new_li.innerText = getNumberOrString(document.getElementById('name_input').value);
  new_li.setAttribute("class", 'commenter_name');

  element_final_comment.appendChild(new_li);
  let new_div = document.createElement('div');
  new_div.innerText = getNumberOrString(document.getElementById('final_comment').value);
  new_div.setAttribute("class", 'commenter_comment');

  element_final_comment.appendChild(new_div);

});
