import { Component } from '@angular/core';
import { ExampleService } from './example.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example';
  fruits = [];
  count =0
  constructor(private service:ExampleService){

  }
  fruitList(){
   this.service.fruitShopData().subscribe(response =>{
     this.fruits = response.fruitList
     console.log("my fruit list", this.fruits)
   }) 
  }
  addItem(){
    this.count++;
  }
}
