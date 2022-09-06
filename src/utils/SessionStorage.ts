import JsonParse from './JsonParse';

type SessionStorageKeys = 'app_guide' | 'list_mode';
export class SessionStorage {
  get = <T>(key: SessionStorageKeys, defaultValue: T): T =>
    JsonParse(window.sessionStorage.getItem(key) ?? '', defaultValue);
  set = <T>(key: SessionStorageKeys, value: T): void => {
    if (value == null) {
      this.clear();
    } else {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    }
  };
  clear = (): void => {
    window.sessionStorage.clear();
  };
}

export default new SessionStorage();
