import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';

function App() {
  return (
    <Grid 
      templateAreas={{
        //2 differents layouts, one for mobile and one for larger screens
        base: `"nav" "main"`,//for mobile only one column
        lg: `"nav nav" "aside main"`//for device larger than 1024px
      }}
      templateColumns={{
        base: '1fr',//When only one column, the main column take full width of the screen
        lg: '200px 1fr'//Side column take 200px and the main take the rest of the screen
      }}
      >
      <GridItem area='nav'>
        <NavBar/>
      </GridItem>
      <Show above='lg'>{/* will be rendered on large screens and above*/}
        <GridItem area='aside' paddingX={5}>
          <GenreList/>
        </GridItem>
      </Show>
      
      <GridItem area='main'>
        <GameGrid/>
      </GridItem>
    </Grid>
  );
}

export default App
