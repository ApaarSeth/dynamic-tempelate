import { CreateDynamicComponentService } from './../../../shared/services/create-dynamic-component.service';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'app-demo',
    templateUrl: 'demo.component.html'
})

export class DemoComponent implements OnInit {
    @ViewChild('container', { static: true, read: ViewContainerRef }) public target: ViewContainerRef;
    constructor(private createDynamicComponentService: CreateDynamicComponentService) { }

    ngOnInit() {
        let pageConfig = [
            {
                type: 'formElements',
                formName: 'Form',
                formWebClass: 'pl-3 pb-3 pt-3  w-50 text-center',
                formMobileClass: '',
                webSubmitClass: 'w-100 text-center',
                mobileSubmitClass: '',
                inputList: [
                    {
                        type: 'input',
                        webContainerClass: 'col-md-6',
                        mobileContainerClass: 'col-xs-12',
                        webMatFormFieldClass: '',
                        mobileMatFormFieldClass: '',
                        label: 'Type Something...',
                        webInputType: '',
                        mobileInputType: '',
                        formControlName: 'input',
                        webInputClass: '',
                        mobileInputClass: ''
                    },
                    {
                        type: 'radio',
                        webContainerClass: 'col-md-6 pt-3 text-left',
                        mobileContainerClass: 'col-xs-12',
                        webMatFormFieldClass: '',
                        mobileMatFormFieldClass: '',
                        formControlName: 'radio',
                        webInputClass: '',
                        mobileInputClass: '',
                        values: [
                            { value: 'yes', name: 'Yes', webClass: 'pr-1', mobileClass: '' },
                            { value: 'no', name: 'No', webClass: '', mobileClass: '' }
                        ]
                    },
                    {
                        type: 'dropdown',
                        webContainerClass: 'col-md-6',
                        mobileContainerClass: 'col-xs-12',
                        webMatFormFieldClass: '',
                        mobileMatFormFieldClass: '',
                        label: 'Select Something...',
                        formControlName: 'dropdown',
                        webInputClass: '',
                        mobileInputClass: '',
                        showProperty: 'name',
                        values: [
                            { name: 'philips', rating: 5 }
                            , { name: 'panasonic', rating: 4 }
                            , { name: 'havells', rating: 3 }
                        ]
                    },
                    {
                        type: 'checkbox',
                        webContainerClass: 'col-md-6 text-left',
                        mobileContainerClass: 'col-xs-12',
                        webMatFormFieldClass: '',
                        mobileMatFormFieldClass: '',
                        formControlName: 'checkbox',
                        webCheckBoxClass: '',
                        mobileCheckBoxClass: '',
                        showProperty: 'name',
                        values: [
                            { name: 'philips', rating: 5, selected: true }
                            , { name: 'panasonic', rating: 4, selected: false }
                            , { name: 'havells', rating: 3, selected: false }
                        ]
                    }
                ]
            },
            {
                type: "table",
                webClass: "border-collapse border",
                mobileClass: "border-collapse background-blue border",
                content: {
                    header: {
                        webClass: "border",
                        mobileClass: "background-blue border",
                        colDefs: {
                            webClass: "border",
                            mobileClass: "background-blue border",
                            data: [
                                { label: "Company", field: "company" },
                                { label: "Contact", field: "contact" },
                                { label: "Country", field: "country" }
                            ]
                        }
                    },
                    row: {
                        webClass: "border",
                        mobileClass: "background-blue border",
                        rowDefs: {
                            webClass: "border",
                            mobileClass: "background-blue border",
                            data: [{
                                company: "Alfreds Futterkiste",
                                contact: "Maria Anders",
                                country: "Germany"
                            },
                            {
                                company: "Centro comercial Moctezuma",
                                contact: "Francisco Chang",
                                country: "Mexico"
                            }]
                        }
                    }
                }
            }
        ]
        this.createDynamicComponentService.createComponent(pageConfig, this.target)
    }

}