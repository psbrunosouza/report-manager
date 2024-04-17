import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HtmlStringService } from '../services/get-html.service';
import { ReportManagerService } from '../services/report-manager.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [HtmlStringService, ReportManagerService],
})
export class AppComponent {
  title = 'report-manager';

  constructor(
    private htmlStringService: HtmlStringService,
    private reportManagerService: ReportManagerService
  ) {}

  private createDownloadLink(url: string) {
    const link = document.createElement('a');
    link.href = url;
    link.download = 'my_pdf.pdf';

    link.click();

    // avoid memory leaks
    URL.revokeObjectURL(url);
  }

  clk(): void {
    this.htmlStringService.get('reports/report.html').subscribe((html) => {
      this.reportManagerService
        .generateReport({ html, data: { user: { name: 'Bruno' } } })
        .subscribe({
          next: (report) => {
            this.createDownloadLink(
              'data:aplication/pdf;base64,' + report.base64PDF
            );
          },
        });
    });
  }
}
