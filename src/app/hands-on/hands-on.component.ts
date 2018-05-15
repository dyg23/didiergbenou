import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hands-on',
  templateUrl: './hands-on.component.html',
  styleUrls: ['./hands-on.component.css']
})
export class HandsOnComponent implements OnInit {

  loading = true;

  constructor() { }

  ngOnInit() {
  }

  stopLoading(){
    this.loading = false;
  }

}
