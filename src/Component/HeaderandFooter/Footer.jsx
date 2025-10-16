import { NavLink } from 'react-router-dom'

// my footer component of project
function Footer() {
  return (
    <footer className="w-full bg-gray-50 text-gray-700 py-10 px-4 mt-12 border-t border-gray-200 flex flex-col items-center gap-4">
       <NavLink to={'/'}>
      <div className='h-[100%] flex items-center'>
        <img src="/logo.png" alt="Shoopy-globe" height={"25px"} width={"50px"} />
      </div>
      </NavLink>
      <div className="max-w-4xl mx-auto">
        
          <section className="flex flex-col items-center gap-4 mb-8">
          <h3 className="text-lg font-bold text-gray-800 tracking-wider">
            Connect With Me
          </h3>
          <ul className="flex gap-8 text-base">
            <li>
              <a
                href="https://www.linkedin.com/in/ashreek-a-r-38499a268/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition duration-200"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ashreekar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 transition duration-200"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://x.com/a_ashreek"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-sky-500 transition duration-200"
              >
                X (Twitter)
              </a>
            </li>
          </ul>
        </section>

        <hr className="border-gray-200 mb-6" />

            <div className="text-center text-sm text-gray-500 space-y-1">
          <p>
            Designed & built by <span className="font-semibold text-gray-700">Ashreek A R</span>
          </p>
          <p className="pt-1">
            Created as part of the{' '}
            <span className="font-medium text-blue-600">
              Internshala Full Stack Developer Program
            </span>
          </p>
          <p className="mt-4 text-xs">
            © {new Date().getFullYear()} Ashreek A R. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer