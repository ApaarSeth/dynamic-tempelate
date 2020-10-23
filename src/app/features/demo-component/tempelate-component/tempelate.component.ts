import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';


@Component({
    selector: 'app-tempelate',
    templateUrl: 'tempelate.component.html'
})

export class TempelateComponent implements OnInit, OnChanges {

    @Input('data') data: any;
    XSmall: string = '(max-width: 599px)';
    isMob: boolean = false;
    formData: any;
    form: FormGroup;

    constructor(private mediaMatcher: MediaMatcher,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.isMob = this.mediaMatcher.matchMedia(this.XSmall).matches;
        if (this.data) {
            this.formData = this.data.find(val => {
                return val.type == 'formElements'
            })
            this.formInit(this.formData)
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
    }

    formInit(data) {
        this.form = this.formBuilder.group({
        })
        data.inputList.map(val => {
            if (val.type === 'checkbox') {
                const formArr: FormGroup[] = val.values.map(data => {
                    return this.formBuilder.group({
                        checkBoxData: [data.selected ? data : null]
                    });
                });
                this.form.addControl(val.formControlName, new FormArray(formArr));
            }
            else {
                this.form.addControl(val.formControlName, new FormControl(''))
            }
        })

    }

    materialChecked(checked: MatCheckbox, i: number, formArrayName, element) {
        const arr = this.form.controls[formArrayName] as FormArray;
        const fGrp = arr.at(i) as FormGroup;

        if (checked.checked) {
            element.selected = true;
            fGrp.get("checkBoxData").setValue(element);
        } else {
            element.selected = false;
            fGrp.get("material").reset();
        }
    }

    submit() {
        if (this.form.value.checkbox) {
            this.form.value.checkbox = this.form.value.checkbox.map(val => {
                if (val.checkBoxData != null) {
                    return val.checkBoxData
                }
            }).filter(val => {
                if (val) {
                    return val
                }
            })
        }
        console.log(this.form.value)
    }
}