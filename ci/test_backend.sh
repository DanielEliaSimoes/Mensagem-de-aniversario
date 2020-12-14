#!/bin/bash
export COMPOSE_PROJECT_NAME=exemplo_djavue2_${CI_COMMIT_SHA}
docker-compose -f docker/compose/test.yml run exemplo_djavue2 unittests.sh
exitcode=$?
docker-compose -f docker/compose/test.yml down
exit $exitcode