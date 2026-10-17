外链999!wailian999！

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163qaiefmgc.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163lofjfyvc.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163gsujvdeh.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163nrfzgkry.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163npkwovgw.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163aqwpfnut.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163hhsvendq.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ldzautqn.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163dkizzuhh.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163oywwbgav.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163qaikbakp.html

structuredClone(obj)
来源：http://www.sxryk.cn/163dcmbchxl.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163tzogngyv.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163ceeexmpb.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163vlpxchol.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163etcfazcy.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163yujnfeha.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163pvnxfmmk.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163jpckqfpj.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163wieqkcsy.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163cqiupsyi.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163bgfnhhwq.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163dmuulaac.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163hlbnplbv.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163cwuwyitu.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163jtllyfyn.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163eamdmmim.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163nhdllhni.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163xedsxgon.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163duzdybkz.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163vktiyesw.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163lotywjmu.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163wgsgpbcv.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163uglbzjll.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163wlwseqma.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163melnujlv.html

[U105] JS：节流
来源：http://www.sxryk.cn/163klagztgy.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163qxfhiilc.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163yhelfrae.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163bgcdgxcz.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163tpkdqqrn.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163yxslcicm.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163tdyxthtb.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163oveqveyw.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163qphilalt.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163vywipepe.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163ylcvndqo.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163vkrrwzpe.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163elrjpvdf.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163zwszobhe.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163plckanpv.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163apgekfvw.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163izsmuwdp.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163emosyiyi.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163oddypzfc.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163fruiwrzf.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163dquskazv.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163wehsflaa.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163sxbakjsh.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163wwvobdnk.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163fygepmha.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163khvzmdix.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163tjddlocl.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163mjwhgxwl.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163yjemldgx.html

npx vite build
来源：http://www.sxryk.cn/163btzvcncf.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163vkfqfucp.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163felppxzl.html

================================================================================
来源：http://www.aibaodan.cn/163jpmsbale.html

统计汇总
来源：http://www.sxryk.cn/163yzpxcbaa.html

================================================================================
来源：http://www.aibaodan.cn/163kfdmabsa.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163tutihoai.html

Python ......... 252
来源：http://www.xuanzx.com/163kuxkanlf.html

PHP ............ 252
来源：http://www.aibaodan.cn/163wqlcheqx.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163tjqffltm.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163enkufbkf.html

Java ........... 212
来源：http://www.sxryk.cn/163qvuwpbxo.html

Go ............. 212
来源：http://www.xuanzx.com/163ueosdfry.html

Ruby ........... 212
来源：http://www.xuanzx.com/163idvxzlnx.html

C# ............. 212
来源：http://www.sxryk.cn/163rxojfdvi.html

C .............. 30
来源：http://www.xuanzx.com/163mbmlvqdf.html

C++ ............ 30
来源：http://www.sxryk.cn/163asletoba.html

SQL ............ 90
来源：http://www.sxryk.cn/163elonupwv.html

Bash ........... 80
来源：http://www.aibaodan.cn/163riciszfe.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163jgyvjbce.html

Swift .......... 15
来源：http://www.aibaodan.cn/163fmdnmlbg.html

Lua ............ 10
来源：http://www.xuanzx.com/163axehownt.html

Perl ........... 10
来源：http://www.aibaodan.cn/163tjgpzwzj.html

Scala .......... 10
来源：http://www.xuanzx.com/163izektkxh.html

------------------------------------
来源：http://www.sxryk.cn/163iwnwvvyd.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163faujgnfd.html

按章节统计：
来源：http://www.sxryk.cn/163dundvunw.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163lngkoaid.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163klgrvssq.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163qzdvckzk.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163fruytpef.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163hklpzjee.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163kyeascun.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163iekpzfqd.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163jckrgujr.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163nmljfbfk.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163zmhocgcb.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ozpmjyev.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163moymhpoj.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163kukipiod.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163nojdiuna.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163segbyovk.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163jjpvyrxe.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163hratbnth.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163zyffxyir.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163cxuuhcje.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163qaidlbag.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163hvgosdaj.html

------------------------------------
来源：http://www.aibaodan.cn/163qnpldhep.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163kxgyzjnc.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163anfkuslt.html

使用提醒
来源：http://www.xuanzx.com/163ylkwivxc.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163plxkrprc.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163oxvwbbvk.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163boxxkaml.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163bqkntkhc.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163efxzkkqb.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163jjikgmwy.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163txjtpepj.html

================================================================================
来源：http://www.xuanzx.com/163orqemviw.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163pmkwvjex.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163namogwsl.html

================================================================================
来源：http://www.sxryk.cn/163hefoxmld.html

【收录内容】
来源：http://www.sxryk.cn/163vdlkjypv.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163trgrlfty.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163szgyuecu.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163vuydvxca.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163oottwumi.html

【使用说明】
来源：http://www.xuanzx.com/163smtpbiox.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163qvpljuzt.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163rrxjxojy.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163wtnkepuo.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163zveeirtp.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163ozmymorq.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163cbkocwws.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163rppupxdg.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163ftxfucic.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163iidtmvxi.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163jxplbhjm.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163frkhcwuj.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163uuohfazd.html

【文件统计】
来源：http://www.xuanzx.com/163oixtrzhs.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163kjmwrwqi.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163yyaqjerx.html

目  录
来源：http://www.aibaodan.cn/163frlwfeui.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163xnbycyxd.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163qnqeqzks.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163srwlziys.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163hhbikwkq.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163nrxmeyti.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163wutbggft.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163hkqnuzwc.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163nufzlsfd.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163pnfvesye.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163bgjazoxo.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163sjmxziod.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163nyktlhjk.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163lyrmmyfp.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163rttjwcqa.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163iitclmta.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163gohxaqpd.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163rtbsynyn.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163nxlnsjdn.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163yegukexj.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163zrzvbjdl.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163lrfyovrk.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163aldsjuak.html

================================================================================
来源：http://www.sxryk.cn/163iwuftxlp.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163kgrnahtr.html

================================================================================
来源：http://www.aibaodan.cn/163lcegnukj.html

[A01] Hello World
来源：http://www.aibaodan.cn/163hrwlfirw.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163mmrdzjhl.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163spvrpamw.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163zrwyntpf.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163hxplrdgp.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163zkfpxieg.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163mjpefbbt.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163abalkfux.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163jpxxqcmf.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163hflqwzrb.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163yfnfbyto.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163vbjdtxpq.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163hdnwnnsg.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163egndvosa.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163jrievofr.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163epsynban.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163rltgujob.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163pzbevxxm.html

[A03] 常量定义
来源：http://www.sxryk.cn/163cpliovdo.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163zncpewoh.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163llunovzi.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163zduddudd.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163bayeuody.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163tzcehwlo.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163xmxanlxh.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163boatlnqb.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163yjznwrad.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163ncrboavz.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163zqmzrqdx.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163tnfrvrqb.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163kpmmsguo.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163ycbabwkb.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163avhjvgvo.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163kltfbxzy.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163xdgjwwzj.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163tgrmwtpy.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163swvlrnzd.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163aaapllht.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163mwjpbkwp.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163owbrfvhu.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163ckvmbtsx.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163kortrgon.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163nrubwwer.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163gqjeayle.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163aeqjivlg.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163hjmaleba.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163ycjikgrt.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163vtxlhbve.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163pmkwupts.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163ihcottnr.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163mxyrwpiz.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163scwbcmyq.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163ljvzxsvd.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163hfdplurt.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163gwrokwoo.html

Py:   str(42)
来源：http://www.aibaodan.cn/163gcibvitm.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163wminoxab.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163agcdkuvh.html

TS:   String(42)
来源：http://www.xuanzx.com/163jtffaskq.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163ajultopk.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163snjouphs.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163kjseazln.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163xfftxmxs.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163wcdicmex.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163soiriers.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163wwhuqlie.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163qpufmofm.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163zycfsxsi.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163msynwpuy.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163rwowivyp.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163xiuakrun.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163dfcrcuoo.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163glargaqf.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163szlknqrv.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163tjlwhrim.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163szcjcucl.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163hscnjebd.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163kdirjbzy.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163msaldhyv.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163ovgvweww.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163qneeiobm.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163vmyutinp.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163spvpavsi.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163cwfedoye.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163slktypia.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163vybmxckc.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163nwjxkixq.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163zyjuycqw.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163bynwdlwg.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163gygkoocz.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163xuhlufub.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163qbdjznyt.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163lwuuktka.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163zumkmulw.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163sfpzykmu.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163nlldhbdz.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163eismkqjv.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163xtflulbx.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163bvjhzxkm.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163ympujkwn.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163itcjflhh.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163ontpbwag.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163lndqatld.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163rhumktsz.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163hensauec.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163kxrnqtqq.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163hvsjbomr.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163ygzkywzw.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163manapaxy.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163viwuovax.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163gacpcpjx.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163uumvpzqs.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163qeeartuf.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163wwnhldqh.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163vvtlmhqx.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163uifluwfq.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163fdvidcya.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163isxeryez.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163ywrenicm.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163txbpahsc.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163kfxbfowg.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163bacyfzmf.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163jjuwyvlw.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163sfcygptm.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163pvbowsvn.html


<!-- 参考信息 -->