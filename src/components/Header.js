import PropTypes from 'prop-types'
import Button from './Button'



const Header = ({title}) => {
    const onClick = () => {
        console.log('click')
    }
  
    return (
    <header className='header'>
        {/* <h1 style={{ color: 'red'}}> {title}</h1> */}
        {/* <h1 style={headerStyling}> {title}</h1> */}
        <h1> {title}</h1>
        <Button color='green' text='add' onClick={onClick}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header

// const headerStyling = {
//     color: 'red',
//     background: 'grey'
// }