import JsonParse from './JsonParse';

type LocalStorageKeys =
  | 'token'
  | 'search_result'
  | 'pageSize'
  | 'userId'
  | 'list_mode'
  | 'order_type'
  | 'report'
  | 'keyword';

class LocalStorage {
  get = <T>(key: LocalStorageKeys, defaultValue?: T): T =>
    JsonParse(window.localStorage.getItem(key) ?? '', defaultValue);
  set = <T>(key: LocalStorageKeys, value: T): void => {
    if (value == null) {
      this.clear(key);
    } else {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  };
  clear = (key: LocalStorageKeys) => {
    window.localStorage.removeItem(key);
  };
}

export default new LocalStorage();
