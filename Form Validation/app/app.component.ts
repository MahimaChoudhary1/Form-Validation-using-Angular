import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormdataService } from './service/formdata.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_ICT';
  
  registrationForm = new FormGroup({
   firstName: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100),
      Validators.pattern('^[a-zA-Z ]*$'),
    ]),
    lastName: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100),
      Validators.pattern('^[a-zA-Z ]*$'),
    ]),
    birthdayDate: new FormControl(null, [
      Validators.required,
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
    ]),
    phoneNumber: new FormControl(null, [
      Validators.required,
      Validators.pattern("[0-9]{10}"),
    ]),
    inlineRadioOptions: new FormControl(null, [
      Validators.required,
    ]),
    choose: new FormControl(null, [
      Validators.required,
    ]),
  })
  apiuserdata: any;
  getcall: any;
  submittedForm=false;
  data:any ;
  alert: boolean = false;
  get firstName() {
    return this.registrationForm.get('firstName') as FormControl;
  }
  get lastName() {
    return this.registrationForm.get('lastName') as FormControl;
  }
  get birthdayDate() {
    return this.registrationForm.get('birthdayDate') as FormControl;
  }
  get email() {
    return this.registrationForm.get('email') as FormControl;
  }
  get phoneNumber() {
    return this.registrationForm.get('phoneNumber') as FormControl;
  }
  get inlineRadioOptions() {
    return this.registrationForm.get('inlineRadioOptions') as FormControl;
  }
  get choose() {
    return this.registrationForm.get('choose') as FormControl;
  }
   constructor(private user:FormdataService){
     this.user.getcall().subscribe((data)=>{
       this.getcall=data;
     });
   }
 
    
  submitForm(data: any){
    if(this.registrationForm.invalid)
    window.alert("Data is Invalid!!");
    else{
      this.data={
        firstName: this.registrationForm.controls['firstName'].value,
        lastName: this.registrationForm.controls['lastName'].value,
        birthdayDate: this.registrationForm.controls['birthdayDate'].value,
        email: this.registrationForm.controls['email'].value,
        inlineRadioOptions: this.registrationForm.controls[  'inlineRadioOptions'].value,
        phoneNumber: this.registrationForm.controls['phoneNumber'].value,
        choose: this.registrationForm.controls['choose'].value,


      }
    this.user.adduser(data).subscribe((result)=>{
      console.log(result);
    })

  }

}
 

onSubmit(){
  this.submittedForm = true;
  alert('Click Ok to proceed !!');
  if (this.registrationForm.valid) {
  }
  this.alert = true;
 
}

 
}