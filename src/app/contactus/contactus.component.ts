import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
declare var $: any;
var arr:any;

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  public myform: any;
  public data: any;

  constructor(public formbuilder: FormBuilder, public _http: HttpClient) {


    this.myform = this.formbuilder.group({

      fname: ['', Validators.required],
      lname: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
      country: ['', Validators.required],
      pnumber: ['', Validators.compose([Validators.required, Validators.pattern(/[0-9\+\-\ ]/)])],
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
      comment: ['', Validators.required],



    })
  }

  ngOnInit() {
  }

  doSubmit(){
    console.log('ok');
    this.data = this.myform.value;
    for (let i in this.myform.controls) {
      this.myform.controls[i].markAsTouched();
    }

  }

  inputUntouch(form: any, val: any) {
    console.log('on blur .....');
    form.controls[val].markAsUntouched();
  }

}
