#!/bin/bash

set -e
set -u

ZIPFILE=pokemap-$(date +%Y-%m-%d).zip

rm -rf /tmp/pokemap-build/
mkdir -p /tmp/pokemap-build/{pokemap,test}

rsync -av --exclude=.git --exclude=test ./ /tmp/pokemap-build/pokemap/

pushd /tmp/pokemap-build/
  pushd /tmp/pokemap-build/pokemap/
    rm -f ZIP.bash
    rm -rf utils/

    pushd public/
      rm -f Dockerfile Gruntfile.js Procfile app.json package.json requirements.txt runserver.py
      rm -rf pogom/ config/ templates/ Easy\ Setup/ node_modules/
    popd

  popd

  zip -r "$ZIPFILE" pokemap/
popd

unzip /tmp/pokemap-build/"$ZIPFILE" -d /tmp/pokemap-build/test/
