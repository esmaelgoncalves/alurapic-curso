import { Component, Input, OnInit, ElementRef } from '@angular/core';

@Component({
    selector: 'painel',
    templateUrl: './app/painel/painel-component/painel.component.html',
    styleUrls: ['./app/painel/painel-component/painel.component.css']
})
export class PainelComponent implements OnInit {

    @Input() titulo: string;

    constructor(private elemento: ElementRef) { }

    ngOnInit() {
        this.titulo = this.titulo.length > 7 ?
            this.titulo.substr(0, 7) + '...' :
            this.titulo;
    }

    fadeOut(cb) {
        $(this.elemento.nativeElement).fadeOut(cb);
    }

}