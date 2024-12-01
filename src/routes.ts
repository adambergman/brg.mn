import express from 'express';

const router = express.Router();

const socials: Record<string, string> = {
  linkedin: 'https://www.linkedin.com/in/adamtbergman/',
  github: 'https://github.com/adambergman',
  bluesky: 'https://bsky.app/profile/brg.mn',
  nmods: 'https://niagaramodules.com',
  reflow: 'https://reflo.ws',
};

router.get(/\/li/, async (req, res) => {
  res.redirect(301, socials.linkedin);
});

router.get('/:key(gh|github|git|code|codes)/:repo', async (req, res) => {
  res.redirect(301, `${socials.github}/${req.params.repo}`);
});

router.get('/:key(gh|github|git|code|codes)', async (req, res) => {
  res.redirect(301, socials.github);
});

router.get(/\/(work|nmods|niagaramods)/, async (req, res) => {
  res.redirect(301, socials.nmods);
});

router.get(/\/(reflow)/, async (req, res) => {
  res.redirect(301, socials.reflow);
});

// Redirect to Blue Sky by default
router.get('*', async (req, res) => {
  res.redirect(301, socials.bluesky);
});

export default router;
