import { users } from './data.js'

function showUsers(users) {
    const totalUsers = document.getElementById("total-users")
    totalUsers.append(users.length)

    const contactList = document.querySelector(".contact-list")

    users.map((user) => {
        const contactItem = document.createElement('li')
        contactItem.className = 'contact-item cf'
        contactList.insertAdjacentElement('beforeend', contactItem)

        const divContactDetails = document.createElement('div')
        divContactDetails.className = 'contact-details'
        contactItem.insertAdjacentElement('afterbegin', divContactDetails)

        const userImage = document.createElement('img')
        userImage.className = 'avatar'
        userImage.src = user.image
        divContactDetails.insertAdjacentElement('afterbegin', userImage)

        const userName = document.createElement('h3')
        userName.className = 'contact-name'
        userName.innerText = user.name
        divContactDetails.insertAdjacentElement('beforeend', userName)

        const userEmail = document.createElement('span')
        userEmail.className = 'email'
        userEmail.innerText = `${user.name}@example.com`.replace(/ /g, ".")
        console.log(userEmail.innerText)
        divContactDetails.insertAdjacentElement('beforeend', userEmail)

        const divJoinedDate = document.createElement('div')
        divJoinedDate.className = 'joined-details'
        contactItem.insertAdjacentElement('beforeend', divJoinedDate)

        const userJoinDate = document.createElement('span')
        userJoinDate.className = 'date'
        userJoinDate.innerText = user.joined
        divJoinedDate.insertAdjacentElement('beforeend', userJoinDate)


        console.log(userJoinDate)
    })
}

showUsers(users)
