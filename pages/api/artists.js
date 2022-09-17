import mockArtistsResponse from './mocks/mockArtistsResponse';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(mockArtistsResponse);
  }
}
