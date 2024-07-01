const content = document.getElementById('content');

inserts.forEach(insert => {
    
    const tablaContainer = document.createElement('div');
    tablaContainer.className = 'tabla-container';

    
    const tablaTitulo = document.createElement('h2');
    tablaTitulo.textContent = `Tabla: ${insert.tabla}`;
    tablaContainer.appendChild(tablaTitulo);

    
    const tabla = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    
    const headers = Object.keys(insert.datos[0]);
    const headerRow = document.createElement('tr');
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

   
    insert.datos.forEach(dato => {
        const row = document.createElement('tr');
        headers.forEach(header => {
            const td = document.createElement('td');
            td.textContent = dato[header];
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });

    
    tabla.appendChild(thead);
    tabla.appendChild(tbody);

    tablaContainer.appendChild(tabla);

    
    content.appendChild(tablaContainer);
});