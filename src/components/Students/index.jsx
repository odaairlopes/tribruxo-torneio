import './styles.css';

function Students ( {students, sorteados, getRandom } ) {
    return (
        <>
        <div className="box-pai">
            {
                getRandom(students, 3).map((student) => (
                    <div className={student.house === 'Gryffindor' ? "card-students-grif" : student.house === 'Slytherin' ? "card-students-slyt" : student.house === 'Hufflepuff' ? "card-students-huff" : "card-students-raven"}>
                            <img src={student.image} alt={student.name} />
                            <p>Nome: {student.name}</p>
                            <p>Ancestralidade: {student.ancestry}</p>
                            <p>Casa: {student.house}</p>
                        </div>
                    ))
            }
            <button onClick={getRandom}> Sortear novamente!</button>

            </div>
            </>
    )

}

export default Students;