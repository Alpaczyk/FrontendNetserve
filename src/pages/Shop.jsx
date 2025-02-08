import '../styles/Shop.css'
import Catbtn from "../components/Catbtn.jsx";
function Shop() {

  return (
    <>
      <h1>Hello shop</h1>
        <h1>Oferta</h1>
        <Catbtn className={"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"} name={"First Category"}></Catbtn>

    </>
  )
}

export default Shop
