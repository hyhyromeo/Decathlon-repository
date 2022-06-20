import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import LanguageFilter from "./components/LanguageFilter";
import SearchInput from "./components/SearchInput";
import TypeFilter from "./components/TypeFilter";
import SortFilter from "./components/SortFilter";
import Repositories from "./components/Repositories";
import { useWindowWidth } from "@react-hook/window-size";

export type RepositoriesData = {
  allow_forking: boolean;
  archive_url: string;
  archived: boolean;
  assignees_url: string;
  blobs_url: string;
  branches_url: string;
  clone_url: string;
  collaborators_url: string;
  comments_url: string;
  commits_url: string;
  compare_url: string;
  contents_url: string;
  contributors_url: string;
  created_at: string;
  default_branch: string;
  deployments_url: string;
  description: string;
  disabled: boolean;
  downloads_url: string;
  events_url: string;
  fork: boolean;
  forks: number;
  forks_count: number;
  forks_url: string;
  full_name: string;
  git_commits_url: string;
  git_refs_url: string;
  git_tags_url: string;
  git_url: string;
  has_downloads: boolean;
  has_issues: boolean;
  has_pages: boolean;
  has_projects: boolean;
  has_wiki: boolean;
  homepage: string;
  hooks_url: string;
  html_url: string;
  id: number;

  is_template: boolean;
  issue_comment_url: string;
  issue_events_url: string;
  issues_url: string;
  keys_url: string;
  labels_url: string;
  language: string;
  languages_url: string;
  license: {
    key: string;
    name: string;
    node_id: string;
    spdx_id: string;
    url: string;
  };
  merges_url: string;
  milestones_url: string;
  mirror_url: string | null;
  name: string;
  node_id: string;
  notifications_url: string;
  open_issues: number;
  open_issues_count: number;
  owner: {};
  private: boolean;
  pulls_url: string;
  pushed_at: string;
  releases_url: string;
  size: number;
  ssh_url: string;
  stargazers_count: number;
  stargazers_url: string;
  statuses_url: string;
  subscribers_url: string;
  subscription_url: string;
  svn_url: string;
  tags_url: string;
  teams_url: string;
  topics: [];
  trees_url: string;
  updated_at: string;
  url: string;
  visibility: string;
  watchers: number;
  watchers_count: number;
};

function App() {
  const onlyWidth = useWindowWidth()
  const [repoData, setRepoData] = useState<RepositoriesData[]>();
  const [foundData, setFoundData] = useState<RepositoriesData[]>();
  const [searchText, setSearchText] = useState("");
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    axios
      .get("https://api.github.com/users/Decathlon/repos")
      .then((response) => {
        setRepoData(response.data);
        setFoundData(response.data);
      });
  }, []);


  useEffect(() => {
    if(onlyWidth < 426){
      setMobile(true)
    }else{
      setMobile(false)
    }
  }, [onlyWidth]);


  const searchBar = (e: { target: { value: string } }) => {
    const keyword = e.target.value;
    setSearchText(keyword);
    if (repoData) {
      if (keyword !== "") {
        const results = repoData.filter((target) => {
          return target.name.toLowerCase().startsWith(keyword.toLowerCase());
        });
        setFoundData(results);
      } else {
        setFoundData(repoData);
      }
    } else {
      setFoundData(repoData);
    }
  };

  const optionsLanguageFilter = (e: { target: { value: string } }) => {
    const keyword = e.target.value;
    if (repoData) {
      const results = repoData.filter((target) => {
        if (target.language) {
          return target.language.toLowerCase() === keyword.toLowerCase();
        }
      });
      setFoundData(results);
    } else {
      setFoundData(repoData);
    }
  };

  const optionsTypeFilter = (e: { target: { value: string } }) => {
    const type = e.target.value;
    axios
      .get(`https://api.github.com/orgs/Decathlon/repos?type=${type}`)
      .then((response) => {
        setRepoData(response.data);
        setFoundData(response.data);
      });
  };
  const optionsSortFilter = (e: { target: { value: string } }) => {
    const keyword = e.target.value;
    axios
      .get(
        `https://api.github.com/orgs/Decathlon/repos?type=${keyword}&direction=desc`
      )
      .then((response) => {
        setRepoData(response.data);
        setFoundData(response.data);
      });
  };

  return (
    <div className="App">
      <div style={{ width: "100%" }}>
        <div className="header">
          <p>Repositories</p>
        </div>
        {mobile ? (
          <>
            <SearchInput searchText={searchText} searchBar={searchBar} />
            <div className="toolBarMobile">
              <TypeFilter optionsTypeFilter={optionsTypeFilter} />
              <LanguageFilter optionsLanguageFilter={optionsLanguageFilter} />
              <SortFilter optionsSortFilter={optionsSortFilter} />
            </div>
          </>
        ) : (
          <div className="toolBar">
            <SearchInput searchText={searchText} searchBar={searchBar} />
            <TypeFilter optionsTypeFilter={optionsTypeFilter} />
            <LanguageFilter optionsLanguageFilter={optionsLanguageFilter} />
            <SortFilter optionsSortFilter={optionsSortFilter} />
          </div>
        )}

        {foundData && <Repositories repos={foundData} />}
      </div>
    </div>
  );
}

export default App;
