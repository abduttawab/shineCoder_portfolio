import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
//import { Menu } from '../interfaces/Menu';

@Injectable({
    providedIn: 'root'
})
export class sitesettingsService {
    private MenuListUrl: string = '/api/v1/SiteSetting/GetSiteWideSettings';

    private settings$: any;

    constructor(private http: HttpClient) {}

    getSiteSettings() {
        if (!this.settings$) {
            this.settings$ = this.http.get<any>(this.MenuListUrl).pipe(
                shareReplay(),
                map((result) => {
                    return result;
                })
            );
        }

        // if countries cache exists return it
        return this.settings$;
    }
}
