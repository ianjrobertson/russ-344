import { useState } from 'react';
import ZoomableCanvas from './components/Canvas/ZoomableCanvas';
import PhotoReveal from './components/RevealItems/PhotoReveal';
import ZoomableTextBox from './components/ZoomableTextBox/ZoomableTextBox';
import { archiveItems, canvasConfig } from './data/archiveData';
import type { RevealState } from './types';

const projectDescription = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales aliquet egestas. Vivamus luctus, lacus eget ornare bibendum, lorem lacus venenatis lorem, id fringilla lectus est eget nisl. Sed vitae ipsum ante. In dapibus, neque eget porttitor fermentum, dui orci pretium magna, dapibus convallis ex felis eget justo. Sed volutpat lorem nec dui tempor ullamcorper. Suspendisse fermentum feugiat nibh, in faucibus diam auctor finibus. Nulla ante lorem, tincidunt vel molestie eu, dapibus ultricies diam. Aliquam eu tempor ex, sit amet suscipit ex. Vestibulum vel tellus eros. Suspendisse urna mauris, placerat ac egestas ac, pretium et nulla.

Phasellus ut varius velit, eget ornare nulla. Curabitur cursus mi a aliquam pellentesque. Aenean efficitur justo vitae tincidunt consectetur. Donec condimentum felis quis erat mattis, at finibus ex sagittis. Praesent fermentum, risus sit amet vulputate molestie, lorem dui porttitor velit, sed lacinia est arcu in nisl. Praesent auctor, ipsum vitae placerat consequat, lorem velit feugiat mauris, ultricies aliquet quam nisl in purus. Pellentesque tempus libero feugiat tellus facilisis, nec volutpat turpis ultricies. Vivamus non tempus erat. Proin suscipit, massa vel lobortis viverra, nisi felis fermentum ante, et dapibus quam justo eu turpis. Suspendisse laoreet magna augue, at sollicitudin augue aliquam vitae. Integer sit amet ante vel quam dictum auctor non vitae orci. Vestibulum sodales ante nec lorem condimentum, condimentum porta magna placerat. Maecenas hendrerit scelerisque ipsum, porttitor sollicitudin lorem finibus sed. Vestibulum iaculis risus in lectus iaculis, eget dictum arcu consequat. Praesent bibendum elit suscipit ipsum mattis ullamcorper at sit amet velit.

Duis gravida faucibus venenatis. Aenean eu auctor urna. Cras aliquet leo eu massa hendrerit efficitur. Cras mollis erat elit, et consequat nisi rutrum quis. Ut luctus aliquam elit vel auctor. Nullam lacinia hendrerit nunc, et feugiat neque placerat rutrum. Fusce accumsan sapien sed aliquet feugiat. Mauris ac tincidunt nisl. Integer hendrerit semper libero, sit amet egestas nulla gravida et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed aliquet erat id dolor fermentum, ut lacinia ligula rhoncus. Vestibulum blandit commodo justo, et viverra enim laoreet quis. `
function App() {
  const [revealedItems, setRevealedItems] = useState<RevealState>({});

  const handleReveal = (itemId: string, isRevealed: boolean) => {
    setRevealedItems(prev => ({
      ...prev,
      [itemId]: isRevealed
    }));
  };

  return (
    <div className="relative">
      {/* Main canvas */}
      <ZoomableCanvas config={canvasConfig}>
        {archiveItems.map(item => (
          <PhotoReveal
            key={item.id}
            item={item}
            onReveal={handleReveal}
          />
        ))}
        <ZoomableTextBox
          title="Russian Censorship"
          content={projectDescription}
          position={{ x: -750, y: -200 }}
          width={1000}
          height={1500}
        />
      </ZoomableCanvas>
    </div>
  );
}

export default App;
