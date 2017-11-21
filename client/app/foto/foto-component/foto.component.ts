import {Component, Input} from '@angular/core';

@Component({
    selector: 'foto',
    templateUrl: './app/foto/foto-component/foto.component.html',
    styleUrls: ['./app/foto/foto-component/foto.component.css']
})
export class FotoComponent {

    @Input() titulo: string;
    @Input() url: string;
    descricao: string;
    _id: string;

}