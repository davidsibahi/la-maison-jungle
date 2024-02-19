import '../style/Banner.css'
import logo from '../asset/logo.png'
function Banner() {
    const titre = 'La maison jungle'
    return (<div className='lmj-banner'>
        <img src={logo} alt='logo-maison' className='lmj-logo'/>
        <h1 className='lmj-tiltle' >{titre}</h1>
    </div>)
}

export default Banner