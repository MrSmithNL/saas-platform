#!/bin/bash
# Create a new business module from the golden path template.
# Usage: pnpm create:module <module-name>
#
# This creates a module at modules/<module-name>/ with:
# - module-manifest.json (self-description)
# - package.json (@saas-platform/module-<name>)
# - Standard src/ structure (api, events, ui, features)
# - README.md

set -euo pipefail

MODULE_NAME="${1:?Usage: pnpm create:module <module-name>}"
MODULE_DIR="modules/${MODULE_NAME}"
TEMPLATE_DIR="modules/_template"

# Validate name (kebab-case only)
if ! echo "$MODULE_NAME" | grep -qE '^[a-z][a-z0-9-]*$'; then
  echo "Error: Module name must be kebab-case (e.g., 'crm', 'marketing-tools')"
  exit 1
fi

# Check template exists
if [ ! -d "$TEMPLATE_DIR" ]; then
  echo "Error: Template directory not found at $TEMPLATE_DIR"
  exit 1
fi

# Check module doesn't already exist
if [ -d "$MODULE_DIR" ]; then
  echo "Error: Module already exists at $MODULE_DIR"
  exit 1
fi

echo "Creating module: $MODULE_NAME"

# Copy template
cp -r "$TEMPLATE_DIR" "$MODULE_DIR"

# Replace template placeholders
if [[ "$(uname)" == "Darwin" ]]; then
  # macOS sed
  find "$MODULE_DIR" -type f -name "*.json" -o -name "*.ts" -o -name "*.md" | while read -r file; do
    sed -i '' "s/template/${MODULE_NAME}/g" "$file"
    sed -i '' "s/Template/${MODULE_NAME^}/g" "$file"
  done
else
  # Linux sed
  find "$MODULE_DIR" -type f -name "*.json" -o -name "*.ts" -o -name "*.md" | while read -r file; do
    sed -i "s/template/${MODULE_NAME}/g" "$file"
    sed -i "s/Template/${MODULE_NAME^}/g" "$file"
  done
fi

echo ""
echo "Module created at: $MODULE_DIR"
echo ""
echo "Next steps:"
echo "  1. Edit $MODULE_DIR/module-manifest.json with your module's details"
echo "  2. Edit $MODULE_DIR/package.json — update name and dependencies"
echo "  3. Define events in src/events/"
echo "  4. Define API in src/api/"
echo "  5. Run: pnpm install"
echo "  6. Add module to vertical configs (enabledModules in definePlatformConfig)"
echo ""
