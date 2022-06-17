import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm!:FormGroup;
submitted=false;
  constructor(private formBuilder:FormBuilder,private router:Router ,private user:UserService) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    });
  }

  onSubmit()
  {
    if(this.loginForm.valid){
      console.log("Login Successfully",this.loginForm.value);
      let reqData={
        email:this.loginForm.value.email,
        password:this.loginForm.value.password
      }
      this.user.login(reqData).subscribe((result:any)=>{
        console.log(result);
        localStorage.setItem('token',result.token); 
        this.router.navigateByUrl('/dashboard/notes')  
      })
    }
    else{
      console.log("invalid data",this.loginForm.value);
    }
    // this.snackBar.open('Login Successfully..!!!', '..', {
    //   duration: 3000,
    // })

    
  }


}
