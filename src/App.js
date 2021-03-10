import './App.css';
import trailData from './data/trailData';
import Table from './components/table/Table';

const App = () => {
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
      <Table data={trailData}/>
    </div>
  );
}

export default App;
