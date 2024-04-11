import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { slides } from "../../Utils/Gallery/Photos";
import "yet-another-react-lightbox/styles.css";
import {
  Captions,
  Download,
  Fullscreen,
  Share,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import PhotoAlbum from "react-photo-album";

function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <PhotoAlbum
        photos={slides}
        layout="rows"
        targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}
        breakpoints={[3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48]}
      />

      <Lightbox
        plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails, Share]}
        captions={{
          showToggle: true,
          descriptionTextAlign: "end",
        }}
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </>
  );
}

export default Gallery;
