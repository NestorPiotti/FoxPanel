import { Component , ViewChild} from '@angular/core';
import { MatTable } from '@angular/material/table';
import { miPipe } from './pipes/miPipe';
import { validateVerticalPosition } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  columnas: string[] = ['metrosL','tipoPanel','totM2','cPaneles', 'precio','matTotales','mobraUni','mobraTot'
  ,'otros','totales','borrar'];

  datos: Articulo[] = [];
  datos1:[] = [] ; 
  
  cajasTexto = {
      "muro":"" ,
      "metros":"",
    };
    
   
  metrosL!:number;
  resultado!:number;
  resultado1!:number;
  matTotales!:number;
  mobraTot!:number;
  muroTot!:number;
  altura= 2.84;
  mt2=3;
  muro!:number;
  total!:number;
  totales!:number;
 metros!:number;

  paneles = [
    {valor:'PMO 90', muestraValor:'PMO 90'},
    {valor:'PMO 110', muestraValor:'PMO 110'},
    {valor:'PMFT 55', muestraValor:'PMFT 55'},
    {valor:'PMF 90', muestraValor:'PMF 90'},
    {valor:'PMF 115', muestraValor:'PMF 115'},
    {valor:'SMART PANEL 90', muestraValor:'SMART PANEL 90'},
    {valor:'SMART PANEL 110', muestraValor:'SMART PANEL 110'}
  ];

  seleccionada: string = this.paneles[0].valor;
  
  
  alMuros = [
    {id:1,Valor:2.84},
    {id:2,Valor:3.05},
    {id:3,Valor:3.25},
    {id:4,Valor:3.66},
    
  ];

  selecalMuro: number = this.alMuros[0].Valor;
  
  operar() {
    
       this.resultado = this.total * this.selecalMuro;
       this.resultado1=this.resultado/this.mt2;  
       this.matTotales=this.resultado1*this.articuloselect.precio; 
       this.mobraTot=this.resultado1*this.articuloselect.mobraUni;
       this.totales=this.mobraTot+this.matTotales;
  }
  
  
  articuloselect: Articulo = new Articulo(0,"",0,0,0,0,0,0,0,0);
  

  @ViewChild(MatTable) tabla1!: MatTable<Articulo>;

  borrarFila(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.datos.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }

  agregar() {
    this.datos.push(new Articulo(this.total, this.seleccionada,this.resultado,this.resultado1
    ,this.articuloselect.precio,this.matTotales,this.articuloselect.mobraUni,this.mobraTot
    ,this.articuloselect.otros,this.totales));
    this.tabla1.renderRows();
    this.articuloselect = new Articulo(0,"",0,0,0,0,0,0,0,0);
  }
  
sumaMuro(m: any){
  //this.cajasTexto.push(m)
  //let total=this.cajasTexto.reduce((a: any,b: any)=>a+b,0);
   //this.total= total;
  //console.log(this.datos1)
  console.log(this.cajasTexto)
  }
  
  
} 
export class Articulo {
  
  constructor(public metrosL: number, public tipoPanel: string,public totM2: number ,public cPaneles: number,
    public precio: number,public matTotales:number,public mobraUni: number,
    public mobraTot: number,public totales: number,public otros: number) {
  }

}
