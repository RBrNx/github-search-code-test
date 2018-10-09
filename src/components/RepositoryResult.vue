<template>
    <a class="result" href="https://github.com/chvin/react-tetris" target="_blank">
        <div class="mainInfo">
            <div class="repositoryTitle">
            <span class="avatar">
                <img src="https://avatars2.githubusercontent.com/u/5383506?v=4">
            </span>
            <a class="ownerName" href="https://github.com/chvin" target="_blank">chvin</a> /
            <span class="repoName">react-tetris</span>
        </div>
        <div class="repositoryDesc">Use React, Redux, Immutable to code Tetris. 🎮</div>
        <div class="lastUpdated">Updated on</div>
        </div>
        <div class="sideInfo">
            <span class="language">JavaScript</span>
            <span class="stars">
                <font-awesome-icon icon="star"></font-awesome-icon>
                200
            </span>
            <span class="forks">
                <font-awesome-icon icon="code-branch"></font-awesome-icon>
                100
            </span>
        </div>
    </a>
</template>

<script>

export default {
    name: 'RepositoryResult',
    props: [
        "repoInformation"
    ],
    computed: {
        avatarLink(){
            return (this.repoInformation) ? this.repoInformation.owner.avatar_url : null;
        },
        ownerName(){
            return (this.repoInformation) ? this.repoInformation.owner.login : null;
        },
        ownerLink(){
            return (this.repoInformation) ? this.repoInformation.owner.html_url: null;
        },
        repoName(){
            return (this.repoInformation) ? this.repoInformation.name : null;
        },
        repoLink(){
            return (this.repoInformation) ? this.repoInformation.html_url : null;
        },
        repoDesc(){
            return (this.repoInformation) ? this.repoInformation.description : null;
        },
        lastUpdated(){
            return (this.repoInformation) ? this.repoInformation.updated_at : null;
        },  
        language(){
            return (this.repoInformation) ? this.repoInformation.language : null;
        },
        starCount(){
            return (this.repoInformation) ? this.repoInformation.stargazers_count : null;
        },
        forkCount(){
            return (this.repoInformation) ? this.repoInformation.forks_count : null;
        }
    },
    data(){
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";

.result{
    width: 40%;
    flex: 45%;
    background: #efefef;
    margin: 10px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.25);
    -moz-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.25);
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.25);
    cursor: pointer;
    transition: transform 50ms linear;
    color: $highlightText;
    font-weight: 500;
    text-align: left;
    white-space: nowrap;
    position: relative;
    display: block;

    .mainInfo{
        width: 80%;
        display: inline-block;
        height: 100%;
        white-space: initial;

        .repositoryTitle{
            padding: 10px;
            width: 100%;              

            .avatar{
                width: 20px;
                height: 20px;
                border-radius: 3px;
                overflow: hidden;
                display: inline-block;
                vertical-align: top;

                img{
                    height: 20px;
                    width: 20px;
                }
            }

            .ownerName{
                font-weight: 400;
                display: inline-block;
                vertical-align: top;
                margin-left: 10px;
                color: $highlightText;
                text-decoration: none;

                &:hover{
                    text-decoration: underline;
                }
            }

            .repoName{
                display: inline-block;
                vertical-align: top;
                margin-left: 0px;
                font-weight: 600;
            }
        }

        .repositoryDesc{
            text-align: left;
            padding: 10px;
            width: 100%;
            color: $regularText;
            min-height: 50px;
        }

        .lastUpdated{
            text-align: left;
            padding: 10px;
            font-size: 12px;
            width: 100%;
            color: $regularText;
        }
    }

    .sideInfo{
        display: inline-block;
        width: 20%;
        height: 100%;
        text-align: right;
        font-size: 14px;
        vertical-align: top;
        color: $regularText;

        .language{
            display: block;
            padding: 10px;
        }

        .stars{
            display: block;
            padding: 10px;
        }

        .forks{
            display: block;
            padding: 10px;
        }
    }
}
</style>


