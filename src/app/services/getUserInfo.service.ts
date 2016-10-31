import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { User } from '../bean/user.bean';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GetUserInfo{
    
    private userInfo: any [];

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    constructor(private http: Http){}

    public getInfo(): any[]{
        return require('./mock-heroes.ts').dataList;
        // return this.http.get('./')
        //     .toPromise()
        //     .then(response => response.json().data as User[])
        //     .catch(this.handleError);
    }
}