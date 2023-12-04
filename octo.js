const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({auth: "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"});

const repos = octokit.rest.repos.get({
    owner: "United-Airlines-Org",
    repo: "cjq.infra"
});

console.log(repos);