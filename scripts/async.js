//Вешаем слушатель событий после ответа сервера. Сортировка по полю происходит после клика по th 

async function getData() {
    const response = await fetch('infoFromDB.php');
    document.querySelector(".usersResults").innerHTML = await response.text();
    if (response != undefined) {
        document.querySelector('.sort').addEventListener("click", function(event) {
            let cell = event.target;
            if (cell.tagName.toLowerCase() !== 'th') {
                return;
            }


            const order = (cell.dataset.order = -(cell.dataset.order || -1));
            for (const cellRow of cell.parentNode.cells) {
                cellRow.classList.toggle('sorted', cellRow === cell)
            }


            let num = cell.cellIndex;
            if (order === 1 && (num === 0 || num === 5)) {
                const tableS = document.querySelector('.sort');
                let sortedRows = Array.from(tableS.rows)
                    .slice(1)
                    .sort((rowA, rowB) => +rowA.cells[num].innerHTML > +rowB.cells[num].innerHTML ? 1 : -1);
                tableS.tBodies[0].append(...sortedRows);
            } else if (num === 0 || num === 5) {
                const tableS = document.querySelector('.sort');
                let sortedRows = Array.from(tableS.rows)
                    .slice(1)
                    .sort((rowA, rowB) => +rowA.cells[num].innerHTML > +rowB.cells[num].innerHTML ? -1 : 1);
                tableS.tBodies[0].append(...sortedRows);
            } else if (order === 1) {
                const tableS = document.querySelector('.sort');
                let sortedRows = Array.from(tableS.rows)
                    .slice(1)
                    .sort((rowA, rowB) => rowA.cells[num].innerHTML > rowB.cells[num].innerHTML ? 1 : -1);
                tableS.tBodies[0].append(...sortedRows);
            } else {
                const tableS = document.querySelector('.sort');
                let sortedRows = Array.from(tableS.rows)
                    .slice(1)
                    .sort((rowA, rowB) => rowA.cells[num].innerHTML > rowB.cells[num].innerHTML ? -1 : 1);
                tableS.tBodies[0].append(...sortedRows);
            }
        })
    }
}

getData().then();


// Фильтрация (поиск)
function tableSearch() {
    const phrase = document.getElementById('search-text');
    const table = document.querySelector('table');
    const regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}