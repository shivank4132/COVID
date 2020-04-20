import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { GlobalDataSummary } from '../models/global-data';
import { NewsData } from '../models/global-data'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataUrl="https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/04-19-2020.csv";
  private newsUrl="https://newsapi.org/v2/everything?q=COVID&from=2020-03-20&sortBy=publishedAt&apiKey=c59b8c3a9f6b496d9aeae04241b76937&pageSize=100&language=en";
  constructor(private http : HttpClient) { }

  getData(){
    return this.http.get(this.dataUrl, {responseType:'text'}).pipe(
      map(result =>{        
     
        let raw ={};
        let rows = result.split("\n");
        rows.splice(0,1);

        rows.forEach(row=>{
          let cols=row.split(/,(?=\S)/);
          
          let cases ={
            country: cols[3],
            confirmed: +cols[7],
            recovered: +cols[9],
            active: +cols[10],
            deaths: +cols[8]
          };

          let temp: GlobalDataSummary = raw[cases.country];

          if(temp){
            temp.confirmed = cases.confirmed + temp.confirmed;
            temp.recovered = cases.recovered + temp.recovered;
            temp.active = cases.active + temp.active;
            temp.deaths = cases.deaths + temp.deaths;

            raw[cases.country]=temp;
          }
          else{
            raw[cases.country]=cases;
            
          }
          
        })

      return <GlobalDataSummary[]>Object.values(raw);  

      })
    );



  }

  getNews() {
    return this.http.get<NewsData>(this.newsUrl);
  }
}
