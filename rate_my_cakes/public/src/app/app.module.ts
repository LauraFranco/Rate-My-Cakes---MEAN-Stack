import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
  ],
  providers: [
    HttpService
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
