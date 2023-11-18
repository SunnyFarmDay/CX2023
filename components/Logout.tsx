import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Logout = () => {
  return (
      <TouchableOpacity style={{width: 60, height: 50, backgroundColor: 'red'}}>
        <Text style={{fontSize: 20}}>Logout</Text>
      </TouchableOpacity>
  )
}

export default Logout