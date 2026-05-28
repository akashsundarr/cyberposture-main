"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-surface-container-lowest relative overflow-x-hidden">
      {/* Decorative Background Glows */}
      <div 
        className="absolute top-[-100px] right-[-200px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(231,193,133,0.05) 0%, rgba(17,20,19,0) 70%)" }} 
      />
      <div 
        className="absolute bottom-[20%] left-[-300px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(177,204,197,0.03) 0%, rgba(17,20,19,0) 70%)" }} 
      />
      
      <SiteHeader />
      
      <main className="flex-grow flex flex-col items-center justify-center py-24 pt-32 px-8 max-w-7xl mx-auto w-full z-10 relative">
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="w-full mb-12 max-w-3xl"
        >
          <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl text-on-surface mb-2 tracking-tight">
            Initiate Dialogue.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-on-surface-variant max-w-2xl">
            Engage our elite consultancy for product inquiries, strategic posture assessments,
            or to schedule a comprehensive platform demonstration.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full"
        >
          {/* Form Panel */}
          <motion.div variants={scaleIn} className="lg:col-span-7 glass-panel rounded-xl p-6 md:p-8 relative overflow-hidden min-h-[500px]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tertiary/20 via-tertiary to-tertiary/20" />
            
            <h2 className="text-lg font-semibold text-tertiary mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                send
              </span>
              Direct Inquiry
            </h2>

            <div className="relative mt-6">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="text-on-surface flex items-start gap-3 bg-tertiary/10 border border-tertiary/20 p-6 rounded-lg"
                  >
                    <span className="material-symbols-outlined text-tertiary mt-0.5">check_circle</span>
                    <p className="leading-relaxed">
                      <strong className="block mb-1 text-tertiary">Transmission Successful</strong>
                      Thank you — your inquiry has been received by our command center. An intelligence operative will respond within one business day.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSent(true);
                    }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Field id="firstName" label="First Name" placeholder="John" />
                      <Field id="lastName" label="Last Name" placeholder="Doe" />
                    </div>
                    
                    <Field id="email" type="email" label="Corporate Email" placeholder="j.doe@enterprise.com" required />
                    <Field id="company" label="Organization" placeholder="Company Name" />
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-[12px] font-bold uppercase tracking-[0.08em] text-on-surface-variant" htmlFor="intent">
                        Nature of Inquiry
                      </label>
                      <div className="relative group">
                        <select id="intent" className="ghost-input rounded-lg p-3 w-full appearance-none cursor-pointer">
                          <option>Request a Demo</option>
                          <option>Platform Pricing</option>
                          <option>Partnership Opportunity</option>
                          <option>General Support</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none group-hover:text-tertiary transition-colors">
                          expand_more
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-[12px] font-bold uppercase tracking-[0.08em] text-on-surface-variant" htmlFor="message">
                        Message Details
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Provide context for your inquiry…"
                        className="ghost-input rounded-lg p-3 w-full resize-none"
                      />
                    </div>
                    
                    <div className="pt-2">
                      <button type="submit" className="btn-gold px-8 py-3 rounded-lg font-semibold w-full md:w-auto flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-95">
                        Submit Request
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Contact Bento Grid */}
          <motion.div variants={staggerContainer} className="lg:col-span-5 flex flex-col gap-6">
            
            {/* HQ Box */}
            <motion.div variants={fadeUp} className="glass-panel rounded-xl p-6 md:p-8 flex flex-col justify-between h-full group">
              <div>
                <div className="w-12 h-12 rounded-full bg-surface-container border border-outline-variant/30 flex items-center justify-center mb-4 transition-colors group-hover:border-tertiary/50 group-hover:bg-tertiary/10">
                  <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    corporate_fare
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-on-surface mb-2">Global Headquarters</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  CyberPosture Intelligence Group<br />
                  Suite 400, Apex Tower<br />
                  1200 Innovation Drive<br />
                  San Francisco, CA 94103
                </p>
              </div>
              <div className="mt-6 h-32 rounded-lg border border-outline-variant/20 overflow-hidden relative opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDi_D5UYMUrVp06JxCQO89JGvAdJFvudZfXuK03YebDVrjr04NiMjQivt7wDyUfPO6xia5cZB3LzV8T3-R4eVQKELgpw1eiGJ3jKwsy9oiwHnx_MvUz9o3xasav8bjq71qyO2NPQ_b6xkL4JEge6pl6FrvzK5pLzN77rB0BqMcBu36V6zykELgHtXWEzFF9azTM0lCKrqEmhKympN2WA-wiRArnUEyv_NqkZWJK-xMxGeJ0TJMteEqjDFgng7No4sfpra35jwOyDWqC')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent" />
              </div>
            </motion.div>

            {/* Sub-contacts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div variants={fadeUp} className="glass-panel rounded-xl p-6 border-t-2 border-t-outline-variant/30 hover:border-t-primary transition-colors">
                <span className="material-symbols-outlined text-on-surface-variant mb-2">support_agent</span>
                <h4 className="text-[12px] font-bold uppercase tracking-[0.08em] text-on-surface mb-1">
                  Technical Support
                </h4>
                <a href="mailto:support@cyberposture.io" className="text-primary hover:text-tertiary transition-colors block truncate text-sm mt-2">
                  support@cyberposture.io
                </a>
              </motion.div>
              
              <motion.div variants={fadeUp} className="glass-panel rounded-xl p-6 border-t-2 border-t-tertiary/30 hover:border-t-tertiary transition-colors">
                <span className="material-symbols-outlined text-tertiary mb-2">add_call</span>
                <h4 className="text-[12px] font-bold uppercase tracking-[0.08em] text-on-surface mb-1">
                  Enterprise Sales
                </h4>
                <a href="tel:+18005550199" className="text-on-surface hover:text-tertiary transition-colors text-sm mt-2 block">
                  +1 (800) 555-0199
                </a>
              </motion.div>
            </div>
            
          </motion.div>
        </motion.div>
      </main>
      
      <SiteFooter />
    </div>
  );
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
  required,
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[12px] font-bold uppercase tracking-[0.08em] text-on-surface-variant">
        {label}
      </label>
      <input 
        id={id} 
        type={type} 
        required={required} 
        placeholder={placeholder} 
        className="ghost-input rounded-lg p-3 w-full transition-shadow focus:shadow-[0_0_15px_rgba(231,193,133,0.15)]" 
      />
    </div>
  );
}