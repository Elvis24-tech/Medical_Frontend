import api from "./axios";

export const stkPush = (paymentId) =>
  api.post(`payments/${paymentId}/stk/`);