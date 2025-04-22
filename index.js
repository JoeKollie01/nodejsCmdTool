#!/usr/bin/env node

import chokidar from 'chokidar';


chokidar.watch('.')
    .on('add', () => console.log('STARTING USER PROGRAM'))
    .on('change', () => console.log('FILE CHANGED'))
    .on('unlink', () => console.log('FILE UNLINKED'));