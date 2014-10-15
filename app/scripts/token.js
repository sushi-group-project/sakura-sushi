var token = 'adad0387b43c45c7c46d67ca8089132d';

$.ajaxSetup({
  headers: {
    "Authorization": "token " + token
  }
});
