export default async function handler(req, res) {
    const body = JSON.parse(req.body);
    const url = 'http://localhost:3002/auth/signin'
    const option = {
        method: "POST",
        body: JSON.stringify({
            email: body.email,
            password: body.password
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
    }
    const response = await fetch(url, option);
    const data = await response.json();
    res.status(200).json(data);
  }