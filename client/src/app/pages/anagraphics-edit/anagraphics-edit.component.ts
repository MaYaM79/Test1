// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { AnagraphicsService } from '../../services/anagraphics.service';
// Import Models
import { Anagraphics } from '../../domain/test1_db/anagraphics';

// START - USED SERVICES
/**
* anagraphicsService.create
*	@description CRUD ACTION create
*
* anagraphicsService.get
*	@description CRUD ACTION get
*
* anagraphicsService.update
*	@description CRUD ACTION update
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Anagraphics
 */
@Component({
    selector: 'app-anagraphics-edit',
    templateUrl: 'anagraphics-edit.component.html',
    styleUrls: ['anagraphics-edit.component.css']
})
export class AnagraphicsEditComponent implements OnInit {
    item: Anagraphics;
    model: Anagraphics;
    formValid: Boolean;

    constructor(
    private anagraphicsService: AnagraphicsService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Anagraphics();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.anagraphicsService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
        });
    }


    /**
     * Save Anagraphics
     *
     * @param {boolean} formValid Form validity check
     * @param Anagraphics item Anagraphics to save
     */
    save(formValid: boolean, item: Anagraphics): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.anagraphicsService.update(item).subscribe(data => this.goBack());
            } else {
                this.anagraphicsService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



