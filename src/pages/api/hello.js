export default function handler(req, res) {
  if (req.method === 'POST') {
    res.status(200).json({ msg: 'OK' });
  } else {
    res.status(200).json({ name: 'Shake and Bake' });
  }
}
