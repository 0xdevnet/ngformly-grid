import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFormOptions, FormlyFieldConfig } from "@ngx-formly/core/";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "mygrid";

  form = new FormGroup({});
  model: any = {
    name: "name1",
    surname: "surname1",
    investments: [
      {
        investmentName: "project1",
        investmentDate: "",
        stockIdentifier: 1,
      },
      {
        investmentName: "project2",
        investmentDate: "2004-06-20",
        stockIdentifier: 2,
      },
      {
        investmentName: "project3",
        investmentDate: "",
        stockIdentifier: 3,
      },
      {
        investmentName: "project4",
        investmentDate: "",
        stockIdentifier: 4,
      },
      {
        investmentName: "project5",
        investmentDate: "",
        stockIdentifier: 5,
      },
      {
        investmentName: "project6",
        investmentDate: "",
        stockIdentifier: 6,
      },
      {
        investmentName: "project7",
        investmentDate: "",
        stockIdentifier: 7,
      },
      {
        investmentName: "project8",
        investmentDate: "",
        stockIdentifier: 8,
      },
    ],
  };

  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      className: "section-label",
      template: "<h5>Personal data</h5>",
    },
    {
      fieldGroupClassName: "row",
      fieldGroup: [
        {
          key: "name",
          type: "input",
          className: "col-md-6",
          templateOptions: {
            label: "Name",
            required: true,
          },
        },
        {
          key: "surname",
          type: "input",
          className: "col-md-6",
          templateOptions: {
            label: "Surname",
            required: true,
          },
        },
      ],
    },
    {
      key: "investments",
      type: "grid",
      className: "ag-theme-balham",
      templateOptions: {
        height: "200px",
        gridOptions: {
          rowHeight: 42,
          columnDefs: [
            {
              headerName: "Name of Investment",
              field: "investmentName",
              sortable: true,
              width: 350,
            },
            {
              headerName: "Date of Investment",
              field: "investmentDate",
              sortable: true,
              width: 350,
            },
            {
              headerName: "Stock Identifier",
              field: "stockIdentifier",
              // width: 330,
            },
          ],
        },
      },
      fieldArray: {
        fieldGroup: [
          {
            type: "input",
            key: "investmentName",
            templateOptions: {
              required: true,
            },
          },
          {
            type: "input",
            key: "investmentDate",
            templateOptions: {
              type: "date",
            },
          },
          {
            type: "input",
            key: "stockIdentifier",
            templateOptions: {},
          },
        ],
      },
    },
  ];

  submit() {
    alert(JSON.stringify(this.model));
  }
}
