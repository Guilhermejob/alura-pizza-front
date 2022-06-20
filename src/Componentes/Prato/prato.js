import './prato.css'

const Prato = (props) => {

    return (
        <div className='prato'>
            <div className='imagem-container'>
                <img src={props.imagem} alt={props.descricao}/>
            </div>
            <div className='conteudo'>
                <p className='nome-prato'>
                    <strong>
                        {props.nome}
                    </strong>
                </p>
                <p className='descricao-prato'>
                    {props.descricao}
                </p>
                <p className='preco-prato'>
                    R$: {props.preco}
                </p>
            </div>
        </div>
    )


}

export default Prato