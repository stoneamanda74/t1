外链999!wailian999！

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163tyhhogkr.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163zqjtyuld.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163xfgblpww.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163mncwqpqi.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163vxkggniv.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163dpoaihag.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163nwtvtpaj.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163cjytsepa.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163jxrcowsk.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163vunuexvi.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163psnrlngm.html

structuredClone(obj)
来源：http://www.xuanzx.com/163eoxnedof.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163ncwwwilq.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163gwosrvwj.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163jeuctoar.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163lqimpxjz.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163jhfbsjhe.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163sryorlyr.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163dgaexllq.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163vkrdbzrd.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163xfqxticn.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163hrmsaemy.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163eorhqzhi.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163xrcfymlf.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163orydsdip.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163ineufsdd.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163csiqtrdb.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163zvutxkjs.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163bdwrbuzj.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163guhrlxbv.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163kmutqezv.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163vdfisblg.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163njcogiul.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163rtthiewr.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163caxvgfub.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163dkwzyhjv.html

[U105] JS：节流
来源：http://www.sxryk.cn/163hqdoolpe.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163dgnqeawm.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163qtakldrk.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163coyriopg.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163fcefwkbs.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163fmspbzcs.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163uvhyjdlg.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163btzgoryl.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163qwtbtrlp.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163qomsmesj.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163wwqkuvms.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163kyksqsmd.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163lfrnqcml.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163hygfgivu.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163pynhzsrp.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163mvydfeav.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163botopjuo.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ynbwknzi.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163aosbeced.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163dbrosekx.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163ocxvtxix.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163clwlbpia.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163zwffapqk.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163dokjdsxr.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163lmxutjmi.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163phoiluxs.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163inxnhobj.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163myksxohy.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163dtqvfeel.html

npx vite build
来源：http://www.sxryk.cn/163npojbgyo.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163zfdkzwpd.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163qpbltodu.html

================================================================================
来源：http://www.aibaodan.cn/163gcjnzefx.html

统计汇总
来源：http://www.xuanzx.com/163bbfouvst.html

================================================================================
来源：http://www.aibaodan.cn/163wvmxjwqr.html

按语言统计（条）：
来源：http://www.xuanzx.com/163ypzkdodb.html

Python ......... 252
来源：http://www.aibaodan.cn/163cnybxmgz.html

PHP ............ 252
来源：http://www.sxryk.cn/163aipolyej.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163yavjpazj.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163kqdnnorm.html

Java ........... 212
来源：http://www.sxryk.cn/163ejwtwnzz.html

Go ............. 212
来源：http://www.aibaodan.cn/163pkjzyepl.html

Ruby ........... 212
来源：http://www.sxryk.cn/163ncsrwftg.html

C# ............. 212
来源：http://www.aibaodan.cn/163zfnhtvqe.html

C .............. 30
来源：http://www.sxryk.cn/163mcntgwpv.html

C++ ............ 30
来源：http://www.sxryk.cn/163eextirbm.html

SQL ............ 90
来源：http://www.sxryk.cn/163pfsmyfdv.html

Bash ........... 80
来源：http://www.sxryk.cn/163ndcxylma.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163pamyjipk.html

Swift .......... 15
来源：http://www.aibaodan.cn/163sxogczkz.html

Lua ............ 10
来源：http://www.sxryk.cn/163yinvprlw.html

Perl ........... 10
来源：http://www.aibaodan.cn/163zjsgshjx.html

Scala .......... 10
来源：http://www.xuanzx.com/163vkvycrbm.html

------------------------------------
来源：http://www.xuanzx.com/163zdbtmety.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163qzbsyaho.html

按章节统计：
来源：http://www.aibaodan.cn/163zcxyyldj.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163ujhplzhi.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163xuzdwmby.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163tgwiubyl.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163ldcrbglu.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163ufqcgetl.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163fyqdbxyp.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163kzahlfln.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163zzxlxjwi.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163yhaibbrw.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163hxebjiqc.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163uawghmfb.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163tbjgvmet.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163funipmur.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163fumtepgi.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163hiqjystb.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ddqpxblj.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163lwwxqijk.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163vvnpqgec.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163jtruhckb.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163xyhkkonb.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163lfbqzbiz.html

------------------------------------
来源：http://www.aibaodan.cn/163jdwpiidi.html

合计                                  2106 条
来源：http://www.xuanzx.com/163gndjkuab.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163bdethrvk.html

使用提醒
来源：http://www.aibaodan.cn/163czleqitb.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ccublxci.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163qowvkmqj.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163jymvtvqe.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163mgejumll.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163dumsmjhg.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163knxhbjee.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163xwybxegf.html

================================================================================
来源：http://www.xuanzx.com/163fjrhzplb.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163uyxyuvhd.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163xmokucea.html

================================================================================
来源：http://www.sxryk.cn/163bsgxxzjc.html

【收录内容】
来源：http://www.aibaodan.cn/163zvvjmtfh.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163yueixtxq.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163tyuyhffp.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163cgvriovk.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163cjdgeknm.html

【使用说明】
来源：http://www.sxryk.cn/163aqfqcwii.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163tugejhrb.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163manvfjqc.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163cvbsblmf.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163mfhhetcy.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163dtwcdwfk.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163mlkjkdqh.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163pghzyhsw.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163aevmmdqh.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163gfnfrmnl.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163btmyevuc.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163ezepcvoy.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163cuxqllub.html

【文件统计】
来源：http://www.xuanzx.com/163nxdwzmad.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163hqizttki.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163dkryegus.html

目  录
来源：http://www.xuanzx.com/163cdqiuucj.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163uetdbfyq.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163ffkbzhlv.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163equwomdt.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163xwwxuqug.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163naoftsdp.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163yzddfxig.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163qzkreijz.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163yndaqfjf.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163zqsvdsdq.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163qhvdnoic.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163hpygxruo.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163lkwajowc.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163znzvwhlx.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163cbirtiqs.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163mhpbjyia.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163bjdlpdzg.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ncplrvgc.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163betvgbsf.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163jbxkcpnz.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163mciqqzkz.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ogubdyfm.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163uawdynaw.html

================================================================================
来源：http://www.sxryk.cn/163jzylhhxv.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163xjgrmspp.html

================================================================================
来源：http://www.sxryk.cn/163ignyvitl.html

[A01] Hello World
来源：http://www.aibaodan.cn/163awfazfiz.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163nwcujjgw.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163rfbsahoo.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163cflxtjpu.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163zcwuzeuv.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163ncxriwwa.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163pjragnap.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163lmdzgiip.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163xxhjkqxl.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163moywbnem.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163xeiwxgcj.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163gzpslkbl.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163egzpjbxq.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163dxzupynv.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163bvxxzobe.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163negdvgza.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163hddrcsnz.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163sdbuutcu.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163ndzoqckd.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163iusylrfk.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163jjqddjao.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163excmctjy.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163yxdsabxk.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163pxlgtvsr.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163glasvduk.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163wmlfmczo.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163bcmkeiic.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163saantsoy.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163tgkjhndr.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163yutgyvbn.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163rrhglqke.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163onbsiqur.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163krrvutjx.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163vrzfaisn.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163oummkmff.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163fdopdehk.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163knwfjxux.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163knnwbymy.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163btafrjyu.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163wlufsrjl.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163uwvkaxqp.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163mbvztyyg.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163lpkvjbpk.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163snuiqufc.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163nhvzbfiu.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163ahdudqqd.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163imwajnbo.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163xtvapzwx.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163pxlzbkfw.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163eqkfdasa.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163hpzunisd.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163gadubjez.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163obtdrpva.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163zzfaxiot.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163unkbvudr.html

Py:   str(42)
来源：http://www.aibaodan.cn/163cwnmrdtm.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163xauctiye.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163lxvphcna.html

TS:   String(42)
来源：http://www.xuanzx.com/163jtkaihur.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163jyfwvtfd.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163rruxnbie.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163nhymmvdd.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163qrpwitqg.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163quolvwfi.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163sdkkgjdm.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163sdoquokq.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163bwofkmsg.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163tyjqkpla.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163zijjejad.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163sikzzweh.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163yruqufme.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163oddnxxhh.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163mxzuiyqh.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163dazswczs.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163guarpcsl.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163uesgmoth.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163jucdumey.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163qcobynlw.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163lharllbp.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163rqkmbqae.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163ewodwnlg.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163gunardof.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163iexlioma.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163agcljght.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163oknnbqgv.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163jgwbiqhp.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163vpefyqzg.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163iazufgnn.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163jrxuaatt.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163ghubtrqb.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163lppfspef.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163rghpjgmx.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163lbnygzsd.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163nwxjkkkg.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163lysdvhho.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163hslcqwyr.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163jcvyugoo.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163lpyftfha.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163vjymekge.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163ejxbepag.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163hfukyztp.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163zewesnso.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163bzczjckt.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163pcnkddwj.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163hsxwvigu.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163edesiaco.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163zezefyif.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163amxncjjd.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163rbptbqwz.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163fvqoxsvv.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163swpaugwu.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163navuhaxq.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163fxlwbila.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163ovchefas.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ahoaiyae.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163uqqioets.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163gddgsmzt.html

[A14] 注释写法
来源：http://www.sxryk.cn/163dvhsunmf.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163rxvwftrk.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163lrjmcyfr.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163fyxnnvws.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163flljunpp.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163thcpkwwl.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163qrxoiyhh.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163iumnnxjg.html


<!-- 参考信息 -->