.PHONY: clean

.DEFAULT_GOAL := all

LAYERS_FOLDER=layers
CHROMIUM_VERSION=143.0.4
BUILD_FOLDER=.chromium-layer-build

all: ${LAYERS_FOLDER}/chromium-v${CHROMIUM_VERSION}.zip

${LAYERS_FOLDER}/chromium-v${CHROMIUM_VERSION}.zip:
	@echo 'Building chromium layer...' \
	&& rm -rf $(BUILD_FOLDER) \
	&& mkdir -p $(BUILD_FOLDER)/nodejs \
	&& npm install --prefix $(BUILD_FOLDER)/nodejs @sparticuz/chromium@$(CHROMIUM_VERSION) --omit=dev --omit=optional --no-package-lock --fund=false --bin-links=false \
	&& mkdir -p ${LAYERS_FOLDER} \
	&& cd $(BUILD_FOLDER) \
	&& zip -9 --recurse-paths ../${LAYERS_FOLDER}/chromium-v$(CHROMIUM_VERSION).zip nodejs \
	&& cd ../ \
	&& rm -rf $(BUILD_FOLDER) \
	&& echo 'Done'

clean:
	rm -rf layers && rm -rf chromium-aws-lambda && rm -rf $(BUILD_FOLDER)
