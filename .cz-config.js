module.exports = {
  types: [
    {
      value: "build",
      name: "build:    Build"
    },
    {
      value: "breaking",
      name: "breaking: Breaking change"
    },
    {
      value: "change",
      name: "change:   Change"
    },
    {
      value: "ci",
      name: "ci:       CI"
    },
    {
      value: "docs",
      name: "docs:     Documentation only changes"
    },
    {
      value: "feat",
      name: "feat:     A new feature"
    },
    {
      value: "fix",
      name: "fix:      A bug fix"
    },
    {
      value: "perf",
      name: "perf:     A code change that improves performance"
    },
    {
      value: "refactor",
      name:
        "refactor: A code change that neither fixes a bug nor adds a feature"
    },
    {
      value: "release",
      name: "release:  Release"
    },
    {
      value: "revert",
      name: "revert:   Revert to a commit"
    },
    {
      value: "style",
      name:
        "style:    Changes that do not affect the meaning of the code\n            (white-space, formatting, missing semi-colons, etc)"
    },
    {
      value: "test",
      name: "test:     Adding missing tests"
    }
  ],

  scopes: [
    {
      name: "css"
    },
    {
      name: "html"
    },
    {
      name: "js"
    },
    {
      name: "npm"
    },
    {
      name: "ui"
    }
  ],

  allowTicketNumber: false,
  // isTicketNumberRequired: false,
  // ticketNumberPrefix: "TICKET-",
  // ticketNumberRegExp: "\\d{1,5}",

  // it needs to match the value for field type. Eg.: "fix"
  /*
  scopeOverrides: {
    fix: [

      {name: "merge"},
      {name: "style"},
      {name: "e2eTest"},
      {name: "unitTest"}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: "Select the type of change that you're committing:",
    scope: "\nDenote the SCOPE of this change (optional):",
    // used if allowCustomScopes is true
    customScope: "Denote the SCOPE of this change:",
    subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
    body:
      'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: "List any NOTES (optional):\n",
    footer:
      "List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n",
    confirmCommit: "Are you sure you want to proceed with the commit above?"
  },

  allowCustomScopes: true,
  breakingPrefix: "NOTES:",
  allowBreakingChanges: ["break", "change", "feat", "fix"],
  // skip any questions you want
  skipQuestions: ["body", "footer"],

  // limit subject length
  subjectLimit: 72
  // breaklineChar: "|", // It is supported for fields body and footer.
  // footerPrefix : "ISSUES CLOSED:", // default value
};
