import { getMemes } from "../Services/Api";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Meme from "./Meme";
import Masonry from "@mui/lab/Masonry";

const Memes = () => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response = await getMemes();
      setMemes(response.data.children);
    };
    getData();
  }, []);

  return (
    <Box sx={{ pt: 4 }}>
      <Masonry columns={{ xs: 1, sm: 2, md: 4 }}>
        {memes.map((meme, index) => (
          <Grid key={index} item xs={2}>
            <Meme meme={meme} />
          </Grid>
        ))}
      </Masonry>
    </Box>
  );
};

export default Memes;
