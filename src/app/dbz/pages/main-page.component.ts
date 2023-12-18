import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';


@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

    //de esta manera se injecta un servicio en este caso se hizo publico pero normalmente es privado 
constructor( private dbzService:DbzService){}

//de esta manera logramos  obtener por medio del get la informacion de los chacters o de cualquier informacion
    get characters(): Character[] {
            return [...this.dbzService.characters]        
    }
//como definir una funcion a ala hora de eliminar un dato
    onDeleteCharacter (id:string):void{
        this.dbzService.deleteCharacterById(id);

    }
//defiiniendo la manera de crear un dato con paraametros defiinidos en los servicioa
    onNewCharacter ( characters:Character ): void{
        this.dbzService.addCharacter(characters)
    }
}

    
