#!/bin/bash
echo
echo "***************************************************"
echo "*                                                 *"
echo "*    This script will reindex your metadata by    *"
echo "*   running the command 'sudo mdutil -E -i on /'  *"
echo "*                                                 *"
echo "*         Indexing can take up to an hour         *"
echo "*     and Alfred won't work during this time.     *"
echo "*                                                 *"
echo "*    You can see the progress of the reindexing   *"
echo "*     by clicking on the spotlight magnifying     *"
echo "*     glass in the top right of the menu bar.     *"
echo "*                                                 *"
echo "***************************************************"
echo

read -p "Press enter to continue or close this window to cancel..."

sudo mdutil -E -i on /

echo
echo "In a few moments, OS X will start rebuilding your metadata index."
echo
read -p "Press any key to close Terminal and continue..."
