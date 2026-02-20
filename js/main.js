function Tarjeta({ titulo, descripcion = "Cursos de Coder" }) {
    console.log(titulo)
    return (
        <div>
            <h2>{titulo}</h2>
            <h3>{descripcion}</h3>
        </div>
    )
}

function App() {
    return (
        <>
            <Tarjeta titulo="Curso React" descripcion="Nuevo curso" />
            <Tarjeta titulo="Curso Angular" />
            <Tarjeta titulo="Curso Node" descripcion="Nuevo curso 3" />
            <Tarjeta titulo="Curso Java" descripcion="Nuevo curso 4" />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App></App>)
