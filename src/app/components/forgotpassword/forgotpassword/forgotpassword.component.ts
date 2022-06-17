import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  forgotForm!:FormGroup;
  submitted=false;

  constructor(private formBuilder:FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.forgotForm=this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(){
    if(this.forgotForm.valid){
      console.log("valid data",this.forgotForm.value);
      let reqData={
        email:this.forgotForm.value.username
      }
      this.user.forgot(reqData).subscribe((result:any)=> {
        console.log(result);
      })
    }
    else{
      console.log("invalid data",this.forgotForm.value);
    }
  }


}
