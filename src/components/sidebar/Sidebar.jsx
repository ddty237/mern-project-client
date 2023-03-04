import "./sidebar.css"

export default function Sidebar() {
  return (
      <div className="sidebar">
          <div className="sidebarItem">
              <span className="sidebarTitle">ABOUT ME</span>
              <img src="https://images.pexels.com/photos/6207875/pexels-photo-6207875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis est pariatur deserunt repellat.
                  Quam, deserunt cum ex distinctio aliquam fuga qui aperiam dolorem expedita? Ea saepe aliquid
                  consequuntur distinctio voluptatum!</p>
          </div>
          <div className="sidebarItem">
              <span className="sidebarTitle">CATEGORIES</span>
              <ul className="sidebarList">
                  <li className="sidebarListItem">Life</li>
                  <li className="sidebarListItem">music</li>
                  <li className="sidebarListItem">sport</li>
                  <li className="sidebarListItem">Litterature</li>
                  <li className="sidebarListItem">Style</li>
                  <li className="sidebarListItem">Tech</li>
              </ul>
          </div>
          <div className="sidebarItem">
              <span className="sidebarTitle">FOLLOW US</span>
              <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-facebook"></i>
                <i className="sidebarIcon fa-brands fa-twitter"></i>
                <i className="sidebarIcon fa-brands fa-pinterest"></i>
                <i className="sidebarIcon fa-brands fa-instagram"></i>
              </div>
          </div>
    </div>
  )
}
