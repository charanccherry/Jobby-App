import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {ImHome} from 'react-icons/im'
import {FiLogOut} from 'react-icons/fi'

import './index.css'

const websiteLogo = 'https://assets.ccbp.in/frontend/react-js/logo-img.png'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-cont">
      <ul className="header-cont">
        <li>
          <Link className="link" to="/">
            <img className="logo" src={websiteLogo} alt="website logo" />
          </Link>
        </li>
        <li className="home-jobs-cont">
          <Link className="link" to="/">
            <ImHome className="home-icon" />
            <h1 className="nav-text">Home</h1>
          </Link>
          <Link className="link" to="/jobs">
            <h1 className="nav-text">All Jobs</h1>

            <button className="home-jobs-btn" type="button">
              Jobs
            </button>
          </Link>
        </li>
        <li>
          <FiLogOut className="home-icon" onClick={onClickLogout} />
          <button type="button" className="logout-btn" onClick={onClickLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(Header)
