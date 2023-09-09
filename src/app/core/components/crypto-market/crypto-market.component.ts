import { Component } from '@angular/core';

@Component({
  selector: 'app-crypto-market',
  templateUrl: './crypto-market.component.html',
  styleUrls: ['./crypto-market.component.css']
})
export class CryptoMarketComponent {
  // Set Topbar
  Menuoption = 'cryptocurrency'
  footerVariant = 'footer-three';
;

  bitcoinChart: any;
  ethereumChart: any;
  moneroChart: any;
  litecoinChart: any;

  ngOnInit(): void {
    this._bitcoinChart();
    this._EthereumChart();
    this._MoneroChart();
    this._LitecoinChart();
  }

  private _bitcoinChart() {
    this.bitcoinChart = {
      series: [{
        data: [20, 45, 40, 64, 35, 25, 35]
      }],
      chart: {
        type: 'area',
        height: 90,
        width: '100%',
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        curve: 'smooth',
        width: 3,
      },
      colors: ['#52cc99'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function (seriesName) {
              return ''
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
  }

  private _EthereumChart() {
    this.ethereumChart = {
      series: [{
        data: [10, 25, 30, 54, 45, 39, 15]
      }],
      chart: {
        type: 'area',
        height: 90,
        width: '100%',
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        curve: 'smooth',
        width: 3,
      },
      colors: ['#ff6647'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function (seriesName) {
              return ''
            }
          }
        },
        marker: {
          show: false
        }
      }
    }
  }

  private _MoneroChart() {
    this.moneroChart = {
      series: [{
        data: [15, 20, 10, 45, 20, 10, 5]
      }],
      chart: {
        type: 'area',
        height: 90,
        width: '100%',
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        curve: 'smooth',
        width: 3,
      },
      colors: ['#52cc99'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function (seriesName) {
              return ''
            }
          }
        },
        marker: {
          show: false
        }
      }
    }
  }

  private _LitecoinChart() {
    this.litecoinChart = {
      series: [{
        data: [3, 5, 7, 11, 8, 5, 7]
      }],
      chart: {
        type: 'area',
        height: 90,
        width: '100%',
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        curve: 'smooth',
        width: 3,
      },
      colors: ['#ff6647'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function (seriesName) {
              return ''
            }
          }
        },
        marker: {
          show: false
        }
      }
    }
  }



}
