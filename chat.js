const chat = document.querySelector('div#boxChat')

let data = {
    rooms: {
        '1': {
            '01': 'hello world',
            '02': 'hello world2',
            '03': 'hello world2',
            '04': 'hello world2',
        },
        '2': {
            '01': 'hello world',
            '02': 'hello world2',
            '03': 'hello world2',
            '04': 'hello world2',
        },
        '3': {
            '01': 'hello world',
            '02': 'hello world2',
            '03': 'hello world2',
            '04': 'hello world2',
        },
        '4': {
            '01': 'hello world',
            '02': 'hello world2',
            '03': 'hello world2',
            '04': 'hello world2',
        },
    },
    user: {
        '1': 'ABC',
        '1': 'DEF',
    }
}

function findRoom(id) {
    if (data.rooms[id]) {
        return {
            code: 1,
            msg: 'success',
            data: data.rooms[id]
        }
    }

    return {
        code: -1,
        msg: 'err',
        data: ''
    }
}

function addRoom(id) {
    console.log(id)
    if (id in data.rooms) {
        return {
            code: -1,
            msg: 'exist ',
            data: data?.e
        }
    } else {
        data.rooms[id] = {}
        return {
            code: 1,
            msg: 'success',
            data: data.rooms[id]
        }
    }
}

document.addEventListener('change', e => {
    let data

    switch (e.target.id) {
        case 'find':
            data =  findRoom(e.target.value)
            console.log(data)
            break;
        case 'add':
            data =  addRoom(e.target.value)
            console.log(data)
            break;
    
        default:
            break;
    }
})

// addChildToChat('createBox', 'Message')

// // add child
// function addChildToChat(id, context) {
//     const createBox = document.createElement('div')
//     createBox.id = id
//     createBox.innerHTML = context
//     chat.append(createBox)
// }