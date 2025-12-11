import { useNavigate } from 'react-router-dom';
import ZoomableCanvas from "../components/Canvas/ZoomableCanvas";
import PhotoReveal from "../components/RevealItems/PhotoReveal";
import { canvasConfig, galleryItems } from "../data/galleryData";

export default function Gallery() {
    const navigate = useNavigate();

    const handleNavigateToHome = () => {
        navigate('/russ-344/');
    };

    return (
        <ZoomableCanvas
            config={canvasConfig}
            showResetButton={true}
            showHomeButton={true}
            onNavigateToHome={handleNavigateToHome}
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