import { Component, OnInit } from '@angular/core';  
import {FormGroup,FormControl,Validators,FormsModule, } from '@angular/forms';  
import {CommonService} from '../common.service';  
   
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
  
@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss']
})  
export class DevelopersComponent {  
    
     
  constructor(private newService :CommonService,) {   }  
   Repdata;  
   valbutton ="Guardar";  
   
   
ngOnInit() {    
  this.newService.GetUser().subscribe(data =>  this.Repdata = data)  
}  
  
onSave = function(user,isValid: boolean) {    
 user.mode= this.valbutton;  
  this.newService.saveUser(user)  
  .subscribe(data =>  {  alert(data.data);  
       
    this.ngOnInit();    
  }   
  , error => this.errorMessage = error )  
    
}      
edit = function(kk) {  
this.id = kk._id;  
this.name= kk.name;
this.apellido= kk.apellido;  
this.address= kk.address;
this.aboutme= kk.aboutme;  
this.valbutton ="Actualizar";  
}  
  
delete = function(id) {  
this.newService.deleteUser(id)  
.subscribe(data =>   { alert(data.data) ; this.ngOnInit();}, error => this.errorMessage = error )   
}  
  
}