import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'painel',
    templateUrl: './app/painel/painel-component/painel.component.html',
    styleUrls: ['./app/painel/painel-component/painel.component.css']
})
export class PainelComponent implements OnInit {
    
        @Input() titulo: string;
    
        ngOnInit() {
            this.titulo = this.titulo.length > 7 ?
                 this.titulo.substr(0, 7) + '...' : 
                 this.titulo;
        }
    
}