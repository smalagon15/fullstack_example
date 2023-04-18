import BaseAPI from "./BaseAPI";
/**
 * Provides known endpoints for data service.
 * The base path for the data service is defined in the env.
 */
const paths = {
  is_valid: "/is_valid"
};
/**
 * Add the palindrome prefix for the palindrome routes in the api
 */
const palindrome_prefix = "/palindrome";
for (const key of Object.keys(paths)) {
  paths[key] = palindrome_prefix + paths[key];
}

// Instantiate a BaseAPI with port 8000
const palindromeBase = new BaseAPI(8000)

/**
 * 
 * @class PalindromeAPI
 */
const PalindromeAPI = {
  isValid(word) {
    const path = paths.is_valid;
    return palindromeBase.post(path, {word});
  }
};

export default PalindromeAPI;
