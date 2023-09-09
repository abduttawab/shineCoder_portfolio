import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
//import { Menu } from '../interfaces/Menu';

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    private MenuListUrl: string = '/api/v1/Menu/GetMenuAll';

    private Menu$: any;

    constructor(private http: HttpClient) {}

    getMenus() {
        if (!this.Menu$) {
            this.Menu$ = this.http.get<any>(this.MenuListUrl).pipe(
                shareReplay(),
                map((result) => {
                    return result;
                })
            );
        }

        // if countries cache exists return it
        return this.Menu$;
    }
}
