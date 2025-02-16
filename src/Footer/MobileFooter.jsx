
function MobileFooter() {
  function scrollTop() {
    window.scrollTo(0, 0);
  }

  return (     
      <footer className="mobile-footer">
        <div>
          <div className="mobile-footer-top">
            <div onClick={scrollTop} className='footer-left-container'>
              <svg className="mobile-svg" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>
              <h2 className='footer-left'>Back To Top</h2>
            </div>
            <div>
              <a className="linkedin mobile-linkedin" target="_blank" href="https://www.linkedin.com/in/ethan-snyder30/">
                <h2 className='footer-right'>LinkedIn</h2>
              </a>
            </div>
          </div>
          <h2 className='footer-middle mobile-footer-middle'>Copyright © 2025. All Rights Reserved.</h2>
        </div>
      </footer>
  )
}
export default MobileFooter;