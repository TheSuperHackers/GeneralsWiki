# Duplicate File Removal Tool - **AssetCull**

## **What is it?**

The **AssetCull** tool is a program that removes duplicate files from a source directory by comparing two directories.
If an identical file is found in both directories, it is deleted from the source directory, and a batch file (Batch
file) is generated containing the deletion commands, allowing you to easily remove the duplicate files later.

This tool is part of a suite of utilities that come with the source code for **C&C Generals & Zero Hour**.

---

## Usage Instructions

> [!WARNING]
> The **AssetCull** tool will **immediately delete duplicate files** from the source directory **during its execution**.
> The batch file that is created contains **deletion commands** that mirror the files already deleted by the tool.
> Therefore, **there is no need to run the batch file to delete the files again**, as the files are already removed from
> the source directory.
> Use the generated batch file only if you want to replicate the deletions or run the process again in the future.

1. **Running the program**:
    - Open the Command Prompt or Terminal.
    - Use the following command, replacing the directories and batch file name as needed:

      ```bash
      assetcull <dir1> <dir2> <bat-file>
      ```

   For example, if your source directory is `C:\Assets\dir1`, the target directory is `C:\Assets\dir2`, and you want to
   store the deletion commands in `remove_duplicates.bat`, you would run:

     ```bash
     assetcull C:\Assets\dir1 C:\Assets\dir2 remove_duplicates.bat
     ```

2. **Result**:
    - The program will scan the directories, find duplicate files, and delete them from the source directory.
    - The `remove_duplicates.bat` file will document all deleted files and include deletion commands that you can use if
      you want to run the deletions again in the future.

3. **Review the Batch File**:
    - Open the generated Batch file (`remove_duplicates.bat`) and verify that it contains the correct deletion commands
      for the files.

4. **Running the Batch File**:
    - If you wish to delete the duplicate files, you can run the Batch file (`remove_duplicates.bat`), which will
      contain all the necessary commands to delete the files.
