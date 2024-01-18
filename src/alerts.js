import { toast } from "react-toastify";


export const ErrorAlert = (message) =>
  toast.error(message, {
    bodyClassName: "ToastifyLoginError",
    position: "bottom-center",
    fontSize: "2px",
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: true,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    theme: "light",
    rtl: false,
  });

export const EmailAlert = (message) =>
  toast.info(message, {
    bodyClassName: "ToastifyLoginError",
    position: "bottom-center",
    fontSize: "2px",
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: true,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    theme: "light",
    rtl: false,
  });
