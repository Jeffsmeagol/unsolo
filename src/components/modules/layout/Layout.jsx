// import './layout.css';
import { Outlet } from 'react-router-dom'
import Chatbot from '../bot/Chatbot'

const Layout = () => {
  return (
    <section className="admin-dashboard-layout">
        {/* <div className="children"> */}
          <Outlet />
      {/* </div> */}
      {/* <Chatbot /> */}
    </section>
  )
}

export default Layout