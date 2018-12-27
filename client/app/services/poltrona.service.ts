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
import { PoltronaBaseService } from "./base/poltrona.base.service";
import { Poltrona } from '../domain/my-project_db/poltrona';

/**
 * YOU CAN OVERRIDE HERE poltronaBaseService
 */

@Injectable()
export class PoltronaService extends PoltronaBaseService {
    
    // CONSTRUCTOR
    constructor(http: Http, authenticationService: AuthenticationService) {
            super(http, authenticationService);
    }
    
}