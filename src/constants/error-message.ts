export enum ErrorMsg {
  //auth
  ACCOUNT_NOT_FOUND = 'Email or password is incorrect',
  EMAIL_EXIST = 'Email already exist, please use another email',

  //user
  USER_NOT_FOUND = 'User not found',

  //category
  CATEGORY_NOT_FOUND = 'Category not found',
  CATEGORY_EXIST = 'Category already exists',

  //product
  PRODUCT_NOT_FOUND = 'Product not found',
  PRODUCT_EXIST = 'Product already exists, please create new one',

  //order
  ORDER_NOT_FOUND = 'Order not found',
  ORDER_EXIST = 'Order already exists',
}
