'use strict';

let totalHourArrayFinal = []; ////array for every hours and for every loc , 2D array
let TotalStores_Salary = 0; ////////for accounting every cookies per all location's
let hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let arrayForAllLocationsInfo = [
  ['Seattle', 6.3, 23, 65, 0, 0, []],
  ['Tokyo', 1.2, 3, 24, 0, 0, []],
  ['Dubai', 3.7, 11, 38, 0, 0, []],
  ['Paris', 2.3, 20, 38, 0, 0, []],
  ['Lima', 4.6, 2, 16, 0, 0, []]
];
let headerTable = document.getElementById('headerTable');
let article = document.createElement('article');
headerTable.appendChild(article);

let table = document.createElement('table');
table.setAttribute('border', '5' ,'solid');
let trfotr = document.createElement('tr');

let form=document.getElementById('Cookiesform');


let header = function() {

  let tr = document.createElement('tr');
  let th = document.createElement('th');
  th.textContent = 'Location\\Time';
  tr.append(th);

  for (var i = 0; i < hoursOpen.length; i++) {
    th = document.createElement('th');
    th.textContent = hoursOpen[i];
    tr.append(th);
  }

  let th1 = document.createElement('th');
  th1.textContent = 'Total';
  tr.append(th1);

  th1.style.color = 'pink';
  th1.style.background = 'blue';

  tr.style.color = 'white';
  tr.style.background = 'black';
  table.appendChild(tr);
  article.appendChild(table);
};


let StoreCookies = function(array_loc) {
  this.name = array_loc[0];
  this.avgSales = array_loc[1];
  this.minCustm = array_loc[2];
  this.maxCustm = array_loc[3];
  this.hourSales = array_loc[4];
  this.totalSales = array_loc[5];
  this.totalHourArray = array_loc[6];
};


StoreCookies.prototype.randomCustomers = function() { ///////////Random Customer's
  var R_cutm = Math.floor((Math.random() * (this.maxCustm - this.minCustm)) + this.minCustm);
  return R_cutm;
};

StoreCookies.prototype.render = function() {
  let tr = document.createElement('tr'); ////for making record
  let td = document.createElement('td'); ////for cell's
  td.textContent = this.name; /////name of the cell
  td.style.background = 'black';
  td.style.color = 'white';
  tr.append(td); ///put <td> value in <tr>
  ///////////////////////////////////////////////////////////

  for (let i = 0; i < hoursOpen.length; i++) {
    this.hourSales = Math.floor(this.avgSales * this.randomCustomers());
    this.totalSales += this.hourSales; //// total salary in one store
    this.totalHourArray.push(this.hourSales); ///array for all hours in one location
    let td1 = document.createElement('td');
    td1.textContent =this.hourSales;
    td1.style.background = 'rgb(16, 180, 221)';
    td1.style.color = 'white';
    tr.append(td1);
  }
  let td2 = document.createElement('td');
  td2.textContent =this.totalSales ;
  td2.style.color = 'pink';
  td2.style.background = 'blue';
  tr.append(td2);
  table.appendChild(tr);
  this.totalHourArray.push(this.totalSales);
  TotalStores_Salary += this.totalSales; ///account every thing
  totalHourArrayFinal.push(this.totalHourArray); //// array for all hours for all stores , for later account the salary or custmor in specific hour

};

let contantOfTable=function(){
  for (let i = 0; i < arrayForAllLocationsInfo.length; i++) {
    let newStoreForCookies = new StoreCookies(arrayForAllLocationsInfo[i]);
    newStoreForCookies.render();}
};

let footer = function() {
  let tdfotr = document.createElement('td');
  tdfotr.textContent = 'Totals';
  trfotr.append(tdfotr);

  for (let i = 0; i < hoursOpen.length; i++) {
    let finalTotal = 0;
    for (let y = 0; y < arrayForAllLocationsInfo.length; y++) {
      finalTotal = finalTotal + totalHourArrayFinal[y][i];
    }
    tdfotr = document.createElement('td');
    tdfotr.textContent = finalTotal;
    trfotr.append(tdfotr);
  }
  tdfotr = document.createElement('td');
  tdfotr.textContent = TotalStores_Salary;
  trfotr.style.color = 'pink';
  trfotr.style.background = 'blue';
  trfotr.append(tdfotr);
  table.appendChild(trfotr);
};


let addNewInstance=function(event){
  event.preventDefault();
  let locationByUser=event.target.Location.value;
  let avgSalesByUser=parseInt(event.target.AvgSales.value);
  let minSalesByUser=parseInt(event.target.MinSales.value);
  let maxSalesByUser=parseInt(event.target.MaxSales.value);

  arrayForAllLocationsInfo.push([locationByUser,avgSalesByUser,minSalesByUser,maxSalesByUser,0,0,[]]);
  let newInstance=new StoreCookies(arrayForAllLocationsInfo[arrayForAllLocationsInfo.length-1]);
  // trfotr.removeChild(tdfotr);
  table.removeChild(trfotr);
  trfotr.textContent='';
  newInstance.render();
  footer();
};



form.addEventListener('submit',addNewInstance);
header();
contantOfTable();
footer();



