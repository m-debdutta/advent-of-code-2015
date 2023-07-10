const crypto = require('node:crypto');

const getHashCode = (message) => {
  return crypto.createHash('md5').update(message).digest('hex');
}

const findNumericCode = (secretKey, desiredPrefix) => {
  let prefix = 0;
  let number = -1;
  while (prefix !== desiredPrefix) {
    number++;
    const message = secretKey + number;
    const hashCode = getHashCode(message);
    prefix = hashCode.slice(0, desiredPrefix.length);
  }

  return number;
}

exports.findNumericCode = findNumericCode;

