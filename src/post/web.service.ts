import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()

    export class subservice{
            constructor(private httpclient: HttpClient) {
                
            }
//  headers: header
            postLogin(value)
            {
                    console.log(value);
                    const header= new HttpHeaders().set('Content-Type', 'application/json');
                    return this.httpclient.post('http://192.168.8.100:3000/student/login', value, {});
            }

            postBook(value)
            {
                    const header= new HttpHeaders().set('Content-Type', 'application/json');
                    return this.httpclient.post('http://192.168.8.103:3000/book/addbook', value, {headers: header});
            }

            getToken(){
                    return sessionStorage.getItem('data');
            }

            
        //     getDisplayBookData()
        //     {
        //             return this.httpclient.get('http://192.168.8.103:3000/book/subject/price/type');
        //     }

            postDisplayBookData(value) //searchbooks
            {
                    const header= new HttpHeaders().set('Content-Type', 'application/json');
                    return this.httpclient.post('http://192.168.8.103:3000/book/subject/price/type', value, {headers: header});
            }
            postDisplayBook(value) //showall books
            {
                    const header= new HttpHeaders().set('Content-Type', 'application/json');
                    return this.httpclient.post('http://192.168.8.103:3000/book/subject/price/type', value, {headers: header});
            }


            getDisplayBookData(){

                return this.httpclient.get('http://192.168.8.103:3000/book/subject/price/type');
             
              
             }


            postRegister(value)
            {
                const header= new HttpHeaders().set('Content-Type', 'application/json');
                return this.httpclient.post('http://192.168.8.103:3000/student/register', value, {});
            }
   

            postOffence(value)
            {
                const header= new HttpHeaders().set('Content-Type', 'application/json');
                return this.httpclient.post('http://192.168.8.103:3000/student_offence/reportOffence', value, {});
                
            }







            postMyBook(value) //student show/delete/update
            {
                    const header= new HttpHeaders().set('Content-Type', 'application/json');
                    return this.httpclient.post('http://192.168.8.103:3000/book/subject/price/type', value, {headers: header});
            }
            postDeleteMyBooks(value) //student show/delete/update
            {
                    const header= new HttpHeaders().set('Content-Type', 'application/json');
                    return this.httpclient.post('http://192.168.8.103:3000/book/subject/price/type', value, {headers: header});
            }
    }
