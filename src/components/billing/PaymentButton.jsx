import Button from "../ui/Button";
import { initiatePayment } from "../../api/payments";

const PaymentButton = ({ bill }) => {
  const handlePay = async () => {
    try {
      await initiatePayment({
        amount: bill.amount,
        patient: bill.patient,
      });

      alert("Payment initiated!");
    } catch (err) {
      console.log(err);
    }
  };

  return <Button onClick={handlePay}>Pay Now</Button>;
};

export default PaymentButton;