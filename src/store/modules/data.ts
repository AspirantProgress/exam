import { observable, action } from "mobx";

class Data {
   @observable data: any = [
        {
            title: "试题管理",
            icon:"",
            son: ["添加试题","试题分类","查看试题"]
        },
        {
            title: "用户管理",
            son: ["添加用户","用户展示"] 
        },
        {
            title: "考试管理",
            son: ["添加试卷","试卷列表"] 
        },
        {
            title: "班级管理",
            son: ["班级管理","教室管理","学生管理"] 
        },
        {
            title: "试卷管理",
            son: ["待批班级"] 
        }
    ]; 
}
export default Data