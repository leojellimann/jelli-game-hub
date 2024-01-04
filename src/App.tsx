import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'

function App() {
  return (
    <Grid 
      templateAreas={{
        //2 differents layouts, one for mobile and one for larger screens
        base: `"nav" "main"`,//for mobile only one column
        lg: `"nav nav" "aside main"`//for device larger than 1024px
      }}>
      <GridItem area='nav' bg='coral'>
        Nav
      </GridItem>
      <Show above='lg'>{/* will be rendered on large screens and above*/}
        <GridItem area='aside' bg='gold'>
          Aside
        </GridItem>
      </Show>
      
      <GridItem area='main' bg='dodgerblue'>
        Main
      </GridItem>
    </Grid>
  );
}

export default App
