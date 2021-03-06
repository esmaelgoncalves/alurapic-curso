import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'botao',
    templateUrl: './app/botao/botao-component/botao.component.html'
})
export class BotaoComponent {

    @Input() nome: string = 'Ok';
    @Input() estilo: string = 'btn-default';
    @Input() tipo: string = 'button';
    @Input() desabilitado: boolean = false;

    @Output() acao = new EventEmitter();
    @Input() confirmacao: boolean = false;


     executaAcao() {
        if(this.confirmacao) {
            console.log('confirmacao == true');
            if(confirm('Tem certeza?')) {
                this.acao.emit(null); 
            }
            return; 
        }          
        this.acao.emit(null);
    }
}