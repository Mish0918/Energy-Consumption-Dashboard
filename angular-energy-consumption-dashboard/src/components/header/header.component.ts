import {
    NgModule, Component, Pipe, PipeTransform, enableProdMode, OnInit,
  } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { jsPDF  } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    providers: [],
  })

  export class HeaderComponent implements OnInit{

    data: any[] = [];
    downloadButtonOptions: any;
    constructor(

    ) {}

    ngOnInit(): void {
      this.downloadButtonOptions = {
        icon: 'download',
        onClick: () => {
          let page = document.getElementById('main-container-div');
          notify('PDF Download started...', 'info', 3000);
          const options = {
            background: 'white',
            scale: 3
          };

          if(page){
            html2canvas(page, options).then((canvas)=>{
              var img = canvas.toDataURL("image/PNG");
              var doc = new jsPDF('l', 'mm', 'a4');

              // Add image Canvas to PDF
                const bufferX = 5;
                const bufferY = 5;
                const imgProps = (<any>doc).getImageProperties(img);
                const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      
                return doc;

            }).then((doc)=>{
              doc.save('charts.pdf');
              notify('PDF downloaded successfully!', 'success', 3000);
            },(error)=>{
              console.error('ERROR downloading PDF: ',error);
              notify('ERROR Downloading PDF', 'error', 5000);
            })
          }
        },
      };
    }

  }