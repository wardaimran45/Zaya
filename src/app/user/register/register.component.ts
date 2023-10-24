import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { EmailTaken } from '../validators/email-taken';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private auth: AngularFireAuth,
    private emailTaken: EmailTaken, private router: Router
    ){

  }

  showAlert = false
  alertMsg = 'Please wait! Your account is being created.'
  alertColor = 'red'
  inSubmission = false

  name= new FormControl('', [
    Validators.required,
    Validators.minLength(3)
   ])
   email= new FormControl('', [
    Validators.required,
    Validators.email
   ], [this.emailTaken.validate])
   
   password= new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
   ])
   

   registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    password: this.password,
  })

  async register(){
    this.showAlert = true
    this.alertMsg = 'Please wait! Your account is being created.'
    this.alertColor = 'blue'

    const {email, password} = this.registerForm.value

    try{
      const userCred = await this.auth.createUserWithEmailAndPassword(
        email as string, password as string
      )
    }
    catch(e){
      console.error(e)
      this.alertMsg = 'An unexpected error occurred. Try again later!'
      this.alertColor = 'red'
      return

    }
    this.alertMsg = 'Success! Your account has been created'
    this.alertColor = 'green'
    
    this.registerForm.reset();
    setTimeout(() => {
      this.router.navigate(['login']);
    }, 2000);
  }
}
