 "use strict";

 const a = 10;
 const b = 6;
 const c = 6;
 document.addEventListener('DOMContentLoaded', () => {
  if (performance.navigation.type == 1) {
    if(checkCookie('maxDigit')){
      if(window.confirm(`Some Cookies have been created on this page: \n${document.cookie} \n Do you want to save them?`)) 
      alert('Cookies were saved, now the page will be refreshed.');
      else setCookie('maxDigit', '');
    }
  }
  setCookie('session', parseInt(getCookie('session')) + 1, 1);

  swapContent('block4content', 'block5content'); // complete task 1
  countTriangle(a, b, c, 'block5'); // complete task 2
  // task 3
  if(checkCookie('maxDigit')) document.querySelector('#numForm').remove();
  //complete task 6
  makeEditableBlock('block2');
  makeEditableBlock('block3');
  makeEditableBlock('block5');
  makeEditableBlock('block6');
  initEditableBlocks();
  // complete task 3
  document.querySelector('#numBtn').addEventListener('click', () => {
    let maxDigit = findMaxDigit('numInput');
    alert(`MaxDigit digit is ${maxDigit}`);
    setCookie('maxDigit', maxDigit, 2);
  })
  //complete task 4
  if(localStorage.getItem('textColor')) {
    document.querySelector('#block6Content').style.color = localStorage.getItem('textColor');
    document.querySelector('#colorInput').setAttribute('value', localStorage.getItem('textColor'))
  }
  document.querySelector('#colorInput').addEventListener('change', function(){
    console.log(this.value);
    document.querySelector('#block6Content').style.color = this.value;
    localStorage.setItem('textColor' ,this.value);
  })
  // complete task 5
  document.addEventListener('select', (event) => {
  	if(event.target == document.querySelector('#selectBlock')){
  		const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    	document.getElementById('selectLog').textContent = `You've just selected: ${selection}`;	
  	}
  })
  // document.querySelector('#selectBlock').addEventListener('select', () => {
  //   const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
  //   document.getElementById('selectLog').textContent = `You've just selected: ${selection}`;
  // })
 })

 const swapContent = (id1, id2) => {
  let block1 = document.getElementById(id1);
  let block2 = document.getElementById(id2);
  let content1 = block1.innerHTML;
  block1.innerHTML = block2.innerHTML;
  block2.innerHTML = content1;
 }

 const countTriangle = (a, b, c, outputId) => {
  let p = (a+b+c)/2;
  let s = Math.sqrt(p*(p-a)*(p-b)*(p-c));
  document.getElementById(outputId).insertAdjacentHTML("beforeend", 
  `<p><strong>S of triangle with a=${a} b=${b} c=${c} :<br>${s}</strong></p>`
  );
 }

 const findMaxDigit = (inputId) => {
  let number = document.getElementById(inputId).value;
  return Array.from(number).sort()[0];
 }

 const initEditableBlocks = () => {
  Array.from(document.getElementsByClassName('editArea')).map((area) => {
    area.addEventListener('change', (event) => {
      const newContent = event.target.value;
      localStorage.setItem(`${event.target.parentNode.id}Content`, newContent);
      event.target.parentNode.children[0].innerHTML = newContent;
     })
  })
  Array.from(document.getElementsByClassName('editBtn')).map((btn) => {
    btn.addEventListener('click', (event) => {
      localStorage.removeItem(`${event.target.parentNode.id}Content`);
      document.location.reload();
    })
  })
 }

 const makeEditableBlock = (blockId) => {
   const content = localStorage.getItem(`${blockId}Content`) ? 
   localStorage.getItem(`${blockId}Content`) : 
   document.getElementById(blockId).innerHTML;
   document.getElementById(blockId).innerHTML = content;
   document.getElementById(blockId).insertAdjacentHTML('beforeend', 
   `<textarea class="editArea">${content}</textarea>
    <button type="submit" class="editBtn">Return default</button>`
   )
 }

 const setCookie = (name, data, expDays) => {
  const d = new Date();
  d.setDate(d.getDate() + expDays);
  document.cookie = `${name}=${data};expires=${d.toUTCString()};path=/`;
 }

 const checkCookie = (name) => {
  return (document.cookie.includes(name) && !document.cookie.includes(`${name}=;`));
 }

 const getCookie = (name) => {
   return checkCookie(name) ? document.cookie.split(';').find((c) => c.includes(name)).split('=')[1] : 0;
 }
