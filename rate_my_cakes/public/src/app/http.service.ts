import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  this: any;
  comment: any;

  constructor(private _http: HttpClient){
    // this.getCakes();
    // this.getComment();
}

getCakes(){
console.log("getting all cakes!!!!!");
return this._http.get('/cakes');
}

newCake(cake){
return this._http.post('/cakes/create', cake);
}
oneCake(cake){
return this._http.get('/cakes/'+ cake._id, cake);
}

newComment(comment, id){
return this._http.post('/comments/create/' + id, comment);
}
oneComment(comment){
return this._http.post('/comments/' + comment._id, comment);
}

}



