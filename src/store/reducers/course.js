const INITIAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules: [
        {
            id: 1,
            title: 'aaa',
            lessons: [
                {id: 1, title: 'aula 1'},
                {id: 2, title: 'aula 2'},
            ]
        },
        {
            id: 2,
            title: 'bbbb',
            lessons: [
                {id: 3, title: 'aula 3'},
                {id: 4, title: 'aula 4'},
            ]
        }
    ],
}

export default function course(state = INITIAL_STATE, action) {
    if (action.type === 'TOGGLE_LESSON') {
        return { ...state, activeLesson: action.lesson, activeModule: action.module }
    };
    return state
}