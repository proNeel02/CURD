let input = document.getElementById("input");
document.getElementById("Post").setAttribute("type", "button");

let posts = document.getElementById("posts");

function post() {
    if(input.value === ''){
        return;
    }
    let div = document.createElement("div");
    div.innerHTML = ` <p>${input.value}</p>
    <span class="option">
        <button type="button" onclick="edit(this)"><i class="fas fa-edit"></i>Edit</button>
        <button type="button" onclick="remove(this)"><i class="fa fa-trash" aria-hidden="true"></i>Delete</button>
    </span>`;

    input.value = '';
    posts.appendChild(div);
}

function edit(currentElement){
    // currentElement.previousElementSibling.textContent
    let span = currentElement.parentElement.previousElementSibling;
  
    if(currentElement.innerText === 'Edit'){
        currentElement.innerHTML = `<i class="fas fa-save"></i>Save`;
       
        let initial_val = currentElement.parentElement.previousElementSibling.innerText;

        let inputbox = document.createElement('input');
        inputbox.setAttribute('type','text');
        inputbox.placeholder = initial_val;

        span.parentElement.replaceChild(inputbox,span);
    }
    else{
        currentElement.innerHTML = `<i class="fas fa-edit"></i>Edit`;
        let val = currentElement.parentElement.previousElementSibling.value;
        let initial_val = currentElement.parentElement.previousElementSibling.placeholder;
        let para = document.createElement('p');
    
        if(val !== ''){
            para.innerText = val;
        }else{
            para.innerText = initial_val;
        }
      
        span.parentElement.replaceChild(para,span);
    }
}

function remove(currentElement){
    // console.log(currentElement.parentElement.previousElementSibling.parentElement);
    let span = currentElement.parentElement;
    let selectParent = span.parentElement;
    selectParent.remove();
}