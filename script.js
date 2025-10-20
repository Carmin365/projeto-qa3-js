document.addEventListener('DOMContentLoaded', () => {
    const coverageData = [  ]; 
    const tableBody = document.querySelector('#coverage-table tbody');

    coverageData.forEach(item => {
        const row = tableBody.insertRow();
        row.insertCell().textContent = item.module;
        row.insertCell().textContent = `${item.lines}%`;
        
        const statusCell = row.insertCell();
         
        const statusClass = item.lines >= 80 ? 'status-high' : 'status-low';
        statusCell.textContent = item.lines >= 80 ? 'OK' : 'Revisar';
        statusCell.classList.add(statusClass);
    });


    console.log("Relatório de cobertura renderizado.");
});