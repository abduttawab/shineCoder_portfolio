import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
//import { InnerPage } from '../interfaces/InnerPage';

@Injectable({
    providedIn: 'root'
})
export class InnerPageService {
    private InnerPageListUrl: string = '/api/v1/InnerPageSetup/';

    private InnerPage$: any;
    private InnerPageList$: any;
    private InnerPageListDetails$: any;

    

    constructor(private http: HttpClient) {}

    getInnerList(type) {
        this.InnerPageList$ = this.http.get<any>(this.InnerPageListUrl+"GetInnerPageListSetups?type="+type).pipe(
            shareReplay(),
            map((result) => {
                return result;
            })
        );

        // if countries cache exists return it
        return this.InnerPageList$;
    }

    getInnerMain(type) {
        this.InnerPage$ = this.http.get<any>(this.InnerPageListUrl+"GetInnerPageSetup?type="+type).pipe(
            shareReplay(),
            map((result) => {
                return result;
            })
        );

        // if countries cache exists return it
        return this.InnerPage$;
    }

    getInnerPageListDetails(id) {
        this.InnerPageListDetails$ = this.http.get<any>(this.InnerPageListUrl+"GetInnerPageListById?id="+id).pipe(
            shareReplay(),
            map((result) => {
                return result;
            })
        );

        // if countries cache exists return it
        return this.InnerPageListDetails$;
    }
}
