外链999!wailian999！

[U89] JS：数组去重
来源：http://www.sxryk.cn/163kkvntxng.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163zidkjxwc.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163gbrjphgn.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ldsabutm.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163pdawzqqb.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163ouuddsgm.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163oiwhwwnr.html

structuredClone(obj)
来源：http://www.xuanzx.com/163gcowzjkw.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163udrowqmf.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163xrszurgr.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163qnerqsjf.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163qiknwogu.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163icldpuen.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163vhdfsycy.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163ouitokkv.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163byogajrz.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163vcuutchs.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163xippfpfs.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163axwklvnk.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163bwpdtpxf.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163ywrmvxww.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163nhiquhqf.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163ssgtsyiv.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163dswzbsvk.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163lnsuxtwl.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163emzqrrmo.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163mmecavbx.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163eklwhahr.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163djaxaaxa.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163bfarjyct.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163nejysfia.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163dydhpmsy.html

[U105] JS：节流
来源：http://www.xuanzx.com/163eofnxkgc.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163uzxiwwoo.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163aeuetmoa.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163wwuwtics.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163ajrmjekh.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163jhkirkue.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163xdwjhjbm.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163gzjakptl.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163nodysgsw.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163rktmlupi.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163xekjtyth.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163jkixucxk.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163lyndsvoe.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163jxbudite.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163hvvwcudf.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163djhhwjbz.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163kzzfmcha.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163vlwftdyx.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163mzsijvez.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163lhojfybw.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163apzcyocm.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163xisiplou.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163bjhvcyto.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163mqhfbmwj.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163utugztqd.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163bpqvzoxu.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163bmsxqlug.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163zghechuu.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163ccaxpxgd.html

npx vite build
来源：http://www.aibaodan.cn/163llxhfglq.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163ifxwjdnm.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163cxtfhzxz.html

================================================================================
来源：http://www.sxryk.cn/163bktccuzm.html

统计汇总
来源：http://www.aibaodan.cn/163ivzdaisk.html

================================================================================
来源：http://www.sxryk.cn/163wmiouexs.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163gugrkbie.html

Python ......... 252
来源：http://www.xuanzx.com/163lnxqxedu.html

PHP ............ 252
来源：http://www.xuanzx.com/163timgdkeo.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163hdysaqkq.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163baorphjh.html

Java ........... 212
来源：http://www.sxryk.cn/163ozddupcn.html

Go ............. 212
来源：http://www.sxryk.cn/163ftcylwga.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163hmgaibxr.html

C# ............. 212
来源：http://www.xuanzx.com/163auytnhrv.html

C .............. 30
来源：http://www.xuanzx.com/163ffhajaqu.html

C++ ............ 30
来源：http://www.xuanzx.com/163wdhsipno.html

SQL ............ 90
来源：http://www.aibaodan.cn/163gyginkid.html

Bash ........... 80
来源：http://www.xuanzx.com/163pjnscctf.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163gxdpfccf.html

Swift .......... 15
来源：http://www.sxryk.cn/163stguajif.html

Lua ............ 10
来源：http://www.aibaodan.cn/163aoztagpr.html

Perl ........... 10
来源：http://www.aibaodan.cn/163omaqcebe.html

Scala .......... 10
来源：http://www.xuanzx.com/163yeynxxyv.html

------------------------------------
来源：http://www.sxryk.cn/163tfzzdqix.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163qgldktdz.html

按章节统计：
来源：http://www.aibaodan.cn/163mkbfkxlf.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163bqgqdmsk.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163xpscbbfr.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163afjnprri.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163tjhajnsz.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163cdelyinl.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163tjuogyxs.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163aygqshfr.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163gokeeaam.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ocsgyycg.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163hyxtpcga.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163zdtzdiil.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163xmgbfbzm.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163vtxomkin.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163wxnyxlgk.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163djjnltlu.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163natektdm.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163ngpdpgfh.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163ocdmefrh.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163ixprdyol.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163tadyrlds.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163gcagtftr.html

------------------------------------
来源：http://www.aibaodan.cn/163vfcbondh.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163jkqrxetw.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163aenrtjzg.html

使用提醒
来源：http://www.aibaodan.cn/163wtbfcrvd.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163hqlissjf.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163uroquvtx.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163rvcepvcs.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163xaritwmz.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163yjhorrdx.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163svklzqft.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163vgtaqiuz.html

================================================================================
来源：http://www.sxryk.cn/163lqjmyxka.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163oaycwvao.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163zoyrwvcw.html

================================================================================
来源：http://www.xuanzx.com/163rxvyxrbf.html

【收录内容】
来源：http://www.aibaodan.cn/163dzqmoptm.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163kmsdonmr.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163vlnposta.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163zavnbjww.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163njoyqdtc.html

【使用说明】
来源：http://www.sxryk.cn/163hgxfsthh.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163vwwzkzfe.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163jlfuiyrq.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163qoukaxjk.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163fnkvyplc.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163luaktbng.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163dlnrmjyp.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163wcnzsgzj.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163tehrusao.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163gcesjiiv.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163trxvviat.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163qnkegolo.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163rzthbafk.html

【文件统计】
来源：http://www.aibaodan.cn/163iiighmvf.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163shafcaud.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163rstzwiun.html

目  录
来源：http://www.sxryk.cn/163qowzwvak.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163jllhhfxw.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163azflkhii.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163mvjqkydw.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163uyqhzzqw.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163qtdtctpn.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163iplduben.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163daczqkav.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163vtlhepth.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163lvkaqqgu.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163iubjslqx.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163jkjhglse.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163czvjhmdf.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163xdxyucgk.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163jtrvdyvx.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163vhxlkusr.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163sxmxkbow.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163cagblvzg.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163bgbzucvn.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163avkhmyeh.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163fwtwhbir.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163tcpeyian.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163ozgcgfut.html

================================================================================
来源：http://www.xuanzx.com/163qrjusukg.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163vqsxhgtz.html

================================================================================
来源：http://www.sxryk.cn/163agtguvab.html

[A01] Hello World
来源：http://www.xuanzx.com/163zqwokojq.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163ffficaah.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163neyxwolz.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163frpahmif.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163rqzkvyuz.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163ycjvfvam.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163lyjltpgh.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163crnvibig.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163fopkagui.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163padjwnhu.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163onocpmlq.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163dczehipf.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163poxhweeb.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163kdszidmg.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163acgqsfci.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163nleegwpb.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163lnrkvbdq.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163juhlbzbt.html

[A03] 常量定义
来源：http://www.xuanzx.com/163shuztwkp.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163lknivcux.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163bupowiby.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163cdghdxwy.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163xrghxtdn.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163lvdwjbgw.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163nfiikbvq.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163ovfwjmug.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163mshpgdvw.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163jbtyqrcf.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163ykckqbfi.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163ffkatjpw.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163hjvxjrxn.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163bcbvimap.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163kwqygvag.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163uoonvjjv.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163zitpibcc.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163nznggmhn.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163kcqfnpfs.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163ivgjunzc.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163gvlvhmco.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163tujhofgg.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163bjksevcj.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163fmltdffp.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163npmobqwj.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163yhsijjwu.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163eyjaztlv.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163abmutfsk.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163batjwcgx.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163xxkrsaxc.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163zwggszva.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163xlxavwbp.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163sqtefzqa.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163ynfetkxy.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163xqjgylbh.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163bhwsprlm.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163yuipfzif.html

Py:   str(42)
来源：http://www.xuanzx.com/163uutqqvbm.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163qxiziubp.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163nqkyyihx.html

TS:   String(42)
来源：http://www.aibaodan.cn/163axjoeunj.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163yphbohbg.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163lvcfmyqq.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163yziufsow.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163appvnyfa.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163nxidamlw.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163pnolnbrq.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163qtnqwolp.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163wfmdwdkl.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163ecsgftph.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163grzttbrm.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163cxlvypoa.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163ggqlxgoc.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163svnjtfgh.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163yjysbqlx.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163ewwuoiin.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163ysgeaobr.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163sleolglo.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163dzewxxsk.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163yjfbwfjg.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163xnhmvjyf.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163cwphoilz.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163wtkpwhld.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163wfsrnilc.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163znmtdecw.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163mwkzbtao.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163ktqtiitm.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163porqfpwp.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163pgdjqgir.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163hnmoemhf.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163zknnveiy.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163gqhmpngh.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163ceykpsjy.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163smawnvtw.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163leoyubfp.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ycvamxjj.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163onwcgeto.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163zhlgjiky.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163nsqksqdb.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ougkmraa.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163uicqyefv.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163yzqzareu.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163zzovikwx.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163esddnhxq.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163qtgjifsd.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163qqregxjh.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163gkosnnpn.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163rjeexuqv.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163kaczasoi.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163mzelorry.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163ipjsedft.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163lgkdqwks.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163prbpljio.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ourpfbot.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163dxbrseum.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163mbmknjxb.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163lfiklyqt.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163wjnvwqnv.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163abzdeyvy.html

[A14] 注释写法
来源：http://www.sxryk.cn/163cjjyqcnu.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163cfmgayom.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163jcxesnhf.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ziptjfpy.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163uiqhfsaq.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163glasmjgg.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163bshzzbzu.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163ywbkohbh.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163bjierguv.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163fhrcihoz.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163feqchriv.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163plgmbgxn.html


<!-- 参考信息 -->