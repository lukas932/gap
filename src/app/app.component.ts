import { Component, OnInit, OnDestroy } from '@angular/core';
import { CarrosService } from './services/carros.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  veiculos: Array<any>;
  getVeiculosSubscription: Subscription;

  constructor(private veiculosService: CarrosService) {}

  ngOnInit() {
    this.getVeiculos();
  }

  ngOnDestroy() {
    this.getVeiculosSubscription.unsubscribe();
  }

  getVeiculos() {
    this.getVeiculosSubscription = this.veiculosService.getVeiculos()
      .subscribe((veiculos) => {
        this.veiculos = veiculos;
      });
  }

  desconto(valor, desconto) {
    return (valor - (valor * desconto));
  }

  onClick(veiculo) {
    console.log(veiculo);
  }

}
