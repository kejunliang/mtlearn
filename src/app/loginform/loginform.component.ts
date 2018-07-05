import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatIcon}  from '@angular/material/icon';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  hide = true;
  constructor(private router: Router) {
  }
  name=""
  password=""
  flag=false;
  goHome(): void{
    
     if(this.name=="kejl"&&this.password=="kejl"){
      this.router.navigate(['/home']);
     }
     else{
      this.flag=true
     }
    

  }


  ngOnInit() {
    console.log("ceshi");
  }

}
