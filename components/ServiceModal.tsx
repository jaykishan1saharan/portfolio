import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
    service: any;
    onClose: () => void;
};

export default function ServiceModal({
    service,
    onClose,
}: Props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [budget, setBudget] = useState("");
    const [message, setMessage] = useState("");
    const [pages, setPages] = useState(1);
    const [success, setSuccess] = useState(false);
    const estimatedPrice = pages * 2000;

    const handleSubmit = () => {

        setSuccess(true);

        const url = `https://wa.me/919881900876?text=
Hello,%20my%20name%20is%20${name}

%0A%0AI%20am%20interested%20in:%20${service.title}

%0A%0AEmail:%20${email}

%0A%0ABudget:%20${budget}

%0A%0AProject%20Details:%20${message}
`;

        setTimeout(() => {
            window.open(url, "_blank");
        }, 1500);

    };

    return (

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
fixed
inset-0
z-[999]
bg-black/90
flex
items-center
justify-center
p-6
"
        >

            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0.8,
                    y: 50
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0
                }}
                transition={{
                    duration: 0.4
                }}
                className="
w-full
max-w-4xl
max-h-[90vh]
overflow-y-auto
rounded-3xl
border border-cyan-500/20
bg-gradient-to-br
from-[#08111f]
via-[#0b1020]
to-[#13132b]
p-10
text-white
relative
"
            >

                <button
                    onClick={onClose}
                    className="
          absolute
          top-5
          right-5
          text-2xl
          "
                >
                    ✕
                </button>

                <h2 className="text-5xl font-bold">
                    {service.title}
                </h2>

                <p className="text-gray-400 mt-4 text-lg">
                    {service.description}
                </p>

                {/* Service Stats */}

                <div className="flex gap-10 mt-8">

                    <div>
                        <h4 className="text-4xl font-bold text-cyan-400">
                            3+
                        </h4>
                        <p className="text-gray-400">
                            Years Learning
                        </p>
                    </div>

                    <div>
                        <h4 className="text-4xl font-bold text-cyan-400">
                            10+
                        </h4>
                        <p className="text-gray-400">
                            Projects
                        </p>
                    </div>

                    <div>
                        <h4 className="text-4xl font-bold text-cyan-400">
                            100%
                        </h4>
                        <p className="text-gray-400">
                            Responsive
                        </p>
                    </div>

                </div>

                {/* WHAT I PROVIDE */}

                <div className="mt-10">
                    <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                        What I Provide
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                        {(service.provide || []).map((item: string) => (
                            <div
                                key={item}
                                className="
        p-4
        rounded-xl
        bg-white/5
        border border-white/10
        "
                            >
                                ✓ {item}
                            </div>
                        ))}
                    </div>
                </div>

                {/* PROCESS */}

                <div className="mt-10">
                    <h3 className="text-2xl font-semibold text-purple-400 mb-4">
                        Work Process
                    </h3>

                    <div className="space-y-4">
                        {(service.process || []).map(
                            (step: string, index: number) => (
                                <div
                                    key={step}
                                    className="
          flex
          items-center
          gap-4
          p-4
          rounded-xl
          bg-white/5
          border border-white/10
          "
                                >
                                    <div
                                        className="
            w-10
            h-10
            rounded-full
            bg-cyan-500
            text-black
            font-bold
            flex
            items-center
            justify-center
            "
                                    >
                                        {index + 1}
                                    </div>

                                    <span>{step}</span>
                                </div>
                            )
                        )}
                    </div>
                </div>

                {/* Pricing Cards */}

                <div className="mt-10">

                    <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
                        Pricing
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4">

                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h4 className="text-xl font-bold">Basic</h4>
                            <p className="text-cyan-400 text-3xl mt-2">₹5,000+</p>
                            <p className="text-gray-400 mt-2">
                                Simple landing page
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500">
                            <h4 className="text-xl font-bold">Standard</h4>
                            <p className="text-cyan-400 text-3xl mt-2">₹10,000+</p>
                            <p className="text-gray-400 mt-2">
                                Multi-page website
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h4 className="text-xl font-bold">Premium</h4>
                            <p className="text-cyan-400 text-3xl mt-2">₹20,000+</p>
                            <p className="text-gray-400 mt-2">
                                Full custom solution
                            </p>
                        </div>

                    </div>

                </div>

                {/* TERMS */}

                <div className="mt-10">
                    <h3 className="text-2xl font-semibold text-pink-400 mb-4">
                        Terms & Conditions
                    </h3>

                    <ul className="space-y-3">
                        {(service.terms || []).map((term: string) => (
                            <li
                                key={term}
                                className="
        p-4
        rounded-xl
        bg-white/5
        border border-white/10
        "
                            >
                                • {term}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* PRICING */}

                <div className="mt-12">

                    <h3 className="
text-3xl
font-bold
text-cyan-400
mb-6
">
                        Pricing Packages
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6">

                        {service.pricing?.map((pkg: any) => (

                            <div
                                key={pkg.name}
                                className="
rounded-2xl
border border-cyan-500/20
bg-white/5
p-6
hover:border-cyan-400
transition
"
                            >

                                <h4 className="text-2xl font-bold">
                                    {pkg.name}
                                </h4>

                                <p className="
text-cyan-400
text-3xl
font-bold
mt-3
">
                                    {pkg.price}
                                </p>

                                <ul className="mt-4 space-y-2">

                                    {pkg.features.map((item: string) => (

                                        <li key={item}>
                                            ✓ {item}
                                        </li>

                                    ))}

                                </ul>

                            </div>

                        ))}

                    </div>

                </div>

                {/* DELIVERY TIMELINE */}

                <div className="mt-12">

                    <h3 className="
text-3xl
font-bold
text-purple-400
mb-6
">
                        Estimated Timeline
                    </h3>

                    <div className="space-y-4">

                        {service.delivery?.map(
                            (day: string, index: number) => (

                                <div
                                    key={day}
                                    className="
flex
items-center
gap-4
bg-white/5
p-4
rounded-xl
"
                                >

                                    <div
                                        className="
w-10
h-10
rounded-full
bg-cyan-500
flex
items-center
justify-center
font-bold
"
                                    >
                                        {index + 1}
                                    </div>

                                    <span>{day}</span>

                                </div>

                            )
                        )}

                    </div>

                </div>

                {/* FAQ */}

                <div className="mt-12">

                    <h3 className="
text-3xl
font-bold
text-pink-400
mb-6
">
                        Frequently Asked Questions
                    </h3>

                    <div className="space-y-4">

                        {service.faq?.map((item: any) => (

                            <div
                                key={item.q}
                                className="
bg-white/5
rounded-xl
p-5
"
                            >

                                <h4 className="font-bold">
                                    {item.q}
                                </h4>

                                <p className="text-gray-400 mt-2">
                                    {item.a}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

                {/* TESTIMONIALS */}

                <div className="mt-12">

                    <h3 className="
text-3xl
font-bold
text-yellow-400
mb-6
">
                        Client Reviews
                    </h3>

                    <div className="
grid
md:grid-cols-3
gap-6
">

                        {service.testimonials?.map((item: any) => (

                            <div
                                key={item.name}
                                className="
bg-white/5
border border-white/10
rounded-2xl
p-6
hover:border-cyan-400
transition
"
                            >

                                <div className="text-yellow-400 text-xl">
                                    ⭐⭐⭐⭐⭐
                                </div>

                                <p className="
mt-4
text-gray-300
italic
">
                                    "{item.review}"
                                </p>

                                <div className="mt-6">

                                    <h4 className="
font-bold
text-white
">
                                        {item.name}
                                    </h4>

                                    <p className="
text-gray-400
text-sm
">
                                        {item.role}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

                {/* COST CALCULATOR */}

                <div className="mt-12">

                    <h3
                        className="
text-3xl
font-bold
text-cyan-400
mb-6
"
                    >
                        Cost Calculator
                    </h3>

                    <label
                        htmlFor="pages"
                        className="
text-gray-300
block
mb-4
"
                    >
                        Number of Pages
                    </label>

                    <input
                        id="pages"
                        aria-label="Number of Pages"
                        type="range"
                        min="1"
                        max="20"
                        value={pages}
                        onChange={(e) =>
                            setPages(Number(e.target.value))
                        }
                        className="w-full"
                    />

                    <div className="mt-4 flex justify-between">

                        <p>
                            Pages: {pages}
                        </p>

                        <p
                            className="
text-cyan-400
font-bold
"
                        >
                            ₹{estimatedPrice.toLocaleString()}
                        </p>

                    </div>

                </div>

                {/* REQUEST FORM */}

                <div className="mt-12">

                    <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
                        Request This Service
                    </h3>

                    <div className="space-y-4">

                        <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="
      w-full
      p-4
      rounded-xl
      bg-white/5
      border border-white/10
      outline-none
      "
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="
      w-full
      p-4
      rounded-xl
      bg-white/5
      border border-white/10
      outline-none
      "
                        />

                        <label
                            htmlFor="budget"
                            className="text-gray-300 block mb-2"
                        >
                            Budget Range
                        </label>

                        <select
                            id="budget"
                            aria-label="Budget Range"
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                            className="
  w-full
  p-4
  rounded-xl
  bg-[#111827]
  border border-white/10
  "
                        >
                            <option value="">Select Budget</option>
                            <option>₹5,000 - ₹10,000</option>
                            <option>₹10,000 - ₹25,000</option>
                            <option>₹25,000 - ₹50,000</option>
                            <option>₹50,000+</option>
                        </select>

                        <textarea
                            rows={5}
                            placeholder="Tell me about your project..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="
      w-full
      p-4
      rounded-xl
      bg-white/5
      border border-white/10
      outline-none
      "
                        />

                    </div>

                </div>

                {/* BUTTONS */}

                <div className="mt-10 flex flex-wrap gap-4">

                    <button
                        onClick={handleSubmit}
                        className="
  px-8
  py-4
  rounded-2xl
  bg-green-500
  text-white
  font-bold
  hover:scale-105
  transition
  "
                    >
                        Book Service 🚀
                    </button>

                    <button
                        onClick={onClose}
                        className="
    px-8
    py-4
    rounded-2xl
    border
    border-cyan-500
    text-cyan-400
    hover:bg-cyan-500/10
    transition
    "
                    >
                        Close
                    </button>

                </div>

            </motion.div>

            {success && (

                <div
                    className="
fixed
inset-0
bg-black/70
flex
items-center
justify-center
z-[1000]
"
                >

                    <div
                        className="
bg-[#0f172a]
border
border-green-500
rounded-3xl
p-10
text-center
animate-pulse
"
                    >

                        <div className="text-6xl">
                            ✅
                        </div>

                        <h3
                            className="
text-3xl
font-bold
text-green-400
mt-4
"
                        >
                            Request Sent!
                        </h3>

                        <p
                            className="
text-gray-400
mt-2
"
                        >
                            Opening WhatsApp...
                        </p>

                    </div>

                </div>

            )}

        </motion.div>

    );
}