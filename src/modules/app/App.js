import firebase from 'firebase/app';
import 'firebase/analytics';
import { useDispatch } from 'react-redux';

import * as appActions from './actions/index';
import './App.css';
import Table from '../../components/table/Table';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSENGER_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  databaseUrl: process.env.REACT_APP_FIREBASE_DATABASE_URL,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const App = () => {
  const dispatch = useDispatch();
  dispatch(appActions.getTrailConditions())
  return (
    <div className="app">
      <header className="app-header">
        TSF Trail Status
      </header>
      <h3 className="app-header-link">
        <a href="https://www.oregon.gov/odf/recreation/guides/tsf-ohv-mapside-map.pdf">
          Tillamook Trail Map (Non-Georeferenced)
        </a>
      </h3>
      <h3 className="app-header-link">
        <a href="https://www.oregon.gov/odf/recreation/guides/tsf-ohv-georeferenced-trail-map.pdf">
          Tillamook Trail Map (Georeferenced)
        </a>
      </h3>
      <Table />
    </div>
  );
}

export default App;
