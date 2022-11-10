import { ROLES, User } from "./01-enum";

(() => {
  const currentUser: User = {
    username: "Thomas",
    role: ROLES.ADMIN,
  };

  // Repetitive and non-flexible
  const checkAdminRole = () => {
    if(currentUser.role === ROLES.ADMIN) {
      console.log("User is admin");
      return true;
    }
    return false;
  };

  console.log(checkAdminRole());



  // Flexible and reusable

  const checkRole = (...roles: string[]) => {
    return roles.includes(currentUser.role);
  }

  console.log(checkRole(ROLES.ADMIN, ROLES.CUSTOMER, ROLES.SELLER));

})();
