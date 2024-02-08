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

export interface bookingOverviewSchema {
  images_total: number;
  pending_bookings: number;
  recent_bookings: fetchBookingSchema;
  recently_viewed_images: any;
  total_bookings: number;
}

export interface bankDetailsSchema {
  account_name: string;
  account_number: string;
  bank_name: string;
}
