import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-10 p-4 md:p-8 text-zinc-300">
        <h1 className="text-2xl font-bold mb-4">Terms & Conditions</h1>

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">1. Booking and Payment</h2>
          <ul className="list-disc list-inside text-zinc-400">
            <li>
              By scheduling a service, you agree to our payment terms as
              outlined herein.
            </li>
            <li>
              A non-refundable deposit of $50 is required to confirm your
              booking.
            </li>
            <li>
              The remaining balance is due on the day of the service, payable by
              cash or credit card.
            </li>
            <li>
              Early morning bookings (before 7:00 am) may incur an additional
              fee of 10%.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">
            2. Cancellations and Rescheduling
          </h2>
          <ul className="list-disc list-inside text-zinc-400">
            <li>
              Cancellations made less than 48 hours before the appointment will
              forfeit the deposit.
            </li>
            <li>
              Rescheduling is allowed up to 24 hours before the appointment,
              subject to artist availability.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">3. Travel and Location</h2>
          <ul className="list-disc list-inside text-zinc-400">
            <li>
              Travel fees may apply depending on the location of the service.
            </li>
            <li>Parking fees, if any, are to be covered by the client.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">4. Preparation</h2>
          <ul className="list-disc list-inside text-zinc-400">
            <li>
              Clients are expected to have clean and dry hair and face prior to
              the start of the service.
            </li>
            <li>
              Additional charges may apply for makeup removal or hair
              preparation.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">5. Liability</h2>
          <ul className="list-disc list-inside text-zinc-400">
            <li>
              It's the client's responsibility to inform the artist of any
              allergies or sensitivities.
            </li>
            <li>
              The artist is not liable for any reactions or injuries that occur
              during or after the service.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">
            6. Images and Promotions
          </h2>
          <ul className="list-disc list-inside text-zinc-400">
            <li>
              The artist may take photos during the service for promotional use,
              unless otherwise requested by the client.
            </li>
            <li>
              Discounts or promotions cannot be combined with any other offer.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
