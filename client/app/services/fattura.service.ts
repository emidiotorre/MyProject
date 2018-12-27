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
import { FatturaBaseService } from "./base/fattura.base.service";
import { Fattura } from '../domain/my-project_db/fattura';

/**
 * YOU CAN OVERRIDE HERE fatturaBaseService
 */

@Injectable()
export class FatturaService extends FatturaBaseService {
    
    // CONSTRUCTOR
    constructor(http: Http, authenticationService: AuthenticationService) {
            super(http, authenticationService);
    }
    
}