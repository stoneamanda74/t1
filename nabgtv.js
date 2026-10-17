外链999!wailian999！

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163mgerkmlx.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163pfdskugl.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163xnhjvkpr.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163olfexhgx.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163dmgaaqye.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163zodfdzfk.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163hdmsmiaw.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163sxjrvgye.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163shhftfmd.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163zmsgifwg.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163nrludnqj.html

structuredClone(obj)
来源：http://www.xuanzx.com/163xetvurfm.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163tekgblyt.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163wtfculvv.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163glulprgd.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163zwmlsmif.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163moqwvzfh.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163ibjdqoec.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163hggansrz.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163azotifvy.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163ilrflfdq.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163foliywkr.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163scxgvnvi.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163rkunkhhg.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163jlnqtdet.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163smzeqphj.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163pdikpyqx.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163odtvigdo.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163rawylxlb.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163nzwekryk.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163uhgmwbcv.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163wlqbaoix.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163ztnanmni.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163fvxkajmr.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163iyujxmbo.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163pabywcnn.html

[U105] JS：节流
来源：http://www.xuanzx.com/163twpdpmdd.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163bcndwjqi.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163xmhffxzr.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163abhwdvme.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163sauqjikr.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163spyflvdp.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163gbemelji.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163qxqutugw.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163itnateqm.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163cdlbkusl.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163qfdnftfs.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163gbwbxjdh.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163ukawfgqx.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163qggqobld.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163wfskxqnh.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163yqopjaod.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163eopllfvt.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163bwgauyxr.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163tcyfwnvf.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163jemzytfq.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163ssfhxvbo.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163defybybv.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163xgymedqk.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163pdkvkjik.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163jdssxrws.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163yglexeiq.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163rwizmcno.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163uapqrgsj.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163uxflvppb.html

npx vite build
来源：http://www.xuanzx.com/163kwypcqju.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163mkywvbyb.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163osguvhqw.html

================================================================================
来源：http://www.aibaodan.cn/163gykstsvo.html

统计汇总
来源：http://www.xuanzx.com/163xugcpspn.html

================================================================================
来源：http://www.xuanzx.com/163zahwubbu.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163zfjzurnk.html

Python ......... 252
来源：http://www.aibaodan.cn/163vathcykk.html

PHP ............ 252
来源：http://www.aibaodan.cn/163gzkyqeix.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163kivenajm.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163ssnhgsfd.html

Java ........... 212
来源：http://www.sxryk.cn/163naapwtye.html

Go ............. 212
来源：http://www.sxryk.cn/163zugjkwnj.html

Ruby ........... 212
来源：http://www.xuanzx.com/163avkikuoe.html

C# ............. 212
来源：http://www.aibaodan.cn/163vdhtqqhq.html

C .............. 30
来源：http://www.sxryk.cn/163toacyglo.html

C++ ............ 30
来源：http://www.xuanzx.com/163gqlglkyj.html

SQL ............ 90
来源：http://www.sxryk.cn/163reozowgs.html

Bash ........... 80
来源：http://www.xuanzx.com/163bziqnapr.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163tterrvwi.html

Swift .......... 15
来源：http://www.xuanzx.com/163lndrcbnb.html

Lua ............ 10
来源：http://www.sxryk.cn/163qlexoxre.html

Perl ........... 10
来源：http://www.aibaodan.cn/163urbpjlyt.html

Scala .......... 10
来源：http://www.sxryk.cn/163owwytkgj.html

------------------------------------
来源：http://www.sxryk.cn/163odmerftx.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163aoklaeve.html

按章节统计：
来源：http://www.aibaodan.cn/163etkxotjc.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163dlgzxixz.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163zdzanpby.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163dwvifpkz.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163lazzbtyq.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163rvylasds.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163shukbxdv.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163giizrdqu.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163urgqjqhg.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163kqzvwrgf.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163jlpxzcmo.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163zndxowco.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163qvzvmwni.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ucbspdfq.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163eerhhakq.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163cgwwokth.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163gqcznfcb.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163scnbehju.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163dafvjjua.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163hqtsbulp.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163ktzlmnbu.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163rlfrpdhr.html

------------------------------------
来源：http://www.aibaodan.cn/163mfwtmklu.html

合计                                  2106 条
来源：http://www.xuanzx.com/163epnkgvnh.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163iyvsexsv.html

使用提醒
来源：http://www.xuanzx.com/163skyqgrji.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163vnfzftdh.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163pimrxhug.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163ynquhriq.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163hxtaocai.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163yakbqble.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163avjgnyii.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163nmczcedd.html

================================================================================
来源：http://www.xuanzx.com/163jmxurukq.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163byfwalfg.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163rkuydbum.html

================================================================================
来源：http://www.aibaodan.cn/163xzhjganv.html

【收录内容】
来源：http://www.sxryk.cn/163mfhzjwfa.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163uednpnvd.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163abvttwqy.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163vqqpsblw.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163yysmmjji.html

【使用说明】
来源：http://www.sxryk.cn/163qjvrdehr.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163fejousrm.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163xwxxbvtu.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163oxyvusvr.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163onjtkcze.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163akdinjvo.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163mbtrjscp.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163mdwwlxzv.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163sjllsfgy.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163qgchflca.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163jodmbmxb.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163grffdpyl.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163ypagqxgk.html

【文件统计】
来源：http://www.xuanzx.com/163hmffbjua.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163dbvpiosz.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163fcomkuka.html

目  录
来源：http://www.aibaodan.cn/163pfsnqgqm.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163kvkoqwpu.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163vnsvzlkz.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163ywsdprdr.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163edrzuhym.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163jinwftws.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163azvhjqlz.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163kacnfstw.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163jghkbyil.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163suilhyjk.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163hogtsfsg.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163gwoncjhl.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163dowmlniv.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163goetlhnv.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163kvhwtuxv.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163qtxovawe.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163ypwrjatu.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163bwoaqxdo.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163jawlpjez.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163pahalgby.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163sbvxbsxw.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163qlwfvdju.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163hbrcdqbe.html

================================================================================
来源：http://www.sxryk.cn/163cydrxnvr.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163buiyslwf.html

================================================================================
来源：http://www.aibaodan.cn/163mxarzwxq.html

[A01] Hello World
来源：http://www.aibaodan.cn/163pebhakaq.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163jztfyskt.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163ctltkbnd.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163wveagvde.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163ieqkxaxe.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163pcpwrdvn.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163uljepcwy.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163deyutaib.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163oaflgxcz.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163qtanuoon.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163urgkwlvs.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163xldprfwu.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163xvnmfbbf.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163gdhpzzen.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163txhvudql.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163ayknfrpi.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163xnbyhhqb.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163udjojxso.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163jxxkbfjn.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163egugpcbq.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163pszbubgk.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163jtpbiwcc.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163fynmrubf.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163sbzmlgek.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163ffqojjij.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163eclzakjg.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163ybghupbz.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163jpbgiasp.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163ghytrakx.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163tthelzoj.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163crynexwm.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163oolfnxko.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163gtupkqns.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163vlfhvsin.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163cqtjwsnd.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163anzqeczb.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163foldiivf.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163jxqgrccf.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163ardzaeak.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163mnzljjjg.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163cglaahpo.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ikzrigba.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163dmrzmcvu.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ooqmpirz.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163dpfemfws.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163aklzwost.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163eqaxpksh.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163ipyatzfh.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163gxmihrkw.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163gjoywves.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163ipiixofw.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163qrnoetzo.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163zmoodgpa.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163tznirndz.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163magcuqes.html

Py:   str(42)
来源：http://www.sxryk.cn/163hdunwdcx.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163msmxyjhw.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163yjiajerr.html

TS:   String(42)
来源：http://www.xuanzx.com/163xyjrlldo.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163rotagswt.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163jmgfnuce.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163uhtaotlx.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163awurcrnw.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163hyfesmne.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163uwcpplce.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163pvgixtll.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163jkhkcain.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163lbuscgnr.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163cknxrqvw.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163zskgiwzl.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163friujvat.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163vjenqhhh.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163ecjcuwke.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163usxzveox.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163maieuzpm.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163isjobaan.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163knxhiorl.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163gqwebphx.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163lddkwlvk.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163qdbiagyk.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163rgyppjwb.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163mcthadwc.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163ghklalqo.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163nuiuvmwl.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163vgjnsejm.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163xyvhabus.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163obcucpsr.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163dlosewyc.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163rnxwjxpb.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163bbqntzub.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163lwfrtgbw.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163winnucjq.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163hxsmqupx.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ljdborxj.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ulsigecy.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163cyixwnid.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163rcswloig.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163rareetup.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163srvvqnel.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163rghulqkn.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163gkoucyaa.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163gkewrkxz.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163dekujjpp.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163azmworrm.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163stskkxcj.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163ggggicdn.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163ibvutbdd.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163phqbofck.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163xojwyfre.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163xtxxhfpn.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163vkeobdym.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163esugjuod.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163gbgbltma.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163lltzxevm.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163raaletbg.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163bezklbkh.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163meifzgff.html

[A14] 注释写法
来源：http://www.sxryk.cn/163ovtjzhte.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163xuweulvl.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163uymbnpkl.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163bxcselaz.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163abugxpqn.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163awsavezv.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163vinfcync.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163xjpfzecn.html


<!-- 参考信息 -->