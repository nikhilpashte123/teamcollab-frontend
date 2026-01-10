// Login.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// SVG Icons
const MailIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const LockIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
);

const GoogleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
);

const EyeIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
);

const EyeOffIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
    </svg>
);

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log("Login:", { email, password, rememberMe });
        // After successful login, navigate to dashboard
        navigate("/");
    };

    const handleGoogleLogin = () => {
        // Add Google OAuth logic here
        console.log("Google login clicked");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo & Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg mb-4">
                        <span className="text-white font-bold text-2xl">TC</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                        Welcome Back
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400">
                        Sign in to continue to TeamCollab
                    </p>
                </div>

                {/* Login Card */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8">
                    {/* Google Login Button */}
                    <button
                        onClick={handleGoogleLogin}
                        className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white dark:bg-slate-700 border-2 border-slate-300 dark:border-slate-600 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-600 transition-all duration-200 font-medium text-slate-700 dark:text-slate-200 mb-6"
                    >
                        <GoogleIcon />
                        <span>Continue with Google</span>
                    </button>

                    {/* Divider */}
                    <div className="relative flex items-center my-6">
                        <div className="flex-grow border-t border-slate-300 dark:border-slate-600"></div>
                        <span className="flex-shrink mx-4 text-slate-500 dark:text-slate-400 text-sm">
                            or continue with email
                        </span>
                        <div className="flex-grow border-t border-slate-300 dark:border-slate-600"></div>
                    </div>

                    {/* Login Form */}
                    <div className="space-y-4">
                        {/* Email Input */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">
                                    <MailIcon />
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">
                                    <LockIcon />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    className="w-full pl-11 pr-11 py-3 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                                >
                                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-blue-600 focus:ring-2 focus:ring-blue-500"
                                />
                                <span className="text-sm text-slate-600 dark:text-slate-400">
                                    Remember me
                                </span>
                            </label>
                            <Link
                                to="/forgot-password"
                                className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                            >
                                Forgot password?
                            </Link>
                        </div>

                        {/* Submit Button */}
                        <button
                            onClick={handleSubmit}
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl hover:shadow-lg transition-all duration-200 font-semibold text-base"
                        >
                            Sign In
                        </button>
                    </div>

                    {/* Sign Up Link */}
                    <p className="text-center text-sm text-slate-600 dark:text-slate-400 mt-6">
                        Don't have an account?{" "}
                        <Link
                            to="/register"
                            className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>

                {/* Footer */}
                <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-6">
                    By signing in, you agree to our{" "}
                    <a href="#" className="hover:underline">Terms of Service</a>
                    {" "}and{" "}
                    <a href="#" className="hover:underline">Privacy Policy</a>
                </p>
            </div>
        </div>
    );
}



