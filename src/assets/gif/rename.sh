#!/usr/bin/env bash
NUM=1
INDEX=30
for i in ./*.gif ; do
  echo $i
  echo "$INDEX.gif"
  echo $INDEX
  INDEX=$(($INDEX+$NUM))
  mv "$i" "$INDEX.gif";
done
