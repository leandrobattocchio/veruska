import { InicioTitleCard } from "./components"

function Inicio () {
    return (
        <>
            <InicioTitleCard
                className='items-center'
                title='Titulo 1'
                button={<button style={{ backgroundColor: '#807d7d' }} className="bg-gray-300 w-36 h-12 rounded-xl text-3xl font-extrabold">CTA</button>}
                image='https://placehold.co/320x420'
                style={{ backgroundColor: '#d9d9d9' }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quis ipsa totam enim temporibus mollitia sint veritatis cumque? Sapiente illum autem saepe vero commodi omnis quisquam quod expedita culpa officiis!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aliquam ad reprehenderit dolores esse! Nisi saepe quidem delectus autem porro, nihil quibusdam tempore, ipsa placeat accusamus deserunt eveniet dolorem amet.
            </InicioTitleCard>
            <InicioTitleCard
                title='Titulo 2'
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptatem eos amet reiciendis quidem. Provident, repellat esse optio ipsa ratione corrupti culpa voluptatem dolorum commodi nulla rerum inventore. Voluptatem, necessitatibus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aliquam ad reprehenderit dolores esse! Nisi saepe quidem delectus autem porro, nihil quibusdam tempore, ipsa placeat accusamus deserunt eveniet dolorem amet.
            </InicioTitleCard>
        </>
    )
}

export default Inicio