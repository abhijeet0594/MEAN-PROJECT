import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear: number;
  hideFooter = false;
  websiteURL = "config.WEBSITE_URL";

  constructor() { }

  ngOnInit(): void {
    if (window.location.href.indexOf('child') > -1) {
      this.hideFooter = true;
    }
    this.currentYear = new Date().getFullYear();
  }

}
