export interface bookingSchema {
  phone: string;
  plan: string;
  shoot_type: string;
  location: string;
  shooting_date: string;
  shooting_time: string;
}

export interface fetchBookingSchema {
  id: string;
  created_at: string;
  delivery_status: string;
  location: string;
  number_of_shoot: number;
  payment_status: string;
  plan: string;
  price: string;
  shoot_type: string;
  shooting_date: string;
  shooting_time: string;
}
