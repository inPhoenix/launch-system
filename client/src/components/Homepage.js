import React, { Component } from 'react'
import App from '../features/App'
import Header from '../features/Header'
import { Icon, Menu, Sidebar } from 'semantic-ui-react'
import { animateScroll as scroll } from 'react-scroll'

const GITHUB_USER = 'alepoletto'
const GITHUB_LINK = `https://www.github.com/${GITHUB_USER}`

class Homepage extends Component {
  state = {
    items: [],
    visible: false
  }

  showMenu = () => {
    this.setState({
      visible: true
    })
    scroll.scrollToTop({
      smooth: 'easeInOutQuart',
      duration: 700
    })
  }

  hideMenu = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    return (
      <div>
        <Header
          handleMenuClick={this.showMenu}
          visible={this.state.visible}
        />
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            icon="labeled"
            inverted
            onHide={this.hideMenu}
            vertical
            direction="right"
            animation="overlay"
            visible={this.state.visible}
            width="thin"
          >
            <Menu.Item as="a" onClick={this.hideMenu}>
              Hide
            </Menu.Item>
            <Menu.Item
              as="a"
              href={GITHUB_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="github" />
              github
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <App />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default Homepage
