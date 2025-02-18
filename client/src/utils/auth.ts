import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
    const token = this.getToken();
    const decoded: JwtPayload = jwtDecode(token);
    return decoded;
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    const token = this.getToken();
    if (token == 'undefined') {
      localStorage.removeItem('token');
    }else if (token) {
      const isEx = this.isTokenExpired(token);
      return token && !isEx;
    }else{
      return false;
    }
  }
  
  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
    if (token) {
      const data = jwtDecode<JwtPayload>(token);
      const time = Date.now() / 1000; 
      return data?.exp && data.exp < time;
    } else {
      return true;
    }
  }

  getToken(): string {
    // TODO: return the token
    const token = localStorage.getItem('token');
    if (token) {
      return token
    }else{
      return '';
    }
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    // TODO: redirect to the home page
    localStorage.setItem('token', idToken);
    window.location.assign('/');
  }

  logout() {
    // TODO: remove the token from localStorage
    // TODO: redirect to the login page
    localStorage.removeItem('token');
    window.location.assign('/')
  }
}

export default new AuthService();
