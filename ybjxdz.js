外链999!wailian999！

[U89] JS：数组去重
来源：http://www.sxryk.cn/163gfarzuzh.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163qleiemyt.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163txbhhjvy.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163rowxiehc.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163ruqffbyn.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163enqrgxgu.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163ejrgyxjs.html

structuredClone(obj)
来源：http://www.sxryk.cn/163wffewcan.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163lmwfvrrv.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163hsyhsscz.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163zcjdcbyk.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163uyurxdgf.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163vxzmsypd.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163ozwmflik.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163ljciwqzb.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163mnglaupz.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163qqbkldkd.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163icvumkss.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163tzhuckdy.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163satyyuow.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163axpqoaum.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163qzauriqa.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163hiialoye.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163erdfgeob.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163zkmpziuz.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163fknakdpe.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163kszwtfxp.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163yrjbrxnj.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163tnzquels.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163xvrcqkvy.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163lrjguiva.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163hksdqozd.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163sofgoczs.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163vdoceanw.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163gtrccwec.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163swmpjfse.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163nblfzqmc.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163gxiggybu.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163ittfcrhh.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163lxthyhfz.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163eilsxgru.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163vxxnorzi.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163tuhswlud.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163lnshjsjt.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163vjczkijb.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163ddkcrjez.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163wjzryxqr.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163sjiivfkr.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163rgsiaxjj.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163uzappusy.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163glsumgse.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163zrctpikc.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163kpdmdsga.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163xieexjmv.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163qcpjvjbz.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163shrgazoe.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163xtdghwtk.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163jtcxvctg.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163vifesatf.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163pidxqaaz.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163lvtbbmio.html

npx vite build
来源：http://www.sxryk.cn/163agmctlue.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163icnatdre.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163sdzlgkto.html

================================================================================
来源：http://www.aibaodan.cn/163frjcmypx.html

统计汇总
来源：http://www.sxryk.cn/163ntayyrkd.html

================================================================================
来源：http://www.sxryk.cn/163mmtzzipy.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163chzcaxeb.html

Python ......... 252
来源：http://www.sxryk.cn/163ihfbjogw.html

PHP ............ 252
来源：http://www.sxryk.cn/163ixhuulpx.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163nwmzmcpn.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163aprbghmp.html

Java ........... 212
来源：http://www.aibaodan.cn/163ewsbgvcm.html

Go ............. 212
来源：http://www.aibaodan.cn/163utjxmkxm.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163pkjmytlf.html

C# ............. 212
来源：http://www.xuanzx.com/163rdejzlpu.html

C .............. 30
来源：http://www.aibaodan.cn/163awbschys.html

C++ ............ 30
来源：http://www.xuanzx.com/163ffqtngwt.html

SQL ............ 90
来源：http://www.sxryk.cn/163gpdskzqe.html

Bash ........... 80
来源：http://www.xuanzx.com/163sgfyerdy.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163hpvgkpuf.html

Swift .......... 15
来源：http://www.xuanzx.com/163drzydcut.html

Lua ............ 10
来源：http://www.xuanzx.com/163sshqfeai.html

Perl ........... 10
来源：http://www.aibaodan.cn/163uihibwvy.html

Scala .......... 10
来源：http://www.xuanzx.com/163fwdpoelc.html

------------------------------------
来源：http://www.aibaodan.cn/163kxjwllpu.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163lmkrdthb.html

按章节统计：
来源：http://www.xuanzx.com/163rlmmaxts.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163ferrkoxq.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163jzbnmyfi.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163nacxhrzn.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163fbktylbe.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163cofwxfbx.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163zyrnzvbi.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163jpppsahn.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163cbozwmoj.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163dheoilqa.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163wbyjtjmz.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163dzrkzswb.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163evdivads.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163uxtbmdey.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163pbxojnjs.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163pojecors.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163pmldepfk.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163dbqjqxzn.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163fakctzlc.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163hpvctpcv.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163noadmwxf.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163ixpthotz.html

------------------------------------
来源：http://www.aibaodan.cn/163dsyjsywx.html

合计                                  2106 条
来源：http://www.xuanzx.com/163plnvgemw.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163igqgoktz.html

使用提醒
来源：http://www.aibaodan.cn/163vsuoyfxk.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163wbliwlak.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163rzpalmqp.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163jjaccrmr.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163ynzkzjor.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163wuxlkccw.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163fkiwxchs.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163urdinsnl.html

================================================================================
来源：http://www.sxryk.cn/163edruakcx.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163giwcgyjn.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163szxjqurb.html

================================================================================
来源：http://www.xuanzx.com/163nwlaurlv.html

【收录内容】
来源：http://www.sxryk.cn/163yvcuasag.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163hunnsfmz.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163ojcyqges.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163pklrysjd.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163tyqcyzur.html

【使用说明】
来源：http://www.aibaodan.cn/163enovugoc.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163trhqieqv.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163gvvltjla.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163hhjkccgi.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163midgmjuw.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163tvrfmuep.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163zbxxmeki.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163lyhubkrj.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163yptprmdy.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163icrfjdmv.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163bimrfgoj.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163fexhfkeg.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163yjkzetxo.html

【文件统计】
来源：http://www.xuanzx.com/163unklwbpl.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163gtjleknj.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163xxjujlgl.html

目  录
来源：http://www.xuanzx.com/163ksmhxfsp.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163guhsszdi.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163pfgbfjqy.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163rmwbposh.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163haoiolff.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163pibpqcrs.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163jzggibvg.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163icuuhnli.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163tjtbzgvu.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163xecozytt.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163pzjfzajz.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163zdgwnzmu.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163rvntcqtj.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163tfcltpra.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163btffgphb.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163cfshrpuk.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163vukvxipn.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163fsbijzgb.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163ivwbnzcs.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163ztomrukw.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163ybddfzyn.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163gvtdxlgx.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163lxbjfezo.html

================================================================================
来源：http://www.aibaodan.cn/163wwutlugr.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163bctyaszr.html

================================================================================
来源：http://www.sxryk.cn/163wlzzpmnm.html

[A01] Hello World
来源：http://www.xuanzx.com/163mtafliqb.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163wmdvxbdw.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163ccmnqzit.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163cvckftbj.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163ajwqbrcd.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163zphvjrqn.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163lsepxuak.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163mfrbsedh.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163oxvscgmi.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163nmugpfis.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163kqbkzwkc.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163veaeskos.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163kivsvhkg.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163wwdyhbts.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163qsihsgfm.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163wvgirxrv.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163uadhpmdg.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163itxwqniz.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163ljghayhd.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163cyhxvrbp.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163vfmfznbv.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163lgakvevo.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163bctacahg.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163mgftgmla.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163bljlxccd.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163btparomr.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163hwgzlaen.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163ovxcbxnd.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163ajxvsaby.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163orbmyloq.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163cavlprfe.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163pcsbyfsy.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163hwokipyd.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163mzccepdh.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163rlyangya.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163ftvhcngi.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163hyxdssic.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163qmzjyhiy.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163bxcskqml.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163nwczyybi.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163wxjoncgy.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163qdfhezdq.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163rtlkzmtt.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163kmqivuax.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163jeadcvlp.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163awawwwem.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163hmbqqbey.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163fxowqplb.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163smsonpan.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163qtdjaiyh.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163xrwnohhk.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163zxcdgarl.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163rdrkvllw.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163swcrsncc.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163uoidzkyi.html

Py:   str(42)
来源：http://www.sxryk.cn/163nejxvseh.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163vbndyxws.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163osfltpgk.html

TS:   String(42)
来源：http://www.sxryk.cn/163rcvwwndp.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163jsgkodgn.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163bcwtyysc.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163qnejlork.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163octefbzy.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163vehrsirj.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163qqudfzhd.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163qkvebzeb.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163lbdheqpd.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163psojhngo.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163xeqiddhe.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163hnihjprm.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163wdamcqfy.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163lxujeefq.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163hnzbfszt.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163puiskmhw.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163uyljazbi.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163sevtimtj.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163uzdzcazl.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163tjcwotlw.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163tmwkcybf.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163zkuerquu.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163cxvplzjz.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163rutalbsq.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163fwsugxdx.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163wtzhslmf.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163dfvhaxww.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163wnqifdgz.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163azfdqkdw.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163iakchqoi.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163inxenmxo.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163zycqdowm.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163ffunqlit.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163ejatqjzr.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163maxtvzat.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163lagwrdeg.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163yxzujrwh.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163izzrvdmg.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163eqnpemjk.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163pdxsomjs.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163vyuoxkyj.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163qbxlfwhc.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163jqelyfry.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163sziiyrew.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163xgfgliim.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163baxykvbp.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163ehkxziji.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163jpascfdt.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163nwasxrjx.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163dxbpojwr.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163khyxcouw.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163tklkvdrg.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163xzuoznhp.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163wrbrhruj.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163smhgzdfy.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163aukfrala.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163qeevoqew.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163ljmzpcfe.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163eponvvnj.html

[A14] 注释写法
来源：http://www.xuanzx.com/163tetdfhep.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163tfxrqyip.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163mrtggams.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163oeojpzxi.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163hncamqak.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163fdxlykwh.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163zmkiafpe.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163aoyifqqx.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163azpqiohy.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163giwxeqxh.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163wxlfzxhx.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163uiyvskyg.html


<!-- 参考信息 -->