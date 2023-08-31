module.exports = {
    apps: [
      {
        name: 'jukebox',
        script: 'rollup',
        args: ['-c'],
        watch: true,
        autorestart: true,
      },
    ],
  };
