import "../App.css";
import { VtmnTag } from "@vtmn/react";
import vector from "../assets/Vector.png";
import shape from "../assets/shape.png";
import icon from "../assets/Icon.png";
import moment from "moment";
import { RepositoriesData } from "../App";

export default function Repositories(props: { repos: RepositoriesData[] }) {
  return (
    <>
      {props.repos.map((data: RepositoriesData, index: number) => (
        <div className="wrap" key={index}>
          <div className="innerWrap">
            <div
              className="wrapTitle"
              onClick={() => window.open(data.html_url)}
            >
              {data.name} <img src={icon} />
            </div>
            <div className="wrapDescription">{data.description}</div>
            <div className="wrapTags">
              {data.language !== null ? (
                <VtmnTag
                  className="tag"
                  icon="leaf-fill"
                  variant="decorative_gravel"
                >
                  {data.language}
                </VtmnTag>
              ) : (
                ""
              )}
              {data.license ? (
                <VtmnTag
                  className="tag"
                  icon="leaf-fill"
                  variant="decorative_gravel"
                >
                  <img className="tagIcon" src={vector}></img>{" "}
                  {data.license.key}
                </VtmnTag>
              ) : (
                ""
              )}
              <VtmnTag className="tag" icon="leaf-fill" variant="accent">
                <img className="tagIcon" src={shape}></img>
                {data.stargazers_count}
              </VtmnTag>
              <VtmnTag
                className="tag"
                icon="leaf-fill"
                variant="decorative_amethyst"
              >
                {moment([data.updated_at]).fromNow()}
              </VtmnTag>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
