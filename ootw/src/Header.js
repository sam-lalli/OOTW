import './Header.css'

const Header = (props) => {

    const { image } = props

    return (
        <div id="header">
            <h1>NASA PHOTO OF THE DAY</h1>
            <h1>{image.date}</h1>
        </div>
    )
}


export default Header