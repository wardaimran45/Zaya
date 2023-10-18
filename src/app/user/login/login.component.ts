import { Component ,OnInit, ViewChild} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  @ViewChild('loginForm') loginForm: NgForm | undefined;
  credentials ={
    email: '',
    password: ''
   }
   showAlert = false
   alertMsg = "Please wait! We are logging you in."
   alertColor = 'blue'
   inSubmission = false
  constructor(private auth: AngularFireAuth, private router: Router, private authService: AuthService){}
  ngOnInit(): void {
    
  }

  async login(){
    this.showAlert = true
    this.alertMsg = "Please wait! We are logging you in."
    this.alertColor = 'blue'
    this.inSubmission = true
    try{
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email, this.credentials.password
      )
      if (this.loginForm) {
        this.loginForm.resetForm();
      }
      this.authService.setAuthenticated();
      this.router.navigate(['/checkout']);
    }
    catch(e){
      this.inSubmission = false
      this.alertMsg = 'Án unexpected error occurred'
      this.alertColor = 'red'

      console.log(e);
      return
      
    }
    this.alertMsg= 'Success! You are now logged In'
    this.alertColor = 'green'
  }
}
