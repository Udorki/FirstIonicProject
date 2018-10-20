import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { AnimalsPage } from '../animals/animals';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AnimalsPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
