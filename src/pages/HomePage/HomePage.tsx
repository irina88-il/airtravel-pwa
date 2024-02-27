import "./HomePage.sass"
import image from "/src/assets/home.png"

const HomePage = () => {
    return (
        <div className="home-page-wrapper">
            <h2>Добро пожаловать на сайт мониторинга авиарейсов!</h2>
            <p>Здесь вы можете узнать информацию об авиакомпаниях, а также сформировать заявки на авиарейсы</p>
            <img src={image} />
        </div>
    )
}

export default HomePage