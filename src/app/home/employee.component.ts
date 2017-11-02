import { Component, OnInit } from '@angular/core';
import { ExportColumns } from './export-columns';
import { ExportUtility } from './export-utility';

@Component({
    selector: 'app-employees',
    templateUrl: 'employee.component.html'
})

export class EmployeeComponent implements OnInit {
    public employees: any[];

    constructor() { }

    ngOnInit() {
        this.employees = [
            { firstName: "Ash", lastName: "Richard", birthdate: new Date("01/01/1991"), gender: "Male" },
            { firstName: "Awuzie", lastName: "Chidobe", birthdate: new Date("02/02/1992"), gender: "Male" },
            { firstName: "Bailey", lastName: "Dan", birthdate: new Date("03/03/1993"), gender: "Male" },
            { firstName: "Beasley", lastName: "Cole", birthdate: new Date("04/04/1994"), gender: "Male" },
            { firstName: "Prescott", lastName: "Dak", birthdate: new Date("05/05/1995"), gender: "Male" },
        ];
    }

    exportFile(): void {
        let collection: any[] = [];
        let columns: any[] = ExportColumns.getColumns();

        let exprtcsv: any[] = [];
        (<any[]>JSON.parse(JSON.stringify(this.employees))).forEach(employee => {
            let row = new Object();
            for (let i = 0; i < columns.length; i++) {
                let transfrmValue = ExportUtility.transform(employee[columns[i].variable], columns[i].filter);
                row[columns[i].display] = transfrmValue;
            }
            exprtcsv.push(row);
        });

        ExportUtility.downloadcsv(exprtcsv, "employees_");
    }
}
