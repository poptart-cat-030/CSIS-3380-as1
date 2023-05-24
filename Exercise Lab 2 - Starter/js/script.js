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
        divContactDetails.insertAdjacentElement('beforeend', userEmail)

        const divJoinedDate = document.createElement('div')
        divJoinedDate.className = 'joined-details'
        contactItem.insertAdjacentElement('beforeend', divJoinedDate)

        const userJoinDate = document.createElement('span')
        userJoinDate.className = 'date'
        userJoinDate.innerText = user.joined
        divJoinedDate.insertAdjacentElement('beforeend', userJoinDate)
    })
}

showUsers(users);

// pagination

const paginationNumbers = document.getElementById("pagination-numbers");
const paginatedList = document.getElementById("paginated-list");
const listItems = paginatedList.querySelectorAll("li");

const nextButton = document.getElementById("next-page-button");
const prevButton = document.getElementById("prev-page-button");

const paginationLimit = 10;
const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage = 1;

const disableButton = (button) => {
    button.classList.add("disabled");
    button.setAttribute("disabled", true);
};

const enableButton = (button) => {
    button.classList.remove("disabled");
    button.removeAttribute("disabled");
};

const handlePageButtonsStatus = () => {
    if (currentPage === 1) {
        disableButton(prevButton);
    }
    else {
        enableButton(prevButton);
    }

    if (pageCount === currentPage) {
        disableButton(nextButton);
    }
    else {
        enableButton(nextButton);
    }
};

const handleActivePageNumber = () => {
    document.querySelectorAll(".pagination-number").forEach((button) => {
        button.classList.remove("active");

        const pageIndex = Number(button.getAttribute("page-index"));
        if (pageIndex == currentPage) {
            button.classList.add("active");
        }
    });
};

const appendPageNumber = (index) => {
    const pageNumber = document.createElement("button");
    pageNumber.className = "pagination-number";
    pageNumber.innerHTML = index;
    pageNumber.setAttribute("page-index", index);
    pageNumber.setAttribute("aria-label", "Page " + index);

    paginationNumbers.appendChild(pageNumber);
};

const getPaginationNumbers = () => {
    for (let i = 1; i <= pageCount; i++) {
        appendPageNumber(i);
    }
};

const setCurrentPage = (pageNum) => {
    currentPage = pageNum;

    handleActivePageNumber();
    handlePageButtonsStatus();

    const prevRange = (pageNum - 1) * paginationLimit;
    const currRange = pageNum * paginationLimit;

    listItems.forEach((item, index) => {
        item.classList.add("hidden");
        if (index >= prevRange && index < currRange) {
            item.classList.remove("hidden");
        }
    });
};

window.addEventListener("load", () => {
    getPaginationNumbers();
    setCurrentPage(1);

    prevButton.addEventListener("click", () => {
        setCurrentPage(currentPage - 1);
    });
    nextButton.addEventListener("click", () => {
        setCurrentPage(currentPage + 1);
    });

    document.querySelectorAll(".pagination-number").forEach((button) => {
        const pageIndex = Number(button.getAttribute("page-index"));

        if (pageIndex) {
            button.addEventListener("click", () => {
                setCurrentPage(pageIndex);
            });
        }
    });
});


