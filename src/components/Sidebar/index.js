import React from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CourseActions from '../../store/ducks/course/actions'

const Sidebar = ({ modules, toggleLesson }) => {
    return (
        <div>
            {modules.map(module => (
                <div key={module.id}>
                    <span>{module.title}</span>
                    <ul>
                        {module.lessons.map(lesson => (
                            <li key={lesson.id}>
                                {lesson.title}
                                <button onClick={() => toggleLesson(module, lesson)}>Selecionar</button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

const mapStateToProps = state => ({
    modules: state.course.modules,
});

const mapDispatchToProps = dispatch => bindActionCreators(CourseActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);