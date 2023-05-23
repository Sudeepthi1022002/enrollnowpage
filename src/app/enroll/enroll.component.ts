import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit{
 
  
  
  constructor(){}
  ngOnInit(): void{
    
  }
  enrollForm=new FormGroup({
    firstName : new FormControl(""),
    lastName: new FormControl(""),
    age: new FormControl(""),
    gender: new FormControl(""),
    fatherName:new FormControl(""),
    motherName:new FormControl(""),
    phoneNumber1:new FormControl(""),
    phoneNumber2:new FormControl(""),
    emailId: new FormControl(""),
    houseNo:new FormControl(""),
    streetName:new FormControl(""),
    areaName:new FormControl(""),
    pincode:new FormControl(""),
    state:new FormControl(""),
    nationality:new FormControl(""),

  });
  enrollSubmitted(){
    console.log(this.enrollForm.value);
  }
alertWithSuccess(){
    Swal.fire("Thank You...",'You Enrolled Successfully','success')
  }
  }


