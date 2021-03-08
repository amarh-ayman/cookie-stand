'use_strict';

let hoursOpen = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
let numberStores = ["Seattle", "Tokyo", "Dubai", "Paris", "Lima"];

let storeCookies = {

    totalHourArrayFinal: [], ////array for every hours and for every loc , 2D array
    TotalStores_Salary: 0, ////////for accounting every cookies per all location's

    RandomCustomers: function(min, max) { ///////////Random Customer's
        var R_cutm = Math.floor((Math.random() * (max - min)) + min);
        return R_cutm;
    },


    hourswork_custm: function(name, avgSales, minCustm, maxCustm, hourSales, totalSales, totalHourArray) {
        //    var totalHourArray = []; ////////array for cookies / location , in one location 

        // let element = document.getElementById(name);
        let tr = document.createElement('tr');

        let td = document.createElement('td');
        td.textContent = name;
        td.style.background = 'black'
        td.style.color = 'white'
        tr.append(td);

        for (i = 0; i < hoursOpen.length; i++) {
            hourSales = Math.floor(avgSales * storeCookies.RandomCustomers(minCustm, maxCustm));

            totalSales += hourSales; //// total salary in one store
            totalHourArray.push(hourSales); ///array for all hours in one location 

            let td1 = document.createElement('td');
            td1.textContent = hourSales;
            td1.style.background = 'rgb(16, 180, 221)'
            td1.style.color = 'white'
            tr.append(td1);
        }

        let td2 = document.createElement('td');
        td2.textContent = totalSales;
        td2.style.color = 'pink';
        td2.style.background = 'blue';
        tr.append(td2);

        storeCookies.TotalStores_Salary += totalSales; ///account every thing

        table.appendChild(tr);
        storeCookies.totalHourArrayFinal.push(totalHourArray); //// array for all hours for all stores , for later account the salary or custmor in specific hour
    }
}

let Header = function() {
    let headerTable = document.getElementById('headerTable');
    let article = document.createElement('article');
    headerTable.appendChild(article);

    table = document.createElement('table');
    table.setAttribute('border', '5');

    let tr = document.createElement('tr');
    let th = document.createElement('th');
    th.textContent = "Location\\Time";
    tr.append(th);
    for (var i = 0; i < hoursOpen.length; i++) {

        th = document.createElement('th');
        th.textContent = hoursOpen[i];
        tr.append(th);
    }

    let th1 = document.createElement('th');
    th1.textContent = "Total";
    tr.append(th1);

    th1.style.color = 'pink';
    th1.style.background = 'blue';

    tr.style.color = 'white';
    tr.style.background = 'black';
    table.appendChild(tr);
    article.appendChild(table);
}

let footer = function() {

    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.textContent = "Totals";
    tr.append(td)

    for (i = 0; i < hoursOpen.length; i++) {
        var finalTotal = 0;
        for (var y = 0; y < numberStores.length; y++) {
            finalTotal = finalTotal + storeCookies.totalHourArrayFinal[y][i];
        }
        td = document.createElement('td');
        td.textContent = finalTotal;


        tr.append(td);

    }
    td = document.createElement('td');
    td.textContent = storeCookies.TotalStores_Salary;
    tr.style.color = 'pink';
    tr.style.background = 'blue';
    tr.append(td)
    table.appendChild(tr);
}

Header();
let Seattle = new storeCookies.hourswork_custm('Seattle', 6.3, 23, 65, 0, 0, []);
let Tokyo = new storeCookies.hourswork_custm('Tokyo', 1.2, 3, 24, 0, 0, []);
let Dubai = new storeCookies.hourswork_custm('Dubai', 3.7, 11, 38, 0, 0, []);
let Paris = new storeCookies.hourswork_custm('Paris', 2.3, 20, 38, 0, 0, []);
let Lima = new storeCookies.hourswork_custm('Lima', 4.6, 2, 16, 0, 0, []);
let ammam = new storeCookies.hourswork_custm('Amman', 5, 2, 16, 0, 0, []);
footer();