import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/logo.webp';
import ColorModeSwitch from '../components/ColorModeSwitch';
import SearchImput from "./SearchImput";

interface Props {
    onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
    return (
        <HStack padding="10px">
            <Image src={logo} boxSize='60px' />
            <SearchImput onSearch={onSearch} />
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar