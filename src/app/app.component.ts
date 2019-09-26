import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {headersToString} from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'rush-square-demo';

  postData =
    {
      idempotency_key: '8193148c-9586-11e6-99f9-28cfe92138gg',
      order: {
        line_items: [
          {
            name: 'Small Coffee',
            quantity: '1',
            base_price_money: {
              amount: 0,
              currency: 'AUD'
            }
          }
        ]
      }
    }

  url = 'https://connect.squareupsandbox.com/v2/locations/BJ055758ED0CN/orders'
  vText="hello";

  constructor(private http: HttpClient) {
    console.log('app working');


  }

  ngOnInit(): void {


  }

  submit(){
    console.log('button clicked')
    this.http.post(this.url, this.postData , {headers:
        {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        Accept: 'application/json',
        Authorization: 'Bearer EAAAEOhjG03kh8YjOxk-VnDFKz59ovWoK5uUGxsDPNUSqkIuA-IjnDuqdIeb29Eu'
        }} )
  .subscribe((res)=> {
      console.log(res);
      this.vText = res.order.id

  //   this.http.post('https://connect.squareup.com/v2/payments',
  //     {amount_money: {
  //     amount: 0,
  //       currency: "AUD"
  //   },
  //     order_id: this.vText
  // },{headers:
  //         {
  //           'Content-Type': 'application/json',
  //           'Cache-Control': 'no-cache',
  //           Accept: 'application/json',
  //           Authorization: 'Bearer EAAAEOhjG03kh8YjOxk-VnDFKz59ovWoK5uUGxsDPNUSqkIuA-IjnDuqdIeb29Eu'
  //         }} ).subscribe((res)=>{
  //           console.log(res)
  //   })

  })
  }

}
