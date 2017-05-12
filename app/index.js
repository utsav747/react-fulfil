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

// class Button extends React.Component {
//   render() {
//     return(
//       <div className = "button">
//       </div>
//     )
//   }
// }

// class IconView extends React.Component {
//   render() {
//     return (
//       <div>
//         <Profile photo = "photo-url-here" />
//         <Icons />
//         <Footer />
//       </div>
//     )
//   }
// }

// class Icons extends React.Component {
//   render() {
//     var icons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     return (
//       <div>
//         <ul>
//           {this.props.icons.map(function(icon){
//             <li>icon</li>
//           })}
//         </ul>
//       </div>
//     )
//   }
// }

// class Profile extends React.Component {
//   render() {
//     var profilepic =
//     return(
//       <div className = "picContainer">
//         {this.props.photo}
//       </div>
//     )
//   }
// }

// class Footer extends React.Component{
//   render() {
//     var footerIcons = [footericon1, footericon2, footericon3];
//     return(
//       <div>
//         {this.props.footerIcons.map(function(icon){
//           <li>icon</li>
//         })}
//       </div>
//     )
//   }
// }

class DetailView extends React.Component {
  render() {
    return(
      <div>
        // <ProfileDetails />
        <Menu />
        // <FooterOptions />
      </div>
    )
  }
}

// class ProfileDetails extends React.Component{
//   render() {
//     return(
//       <div>
//         <li>Name</li>
//         <li>Email</li>
//       </div>
//     )
//   }
// }

class Menu extends React.Component{
  render() {
    return(
      Var menus = ["Contacts", "Product", "Sales", "Purchase", "Shipping", "Inventory & Stock", "Production", "Financial", "Settings", "Administration"];
      <div>
        <ul>
          {this.props.menus.map(function(item){
            <li>item</li>
          })}
        </ul>
      </div>
    )
  }
}

// class FooterOptions extends React.Component{
//   render() {
//     var footerOptions = [footerOption1, footerOption2, footerOption3];
//     return(
//       <div>
//         {this.props.footerOptions.map(function(option){
//           <li>option</li>
//         })}
//       </div>
//     )
//   }
// }

// class SubMenu extends React.component{
//   render() {
//     var submenuOptions = ["Product templates", "Products", "Categories", "Attributes", "Tree Nodes", "Gift Card", "Bill of Materials(BOM)", "Price Lists", "Product suppliers", "Attribute sets", "Reports", "Import product locations"];
//     return(
//       <div>
//         <h3 className = "SubMenuHeading">{this.props.SuperName}</h3>
//         <ul>
//           {this.props.submenuOptions.map(function(item){
//             <li>item</li>
//           })}
//         </ul>
//       </div>
//     )
//   }
// }

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
