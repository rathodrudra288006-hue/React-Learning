const Contact = () => {
  return (
    <div className="max-w-sm mx-auto mt-10 p-6 rounded-2xl bg-orange-50 border border-orange-100 text-center shadow-xl">
      {/* Avatar */}
      <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white bg-orange-400 rounded-full">
        R
      </div>

      {/* Name & Title */}
      <h1 className="text-xl font-semibold mb-1 text-gray-800">Rathod Rudra</h1>
      <p className="text-sm text-orange-500 mb-4 font-medium">
        Frontend React Developer
      </p>

      {/* Contact Details */}
      <div className="space-y-2 text-sm text-gray-600 mb-6">
        <p className="flex items-center justify-center gap-2">
          <span>📱</span> 90*****001
        </p>
        <p className="flex items-center justify-center gap-2">
          <span>✉️</span> rat***rudra2****6@gmail.com
        </p>
      </div>

      {/* Button */}
      <button className="w-full py-2.5 rounded-full bg-orange-400 text-white font-semibold text-sm hover:bg-orange-500 transition">
        Contact Me
      </button>
    </div>
  );
};

export default Contact;
