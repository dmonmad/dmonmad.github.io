import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isScrolling: boolean = false;
  scrollPercentage: string = '0%';

  constructor() {
  }

  async onScroll(e: any) {
    console.log(e);
    const scrollElement = await e.target.getScrollElement();

    // minus clientHeight because trigger is scrollTop
    // otherwise you hit the bottom of the page before 
    // the top screen can get to 80% total document height
    const scrollHeight = scrollElement.scrollHeight - scrollElement.clientHeight;

    const currentScrollDepth = scrollElement.scrollTop;

    let scrollPercentage = ((currentScrollDepth / scrollHeight) * 100);
    console.log({triggerDepth: scrollPercentage});


    this.scrollPercentage = scrollPercentage + '%';

  }

}
