import React, { useEffect, useState } from "react";
import { useEventrixState, useEmit } from "eventrix";
import CircularProgress from "@mui/material/CircularProgress";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { FETCH_CHARACTERS } from "../../app/eventrix/eventsNames/starWarsApi";

const CharactersPage = () => {
  const [loading, setLoading] = useState(true);
  const [characters] = useEventrixState("characters");
  const emit = useEmit();

  useEffect(() => {
    emit(FETCH_CHARACTERS).then(() => setLoading(false));
  }, []);

  return (
    <div className="home">
      Characters page
      {loading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        Array.isArray(characters) &&
        characters.length && (
          <Stack direction="row" spacing={1}>
            {characters.map((character) => {
              return <Chip label={character.name} />;
            })}
          </Stack>
        )
      )}
    </div>
  );
};

export default CharactersPage;
