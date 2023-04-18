import BaseAPI from "./BaseAPI";
/**
 * Provides known endpoints for data service.
 * The base path for the data service is defined in the env.
 */
const paths = {
  generate: "/generate",
  toptriangle: "/toptriangle",
  bottomtriangle: "/toptriangle"
};
/**
 * Add the diamond prefix for the diamond routes in the api
 */
const diamond_prefix = "/diamond";
for (const key of Object.keys(paths)) {
  paths[key] = diamond_prefix + paths[key];
}

// Instantiate a BaseAPI with port 8000
const diamondBase = new BaseAPI(8000)

/**
 * All of the diamond requests
 * @class DiamondAPI
 */
const DiamondAPI = {
  generateDiamond(dimension) {
    const path = paths.generate;
    return diamondBase.post(path, {dimension});
  },
  generateTopTriangle(dimension) {
    const path = paths.toptriangle;
    return diamondBase.post(path, {dimension});
  },
  generateBottomTriangle(dimension) {
    const path = paths.bottomtriangle;
    return diamondBase.post(path, {dimension});
  }
};

export default DiamondAPI;
