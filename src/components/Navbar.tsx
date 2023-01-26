
import Image from 'next/image'
import React, { useState } from 'react'
import logo from "../app/images/logo.png"

const Navbar = () => {
  const [showNestedLinks, setShowNestedLinks] = useState("")
  const links = [{
    title: "Product",
    upicon: "fa-solid fa-chevron-up",
    downicon: "fa-solid fa-chevron-down",
    nestedLinks: ["Kula Outreach", "Kula Circle"]
  },
  {
    title: "Our Story",
    upicon: "",
    downicon: "",
    nestedLinks: []
  },
  {
    title: "Resources",
    upicon: "fa-solid fa-chevron-up",
    downicon: "fa-solid fa-chevron-down",
    nestedLinks: ["Blog", "Guides"]
  }]

  return (
    <div className='navbar'>
      <div className="logo-links">
        <Image src={logo} alt="logo" className="logo" />

        <ul>
          {links.map((link, index) => {
            return (
              <li key={index} className="links">

                <div className='link-icon' >
                  <a href="#!" >
                    {link.title}

                    <i className={link.nestedLinks.length ? 'fa-solid fa-chevron-down' : ''} />   </a>
                </div>

                {link.nestedLinks.length ? <div className='nestedLinks'>
                  {link.nestedLinks.map((nestedLink, index) => (
                    <a href="#!" key={index}>{nestedLink}</a>
                  ))}
                </div> : ""}

              </li>
            )
          })}
        </ul>
      </div>

      <a href="#!" className='bookDemo'>Book a demo</a>
    </div>
  )
}

export default Navbar