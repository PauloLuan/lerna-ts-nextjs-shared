import { Flex, Heading, Img } from '@chakra-ui/react'
import { mindingo } from '@pauloluan/shared'

export type HeroProps = {
  title?: string
}

const teste = mindingo()

const Hero = ({ title = 'NextJS with Chakra-ui Boilerplate' }: HeroProps) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="100vh"
    bgGradient="linear(to-l, #7928CA, #FF0080)"
    bgClip="text"
  >
    <Img src="/img/chakra-logo.png" alt="Chakra-ui Logo" mr={4} />
    <Heading fontSize="6vw">
      {title} {teste}
    </Heading>
  </Flex>
)

export default Hero
