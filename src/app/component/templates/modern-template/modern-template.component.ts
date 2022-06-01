import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Resume } from 'src/app/models/resume';
@Component({
    selector: 'app-modern-template',
    templateUrl: './modern-template.component.html',
    styleUrls: ['./modern-template.component.css'],
})
export class ModernTemplateComponent {
    @Input() resume: Resume;
    @Output() downloadTemplate = new EventEmitter<string>();
    constructor() { }

    download() {
        const innerHtml = document.getElementById('html')?.innerHTML;
        const html = `<html>
            <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <link href="https://fonts.googleapis.com/css?family=Balthazar|Simonetta:400,900|Material+Icons" rel="stylesheet">
            <style type="text/css">
                * {
                    margin: 0;
                    padding: 0;
                }
            
                html {
                    height: 101%;
                }
            
                body {
                    background: #f2f2f2;
                    font-size: 62.5%;
                    padding-bottom: 65px;
                }
            
                .hack {
                    font-family: "Balthazar", "Droid Serif", serif;
                    color: #565656;
                    font-size: 25px;
                }
            
                h1 {
                    font-family: "Simonetta", "Trebuchet MS", Arial, sans-serif;
                    color: #ba0018;
                    font-size: 40px;
                    text-transform: capitalize;
                    margin-bottom: 6px;
                }
            
                h2 {
                    font-family: "Simonetta", "Trebuchet MS", Arial, sans-serif;
                    color: #ba0018;
                    font-size: 35px;
                    margin-bottom: 10px;
                    text-decoration: underline;
                }
            
                h3 {
                    font-family: "Trebuchet MS", Verdana, Arial, sans-serif;
                    color: #777;
                    padding-left: 35px;
                    text-transform: capitalize;
                    font-size: 25px;
                    margin-bottom: 10px;
                }
            
                h4 {
                    font-family: "Trebuchet MS", Verdana, Arial, sans-serif;
                    color: #656565;
                    font-weight: bold;
                    font-size: 1.75em;
                    margin-bottom: 4px;
                }
            
                p {
                    font-family: "Balthazar", "Droid Serif", serif;
                    color: #565656;
                    font-size: 25px;
                    line-height: 1.4em;
                    margin-bottom: 15px;
                    padding-left: 35px;
                }
            
                small {
                    font-family: "Balthazar", "Droid Serif", serif;
                    color: #656565;
                    font-size: 1.2em;
                    display: block;
                    margin-bottom: 6px;
                }
            
                ul {
                    display: block;
                    list-style: none;
                }
            
                ul li {
                    padding-left: 45px;
                    list-style-type: none;
                    vertical-align: top;
                    margin-bottom: 5px;
                }
            
                #bullet {
                    padding: 0 10px;
                    margin-top: 8px;
                    margin-right: -30px;
                    margin-left: 35px;
                    display: inline-block;
                    vertical-align: top;
                    horizontal-align: le;
                    font-family: "Balthazar", "Droid Serif", serif;
                    color: wheat;
                    background: #ba0018;
                    font-size: 25px;
                    line-height: 2em;
                }
            
                .emph {
                    font-family: "Balthazar", "Droid Serif", serif;
                    padding-left: 35px;
                    color: #565656;
                    font-size: 20px;
                    text-transform: capitalize;
                }
            
                img {
                    border: 0;
                    max-width: 100%;
                }
            
                a {
                    color: #5582d6;
                    text-decoration: none;
                }
            
                a:hover {
                    text-decoration: underline;
                }
            
                /** @group core layout **/
                .w {
                    -webkit-border-bottom-left-radius: 8px;
                    -webkit-border-bottom-right-radius: 8px;
                    -moz-border-radius-bottomleft: 8px;
                    -moz-border-radius-bottomright: 8px;
                }
            
                header {
                    width: 100%;
                }
            
                .light {
                    color: #aaa;
                    letter-spacing: 1px;
                    font-size: 14px;
                    line-height: 28px;
                    font-family: 'Source Sans Pro', sans-serif;
                    text-transform: uppercase;
                }
            
                .row:before, .row:after {
                    content: "";
                    display: table;
                }
            
                .row:after {
                    clear: both
                }
            
                .col {
                    float: left
                }
            
                .col-right {
                    float: right
                }
            
                /** @group personal settings **/
                #info {
                    float: left;
                    margin-bottom: 12px;
                }
            
                #photo {
                    float: right;
                }
            
                #photo img {
                    -webkit-border-radius: 3px;
                    -moz-border-radius: 3px;
                    border-radius: 3px;
                    -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                    -moz-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                    background-color: #fff;
                    border: 1px solid #ccc;
                    padding: 5px;
                }
            
                /** @group skills **/
                #skills-left {
                    display: block;
                    float: left;
                    margin-right: 30px;
                }
            
                #skills-right {
                    display: block;
                    float: left;
                }
            
                /** @group clearfix **/
                .clearfix:after {
                    content: ".";
                    display: block;
                    clear: both;
                    visibility: hidden;
                    line-height: 0;
                    height: 0;
                }
            
                .clearfix {
                    display: inline-block;
                }
            
                html[xmlns] .clearfix {
                    display: block;
                }
            
                * html .clearfix {
                    height: 1%;
                }
                html{
            zoom:0.8;
            }
            </style>
            <body>
            ${innerHtml}
            </body>
            </head>
            </html>`;
                this.downloadTemplate.emit(html);
      }
    }
    