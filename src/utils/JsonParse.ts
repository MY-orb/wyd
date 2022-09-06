/**
 * jsonParse
 * @param str
 * @param defaultValue
 * @returns {any}
 */

function JsonParse(str: string, defaultValue: any) {
  try {
    if (typeof str !== 'string' || str === '') {
      return defaultValue;
    }
    return JSON.parse(str);
  } catch (e) {
    // console.log('[json parse error]', str, e, str);
    return defaultValue;
  }
}

export default JsonParse;
