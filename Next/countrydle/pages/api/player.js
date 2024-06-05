export default async function handler(req, res) {
    const body = JSON.parse(req.body);
    const url = 'http://localhost:3002/player/me'
    const option = {
        method: "GET",
        headers: {Authorization: `Bearer ${body.token}`}

    }
    const response = await fetch(url, option);
    const data = await response.json();

    res.status(200).json(data);
  }