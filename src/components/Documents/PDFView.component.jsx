import { Box, Button, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import NavBar from "../Common/NavBar.component";

const PDFView = () => {
  const { document } = useSelector((state) => state.documents);
  const { url, category } = document;

  return (
    <Box pb={8}>
      <img
        alt="cover"
        style={{ width: "100%", height: "10rem", objectFit: "cover" }}
        src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_538661656_367462.jpg"
      />
      <Grid p={1} container direction="column">
        <Grid item xs={12}>
          <Typography variant="h6" textAlign="center">
            {category}
          </Typography>
          {url ? (
            <iframe
              title="pdf-view"
              style={{ height: "32rem", width: "100%", border: "0" }}
              src={url}
              type="application/pdf"
            >
              <div>No online PDF viewer installed</div>
            </iframe>
          ) : null}
        </Grid>
        <Grid item xs={12}>
          <a href={url} download>
            <Button
              fullWidth
              style={{ marginTop: "1rem" }}
              variant="contained"
              color="primary"
            >
              Descargar
            </Button>
          </a>
        </Grid>
      </Grid>
      <NavBar />
    </Box>
  );
};
export default PDFView;
