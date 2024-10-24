import getRandomCoordinates from "~/utils/getRandomCoordinates";
const ENVIRONMENTS = ["INDOOR", "OUTDOOR", "VEHICLE"];
const CARRIERS = ["ORANGE", "MOVISTAR", "VODAFONE"];
const NUMBER_OF_EVENTS = 10000;
const xAxis = { min: -4.12719, max: -3.258868 }
const yAxis = { min: 40.187386, max: 40.647991 }

function generateData() {
  return Array.from({ length: NUMBER_OF_EVENTS }, (_, i) => {
    return {
      type: "Feature" as const,
      properties: {
        carrier: CARRIERS[Math.floor(Math.random() * CARRIERS.length)],
        environment: ENVIRONMENTS[Math.floor(Math.random() * ENVIRONMENTS.length)]
      },
      geometry: {
        type: "Point",
        coordinates: [
          getRandomCoordinates(xAxis.min, xAxis.max), getRandomCoordinates(yAxis.min, yAxis.max)
        ]
      }
    }
  })
}
// Debe mandar un listado de coordenadas aleatorias generadas en cada llamada
export default defineEventHandler((event) => {
  return generateData()
})
