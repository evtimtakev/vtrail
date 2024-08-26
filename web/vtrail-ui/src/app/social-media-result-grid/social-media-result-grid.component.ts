import {Component, Input} from '@angular/core';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-social-media-result-grid',
  templateUrl: './social-media-result-grid.component.html',
  styleUrls: ['./social-media-result-grid.component.scss']
})
export class SocialMediaResultGridComponent {
  @Input() gridItems: any[] = [];

  @Input() isLoading: boolean = false;

  public exportToPdf(): void {

    const doc = new jsPDF()
    doc.text("Social Media Community Report", 100, 10, { align: "center" }, 2);

    autoTable(doc, {
      columnStyles: { 4: { cellWidth: 40, textColor: [173, 216, 230] } },
      head: [['Title', 'Description', 'Creation date', 'Social Media', 'Link']],
      body: this.gridItems.map(item => [item.title, item.description, item.created, item.type, item.url])
    })

    doc.save('vTrail.pdf')
  }
}
