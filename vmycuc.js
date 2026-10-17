外链999!wailian999！

[U61] PHP：正则
来源：http://www.sxryk.cn/163qluhjmtr.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163tklbvzqs.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163vwprdahj.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163evbahksb.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163qtbrabje.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163zifxsupv.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163yuzgnhpg.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163ckxjdkfn.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163ccesmggz.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163gkzfqpnn.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163yqlyreda.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163aispbvnk.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163pbjsaipf.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163fryytfor.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163tucozpfj.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163xuzpuwst.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163pgrlxxnf.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163swwmjmny.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163occsnnae.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163tpzuxrfk.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163pxqexmtc.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163uagcillu.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163cpyctifz.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163piurmusu.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163jtfycrcg.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163xiyysemx.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163cdcsmion.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163tvhtitoh.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163jkqdious.html

composer require psr/container
来源：http://www.xuanzx.com/163olgqjjft.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163xwmqqvfc.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163dtmpwhxx.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163qmdvwihm.html

composer require twig/twig
来源：http://www.aibaodan.cn/163fttvyeax.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163ghhfsflz.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163yfgiyvoc.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163luxohuoo.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163braosolg.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163ussvfgpm.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163ytclfixc.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163camzgkmf.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163cnrengwj.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163ksalowos.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163lkvatymn.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163wloezyxt.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163zefjbrzf.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163ocyjkyrf.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163giljuvpk.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163dpohzzff.html

a?.b?.c
来源：http://www.xuanzx.com/163cumtrasd.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163wzmwulih.html

a ?? b
来源：http://www.xuanzx.com/163zqdzriiu.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163trtotihm.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163pvmmspbj.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163xiyhxmbo.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163bbqyfdgl.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163rbdmygyq.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163peporymj.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163gjtxqber.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163qafoqjgv.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163wpmcvrfj.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163sqqeonzy.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163imuabvic.html

structuredClone(obj)
来源：http://www.xuanzx.com/163mvovhodf.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163onhbfbcp.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163chdhprvt.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163lqewvsva.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163igqgqiwr.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163awgviare.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163eitbwdra.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163wjcpvfld.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163pynydeul.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163ccrlfske.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163abdeftpu.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163cqbpvbgv.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163tqhzyjxt.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163zpbrlswj.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163jcvsgiuf.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163mjzfjlei.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163zntillwn.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163atgxnrau.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163gjxdisfy.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163duefmvof.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163zvikqdln.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163yxmxirrp.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163mhbzxcme.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163oedyfhqu.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163dwwdcvsy.html

[U105] JS：节流
来源：http://www.sxryk.cn/163loelrlyx.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163gfhlkjlq.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163mmjodwmt.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163bhbsevxi.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163vurmsrdx.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163fibygjrx.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163ololhdfj.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163sxhhqlrq.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163spagacfd.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163ypbziqqu.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163bnimlpdl.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163pebcbzuw.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163rlingkbp.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163kaptlvbz.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163pfermfoe.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163qczgsrmg.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163gmfasaky.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163lwzcvzvf.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163mcjruwqx.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ewkyirkw.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163jzyreacj.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163mbrxbdui.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163tbchiqfq.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163zxavgtsb.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163isbiwgzt.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163fwznljdy.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163sbmmcplo.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163lznofyqw.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163arzyntat.html

npx vite build
来源：http://www.xuanzx.com/163cescbqpu.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163sqvniifh.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163nguwuoba.html

================================================================================
来源：http://www.sxryk.cn/163ijamhgpc.html

统计汇总
来源：http://www.sxryk.cn/163blikckfv.html

================================================================================
来源：http://www.xuanzx.com/163mrvvcrxg.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163yegfghee.html

Python ......... 252
来源：http://www.aibaodan.cn/163vemilefv.html

PHP ............ 252
来源：http://www.xuanzx.com/163auwyjonu.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163tvhngszh.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163hmkvwito.html

Java ........... 212
来源：http://www.aibaodan.cn/163dilocjrz.html

Go ............. 212
来源：http://www.xuanzx.com/163uykrukcr.html

Ruby ........... 212
来源：http://www.xuanzx.com/163brzrjzzm.html

C# ............. 212
来源：http://www.sxryk.cn/163ynpkkldq.html

C .............. 30
来源：http://www.xuanzx.com/163uhhgnanb.html

C++ ............ 30
来源：http://www.xuanzx.com/163ekabllmx.html

SQL ............ 90
来源：http://www.sxryk.cn/163scxkagoc.html

Bash ........... 80
来源：http://www.aibaodan.cn/163cetcfrxz.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163pxlnoelt.html

Swift .......... 15
来源：http://www.sxryk.cn/163ikocmrrq.html

Lua ............ 10
来源：http://www.aibaodan.cn/163gjbjritj.html

Perl ........... 10
来源：http://www.aibaodan.cn/163dzyglewy.html

Scala .......... 10
来源：http://www.sxryk.cn/163iilmirip.html

------------------------------------
来源：http://www.sxryk.cn/163vfksmyjb.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163btewddes.html

按章节统计：
来源：http://www.xuanzx.com/163odlsodrz.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163vcttluzv.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ulezqclz.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163mtzufkom.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163lsosrtsx.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163oqxoodox.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163epolndzg.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163vsuqufxd.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163dlzgygfi.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163nhbtohfz.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163mmjstrqx.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163xizdkqsk.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163epyirpsn.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163dbtvxxak.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163btrqplah.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163lpqpbkhx.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163bflaoruq.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163ltuqzmfc.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163urhiymor.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163pydlhgpv.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163btrqvlib.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163wpamxzxs.html

------------------------------------
来源：http://www.sxryk.cn/163teweckzf.html

合计                                  2106 条
来源：http://www.sxryk.cn/163ohntfjbk.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163bohcnvce.html

使用提醒
来源：http://www.sxryk.cn/163kxvjxswc.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163dmsbvftt.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163stucixlx.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163tceniztm.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163nskpjwvi.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163zkhdmuwe.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163sbtfanly.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163plukexwf.html

================================================================================
来源：http://www.aibaodan.cn/163gvdiyywt.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163aacclsiu.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163ntmluefg.html

================================================================================
来源：http://www.sxryk.cn/163rtqrplrw.html

【收录内容】
来源：http://www.xuanzx.com/163rjogpdon.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163xkospdjz.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163pzdrbykh.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163sttazygw.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163imxrmbnb.html

【使用说明】
来源：http://www.sxryk.cn/163zcvbppxs.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163isihmlmz.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163nrehabmc.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163jjzhgstf.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163xbgdeqkd.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163jjpximjx.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163tfrovhhi.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163hjkqsqgs.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163djbebhrd.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163ejbzytpb.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163uszbkxjy.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163tgynmjwu.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163omnnupjo.html

【文件统计】
来源：http://www.sxryk.cn/163erfsyfqm.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163eibfszlw.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163vfvbtmwx.html

目  录
来源：http://www.xuanzx.com/163jsqypzoz.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163kpfaitwq.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163zcoasvol.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163epxrenwr.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163vukzoowf.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163adyxeegm.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163uxwliuvs.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163dmdrdgho.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163upacyyue.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163dugakfhl.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163fbhapewr.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163gxbymevp.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163dqdjobmk.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163scxfypgm.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163bmjdpayf.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163alycexcd.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163xwbylnoa.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163fgqfpopf.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163ypughzpj.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163znkcgmxf.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163ylzkynge.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163qfcnqrht.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163huevkaxd.html

================================================================================
来源：http://www.aibaodan.cn/163ttsrumgi.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163decajcph.html

================================================================================
来源：http://www.xuanzx.com/163rprvdjvt.html

[A01] Hello World
来源：http://www.sxryk.cn/163xkrapqio.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163byyuchno.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163pgzanecu.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163gxmrsoza.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163dowwdnav.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163lljfqkea.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163umjcokdp.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163jtbauyab.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163ouebfcgl.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163uwymhgeg.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163bulmbtrt.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163hqvqegws.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163hddsfeme.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163xzhzgvei.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163vgjzulpd.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163pmuhowvk.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163thhtkdpo.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163sthuqqsf.html

[A03] 常量定义
来源：http://www.xuanzx.com/163rbmboztm.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163wogqwnwq.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163hpqocrpl.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163sotzytac.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163xdqhqqej.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163wuovlidb.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163txjzefsw.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163nwxgdgji.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163gunbgdex.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163jdrauzgy.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163pureslte.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163bhhtfzkt.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163zarcqzrr.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163eqnaqwvq.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163vfvbxlih.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163pedvdpqq.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163fzwujpow.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163obpssbao.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163glcfolvm.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163ssysfwjw.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163nskicydy.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163auhwutez.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163rmkbjlpb.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163zjtvyyrp.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163whjjuwwm.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163yptopjbb.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163xivbqqal.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163uawwsilt.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163araqdaup.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163ucqnkcqa.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163jexkchqj.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163numahprk.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163sicvhqca.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163exynbrqc.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163yubcmusp.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163tgkntaka.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163mttxsvpx.html

Py:   str(42)
来源：http://www.xuanzx.com/163pdwysypg.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163thsntcnu.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163owjxvvlo.html

TS:   String(42)
来源：http://www.sxryk.cn/163pytztscu.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163euzfrnjw.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163nayhkygt.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163qypvlllk.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163hcakyeft.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163etsrjmjg.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163jhnwmamr.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163cjzcltdn.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163gkwgsivl.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163qrfggzwn.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163bixgegvc.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163ilgxipez.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163vuslwkcb.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163dlzamoio.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163tqeweclm.html


<!-- 参考信息 -->