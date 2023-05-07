const fs = require( 'fs' );
const { Octokit } = require( '@octokit/core' );
const RSS = require( 'rss' );
const axios = require( 'axios' );

(async () => {
  try {
    const token   = process.env.GITHUB_TOKEN,
          repos   = process.env.REPOSITORY.split( '/' ),
          owner   = repos[0],
          repo    = repos[1],
          octokit = new Octokit({ auth: token });

    const { data: issues } = await octokit.request( `GET /repos/${owner}/${repo}/issues`, {
        owner,
        repo,
        per_page: 20,
    });

    /*
    const query = `
        query {
            repository(owner: "${owner}", name: "${repo}") {
                issues(first: 10, orderBy: {field: CREATED_AT, direction: DESC}) {
                    edges {
                        node {
                            title
                            number
                            createdAt
                            author {
                                login
                            }
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
    */

    /*
    issues.forEach( issue => {
        const node = issue.node;
        console.log(`${node.title} - ${node.createdAt} - ${node.author.login}`);
    });
    */

    const feed = new RSS({
        title: 'Kenshin\'s Blog',
        description: '独立开发者，全栈工程师，Chrome 扩展：简悦、简 Tab 以及 gnvm 作者。',
        feed_url: `https://${owner}.github.io/${repo}/rss.xml`,
        site_url: `https://github.com/${owner}/${repo}/issues`,
    });

    issues.forEach( issue => {
        feed.item({
            title: issue.title,
            description: issue.body,
            url: issue.html_url,
            author: issue.user.login,
            date: issue.created_at,
        });
    });

    fs.writeFileSync( './rss.xml', feed.xml({ indent: true }));

    } catch ( error ) {
        console.error( error );
        process.exit(1);
    }
})();