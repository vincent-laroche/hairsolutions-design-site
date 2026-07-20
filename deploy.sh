#!/bin/bash
# Sync the design site from Amboras Storefront and publish to GitHub Pages
set -e
SRC="/Users/vMac/01_projects/Amboras Storefront/design/wireframes/"
cd "$(dirname "$0")"
rsync -a --delete --exclude .git --exclude deploy.sh --exclude .nojekyll --exclude .git "$SRC" .
git add -A
git commit -m "Update design site $(date +%Y-%m-%d\ %H:%M)" || echo "Nothing to commit"
git push origin main
echo "Live at: https://vincent-laroche.github.io/hairsolutions-design-site/"
