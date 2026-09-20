import { useState } from 'react';
import ImagePlaceholder from './ImagePlaceholder';

export default function Gallery({ images = [], icon = 'box', title }) {
  const [active, setActive] = useState(0);
  const slots = images.length > 0 ? images : [null];

  return (
    <div>
      <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-border bg-card">
        {slots[active] ? (
          <img src={slots[active]} alt={title} className="h-full w-full object-cover" />
        ) : (
          <ImagePlaceholder icon={icon} label={title} className="h-full w-full" />
        )}
      </div>
      {slots.length > 1 ? (
        <div className="mt-3 flex gap-2">
          {slots.map((image, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActive(index)}
              className={`h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border transition-colors ${
                active === index ? 'border-blue' : 'border-border hover:border-white/30'
              }`}
              aria-label={`Ver imagen ${index + 1}`}
            >
              {image ? (
                <img src={image} alt="" className="h-full w-full object-cover" />
              ) : (
                <ImagePlaceholder icon={icon} className="h-full w-full" demo={false} />
              )}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
