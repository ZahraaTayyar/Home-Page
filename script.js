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


/* =================
  TESTS, LOOK AT THESE
  Reading tests will always help you discover your requirements.
  You can make this window bigger. 
   ===================
*/



/* =================
  FIND ELEMENTS
  These are all the elements we will look for.
   ===================
*/


/* =================
   ASSERTIONS 
   These are the things we check are true about your page.
   Read and update your HTML to discover the requirements.
   The tests will run every time you update your code.
   ===================
*/
test("There is at least one header element", () => {
  expect(getHeader.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one h1", () => {
  expect(getH1.length).toBeGreaterThanOrEqual(1);
});
test("There is only one header element with the class c-site-header", () => {
  expect(getSiteHeader.length).toBe(1);
});
test("There is a nav element with an aria-label of Main Site Links.", () => {
  expect(getAria.length).toBeGreaterThanOrEqual(1);
});
test("There is only one main element", () => {
  expect(getMain.length).toBe(1);
});
test("There is at least one footer element", () => {
  expect(getFooter.length).toBeGreaterThanOrEqual(1);
});
test("There is only one footer element with the class c-site-footer", () => {
  expect(getSiteFooter.length).toBe(1);
});
test("There is embedded video", () => {
  expect(getIFrame.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one image", () => {
  expect(getImage.length).toBeGreaterThanOrEqual(1);
});
test("There are at least 500 words on the page", () => {
  expect(getWords.length).toBeGreaterThanOrEqual(500);
});

const console = document.getElementById("tests");
prettify.toHTML(run(), console);
