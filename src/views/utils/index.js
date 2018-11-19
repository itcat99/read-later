export const getFavicon = url =>
  new Promise((resolve, reject) => {
    const domain = url.replace(/^(https|http):\/\//, "").split("/")[0];
    const req = new XMLHttpRequest();
    req.onload = result => {
      const { target } = result;
      if (!target.response) reject("not found");

      const icons = JSON.parse(target.response).icons;

      resolve(icons);
    };

    req.open("get", `https://favicongrabber.com/api/grab/${domain}`);
    req.send();
  });
