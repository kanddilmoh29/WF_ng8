import { FrameworkConfigService, FrameworkConfigSettings } from './../fw/services/framwork-config.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor (private frameworkConfigService: FrameworkConfigService) {

    let config: FrameworkConfigSettings = {
      socialIcons: [
        {imageFile: 'assets/social-fb-bw.png', alt: 'facebook', link: 'http://www.facebook.com'},
        {imageFile: 'assets/social-google-bw.png', alt: 'google', link: 'http://www.google.com'},
        {imageFile: 'assets/social-twitter-bw.png', alt: 'twitter', link: 'http://www.twitter.com'}
      ],
      showanguageSelector: true,
      showUserControls: true,
      showStatusBar: true,
      showStatusBarBreakpoint: 800
    
    };
    frameworkConfigService.configure(config);
  } 
}
