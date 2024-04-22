import { Card, CardHeader, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardHeader>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardHeader>
    </Card>
  );
};

export default GameCard;
