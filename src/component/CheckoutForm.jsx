import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import emailjs from "emailjs-com";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const CheckoutForm = ({ selectedBook, onClose }) => {
  const [checkoutInfo, setCheckoutInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const flutterwaveConfig = {
    public_key: "FLWPUBK_TEST-3c7d20e63800e36901ea8101a3a53aea-X",
    tx_ref: Date.now(),
    amount: selectedBook.price,
    currency: "NGN",
    payment_options: "card, mobilemoney, ussd",
    customer: {
      email: checkoutInfo.email,
      phonenumber: checkoutInfo.phone,
      name: checkoutInfo.name,
    },
    customizations: {
      title: "Book Purchase",
      description: `Payment for ${selectedBook.title}`,
      logo: "https://example.com/logo.png", 
    },
  };

  const handleFlutterwavePayment = useFlutterwave(flutterwaveConfig);

  const handlePayment = () => {
    handleFlutterwavePayment({
      callback: (response) => {
        if (response.status === "successful") {
          alert(`Payment successful for ${selectedBook.title}`);
          const paymentReference = response.tx_ref;
          sendEmails(checkoutInfo.email, paymentReference);
        }
        closePaymentModal();
        onClose();
      },
      onClose: () => {
        console.log("Payment closed");
      },
    });
  };

  const sendEmails = (buyerEmail, paymentReference) => {
    const emailData = {
      name: checkoutInfo.name,
      email: checkoutInfo.email,
      phone: checkoutInfo.phone,
      product: selectedBook.title,
      payment_reference: paymentReference,
    };

    // Sending email to admin
    emailjs.send(
      "service_1oupkxg",
      "template_gb4qaag",
      {
        ...emailData,
        to_email: "noblenegroventures@gmail.com",
        subject: "New Book Purchase Order",
      },
      "uQCYukDaD13qnaIyx"
    );

    // Sending email to buyer (receipt)
    emailjs.send(
      "service_1oupkxg",
      "template_9q5dkrk",
      {
        ...emailData,
        to_email: buyerEmail,
        subject: "Your Purchase Receipt",
      },
      "uQCYukDaD13qnaIyx"
    );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handlePayment();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <IoClose size={24} />
        </button>

        <h2 className="text-lg font-bold mb-4 text-center">
          Enter Your Details to Purchase
        </h2>
        <p className="text-center text-gray-600 mb-4">
          Your book will be sent to the email provided after purchase.
        </p>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              value={checkoutInfo.name}
              onChange={(e) => setCheckoutInfo({ ...checkoutInfo, name: e.target.value })}
              required
              className="border w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              value={checkoutInfo.email}
              onChange={(e) => setCheckoutInfo({ ...checkoutInfo, email: e.target.value })}
              required
              className="border w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Phone</label>
            <input
              type="text"
              value={checkoutInfo.phone}
              onChange={(e) => setCheckoutInfo({ ...checkoutInfo, phone: e.target.value })}
              required
              className="border w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md w-full font-semibold"
            >
              Proceed to Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
