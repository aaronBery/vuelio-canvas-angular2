import { SocialWall } from "../dto/social-wall";
import { Http, Response, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SocialWallSerivce { 
    private serviceUrl: string = 'https://baltictestapi.vuelio.co.uk/api/SocialWall/';
    private token: string = "";

    constructor (private http: Http) {}
    getWall (token: string = "", wallId: number = 0): Observable<SocialWall>{
        let headers = new Headers;
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', "Bearer " + this.token);
        return this.http.get(this.serviceUrl + wallId)
            .map(response => response.json())
            .catch(this.handleError);
    }
    private handleError (error: Response | any) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}