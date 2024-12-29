import React from "react";
// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import pdffile from './image/VOYAGEHack 2.O.pdf'
import { useState } from 'react';
import { Worker } from '@react-pdf-viewer/core'; // install this library

function Pdf51(){
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const[defaulttpdffile]=useState(pdffile)

    return(
<div>
    {
        defaulttpdffile&&<><Worker workerUrl="http://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
        <Viewer fileUrl={defaulttpdffile}
        plugins={defaultLayoutPluginInstance}
        />
        </Worker>
        </>
    }
</div>
    
    );
}
export default Pdf51;
