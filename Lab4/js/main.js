
// task 1
async function task1(contentBlocksNames, delay = 0)
{
    let blocksHtml = [];
    contentBlocksNames.forEach(block => {
        blocksHtml.push(document.querySelector(block).innerHTML);
    });
    for (let index = 0; index < blocksHtml.length - 1; index++)
    {
        await sleep(delay);
        document.querySelector(contentBlocksNames[index+1]).innerHTML = blocksHtml[index];
    }
    await sleep(delay);
    document.querySelector(contentBlocksNames[0]).innerHTML = blocksHtml[blocksHtml.length-1];
}
function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}
task1(['#block2','#block3','#block5','#block6'],5000);

// task 2
async function task2(){
    await sleep(5000);
    document.querySelector('#block1').style.fontStyle='italic';
    document.querySelector('#block6').style.fontStyle='italic';
    while(true){
        await sleep(5000);
        document.querySelector('#block5').style.fontStyle='italic';
        await sleep(5000);
        document.querySelector('#block5').style.fontStyle='normal';
    }
}
// (task 5 from lab3)
onscroll = function(){
    task2()
}
//

// task 3
function createCommitFormTo(blockName)
{
    let form = document.createElement("form");
    form.id='git-commits-form';
    form.style = 'display:flex; flex-direction:column; border:solid 1px;';

    let username = document.createElement("input");
    username.setAttribute('type',"text");
    username.setAttribute('name',"username");
    username.setAttribute('placeholder',"Username");
    username.setAttribute('required',true);

    let repositoryName = document.createElement("input");
    repositoryName.setAttribute('type',"text");
    repositoryName.setAttribute('name',"repository-name");
    repositoryName.setAttribute('placeholder',"Repository name");
    repositoryName.setAttribute('required',true);

    let submit = document.createElement("button");
    submit.setAttribute('type',"submit");
    submit.textContent = "Get commits";

    form.append(username);
    form.append(repositoryName);
    form.append(submit);

    document.querySelector(blockName).append(form);
}
async function addCommitsToBlock(blockName)
{
    let username = document.querySelector('#git-commits-form > input[name="username"]').value;
    let repositoryName = document.querySelector('#git-commits-form > input[name="repository-name"]').value;

    let response = await fetch(`https://api.github.com/repos/${username}/${repositoryName}/commits`);
    
    let div = document.createElement('div');
    div.id="commits-content";
    div.style.height = "35%";
    div.style.overflow = "auto";

    let ul = document.createElement('ul');
    if (response.ok) 
    {
        response.json().then(data => data.forEach(c => 
            {
                let li = document.createElement('li');
                li.textContent = `${c.commit.author.name} : ${c.commit.message}`;
                ul.append(li);
            }));
        div.append(ul);
    }
    else 
    {
        let p = document.createElement('p');
        p.textContent = `Error : ${response.status}(${response.statusText})`;
        p.style = 'display:border-box; border: solid 0.3em red; padding = 1em;';
        div.append(p);
    }
    document.querySelector(blockName).appendChild(div);
}
//

createCommitFormTo('#block4');
//
document.addEventListener('submit',function(event)
    {
        if(event?.target.id == 'git-commits-form')
        {
            event.preventDefault();
            if(document.querySelector('#commits-content'))
            {
                document.querySelector('#commits-content').remove();
            }
            addCommitsToBlock('#' + document.querySelector('#git-commits-form').parentNode.id);
            document.querySelector('#git-commits-form').reset();
        }
        if(event?.target.id == 'sort-form')
        {
            event.preventDefault();
            if(document.querySelector('#sort-content'))
            {
                document.querySelector('#sort-content').remove();
            }
            sortListOfValuesToBlock('#' + document.querySelector('#sort-form').parentNode.id);
            document.querySelector('#sort-form').reset();
        }
    });

// task 4
function kekFunc()
{
    // code, code, code ...
}
async function callFunc(...functions)
{
    for (let index = 0; index < functions.length; index++)
    {
        await functions[index]();
        console.log(`The ${index+1} function has finished its work`) //`
    }
}
callFunc(kekFunc, function(){return sleep(10000)}, kekFunc)

// task 5
function createSortFormTo(blockName)
{
    let form = document.createElement("form");
    form.id='sort-form';
    form.style = 'display:flex; flex-direction:column; border:solid 1px rgb(150, 45, 45);';

    let listOfValues = document.createElement("input");
    listOfValues.setAttribute('type',"text");
    listOfValues.setAttribute('name',"list-of-values");
    listOfValues.setAttribute('placeholder',"List of values");
    listOfValues.setAttribute('required',true);

    let submit = document.createElement("button");
    submit.setAttribute('type',"submit");
    submit.textContent = "Sort";

    form.append(listOfValues);
    form.append(submit);

    document.querySelector(blockName).append(form);
}
function selectionSort(arr)
{ 
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let tmp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = tmp;
        }
    }
    return arr;
}
function sortListOfValuesToBlock(blockName)
{
    let listOfValues = document.querySelector('#sort-form > input[name="list-of-values"]').value;

    let regex = /\d+/g;
    let numberList = listOfValues.match(regex).map(Number);
    if(!numberList)
        console.log('Error: no number is a list');
    else
    {
        console.log('Input list of numbers :');
        console.log(numberList.slice());
        console.log('Sorted list of numbers :')
        console.log(selectionSort(numberList));
    }
}

createSortFormTo('#block4')


           