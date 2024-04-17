import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  IManagerModel,
  IManagerReportModel,
} from '../models/report-manager.model';

@Injectable()
export class ReportManagerService {
  constructor(private http: HttpClient) {}

  generateReport(payload: IManagerModel): Observable<IManagerReportModel> {
    return this.http.post<IManagerReportModel>(
      'http://localhost:3333/manager',
      payload
    );
  }
}
