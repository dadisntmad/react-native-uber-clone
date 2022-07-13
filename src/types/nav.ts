export type NavSliceState = {
  origin: Origin
  destination: string
  travelTimeInformation: string
}

export type Origin = {
  location: {
    data: Data
  }
  description: {
    details: Details
  }
}

type Data = {
  data: {
    description: string
  }
}

type Details = {
  details: {
    geometry: {
      location: string
    }
  }
}
