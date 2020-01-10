import $ from 'jquery';

let user = {
    name: 'Angelo',
    avatar: 'angelo.jpg'
};

let promise = $.post(
    'http://131515149131.mockapi.io/api/v1/users', user
);

promise.then(
    data => console.log('success: ', data),
    error => console.log('error: ', error)
);
