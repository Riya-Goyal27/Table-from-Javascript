const container = document.querySelector('.container');
const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

container.appendChild(table);
table.append(thead, tbody);

const tr = document.createElement('tr');
thead.append(tr);

// table headings
let th1 = document.createElement('th');
th1.textContent = 'ID';
let th2 = document.createElement('th');
th2.textContent = 'Name';
let th3 = document.createElement('th');
th3.textContent = 'Location';
let th4 = document.createElement('th');
th4.textContent = 'Designation';
let th5 = document.createElement('th');
th5.textContent = 'Years of Experience';
tr.append(th1, th2, th3, th4, th5);

// table rows
let tr1 = document.createElement('tr');
let tr2 = document.createElement('tr');
let tr3 = document.createElement('tr');
let tr4 = document.createElement('tr');
let tr5 = document.createElement('tr');
tbody.append(tr1, tr2, tr3, tr4, tr5);

// Row 1
let td1 = document.createElement('td');
td1.textContent = '101';
let td2 = document.createElement('td');
td2.textContent = 'A';
let td3 = document.createElement('td');
td3.textContent = 'Noida';
let td4 = document.createElement('td');
td4.textContent = 'Frontend Developer';
let td5 = document.createElement('td');
td5.textContent = '1';
tr1.append(td1, td2, td3, td4, td5);

// Row 2
td1 = document.createElement('td');
td1.textContent = '102';
td2 = document.createElement('td');
td2.textContent = 'B';
td3 = document.createElement('td');
td3.textContent = 'Delhi';
td4 = document.createElement('td');
td4.textContent = 'Backend Developer';
td5 = document.createElement('td');
td5.textContent = '5';
tr2.append(td1, td2, td3, td4, td5);

// Row 3
td1 = document.createElement('td');
td1.textContent = '103';
td2 = document.createElement('td');
td2.textContent = 'C';
td3 = document.createElement('td');
td3.textContent = 'Bangalore';
td4 = document.createElement('td');
td4.textContent = 'Fullstack Developer';
td5 = document.createElement('td');
td5.textContent = '3';
tr3.append(td1, td2, td3, td4, td5);

// Row 4
td1 = document.createElement('td');
td1.textContent = '104';
td2 = document.createElement('td');
td2.textContent = 'D';
td3 = document.createElement('td');
td3.textContent = 'Gurugram';
td4 = document.createElement('td');
td4.textContent = 'HR';
td5 = document.createElement('td');
td5.textContent = '2';
tr4.append(td1, td2, td3, td4, td5);

// Row  5
td1 = document.createElement('td');
td1.textContent = '105';
td2 = document.createElement('td');
td2.textContent = 'E';
td3 = document.createElement('td');
td3.textContent = 'Pune';
td4 = document.createElement('td');
td4.textContent = 'Project Manager';
td5 = document.createElement('td');
td5.textContent = '1';
tr5.append(td1, td2, td3, td4, td5);

//Styling
table.style.border = '1px solid black';
table.style.textAlign = 'center';
table.style.borderCollapse = 'collapse';

const ths = document.querySelectorAll('th');
for(let i=0;i<ths.length;i++){
    ths[i].style.border = '1px solid black';
    ths[i].style.height = '60px';
    ths[i].style.width = '150px';
}

const tds = document.querySelectorAll('td');
for(let i=0;i<tds.length;i++){
    tds[i].style.border = '1px solid black';
    tds[i].style.height = '60px';
    tds[i].style.width = '150px';

}