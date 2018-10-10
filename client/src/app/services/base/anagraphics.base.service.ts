/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE anagraphicsBaseService PLEASE EDIT ../anagraphics.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { Anagraphics } from '../../domain/test1_db/anagraphics';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../anagraphics.service.ts
 */

/*
 * SCHEMA DB anagraphics
 *
	{
		name: {
			type: 'String'
		},
		surname: {
			type: 'String'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
	}
 *
 */
@Injectable()
export class AnagraphicsBaseService {

    contextUrl: string = environment.endpoint + '/anagraphics';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * anagraphicsService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Anagraphics): Observable<Anagraphics> {
        return this.http
            .post<Anagraphics>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * anagraphicsService.delete
    *   @description CRUD ACTION delete
    *
    */
    remove(id: string): Observable<void> {
        return this.http
            .delete<void>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * anagraphicsService.get
    *   @description CRUD ACTION get
    *
    */
    get(id: string): Observable<Anagraphics> {
        return this.http
            .get<Anagraphics>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * anagraphicsService.list
    *   @description CRUD ACTION list
    *   @returns ARRAY OF undefined
    *
    */
    list(): Observable<Anagraphics[]> {
        return this.http
            .get<Anagraphics[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * anagraphicsService.update
    *   @description CRUD ACTION update
    *
    */
    update(item: Anagraphics): Observable<Anagraphics> {
        return this.http
            .post<Anagraphics>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}