import { ApiService } from "../services/api-service";

export class AuthUtils {
  private static authToken = 'auth token';

    static getAuthToken() {
        return localStorage.getItem(AuthUtils.authToken);
      }
    
      static setAuthToken(value: any) {
        return localStorage.setItem(AuthUtils.authToken, value);
      }
    
      static removeAuthToken() {
        return localStorage.removeItem(AuthUtils.authToken);
      }
}