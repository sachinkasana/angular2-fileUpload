import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface Header {
  header: string;
  value: string;
}

@Injectable()
export class ImageService {
    private url: string;
    constructor(private http: Http){}
    public setUrl(url: string) {
        this.url = url;
    }

    public deleteFile(fileName: string) {
        //let headers = new Headers();
        //this.createAuthorizationHeader(headers);
        //let options = new RequestOptions({ headers: headers });
        return this.http.get('http://172.16.17.103:3000/delete/' + fileName)
            .map(this.extractData)
            .catch(this.handleError)
    }

    public postImage(image: File, headers?: Header[]) {
        debugger;
        //this.checkUrl();
        return Observable.create(observer => {
            let formData: FormData = new FormData();
            let xhr: XMLHttpRequest = new XMLHttpRequest();

            formData.append('file', image);

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    debugger;
                    if (xhr.status === 200) {
                        observer.next(xhr.response);
                        observer.complete();
                    } else {
                        observer.error(xhr.response);
                    }
                }
            };


            xhr.open('POST', 'http://172.16.17.103:3000/upload', true);

            if (headers)
                for (let header of headers)
                    xhr.setRequestHeader(header.header, header.value);

            xhr.send(formData);
        });
    }

    private extractData(res: Response) {
        debugger;
        return res;
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    private checkUrl() {
        if (!this.url) {
            throw new Error('Url is not set! Please use setUrl(url) method before doing queries');
        }
    }

}
