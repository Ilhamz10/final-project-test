const registerBtn = document.querySelector('#register')
const allInput = document.querySelectorAll('input')

const alertDiv = document.querySelector('.alert')

const users = JSON.parse(localStorage.getItem('users'))

registerBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const newUser = {
        name: allInput[0].value,
        password: allInput[2].value,
        phone: allInput[1].value,
    }

    let userAvaible = users.some((user) => user.name === newUser.name)

    if(userAvaible){
        alertDiv.style.transform = 'scale(1)'

        setTimeout(() => {
            alertDiv.style.transform = 'scale(0)'
        }, 2000);
    } else {
        users.push(newUser)
        localStorage.setItem('users', JSON.stringify(users))

        location.href = '../login/index.html'
    }
})