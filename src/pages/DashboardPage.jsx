import { Carousel } from "antd";

const DashboardPage = () => {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
    <div>
      <h1>
      DashboardPage
      </h1>
      <h2>Our Center</h2>
      <Carousel autoplay>
    <div>
      <h1 style={{backgroundColor: '#fff', textAlign: 'center'}}>Kasblarni mutaxasislardan organing</h1>
    </div>
    <div>
    <h1 style={{backgroundColor: '#fff', textAlign: 'center'}}>Kasblarni onlayn organing</h1>
    </div>
    <div>
    <h1 style={{backgroundColor: '#fff', textAlign: 'center'}}>Kasblarni istalgan nuqtadan organing</h1>
    </div>
    <div>
    <h1 style={{backgroundColor: '#fff', textAlign: 'center'}}>Kasblarni ( SHOHNAZAR ) dan organing</h1>
    </div>
  </Carousel>
    </div>
  )
}

export default DashboardPage