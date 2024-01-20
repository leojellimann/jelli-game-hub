import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react"

const ColorModeSwitch = () => {
    const {toggleColorMode, colorMode} = useColorMode();//return an object with 2 properties (togglemode and current color)
    
    return (
    <HStack>
        <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
        <Text whiteSpace='nowrap'>Mode {colorMode === 'dark' ? 'nuit' : 'clair'}</Text>
    </HStack>
  )
}

export default ColorModeSwitch