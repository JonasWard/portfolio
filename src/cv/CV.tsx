import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import './cv.css';
import { Header } from '../Header';
import { CVDocument, CVHTML } from './CVDocument';
import cv from './cv.json';
import { CVData } from './cv.type';

export const CV = () => {
  const date = new Date();

  return (
    <>
      <Header />
      <PDFDownloadLink
        style={{ position: 'absolute', top: '50px' }}
        fileName={`JonasWard_CV_${date.getFullYear()}-${date.getMonth()}-${date.getDay()}.pdf`}
        document={<CVDocument data={cv} isPdf={true} />}
      >
        <div>donwload me!</div>
      </PDFDownloadLink>
      <CVHTML data={cv} isPdf={false} />

      {/* <PDFViewer className={'document'}> */}
      {/* <CVDocument data={cv as CVData} /> */}
      {/* </PDFViewer> */}
    </>
  );
};

export default CV;
