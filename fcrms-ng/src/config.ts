// const API_URL = window.location.origin+"/api/";//Production Development
export const API_URL = window.location.origin.replace(":4200","")+"/fcrms-php/";//Mobile Development
// const API_URL = 'http://localhost/fcrms-php/';//LocalHost Development
// const API_URL = 'http://localhost:88/fcrms-php/';

export const LogReg = {

  LoginURL : API_URL + 'login.php',
  RegistrationURL : API_URL + 'register.php'

}

export const ProductsPanel = {

  getAllOwnedProductsURL : API_URL + 'getAllOwnedProducts.php',
  getOwnedProductURL : API_URL + 'getOwnedProduct.php',
  addOwnedProductURL : API_URL + 'addOwnedProduct.php',
  updateOwnedProductURL : API_URL + 'updateOwnedProduct.php',
  deleteOwnedProductURL : API_URL + 'deleteOwnedProduct.php'

}

export const Products = {

  getProductsURL: API_URL + 'getProductsCategory.php'

};

export const Posts = {

  addPostsURL: API_URL + 'addToBulletin.php',
  getAllPostsURL: API_URL + 'getAllFromBulletin.php'

}
export const imageUpload = {
  imageUploadURL: API_URL + 'imageUpload.php',
  getAllForImageUpload: API_URL + 'getAllForImageUpload.php'
}

export const ProfileAddress={
  addAddressURL : API_URL + 'add-address.php'
}

export const OrdersURL={
  addOrdersURL: API_URL + 'addOrder.php',
  getAllPlacedOrdersURL: API_URL + 'getPlacedOrders.php'
}
