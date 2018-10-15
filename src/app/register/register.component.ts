import { Component, OnInit } from '@angular/core';
import {subservice} from '../../post/web.service';
import {NgForm} from '@angular/forms';
import {Router,Routes,RouterLink} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private submitServe: subservice) {}
  addStudent:{};
 
  data;

  postStudent(form: NgForm) {
    console.log(form.value);
    this.submitServe.postRegister(form.value)
    .subscribe(response => {
      console.log(response);
      if(sessionStorage.length < 1){
        //@ts-ignore
        this.data=response.body;
        sessionStorage.setItem('data', this.data);
      }else{
        sessionStorage.clear();
        //@ts-ignore
        this.data=response.body;
        sessionStorage.setItem('data', this.data);
      }
    },
      (error) => console.log('Problem accuired during login.'));
      this.header();
      this.loadDisplayBooks();
    } 
    loadDisplayBooks(){
      this.router.navigate(['/displaybooks']);
    }
    header() {
      var x = document.getElementById("loginheader");
      var y = document.getElementById("header");   
          x.style.visibility = "hidden";
          y.style.visibility = "visible"
    }
  ngOnInit() {
  }

}
