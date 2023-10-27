# Extraction errors in the database

You can check whether or not extraction errors affect the health of the CodeQL database created.

The CodeQL team constantly works on critical extraction errors to make sure that all source files can be scanned. However, the CodeQL extractors do occasionally generate errors during database creation. CodeQL provides information about extraction errors and warnings generated during database creation in a log file.
The extraction diagnostics information gives an indication of overall database health. Most extractor errors do not significantly impact the analysis. A small number of extractor errors is healthy and typically indicates a good state of analysis.

However, if you see extractor errors in the overwhelming majority of files that were compiled during database creation, you should look into the errors in more detail to try to understand why some source files weren't extracted properly.
