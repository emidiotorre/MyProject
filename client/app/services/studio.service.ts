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
import { StudioBaseService } from "./base/studio.base.service";
import { Studio } from '../domain/my-project_db/studio';

/**
 * YOU CAN OVERRIDE HERE studioBaseService
 */

@Injectable()
export class StudioService extends StudioBaseService {
    
    // CONSTRUCTOR
    constructor(http: Http, authenticationService: AuthenticationService) {
            super(http, authenticationService);
    }
    
}