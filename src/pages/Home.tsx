import { useNavigate } from 'react-router-dom';
import ZoomableCanvas from "../components/Canvas/ZoomableCanvas";
import PhotoReveal from "../components/RevealItems/PhotoReveal";
import ZoomableTextBox from "../components/ZoomableTextBox/ZoomableTextBox";
import { canvasConfig, archiveItems } from "../data/archiveData";

const projectDescription = 'For this project, my goal was to explore the results of censorship on the mind of the Soviet People \nWhile learning about censorship and specifically while reading the works of Isaiah Berlin, I was impressed about the parallels between the use of AI and the lack of critical thinking that occurs in the face of censorship.\n\n While censorship tries to limit and control information, AI gives us an overabundance and allows us to offload our critical thinking.\n\n For my project, I created a gallery of Russian artwork that has been censored by AI to demonstrate how Artifical Intelligence limits the intellectual capabilities of the individual, similar to Soviet Censorship.'

export default function Home() {
    const navigate = useNavigate();

    // Text box position and dimensions
    const textBoxPos = { x: 1500, y: 750 };
    const textBoxSize = { width: 1000, height: 1500 };

    // Calculate center point of the text box
    const centerPoint = {
      x: textBoxPos.x + textBoxSize.width / 2,
      y: textBoxPos.y + textBoxSize.height / 2
    };

    const handleNavigateToGallery = () => {
      navigate('/russ-344/gallery');
    };

    return (
        <ZoomableCanvas
          config={canvasConfig}
          centerPoint={centerPoint}
          showGalleryButton={true}
          showResetButton={true}
          onNavigateToGallery={handleNavigateToGallery}
        >
        {archiveItems.map(item => (
          <PhotoReveal
            key={item.id}
            item={item}
          />
        ))}
        <ZoomableTextBox
          title="Soviet Censorship"
          content={projectDescription}
          position={textBoxPos}
          width={textBoxSize.width}
          height={textBoxSize.height}
        />
      </ZoomableCanvas>
    )
}