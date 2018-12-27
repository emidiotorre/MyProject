// DEPENDENCIES
import { Observable } from 'rxjs/Rx';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

// SECURITY
import { AuthenticationService } from '../security/authentication.service';

// CONFIG
import { config } from "../../config/properties";

// MODEL
import { PreventivoBaseService } from "./base/preventivo.base.service";
import { Preventivo } from '../domain/my-project_db/preventivo';

/**
 * YOU CAN OVERRIDE HERE preventivoBaseService
 */

@Injectable()
export class PreventivoService extends PreventivoBaseService {
    
    // CONSTRUCTOR
    constructor(http: Http, authenticationService: AuthenticationService) {
            super(http, authenticationService);
    }
    
}