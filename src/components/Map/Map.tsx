import React, { useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { setTravelTimeInformation } from '../../redux/slices/navSlice'
import { useSelector, useDispatch } from 'react-redux'
import { selectDestination, selectOrigin } from '../../selectors/selectors'
import { GOOGLE_API_KEY } from '@env'
import axios from 'axios'

export const Map: React.FC = () => {
  const dispatch = useDispatch()
  const origin = useSelector(selectOrigin)
  const destination = useSelector(selectDestination)

  useEffect(() => {
    const getTravelTime = async () => {
      if (!origin || !destination) return

      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/distancematrix/json??units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_API_KEY}`,
      )

      dispatch(setTravelTimeInformation(response.data.rows[0].elements[0]))
    }

    getTravelTime()
  }, [origin, destination])

  return (
    <MapView
      style={{ flex: 1 }}
      mapType="standard"
      initialRegion={{
        latitude: origin?.location.lat,
        longitude: origin?.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}>
      {!!origin && !!destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_API_KEY}
          strokeWidth={3}
          strokeColor="black"
        />
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin?.location.lat,
            longitude: origin?.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: origin?.location.lat,
            longitude: origin?.location.lng,
          }}
          title="Destination"
          description={destination.description}
          identifier="destination"
        />
      )}
    </MapView>
  )
}
