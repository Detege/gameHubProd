import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/logo.webp';
import ColorModeSwitch from '../components/ColorModeSwitch';
import SearchImput from "./SearchImput";


const NavBar = () => {
    return (
        <HStack padding="10px">
            <Image src={logo} boxSize='60px' />
            <SearchImput />
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar