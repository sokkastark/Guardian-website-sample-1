@echo off
echo ========================================================
echo Reverting Guardian HomePage to Baseline...
echo ========================================================
git checkout homepage-baseline -- src/pages/HomePage.jsx src/components/sections/ src/components/journey/
echo.
echo [SUCCESS] HomePage has been restored to the exact baseline state!
echo.
pause
