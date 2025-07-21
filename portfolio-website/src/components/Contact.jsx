import { motion } from 'framer-motion';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      'service_id', 
      'template_id', 
      form.current, 
      'public_key'
    )
    .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
    }, (error) => {
        console.log(error.text);
        alert('Failed to send message.');
    });
    
    e.target.reset();
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="user_name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="user_email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" 
                  required 
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">Your Message</label>
              <textarea 
                id="message" 
                name="message"
                rows="5" 
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" 
                required
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-medium hover:opacity-90 transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}