import Clipboard from "./Clipboard"
function APIs() {
  const datas = [
    {title:"Rapid APIs", link:"https://rapidapi.com/hub"},
    {title:"Any APIs", link:"https://any-api.com/"},
    {title:"Json Placeholder APIs", link:"https://jsonplaceholder.typicode.com/"},
    {title:"Pokemon APIs", link:"https://pokeapi.co/"},
    {title:"Open Weather APIs", link:"https://openweathermap.org/api"},
  ]
  return (
    <div className='mx-auto p-2 md:p-4 w-[85%]'>
      <div className="grid grid-cols-1 gap-y-4 ">
        {datas.map((data, index) => (
          <Clipboard key={index} title={data.title} link={data.link} />
        ))}
      </div>
    </div>
  )
}

export default APIs