


import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import emailjs from "emailjs-com";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const CheckoutForm = ({ order, onClose }) => {
  const [checkoutInfo, setCheckoutInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "", // For hard copy delivery
  });

  const currencyMapping = {
    Naira: "NGN",
    Dollar: "USD",
    Euro: "EUR",
    Pound: "GBP",
  };

  if (!order || !order.price) {
    console.error("Invalid order details passed to CheckoutForm");
    return null; // Prevent rendering if order details are invalid
  }

  const { book, price, selectedCurrency, deliveryMode } = order;

  const flutterwaveConfig = {
    public_key: "FLWPUBK_TEST-3c7d20e63800e36901ea8101a3a53aea-X",
    tx_ref: Date.now(),
  amount: price || 0,
  currency: currencyMapping[selectedCurrency] || "NGN",
  payment_options: "card, mobilemoney, ussd",
  customer: {
    email: checkoutInfo?.email || "",
    phonenumber: checkoutInfo?.phone || "",
    name: checkoutInfo?.name || "",
  },
    customizations: {
      title: "Book Purchase",
      description: `Payment for ${book.title} (${deliveryMode === "softCopy" ? "Soft Copy" : "Hard Copy"})`,
      logo: "https://example.com/logo.png",
    },
  };

  const handleFlutterwavePayment = useFlutterwave(flutterwaveConfig);

  const handlePayment = () => {
    handleFlutterwavePayment({
      callback: (response) => {
        if (response.status === "successful") {
          alert(`Payment successful for ${book.title}`);
          const paymentReference = response.tx_ref;

          if (deliveryMode === "softCopy") {
            sendSoftCopyEmail(checkoutInfo.email, paymentReference);
          } else {
            handleHardCopyOrder(paymentReference);
          }
        }
        closePaymentModal();
        onClose();
      },
      onClose: () => {
        console.log("Payment closed");
      },
    });
  };

  const sendSoftCopyEmail = (buyerEmail, paymentReference) => {
    const emailData = {
      name: checkoutInfo.name,
      email: checkoutInfo.email,
      phone: checkoutInfo.phone,
      product: book.title,
      payment_reference: paymentReference,
    };

    // Sending email to buyer with the soft copy attachment
    emailjs.send(
      "service_1oupkxg",
      "template_9q5dkrk",
      {
        ...emailData,
        to_email: buyerEmail,
        subject: `Soft Copy Delivery: ${book.title}`,
        file_url: book.pdf, // Include PDF link in the email
      },
      "uQCYukDaD13qnaIyx"
    )
      .then(() => {
        alert("Soft copy has been sent to your email!");
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
      });
  };

  const handleHardCopyOrder = (paymentReference) => {
    const hardCopyOrderData = {
      name: checkoutInfo.name,
      email: checkoutInfo.email,
      phone: checkoutInfo.phone,
      address: checkoutInfo.address,
      product: book.title,
      payment_reference: paymentReference,
    };

    // Sending email to admin with the hard copy order details
    emailjs.send(
      "service_1oupkxg",
      "template_gb4qaag",
      {
        ...hardCopyOrderData,
        to_email: "noblenegroventures@gmail.com",
        subject: `Hard Copy Order: ${book.title}`,
      },
      "uQCYukDaD13qnaIyx"
    )
      .then(() => {
        alert("Your hard copy order has been placed successfully!");
      })
      .catch((error) => {
        console.error("Failed to send hard copy order details:", error);
      });
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
          {deliveryMode === "softCopy"
            ? "Your book will be sent to the email provided after purchase."
            : "Please provide your address for delivery of the hard copy."}
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
          {deliveryMode === "hardCopy" && (
            <div className="mb-4">
              <label className="block mb-1 font-medium">Address</label>
              <input
                type="text"
                value={checkoutInfo.address}
                onChange={(e) => setCheckoutInfo({ ...checkoutInfo, address: e.target.value })}
                required
                className="border w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
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
