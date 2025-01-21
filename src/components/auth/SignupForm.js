import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import '../../styles/login.css'
import { Link, } from 'react-router-dom';

export default function SignupForm() {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="modal-overlay">
            <div className="login-container">
                <div className="flex justify-center mb-4">
                    <span className="brand-title">PickBazar</span>
                </div>

                <p className="text-gray-600 mb-6">Create a new account</p>

                <div className="space-y-5">
                    {/* Name Field */}
                    <div>
                        <label className="block text-gray-600 mb-2">Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="input-field"
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className="block text-gray-600 mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="customer@demo.com"
                            className="input-field"
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label className="block text-gray-600 mb-2">Password</label>
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

                    {/* Register Button */}
                    <button className="btn btn-primary">Register</button>

                    {/* Or Divider */}
                    <div className="relative divider">
                        <span className="divider-text">Or</span>
                    </div>

                    {/* Already Have an Account */}
                    <p className="text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login" className="nav-link">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
