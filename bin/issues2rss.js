const fs          = require( 'fs' ),
      { Octokit } = require( '@octokit/core' ),
      axios       = require( 'axios' ),
      RSS         = require( 'rss' );

(async () => {
  try {
    const token   = process.env.GITHUB_TOKEN,
          repos   = process.env.REPOSITORY.split( '/' ),
          owner   = repos[0],
          repo    = repos[1],
          octokit = new Octokit({ auth: token });

    /*
    const { data: issues } = await octokit.request( `GET /repos/${owner}/${repo}/issues`, {
        owner,
        repo,
        per_page: 20,
    });
    */

    const query = `
        query {
            repository(owner: "${owner}", name: "${repo}") {
                issues(first: 10, orderBy: { field: CREATED_AT, direction: DESC }) {
                    edges {
                        node {
                            title
                            number
                            createdAt
                            author {
                                login
                            }
                            bodyHTML
                            labels(first: 10) {
                                edges {
                                    node {
                                        name
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }`;

    const response = await axios.post( 'https://api.github.com/graphql', { query }, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }
    );

    const issues = response.data.data.repository.issues.edges;

    const feed = new RSS({
        title: process.env.TITLE,
        description: process.env.DESCRIPTION,
        feed_url: process.env.FEED_URL,
        site_url: process.env.SITE_URL,
    });

    issues.forEach( issue => {
        feed.item({
            title: issue.title,
            description: issue.body,
            url: process.env.SITE_URL + '/#/posts/' + issue.number,
            author: issue.author.login,
            date: issue.created_at,
        });
    });

    fs.writeFileSync( './rss.xml', feed.xml({ indent: true }));

    } catch ( error ) {
        console.error( error );
        process.exit(1);
    }
})();