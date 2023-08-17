export default function Paginacion(props){


   

    const getPaginas = () =>{
        const resultados = [];
        for(var i = 0; i< props.total; i++){
            let pagina = i+1;
            resultados.push(
            <a onClick={() => props.onChange(pagina)} 
                className={props.pagina === pagina ? 'active' : ''}>{pagina}
            </a>
            );
        }
        return resultados;
    }

    return(
        <div className="topbar-filter">
            <div className="pagination2">
              <span>Página {props.pagina} de {props.total}:</span>  
              
              {getPaginas()}
              
            </div>
        </div>
    );
}