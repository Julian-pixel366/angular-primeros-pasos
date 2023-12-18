import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {


  //creando metodo para emitir un objeto
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id:'',
    name : '',
    power: 0
  };


  //emitiendo el objeto
  emitCharacter ( ):void {
     console.log (this.character);
//dando la condicion para que este objeto sea emitido y se convierta en un eventp 
     if (this.character.name.length === 0 )return;
      this.onNewCharacter.emit(this.character);
    
     this.character = {name: '', power : 0 };

  }
}
