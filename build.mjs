import { cpSync, mkdirSync, copyFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';

const outputDirectory = resolve('dist');
mkdirSync(outputDirectory, { recursive: true });

const build = spawnSync(
  process.execPath,
  [resolve('node_modules/tailwindcss/lib/cli.js'), '-c', 'tailwind.config.js', '-i', 'src.css', '-o', 'styles.css', '--minify'],
  { stdio: 'inherit' },
);

if (build.status !== 0) {
  process.exit(build.status ?? 1);
}

copyFileSync('index.html', resolve(outputDirectory, 'index.html'));
copyFileSync('styles.css', resolve(outputDirectory, 'styles.css'));
cpSync('assets', resolve(outputDirectory, 'assets'), { recursive: true });