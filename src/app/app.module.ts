import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule  } from "@angular/material/checkbox";
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { LoginformComponent } from './loginform/loginform.component';
import { HomeComponent } from './home/home.component';
import { MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { MatGridListModule } from "@angular/material/grid-list";
import { MatListModule } from "@angular/material/list";
import { MatTreeModule } from "@angular/material/tree";
import { ChailistComponent } from './chailist/chailist.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    HomeComponent,
    ChailistComponent, 
  ],
  imports: [
    FormsModule,
     MatCheckboxModule,
     MatCardModule,
     MatRadioModule,
     BrowserAnimationsModule,
    MatInputModule,
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule,
    MatTreeModule,
    AppRoutingModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;
 }
