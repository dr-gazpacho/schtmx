

export enum HTTPMETHOD {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
};

export enum ENDPOINT {
    FREQ = "frequency",
    CREATETEST = "createTest",
    FREE = "free"
}

export type Configuration = {
    method: HTTPMETHOD;
    headers: {
        [key: string]: string
    }
    body?: any;
}

export async function api(method: HTTPMETHOD, endpoint: ENDPOINT, body?: any) {
    const url = `http://localhost:8080/api/${endpoint}`

    const httpConfiguration: Configuration = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }

    }

    if((method === HTTPMETHOD.PUT || method === HTTPMETHOD.POST) && !!body) {
        httpConfiguration.body = JSON.stringify(body);
    }

    try {
      const response = await fetch(url, httpConfiguration);

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);

    } catch (error: any) {
      console.error(error.message);
    }
  }