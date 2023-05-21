import { AuthContext } from '../providers/AuthProvider';
import {
  FaGithub,
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import logo from '../assets/logo.png';
import { MdCloudDone } from 'react-icons/md';
import useTitle from '../hooks/useTitle';

const Login = () => {
  useTitle('Login');
  const { user, setUser, logInWithEmail, loginWithGoogle, loginWithGithub } =
    useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname;

  const handleEmail = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
    console.log(email);
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        emailInput
      )
    ) {
      setLoginError('Please provide a valid email');
    } else {
      setLoginError('');
    }
  };

  const handlePassword = (e) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);
    if (passwordInput.length < 6) {
      setLoginError('Password must be at least 6 digits');
    } else {
      setLoginError('');
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const emailLoginPromise = logInWithEmail(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        setLoginError('');
        console.log(loggedUser);
        navigate(from || '/', { replace: true });
      })
      .catch((error) => {
        setLoginError('Invalid Username or Password');
        console.log(error.message);
      });
    toast.promise(emailLoginPromise, {
      loading: 'Logging...',
      success: () => `Successfully saved`,
      error: (err) => `This just happened: ${err.toString()}`,
    });
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    loginWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        setLoginError('');
        navigate(from || '/', { replace: true });
      })
      .catch((error) => {
        setLoginError(error.message);
        console.log(error.message);
      });
  };

  return (
    <div className="bg-gray-50">
      <section className="container mx-auto grid grid-cols-2 gap-8  py-10 ">
        <div className="space-y-8">
          <div className="flex items-end">
            <img src={logo} alt="disney palace logo" className="h-36 w-36" />
            <h1 className="font-extrabold text-4xl py-3">Palace</h1>
          </div>
          <div className="flex items-start gap-3">
            <MdCloudDone className="text-primary h-8 w-8" />
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-2xl">
                Sell to every buyer, everywhere
              </h1>
              <p className="font-light text-gray-600 text-lg ">
                Sell online, in person, and around the world with the marketing
                tools, social integrations, and sales channels
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MdCloudDone className="text-primary h-8 w-8" />
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-2xl">
                Streamline your back office
              </h1>
              <p className="font-light text-gray-600 text-lg ">
                Get your products where they need to be with integrated
                inventory management, streamlined returns, and a dedicated
                shipping and fulfillment network.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-6 py-8 lg:py-0">
          <div className="w-full bg-white rounded-lg shadow md:mt-0  xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleEmail}
                    className="theme-input"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={handlePassword}
                    placeholder="••••••••"
                    className="theme-input"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-600 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <button type="submit" className="w-full theme-btn">
                  Sign in
                </button>
                <div>
                  {loginError && (
                    <span className="block text-center text-sm font-medium text-rose-700 animate-pulse">
                      {loginError}
                    </span>
                  )}
                </div>

                <p className="text-sm font-light text-gray-500 ">
                  Don’t have an account yet? &nbsp;
                  <a
                    href="/register"
                    className="font-medium text-gray-600 hover:underline"
                  >
                    Sign up
                  </a>
                </p>

                {/* ------------------divider--------------------- */}
                <div className="flex items-center">
                  <hr className="border border-gray-200 w-full" />
                  <span className="px-2">OR</span>
                  <hr className="border border-gray-200 w w-full" />
                </div>
                {/* -------------divider ends------------------------------- */}

                <div className="flex justify-between gap-5">
                  <button
                    className="mb-2 w-full flex items-center justify-center px-4 py-2 bg-blue-500 rounded-lg text-white"
                    onClick={handleGoogleLogin}
                  >
                    <FaGoogle /> &nbsp; <span>Login with Google</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
