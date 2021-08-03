import Meta from "../components/Meta/Meta";
import Home from "../components/Home/Home"
import { GetStaticProps } from "next";
import axios from "axios";
import absoluteUrl from 'next-absolute-url'
import { useState, useEffect } from 'react';
import { useAppContext } from '../contexts/state';

export default function Index({ planetsData }: { planetsData: PlanetData[] }) {
  const { planet, setPlanet } = useAppContext()
  const [planetData, setPlanetData] = useState<PlanetData[]>([])

  useEffect(() => {
    const currentPlanet = planetsData.filter(planetData => planet === planetData.name.toLowerCase())
    setPlanetData(currentPlanet)
  }, [planetsData, planet])

  return (
    <div>
      <Meta />
      <Home {...planetData[0]} />
    </div>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const origin = typeof window !== 'undefined' && window.location.href ? window.location.href : '';
  const response = await axios({ method: 'GET', url: `${origin + '/data.json'}` })
  const planetsData: PlanetData[] = response.data
  return {
    props: {
      planetsData
    }
  }
}