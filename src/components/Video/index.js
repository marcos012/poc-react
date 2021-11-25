import React from 'react'

import { connect } from 'react-redux';

const Video = ({ activeLesson, activeModule}) => {
    return (
        <div>
            <span>Modulo {activeModule.title}</span>
            <span>Aula {activeLesson.title }</span>
        </div>
    )
}

export default connect(state => ({
    activeLesson: state.course.activeLesson,
    activeModule: state.course.activeModule,
}))(Video);
