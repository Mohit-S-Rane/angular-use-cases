import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Resume } from 'src/app/models/resume';
@Component({
  selector: 'app-blues-template',
  templateUrl: './blues-template.component.html',
  styleUrls: ['./blues-template.component.css'],
})
export class BluesTemplateComponent {
  @Input() resume: Resume;
  @Output() downloadTemplate = new EventEmitter<string>();

  constructor() { }

  download() {
    const innerHtml = document.getElementById('html')?.innerHTML;
    const html =
      `
      <html>
        <head>
        </head>
        <style type="text/css">
          mat-card {
            width: 8in;
            margin-top: 1%;
            box-shadow: 1px 1px 8px 8px rgba(0, 0, 0, 0.2) !important;
            margin-bottom: 1%;
          }

          ul {
            color: #767270;
            font-weight: bold;
            font-size: 16px;
            margin-top: 2%;
          }

          .education-heading {
            color: white;
            background: #3683cc;
            margin-top: 2%;
            padding: 1% 2%;
            font-family: 'Lato', sans-serif;
          }

          .h3-span {
            text-transform: uppercase;
            color: #3683cc;
            margin-top: 5%;
          }

          .hover {
            position: absolute;
            background-color: rgba(36, 36, 36, 0.81);
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            z-index: 100;
            height: 100%;
            width: 100%;
            opacity: 0;
          }

          .hover:hover {
            opacity: 1;
            transition: opacity .8s;
          }

          .contact-summary {
            font-weight: 300;
            font-size: 10pt;
            line-height: 17pt;
            word-wrap: break-word;
            overflow: hidden;
          }

          ul li {
            vertical-align: top;
            margin-bottom: 5px;
          }

          * {
            margin: 0px;
          }

          #hover-i {
            color: white;
            font-size: 60px;
          }

          .main-heading {
            text-transform: uppercase;
            color: #538ec3;
            font-size: 2.5rem;
            font-weight: bold;
          }

          .text-align {
            text-align: center;
          }

          .address {
            color: #767270;
            word-break: break-word;
          }

          .education-heading {
            color: white;
            background: #3683cc;
            margin-top: 2%;
            padding: 1% 2%;
          }

          .h3-span {
            text-transform: uppercase;
            color: #3683cc;
            font-weight: bold;
            margin-top: 2rem;
          }

          .h4-p {
            color: #767270;
          }

          .container {
            padding-bottom: 4%;
            border-bottom: 1px solid #ddd;
          }

          .h4 {
            text-transform: capitalize;
          }
        </style>
        <body>${innerHtml}</body>
      </html>
    `;
    this.downloadTemplate.emit(html);
  }
}
