import { useNavigate } from "react-router-dom"

const NavigationBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-wrapper">
        <button onClick={() => navigate('/main/commitment')} className="navigation-button">
          <div className="svg-wrapper">
            <svg className="button-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AutoStoriesIcon" height={24}>
              <path d="m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z" fill="rgb(255, 255, 255)"></path>
            </svg>
            <div className="button-text">Commitment</div>
            <span className="click-effect"></span>
          </div>
        </button>
        <button onClick={() => navigate('/main/commitment')} className="navigation-button">
          <div className="svg-wrapper">
            <svg className="button-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AutoStoriesIcon" height={24}>
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" fill="rgb(255, 255, 255)"></path>
            </svg>
            <div className="button-text">Commitment</div>
            <span className="click-effect"></span>
          </div>
        </button>
        <button onClick={() => navigate('/main/commitment')} className="navigation-button">
          <div className="svg-wrapper">
            <svg className="button-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AutoStoriesIcon" height={24}>
              <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" fill="rgb(255, 255, 255)"></path>
            </svg>
            <div className="button-text">Commitment</div>
            <span className="click-effect"></span>
          </div>
        </button>
        <button onClick={() => navigate('/main/commitment')} className="navigation-button">
          <div className="svg-wrapper">
            <svg className="button-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AutoStoriesIcon" height={24}>
              <circle cx="9" cy="9" r="4" fill="rgb(255, 255, 255)"></circle>
              <path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z" fill="rgb(255, 255, 255)"></path>
            </svg>
            <div className="button-text">Commitment</div>
            <span className="click-effect"></span>
          </div>
        </button>
        <button onClick={() => navigate('/main/commitment')} className="navigation-button">
          <div className="svg-wrapper">
            <svg className="button-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AutoStoriesIcon" height={24}>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="rgb(255, 255, 255)"></path>
            </svg>
            <div className="button-text">Commitment</div>
            <span className="click-effect"></span>
          </div>
        </button>
        <button onClick={() => navigate('/main/commitment')} className="navigation-button">
          <div className="svg-wrapper">
            <svg className="button-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AutoStoriesIcon" height={24}>
              <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="rgb(255, 255, 255)"></path>
            </svg>
            <div className="button-text">Commitment</div>
            <span className="click-effect"></span>
          </div>
        </button>
        <button onClick={() => navigate('/main/commitment')} className="navigation-button">
          <div className="svg-wrapper">
            <svg className="button-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AutoStoriesIcon" height={24}>
              <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" fill="rgb(255, 255, 255)"></path>
            </svg>
            <div className="button-text">Commitment</div>
            <span className="click-effect"></span>
          </div>
        </button>
      </div>
    </nav>
  )
}
export default NavigationBar