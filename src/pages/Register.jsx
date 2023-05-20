import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { MdCloudDone } from 'react-icons/md';
import useTitle from '../hooks/useTitle';

const Register = () => {
  useTitle('Register');
  const { user, setUser, createUserWithEmail, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [profileUrl, setProfileUrl] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [regError, setRegError] = useState('');

  const handleName = (e) => {
    const nameInput = e.target.value;
    setName(nameInput);
    console.log(nameInput);
  };

  const handleProfileUrl = (e) => {
    const profileUrlInput = e.target.value;
    setProfileUrl(profileUrlInput);
    console.log(profileUrlInput);
  };

  const handleEmail = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
    console.log(email);
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        emailInput
      )
    ) {
      setRegError('Please provide a valid email');
    } else {
      setRegError('');
    }
  };

  const handlePassword = (e) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);
    if (passwordInput.length < 6) {
      setRegError('Password must be at least 6 digits');
    } else {
      setRegError('');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmail(email, password)
      .then((result) => {
        const registeredUser = result.user;
        updateUserProfile(name, profileUrl)
          .then(() => console.log(registeredUser))
          .catch((error) => {
            setRegError(error.message);
          });
        setUser(registeredUser);
        setRegError('');
        navigate('/');
        console.log(registeredUser);
      })
      .catch((error) => {
        setRegError('Registration failed. Please try agin later!!');
        console.log(error.message);
      });
  };
  return (
    <div className="bg-gray-100">
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
                Join millions of businesses
              </h1>
              <p className="font-light text-gray-600 text-lg ">
                Disney Palace is trusted by ambitious startups and enterprises
                of every size.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MdCloudDone className="text-primary h-8 w-8" />
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-2xl">
                Empowering ECommerce Businesses Around The World To Succeed
              </h1>
              <p className="font-light text-gray-600 text-lg ">
                90,000+ stores have been established
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MdCloudDone className="text-primary h-8 w-8" />
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-2xl">
                Grow your Business at Scale with Disney Palace!
              </h1>
              <p className="font-light text-gray-600 text-lg ">
                $100 Millions+ Of revenue has been generated
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
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleRegister}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={handleName}
                    className="theme-input"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="profileUrl"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your profile image url
                  </label>
                  <input
                    type="text"
                    name="profileUrl"
                    id="profileUrl"
                    value={profileUrl}
                    onChange={handleProfileUrl}
                    className="theme-input"
                    placeholder="Enter your profile image url"
                    required
                  />
                </div>
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
                  <Link
                    href="#"
                    className="text-sm font-medium text-gray-600 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button type="submit" className="w-full theme-btn">
                  Register
                </button>
                <div>
                  {regError && (
                    <span className="block text-center text-sm font-medium text-rose-700 animate-pulse">
                      {regError}
                    </span>
                  )}
                </div>

                <p className="text-sm font-light text-gray-500 ">
                  Already have an account? &nbsp;
                  <Link
                    to="/login"
                    className="font-medium text-gray-600 hover:underline"
                  >
                    Sign in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
