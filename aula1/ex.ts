interface Car {
  brand: string;
  model: string;
  year?: number;
}

const car1: Car = {
  brand: "BMW",
  model: "M3",
  year: 2020,
};
//console.log(car1);

type PaymentMethod = "card" | "mbway" | "paypal";

//console.log(payment_1);

interface Payment {
  value: number;
  method: PaymentMethod;
  detail: string;
}

const last_payment: Payment = {
  value: 150,
  method: "card",
  detail: "50€ tip",
};

function PaymentProcess(payment: Payment): string {
  return `Payment was successful: ${last_payment.value}€ on ${last_payment.method} and got ${last_payment.detail}`;
}

console.log(PaymentProcess(last_payment));
