class ApiHeader {
    key: String;
    value: String;
}

class ApiRequest {
    url: String;
    headers: Array<ApiHeader>;
    body: any;
}
