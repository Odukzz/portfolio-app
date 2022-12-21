import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack backgroundColor="white" borderRadius="10px" textAlign="left">
      <Image src={imageSrc} alt={title} borderRadius="10px" />
      <Heading margin="0" padding="10px" color="black">
        {title}
      </Heading>
      <Text padding="10px" color="gray">
        {description}
      </Text>
      <Text
        color="black"
        fontWeight="bold"
        padding="10px"
        margin="0"
        cursor="pointer"
      >
        See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </Text>
    </VStack>
  );
};

export default Card;