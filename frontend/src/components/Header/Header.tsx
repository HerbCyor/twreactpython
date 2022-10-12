import { HeaderContainer, Logo } from "./Header.style";

const Header = () => {
    return (
        <HeaderContainer>
            <div>
                <Logo src='/images/myteacher.png' />
            </div>
            <p>Header</p>
        </HeaderContainer>
    )
}

export default Header;