import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { AnagraphicsService } from '../../services/anagraphics.service';
// Import Models
import { Anagraphics } from '../../domain/test1_db/anagraphics';

// START - USED SERVICES
/**
* anagraphicsService.delete
*	@description CRUD ACTION delete
*
* anagraphicsService.list
*	@description CRUD ACTION list
*	@returns ARRAY OF undefined
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Anagraphics
 * @class AnagraphicsListComponent
 */
@Component({
    selector: 'app-anagraphics-list',
    templateUrl: './anagraphics-list.component.html',
    styleUrls: ['./anagraphics-list.component.css']
})
export class AnagraphicsListComponent implements OnInit {
    list: Anagraphics[];
    search: any = {};
    idSelected: string;
    constructor(
        private anagraphicsService: AnagraphicsService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.anagraphicsService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Anagraphics to remove
     *
     * @param {string} id Id of the Anagraphics to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Anagraphics
     */
    deleteItem() {
        this.anagraphicsService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
