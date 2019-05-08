#!/usr/bin/env sh

set -e

echo "///////////// ENV vars //////////// "
env | grep ACCOUNTING

## reload k8 env vars:
cat ${SITE_ROOT}/static.config.js.env | envsubst > ${SITE_ROOT}/static.config.js

# nginx security
if [ "${ACCOUNTING_DISABLE_AUTH}" == "true"  ]; then
    echo "Disable auth"
	cat /etc/nginx/conf.d/default.conf | grep -v auth_basic  > /tmp/default.conf
	rm /etc/nginx/conf.d/default.conf
	mv /tmp/default.conf /etc/nginx/conf.d/default.conf
fi

echo "Start: $@"

exec "$@"
