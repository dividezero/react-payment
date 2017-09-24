export function doPost(url, obj, callback) {
  fetch("http://neat-mvp-api.herokuapp.com/" + url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj)
  }).then(function (data) {
    // Here you get the data to modify as you please
    callback(data);
    return data;
  }).catch(function (error) {
    // If there is any error you will catch them here
    console.error(error)
    return null;
  });
}

export function doGet(url, callback) {
  fetch("http://neat-mvp-api.herokuapp.com/" + url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(function (data) {
    // Here you get the data to modify as you please
    console.info(data)
    callback(data)
    return data;
  }).catch(function (error) {
    // If there is any error you will catch them here
    console.error(error)
    return null;
  });
}

export function authenticateUser(email, pass) {
  let result = doPost('v1/auth', {
    email: email,
    password: pass,
  });
  if (result.id)
    return result;
  else
    return null;
}

export function getUser(userId, callback) {
  return doGet('/v1/users/' + userId, callback);
}

export function getAllUsers(callback) {
  return doGet('v1/users', callback);
}

export function postCreateUser(email, password, telephone_number, first_name, last_name, callback) {
  return doPost('/v1/users', {
    email:email,
    password:password,
    telephone_number:telephone_number,
    first_name:first_name,
    last_name:last_name
  }, callback);
}

export function getAccount(userId, accountId, callback) {
  return doGet('/v1/users/' + userId + '/accounts/' + accountId, callback);
}

export function getUserAccounts(userId, callback) {
  return doGet('/v1/users/' + userId + '/accounts', callback);
}

export function getAccountPayments(accountId, callback) {
  return doGet('/v1/accounts/' + accountId + '/payments', callback);
}

export function postCreatePayment(account_id, amount, currency, description, callback) {
  let result = doPost('v1/payments', {
    account_id: account_id,
    amount: amount,
    currency: currency,
    description: description,
  }, callback);
}

export function postTopupAccount(account_id, amount, callback) {
  doPost('/v1/accounts/' + account_id + '/accounts', {
    amount: amount,
  }, callback);
}


export function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}
