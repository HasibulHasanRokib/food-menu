
const Navbar = ({handleItems,title}) => {

  return (
    <>
       
      <nav className="navbar">
        <div className="btn-group">
          {title.map((curElem,index) => {
            return <button key={index} className="btn-group__item" onClick={() =>handleItems(curElem)}>{curElem}</button>
            
          })}
        </div>
      </nav>

    </>
  )
}

export default Navbar
