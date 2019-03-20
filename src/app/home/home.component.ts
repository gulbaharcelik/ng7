import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';  //We're first importing the DataService at the top.

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  h1Style: boolean = false;
  users: Object;

  constructor(private data: DataService) { }  //We're creating an instance of it through dependency injection within the constructor() function.


  //ngOnInit() function, which is a lifecycle hook for Angular. Any code placed in here will run when the component is loaded.
  ngOnInit() {
    this.data.getUsers().subscribe((data: any) => {
      this.users = data;
      console.log(this.users);
    })
  }

  // firstClick = () => {
  //   this.data.firstClick(); //Then we call the method with this.data.firstClick() when the user clicks on the button.
  // }
}
