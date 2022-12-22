sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("iddata.inputdataconverttable.controller.View1", {
            onInit: function () {
                this.arry = [] ;
                this.obj ={};
            },


            submit: function () {

                var val1 = this.getView().byId("Id1").getValue();
                var val2 = this.getView().byId("Id2").getValue();
                var val3 = this.getView().byId("Id3").getValue();

                this.obj.Name = val1;
                this.obj.Salary = val2;
                this.obj.Location = val3;

                this.arry.push(this.obj);
                this.obj = {};

                /*    var arry = [{ "Name": val1,
                     "Salary": val2,
                      "Location": val3 }]    
                    var obj = { }
            
                          obj.name = val1;
                          obj.salary = val2;
                          obj.location = val3;  */


                //   obj = ("Name":"Shyam", "Salary":20000, "location":"Bangalore");

                //var  arry = [{"Name":"Rita","Salary":300000,"Location":"Pune"}];
                //   arry.push(obj);
                var oModel = new sap.ui.model.json.JSONModel();
                oModel.setData(this.arry);
                this.getView().setModel(oModel, "Data1");
            }



        });
    });
