import Links from './Links';

const Header = ({className}) => {
    return(
        <header className={className}>
            <div>
                <h1>Ecommerce</h1>
            </div>
            <Links className="bg-red" />
        </header>
    )
}

export default Header