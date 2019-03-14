window.onload = function () {
    // 侧边栏
    function $(cls) {
        return document.getElementsByClassName(cls);
    }
    function id(id) {
        return document.getElementById(id);
    }
    var btn = $("btn");
    var content = $("content");
    for (var i = 0; i < btn.length; i++) {
        btn[i].index = i;
        btn[i].a = true;

        btn[i].onclick = function () {
            if (this.a) {
                for (var j = 0; j < content.length; j++) {
                    content[j].style.display = 'none';
                    btn[j].a = true;
                }
                content[this.index].style.display = 'block';
                this.a = false;
            } else {
                content[this.index].style.display = 'none';
                this.a = true;
            }
        }
    }
    // 三级菜单
    var btn1 = $("btn1");
    var content1 = $("content1");
    for (var i = 0; i < btn1.length; i++) {
        btn1[i].index = i;
        btn1[i].a = true;

        btn1[i].onclick = function () {
            if (this.a) {
                for (var j = 0; j < content1.length; j++) {
                    content1[j].style.display = 'none';
                    btn1[j].a = true;
                }
                content1[this.index].style.display = 'block';
                this.a = false;
            } else {
                content1[this.index].style.display = 'none';
                this.a = true;
            }
        }
    }
    //动态获取右边宽度
    function rWidth() {
        var indexWidth = $("index")[0].offsetWidth;
        var indexlWidth = $("index-l")[0].offsetWidth;
        $("index-r")[0].style.width = indexWidth - indexlWidth + "px";
    }
    rWidth();
    window.onresize = function () {
        rWidth();
    }

    // 点击隐藏左边侧栏
    var fa = $("fa-th-list")[0];
    var indexl = $("index-l")[0];
    var indexr = $("index-r")[0];
    var th = $("th");
    var td = $("td");
    var logo = id("logo");
    fa.a = true;
    fa.onclick = function () {
        // rWidth();
        if (this.a) {
            // rWidth();
            indexl.style.width = 49 + "px";
            indexr.style.width = 1854 + "px";
            // for (var i = 0; i < th.length; i++) {
            //     th[i].style.width = 260 + "px";
            //     td[i].style.width = 260 + "px";
            // }
            this.a = false;
            logo.style.display = "block";
        } else {
            indexl.style.width = 220 + "px";
            indexr.style.width = 1683 + "px";
            // for (var i = 0; i < th.length; i++) {
            //     th[i].style.width = 240 + "px";
            //     td[i].style.width = 240 + "px";
            // }
            // rWidth();
            this.a = true;
            logo.style.display = "none";
        }
        // rWidth();

    }


    //点击添加背景色
    var click = $("click");
    for (var i = 0; i < click.length; i++) {
        click[i].onclick = function () {
            for (var j = 0; j < click.length; j++) {
                click[j].className = "click";
            }
            this.className = "click backgrounk";
        }
    }

    //全选
    var check = id("checkbox1");
    var checkbox = $("checkbox");
    check.onclick = function () {
        for (var i = 0; i < checkbox.length; i++) {
            if (check.checked == true) {
                checkbox[i].checked = true;
            } else {
                checkbox[i].checked = false;
            }
        }
    }



    //已发布和待修改变换按钮效果
    var issue = id("issue");
    var ii = id("ii");
    var index = true;
    issue.onclick = function () {
        if (index) {
            issue.value = "已发布";
            issue.style.backgroundColor = "#5FB878";
            issue.style.textIndent = "-1em";
            issue.style.color = "#fff";
            ii.style.backgroundColor = "#fff";
            ii.style.left = "80px";
            index = false;
        } else {
            issue.value = "待修改";
            issue.style.backgroundColor = "#fff";
            issue.style.textIndent = "1em";
            issue.style.color = "#999";
            ii.style.backgroundColor = "#d2d2d2";
            ii.style.left = "35px";
            index = true;
        }
    }
    //添加行
    var tb = id("tb");
    //叉掉添加页面
    var cross = $("cross")[0];
    cross.onclick = function () {
        tanchu.style.display = "none";
    }
    //点击出现添加页面
    var add = id("add");
    var tanchu = $("index-r-add")[0];
    add.onclick = function () {
        tanchu.style.display = "block";
        
    }
    //本地内存默认数据
    var users = '[{"tag2":"美食", "title2":"舌尖上的中国第一季", "author2":"yyx", "time2":"2011-11-23"}, {"tag2":"电影", "title2":"惊奇队长", "author2":"zxx", "time2":"2019-12-22"}]';
    localStorage.users = users;
    var arr = JSON.parse(localStorage.users);

    for (var i = 0; i < arr.length; i++) {
        var oTr = document.createElement("tr");
        //多选按钮
        var oTd1 = document.createElement("td");
        var oInput = document.createElement("input");
        oInput.setAttribute("type", "checkbox");
        oInput.setAttribute("class", "checkbox");
        oInput.setAttribute("name", "ck")
        oTd1.appendChild(oInput);
        oTr.appendChild(oTd1);
        //文章ID
        var oTd2 = document.createElement("td");
        oTd2.setAttribute("class", "e");
        oTd2.innerHTML = i + 1;
        oTr.appendChild(oTd2);
        //文章标签
        var oTd3 = document.createElement("td");
        oTd3.innerHTML = arr[i].tag2;
        oTd3.setAttribute("class", "a");
        oTr.appendChild(oTd3);
        //文章标题
        var oTd4 = document.createElement("td");
        oTd4.innerHTML = arr[i].title2;
        oTd4.setAttribute("class", "b");
        oTr.appendChild(oTd4);
        //作者
        var oTd5 = document.createElement("td");
        oTd5.innerHTML = arr[i].author2;
        oTd5.setAttribute("class", "c");
        oTr.appendChild(oTd5);
        //上传时间
        var oTd6 = document.createElement("td");
        oTd6.innerHTML = arr[i].time2;
        oTd6.setAttribute("class", "d");
        oTr.appendChild(oTd6);
        //发布内容
        var oTd7 = document.createElement("td");
        var button3 = document.createElement("button");
        button3.innerHTML = issue.value;
        button3.setAttribute("class", "status");
        oTd7.appendChild(button3);
        oTr.appendChild(oTd7);
        //操作
        var oTd8 = document.createElement("td");
        var button1 = document.createElement("button");
        var button2 = document.createElement("button");
        button1.setAttribute("class", "redact");
        button2.setAttribute("class", "delete");
        button1.innerHTML = '<i class="fa fa-pencil" aria-hidden="true"></i>编辑';
        button2.innerHTML = '<i class="fa fa-recycle" aria-hidden="true" style="width:10px"></i>删除';
        oTd8.appendChild(button1);
        oTd8.appendChild(button2);
        oTr.appendChild(oTd8);
        tb.appendChild(oTr);
    }
    //点击录入数据
    addBtn.onclick = function () {
        //获取添加框输入的内容
        var tag = id("tag").value;
        var title = id("title").value;
        var author = id("author").value;
        var time = id("time").value;
        //获取本地内存中的数组
        var arr = JSON.parse(localStorage.users);
        arr.push({ "tag2": tag, "title2": title, "author2": author, "time2": time });
        var string = JSON.stringify(arr);
        localStorage.users = string;
        //创建一个tr用于放动态输入的各个td
        var oTr = document.createElement("tr");
        //多选按钮
        var oTd1 = document.createElement("td");
        var oInput = document.createElement("input");
        oInput.setAttribute("type", "checkbox");
        oInput.setAttribute("class", "checkbox");
        oInput.setAttribute("name", "ck");
        oTd1.appendChild(oInput);
        oTr.appendChild(oTd1);
        //文章ID
        var oTd2 = document.createElement("td");
        oTd2.setAttribute("class", "e");
        
        var zz = Number(tb.getElementsByTagName('tr')[tb.getElementsByTagName('tr').length -1 ].getElementsByTagName('td')[1].innerHTML) + 1;
        console.log(zz);
        oTd2.innerHTML = zz;
        // console.log(oTd2);
        oTr.appendChild(oTd2);
        //文章标签
        var oTd3 = document.createElement("td");
        oTd3.innerHTML = arr[arr.length - 1].tag2;
        oTd3.setAttribute("class", "a");
        oTr.appendChild(oTd3);
        //文章标题
        var oTd4 = document.createElement("td");
        oTd4.innerHTML = arr[arr.length - 1].title2;
        oTd4.setAttribute("class", "b");
        oTr.appendChild(oTd4);
        //作者
        var oTd5 = document.createElement("td");
        oTd5.innerHTML = arr[arr.length - 1].author2;
        oTd5.setAttribute("class", "c");
        oTr.appendChild(oTd5);
        //上传时间
        var oTd6 = document.createElement("td");
        oTd6.innerHTML = arr[arr.length - 1].time2;
        oTd6.setAttribute("class", "d");
        oTr.appendChild(oTd6);
        //发布状态
        var oTd7 = document.createElement("td");
        var button3 = document.createElement("button");
        button3.innerHTML = issue.value;
        button3.setAttribute("class", "status");
        oTd7.appendChild(button3);
        oTr.appendChild(oTd7);
        //操作
        var oTd8 = document.createElement("td");
        var button1 = document.createElement("button");
        var button2 = document.createElement("button");
        button1.setAttribute("class", "redact");
        button2.setAttribute("class", "delete");
        button1.innerHTML = '<i class="fa fa-pencil" aria-hidden="true"></i>编辑';
        button2.innerHTML = '<i class="fa fa-recycle" aria-hidden="true" style="width:10px"></i>删除';
        oTd8.appendChild(button1);
        oTd8.appendChild(button2);
        oTr.appendChild(oTd8);
        //将创建的并且动态获取各个td的内容放入tr
        tb.appendChild(oTr);
        //将添加信息框隐藏
        tanchu.style.display = "none";

        //点击addBtn添加之后将编辑重新遍历
        for (var i = 0; i < redact.length; i++) {
            var tag1 = id("tag1");
            var title1 = id("title1");
            var author1 = id("author1");
            var time1 = id("time1");
            var a = $("a");
            var b = $("b");
            var c = $("c");
            var d = $("d");
            // console.log(a[0]);
            redact[i].index = i;
            redact[i].onclick = function () {
                //从本地内存拿出数据，并变成数组。
                var arr = JSON.parse(localStorage.users);
                //tag1获取到从本地内存中拿出的数据
                tag1.value = arr[this.index].tag2;
                title1.value = arr[this.index].title2;
                author1.value = arr[this.index].author2;
                time1.value = arr[this.index].time2;
                // console.log(tag1);
                //放回本地内存
                var string = JSON.stringify(arr);
                localStorage.users = string;
                redactDelete.style.display = "block";
                //点击编辑将本行的多选框选中
                var ck = document.getElementsByName("ck");
                ck[this.index].checked = true;
            }
        }
    }

    //删除行
    var del = id("del");
    del.onclick = function () {
        // var ck = document.getElementsByName("ck");
        // for (var i = 0; i < ck.length; i++) {
        //     if (ck[i].checked == true) {
        //         tb.deleteRow(i + 1);
        //         i = i - 1;
        //     }
        // }
        var arr = JSON.parse(localStorage.users);
        console.log(arr);
        //获取所有的选择按钮
        var ck = document.getElementsByName("ck");
        console.log(ck);
        for (var i = 0; i < ck.length; i++) {
            //如果选择按钮被选中，则删除本行
            if (ck[i].checked == true) {
                tb.removeChild(ck[i].parentNode.parentNode);
                arr.splice(i, 1);
                var string = JSON.stringify(arr);
                localStorage.users = string;
                i = i - 1;
            }
        }

    }

    // 编辑与删除
    var redact = $("redact");
    var redactDelete = $("redactDelete")[0];
    //遍历编辑按钮
    for (var i = 0; i < redact.length; i++) {
        //点击哪行的编辑，获取哪行的数据
        var tag1 = id("tag1");
        var title1 = id("title1");
        var author1 = id("author1");
        var time1 = id("time1");
        var a = $("a");
        var b = $("b");
        var c = $("c");
        var d = $("d");
        // console.log(a[0]);
        redact[i].index = i;
        redact[i].onclick = function () {

            var arr = JSON.parse(localStorage.users);

            tag1.value = arr[this.index].tag2;
            title1.value = arr[this.index].title2;
            author1.value = arr[this.index].author2;
            time1.value = arr[this.index].time2;
            // console.log(tag1);
            var string = JSON.stringify(arr);
            localStorage.users = string;
            redactDelete.style.display = "block";
            //点击编辑多选框被选中
            var ck = document.getElementsByName("ck");
            ck[this.index].checked = true;
        }

    }
    //编辑完成后点击完成，经修改后的数据添加到本地内存，在从内存渲染到页面
    var addBtn1 = id("addBtn1");
    addBtn1.onclick = function () {
        for (var i = 0; i < redact.length; i++) {
            var arr = JSON.parse(localStorage.users);
            var ck = document.getElementsByName("ck");
            if (ck[i].checked == true) {
                arr[i].tag2 = tag1.value;
                arr[i].title2 = title1.value;
                arr[i].author2 = author1.value;
                arr[i].time2 = time1.value;
                a[i].innerHTML = arr[i].tag2;
                b[i].innerHTML = arr[i].title2;
                c[i].innerHTML = arr[i].author2;
                d[i].innerHTML = arr[i].time2;
                //修改后将选框取消
                ck[i].checked = false;
            }
            //将修改后的数据放回本地内存
            var string = JSON.stringify(arr);
            localStorage.users = string;
            redactDelete.style.display = "none";
        }

    }
    // 把编辑框叉掉
    var cross = $("cross")[1];
    cross.onclick = function () {
        //把编辑框叉掉的同时，将选框取消
        var ck = document.getElementsByName("ck");
        for(var i = 0; i < redact.length; i++){
            ck[i].checked = false;
        }
        redactDelete.style.display = "none";
    }

    //查找
    var find = id("find");
    find.onclick = function () {
        var findId = id("findId").value;
        var findAuthor = id("findAuthor").value;
        var findTitle = id("findTitle").value;
        var findTag = id("findTag").value;
        console.log(findId);

        var e = $("e");
        console.log(e);
        for (var i = 0; i < e.length; i++) {
            if (findId == e[i].innerHTML || findAuthor == c[i].innerHTML || findTitle == b[i].innerHTML || findTag == a[i].innerHTML) {
                e[i].style.backgroundColor = "#009688";
                e[i].style.color = "#fff";
            }
        }
    }

    id("qp").onclick = function(){
        var el = document.documentElement;
        var rfs = el.requestFullScreen || el.webkitRequestFullScreen ||
            el.mozRequestFullScreen || el.msRequestFullScreen;
        if (typeof rfs != "undefined" && rfs) {
            rfs.call(el);
        } else if (typeof window.ActiveXObject != "undefined") {
            var wscript = new ActiveXObject("WScript.Shell");
            if (wscript != null) {
                wscript.SendKeys("{F11}");
            }
        }
        var el = document;
        var cfs = el.cancelFullScreen || el.webkitCancelFullScreen ||
            el.mozCancelFullScreen || el.exitFullScreen;
        if (typeof cfs != "undefined" && cfs) {
            cfs.call(el);
        } else if (typeof window.ActiveXObject != "undefined") {
            //for IE，这里和fullScreen相同，模拟按下F11键退出全屏
            var wscript = new ActiveXObject("WScript.Shell");
            if (wscript != null) {
                wscript.SendKeys("{F11}");
            }
        }
}

}


