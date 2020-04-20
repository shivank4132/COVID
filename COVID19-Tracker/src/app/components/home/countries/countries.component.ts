import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { GlobalDataSummary } from 'src/app/models/global-data';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  data : GlobalDataSummary[];
  countries:string[]=[];
  totalConfirmed=0;
  totalRecovered=0;
  totalDeaths=0;
  totalActive=0;


  constructor(private service : DataService) { }

  ngOnInit(): void {

    this.service.getData().subscribe(result =>{
        this.data=result;
        this.data.forEach(cases=>{
          this.countries.push(cases.country)

        })
    })
   
  }

  updateValues(country:string){
    
    this.data.forEach(cases=>{
      if(cases.country==country){
        this.totalConfirmed=cases.confirmed;
        this.totalRecovered=cases.recovered;
        this.totalActive=cases.active;
        this.totalDeaths=cases.deaths;
      }
    })
    
  }

}
