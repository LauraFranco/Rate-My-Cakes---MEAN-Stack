import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';
import { CakeComponent } from './about_cake/about_cake.component';
import { Cake } from './models/cake';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



// Implement OnInit.
export class AppComponent implements OnInit {
    title='Rate My Cakes';
    newCake = new Cake();
    comment = new Comment();
    cakes = [];
    selectedCake:any;




    constructor(private _httpService: HttpService){}

    ngOnInit(){
      this._httpService.getCakes().subscribe(cakes => {
        console.log(cakes);
        this.cakes = cakes as any;
      } )
    }

    createCake(cakeForm: NgForm){
      this._httpService.newCake(this.newCake)
      .subscribe(data => {
      this.newCake = new Cake();
      console.log("Submitting cake!!!!");
      cakeForm.resetForm();
      });
    }
    oneCake(cake){
      this._httpService.oneCake(cake)
      .subscribe(data =>{
        this.selectedCake = data;
        let avg = 0
        for(let i = 0; i < this.selectedCake.comments.length; i++) {
          avg += this.selectedCake.comments[i].rating
        }
        this.selectedCake.avg = avg / this.selectedCake.comments.length
        // console.log(data)
        console.log("Displaying one cake!!!");
      })
    }

    createComment(commentForm: NgForm, id){
      this._httpService.newComment(this.comment, id)
      .subscribe(data => {
        this.comment = new Comment();
        console.log("Submitting cake!!!!");
        commentForm.resetForm();
      });
    }

  }

  

    




