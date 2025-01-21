import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import '../../styles/login.css'

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="modal-overlay">
            <div className="login-container">
                <div className="flex justify-center mb-4">
                    <span className="brand-title">PickBazar</span>
                </div>

                <p className="text-gray-600 mb-6">
                    Login with your email & password
                </p>

                <div className="space-y-5">
                    <div>
                        <label className="block text-gray-600 mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="customer@demo.com"
                            className="input-field"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-gray-600">Password</label>
                            <a href="#" className="text-emerald-600 text-sm hover:underline">
                                Forgot password?
                            </a>
                        </div>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="input-field"
                                placeholder="••••••"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="password-toggle"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    <button className="btn btn-primary">
                        Login
                    </button>

                    <div className="relative divider">
                        <span className="divider-text">Or</span>
                    </div>

                    <button className="btn btn-google">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" />
                        </svg>
                        Login with Google
                    </button>

                    <button className="btn btn-gray">
                        Login with Mobile number
                    </button>

                    <p className="text-gray-600">
                        Don't have any account?{' '}
                        <a href="/signup" className="text-emerald-600 hover:underline">
                            Register
                        </a>
                    </p>
                </div>
            </div>
        </div>

    )
}

