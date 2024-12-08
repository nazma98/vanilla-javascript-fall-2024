const numberInput = document.getElementById('input-number');
const generateBtn = document.getElementById('generate');
const tableBody = document.getElementById('table-body');
const resetBtn = document.getElementById('reset');
const errorMsg = document.getElementById('error-msg');

function generateTable() {
    let numberValue = parseInt(numberInput.value);
    if(numberValue !== NaN){
        cleanTable();
        generateNumberTable(numberValue);
    } else {
        errorMsg.remove('hidden');
        errorMsg.innerText = 'Please enter a positive integer!';
    }
    

}


function resetTable(){
    tableBody.innerHTML = '';
    numberInput.innerText = '';
}

function cleanTable() {
    tableBody.innerHTML = '';
}

function generateNumberTable(numberValue) {
    
    for (let row = 1; row <= 10; row++) {
        const tableRow = generateRow(numberValue, row);
        tableBody.appendChild(tableRow);
    }
}

function generateRow(numberValue, row) {
    const tableDataList = [];
    
    for (let i = 0; i < 5; i++) {
        const tableData = document.createElement('td');
        tableDataList.push(tableData);
    }
    
    tableDataList[0].innerText = numberValue;
    tableDataList[1].innerText = 'x';
    tableDataList[2].innerText = row;
    tableDataList[3].innerText = '=';
    tableDataList[4].innerText = numberValue * row;
    
    const tableRow = document.createElement('tr');
    
    for (let i = 0; i < tableDataList.length; i++) {
        tableRow.appendChild(tableDataList[i]);
    }
    return tableRow;
}

generateBtn.addEventListener('click', generateTable());
resetBtn.addEventListener('click', resetTable());
