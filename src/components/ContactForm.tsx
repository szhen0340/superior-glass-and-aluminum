import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import HCaptcha from '@hcaptcha/react-hcaptcha'

interface ContactFormProps {
  className?: string
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm({ className = '' }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)

  const handleVerificationSuccess = (token: string) => {
    setCaptchaToken(token)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    if (!captchaToken) {
      setStatus('error')
      setErrorMessage('Please complete the captcha verification.')
      return
    }

    const formData = new FormData(e.currentTarget)
    const jsonData = {
      access_key: '4b63ce26-8b65-44ca-9ff0-5dfa98b4c04e',
      subject: 'New Lead from Superior Glass Website',
      from_name: 'Superior Glass Website',
      'h-captcha-response': captchaToken,
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      project_type: formData.get('project_type'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(jsonData),
      })

      const data = await response.json()

      if (data.success) {
        setStatus('success')
        setCaptchaToken(null)
        ;(e.target as HTMLFormElement).reset()
      } else {
        setStatus('error')
        setErrorMessage(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    }
  }

  const resetForm = () => {
    setStatus('idle')
    setErrorMessage('')
    setCaptchaToken(null)
  }

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            style={{
              textAlign: 'center',
              padding: 'var(--space-3xl)',
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, var(--color-superior-green) 0%, var(--color-superior-green-light) 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--space-xl)',
              }}
            >
              <CheckCircle size={40} color="white" />
            </motion.div>
            <h3 style={{ marginBottom: 'var(--space-md)' }}>Thank You!</h3>
            <p style={{ marginBottom: 'var(--space-xl)', maxWidth: '400px', margin: '0 auto var(--space-xl)' }}>
              We've received your message and will get back to you within 24 hours. A member of our team will be in
              touch shortly to discuss your project.
            </p>
            <button
              onClick={resetForm}
              className="btn btn-secondary"
              style={{ display: 'inline-flex' }}
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}
          >
            {/* Name and Email Row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 'var(--space-lg)',
              }}
            >
              <div className="form-group" style={{ margin: 0 }}>
                <label htmlFor="name" className="form-label">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="form-input"
                  placeholder="John Smith"
                  disabled={status === 'submitting'}
                />
              </div>
              <div className="form-group" style={{ margin: 0 }}>
                <label htmlFor="email" className="form-label">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="form-input"
                  placeholder="john@company.com"
                  disabled={status === 'submitting'}
                />
              </div>
            </div>

            {/* Phone and Project Type Row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 'var(--space-lg)',
              }}
            >
              <div className="form-group" style={{ margin: 0 }}>
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                  placeholder="(312) 555-1234"
                  disabled={status === 'submitting'}
                />
              </div>
              <div className="form-group" style={{ margin: 0 }}>
                <label htmlFor="project_type" className="form-label">
                  Project Type *
                </label>
                <select
                  id="project_type"
                  name="project_type"
                  required
                  className="form-select"
                  disabled={status === 'submitting'}
                >
                  <option value="">Select project type...</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Residential">Residential</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="form-group" style={{ margin: 0 }}>
              <label htmlFor="message" className="form-label">
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="form-textarea"
                placeholder="Tell us about your project: type of work needed, approximate dimensions, timeline, etc."
                disabled={status === 'submitting'}
              />
            </div>

            {/* Error Message */}
            <AnimatePresence>
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-sm)',
                    padding: 'var(--space-md)',
                    background: 'rgba(198, 40, 40, 0.1)',
                    border: '1px solid var(--color-accent-red)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--color-accent-red-light)',
                  }}
                >
                  <AlertCircle size={20} />
                  <span>{errorMessage}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* hCaptcha */}
            <div style={{ display: 'flex', justifyContent: 'center', margin: '0' }}>
              <HCaptcha
                sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                onVerify={(token) => handleVerificationSuccess(token)}
                onExpire={() => setCaptchaToken(null)}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === 'submitting'}
              style={{
                width: '100%',
                opacity: status === 'submitting' ? 0.7 : 1,
                cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
              }}
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 size={20} style={{ animation: 'spin 1s linear infinite' }} />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Get Your Free Quote
                </>
              )}
            </button>
            <style>{`
              @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
            `}</style>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-dark-dim)', textAlign: 'center', margin: 0 }}>
              We typically respond within 24 hours. Your information is secure and never shared.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
