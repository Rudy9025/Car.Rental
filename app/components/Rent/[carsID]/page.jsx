import NavBar from '../../NavBar/page'

const page = ({params}) => {
  return (
    <>
    <NavBar />
    <div>Car id goes here

      car id : {params.carsID}    
    </div>
    </>

  )
}

export default page