import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetForm!:FormGroup;
  submitted=false;
  token:any;

  constructor(private formBuilder:FormBuilder,private activeRoute:ActivatedRoute ,private user:UserService) { }

  ngOnInit(): void {
    this.token=this.activeRoute.snapshot.paramMap.get('token')
    this.resetForm=this.formBuilder.group({
    password: ['', [Validators.required, Validators.minLength(6)]],
    ConfirmPassword: ['', Validators.required]
    });
   
  }

  
onSubmit() {
  this.submitted=true;

  if(this.resetForm.valid){
    console.log("reset successful", this.resetForm.value);
    let reqData={
      password:this.resetForm.value.password,
      confirmPassword:this.resetForm.value.ConfirmPassword
    }
    console.log(this.token);
    console.log(reqData);
    this.user.resetPassword(reqData,this.token).subscribe((result:any)=> {
      console.log(result);
      
    });
  }
  else{
    console.log("password reset failed", this.resetForm.value);
  }
}
}
