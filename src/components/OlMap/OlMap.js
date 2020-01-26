import React from 'react';
import './OlMap.css';
import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "react-openlayers";

function OlMap() {
  return (
    <div className="OlMap">
      <Map view={{center: [0, 0], zoom: 2}}>
        <Layers>
          <layer.Tile/>
        </Layers>
        <Controls attribution={false} zoom={true}>
          <control.Rotate />
          <control.ScaleLine />
          <control.FullScreen />
          <control.OverviewMap />
          <control.ZoomSlider />
          <control.ZoomToExtent />
          <control.Zoom />
        </Controls>
      </Map>
    </div>
  );
}

export default OlMap;
