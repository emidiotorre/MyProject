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
import { CuraBaseService } from "./base/cura.base.service";
import { Cura } from '../domain/my-project_db/cura';

/**
 * YOU CAN OVERRIDE HERE curaBaseService
 */

@Injectable()
export class CuraService extends CuraBaseService {
    
    // CONSTRUCTOR
    constructor(http: Http, authenticationService: AuthenticationService) {
            super(http, authenticationService);
    }
    
}