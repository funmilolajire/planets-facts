import Meta from "../components/Meta/Meta";
import Home from "../components/Home/Home"
import axios from "axios";
import { useState, useEffect } from 'react';
import { useAppContext } from '../contexts/state';

export default function Index() {
  const { planet, setPlanet } = useAppContext()
  const [planetData, setPlanetData] = useState<PlanetData[]>([])

  useEffect(() => {
    const getPlanets = async () => {
      const response = await axios({ method: 'GET', url: `${origin + '/data.json'}` })
      const planetsData: PlanetData[] = response.data
      const currentPlanet = planetsData.filter(planetData => planet === planetData.name.toLowerCase())
      setPlanetData(currentPlanet)
    }
    getPlanets()
  }, [planet])

  return (
    <div>
      <Meta />
      <Home {...planetData[0]} />
    </div>
  )
}