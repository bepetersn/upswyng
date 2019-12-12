![UpSwyng Logo](./upswyng.svg)

# UpSwyng

> UpSwyng is a mobile-ready, digital directory of
> resources to assist the unhoused and at-risk communities.
> Coming soon to Boulder, CO.

UpSwyng is a [Code For Boulder](https://www.codeforboulder.org) project.

## Project Organization

![Project Organization Diagram](./upswyng-project-layout.svg)
UpSwyng is a monorepo managed with Yarn Workspaces. It consists of five packages all in the `packages` directory: `upswyng-core` contains common libraries and utilities used across the other packages. `upswyng-types` holds the TypeScript definitions used across the project. `upswyng-server` is a [Sapper](https://sapper.svelte.dev/) application with two parts: an API server which provides data to the UpSwyng clients, and an admin web interface which uses the [Svelte](https://svelte.dev/) framework to create and modify data for the project. `upswyng-web` contains the [React](https://reactjs.org/) web client, and `upswyng-native` contains a work-in-progress [React Native](https://facebook.github.io/react-native/) cleint.

## Getting Started

Install the Yarn package manager by following the instructions at [https://yarnpkg.com/lang/en/docs/install](https://yarnpkg.com/lang/en/docs/install)

Next, clone the repo:

```
git clone https://github.com/CodeForBoulder/upswyng.git
```

`cd` into the repo:

```
cd upswyng
```

and install the project dependencies by running

```
yarn
```

### Development Ports

| server     | 3000 |
| ---------- | ---: |
| web client | 3001 |

### Next Steps

`cd` into the package you're interested in working on and run the appropriate script. Visit each package's `README` for more information about environment setup, scripts, and more.

## Contributing

### 1. Find an Issue Pending Development, Needing Help, or Asking a Question

Want to develop? All issues that have been approved for development, but have not been started will be labelled as **Status: Pending**.

We'd love your input on possible new features. Some issues aren't ready for development and won't have a status label. These issues may need more input before being approved and instead be labelled **Type: Help Wanted**.

Maybe you have the answer to someone's question. Look through any issues labelled with **Type: Help Wanted** and comment with your answer.

### 2. Work on an Issue

Once you have have found an issue you feel comfortable working on, request to work on the issue and we'll label the issue as **Status: In Progress** to make sure others don't work on it as well.

Then, create a new branch off the current `master`.

#### Branch Naming

All feature branch names will begin with a group-token, be proceed by a short name describing what the branch addresses, and finally end with the issue this branch addresses.

**`grouptoken/short-name-#issuenumber`**

Below are approved group-tokens:

- **`add/`** : identifies a branch that _adds_ a feature
- **`updt/`** : identifies a branch that _updates_ a feature. This is useful for features whose original feature branches were deleted, or have already been merged with the master branch.
- **`rmv/`** : identifies a branch that _removes_ a feature.
- **`exp/`** : identifies a branch that _experiments_ with creating a new feature without plans of implementation.

For example, if you wanted to create a branch that update the way a service was displayed which is described in issue 36, you could name the branch **`updt/service-display-#36`**.

### 3. Create a Pull Request (PR)

Once you believe your feature is ready for production, create a PR and reference what issue this addresses in the PR's description.

If there any updates requested, please make those updates on your local branch and re-push that branch to the repository.

If approved, project managers will handle merging and deploying.
