import Express from 'express';

const router = Express.Router();

router.get('/', function(req, res) {
  res.send("All systems operational")
});

export default router;