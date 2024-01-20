import { Box, Button, ButtonGroup, Flex, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {

const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
        <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/>
      </GridItem>
      <Show above='lg'>{/* will be rendered on large screens and above*/}
        <GridItem area='aside' paddingX={5}>
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}/>
        </GridItem>
      </Show>
      
      <GridItem area='main'>
        <Flex paddingLeft={2} marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
          </Box>
          <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
        </Flex>
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
  );
}

export default App
