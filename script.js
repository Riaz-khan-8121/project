let input = document.querySelector("#input");
let list = document.querySelector("#list");
let arr = [];

function todo() {
    if (input.value.trim() === "") return;
    arr.push(input.value.trim());
    renderList();
    input.value = "";
}

function renderList() {
    list.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        list.innerHTML += `
            <li>
                ${arr[i]}
                <div class="actions">
                    <button class="edit-btn" onclick="editItem(${i})">Edit</button>
                    <button class="delete-btn" onclick="deleteItem(${i})">Delete</button>
                </div>
            </li>`;
    }
}

function deleteItem(index) {
    arr.splice(index, 1);
    renderList();
}

function editItem(index) {
    let newValue = prompt("Edit item:", arr[index]);
    if (newValue !== null && newValue.trim() !== "") {
        arr[index] = newValue.trim();
        renderList();
    }
}