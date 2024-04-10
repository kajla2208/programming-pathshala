const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London%2CUK?unitGroup=us&key=YTKJ276BWFJ7K57VETMX7F5MD';
function fetchAPI(url) {
    
    fetch(url).then((res)=>res.json())
    .then(data=>{renderAPI(data)});
}

fetchAPI(url);
function renderAPI(data){
    const days = data.days;
    console.log(days);

    for(let i=0;i<days.length;i++){
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.innerText=days[i].datetime;
        // td.innerText=days[i].conditions;
        tr.appendChild(td);
        root.append(tr);
        }

        for(let i=0;i<days.length;i++){
            const tr = document.createElement("tr");
            const td = document.createElement("td");
            // td.innerText=days[i].datetime;
            td.innerText=days[i].conditions;
            tr.appendChild(td);
            root.append(tr);
            }
    // const row = document.createElement('tr');

    // //make heading row
    // const  cell1 = document.createElement('th');
    // cell1.innerText='Date';
    // row.appendChild(cell1);

    // const cell2 = document.createElement('th');
    // cell2.innerText='Maximum Temprature';
    // row.appendChild(cell2);

    // const cell3 = document.createElement('th');
    // cell3.innerText='Minimum Temprature';
    // row.appendChild(cell3);

    // root.append(row);

    // const  childrow = document.createElement('row');
    // const c1 = document.createElement('th');
    // c1.innerText='Date';
    // row.appendChild(c1);


}
// renderAPI();