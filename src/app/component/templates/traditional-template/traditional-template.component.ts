import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Resume } from 'src/app/models/resume';
@Component({
    selector: 'app-traditional-template',
    templateUrl: './traditional-template.component.html',
    styleUrls: ['./traditional-template.component.css'],
})
export class TraditionalPanelTemplateComponent {
    @Input() resume: Resume;
    @Output() downloadTemplate = new EventEmitter<string>();
    constructor() { }

    download() {
        const innerHtml = document.getElementById('html')?.innerHTML;
        const html = `<html><head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <link rel="stylesheet"
                    href="//fonts.googleapis.com/css?family=Google+Sans:400|Roboto:400,400italic,500,500italic,700,700italic|
                    Roboto+Mono:400,500,700|Material+Icons"
            >
            <style type="text/css">
            
            h1{
            font-weight:100;
            color: #000000;
            padding-top: 22px;
            font-size: 25px;
            font-family: 'Google Sans', Roboto, sans-serif;
            }
            h3, span {
                text-transform: uppercase;
                color: #767270;
                margin-top: 5%;
                }
            
                ul {
                color: #767270;
                font-weight: bold;
                font-size: 16px;
                }
                h4, p {
                color: #767270;
                }
            </style>
            <body>
            ${innerHtml}
            </body>
            </head></html>`;
                this.downloadTemplate.emit(html);
      }
    }
    