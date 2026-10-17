外链999!wailian999！

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163mmoebjsi.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163hdruqkzj.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163cwcojszc.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163qcuwwcmd.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163ahfthdhz.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ltyfqqeq.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163axbixotj.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163cgdgrgyj.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163qmgenyzu.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163pysthnzd.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163nwozvvve.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163lverqrct.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163sqqdqmpq.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163dofookfv.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163iqzgezya.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163dzzfxkjr.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163dzimkzvl.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163pyzvkkvp.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163caelcmcy.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163utrstujb.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163ctjjctyz.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163guybhpbk.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163ozwahsip.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163aelcxkyq.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163wtqzddbv.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163cmpbgdup.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163soyitswm.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163bfompbnq.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163peueibuy.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163hgqiytms.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163oowsgaqq.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163qyiowhji.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163whqmhaxy.html

composer require psr/container
来源：http://www.xuanzx.com/163qlgbvwcl.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163gnjokxfj.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163zjsdyesy.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163mtqflgox.html

composer require twig/twig
来源：http://www.sxryk.cn/163zxtrdwap.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163ctpbojxl.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163tvbafpyd.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163qhdbndre.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163mxoxkoia.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163lkkpdkpi.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163bdxlmyyx.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163bcspyvhy.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163ddufdjer.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163uaslqnvr.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163ppvvohti.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163mgwbyhkj.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163aqtbcrob.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163wwencfei.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163ahzcrfsw.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163hwklnxvo.html

a?.b?.c
来源：http://www.sxryk.cn/163hsmirfbk.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163lvuaydhr.html

a ?? b
来源：http://www.aibaodan.cn/163ysvbmqed.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163elszgjhj.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163pupmhrnt.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163ozcwjvyg.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163vlhqhnym.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163mduwltzw.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163decbttes.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163hknruulh.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163fsuugqqk.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163ygukrqyx.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163tbysuqzj.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163egjnomai.html

structuredClone(obj)
来源：http://www.xuanzx.com/163xqpsmctz.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163rgolrkkg.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163vgvgfdzm.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163xigwusyg.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163noqufkgl.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163qggmtaol.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163tymzynvf.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163uggtqccn.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163lzzouuis.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163wegisrku.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163tellhlhn.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163ryneszvo.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163mleznlcn.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163sixnjmjc.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163oevzcpdy.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163lojsmwhr.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163wanmcbuy.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163omckmdfb.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163qmprvyad.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163ntnhcpdy.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163nqdaxxhf.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163wxyvlpzh.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163kbvtjwyq.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163sypshxgk.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163todwgagy.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163bkdmuzga.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163zixolybf.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163kgnpsxia.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163hkyoksvo.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163pfkwnawz.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163kbjrwqlk.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163hcjycfet.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163lhnsdhov.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163iyzyzapp.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163knjnkvzb.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163fzvogtkz.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163qkmgawos.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163ulefosbt.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163kostluio.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163dponinie.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163xsajckdm.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163dmkgeikl.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163vmvbswsq.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163kiwvlnvg.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163gpbjquha.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163xudfkkzq.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163olpfuhwn.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163hmeinfzo.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163yutznzuj.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163pjvftwne.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163skgxgeej.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163cqhtqntp.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163mozpkfnq.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163scpaekxg.html

npx vite build
来源：http://www.xuanzx.com/163ijcwptkh.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163mrxirflo.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163xoqxeiru.html

================================================================================
来源：http://www.sxryk.cn/163mrmzncbc.html

统计汇总
来源：http://www.xuanzx.com/163bkobwzed.html

================================================================================
来源：http://www.xuanzx.com/163tcsyimum.html

按语言统计（条）：
来源：http://www.sxryk.cn/163rghijwyg.html

Python ......... 252
来源：http://www.sxryk.cn/163trnbwiqj.html

PHP ............ 252
来源：http://www.aibaodan.cn/163yvcmqupt.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163oqaycttg.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163hozzsteg.html

Java ........... 212
来源：http://www.aibaodan.cn/163vxdsjooz.html

Go ............. 212
来源：http://www.sxryk.cn/163nflvynti.html

Ruby ........... 212
来源：http://www.sxryk.cn/163nvatlkje.html

C# ............. 212
来源：http://www.aibaodan.cn/163skdgutlo.html

C .............. 30
来源：http://www.aibaodan.cn/163htfwvagb.html

C++ ............ 30
来源：http://www.sxryk.cn/163dkutqast.html

SQL ............ 90
来源：http://www.aibaodan.cn/163ohdmtxym.html

Bash ........... 80
来源：http://www.aibaodan.cn/163civlgfyr.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163lsnyrtcg.html

Swift .......... 15
来源：http://www.xuanzx.com/163yvxsvcsy.html

Lua ............ 10
来源：http://www.xuanzx.com/163cweutnqh.html

Perl ........... 10
来源：http://www.xuanzx.com/163dwinrvwe.html

Scala .......... 10
来源：http://www.aibaodan.cn/163hblzmqad.html

------------------------------------
来源：http://www.sxryk.cn/163vygxxsxz.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163nvndxtvb.html

按章节统计：
来源：http://www.aibaodan.cn/163dmmclgdp.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163hztmwndm.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163mppynbhw.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163uuwvxdml.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163tdyxdpdd.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163qwqbjwuh.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163unlpteqo.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163bfugzzcl.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163debtfwhw.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163whsnyozn.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163rrrktbxw.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163reelnlbf.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163viwnrcyw.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163etfkohrh.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163wwxbpbvq.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163kzbxgcdz.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163kaofzbjz.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163cwyzupne.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163crrdvwji.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163nuzdvtpl.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163ipbsxkss.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163hptwbopb.html

------------------------------------
来源：http://www.xuanzx.com/163acdyhtuj.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163prykueib.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163hqyklzew.html

使用提醒
来源：http://www.aibaodan.cn/163cdcjldue.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163hskkmssm.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163oynwlzcb.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163rdzbwlbu.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163omkmoyvy.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163kxqqwnjs.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163xfuoplxv.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163ebzoljzw.html

================================================================================
来源：http://www.xuanzx.com/163rddnldjc.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163vhpcxzsy.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163nrufyysl.html

================================================================================
来源：http://www.xuanzx.com/163hpjkhpnl.html

【收录内容】
来源：http://www.sxryk.cn/163nbksknmi.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163nugxmkhj.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163xsyhxcli.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163zyqavnqt.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163ubwdtzap.html

【使用说明】
来源：http://www.xuanzx.com/163tmtcanom.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163acfqspjm.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163apnlmcjb.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163nmfinflu.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163kpjzrkaq.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163ppsbppsd.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163zjelxsyx.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163idovowzl.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163flicttui.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163iwcjcxao.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163ifzbgksr.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163zlkoafah.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163pdgejmxu.html

【文件统计】
来源：http://www.xuanzx.com/163atpbxqnm.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163bwpppiur.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163evvbcecz.html

目  录
来源：http://www.aibaodan.cn/163unzbvtyg.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163veivlwwj.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163aclmetzu.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163dwqlqhen.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163kftahlls.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163qerqclbo.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163bvegkocn.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163yhnnwknn.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163bmnrprkz.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163fpyruqto.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163tobtlprr.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163swgfynoi.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163pxwjjqhc.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163hdbvnjne.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163gwxusxrv.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163kcyklkox.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163qfxgyeiz.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163beqcbazm.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163lyyefnur.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163rpncauhl.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163foezfjmp.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163htrghsil.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163dqkpgjay.html

================================================================================
来源：http://www.xuanzx.com/163nhgvkhpb.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163wmfrgqji.html

================================================================================
来源：http://www.aibaodan.cn/163nwhcjjik.html

[A01] Hello World
来源：http://www.sxryk.cn/163navecliy.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163iyznbqkv.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163hmvretzg.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163eyremrpj.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163nntasmis.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163jxjgyqhl.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163jzzxsati.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163feuwgfen.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163ohnwutas.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163qytuwxkh.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163myizxybv.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163ldrioqfn.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163lfabsain.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163benbjtos.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163ohtbxvyl.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163kxmpswnr.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163uyzbwdcl.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163gbxvokdq.html

[A03] 常量定义
来源：http://www.xuanzx.com/163uqdehphp.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163ehfjlgsn.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163mutnjskp.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163olrppoxv.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163ztvgebeu.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163kzjkrafh.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163wzskcwjx.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163wstnywhc.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163jzckvwsp.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163ggnvhodd.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163sdrvrclq.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163trgdufnb.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163pienkvlo.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163ezyyqgip.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163pfbeyxeu.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163nejjmjys.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163shnmomeo.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163outddssv.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163mtedvjqs.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163ftvoefae.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163smcrnpts.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163tdekedjf.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163oijpfvez.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163rkuskhwi.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163zjqlfsmw.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163hhstjihj.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ihqkfjws.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163ylcfndxe.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163pgienksj.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163jnwxjdcz.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163cakeodfz.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163yyqpqxsn.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163fkugookg.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163dwxwtkyo.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163ydnmavzb.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163jlnlqobg.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163xksternj.html

Py:   str(42)
来源：http://www.xuanzx.com/163ruwwhqcv.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163wcyrbwev.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163jodifrxv.html

TS:   String(42)
来源：http://www.sxryk.cn/163ktudmtam.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163dunikmky.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163qmjrzynz.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163rmtjnyhe.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163xlnmkvxe.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163eggifono.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163qdsfbqjd.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163ajmqlwcp.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163fawogqzn.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163dtdauxnz.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163gvwfombi.html


<!-- 参考信息 -->