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
import { AppuntamentoBaseService } from "./base/appuntamento.base.service";
import { Appuntamento } from '../domain/my-project_db/appuntamento';

/**
 * YOU CAN OVERRIDE HERE appuntamentoBaseService
 */

@Injectable()
export class AppuntamentoService extends AppuntamentoBaseService {
    
    // CONSTRUCTOR
    constructor(http: Http, authenticationService: AuthenticationService) {
            super(http, authenticationService);
    }
    
}