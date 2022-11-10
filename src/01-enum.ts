export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer'
}

export type User = {
  username: string,
  role: ROLES
}

(() => {
  const user: User = {
    username: 'Thomas',
    role: ROLES.ADMIN
  }

  console.log(user)
})();
