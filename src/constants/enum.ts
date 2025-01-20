export enum PaymentStatus {
  UNPAID = 1,
  PAID,
  READY,
  CANCEL,
  SHIPPED,
  COMPLETED,
}

export enum PaymentMethod {
  COD = 1,
  ONLINE_BANKING,
  CREDIT_CARD,
}

export enum OrderStatus {
  PENDING = 1,
  INPROGRESS,
  SHIPPING,
  COMPLETED,
  CANCELED,
}
