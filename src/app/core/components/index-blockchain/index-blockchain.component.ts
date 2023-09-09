import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-blockchain',
  templateUrl: './index-blockchain.component.html',
  styleUrls: ['./index-blockchain.component.css']
})

/***
 * BlockChain Component
 */
export class IndexBlockchainComponent implements OnInit {

  /***
  * nav class set
  */
  navClass = 'nav-light';
    // Set Topbar Option
  Menuoption = 'center';
  Settingicon = true

  constructor() { }

  ngOnInit(): void {
  }

}
