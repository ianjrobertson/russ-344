import ZoomableCanvas from "../components/Canvas/ZoomableCanvas";
import PhotoReveal from "../components/RevealItems/PhotoReveal";
import { canvasConfig, galleryItems } from "../data/galleryData";

export default function Gallery() {
    return (
        <ZoomableCanvas 
            config={canvasConfig}
            showResetButton={true}
        >
            {galleryItems.map(item => (
                <PhotoReveal
                    key={item.id}
                    item={item}
                />
            ))}
        </ZoomableCanvas>
    )
}