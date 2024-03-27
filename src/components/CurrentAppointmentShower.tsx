function CurrentAppointmentShower({appointment}:{appointment:AppointmentJson}) {
  return (<div>{JSON.stringify(appointment)}</div>);
}

export default CurrentAppointmentShower;