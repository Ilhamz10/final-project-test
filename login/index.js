const localusers = [
    {
        name: 'u1',
        password: 'p1'
    },
]

if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(localusers))
}

const loginBtn = document.querySelector('#login')
const allInput = document.querySelectorAll('input')
const alertDiv = document.querySelector('.alert')
const form = document.querySelector('form')

loginBtn.addEventListener('click', (e) => {
    e.preventDefault()

    form.classList.add('was-validated')

    const users = JSON.parse(localStorage.getItem('users'))

    let userAvaible = users.some((user) => user.name === allInput[0].value && user.password === allInput[1].value)

    if (userAvaible) {
        location.href = '../main/main.html'
        localStorage.setItem('currentUser', allInput[0].value)
    } else {
        alertDiv.style.transform = 'scale(1)'
        setTimeout(() => {
            alertDiv.style.transform = 'scale(0)'
        }, 2000);
    }
})