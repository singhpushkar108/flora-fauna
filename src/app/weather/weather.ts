import { Component,OnInit } from '@angular/core';
import { Services } from '../service/services';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.html',
  styleUrls: ['./weather.css'],
  providers: [DatePipe]
})
export class WeatherComponent implements OnInit{

  public options:any = {};
  public headerMenus = [
    {route:'/', name:'Home'},
    {route:'/news', name:'News'},
    {route:'/about', name:'About'},
  ];
  public weatherData:any = {};
  public weatherArr:any =[];
  public today:any = new Date();

  constructor(private service:Services, private datePipe: DatePipe){};
  

  ngOnInit(): void {
    let temp = this.today;

    this.service.wetherReport().subscribe((response)=>{
      if(response!=null){

        const year  = this.today.getFullYear();
        const month = this.today.getMonth() + 1; // Months are zero-indexed, so January is 0
        const day   = this.today.getDate();

        this.today  = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;


        this.weatherData.city         = response.city.name;
        this.weatherData.poputlation  = response.poputlation;
        let time                     = new Date(response.city.sunrise*1000);
        this.weatherData.sunrise     = time.getHours()+':'+(time.getMinutes()<10 ?'0':'')+time.getMinutes();
        time                         = new Date(response.city.sunset*1000);
        this.weatherData.sunset      = time.getHours()+':'+(time.getMinutes()<10 ?'0':'')+time.getMinutes();

        let seenDates                = new Set();

        for(const report of response.list){
          report.dt_txt           = this.datePipe.transform(report.dt_txt.split(' ')[0], 'dd-MM-yyyy');

          report.weather[0].icon  =  "https://openweathermap.org/img/wn/"+(report.weather[0].icon.substring(0,2)+'d'+report.weather[0].icon.substring(3))+"@2x.png";
          
          report.visibility       = (report. visibility / 1000).toFixed(2);

          if(!seenDates.has(report.dt_txt ) && seenDates.size < 4){
            
            this.weatherArr.push(report);

            seenDates.add(report.dt_txt );
          }else{
            continue;
          }

        }
        console.log(this.weatherArr);



       /*  this.weatherData.weather     = response.weather[0];
        this.weatherData.coordinates = response.coord;
        this.weatherData.main        = response.main;
        this.weatherData.wind        = response.wind;
        this.weatherData.date        = new Date(response.dt*1000).toLocaleDateString();
        let time                     = new Date(response.sys.sunrise*1000);
        this.weatherData.sunrise     = time.getHours()+':'+(time.getMinutes()<10 ?'0':'')+time.getMinutes();
        time                         = new Date(response.sys.sunset*1000);
        this.weatherData.sunset      = time.getHours()+':'+(time.getMinutes()<10 ?'0':'')+time.getMinutes();
        this.weatherData.imgSrc      = "https://openweathermap.org/img/wn/"+response.weather[0].icon+"@2x.png";
        this.weatherData.visibility  = ((response.visibility)/1000).toFixed(2) */
      }
      
    });


    this.options.menus = this.headerMenus;
  }

}
