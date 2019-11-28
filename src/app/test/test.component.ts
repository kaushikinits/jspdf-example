import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  @ViewChild('pdfContent') pdfRef : ElementRef
  constructor() { }

  ngOnInit() {
  }

  downloadPDF()
  {
    let pdfDoc = new jsPDF('p', 'pt','a4',true);
    let elementHandler = {
      '#pdfContent': function (element, renderer) {
        return true;
      }
    };

    pdfDoc.fromHTML(this.pdfRef.nativeElement.innerHTML,10,10,{'width':200,'elementHandlers': elementHandler});

    pdfDoc.save("FelizNavidad.pdf");
  }

}