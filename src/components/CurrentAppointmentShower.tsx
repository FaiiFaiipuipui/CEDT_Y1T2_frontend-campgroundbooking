function CurrentAppointmentShower({appointment}:{appointment:Object}) {
  const array = appointment ? Object.values(appointment) : null;
  console.log(array);
  const info = array ? Object.values(array[1]) : null;
  console.log(info);
  const campground = info ? Object.values(info[3]) : null;
  console.log(campground);
  return (<div className="text-lg">
    <div>appointment date: {info[1]}</div>
    <div>appointment campground: {campground[1]}</div>
  </div>);
}

export default CurrentAppointmentShower;