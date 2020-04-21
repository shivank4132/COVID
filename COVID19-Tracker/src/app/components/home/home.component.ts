import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { GlobalDataSummary } from '../../models/global-data';
import { NewsData } from '../../models/global-data';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalConfirmed=0;
  totalRecovered=0;
  totalDeaths=0;
  totalActive=0;

  datatable = [];

  news:Observable<NewsData>;
  
  globalData: GlobalDataSummary[];

  pie = 'PieChart'
  geo = 'GeoChart'
 // line = 'LineChart'
  constructor(private dataService: DataService, private location: Location) { }



  ngOnInit(): void {


    this.dataService.getData()
      .subscribe(
        {
          next: (result) => {
            console.log(result);
            this.globalData = result;
            result.forEach(cases => {
              if (!Number.isNaN(cases.confirmed)) {
                this.totalActive += cases.active
                this.totalConfirmed += cases.confirmed
                this.totalDeaths += cases.deaths
                this.totalRecovered += cases.active
              }

            })

            this.initChart('c');
          }
          }
        
      )

    this.news=this.dataService.getNews();

  }

  load(){
    window.location.reload();
  }


  updateChart(input: HTMLInputElement) {
    console.log(input.value);
    this.initChart(input.value)
  }

  initChart(caseType: string) {

    let dt = [];

    console.log(caseType);
    console.log(this.globalData);
    

    this.globalData.forEach(cases => {
      let value :number ;
      if (caseType == 'c')
        if (cases.confirmed > 5000)
          value = cases.confirmed;

      if (caseType == 'a')
        if (cases.active > 5000)
          value = cases.active
      
      if (caseType == 'd')
        if (cases.deaths > 500)
          value = cases.deaths

      if (caseType == 'r')
        if (cases.recovered > 1500)
            value = cases.recovered


        if(value){
          dt.push([
           cases.country , value
          ])
        }
    })
    console.log(dt);
    this.datatable = dt;
   
  }

}
