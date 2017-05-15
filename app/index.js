var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

class App extends React.Component {
  render() {
    return (
        <div>
          <Sidebar />
        </div>
    )
  }
}

class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      isExpanded: false
    };

  this.handleExpansion = this.handleExpansion.bind(this);

  }

  handleExpansion(prevState) {
    this.setState(function () {
      return {isExpanded: !prevState.isExpanded}
    })
  }
  render() {


    return (
      <div className = "sidebar">
        <IconView />
        {this.state.isExpanded ? <DetailView /> : null}
        <Button />
        <SubMenu />
      </div>
    )
 }
}

class Button extends React.Component {
  render() {
    return(
      <div
        type="button"

        className = "button">
        <button
          onClick={console.log("utsav")}>
          <div
            className = "buttonitems">
            <p className = "rotate">Expand</p>
            <p>&#x3009;</p>
            <p className = "rotate">Collapse</p>
            <p>&#x3008;</p>
          </div>
        </button>
      </div>
    )
  }
}

class IconView extends React.Component {
  render() {
    var icons = ["./svg/001-user-silhouette.svg", "../svg/002-integrated-circuit.svg", "../svg/003-dollar-symbol.svg", "../svg/004-shopping-cart.svg", "../svg/005-truck.svg", "../svg/006-restaurant.svg", "../svg/007-target-of-concentric-circles.svg", "../svg/008-bank-symbol.svg", "../svg/009-settings-work-tool.svg", "../svg/010-old-fashion-briefcase.svg"];
    var footerIcons = ["../svg/011-search.svg", "../svg/012-question.svg", "../svg/013-window-of-four-rounded-squares.svg"];
    return (
      <div
        className = "iconview">
        <Profile photo = "photo-url-here" />
        <Icons items = {icons}/>
        <Footer items = {footerIcons}/>
      </div>
    )
  }
}

class Icons extends React.Component {
  render() {
    return (
      <div className = "icons">
        <ul>
          {this.props.items.map(function(icon, index){
            return <li key = {index}><img src ={icon} /></li>;
          })}
        </ul>
      </div>
    )
  }
}

class Profile extends React.Component {
  render() {
    return(
      <div className = "topphoto">
        <div className = "picbox">
          <img src = "../svg/photo.jpg" />
        </div>
      </div>

    )
  }
}

class Footer extends React.Component{
  render() {
    return(
      <div className = "footer">
        {this.props.items.map(function(footericon, index){
          return <li key = {index}><img src ={footericon} /></li>
        })}
      </div>
    )
  }
}

class DetailView extends React.Component {
  render() {
    var menus = ["Contacts", "Product", "Sales", "Purchase", "Shipping", "Inventory & Stock", "Production", "Financial", "Settings", "Administration"];
    var footerOptions = ["Search", "Help & Support", "Change Application"];
    return(
      <div className = "detailview">
        <ProfileDetails />
        <Menu items = {menus}/>
        <FooterOptions items = {footerOptions} />
      </div>
    )
  }
}

class ProfileDetails extends React.Component{
  render() {
    return(
      <div className = "topdetails">
        <div className = "profiledetails">
          <li>J Doe</li>
          <li>jdoe@thisismyemailid.com</li>
        </div>
      </div>
    )
  }
}

class Menu extends React.Component{
  render() {
    return(
      <div className = "menu">
        <ul>
          {this.props.items.map(function(item){
            return <li key = {item}>{item}</li>;
          })}
        </ul>
      </div>

    )
  }
}

class FooterOptions extends React.Component{
  render() {
    return(
      <div className = "footeroptions">
        {this.props.items.map(function(option){
          return <li key = {option}>{option}</li>
        })}
      </div>
    )
  }
}

class SubMenu extends React.Component{
  render() {
    var submenuOptions = ["Product templates", "Products", "Categories", "Attributes", "Tree Nodes", "Gift Card", "Bill of Materials(BOM)", "Price Lists", "Product suppliers", "Attribute sets", "Reports", "Import product locations"];
    return(
      <div className = "submenu">
        <h3 className = "submenuheading">Product</h3>
        <ul>
          {submenuOptions.map(function(item){
            return <li key = {item}>{item}</ li>
          })}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
