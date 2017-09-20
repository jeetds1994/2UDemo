import React from 'react'
import { Dropdown, Icon, Menu, Segment } from 'semantic-ui-react'

const NavBar = () => {
  return (
    <div>
      <h1>This site is not real and is only a demo.</h1>
    <Menu attached='top'>
      <Menu.Menu position='left'>
        <img id="logo" src="https://ddqt2avvbpaxu.cloudfront.net/cdn/v1/corp-gen/logo-2.png" alt="logo"/>
      </Menu.Menu>

      <Menu.Menu position='right'>
        <Dropdown item text="About" simple>
          <Dropdown.Menu>
            <Dropdown.Item>No Back Row</Dropdown.Item>
            <Dropdown.Item>Press</Dropdown.Item>
            <Dropdown.Item>Board of Directors</Dropdown.Item>
            <Dropdown.Item>2U Leadership</Dropdown.Item>
            <Dropdown.Item>Contact</Dropdown.Item>

          </Dropdown.Menu>
        </Dropdown>

          <div className='ui right aligned category search item'>


              <Menu.Item
                name='Partners'

              >
                Partners
              </Menu.Item>

              <Menu.Item
                name='GetSmarter'

              >
                GetSmarter
              </Menu.Item>

              <Menu.Item
                name='Investor_Relations'

              >
                Investor Relations
              </Menu.Item>

              <Menu.Item
                name='Blog'

              >
                Blog
              </Menu.Item>

              <Menu.Item
                name='Careers'

              >
                Careers
              </Menu.Item>
          </div>
        </Menu.Menu>
      </Menu>
    </div>






  )
}

export default NavBar
