import React from 'react'
import { Fiche }  from '../fiche/fiche.component'
import './fiche-list-styles.css'

export const FicheList = props => {

    return <div className='fiche-list'>
  
      {
  
        props.monstres.slice(0, props.nbCard).map(monstre => (
  
            <Fiche key={monstre.id} monstre={monstre} idSet={props.idSet}/>
  
        ))
  
      }
  
    </div>
  
}

