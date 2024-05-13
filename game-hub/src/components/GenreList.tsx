import { List, Image, ListItem, HStack, Text } from "@chakra-ui/react";
import useGenres from "../hooks/UseGenres"
import getCroppedImageUrl from "../services/image-url";


const GenreList = () => {
    const {genres} = useGenres();

  return (
    <List>
      {genres.map(genre => 
      <ListItem key={genre.id} fontSize='18px' paddingY='5px'>
        <HStack>
        <Image boxSize='32px' objectFit='cover' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
        <Text fontSize='lg'> {genre.name}</Text>
        </HStack>
      </ListItem>) }
    </List>
  )
}

export default GenreList