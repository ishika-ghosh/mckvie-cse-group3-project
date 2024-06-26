export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "rgb(23, 28, 42)" }}
      className="bg-rgb(23, 28, 42) text-white body-font"
    >
      <div className="container px-5 pt-10 mx-auto flex flex-wrap flex-col justify-center items-center lg:items-start md:items-center md:flex-row md:flex-nowrap md:gap-0.5">
        <div className="w-64 flex-shrink-0 mx-auto text-center md:mx-0 md:text-left">
          <h3 className="text-center">SOCIAL LINKS</h3>
          <div className="flex flex-wrap py-3 justify-center">
            {/* facebook icon */}
            <a
              href="/"
              className="transition-colors text-white rounded-lg hover:text-blue-600 hover:bg-gray-100 focus:text-blue-600 focus:bg-gray-100 focus:outline-none"
            >
              {/* <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin=="round"
                strokeWidth="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></path>
              </svg>
            </a>
            {/* twitter icon - older bird icon */}
            <a
              href="/"
              className="ml-4 rounded-lg transition-colors text-white hover:text-blue-400 hover:bg-gray-100 focus:text-blue-400 focus:bg-gray-100 focus:outline-none"
            >
              {/* <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin=="round"
                strokeWidth="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
              </svg>
            </a>

            {/* instagram icon */}
            {/* boxicons.com */}
            <a
              href="/"
              className="ml-4 rounded-lg bg-gradient-to-r transition-colors text-white hover:from-yellow-500 hover:to-pink-500 focus:from-yellow-500 focus:to-pink-500 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                <circle cx="16.806" cy="7.207" r="1.078"></circle>
                <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
              </svg>
            </a>

            {/* linkedin icon */}
            {/* boxicons.com */}
            <a
              href="/"
              className="ml-4 rounded-lg transition-colors text-white hover:bg-gray-100 hover:text-blue-800 focus:bg-gray-100 focus:text-blue-800 focus:outline-none"
            >
              {/* <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin=="round"
                strokeWidth="0"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg> */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className=" flex flex-wrap md:pl-20 mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="w-full px-4">
            <h2 className="title-font font-bold text-white tracking-widest text-sm mb-3">
              SERVICES
            </h2>
            <ul className="list-none">
              <li>
                <a
                  href="/services"
                  className="text-white outline-none hover:underline focus:underline"
                >
                  Counterfeit Detection
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-white outline-none hover:underline focus:underline"
                >
                  Warranty Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <h3 className="font-bold text-center">ADDRESS</h3>
          <address className="flex flex-col py-3 items-center">
            <p>Triumph Terrace, Suite 202</p>
            <p>Elevate Avenue</p>
            <p>Inspira City, Motivationland</p>
            <p> PIN 12345</p>
          </address>
        </div>
      </div>
    </footer>
  );
}
