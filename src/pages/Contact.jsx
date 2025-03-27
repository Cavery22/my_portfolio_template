import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const { email, subject, body } = data;
    const myEmail = "averycozy@yahoo.com";
    const mailToLink = `mailto:${myEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`From: ${email}\n\n${body}`)}`;
    window.location.href = mailToLink;

    // Optional: reset form fields after submit
    reset();
  };

  return (
    <main className="pt-20 min-h-screen bg-white">
      <section className="max-w-2xl mx-auto px-6 py-16 bg-white shadow-lg rounded-lg border border-gray-200">
        <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center">
          Contact Me
        </h2>
        <p className="text-gray-700 text-center mb-8">
          If you’re interested in working together or have any questions, feel
          free to send me a message.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Subject
            </label>
            <input
              {...register("subject", { required: true })}
              type="text"
              id="subject"
              placeholder="What's this about?"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Message Body */}
          <div>
            <label
              htmlFor="body"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              {...register("body", { required: true })}
              id="body"
              placeholder="Enter your message here..."
              rows="5"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
            >
              Send Email
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Contact;
