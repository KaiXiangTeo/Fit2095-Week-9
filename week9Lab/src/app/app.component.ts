import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Week 9 Lab';
  bookTitle:string = "";
  bookdate:string = "";
  // bookCount:number=0;
  booktype:Array<string> =["Hard Cover","Paper Back"];
  newbookType:string="";
  summary:string="";
  bookArr=[]

  selectbookType(bktype):void{
    this.newbookType= bktype;
  }
  saveBook():void{
    this.bookArr.push({
      Title: this.bookTitle, 
      pubDate: this.bookdate, 
      Type: this.newbookType, 
      Summary: this.summary
    });
  }

  deleteHardCover():void{
    this.bookArr=this.bookArr.filter(function(element):boolean{  
     return element.Type !="Hard Cover"
    });
  }

  hardCoverNum():number{
    return this.bookArr.filter(function(element):boolean{  
     return element.Type =="Hard Cover"
    }).length;
  }

  deleteItem(index):void {
      this.bookArr.splice(index, 1);
    }

}
