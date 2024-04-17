import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HtmlStringService {
  constructor(private http: HttpClient) {}

  // convertToText(htmlString: string): string {
  //   let textContent = '';
  //   const parser = new htmlparser2.Parser({
  //     ontext: (text) => (textContent += text.trim()),
  //   });
  //   parser.write(htmlString);
  //   parser.end();
  //   return textContent;
  // }

  get(path: string): Observable<string> {
    return this.http.get(`assets/${path}`, {
      responseType: 'text',
    });
  }
}
