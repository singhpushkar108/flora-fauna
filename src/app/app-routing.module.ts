import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainbodyComponent } from './mainbody/mainbody.component';
import { SignupComponent } from './signup/signup';
import { AboutComponent } from './about/about';
import { NewsComponent } from './news/news';
import { WeatherComponent } from './weather/weather';


const routes: Routes = [
/* {
  // default path
  path: '/',
  component: signupComponent 
}, */

{
  //if the path is not matching
  path: " ", redirectTo:'home', pathMatch:'full'
},
{
  // to home path
  path: "home", component: MainbodyComponent
},
{
  path: "user/signUp" , component: SignupComponent
},
{
  path: "about" , component: AboutComponent

},
{
  path:'news' , component : NewsComponent
},
{
  path:'weather' , component : WeatherComponent
},
{
  path: '**' , component: MainbodyComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export  const routedComponents =[MainbodyComponent,SignupComponent,AboutComponent,NewsComponent,WeatherComponent]; // instead of importing each components multiple times we use this way to export all the components and access them in app.module.ts
