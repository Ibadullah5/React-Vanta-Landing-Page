import {
  vantaLogo, navbarCompany, navbarCustomers, navbarPartners, navbarProducts, navbarResources, navbarSolutions
} from '../../assets'
import NavBarLink from '../../component/NavbarLink/NavbarLink'
import './Navbar.css'

const Navbar = () => {

  return (
    <div className="navbar">

      <div className="navbar__leftside">
        <img src={vantaLogo}
          alt="workday-logo" />
      </div>

      <div className='navbar__middleside'>
        <ul className='navbar__middleside-list'>
          <li value={1}
          >
            Product
            <div className='li-overlay'>
              <div className='from-left'>
                <div className='overlay-columns'>
                  <ul>
                    <li className='li-heading'>
                      Product Review
                    </li>
                    <li>
                      Vanta Plaatforms
                    </li>
                    <li>
                      Trust Reports
                    </li>
                    <li>
                      Questionare Automation
                    </li>
                    <li>
                      Risk Managment
                    </li>
                    <li>
                      Access Reviews
                    </li>
                    <li>
                      Workspaces
                    </li>
                    <li>
                      Integrations
                    </li>
                  </ul>
                </div>

                <div className='overlay-columns'>
                  <ul>
                    <li className='li-heading'>
                      Product Review
                    </li>
                    <li>
                      SOC 2
                    </li>
                    <li>
                      ISO 27001
                    </li>
                    <li>
                      GDPR
                    </li>
                    <li>
                      HIPPA
                    </li>
                    <li>
                      USDP
                    </li>
                    <li>
                      Custom FrameWorks
                    </li>
                    <li>
                      <p>Additional Frameworks</p>
                    </li>
                  </ul>
                </div>

                <div className='overlay-columns'>
                  <ul>
                    <img src={navbarProducts}
                      alt='product'
                    />
                    <li className='li-bigheading'>
                      Product Demo
                    </li>
                    <li>
                      Check out Vanta In Action
                    </li>
                    <li>
                      <NavBarLink text='Watch Now' />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li value={2}
          >
            Solutions
            <div className='li-overlay'>
              <div className='from-left'>
                <div className='overlay-columns'>
                  <ul>
                    <li className='li-heading'>
                      By stage/size
                    </li>
                    <li>
                      Startup
                    </li>
                    <li>
                      Hyper Growth
                    </li>
                    <li>
                      Enterprise
                    </li>
                  </ul>
                </div>

                <div className='overlay-columns'>
                  <ul>
                    <li className='li-heading'>
                      By Objective
                    </li>
                    <li>
                      Security & Compliance Foundation
                    </li>
                    <li>
                      Enhanced Security & Risk Managment
                    </li>
                    <li>
                      Privacy Foundations
                    </li>
                    <li>
                      Multinational Operations
                    </li>
                    <li>
                      Continuous Trust
                    </li>
                  </ul>
                </div>

                <div className='overlay-columns'>
                  <ul>
                    <img src={navbarSolutions}
                      alt='solutions'
                    />
                    <li className='li-bigheading'>
                      Revolutionize Risk:<br />
                      How to manage risk with Vanta
                    </li>
                    <li>
                      <NavBarLink text='Download the eBook' />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li value={3}
          >
            Customers
            <div className='li-overlay'>
              <div className='from-left'>
                <div className='overlay-columns'>
                  <ul>
                    <li className='li-heading'>
                      Meet our Customers
                    </li>
                    <li>
                      Customers Stories
                    </li>
                    <li>
                      Customers Snapshots
                    </li>
                  </ul>
                  <li className='li-heading'>
                    By Product
                  </li>
                  <li>
                    SOC 2
                  </li>
                  <li>
                    ISO 27001
                  </li>
                  <li>
                    HIPPA
                  </li>
                  <li>
                    GDPR
                  </li>
                </div>

                <div className='overlay-columns'>
                  <ul>
                    <img src={navbarCustomers}
                      alt='customers'
                    />
                    <li className='li-bigheading'>
                      BreachRx shortens sales<br />
                      cycles by achieving SOC 2<br />
                      compliance in 5 days<br />
                    </li>
                    <li>
                      <NavBarLink text='Read the case study' />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li value={4}
          >
            Partners
            <div className='li-overlay'>
              <div className='from-left'>
                <div className='overlay-columns'>
                  <ul>
                    <li>
                      Become a Partner
                    </li>
                    <li>
                      Vanta Partner Network
                    </li>
                    <li>
                      Find a Partner
                    </li>
                  </ul>
                </div>

                <div className='overlay-columns'>
                  <ul>
                    <img src={navbarPartners}
                      alt='partners'
                    />
                    <li className='li-bigheading'>
                      Managed Service Providers
                    </li>
                    <li>
                      Our Platfrom. Your Porfolio. <br />
                      Compliance Without Compromise
                    </li>
                    <li>
                      <NavBarLink text='Learn More' />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li value={5}
          >
            Resources
            <div className='li-overlay'>
              <div className='from-left'>
                <div className='overlay-columns'>
                  <ul>
                    <li className='li-heading'>
                      Resources
                    </li>
                    <li>
                      All Resources
                    </li>
                    <li>
                      Blog
                    </li>
                    <li>
                      Guides
                    </li>
                    <li>
                      Glossary
                    </li>
                    <li>
                      Events
                    </li>
                  </ul>
                </div>

                <div className='overlay-columns'>
                  <ul>
                    <li className='li-heading'>
                      Customer Education
                    </li>
                    <li>
                      Vanta Learning
                    </li>
                    <li>
                      Community
                    </li>
                  </ul>
                </div>

                <div className='overlay-columns'>
                  <ul>
                    <img src={navbarResources}
                      alt='solutions'
                    />
                    <li className='li-bigheading'>
                      5 must have in an Automated<br />
                      Security Platform
                    </li>
                    <li>
                      <NavBarLink text='Download the eBook' />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li value={6}
          >
            Company
            <div className='li-overlay'>
              <div className='from-left'>
                <div className='overlay-columns'>
                  <ul>
                    <li className='li-heading'>
                      About
                    </li>
                    <li>
                      Career
                    </li>
                    <li>
                      Security
                    </li>
                    <li>
                      Press
                    </li>
                  </ul>
                </div>

                <div className='overlay-columns'>
                  <ul>
                    <img src={navbarCompany}
                      alt='solutions'
                    />
                    <li className='li-bigheading'>
                      Vanta Cross 500 raving<br />
                      review on G2
                    </li>
                    <li>
                      <NavBarLink text='Read the blog' />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="navbar__rightside">
        <p>Login</p>
        <button>
          Request a Demo
        </button>
      </div>

    </div>
  )
}
{/* <img className='navbar__rightside-lang' src={language} alt="language" />
<img className='navbar__rightside-user' src={user} alt="user" />
<img className='navbar__rightside-search' src={search} alt="search" /> */}
{/* <img
        className='navbar__rightside-hamburger'
        onClick={handleToggle}
        src={hamburger}
        alt="hamburger" />
      {toggle && (
        <div className='navbar__mobile'>
          <img
            className='navbar__rightside-hamburger'
            onClick={handleToggle}
            src={cross}
            alt="cross" />
          <ul className='navbar__mobile-mainlist'>
            <li>
              <p>Products</p>
              <img src={arrowRight} alt='arrow' />
            </li>
            <li>
              <p>Industries</p>
              <img src={arrowRight} alt='arrow' />
            </li>
            <li>
              <p>Customers</p>
              <img src={arrowRight} alt='arrow' />
            </li>
            <li>
              <p>Learn</p>
              <img src={arrowRight} alt='arrow' />
            </li>
            <li>
              <p>Company</p>
              <img src={arrowRight} alt='arrow' />
            </li>
          </ul>

          <ul className='navbar__mobile-secondarylist'>
            <li>
              <div>
                <img className='navbar__rightside-lang' src={language} alt="language" />
                <p>United States(English)</p>
              </div>
              <img src={arrowRight} alt='arrow' />
            </li>
            <li>
              <div>
                <img className='navbar__rightside-user' src={user} alt="user" />
                <p>Sign In</p>
              </div>
              <img src={arrowRight} alt='arrow' />
            </li>
          </ul>
          {/* <button>
            Contact Sales
          </button> 
    </div>
  )
 /}
      </div >*/}


export default Navbar