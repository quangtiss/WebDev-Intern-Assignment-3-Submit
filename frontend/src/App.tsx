import { BrowserRouter, Routes, Route } from "react-router-dom"
import SearchScore from './page/SearchScore'
import Layout from './page/Layout'
import ListTop10 from './page/ListTop10'
import StatsChart from './components/stats-chart'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ListTop10 />} />
          <Route path="/search" element={<SearchScore />} />
          <Route path="/reports" element={<StatsChart />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
