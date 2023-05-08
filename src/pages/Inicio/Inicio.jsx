import { InicioTitleCard } from "./components"
import './Inicio.css'

function Inicio () {
    return (
        <>
            <InicioTitleCard
                className='items-center titulo-1'
                title={<h2 className="text-2xl font-black">Titulo 1</h2>}
                button={<button style={{ backgroundColor: '#807d7d' }} className="bg-gray-300 w-36 h-12 rounded-xl text-3xl font-extrabold">CTA</button>}
                image='https://placehold.co/320x420'
                style={{ backgroundColor: '#d9d9d9' }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </InicioTitleCard>
            <InicioTitleCard
                className="titulo-2"
                title={<h2 className="text-2xl font-black">Titulo 2</h2>}
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptatem eos amet reiciendis quidem. Provident, repellat esse optio ipsa ratione corrupti culpa voluptatem dolorum commodi nulla rerum inventore. Voluptatem, necessitatibus.
            </InicioTitleCard>
            <div className="inicio-about flex flex-col items-center w-full pb-80 gap-4">
                <h6 className="text-2xl font-black">¿Qué hacemos?</h6>
                <p className="text-xl w-full p-2">
                    Lorem ipsum dolor sit amet consectetrr adipisici elit. Totam eveniet id voluptatibus, adipisci perferendis inventore corporis ipsum atque delectus in. Corporis quibusdam vero ducimus eos voluptatum consectetur mollitia tempore. Numquam!</p>
            </div>
        </>
    )
}

export default Inicio