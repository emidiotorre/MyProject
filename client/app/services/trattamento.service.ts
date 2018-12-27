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
import { TrattamentoBaseService } from "./base/trattamento.base.service";
import { Trattamento } from '../domain/my-project_db/trattamento';

/**
 * YOU CAN OVERRIDE HERE trattamentoBaseService
 */

@Injectable()
export class TrattamentoService extends TrattamentoBaseService {
    
    // CONSTRUCTOR
    constructor(http: Http, authenticationService: AuthenticationService) {
            super(http, authenticationService);
    }
    
}