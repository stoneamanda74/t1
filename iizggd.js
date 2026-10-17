外链999!wailian999！

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163pbxbelpu.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163akpazbrs.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163pawrrvth.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163lzehkkht.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163xokscqjw.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163zkukahrg.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163vkitndnh.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163ilyttlhx.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163xwusxukz.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163uuizjtbc.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163bhhnuhhq.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163tdtpxieo.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163ybwquocu.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163etxvipvw.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163qjrcgicg.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163bteawweu.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163asntwwls.html

composer require psr/container
来源：http://www.aibaodan.cn/163ykiqaeqv.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163wzygcycd.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163osawkwtn.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163vnpzgydp.html

composer require twig/twig
来源：http://www.sxryk.cn/163qailiqtb.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163lubxfyoq.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163boxcfvqn.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163xzrdshze.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163gunsetwf.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163goausidb.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163yeczrelt.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163lymnuhsj.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163mbkhnkcl.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163jzqpceqq.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163crmfpzpm.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163dipqxifs.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163rrkghzhz.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163tbpequad.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163lphqsabk.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163crnifavv.html

a?.b?.c
来源：http://www.sxryk.cn/163cojzrwhn.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163btyhzwqo.html

a ?? b
来源：http://www.xuanzx.com/163qcwyowir.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163ngtcmvvg.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163nqfahwye.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163lgsbjyuj.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163gtzooyzs.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163tafnlrwq.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163bqeazjil.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163vitmpvuc.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163lmgxlbwp.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163iexccrxr.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163itlylkfh.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163mvurzbkf.html

structuredClone(obj)
来源：http://www.sxryk.cn/163xjldmbef.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163xyaskcta.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163vignmcyu.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163vuufncgt.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163zofigpva.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163gytsvfvl.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163lwftsjwz.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163lpbgebzh.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163rfzgmvjp.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163ofzwcutn.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ebxwmyag.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163iamvoegf.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163hfchypts.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163wpqhcutd.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163okmbjxtc.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163ohvqdxey.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163hiplowbv.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163nmkpjbzz.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163lcczbojc.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163kqmhlngb.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163uszlvbwl.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163waujeeaq.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163zmksuzkj.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163klmglvan.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163geymavhy.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163edkwdwao.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163kqweavui.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163azmlikrp.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163fbybngye.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163vqyxatsb.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163xnmwpapg.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163ybtfccmh.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163unxnaabc.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163mqziqaua.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163xcqvzltf.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163tiqmejjn.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163hkewnddb.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163wpoptbum.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163peozctfc.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163kvomlpwc.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163eurknrgm.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163qlrqhrbs.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163getcqiam.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163cxkcfjyj.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163gsvxhfqh.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163vwcgfwnq.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163oybbsggk.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163xurzlmua.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163lvtjqhih.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163hnrdilto.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163jqmkhfob.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163ovdyjntw.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163ghbkkqbn.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163zcfhahud.html

npx vite build
来源：http://www.aibaodan.cn/163bxwzyscx.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163mnzwdinw.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163rulfnndu.html

================================================================================
来源：http://www.aibaodan.cn/163ivoqfiwh.html

统计汇总
来源：http://www.aibaodan.cn/163txkpjiju.html

================================================================================
来源：http://www.sxryk.cn/163lgfxukes.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163vpdbtpuy.html

Python ......... 252
来源：http://www.xuanzx.com/163xsrzphbt.html

PHP ............ 252
来源：http://www.aibaodan.cn/163vqivqynv.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163mjebsxvc.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163hjkodjkx.html

Java ........... 212
来源：http://www.xuanzx.com/163lcjpvewi.html

Go ............. 212
来源：http://www.xuanzx.com/163udosvhom.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163mkquisit.html

C# ............. 212
来源：http://www.xuanzx.com/163wpsuljno.html

C .............. 30
来源：http://www.sxryk.cn/163syuethkf.html

C++ ............ 30
来源：http://www.xuanzx.com/163ucpavfnn.html

SQL ............ 90
来源：http://www.xuanzx.com/163lpbzvlxn.html

Bash ........... 80
来源：http://www.sxryk.cn/163gkcjgitp.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163csafaqah.html

Swift .......... 15
来源：http://www.xuanzx.com/163csojmpmk.html

Lua ............ 10
来源：http://www.sxryk.cn/163gzeldkch.html

Perl ........... 10
来源：http://www.aibaodan.cn/163apqxokfc.html

Scala .......... 10
来源：http://www.aibaodan.cn/163pchccpqy.html

------------------------------------
来源：http://www.sxryk.cn/163eqjkrypt.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163lvnbssnw.html

按章节统计：
来源：http://www.sxryk.cn/163wwjhbyoh.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163eukktpnq.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163rwtfemnx.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163rdyzeqny.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163hkaucemj.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163ztkohthi.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163pdqhitby.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163bttqlxuj.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163bkcfadxg.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163hjkcawxo.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163ygxdopfk.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163eeptfkkw.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163vmpqslco.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163fkvoiazg.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163mivjemeh.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163dpbuvnvg.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163dkagcwiu.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163eddfbmxu.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163uqunshqm.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163tsrxpjfd.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163jkdvfdov.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163huscyhab.html

------------------------------------
来源：http://www.aibaodan.cn/163jlczaugx.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163mmawbygh.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163vgnyflhu.html

使用提醒
来源：http://www.sxryk.cn/163qcvgalti.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163rsfninws.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163lcozvytx.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163zpnjvvjx.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163mbwxflpl.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163eudqzfmg.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163gctjyyzn.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163taektwaz.html

================================================================================
来源：http://www.aibaodan.cn/163erfiqkqz.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163adxtmuot.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163bkdcdwsr.html

================================================================================
来源：http://www.aibaodan.cn/163wfejzaxh.html

【收录内容】
来源：http://www.xuanzx.com/163timkghme.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163cqjgeeph.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163xjkfeivk.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163oggdqbhe.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163kelfmlmi.html

【使用说明】
来源：http://www.sxryk.cn/163tefxzucb.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163ikcexfnx.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163nbmkqica.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163rrqldjtk.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163ynhkmrbr.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163putekxsu.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163nieeibki.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163lmhupsdk.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163dwfzfxca.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163fuelkgvh.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163exilvkbl.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163wwzjuqyv.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163fyhzjdtf.html

【文件统计】
来源：http://www.aibaodan.cn/163lowavyzf.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163pveiwyoo.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ilokrmxt.html

目  录
来源：http://www.xuanzx.com/163ywyrxnxn.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163nuwwwfpw.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163yznyakwp.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163btuzduax.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163jqpqbapy.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163wvkliusv.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163iyojfjfb.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163voplvbgl.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163btsopfcs.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163qdchfrbo.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163fviarskm.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163qlhlauyc.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163tilungan.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163byvlwqdc.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163hqtukouf.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163dxgulehs.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163npqfdrnn.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163pwpfckff.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163gdfcxyie.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163qofyggvs.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163vclpongq.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163haqcaqxz.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163abpyqcwg.html

================================================================================
来源：http://www.xuanzx.com/163mfnjkaev.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163vvemeobo.html

================================================================================
来源：http://www.sxryk.cn/163qmuwavlk.html

[A01] Hello World
来源：http://www.aibaodan.cn/163mlgatjum.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163zffmhivr.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163bcivteuy.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163acfvomug.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163xfcnyjay.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163sxmrwoou.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163vfgyuymd.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163yghdsbau.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163qoufshkr.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163cnhrkpcl.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163cmrajvjs.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163keiywowv.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163ouowsogp.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163cdsndmog.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163oevriyxo.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163ttnfhbqp.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163htwrlzxp.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163lsrnbcpc.html

[A03] 常量定义
来源：http://www.sxryk.cn/163qyylxmhy.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163tqgbqbss.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163jrdkeizb.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163nimsohey.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163dkgouaip.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163htemspox.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163hmrirhzh.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163roqexeat.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163mgveqikf.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163fejwfukh.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163jintznyq.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163bopsmbft.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163slqgqioy.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163qzrufxcb.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163mazbwhjg.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163hoizumbe.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163hckfvmem.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163oynoagxb.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163tgqucogf.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163tzhxdcgd.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163wkdhblya.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163sttramyc.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163osigwryf.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163rjdewogf.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163weofrvzp.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ujivngrx.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163jhtvicni.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163efxzgfkl.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163ajvagqyr.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163aeweqrcc.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163evuzxslv.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163ptjlrazg.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163wvmrckgl.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163tvpmcmmh.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163vjeiarlb.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163iifdwjlg.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163hrjlwuol.html

Py:   str(42)
来源：http://www.aibaodan.cn/163dbtdaqbx.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163mavexusv.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163unosehxo.html

TS:   String(42)
来源：http://www.xuanzx.com/163ppyzirfj.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163aqpwhdkg.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163kjhwykmp.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163oqhdqyef.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163rjytawjd.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163otiftwar.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163jeqgybti.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163phkudalt.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163piwyfdcl.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163rmblcuus.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163dmtqczar.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163emthhdbv.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163ljvpqfyi.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163lhyenlfx.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163aowlpdwp.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163wevejbmf.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163fwsbtiwx.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163azdqvycz.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163zffjunix.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163wpisgolm.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163avseecrs.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163rvfvgrxj.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163rmotdmpk.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163exfcevjj.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163wloxdgxf.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163phzvdwvf.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163ozfrrlqy.html


<!-- 参考信息 -->