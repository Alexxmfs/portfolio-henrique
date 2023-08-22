import React from 'react'

const Info = () => {
  return (
    <div className='about__info grid'>
        <div className='about__box'>
            <i class="bx bx-award about__icon"></i>

            <h3 className='about__title'>Experiência</h3>
            <span className='about__subtitle'>2 Anos Estudando</span>
        </div>

        <div className='about__box'>
            <i class="bx bx-briefcase-alt about__icon"></i>

            <h3 className='about__title'>Completou</h3>
            <span className='about__subtitle'>5+ Projetos</span>
        </div>

        <div className='about__box'>
            <i class="bx bx-support about__icon"></i>

            <h3 className='about__title'>Inglês</h3>
            <span className='about__subtitle'>Intermediário</span>
        </div>
    </div>
  )
}

export default Info