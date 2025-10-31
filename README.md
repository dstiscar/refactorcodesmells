# Diego Tiscareno - Section 5 – Refactoring Code Smells in Practice

Every variable used in src/main.ts has a **Mysterious Name** and doesn't at all support the readability of the file. Using the comments documenting the code, I use **Rename Variable** and give new names that define their purpose in the code.

There are a few **Magic Strings** located in the decrement and reset button ids. I use **Replace Primitive with Object** and create new constants to refactor this.

There is an **Unnecessary Abstraction** with the start function that all it does is call another function. **Inile Function** is used.

All three event listeners contain the same **Duplicated Code**, causing a **Change Preventer**. Using **Extract Function**, I relocate this code into a new function.

There is a **Feature Envy** when updating the document title by combining a string and a number. **Replace Primitive to String** is used.
