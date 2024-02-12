import { Grid, Heading, Text } from '@chakra-ui/react';

const SomeOtherText = () => {
  return (
    <Grid textAlign="center">
      <Heading as="h1" size="lg">
        nextarter-chakra
      </Heading>

      <Text fontSize="xs">
        This is a Next.js app with Chakra-UI and TypeScript setup.
      </Text>
    </Grid>
  );
};

export default SomeOtherText;
