
const FirstPage=()=>{
    return (
        <>
    <section className="py-16 bg-white py-20">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-16">Why Choose BrightSmile?</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16">
      <div>
        <h3 className="text-xl font-semibold mb-2">🧑‍⚕️ Experienced Dentists</h3>
        <p className="text-sm text-gray-600">Our professionals have 10+ years of experience in dental care.</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">📅 Easy Appointments</h3>
        <p className="text-sm text-gray-600">Book online in under a minute. No phone calls needed.</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">🦷 Modern Equipment</h3>
        <p className="text-sm text-gray-600">We use the latest tools for pain-free, precise treatments.</p>
      </div>
    </div>
  </div>
</section>


{/* how to book */}
<section className="py-28 bg-gray-100">
  <div className="max-w-5xl mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 ">How to Book an Appointment</h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-gray-700">
      <div className="flex flex-col items-center">
        <div className="text-5xl mb-4">🧑‍⚕️</div>
        <h3 className="font-semibold text-lg mb-1">Select a Dentist</h3>
        <p className="text-sm text-gray-600">Browse available professionals and choose the one that fits you best.</p>
      </div>

      <div className="flex flex-col items-center">
        <div className="text-5xl mb-4">📅</div>
        <h3 className="font-semibold text-lg mb-1">Pick a Date & Time</h3>
        <p className="text-sm text-gray-600">Check real-time availability and choose a convenient time slot.</p>
      </div>

      <div className="flex flex-col items-center">
        <div className="text-5xl mb-4">📝</div>
        <h3 className="font-semibold text-lg mb-1">Confirm Your Info</h3>
        <p className="text-sm text-gray-600">Enter your contact details and any notes before confirming.</p>
      </div>

      <div className="flex flex-col items-center">
        <div className="text-5xl mb-4">🦷</div>
        <h3 className="font-semibold text-lg mb-1">Visit & Smile</h3>
        <p className="text-sm text-gray-600">Show up for your appointment and enjoy expert dental care.</p>
      </div>
    </div>
  </div>
</section>





{/* servise list */}
<section className="py-40 bg-white">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-8">Our Dental Services</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">

      <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Teeth Whitening</h3>
        <p className="text-sm text-gray-600">Brighten your smile in under an hour with our safe whitening treatments.</p>
      </div>
      <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Braces & Aligners</h3>
        <p className="text-sm text-gray-600">Straighten your teeth comfortably with our modern orthodontic solutions.</p>
      </div>
      <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Dental Implants</h3>
        <p className="text-sm text-gray-600">Permanent solutions for missing teeth using advanced implant techniques.</p>
      </div>

 
      <div className="p-6 border rounded-lg shadow hover:shadow-2xl transition">
        <h3 className="text-xl font-semibold mb-2">Root Canal Therapy</h3>
        <p className="text-sm text-gray-600">Relieve pain and save your natural teeth with expert root canal treatments.</p>
      </div>
      <div className="p-6 border rounded-lg shadow hover:shadow-2xl transition">
        <h3 className="text-xl font-semibold mb-2">Pediatric Dentistry</h3>
        <p className="text-sm text-gray-600">Gentle dental care for children, from first teeth to teens.</p>
      </div>
      <div className="p-6 border rounded-lg shadow hover:shadow-2xl transition">
        <h3 className="text-xl font-semibold mb-2">Dental Checkups & Cleaning</h3>
        <p className="text-sm text-gray-600">Routine exams and cleanings to keep your teeth healthy and strong.</p>
      </div>
    </div>

    <div className="mt-8">
      <a
        href="/dentist"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        View All Dentists for More Info
      </a>
    </div>
  </div>
</section>




{/* review */}
<section className="py-28 bg-gray-100">
  <div className="max-w-5xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-8">What Our Patients Say</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded shadow">
        <p>"Super friendly staff and no wait time. I booked online and it was smooth!"</p>
        <p className="mt-2 font-semibold">– Sarah T.</p>
      </div>
      <div className="bg-white p-6 rounded shadow">
        <p>"Clean, professional, and easy to book. Highly recommend!"</p>
        <p className="mt-2 font-semibold">– Jason M.</p>
      </div>
      <div className="bg-white p-6 rounded shadow">
        <p>"My child was nervous at first, but the staff made them feel comfortable and safe. Great pediatric care!"</p>
        <p className="mt-2 font-semibold">– Emily R.</p>
      </div>
      <div className="bg-white p-6 rounded shadow">
        <p>"The dentist explained everything clearly, and the treatment was painless. Booking again for sure!"</p>
        <p className="mt-2 font-semibold">– David L.</p>
      </div>
    </div>
  </div>
</section>




{/* map */}
<section className="py-16 bg-white">
  <div className="max-w-4xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-6">Find Our Clinic</h2>
    <p className="text-gray-600 mb-6">BrightSmile Dental Clinic, 123 Dental Avenue, Smile City, Bangkok, Thailand</p>
    <iframe
      src="https://maps.google.com/maps?q=dental%20clinic&t=&z=13&ie=UTF8&iwloc=&output=embed"
      width="100%"
      height="300"
      className="rounded shadow"
      loading="lazy"
      title="Clinic Location"
    ></iframe>
  </div>
</section>





</>
    );

};
export default FirstPage;