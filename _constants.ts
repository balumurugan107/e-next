import { decrypt, encrypt } from "./_xor";

export const tokenKey = 'YEK_NEKOT';

export const ENABLE_REDUX_DEV_TOOLS = true;

// Create cookie
export function createCookie(name: string, value: string, day?: number) {
    if (typeof document !== 'undefined') {
      const content = encrypt(value);
      var expires;
      const days = day ? day : 90;
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = '; expires=' + date.toUTCString();
      } else {
        expires = '';
      }
      document.cookie = name + '=' + content + expires + '; path=/';
    }
  }
  
  // Read cookie
  export function readCookie(name: string) {
    if (typeof document !== 'undefined') {
      var nameEQ = name + '=';
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
          c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
          const item = c.substring(nameEQ.length, c.length);
          return decrypt(item);
        }
      }
    }
    return null;
  }