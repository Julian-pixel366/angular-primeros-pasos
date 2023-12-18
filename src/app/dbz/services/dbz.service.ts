import { Injectable } from '@angular/core';
import{v4 as uuid} from 'uuid'
import { Character } from '../interfaces/character.interface';

@Injectable({
    providedIn: 'root'
})
export class DbzService {
   
    
    public characters: Character[]=[{
        id:uuid(),
        name: 'Krilin',
        power:1000,    
    },{
        id:uuid(),
        name:'Goku',
        power:9500
    },{
        id:uuid(),
        name:'Vegetta',
        power:7500
    }
];

//sirve para agregar un objeto por medio del metodo push en la ultima posicion 
addCharacter( character: Character ):void{ 

    //injecta propiedades con el spret ... el cual sirve para hacer la funcion mas rapida 
   const newCharacter: Character = {id:uuid(), ...character};
   
   
    this.characters.push(newCharacter);
}


//si solo necesito borrar el caracter seleccionado con el metodo splice y con el 1 es posible 
//onDeleteCharacter(index:number){
   // this.characters.splice(index,1)
//}

// filter es un metodo  que sirve para solo filtrar el numero que indica la funcion 
deleteCharacterById(id:string){
    //en este caso se toma del character el id y si es ese id es  igual o duplicado procede a filtrar
    this.characters = this.characters.filter (character =>character.id !==id);
    
}

}