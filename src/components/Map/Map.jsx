import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { useSelector } from 'react-redux'
import { selectDestination, selectOrigin } from '../../selectors/selectors'

export const Map = () => {
  const origin = useSelector(selectOrigin)
  const destination = useSelector(selectDestination)

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
