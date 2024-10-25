let body = document.querySelector('.bg-info');
body.classList.add(localStorage.getItem('color'));

let dark = document.querySelector('.btn-dark');
let light = document.querySelector('.light');

dark.addEventListener('click', () => {
    body.classList.remove('bg-info');
    body.classList.add('bg-dark');
    localStorage.setItem('color', 'bg-dark');
});

light.addEventListener('click', () => {
    body.classList.remove('bg-dark');
    body.classList.add('bg-info');
    localStorage.setItem('color', 'bg-info');
});

let lists = document.querySelector('.lists');

let count = 0;

let arr = ['Reading Book', 'Swimming pool', 'Do homeworks', 'olma terish'];

arr.forEach(element => {
    count++;
    let tr = document.createElement('tr');
    let th = document.createElement('th');
    let td_first = document.createElement('td');
    let td_second = document.createElement('td');

    let button_1 = document.createElement('button');
    button_1.textContent = 'Done';
    button_1.classList.add('btn', 'p-1', 'me-3', 'btn-success');

    let button_2 = document.createElement('button');
    button_2.textContent = 'Undone';
    button_2.classList.add('btn', 'p-1', 'me-3', 'btn-warning');

    let button_3 = document.createElement('button');
    button_3.textContent = 'Delete';
    button_3.classList.add('btn', 'p-1', 'me-3', 'btn-danger');

    th.scope = 'row';
    th.textContent = count;

    td_first.textContent = element;

    td_second.append(button_1, button_2, button_3);

    tr.append(th, td_first, td_second);

    lists.append(tr);
});
