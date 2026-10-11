'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { services } from '@/lib/services';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  service: string;
  location: string;
  budget: string;
  message: string;
}

interface FormErrors {
  [key: string]: string | undefined;
}

const initialState: FormData = {
  fullName: '',
  organization: '',
  email: '',
  phone: '',
  service: '',
  location: '',
  budget: '',
  message: '',
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const prefersReducedMotion = useReducedMotion();

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your work email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
    } else if (!/^[+]?[\d\s()-]{8,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us about your project.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide at least a brief description (10+ characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    try {
      // Integration point: Replace this with your email provider or backend API call.
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
      //
      // Environment variables needed for integration:
      // - EMAIL_PROVIDER_API_KEY (e.g., Resend, SendGrid)
      // - CONTACT_TO_EMAIL (where submissions are sent)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setStatus('success');
      setFormData(initialState);
    } catch {
      setStatus('error');
    }
  };

  const fieldClassName = (name: string) =>
    `w-full border bg-white px-4 py-3 text-sm text-brand-navy placeholder:text-brand-gray/50 transition-colors focus:outline-none focus:border-brand-orange ${
      errors[name] ? 'border-red-400' : 'border-brand-navy/15'
    }`;

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="fullName" className="mb-1.5 block text-sm font-semibold text-brand-navy">
              Full Name <span className="text-brand-orange">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your name"
              className={fieldClassName('fullName')}
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            />
            {errors.fullName && (
              <p id="fullName-error" className="mt-1.5 text-xs text-red-500">{errors.fullName}</p>
            )}
          </div>
          <div>
            <label htmlFor="organization" className="mb-1.5 block text-sm font-semibold text-brand-navy">
              Organization
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              placeholder="Company / Department"
              className={fieldClassName('organization')}
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-brand-navy">
              Work Email <span className="text-brand-orange">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@organization.com"
              className={fieldClassName('email')}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1.5 text-xs text-red-500">{errors.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-brand-navy">
              Phone Number <span className="text-brand-orange">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className={fieldClassName('phone')}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1.5 text-xs text-red-500">{errors.phone}</p>
            )}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-brand-navy">
              Service Required <span className="text-brand-orange">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={fieldClassName('service')}
              aria-invalid={!!errors.service}
              aria-describedby={errors.service ? 'service-error' : undefined}
            >
              <option value="">Select a service…</option>
              {services.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>
            {errors.service && (
              <p id="service-error" className="mt-1.5 text-xs text-red-500">{errors.service}</p>
            )}
          </div>
          <div>
            <label htmlFor="location" className="mb-1.5 block text-sm font-semibold text-brand-navy">
              Project Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="City / District / State"
              className={fieldClassName('location')}
            />
          </div>
        </div>

        <div>
          <label htmlFor="budget" className="mb-1.5 block text-sm font-semibold text-brand-navy">
            Estimated Budget <span className="text-brand-gray font-normal">(optional)</span>
          </label>
          <input
            type="text"
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="e.g., ₹50,000 — ₹2,00,000"
            className={fieldClassName('budget')}
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-brand-navy">
            Message / Project Brief <span className="text-brand-orange">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your advertising, branding, or signage requirement…"
            rows={5}
            className={`${fieldClassName('message')} resize-none`}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1.5 text-xs text-red-500">{errors.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-4 pt-2">
          <motion.button
            type="submit"
            disabled={status === 'submitting'}
            whileHover={prefersReducedMotion || status === 'submitting' ? undefined : { scale: 1.01 }}
            whileTap={prefersReducedMotion || status === 'submitting' ? undefined : { scale: 0.99 }}
            className="inline-flex items-center justify-center gap-2.5 bg-brand-orange px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-orange-dark disabled:opacity-60"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2.5} />
                Sending…
              </>
            ) : (
              'Send Inquiry'
            )}
          </motion.button>
          <p className="text-xs text-brand-gray">
            By submitting this form, you agree to be contacted by 21st Century Advertising Agency regarding your inquiry. We do not share your information with third parties.
          </p>
        </div>
      </form>

      {/* Status Messages */}
      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-6 flex items-start gap-3 border border-green-200 bg-green-50 p-4"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" strokeWidth={2} />
            <div>
              <p className="text-sm font-semibold text-green-800">Thank you for your inquiry.</p>
              <p className="mt-1 text-sm text-green-700">
                Your message has been received. Our team will get back to you within 1-2 business days. For urgent matters, please call us directly.
              </p>
            </div>
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-6 flex items-start gap-3 border border-red-200 bg-red-50 p-4"
          >
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" strokeWidth={2} />
            <div>
              <p className="text-sm font-semibold text-red-800">Something went wrong.</p>
              <p className="mt-1 text-sm text-red-700">
                We could not send your message at this time. Please try again or contact us directly by phone or email.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
