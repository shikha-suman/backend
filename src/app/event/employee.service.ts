import { Observable } from 'rxjs/Rx';
import { jsonpFactory } from '@angular/http/src/http_module';
import { ResultFunc } from 'rxjs/observable/GenerateObservable';
import { Injectable } from '@angular/core';
import { Http, Response, Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
    options: RequestOptions;
    constructor(private _http:Http) {}
   private _url:string = 'http://localhost:8080/employee';
   //private _url:string = 'http://localhost:3000/app/event/mydata.json';
   Message = {
       name:"bhai shan",
       email:"pass@gmail.com",
       DOB:"02/11/11",
       dept:"cse",
       gender:"male",
       age:11,
       _id:"58bdb28ea3df0922604150b4"
   };
   delMessage = {
       _id:"58bd2169ee2dd948a0416686"
   };
    result:any= [] ;
   
    // getAllvaluesFromFiles(){
    //     this._http.get(this._url)
    //     .do(data => {
    //         this.getSubscribedData
    //     })
    //     .map((response:Response) => response.json());
 
    // }
    saveMessage(value:any):Observable<any> {
        const body = JSON.stringify(value);
        console.log(body);
        const headers = new Headers({'Content-type':'application/json'});
      
        return this._http.post('http://localhost:8080/message',body, {headers:headers});
    }

       deleteMessage(id:any):Observable<any> {
        const c = {
            _id:id
        };
        const body = JSON.stringify(c);
        console.log(body);
        const headers = new Headers({'Content-type':'application/json'});
        const key = "_id";
        const value = "58bdac414915dd3678cf9f7d";
        this.options = new RequestOptions({ 
            headers: headers,
            body: body });
        return this._http.delete('http://localhost:8080/delete',this.options);
       // this._http.delete()
    }


    updateMessage(empData:any):Observable<any> {
        const body = JSON.stringify(empData);
        console.log(body);
        const headers = new Headers({'Content-type':'application/json'});
      
        return this._http.put('http://localhost:8080/update',body,{headers:headers});
    }

    

    getEmployees() {


        // this.getAllvaluesFromFiles().subscribe(data =>{
        //     console.log(this.getSubscribedData);
        // });
        
    //   this._http.get(this._url).map(
    //       (response:Response) => 
    //   console.log(response));

    //console.log(this._http.get(this._url));
    //     return [
    //   {"id":1, "name":"andrew", "gender":"male"},
    //    {"id":2, "name":"andrewr", "gender":"male"},
    //     {"id":3, "name":"andrewq", "gender":"male"}
    //   ];
    //console.log("data"+this._http.get(this._url)
              //  .map((response:Response) => response.json()));
    return this._http.get(this._url).map((response:Response) => response.json());
 // .subscribe(res => this.result = res);
           // console.log(this._http.get(this._url).map((response:Response) => response.json()));
          // console.log(this.result);
            
    }
}
