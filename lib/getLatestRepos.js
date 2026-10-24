import axios from "axios";

const normalize = (repo, source) => ({
  id: `${source}-${repo.id}`,
  name: repo.name,
  description: repo.description || "",
  html_url: repo.html_url,
  updated: repo.pushed_at || repo.updated_at || null,
  source,
});

const fetchGithub = async (username, token) => {
  const res = await axios.get(
    `https://api.github.com/users/${username}/repos?sort=pushed&per_page=6`,
    { headers: token ? { Authorization: `token ${token}` } : {} }
  );
  return res.data.map((r) => normalize(r, "GitHub"));
};

const fetchGitea = async (baseUrl, username) => {
  const res = await axios.get(
    `${baseUrl}/api/v1/users/${username}/repos?sort=updated&order=desc&limit=6`
  );
  return res.data.map((r) => normalize(r, "Gitea"));
};

const getLatestRepos = async (data, token) => {
  const results = await Promise.allSettled([
    fetchGithub(data.githubUsername, token),
    fetchGitea(data.giteaUrl, data.giteaUsername),
  ]);

  results.forEach((r) => {
    if (r.status === "rejected") console.log(r.reason?.message || r.reason);
  });

  return results
    .filter((r) => r.status === "fulfilled")
    .flatMap((r) => r.value)
    .sort((a, b) => new Date(b.updated) - new Date(a.updated))
    .slice(0, 6);
};

export default getLatestRepos;
