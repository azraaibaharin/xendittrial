#!/bin/bash

echo "Running app..."
/bin/bash run-app.sh
echo "Running elasticsearch..."
/bin/bash run-es.sh
echo "Running kibana..."
/bin/bash run-kib.sh