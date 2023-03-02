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
    const scrollElement = await e.target.getScrollElement();
    console.log({scrollElement});

    // minus clientHeight because trigger is scrollTop
    // otherwise you hit the bottom of the page before 
    // the top screen can get to 80% total document height
    const scrollHeight = scrollElement.scrollHeight - scrollElement.clientHeight;
    console.log({scrollHeight});

    const currentScrollDepth = scrollElement.scrollTop;
    console.log({currentScrollDepth});

    const targetPercent = 80;

    let triggerDepth = ((scrollHeight / 100) * targetPercent);
    console.log({triggerDepth});


    this.scrollPercentage = currentScrollDepth + "%";

  }

}
