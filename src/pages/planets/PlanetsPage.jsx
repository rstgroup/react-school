import React, { useEffect, useState } from "react";
import { useEventrixState, useEmit } from "eventrix";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { FETCH_PLANETS } from "../../app/eventrix/eventsNames/starWarsApi";

const PlanetsPage = () => {
  const [loading, setLoading] = useState(true);
  const [planets] = useEventrixState("planets");
  const emit = useEmit();

  useEffect(() => {
    emit(FETCH_PLANETS).then(() => setLoading(false));
  }, []);

  return (
    <div className="home">
      Planets page
      {loading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        Array.isArray(planets) &&
        planets.length && (
          <Box sx={{ display: "flex" }}>
            <TableContainer component={Paper}>
              <Table
                sx={{ maxWidth: 600 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Climate</TableCell>
                    <TableCell align="right">Diameter</TableCell>
                    <TableCell align="right">Population</TableCell>
                    <TableCell align="right">Terrain</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {planets.map((planet) => (
                    <TableRow
                      key={planet.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {planet.name}
                      </TableCell>
                      <TableCell align="right">{planet.climate}</TableCell>
                      <TableCell align="right">{planet.diameter}</TableCell>
                      <TableCell align="right">{planet.population}</TableCell>
                      <TableCell align="right">{planet.terrain}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )
      )}
    </div>
  );
};

export default PlanetsPage;
