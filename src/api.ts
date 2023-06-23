import https from "https";

export function getProfilePage(username: string) {
  return new Promise<string>((resolve, reject) => {
    https.get(`https://github.com/${username}`, (res) => {
      // reject on bad status
      if (res.statusCode < 200 || res.statusCode >= 300) {
        return reject(new Error('statusCode=' + res.statusCode));
      }
      // cumulate data
      const bodyString = [];
      res.on('data', function (chunk) {
        bodyString.push(chunk);
      });
      // resolve on end
      res.on('end', function () {
        try {
          const body = Buffer.concat(bodyString).toString();
          resolve(body);
        } catch (e) {
          reject(e);
        }
      });
    });
  })
}

export function getProfileForSpecificYear(url: string) {
  return new Promise<string>((resolve, reject) => {
    https.get(`https://github.com/${url}`, (res) => {
      // reject on bad status
      if (res.statusCode < 200 || res.statusCode >= 300) {
        return reject(new Error('statusCode=' + res.statusCode));
      }
      // cumulate data
      const bodyString = [];
      res.on('data', function (chunk) {
        bodyString.push(chunk);
      });
      // resolve on end
      res.on('end', function () {
        try {
          const body = Buffer.concat(bodyString).toString();
          resolve(body);
        } catch (e) {
          reject(e);
        }
      });
    });
  });
}
