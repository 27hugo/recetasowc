import { Injectable } from '@angular/core';

@Injectable()
export class ApiRoute {
    private apiUrl: string;

    public getApiUrl(){
        return this.apiUrl;
    }
    public setApiUrl(apiUrl: string){
        this.apiUrl = apiUrl;
    }
}