import BaseAPI from "./BaseAPI";
/**
 * Provides known endpoints for data service.
 * The base path for the data service is defined in the env.
 * @class paths
 */
const paths = {
  login: "/login",
  signUp: "/signUp",
  current: "/current",
  allUsers: "/all",
  roles: "/roles",
  deleteUser: "/delete",
};

/**
 * Add the NavFeas prefix for the user management api
 */
const user_prefix = "/api/space";
for (const key of Object.keys(paths)) {
  paths[key] = user_prefix + paths[key];
}

/**
 * 
 * @class SpaceAPI
 */
const SpaceAPI = {

  getRoles() {
    const path = paths.roles;
    return BaseAPI.get(path);
  },
  updateRole(userId, newRole) {
    const path = `${paths.roles}/${userId}`;
    return BaseAPI.sendRequest("PUT", path, {
      role: newRole,
    });
  },
};

export default SpaceAPI;
