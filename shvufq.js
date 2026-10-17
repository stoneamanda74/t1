外链999!wailian999！

[U89] JS：数组去重
来源：http://www.xuanzx.com/163pqzbmbjk.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163mcsqnruu.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163uxqvcgtr.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163jqyofgpl.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163hioqugpv.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163teaofwyz.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163jmcacltw.html

structuredClone(obj)
来源：http://www.xuanzx.com/163lnqdqglv.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163jvmmsjld.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163rpvknzko.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163ckdnquwp.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163ngxqtxzv.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163eittvvpw.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163eyihnais.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163mwomanfn.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163yxjoskwt.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163bdsjqtat.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163khneekhj.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163qtygzisg.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163nsvqpcvr.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163auwwmpwr.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163xiqhyovv.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163kmjmhauc.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163ojilpwyg.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163iybavots.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163wtmdmdoa.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163edstczwo.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163xpjifbui.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163asmmjlpp.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163bdsdofcc.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163gtzikcyp.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163yyqwwuhl.html

[U105] JS：节流
来源：http://www.sxryk.cn/163kftnantp.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163imfuiqjj.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163nonvdgll.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163monorgdl.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163tgvdgmkg.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163carlnyng.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163aiypkopy.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163jbbirciv.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163mwjhizga.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163uijaahmz.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163xkcxkhfu.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163ogvgfhro.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163htbecuea.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163mhiqkfak.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163ghvnfwcf.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163bvuulkos.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163zsqrqcqz.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163oglivkfr.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163vizyzkyz.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163nwoszvlo.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163jjyxjfxj.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163evpdalxj.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163qmuvdesq.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163gtkqxgjz.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163pnarjysu.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163bgdhenok.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163sqxintiw.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163edzwwvxj.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163pflcsehh.html

npx vite build
来源：http://www.aibaodan.cn/163juudblxu.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163rjdkqwsh.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163rrvmszfh.html

================================================================================
来源：http://www.xuanzx.com/163skgosbhp.html

统计汇总
来源：http://www.aibaodan.cn/163ebihuzlm.html

================================================================================
来源：http://www.sxryk.cn/163kmideydt.html

按语言统计（条）：
来源：http://www.sxryk.cn/163lsftuafu.html

Python ......... 252
来源：http://www.sxryk.cn/163bnlxssxv.html

PHP ............ 252
来源：http://www.aibaodan.cn/163aytgxlpo.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163txennfuy.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163zxkcsjcm.html

Java ........... 212
来源：http://www.xuanzx.com/163tajdensx.html

Go ............. 212
来源：http://www.aibaodan.cn/163hyieoinl.html

Ruby ........... 212
来源：http://www.xuanzx.com/163masbjpzx.html

C# ............. 212
来源：http://www.xuanzx.com/163kvyfarxz.html

C .............. 30
来源：http://www.sxryk.cn/163unavahwl.html

C++ ............ 30
来源：http://www.aibaodan.cn/163bfhmbfte.html

SQL ............ 90
来源：http://www.xuanzx.com/163sldwmpli.html

Bash ........... 80
来源：http://www.aibaodan.cn/163oppapddk.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163smlhljqe.html

Swift .......... 15
来源：http://www.sxryk.cn/163huvnvuth.html

Lua ............ 10
来源：http://www.aibaodan.cn/163sqtobeis.html

Perl ........... 10
来源：http://www.aibaodan.cn/163axikcgiv.html

Scala .......... 10
来源：http://www.sxryk.cn/163efpqbdtm.html

------------------------------------
来源：http://www.aibaodan.cn/163xninezzm.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163yqlmkoxl.html

按章节统计：
来源：http://www.sxryk.cn/163vgksrodo.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163tnhzsuwx.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163dmofskew.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163dimourlw.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163zfdfdhgi.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163vapblqod.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163vjrwshab.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163kksdbzuc.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163zeriithe.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163tgnquibk.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163klpsnbpv.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163xtnrjwja.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163mmchdzjg.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163csoywxpu.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163yugwwbbu.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163rpinqazg.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163pnlvdtlf.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163xwfhmtoe.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163eypathpb.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163zhedycny.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163mwgyazwq.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163eayvxqdh.html

------------------------------------
来源：http://www.aibaodan.cn/163fxwylbka.html

合计                                  2106 条
来源：http://www.sxryk.cn/163rsnathbu.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163bykmaejo.html

使用提醒
来源：http://www.aibaodan.cn/163kxjmudtn.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163qcrguwrj.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163veflhoys.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163tmmfigpe.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163geeluyiv.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163hgffyrgf.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163kxwaulvb.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163ludojius.html

================================================================================
来源：http://www.xuanzx.com/163pljubuax.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163tchuylhu.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163chocqzcu.html

================================================================================
来源：http://www.aibaodan.cn/163wgxdfvlr.html

【收录内容】
来源：http://www.sxryk.cn/163rebklhdz.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163ubpbvvpn.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163xmkrzuws.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163cyfiacvq.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163aulzbdcs.html

【使用说明】
来源：http://www.aibaodan.cn/163ndvepllh.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163yijnpzsv.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163nmmhpfvu.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163xsemjrqq.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163brvwegdj.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163ssmfgdmk.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163czggixol.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163nmrfddny.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163zxsgwnjg.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163tbdyuoxk.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163bwrdvorc.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163mklybohm.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163mbwhxtdh.html

【文件统计】
来源：http://www.xuanzx.com/163xhxmdzef.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163tekxccqi.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163njuawsty.html

目  录
来源：http://www.aibaodan.cn/163rwlctnri.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163yhtyokhr.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163swhcinqi.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163gvjaesjv.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163wkuqdpud.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163jvuoqnfm.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163zfnyljsb.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163zwghbrcn.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163ieyehgdy.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163dmdozpna.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ooxlyxoa.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163kfanmmxn.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163vcubvmut.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ivlhxwfk.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163djhfuvjo.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163gnzvubte.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163meckgmqc.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163eimexzou.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163tnfugcfe.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163zuiijavc.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163tfreiuml.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163usgkznzl.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163qmvqphtu.html

================================================================================
来源：http://www.sxryk.cn/163qbacgkzl.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163folaiqne.html

================================================================================
来源：http://www.xuanzx.com/163cchuuunc.html

[A01] Hello World
来源：http://www.sxryk.cn/163nmbztbws.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163amzlkqek.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163snlndpeg.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163oxgzjwvk.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163fvyhseqr.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163bsgveapp.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163cnohtnwn.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163jmuzdsrf.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163ssydgbhl.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163uoahhxhu.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163owlrvjda.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163kghlnwpk.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163yxenmvfw.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163kyicfvoq.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163uuphfyym.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163bqkvxphp.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163thoicmbi.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163tfizbchn.html

[A03] 常量定义
来源：http://www.sxryk.cn/163lfgeodhn.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163efyrjipw.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163bpqzxcxj.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163ubvajmul.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163oxwyjrmg.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163zwugfbyy.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163ldbivgrt.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163kxaccrvs.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163dxzbvlfq.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163gnacjhrh.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163zgcqtldj.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163icknhzmh.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163qynfsspx.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163fwjqokcs.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163federzla.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163lpxkbucv.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163fgoifdzz.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163uezvxeyv.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163mguoouub.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163pmtthhhp.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163wnmifmre.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163qvgnuzqf.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163hiujrtzx.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163fsujqseg.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163jyafmcem.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163fmbhyfyp.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163xczbbmhv.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163pkczwkhv.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163fbqtexnb.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163npfpwoyq.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163quxzdjtn.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163qhflqrvn.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163fmyfafaa.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163scuasxhg.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163cnqzxnbj.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163dqxbdfgv.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163cojwdidm.html

Py:   str(42)
来源：http://www.aibaodan.cn/163yvikszfj.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163lqgihbvi.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163hcssolzg.html

TS:   String(42)
来源：http://www.sxryk.cn/163qmdkmzsc.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163bshywfzi.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163nfigmchj.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163tgxyidwb.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163icqhipur.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163rcwkguax.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163qacrlvip.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163vxsvwvst.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163ccbbsyhj.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163qwvvlwyq.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163bcyabkda.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163rvefvikx.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163ypkkuxdm.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163bleubael.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163dcozcdhg.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163bnyuebno.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163rpbvpeeb.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163yvnjeuni.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163wfycvovx.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163tydlskuf.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163dcbrhuds.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163baxazouq.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163ojrxluar.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163urffcyjm.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163txyefcjx.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163txsgszbf.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163vwkwjzwv.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163xjtttwsp.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163afzasjdh.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163gcrzqklk.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163yomxjcsy.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163dmniwqzf.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163fgoqlwug.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163qhfwagqe.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163mtdjfank.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163vghfyxdy.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163qiukbfhy.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ewdijewr.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163vmfsseqk.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163kcdhxivm.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163oqvleyrx.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163sfdwrujq.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163yrzfxrii.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163dhvwxawb.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163huaownqg.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163btkblaoj.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163ubrouhgu.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163fpdtvvyf.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163ejwwrvuv.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163vpvmkiro.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163scgjfdrj.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163jkdngtdz.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163rrwfdjss.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ktslsmoj.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163jwdfmazg.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163itkxghmo.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163alyplowc.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163redcfxwa.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163qzrbmtsw.html

[A14] 注释写法
来源：http://www.xuanzx.com/163gkscjeof.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163flehhtjy.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163bhlzlkas.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163hpbvgsah.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163zxhmvwew.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163tholsimp.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163xcmjzter.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163nycjvett.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163zptxpgyj.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163uhwlqwse.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163sfathteg.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163idzdjuxc.html


<!-- 参考信息 -->