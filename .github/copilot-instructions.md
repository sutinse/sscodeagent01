# sscodeagent01 Repository Instructions

**ALWAYS follow these instructions first and fallback to additional search and context gathering only if the information in the instructions is incomplete or found to be in error.**

## Repository Overview
This is currently a minimal repository containing only a README.md file. The repository serves as a starting point for development and currently has no build system, dependencies, tests, or source code.

## Working Effectively

### Initial Repository Setup
- Repository location: `/home/runner/work/sscodeagent01/sscodeagent01`
- Main branch: `copilot/fix-3` (current working branch)
- Remote: `origin` pointing to `https://github.com/sutinse/sscodeagent01`

### Current Repository State
- **NO BUILD REQUIRED**: There is no code to build yet
- **NO TESTS TO RUN**: No test framework or tests exist
- **NO DEPENDENCIES**: No package.json, requirements.txt, or other dependency files
- **NO BUILD SCRIPTS**: No Makefile, build.sh, or other build automation

### Basic Git Operations (VALIDATED)
- Check repository status: `git status`
- View commit history: `git log --oneline -10`
- Check branches: `git branch -a`
- Check remotes: `git remote -v`

### Repository Structure
```
.
├── README.md (15 bytes, contains "# sscodeagent01")
├── .git/ (Git repository metadata)
└── .github/
    └── copilot-instructions.md (this file)
```

## Development Guidelines

### When Adding New Code
- **FIRST**: Determine the technology stack and create appropriate configuration files
- **ALWAYS**: Add build and test instructions to this file after implementing them
- **CRITICAL**: Validate all new build commands and document exact timing expectations
- **NEVER CANCEL**: If adding build processes, always include timeout warnings and expected durations

### Common Commands (Current State)
- `ls -la` - List repository contents
- `cat README.md` - View the minimal README
- `pwd` - Confirm you're in `/home/runner/work/sscodeagent01/sscodeagent01`

### Validation Requirements
Since there is no application to run currently:
- **ALWAYS** verify git operations work correctly
- **ALWAYS** check that any new files you create are properly added to git
- **FUTURE**: When code is added, implement proper validation scenarios in this file

### Expected Development Pattern
1. Determine technology stack (Node.js, Python, Java, etc.)
2. Add appropriate configuration files (package.json, requirements.txt, etc.)
3. Implement build system
4. Add test framework
5. **CRITICAL**: Update these instructions with:
   - Exact build commands with timing expectations
   - Test commands with "NEVER CANCEL" warnings if they take >2 minutes
   - Validation scenarios for manual testing
   - Any special setup requirements

## Critical Reminders for Future Development
- **MEASURE BUILD TIMES**: When adding build processes, time them and add 50% buffer for timeout recommendations
- **DOCUMENT TIMEOUTS**: Include explicit "NEVER CANCEL" warnings for commands taking >2 minutes
- **VALIDATE EVERYTHING**: Every command in these instructions must be tested and work reliably
- **BE EXHAUSTIVE**: Instructions should enable copy-paste workflows that work every time

## Current Limitations
- No code to compile or execute
- No test suite to run
- No package management system
- No CI/CD pipeline (no .github/workflows/ directory)
- No linting or formatting tools configured

## Next Steps for Developers
1. Choose and implement a technology stack
2. Add build configuration files
3. Implement a basic "Hello World" application
4. Add test framework and at least one test
5. **IMMEDIATELY** update these instructions with all new commands and timing expectations
6. Add CI/CD pipeline if needed
7. Set up linting and formatting tools

**Remember**: This file must be updated every time new build processes, tests, or development workflows are added to ensure future developers can work effectively with the codebase.