param(
  [Parameter(Position = 0)]
  [string]$Message = "Update Engineering Portfolio"
)

$ErrorActionPreference = 'Stop'

$sourceDir = "D:\Programming\Engineering Portfolio"
$targetRepo = "D:\Programming\Personal Portfolio Website"
$targetDir = Join-Path $targetRepo "Engineering Portfolio"

Write-Host "Syncing files to target repo..."
robocopy $sourceDir $targetDir /E /XD ".git" "node_modules" | Out-Null
$robocopyExit = $LASTEXITCODE
if ($robocopyExit -gt 7) {
  throw "Robocopy failed with exit code $robocopyExit"
}

Set-Location $targetRepo

Write-Host "Checking out updated-website..."
git checkout updated-website | Out-Null

git add "Engineering Portfolio"

$staged = git diff --cached --name-only
if (-not $staged) {
  Write-Host "No changes to commit."
  exit 0
}

Write-Host "Committing changes..."
git commit -m $Message

Write-Host "Pushing to origin/updated-website..."
git push origin updated-website

Write-Host "Done."
