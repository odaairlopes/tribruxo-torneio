import "./style.css"

function HomePage ({setPage, page, getRandom}) {
    return(
        <div className="homePage">
            <h3>Triwizard Cup</h3>
            <p>Bem vindos ao Triwizard Cup! Aqui decidiremos quem irá participar do torneio, de sua respecitva casa.</p>
            <p>Clique no botão abaixo para sortear os três participantes!</p>
            <button onClick={() => setPage(!page)}>Sortear participantes</button>
        </div>
    )
}
export default HomePage