export default function Contact() {
    return (
        <div className="contact p-6 bg-black/40 rounded-lg shadow-md">
            <p className="text-5xl font-semibold mb-5 flex justify-center">Contact</p>
            <div className="flex flex-row flex-wrap gap-5 justify-center">
                <form action="https://formsubmit.co/d81c8b26f49a62cbbff6df820c531b8c" method="POST" className="flex flex-col gap-3 w-full md:w-1/2">
                    <input type="text" name="name" placeholder="Name" className="p-2 border border-gray-300 rounded" required />
                    <input type="email" name="email" placeholder="Email" className="p-2 border border-gray-300 rounded" required />
                    <textarea name="message" placeholder="Message" className="p-2 border border-gray-300 rounded h-32" required></textarea>
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">Send</button>
                </form>
            </div>
        </div>
    );
}