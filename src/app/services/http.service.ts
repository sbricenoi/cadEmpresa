import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private _api = 'https://maqueta.onlineweb.cl/api.php';
  private _apiTest = 'https://cad.onlineweb.cl/prueba_api_sb.php';
  private _apiProd = 'https://cad.onlineweb.cl/prueba_api_sb.php';
  constructor(private httpClient: HttpClient) { }

 public login(input:any){    
    input.accion = "login_empresa";
    
    let params = JSON.stringify(input);
    let headers = new HttpHeaders().set('Content-type','application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Credentials', 'true');
    console.log("params:",params)
    return this.httpClient.post<any>(this._apiProd,params,{headers:headers});   
  }
  public ingresoToken(input:any){    
    input.accion = "persona_token";
    
    let params = JSON.stringify(input);
    let headers = new HttpHeaders().set('Content-type','application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
        headers.append('Access-Control-Allow-Credentials', 'true');
    console.log("params:",params)
    return this.httpClient.post<any>(this._apiProd,params,{headers:headers});   
  }
  /*
  public prueba(input:any){    
    input.accion = "";
    
    let params = JSON.stringify(input);
    let headers = new HttpHeaders().set('Content-type','application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
        headers.append('Access-Control-Allow-Credentials', 'true');
    console.log("params:",params)
    return this.httpClient.post<any>(this._api,params,{headers:headers});   
  }*/
  /*
  public login(input:any){    
    input.accion = "login";
    
    let params = JSON.stringify(input);
    let headers = new HttpHeaders().set('Content-type','application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
        headers.append('Access-Control-Allow-Credentials', 'true');
    console.log("params:",params)
    return this.httpClient.post<any>(this._api,params,{headers:headers});   
  }
  public ingresoToken(input:any){    
    input.accion = "ingresoToken";
    
    let params = JSON.stringify(input);
    let headers = new HttpHeaders().set('Content-type','application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
        headers.append('Access-Control-Allow-Credentials', 'true');
    console.log("params:",params)
    return this.httpClient.post<any>(this._api,params,{headers:headers});   
  }
  */
  public getEmpresas(input:any){    
    input.accion = "getEmpresas";
    input.usuario = 123;
    let params = JSON.stringify(input);
    let headers = new HttpHeaders().set('Content-type','application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
        headers.append('Access-Control-Allow-Credentials', 'true');
    console.log("params:",params)
    return this.httpClient.post<any>(this._apiProd,params,{headers:headers});   
  }
  public getAlertas(input:any){    
    input.accion = "getAlertas";
    let params = JSON.stringify(input);
    let headers = new HttpHeaders().set('Content-type','application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
        headers.append('Access-Control-Allow-Credentials', 'true');
    console.log("params:",params)
    return this.httpClient.post<any>(this._apiProd,params,{headers:headers});   
  }
  public getDetalleAlerta(input:any){    
    input.accion = "detalle_alerta";
    let params = JSON.stringify(input);
    let headers = new HttpHeaders().set('Content-type','application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
        headers.append('Access-Control-Allow-Credentials', 'true');
    console.log("params:",params)
    return this.httpClient.post<any>(this._apiProd,params,{headers:headers});   
  }
  public getEquipos(input:any){    
    input.accion = "listar_equipos_all";
    let params = JSON.stringify(input);
    let headers = new HttpHeaders().set('Content-type','application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
        headers.append('Access-Control-Allow-Credentials', 'true');
    console.log("params:",params)
    return this.httpClient.post<any>(this._apiProd,params,{headers:headers});   
  }
  public getEquipo(input:any){    
    input.accion = "detalle_equipo";
    let params = JSON.stringify(input);
    let headers = new HttpHeaders().set('Content-type','application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
        headers.append('Access-Control-Allow-Credentials', 'true');
    console.log("params:",params)
    return this.httpClient.post<any>(this._apiProd,params,{headers:headers});   
  }
  public cancelarAlerta(input:any){    
    input.accion = "cancelar_empergencia";
    let params = JSON.stringify(input);
    let headers = new HttpHeaders().set('Content-type','application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
        headers.append('Access-Control-Allow-Credentials', 'true');
    console.log("params:",params)
    return this.httpClient.post<any>(this._apiProd,params,{headers:headers});   
  }
  public seleccionarAccion(input:any){    
    input.accion = "seleccionarAccion";
    input.alerta = 12;
    input.usuario = 12;
    input.tipo = 12;
    input.equipo = 12;

    let params = JSON.stringify(input);
    let headers = new HttpHeaders().set('Content-type','application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
        headers.append('Access-Control-Allow-Credentials', 'true');
    console.log("params:",params)
    return this.httpClient.post<any>(this._apiProd,params,{headers:headers});   
  }
  public getHistorial(input:any){    
    input.accion = "listar_historico_alerta";
    let params = JSON.stringify(input);
    let headers = new HttpHeaders().set('Content-type','application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
        headers.append('Access-Control-Allow-Credentials', 'true');
    console.log("params:",params)
    return this.httpClient.post<any>(this._apiProd,params,{headers:headers});   
  }
  public ingresoHistorial(input:any){    
    input.accion = "insertar_historico";
    let params = JSON.stringify(input);
    let headers = new HttpHeaders().set('Content-type','application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
        headers.append('Access-Control-Allow-Credentials', 'true');
    console.log("params:",params)
    return this.httpClient.post<any>(this._apiProd,params,{headers:headers});   
  }
  public setPerfil(input:any){    
    input.accion = "actualizar_persona";
    let params = JSON.stringify(input);
    let headers = new HttpHeaders().set('Content-type','application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
        headers.append('Access-Control-Allow-Credentials', 'true');
    console.log("params:",params)
    return this.httpClient.post<any>(this._apiProd,params,{headers:headers});   
  }
  public setPass(input:any){    
    input.accion = "actualizar_pass";
    let params = JSON.stringify(input);
    let headers = new HttpHeaders().set('Content-type','application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8100');
        headers.append('Access-Control-Allow-Credentials', 'true');
    console.log("params:",params)
    return this.httpClient.post<any>(this._apiProd,params,{headers:headers});   
  }
}
