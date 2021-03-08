'use_strict';

var hoursOpen = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
var numberStores = ["Seattle", "Tokyo", "Dubai", "Paris", "Lima"];

let storeCookies = {

    totalHourArrayFinal: [],
    TotalStores_Salary: 0,
    RandomCustomers: function(min, max) {
        var R_cutm = Math.floor((Math.random() * (max - min)) + min);

        return R_cutm;
    },


    hourswork_custm: function(name, avgSales, minCustm, maxCustm, hourSales, totalSales) {
        var totalHourArray = [];

        let element = document.getElementById(name);

        for (i = 0; i < hoursOpen.length; i++) {
            hourSales = Math.floor(avgSales * this.RandomCustomers(minCustm, maxCustm));

            totalSales += hourSales; //// total salary in one store
            totalHourArray.push(hourSales); ///array for all hours in one store 

            let tag = document.createElement('li');
            tag.innerHTML = hoursOpen[i] + " : " + hourSales + " Cookies";
            element.appendChild(tag);
        }

        this.TotalStores_Salary += totalSales; ///account every thing
        let tag = document.createElement('div');
        tag.innerHTML = "Total Cookies " + totalSales;
        element.appendChild(tag);
        //console.log("total salary  " + this.TotalStores_Salary)
        this.totalHourArrayFinal.push(totalHourArray); //// array for all hours for all stores , for later account the salary or custmor in specific hour
        hourSales = 0;

    },
    ///////////////////////not neccessary one 
    finalresult: function() {

        for (i = 0; i < hoursOpen.length; i++) {
            var finalTotal = 0;
            for (var y = 0; y < numberStores.length; y++) {
                finalTotal = finalTotal + this.totalHourArrayFinal[y][i]
            }
        }
    },
    ///////////////////////////////////////
    Seattle: function() {
        this.hourswork_custm('Seattle', 6.3, 23, 65, 0, 0);
    },
    Tokyo: function() {
        this.hourswork_custm('Tokyo', 1.2, 3, 24, 0, 0);
    },
    Dubai: function() {
        this.hourswork_custm('Dubai', 3.7, 11, 38, 0, 0);
    },
    Paris: function() {
        this.hourswork_custm('Paris', 2.3, 20, 38, 0, 0);
    },
    Lima: function() {
        this.hourswork_custm('Lima', 4.6, 2, 16, 0, 0);
    },

    final_result() {
        let element = document.getElementById("final");
        let tag = document.createElement('div');
        tag.innerHTML = "Total Cookies for All Stores = " + this.TotalStores_Salary;
        element.appendChild(tag);
    }
}


storeCookies.Seattle();
storeCookies.Tokyo();
storeCookies.Dubai();
storeCookies.Paris();
storeCookies.Lima();
storeCookies.final_result();