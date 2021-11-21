import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler} from '@angular/common/http'; 

@Injectable()

export class TokenInterceptor implements HttpInterceptor
{
    intercept(req : HttpRequest<any>, next : HttpHandler):any
    {
        let token = localStorage.getItem("adminToken");
        if(token)
        {
            let clone = req.clone({
                headers : req.headers.set("Authorization", token)
            });
            return next.handle(clone);
        }else{
            return next.handle(req);
        }
    }
}