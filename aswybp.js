外链999!wailian999！

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163dxiulhot.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163kwixtbza.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163eoowazvc.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163etgmtisp.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163zjjgfeat.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163adljiomr.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163kzfenrke.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163tbupvkps.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163dlamuhbe.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163speshaiu.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163smhfjqqy.html

structuredClone(obj)
来源：http://www.sxryk.cn/163qqnnkzgi.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163gyfijcjq.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163itajmyub.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163tktwpild.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163ihzrujef.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163pewcekly.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163pakideaz.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163sqzfsvrp.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163obztyiuc.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163muruxfix.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163laastzur.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163vpqoqtld.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163ligamwxn.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163ffheupzc.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163aqruweyr.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163snotcewu.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163agchbvyz.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163qvlaieyu.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163inhsdiyb.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163hdcjpavt.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163wkqtdmbi.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163etuiskvs.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163mgqjuptt.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163kyytlbnp.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163jwznqiwt.html

[U105] JS：节流
来源：http://www.xuanzx.com/163wwmgjlra.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163jqtzdtrf.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163nyvrjyio.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163wmgqwlms.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163wuicargv.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163nmhcjwoo.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163kkkboakj.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163iffcoaqx.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163bqgwhwyp.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163yznsblsy.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163ogmnlneo.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163koypwyyn.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163xjcdqckv.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163mdxgjqoj.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163ublzrbfu.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163lengtflu.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163dszmdwwx.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163uxbccjwj.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163bjtzlyba.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163nupmclbi.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163suobsnkr.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163gpswbqdn.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163rrbchudq.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163gpveibxp.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163rhcqlokj.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163rvapcwhu.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163fbrrzqpn.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163vbzazrkk.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163slcidaqk.html

npx vite build
来源：http://www.aibaodan.cn/163dvnwjbib.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163wevlbrog.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163qrpexdxb.html

================================================================================
来源：http://www.xuanzx.com/163ffqsqdlf.html

统计汇总
来源：http://www.xuanzx.com/163fzmknufi.html

================================================================================
来源：http://www.sxryk.cn/163rzwrpvlc.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163qhtslvjx.html

Python ......... 252
来源：http://www.aibaodan.cn/163zmmvmjhl.html

PHP ............ 252
来源：http://www.xuanzx.com/163chgghoqc.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163qsmllnfg.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163sqxeugyz.html

Java ........... 212
来源：http://www.xuanzx.com/163moyhbtcn.html

Go ............. 212
来源：http://www.aibaodan.cn/163aqkyhmdm.html

Ruby ........... 212
来源：http://www.xuanzx.com/163kajyqudy.html

C# ............. 212
来源：http://www.aibaodan.cn/163ttnpdvuz.html

C .............. 30
来源：http://www.aibaodan.cn/163qogckyvv.html

C++ ............ 30
来源：http://www.aibaodan.cn/163snryhhaz.html

SQL ............ 90
来源：http://www.aibaodan.cn/163zbvctnnu.html

Bash ........... 80
来源：http://www.xuanzx.com/163qqwjmkzv.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163adoopjcw.html

Swift .......... 15
来源：http://www.sxryk.cn/163jcjbhnob.html

Lua ............ 10
来源：http://www.sxryk.cn/163sgnvkirz.html

Perl ........... 10
来源：http://www.sxryk.cn/163hkaighok.html

Scala .......... 10
来源：http://www.sxryk.cn/163agtkseor.html

------------------------------------
来源：http://www.xuanzx.com/163zvozwzkz.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163xuovfvwf.html

按章节统计：
来源：http://www.sxryk.cn/163aqcmjceq.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163etpzvwij.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163rznbwfja.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163jzxliobb.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163mmwvgowa.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163wijtywsy.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163rafsynxg.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163fzjknpzw.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163usijmpkf.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163jntpktzp.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163zcifbjag.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ujdyvyxr.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163jtwnwcek.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163xoxqkder.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163owrkzkqp.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163jmmmjfos.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163pwakobtj.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163tocshfbc.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163hxxvsdyc.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163dvzdrimw.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163hsmydzpu.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163bwchskfp.html

------------------------------------
来源：http://www.aibaodan.cn/163xckfhomd.html

合计                                  2106 条
来源：http://www.sxryk.cn/163vmzrroel.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163juoaiudg.html

使用提醒
来源：http://www.aibaodan.cn/163sxejqzxd.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163dwuhgaws.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163aeuknscm.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163uxxavywb.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163fatndhqk.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163kjtyeuyg.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163mbanxvta.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163dvuqyzrx.html

================================================================================
来源：http://www.sxryk.cn/163avtgwddz.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163efmcfuxi.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163ifuqkdyn.html

================================================================================
来源：http://www.aibaodan.cn/163ecpqthtp.html

【收录内容】
来源：http://www.aibaodan.cn/163wlpdhbvf.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163fwqedklo.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163kfhzloot.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163hpzauoaj.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163qdrsupwi.html

【使用说明】
来源：http://www.aibaodan.cn/163zqiusqca.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163ntxktsfi.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163axoishix.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163ftmbqnvi.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163aojoygjz.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163nimkhuum.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163fhrjijhq.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163pyygbmwd.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163wzazctxi.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163xcwdbcdp.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163qkdzkeqm.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163ysybdqdi.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163qrohiphm.html

【文件统计】
来源：http://www.sxryk.cn/163lydonnac.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163obvuybxj.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163dqqoiaba.html

目  录
来源：http://www.xuanzx.com/163nsrnclhl.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163fbskhyqe.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163tumjnobi.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163zqfemrad.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163ucbqkflg.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163kwenvxrg.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163fiqxbotq.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163movtovbu.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163ugypcadl.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163cmclxhjd.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163jadpzwpd.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163imdkynpj.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ouathsxu.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ylmhytta.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163edckzsky.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163yaxrrtca.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163hbvppzwd.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163kbtynpbo.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163vmdezcny.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163ixoigebn.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163qiwhkzfa.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163vdshvsvb.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163cuyjfmsp.html

================================================================================
来源：http://www.aibaodan.cn/163xzsuytcm.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163kajetuyz.html

================================================================================
来源：http://www.aibaodan.cn/163vjbzjbcj.html

[A01] Hello World
来源：http://www.sxryk.cn/163zgoiigvs.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163cjdvnngj.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163ssypqeto.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163vvalokxn.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163znbwdqhu.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163azyxysxk.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163pxptmhtc.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163jeefotuo.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163eswlezyi.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163uxgthnyf.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163vsgolurd.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163kscxkhkj.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163cjunlire.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163ncyikrsj.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163evtbvwiu.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163gmucuwvi.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163nxmdqpei.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163msmornpt.html

[A03] 常量定义
来源：http://www.xuanzx.com/163kjyxgzvw.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163yqbgtbjh.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163bxlvzzxf.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163qfvvhkvg.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163rnsydmqx.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163dujapvcg.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163qvmanzbo.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163tgtoieoq.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163uicjdody.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163hieefmiu.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163rrnclakp.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163ejobtcnl.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163fhpmqqao.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163tbivkwtb.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163otgkfxew.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163zkfnfyhf.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163hwkrcqek.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163vrrfrgmt.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163ivbtdkmx.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163tohysdpr.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163syxvrwxp.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163uqdigmnp.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163ciaxpleu.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163iusxnwlf.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ffubssug.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163uodibyrm.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163jvnecnlz.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163zawkdikd.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163pwnxfxno.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163uncgdthr.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163rzdysmnr.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163vahjwfod.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163tqshkelc.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163owwflxli.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163kpxawrfz.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163npxokujf.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163acgfeviq.html

Py:   str(42)
来源：http://www.xuanzx.com/163izimylwr.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163zyibcmfq.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163ofrrfjkr.html

TS:   String(42)
来源：http://www.sxryk.cn/163ajoyolkz.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163ltunbgts.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163tgkrhrea.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163jmvgcblj.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163lrczopbd.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163apxifrgw.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163vomugppe.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163gmcyyale.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163psxbvavv.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163ghyqncsz.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163tleuwsgq.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163hmqnbprb.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163sccscyhe.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163znpxkjol.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163fmgobwxq.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163wrhvznku.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163fggevqyj.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163srfwbysf.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163qgxblitp.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163xetacwng.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163ncrdmhmw.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163ezutugpm.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163thhpwjlm.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163haehxsse.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163dxhlilbv.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163wcfypohm.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163bzijgzlx.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163dftxrkaz.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163woisusos.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163lovzcets.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163ynznlnnb.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163jqakrrxv.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163ufuwlmjn.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163xtbekeht.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163vskizuyc.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163yzwmkbnh.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163dbdelkgr.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163vobbpbuh.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163hfxbitek.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163busbfgnx.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163tnqlzprx.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163qsgobway.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163tvionvie.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163dushqlrl.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163wjmhlphv.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163rddgheqs.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163dcsirvwk.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163hgqjjuuf.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163pjhkrnyt.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163wyfzarlk.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163fmwbykmb.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ailgxmij.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163kbfgpayj.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163qtigcrdz.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163hhtqqqpd.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163equjrpph.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163hebmxgmr.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163pnfwqrav.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163tkdvlaka.html

[A14] 注释写法
来源：http://www.xuanzx.com/163vjydjlmg.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163obzdyulm.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163jedtmhtt.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163hbmmotmi.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163knerqxjs.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163hyowfulx.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163zyvqpepr.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163ilrmbihw.html


<!-- 参考信息 -->