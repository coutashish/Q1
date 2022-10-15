import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
  index :number=0;
  ans:number|undefined;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.ans = this.index*this.index;
    if(this.index % 2 == 0){this.ans=this.ans-1}else{this.ans=this.ans+1}
    
  }

}
