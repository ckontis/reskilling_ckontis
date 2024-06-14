import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/posts", async (req, res) => {
  try {
    const postsResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const photosResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );

    const posts = postsResponse.data.slice(0, 20);
    const photos = photosResponse.data.slice(0, 20);

    const combinedData = posts.map((post, index) => ({
      ...post,
      photo: photos[index]?.thumbnailUrl,
      photo2: photos[index]?.url,
    }));

    res.json(combinedData);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
