export interface ApiResponse<T> {
    data: T;
}

export interface DataResponse {
    searchServices: ApiResponse<DataService[]>
}

export interface Header {
    name: string;
    value: string;
}

export interface Security {
    headers: Header[];
}

export interface SecuritySalesforce {
    name: string;
    iss: string;
    sub: string;
    aud: string;
    enviroment_salesforce: string;
    grant_type: string;
    authorization: string
    url_salesforce: string;
    cookie: string
    key: string;
}

export interface Method {
    name: string;
    type: string;
    rote_salesforce: string;
    route_salesforce: string;
    role_securrity_salesforce: SecuritySalesforce;
    security: Security;
}

export interface Environment {
    name_enviroment: string;
    namesSpace: string;
    url_hlb: string;
    url_interna: string;
    methods: Method[];
} 


export interface DataService {
    id: string;
    name_service: string;
    category: string;
    enviroments: Environment[];
}
