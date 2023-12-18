import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {




 @Input()
  public characterList : Character[]=[{
    id:'15228',
    name:'Tunks',
    power:10
    
  }]
//de esta manera se declara para tener salida de datos hacia el padre
  @Output()
  // aca se declara el evento a emitir  si es de tipo numerico o de otro tipo
  public onDelete: EventEmitter<string> = new EventEmitter();

  // como agregar un index numerico a un objeto para poder borrarlo
  deleteCharacterById(id?: string){
    console.log({id} )

    if ( !id) return;
    //como se emite el evento al padre
    this.onDelete.emit(id)

  }

  
  // como agregar un index numerico a un objeto para poder borrarlo
  //onDeleteCharacter(index : number){
    //console.log({index} )
    //como se emite el evento al padre
    //this.onDelete.emit(index)

  //}

 
}
