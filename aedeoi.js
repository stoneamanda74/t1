外链999!wailian999！

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163uucaotgw.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163wxdrpyxs.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163lfbxzatc.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163ccytqobw.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163ikefwrvm.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163dzjwedmb.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163karkllhc.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163crsqpjne.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163hlsgxywj.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163auxslgne.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163ybyadwjs.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163ngvsuwaw.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163tgkwkmif.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163vyqtjapf.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163jwbttwau.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163nsxspkqc.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163risiihjk.html

composer require psr/container
来源：http://www.xuanzx.com/163muysskmu.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163yqmoucls.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163jyxvevws.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163alemjmrj.html

composer require twig/twig
来源：http://www.aibaodan.cn/163rbuntwcl.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163jlrwyoek.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163friqsxni.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163chfqqkzd.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163modhtxkp.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163gryibkcr.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163qeopsshb.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163ydpfnkbu.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163xjhrxbkv.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163ueqjsjmp.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163htsmdtzb.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163bqkfcubv.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163abzqogww.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163fbqcywil.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163pbqnuyqp.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163kwhnltwr.html

a?.b?.c
来源：http://www.aibaodan.cn/163atbdqxxp.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163eavrrlqa.html

a ?? b
来源：http://www.sxryk.cn/163pvzzyhxw.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163jtihsmbx.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163fhbxhpqj.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163qhlskspq.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163ukudukay.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163mwkfsptr.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163jwbxkxhh.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163xsdcbxoi.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163qdjxjpmc.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163xqvbtbic.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163juoouhrf.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163gdofzwuj.html

structuredClone(obj)
来源：http://www.sxryk.cn/163drsxrefz.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163gqnadvxr.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163ebjobxkv.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163vntxzcpv.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163jqdbraeo.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163ypbjfjzo.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163nltvtwkx.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163gacoomds.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163gurahjrp.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163lavnuimk.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163xtmyfscu.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163ftycgobm.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163crwqmfgf.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163yrcynswa.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163fsgbiton.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163hzhyqsjd.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163rtkrvwkc.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163fseenxaw.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163yppbcdux.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163effeiixh.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163ysapbbvh.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163oigsaqcc.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163xlpmklyz.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163loxpqnzf.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163tufqghbg.html

[U105] JS：节流
来源：http://www.xuanzx.com/163tefzbygs.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163ryexpobg.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163jtftcgwl.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163dpheoglz.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163ojmmfqme.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163bibjgxib.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163dyiklbkr.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163ynldggmb.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163xaiyuuhe.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163uhyygswg.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163orvlgffh.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163qqqrcsle.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163cwypavsd.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163guhbwhdy.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163stxafqms.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163wzqevcet.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163bgrkuhln.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163islxupec.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163bfdmndtf.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163aacpnlnk.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163bjudcckb.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163abllcrdd.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163uyfoqfci.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163vsdeekbz.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163bkvfberp.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163hdshkolz.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163wxxqrdrr.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163bdemujeo.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163mmwqpemy.html

npx vite build
来源：http://www.xuanzx.com/163sgpccgpi.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163tiwitzsz.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163aafdjgqe.html

================================================================================
来源：http://www.aibaodan.cn/163nmbnpilc.html

统计汇总
来源：http://www.aibaodan.cn/163xdiofltq.html

================================================================================
来源：http://www.sxryk.cn/163qfjbjrpe.html

按语言统计（条）：
来源：http://www.xuanzx.com/163jhnpeaup.html

Python ......... 252
来源：http://www.xuanzx.com/163tgztcwfr.html

PHP ............ 252
来源：http://www.sxryk.cn/163nqwaqtvk.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163xrweqsqo.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163uvolelck.html

Java ........... 212
来源：http://www.xuanzx.com/163thdeezur.html

Go ............. 212
来源：http://www.aibaodan.cn/163dzmclqtl.html

Ruby ........... 212
来源：http://www.sxryk.cn/163xytfinjy.html

C# ............. 212
来源：http://www.sxryk.cn/163eebfyxxx.html

C .............. 30
来源：http://www.sxryk.cn/163ydjhdzcm.html

C++ ............ 30
来源：http://www.sxryk.cn/163rgelutsk.html

SQL ............ 90
来源：http://www.sxryk.cn/163bvcegwjy.html

Bash ........... 80
来源：http://www.xuanzx.com/163cozkonoq.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163kpudqxyn.html

Swift .......... 15
来源：http://www.xuanzx.com/163ntnagwon.html

Lua ............ 10
来源：http://www.xuanzx.com/163bcsrqarx.html

Perl ........... 10
来源：http://www.xuanzx.com/163syfxbfmv.html

Scala .......... 10
来源：http://www.sxryk.cn/163kmqxsnin.html

------------------------------------
来源：http://www.sxryk.cn/163rxkeeyaj.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163rcdbolgl.html

按章节统计：
来源：http://www.xuanzx.com/163taulsrzr.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163nsjufxth.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163phccgptu.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163fszpqjfs.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163objqzcvy.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163dvbzvnzf.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163ezfuevya.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163oxwvnrte.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163shnpptbn.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163duaacsbj.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163pedonymc.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163gvzalxxv.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163unswcomn.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163plqanvhu.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163idbjomai.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163mfhpnxjy.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ejextqpn.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163fgtbfxnu.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163pnmxizvd.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163lmmcutjj.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163jasssyot.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163hgnizgac.html

------------------------------------
来源：http://www.sxryk.cn/163qflmatmj.html

合计                                  2106 条
来源：http://www.sxryk.cn/163njsegqhm.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163gcpwqjyx.html

使用提醒
来源：http://www.xuanzx.com/163lbxsuflb.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163omeuezzd.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163clmtfpig.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163eofjqgmx.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163czbwgagw.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163xzuxammp.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163fegmoqvj.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163afubczrc.html

================================================================================
来源：http://www.sxryk.cn/163pdlwgija.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163amxcwpof.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163pngksulu.html

================================================================================
来源：http://www.sxryk.cn/163oickxkve.html

【收录内容】
来源：http://www.aibaodan.cn/163tqzmkglh.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163btonptnw.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163tdzekdpt.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163kigmeuzu.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163axzxwygz.html

【使用说明】
来源：http://www.xuanzx.com/163abazpfir.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163siwfiome.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163pqvnttca.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163jskgrjfz.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163hhancslg.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163fkbnllhi.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163lcoiatfu.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163spaafuvf.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163vyslmuga.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163pkucisrl.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163ineqtgik.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163ihepvemx.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163ubvshnus.html

【文件统计】
来源：http://www.xuanzx.com/163btjzhgbl.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163hwrpxkig.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ujzlrebc.html

目  录
来源：http://www.aibaodan.cn/163cclxydmw.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163drurrnoi.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163ssqpzsuy.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163krayjyck.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163rhugbgjr.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163sublelfb.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163uoefswap.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163gpzshrxf.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163ioxrlpzg.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163vamkjnqk.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163uoxgrohz.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163egckakcd.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163nsslqejt.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ksyqqyvt.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163afcieglx.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163wpfskbpo.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163wbcjofcq.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ezhyxkez.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163kdlbaubd.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163odqeuvki.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163kngmxpan.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163xihidrjr.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163lgsixgku.html

================================================================================
来源：http://www.aibaodan.cn/163xzanedfd.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163nnubsrew.html

================================================================================
来源：http://www.xuanzx.com/163vgsngtrh.html

[A01] Hello World
来源：http://www.sxryk.cn/163blnrvdjk.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163tbldprix.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163jificllb.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163wmymsnua.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163yviudato.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163djghtzzl.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163hgefuyer.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163yerknhzp.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163pqrpvtgh.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163bmnjecao.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163pzmrnupt.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163frvmfzcl.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163mwphzwql.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163bjrpbfai.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163kkzayjet.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163ilpmicee.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163bhclceks.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163xbzkegxa.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163qxlyjqra.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163irbgmhmx.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163kvowoquq.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163ljougsuw.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163klodsjom.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163ngdkckvi.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163mypcgnct.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163ijoygmzm.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163qiazykqn.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163rxdmossi.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163wsmrzhrc.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163kthoqvqo.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163wyydfgrq.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163uqcdnktd.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163acyvwdpn.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163szkykxxp.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163ilhqauib.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163wyzgqlmq.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163tniarxey.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163fobhbgtp.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163giwskegd.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163ybhxgnuk.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163mnafcflr.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163hwiusbnw.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163nsssgjti.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163aqekltwe.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163oxgmpoix.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163ekydvgsf.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163jsjsipzw.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163fobjvvmp.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163wrfzabvt.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163fjxwjjpu.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163ntcjdtzd.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163nvoqsiif.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163dmeqkcyx.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163oghyagfp.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163bfpdopkp.html

Py:   str(42)
来源：http://www.xuanzx.com/163agasuahe.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163molorppt.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163zffsbigm.html

TS:   String(42)
来源：http://www.aibaodan.cn/163eatzrtvp.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163jkcpfhhw.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163ofqldhwd.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163avgcaedd.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163pmxcioem.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163nlmltmmo.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163smbwavle.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163zuqqbpun.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163cwgbzkqq.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163lmszegah.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163rxpkwgsy.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163xfbsqffq.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163jrlxgwoo.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163euefzjae.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163yhkkzpub.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163xltzuxce.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163dvmhldft.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163wksiopwy.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163exvpqzlw.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163kxcrfnfq.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163xhqpelrc.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163cswoadap.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163xqlojsyd.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163otqkeeqe.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163ldjbipqw.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163xubjhqbp.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163hjipnhln.html


<!-- 参考信息 -->