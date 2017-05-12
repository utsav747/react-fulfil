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
  render() {
    return (
      <div>
        // <IconView />
        <DetailView />
        // <Button />
      </div>
    )
  }
}

class Button extends React.Component {
  render() {
    return(
      <div className = "button">
      </div>
    )
  }
}

class IconView extends React.Component {
  render() {
    var icons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    var footerIcons = ["footericon1", "footericon2", "footericon3"];
    return (
      <div>
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
      <div>
        <ul>
          {this.props.items.map(function(icon, index){
            return <li key = {index}>icon</li>;
          })}
        </ul>
      </div>
    )
  }
}

class Profile extends React.Component {
  render() {
    return(
      <div className = "picContainer">
        {this.props.photo}
      </div>
    )
  }
}

class Footer extends React.Component{
  render() {
    return(
      <div>
        {this.props.items.map(function(footericon, index){
          <li key = {index}>footericon</li>
        })}
      </div>
    )
  }
}

class DetailView extends React.Component {
  render() {
    var menus = ["Contacts", "Product", "Sales", "Purchase", "Shipping", "Inventory & Stock", "Production", "Financial", "Settings", "Administration"];
    var footerOptions = ["footerOption1", "footerOption2", "footerOption3"];
    return(
      <div>
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
      <div>
        <li>Name</li>
        <li>Email</li>
      </div>
    )
  }
}

class Menu extends React.Component{
  render() {
    return(
      <div>
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
      <div>
        {this.props.items.map(function(option){
          <li key = {option}>option</li>
        })}
      </div>
    )
  }
}

class SubMenu extends React.Component{
  render() {
    var submenuOptions = ["Product templates", "Products", "Categories", "Attributes", "Tree Nodes", "Gift Card", "Bill of Materials(BOM)", "Price Lists", "Product suppliers", "Attribute sets", "Reports", "Import product locations"];
    return(
      <div>
        <h3 className = "SubMenuHeading">{this.props.SuperName}</h3>
        <ul>
          {this.props.submenuOptions.map(function(item){
            <li key = {item}>item</li>
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
