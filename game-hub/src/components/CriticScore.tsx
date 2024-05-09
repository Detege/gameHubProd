import {  Badge } from "@chakra-ui/react"

interface Props {
    score: number;
  }

const CriticScore = ({ score }: Props) => {

    let color: string = score > 90 ? 'green' :  score < 80 ? 'red' : 'yellow';

    return (
        <Badge borderRadius={2} px={2} fontSize='l' colorScheme={color}>{score}</Badge>
    );
};

export default CriticScore