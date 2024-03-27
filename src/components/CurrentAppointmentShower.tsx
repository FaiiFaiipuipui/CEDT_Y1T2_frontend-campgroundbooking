function CurrentAppointmentShower({appointment}:{appointment:Object}) {
  const array = appointment ? Object.entries(appointment) : null;
  console.log(array);
  const info = array ? Object.entries(array[1][1]) : null;
  console.log(info);
  const campground = info ? Object.entries(info[3][1]) : null;
  console.log(campground); 
  return (<div className="text-lg">
    <div>appointment date: {info[1][1]}</div>
    <div>appointment campground: {campground[1][1]}</div>
  </div>);
}

export default CurrentAppointmentShower;