import {Component, Input} from '@angular/core';

@Component({
    selector: 'painel',
    templateUrl: './app/painel/painel-component/painel.component.html'
})
export class PainelComponent {

    @Input() titulo: string;
}