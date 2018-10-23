import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.includes('/login')) {
            return next.handle(req);
        }

        const tokenFromStorage = localStorage.getItem("current-token");
        const token = tokenFromStorage.replace(/['"]+/g, '')
        console.log("Current token " + token);
        if (token) {
            const newReq = req.clone({
                headers: req.headers.set("x-access-token", token)
            })
            return next.handle(newReq);
        }
        else {
            return next.handle(req);
        }
    }
}