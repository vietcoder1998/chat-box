
const chat = document.querySelector('div#boxChat')
const data_ui = document.querySelector('ul#yMessages')
const room_rid_ui = document.querySelector('label#yRoomId')
let data = {
    rooms: {
       
        '1': {
            msgs: {
                '01': 'hello world',
                '02': 'hello world2',
                '03': 'hello world2',
                '04': 'hello world2',
            }
            
        },
        '2': {
            msgs: {
                '01': 'hello world',
                '02': 'hello world2',
                '03': 'hello world2',
                '04': 'hello world2',
            }
        },
        '3': {
            msgs: {
                '01': 'hello world',
                '02': 'hello world2',
                '03': 'hello world2',
                '04': 'hello world2',
            }
        },
        '4': {
            msgs: {
                '01': 'hello world',
                '02': 'hello world2',
                '03': 'hello world2',
                '04': 'hello world2',
            }
        },
    },
    user: {
        '01': 'ABC',
        '02': 'DEF',
    }
}

// event on chatbox
const sendMessageAction = function() {
    const content = document.querySelector('textarea#yMessageContent')
    sendMessage(room_rid_ui.innerHTML, content.value )
}

function findRoom(rId) {
    if (data.rooms[rId]) {
        const { msgs } = data.rooms[rId]
        const msgView = document.createElement('div')

        Object.entries(msgs).forEach(([key, value]) => {
            data_ui.innerHTML = ''
            const li = document.createElement('li')
            const content = document.createElement('label')
            const btn = document.createElement('button')
            btn.innerHTML = key
            content.innerHTML = value
            li.append(btn,':', content)
            msgView.append(li)
        })

        data_ui.append(msgView)

        console.log(data_ui.scrollHeight)
        data_ui.scrollTop = data_ui.scrollHeight
        room_rid_ui.innerHTML = rId

        return {
            code: 1,
            msg: 'success',
            data: data.rooms[rId]
        }
    } else {
        data_ui.innerHTML = ''
        data_ui.append('no Rooms receive')
        return {
            code: -1,
            msg: 'err',
            data: ''
        }
    }

   
}

function addUserToRoom(name, rId) {
    if (data.rooms[rId]) {
        Object.assign( data.rooms[rId].msgs, {[uId ?? new Date().getTime()]: content})
        findRoom(rId)
        return {
            code: 1,
            msg: 'success',
            data: data.rooms[rId]
        }
    } else {
        data_ui.innerHTML = ''
        data_ui.append('no Rooms receive')
        return {
            code: -1,
            msg: 'err',
            data: ''
        }
    }
 
}

function sendMessage(rId,content, uId) {
    if (data.rooms[rId]) {
        Object.assign( data.rooms[rId].msgs, {[uId ?? new Date().getTime()]: content})
        findRoom(rId)
        return {
            code: 1,
            msg: 'success',
            data: data.rooms[rId]
        }
    } else {
        data_ui.innerHTML = ''
        data_ui.append('no Rooms receive')
        return {
            code: -1,
            msg: 'err',
            data: ''
        }
    }

   
}

function addRoom(rId) {
    console.log(rId)
    if (rId in data.rooms) {
        return {
            code: -1,
            msg: 'exist ',
            data: data?.e
        }
    } else {
        data.rooms[rId] = {}
        return {
            code: 1,
            msg: 'success',
            data: data.rooms[rId]
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
// function addChildToChat(rId, context) {
//     const createBox = document.createElement('div')
//     createBox.rId = rId
//     createBox.innerHTML = context
//     chat.append(createBox)
// }