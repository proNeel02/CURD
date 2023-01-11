let add = document.getElementById("addbtn");

let input = document.getElementById("input");

let list = document.getElementById("list");

add.addEventListener("click", function (e) {
    // console.log("input = ",input.value);

    let data = input.value.trim();

    if (data !== " " && data !== "") {
        e.preventDefault();
        let li = document.createElement("li");
        list.appendChild(li);
        // li.classList.add("list-group-item");
        li.classList = "list-group-item border d-flex mt-3 over-flow-hidden justify-content-between";
        li.innerHTML = ` <h3 class="flex-grow-1">${data}</h3>
                   
    <button class="btn btn-warning mx-3">Edit</button>
    <button class="btn btn-danger">Remove</button>`;
    }
});
