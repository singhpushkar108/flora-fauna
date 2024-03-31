import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatInputModule } from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MainbodyComponent } from './mainbody/mainbody.component';
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule, routedComponents  } from './app-routing.module';
import { Services } from './service/services';
import { HeaderComponent } from './header/header';
import { FooterComponent } from './footer/footer';

@NgModule({
  declarations: [

    AppComponent,
    MainbodyComponent,
    HeaderComponent,
    FooterComponent,
    routedComponents,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    AppRoutingModule,
    HttpClientModule
  ],

  providers: [Services],
  bootstrap: [AppComponent]
})
export class AppModule { }
