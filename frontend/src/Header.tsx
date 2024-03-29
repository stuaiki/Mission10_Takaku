// import logo picture
import logo from './bowlerComp.png';

//create a header that have logo and title with props to import
function Header(props: any) {
  return (
    <header className="row header navbar navbar-dark bg-dark">
      <div className="col-3">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="col subtitle">
        <h1 className="text-white">{props.title}</h1>
      </div>
    </header>
  );
}

export default Header;
