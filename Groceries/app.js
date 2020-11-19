document.addEventListener('DOMContentLoaded', () => {
    // select items
    const form = document.querySelector('.grocery-form')
    const alert = document.querySelector('.alert')
    const grocery = document.getElementById('grocery')
    const submitBtn = document.querySelector('.submit-btn')
    const clearBtn = document.querySelector('.clear-btn')
    const container = document.querySelector('.grocery-container')
    const list = document.querySelector('.grocery-list')

    // edit option
    let editElm;
    let editFlag = false;
    let editID = '';

    // event listeners
    form.addEventListener('submit', addItem)
    clearBtn.addEventListener('click', clearItems)

    // load data from local storage
    window.addEventListener("DOMContentLoaded", setupItems);

    // add
    function addItem(e) {
        e.preventDefault();
        const value = grocery.value;
        const id = new Date().getTime().toString();

        if (value !== '' && !editFlag) {
            // create list
            const elm = document.createElement('article');
            let attr = document.createAttribute('data-id');
            attr.value = id;
            elm.setAttributeNode(attr)
            elm.classList.add('grocery-item');
            elm.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>

          `

            // add event listeners to both buttons
            const deleteBtn = elm.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', deleteItem);
            const editBtn = elm.querySelector('.edit-btn')
            editBtn.addEventListener('click', editItem)

            // append child
            list.appendChild(elm);
            // show container
            container.classList.add('show-container')
            // display alert
            displayAlert(`${value} add to the list`, 'success')
            // add to local storage
            addToLocalStorage(id, value)
            setDefault();
        } else if (value !== '' && editFlag) {
            editElm.innerHTML = value;
            displayAlert('value changed', 'success')

            //edit local storage
            editLocalStorage(editID, value)
            setDefault();
        } else {
            displayAlert('please enter value', 'danger')
        }
    }

    // display

    function displayAlert(text, action) {
        alert.textContent = text;
        alert.classList.add(`alert-${action}`)

        // remove alert
        setTimeout(function () {
            alert.textContent = '';
            alert.classList.remove(`alert-${action}`)
        }, 1000)
    }

    // delete item

    function deleteItem(e) {
        const elm = e.currentTarget.parentElement.parentElement;
        const id = elm.dataset.id;

        list.removeChild(elm);
        if (list.children.length === 0) {
            container.classList.remove('show-container')
        }
        displayAlert('item removed', 'danger')

        setDefault()
        removeFromLocalStorage(id)
    }


    // clear all items

    function clearItems() {
        const items = document.querySelectorAll('.grocery-item')
        if (items.length > 0) {
            items.forEach(function (item) {
                list.removeChild(item)
            })
        }
        container.classList.remove('show-container')
        displayAlert('clear list', `danger`)
    }

    function editItem(e) {
        const elm = e.currentTarget.parentElement.parentElement;

        editElm = e.currentTarget.parentElement.previousElementSibling;

        grocery.value = editElm.innerHTML;
        editFlag = true;
        editID = elm.dataset.id
        submitBtn.textContent = 'edit'


    }


    // set defaults
    function setDefault() {
        grocery.value = '';
        editFlag = false;
        editID = '';
        submitBtn.textContent = 'submit'
    }




    // local storage

    //add to local storage

    function addToLocalStorage(id, value) {
        const grocery = { id, value };
        let items = getLocalStorage();
        items.push(grocery);
        localStorage.setItem('list', JSON.stringify(items))
    }

    // remove
    function removeFromLocalStorage(id) {
        let items = getLocalStorage();

        items = items.filter(item => {
            if (item.id !== id) return item
        })

        localStorage.setItem('list', JSON.stringify(items))
    }

    // get list from local storage
    function getLocalStorage() {
        return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : []
    }

    // edit
    function editLocalStorage(id, value) {
        let items = getLocalStorage();

        items = items.map(item => {
            if (item.id === id) {
                item.value = value;
            }

            return item;
        })

        localStorage.setItem('list', JSON.stringify(items))
    }


    // load items from local storage
    function setupItems() {
        let items = getLocalStorage();

        if (items.length > 0) {
            items.forEach(function (item) {
                createListItem(item.id, item.value);
            });
            container.classList.add("show-container");
        }
    }

    function createListItem(id, value) {
        const elm = document.createElement("article");
        let attr = document.createAttribute("data-id");
        attr.value = id;
        elm.setAttributeNode(attr);
        elm.classList.add("grocery-item");
        elm.innerHTML = `<p class="title">${value}</p>
                  <div class="btn-container">
                    <!-- edit btn -->
                    <button type="button" class="edit-btn">
                      <i class="fas fa-edit"></i>
                    </button>
                    <!-- delete btn -->
                    <button type="button" class="delete-btn">
                      <i class="fas fa-trash"></i>
                    </button>
                  </div>
                `;
        // add event listeners to both buttons;
        const deleteBtn = elm.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', deleteItem);
        const editBtn = elm.querySelector('.edit-btn')
        editBtn.addEventListener('click', editItem)

        // append child
        list.appendChild(elm);
    }
})