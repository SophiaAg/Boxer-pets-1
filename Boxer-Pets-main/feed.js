// SIDEBAR

const menuItems = document.querySelectorAll('.menu-item');

//mensagens

const messagesnotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.messages');
const messageSearch = document.querySelector('#message-search');

// Thema
const theme = document.querySelector('#theme');
const themeModal = document.querySelector ('.customize-theme');
const fontSizes = document.querySelectorAll ('.choose-size');
var root = document.querySelector(':root');

//remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').
            style.display = 'none';

        } else {
            document.querySelector('.notifications-popup').
            style.display = 'block';
            document.querySelector('#notifications .notification-count')
            .style.display = 'none';
        }
    })
})


//messages
//buscar chats


//Barra de pesquisa


//mensagem com luizinha
messagesnotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesnotification.querySelector('.notification-count').style.display =
    'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 2000)
})


//Temas arg

//open modal
const openThemeModal = () => {
    themeModal.style.display = 'grid' ;
}

//fechar modal part 2
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none'; 
    }
}


//fecha modal

themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click',  openThemeModal);
