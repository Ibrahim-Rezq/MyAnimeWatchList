const anime = [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    anime.push(req.body.anime);
    res.status(200).json({ msg: 'Ok' });
  } else {
    res.status(200).json({ anime });
  }
}
