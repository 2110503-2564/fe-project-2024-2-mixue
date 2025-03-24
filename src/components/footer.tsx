import React from "react";
import Link from "next/link";

const Footer= () => {
  return (
    <footer className="bg-[#3062b4] text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Clinic Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">BrightSmile Dental Clinic</h2>
          <p className="text-sm">
            123 Dental Avenue<br />
            Smile City, Bangkok<br />
            Thailand
          </p>
          <p className="mt-2 text-sm">Phone: 000-000-0000</p>
          <p className="text-sm">Email: contact@brightsmile.com</p>
        </div>

        {/* Opening Hours */}
        <div>
        <h2 className="text-xl font-semibold mb-4">Opening Hours</h2>
        <ul className="text-sm space-y-1">
            <li>Monday – Sunday: 10:00 AM – 8:00 PM</li>
            <li>Closed on seasonal holidays</li>
        </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="text-sm space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/booking" className="hover:underline">
                Book Appointment
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 border-t border-blue-700 pt-4 text-center text-sm text-blue-200">
        &copy; {new Date().getFullYear()} BrightSmile Dental Clinic. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
