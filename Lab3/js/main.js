
// task 1
const swap = (id1, id2) => {
  let block1 = document.getElementById(id1);
  let block2 = document.getElementById(id2);
  let content1 = block1.innerHTML;
  block1.innerHTML = block2.innerHTML;
  block2.innerHTML = content1;
 }
swap('block4', 'block5');

// task 2
const countTriangle = (a, b, c, outputId) => {
  let p = (a+b+c)/2;
  let s = Math.sqrt(p*(p-a)*(p-b)*(p-c));
  document.getElementById(outputId).insertAdjacentHTML("beforeend", 
  `<p><strong>S of triangle with a=${a} b=${b} c=${c} :<br>${s}</strong></p>`
  );
 }
countTriangle(10,6,6,'block3')

// task 3

const findMaxDigit = (inputId) => {
    let number = document.getElementById(inputId).value;
    //let arr = Array.from(number).sort();
    let counts = 0;
    for (var i = 0; i < Array.from(number).sort().length; i++) {
        if(Array.from(number).sort()[i]==Array.from(number).sort()[Array.from(number).sort().length-1])
            {
                counts+=1;
            }
    }
    return counts;
}

// task 4
btn.onclick = function () {
      const rbs = document.querySelectorAll('input[name="choise"]');
      let selectedValue;
      for (const rb of rbs) {
          if (rb.checked) {
              selectedValue = rb.value;
              switch (selectedValue) {
                case 'bolder':
                  document.getElementById('block6').style.fontWeight='bolder';
                  break;
                case 'normal':
                  document.getElementById('block6').style.fontWeight='normal';
                  break;
                default:
                  document.getElementById('block6').style.fontWeight='normal';
                  break;
              }
          }
      }
     
  };

// task 5
onscroll = function(){
    alert('Scrolling');
}
/*
document.getElementById('textBlock').onscroll = function(){
    alert('Scrolling');
}
*/

//task 6
const initialEditableBlocks = () => {
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

 const editingBlock = (blockId) => {
   const content = localStorage.getItem(`${blockId}Content`) ? 
   localStorage.getItem(`${blockId}Content`) : 
   document.getElementById(blockId).innerHTML;
   document.getElementById(blockId).innerHTML = content;
   document.getElementById(blockId).insertAdjacentHTML('beforeend', 
   `<textarea class="editArea">${content}</textarea>
    <button type="submit" class="editBtn">Return default</button>`
   )
 }

//editingBlock('block1');
editingBlock('block2');
editingBlock('block3');
editingBlock('block4');
editingBlock('block5');
//editingBlock('block6');
initialEditableBlocks();

// cookie (task 3)
const checkCookie = (name) => {
    return (document.cookie.includes(name) && !document.cookie.includes(`${name}=;`));
}


const setCookie = (name, data, expDays) => {
  const d = new Date();
  d.setDate(d.getDate() + expDays);
  document.cookie = `${name}=${data};expires=${d.toUTCString()};path=/`;
}

 const getCookie = (name) => {
   return checkCookie(name) ? document.cookie.split(';').find((c) => c.includes(name)).split('=')[1] : 0;
 }
 
 function deleteCookies() { 
    var allCookies = document.cookie.split(';');   
    for (var i = 0; i < allCookies.length; i++) 
        document.cookie = allCookies[i] + "=;expires=" 
        + new Date(0).toUTCString(); 
} 
 
if(checkCookie('maxDigit'))
    document.querySelector('#numForm').remove();
document.querySelector('#numBtn').addEventListener('click', () => {
    let maxDigit = findMaxDigit('numInput');
    alert(`Max digits: ${maxDigit}`);
    setCookie('maxDigit', maxDigit, 2);
    
    var toDelete=confirm("Do you want to delete cookie with reload?");
    if(toDelete){

    var doneRestart=confirm("Press ok to restart page");
     if(doneRestart)document.location.reload();
     deleteCookies("f");
}

})
