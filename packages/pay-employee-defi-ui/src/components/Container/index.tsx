import { Flex, useColorMode, FlexProps } from '@chakra-ui/react'
import { mindingo } from '@pauloluan/shared'

const Container = (props: FlexProps) => {
  const { colorMode } = useColorMode()

  const teste = mindingo()
  console.log(teste)

  const bgColor = { light: 'gray.50', dark: 'gray.900' }
  const color = { light: 'black', dark: 'white' }

  return (
    <Flex
      direction='column'
      alignItems='center'
      justifyContent='flex-start'
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  )
}

export default Container
