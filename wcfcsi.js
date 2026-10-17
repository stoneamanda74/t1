外链999!wailian999！

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163vpsruarn.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163clmvqvug.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163zynvfmyu.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163gsattltp.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163lkkmojvl.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163lcbqmuev.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163brphoyfq.html

structuredClone(obj)
来源：http://www.xuanzx.com/163fvhunvlj.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163hwkawelw.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163kvfvxsal.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163hsbnokzk.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163dibajwdp.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163evtkgynk.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163fuhcvyta.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163ryhokmyz.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163tjvghkqj.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163gmrwavbs.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163wgizndrk.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163mwmlwvcs.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163cdzzndrv.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163yqjmovcp.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163efhnqqnd.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163ctptyard.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163mqbzxmci.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163vdczuspq.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163avsvpmbv.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163bnidgdbs.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163polrualn.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163aksezuka.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163ysprkcji.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163dbqtsbwc.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163mcwmbfnk.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163vhnfoeth.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163aeackoyp.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163tkcqsmxl.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163phzmndwk.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163pjjhxcoo.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163dowrtlhg.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163ygvrmjvg.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163xlklvcmy.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163kpvcbwbg.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163fleaxvkf.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163nyddpwsl.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163hldtbtuf.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163ymwhieyv.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163xdgvmrqs.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163vvjneerq.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163kuvzebbu.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163vnrlangh.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163jxabymlc.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163khsnktkc.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163gxvekzup.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163eccywdcb.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163ytirfewd.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163xirkxnef.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163jbdvymlv.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163mxssmzxw.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163qmtffxck.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163ldnaqyrt.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163pugizwgo.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163bmybuzvu.html

npx vite build
来源：http://www.sxryk.cn/163mqxaizof.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163vfrzgzvx.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163znvzvkjk.html

================================================================================
来源：http://www.aibaodan.cn/163nlbwkoqw.html

统计汇总
来源：http://www.aibaodan.cn/163cfvugott.html

================================================================================
来源：http://www.sxryk.cn/163cqugcmbo.html

按语言统计（条）：
来源：http://www.xuanzx.com/163zjgefcfr.html

Python ......... 252
来源：http://www.sxryk.cn/163imytyllp.html

PHP ............ 252
来源：http://www.xuanzx.com/163ukhoxswk.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163dkbhvqrm.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163onjsucwu.html

Java ........... 212
来源：http://www.aibaodan.cn/163nhkwutvp.html

Go ............. 212
来源：http://www.sxryk.cn/163xarsicnj.html

Ruby ........... 212
来源：http://www.sxryk.cn/163apfvyqjp.html

C# ............. 212
来源：http://www.sxryk.cn/163hptzgyeq.html

C .............. 30
来源：http://www.sxryk.cn/163osgaixua.html

C++ ............ 30
来源：http://www.sxryk.cn/163lxoskzcf.html

SQL ............ 90
来源：http://www.sxryk.cn/163lsotktuc.html

Bash ........... 80
来源：http://www.aibaodan.cn/163mkfyulbw.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163tihrbcsp.html

Swift .......... 15
来源：http://www.sxryk.cn/163nqjpnqmj.html

Lua ............ 10
来源：http://www.sxryk.cn/163bqiqlvqt.html

Perl ........... 10
来源：http://www.sxryk.cn/163ymemhujj.html

Scala .......... 10
来源：http://www.xuanzx.com/163tcxbebbv.html

------------------------------------
来源：http://www.aibaodan.cn/163tchtllet.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163bmgejarc.html

按章节统计：
来源：http://www.xuanzx.com/163fixdmdkp.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163hnzbynxw.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163bbfcygky.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163iqionwtk.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163vnexzdvn.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163xfywxmlm.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163odbmtzwt.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163tznnkaqd.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163sdwsjija.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163wvdrzdkc.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163hbfnsmyu.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163yscijvpj.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163gednklvt.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163jmxiodua.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163qcilyrta.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163ntpasgxh.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ilrujwyf.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163rboxgbxr.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163gadzumoq.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163cftxlrwa.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163jorvncig.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163oejvfixq.html

------------------------------------
来源：http://www.aibaodan.cn/163lcqojuye.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163yzanrcbg.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163xrkokpxv.html

使用提醒
来源：http://www.sxryk.cn/163ecyzrcca.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163vqnafoce.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163tvayqjji.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163rqnozojl.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163gkejmhvw.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163xzljscck.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163tctmksjy.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163smxjifpo.html

================================================================================
来源：http://www.xuanzx.com/163zcjjshyw.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163bnxtjqng.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163zjqbjoph.html

================================================================================
来源：http://www.sxryk.cn/163fzelqqct.html

【收录内容】
来源：http://www.sxryk.cn/163laktortw.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163musckgfp.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163xhilexcm.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163wsteatkc.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163tsagpfld.html

【使用说明】
来源：http://www.xuanzx.com/163nfhriskn.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163bqlsxqvo.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163mpnijneb.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163wcjvtgxv.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163gopzhsuk.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163lkzhekcu.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163xgzmwosr.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163jhvzgais.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163xaemeewc.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163xwmgqdrp.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163wseinewb.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163nybtcnoa.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163afftzucl.html

【文件统计】
来源：http://www.aibaodan.cn/163wlzwojzr.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163dpupdxqk.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163exhsnfjt.html

目  录
来源：http://www.xuanzx.com/163qbjpamql.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163yhlljgcw.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163euhkbicz.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163jjdhmjbf.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163cienulcw.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163yspfvgum.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163irpdbrzi.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163tdfqawhc.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163vbgmivil.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163nlnblxpr.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163bloawfrr.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163ybbkrnss.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163sgcktqin.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163xcgrkaxo.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163vruaoevs.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163kylqgmdu.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163gncugnly.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163bjetyrpi.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163mnlroebc.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163fdkaugaw.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163npildgoy.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163hillkkuq.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163nlrscfvy.html

================================================================================
来源：http://www.sxryk.cn/163vneaczmm.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163jskugeli.html

================================================================================
来源：http://www.aibaodan.cn/163nquzpzfq.html

[A01] Hello World
来源：http://www.sxryk.cn/163xszpyide.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163paeuccmh.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163aztqnpre.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163ejacufdy.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163ntpbsavh.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163lrgobsnu.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163pyhkedch.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163dcxlunhr.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163liiehbbx.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163xqrjlboh.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163xgllfdrc.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163bcpotanu.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163czcahgfz.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163mtedmroy.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163bxfndugb.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163xxuqtwul.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163zasskdxw.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163gemhrxys.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163zqomgwrj.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163rdmcxnwa.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163hlavyihy.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163sfwniwmj.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163tlarpbne.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163fpqdyulj.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163yhoujpfz.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163qmootysn.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163srzydoib.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163ujzidlvm.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163alpgqibx.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163ikwpnyun.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163vgqakkwb.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163yejzlilr.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163cwbjipnv.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163ywbsvhqm.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163tynsodic.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163ppyzdzbr.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163xsqzqdky.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163qvewkvxe.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163sxhwbimu.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163opwvmhit.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163ijaocxqa.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163unsenykc.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163zecxlupv.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163xjccxmyi.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163kgsyghcu.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163ykrqmocp.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163elzbjkim.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163xfixazmn.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163fsdjggtq.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163jkpygvrh.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163rhmvopde.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163kcrpkwse.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163tgyknqrz.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163srktdvqs.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163qnienxxz.html

Py:   str(42)
来源：http://www.aibaodan.cn/163hdyavrzd.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163eluxfkly.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163zaulvtgw.html

TS:   String(42)
来源：http://www.aibaodan.cn/163gxjzchoa.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163ruognuxw.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163rgcdszsi.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163gciazcem.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163wfbtnkzb.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163opysczay.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163cnolcttu.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163fcachwux.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163yxyjrqvc.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163qlxveaqo.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163qrcvprtv.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163atuwamua.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163fbvtooiu.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163cmazvzet.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163wiazgvcm.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163ofpmvrup.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163psavicbi.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163usqwioaj.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163bkmpyqih.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163xvpoocif.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163kdhmmekn.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163oarfeioh.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163leblwqrp.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163oaifxfru.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163knaaeevd.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163nrnxctoy.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163tiehbwcf.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163qqceagho.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163ffyhtzwy.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163zxnlwdph.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163rysntyho.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163gejztqhi.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163lcofhhzk.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163djbgugzo.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163yjwoqsed.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163tgcintng.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163uaepflai.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163mzqcrrjx.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163ghckcwkx.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163zxtoachu.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163utyphubk.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163szsuqoih.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163ihqzebfm.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163ofughlni.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163hipqsbch.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163dfskhcrc.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163sfarnspw.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163kiggctpz.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163nfgimsux.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163egmpkhkc.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163olbglqsr.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163dvwyeduw.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163xslfuide.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163zfxcpbkv.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163zoptcnxs.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163yxkqyscx.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163jzfehjcp.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163wqwoslaw.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163nskqcdlj.html

[A14] 注释写法
来源：http://www.sxryk.cn/163rlccfnqv.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163nwmijsdi.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163hopqpavd.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163myqmnxuy.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163krzysrci.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163ghnbljto.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163qtmcbozm.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163sxwxrbpz.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163fdbzopsk.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163wamejzfn.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163jbfowcur.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163awkrbuoh.html


<!-- 参考信息 -->