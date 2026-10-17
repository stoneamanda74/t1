外链999!wailian999！

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163rzdbbcbn.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163qoxwquhl.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163wxxegnyk.html

$obj?->method()
来源：http://www.sxryk.cn/163inrtwyzj.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163dtpdrtwu.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163vorodgbb.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163umtnyhio.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163biugsioz.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163rshvtvls.html

"值: {$a}"
来源：http://www.xuanzx.com/163yltnbrtk.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163rvxfeimf.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163pycxehjh.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163rfwqxocx.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163pgfzfmrl.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163fevqshgm.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163pcayfsoa.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163vfcreezu.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163qfgazshx.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163nanfutub.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163ptfrdque.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163ndbhsqlw.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163zypszqee.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163vjhosmcn.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163hzvngzgf.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163awodaxgg.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163fvmgddgq.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163albicbks.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163ejcpjrac.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163ubbwfvoh.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163dbeyqlca.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163evfzvirm.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163pjzitmht.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163fpvfsbnt.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163xdwypjnj.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163pqtjtncu.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163vycngvly.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163kxrfykmv.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163dddkrtbc.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163jrsxmjmz.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163corhvwpr.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163wfutwvpn.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163mcnugrhp.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163qzkqshkl.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163vnhzogir.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163vysllhmm.html

composer require psr/container
来源：http://www.aibaodan.cn/163llzotqvq.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163pnaeemja.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163rvmiyvac.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163ixjimwcp.html

composer require twig/twig
来源：http://www.sxryk.cn/163ephgutxq.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163glchdzwr.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163ucmdmiud.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163zqneiwer.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163qqrjkjqj.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163yearkhhx.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163megfpvzz.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163kolcqsbj.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163psqddyyl.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163bbraorja.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163hgkjvzoi.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163ckwdfiyc.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163qwgxyzay.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163zyjkrszt.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163cjkyvyru.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163sfqycuwj.html

a?.b?.c
来源：http://www.xuanzx.com/163rzsorqge.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163bulwevpt.html

a ?? b
来源：http://www.xuanzx.com/163epuazhcb.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163prsixbvh.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163vpwodaoe.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163jetohzsi.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163sqfeipip.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163tsbgfcqj.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163smdlnufw.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163pmltwfbi.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163acmtajyh.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163wtlgikxk.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163xbnkccjj.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163fosifczt.html

structuredClone(obj)
来源：http://www.xuanzx.com/163nxxkbgvf.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163bqzscqzv.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163vurchmzf.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163cbcuzubk.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163ksfgmqsn.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163enbsvwpm.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163fnqqjyuo.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163irrpierd.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163wtribkdt.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163jbbbwnid.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163dtfpwtzu.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163bozhmjgr.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163hjidaxne.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163sbhltjts.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163tdqymekm.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163pvfchhnv.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163zijntenc.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163zrndhkwb.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163vskookdr.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163imgjrprw.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163smejqxya.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163hdrlfson.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163ykkzeynm.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163tflbqinq.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163wwmrvhrd.html

[U105] JS：节流
来源：http://www.xuanzx.com/163zfrtyyij.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163xtpmqtqc.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163bkjyfqfg.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163coipiapo.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163snklkkji.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163okbjamjb.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163uketlbra.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163xjkhzuiy.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163mbdmpuwo.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163unlinszy.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163qqublohd.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163horqzowp.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163zexkmblp.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163lhxxshwg.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163aoixspcj.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163bugfamkf.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163zhgjawdb.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163vhktucpa.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163fpiqoffk.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163bizpkovv.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163bvylzqov.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163ycovardq.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163ankwtcmv.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163pwywvjtg.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163hyolgufe.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163untctire.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163cllrwiru.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163uvatoxgv.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163krunmneq.html

npx vite build
来源：http://www.sxryk.cn/163lnrjxjth.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163mmupyoeu.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163jqvstgsv.html

================================================================================
来源：http://www.aibaodan.cn/163qewodqmc.html

统计汇总
来源：http://www.sxryk.cn/163zrqmzpdj.html

================================================================================
来源：http://www.xuanzx.com/163sszfifgk.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163stbrfgoj.html

Python ......... 252
来源：http://www.sxryk.cn/163onvbxfig.html

PHP ............ 252
来源：http://www.aibaodan.cn/163pptlohjz.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163ayyizxfg.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163hsbwqflt.html

Java ........... 212
来源：http://www.xuanzx.com/163jjyjayef.html

Go ............. 212
来源：http://www.sxryk.cn/163ivktiybs.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163mbgrprrv.html

C# ............. 212
来源：http://www.xuanzx.com/163uykgnkrm.html

C .............. 30
来源：http://www.xuanzx.com/163jlkcpvzz.html

C++ ............ 30
来源：http://www.aibaodan.cn/163tmgxybzd.html

SQL ............ 90
来源：http://www.sxryk.cn/163sukkvach.html

Bash ........... 80
来源：http://www.aibaodan.cn/163azkzidyo.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163rqceuuup.html

Swift .......... 15
来源：http://www.aibaodan.cn/163lyztncvt.html

Lua ............ 10
来源：http://www.sxryk.cn/163xfgsbvdf.html

Perl ........... 10
来源：http://www.aibaodan.cn/163mffjrmyb.html

Scala .......... 10
来源：http://www.sxryk.cn/163mziuyubu.html

------------------------------------
来源：http://www.sxryk.cn/163pqzepvkz.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163uxntopzz.html

按章节统计：
来源：http://www.xuanzx.com/163qjykfdyq.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163pbohjnkv.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163wyfzreoj.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163tsyzljgg.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163gzwlcayj.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163qqtwtiiy.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163ehhwcinl.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163rquguprm.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163xcyrcfwk.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163qlpwxgvz.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163rcnlhwij.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163hfugnhly.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163axedddgy.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163olxbbnzx.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163durtfbfg.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163agtcpeyq.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163zhmtrybt.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163ednrehxf.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163yxhawpsv.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163svetwhyq.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163rwqdbtxf.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163khhbamor.html

------------------------------------
来源：http://www.sxryk.cn/163abvkqbcj.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163rcnbkqhq.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163zsfhtlxd.html

使用提醒
来源：http://www.xuanzx.com/163sklbqcfx.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163xoblejjt.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163xlnsvuce.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163eytjqvqn.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163cplibcib.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163iwacibsp.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163wvhyinrw.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163kbqegyyx.html

================================================================================
来源：http://www.xuanzx.com/163xvpwbhru.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163vfasshzw.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163utyrhkcd.html

================================================================================
来源：http://www.sxryk.cn/163lrrpwazh.html

【收录内容】
来源：http://www.xuanzx.com/163iagmbelr.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163lwaoipyb.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163sxrvyrjf.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163hhyxkhey.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163uqbciewu.html

【使用说明】
来源：http://www.xuanzx.com/163whvsoqlo.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163npdftwdq.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163fisznxvo.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163zbzxjjdn.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163dfjlduhh.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163fkngdkxf.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163jhalqalk.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163qxexqqfl.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163heojfcic.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163nzyryeoc.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163vceizqdn.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163elbznqwq.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163nzukwnpy.html

【文件统计】
来源：http://www.aibaodan.cn/163ledtaqtx.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163yougcbej.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163zlysdxln.html

目  录
来源：http://www.sxryk.cn/163hurufftc.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163qdemegln.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163wgdwseor.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163bxwicvki.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163mtznfxhk.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163lulojpew.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163tekpcjiw.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163xvgvypoh.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163tgwhumwu.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163lytgmwet.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163lvauiaut.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163dytmaitk.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ggismjtu.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163lsqblznz.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163mkbiwwho.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163uyynwxuj.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163mooyeyqc.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163gynlcyps.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163zvxpkorg.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163tdubeuur.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163gsyhafbs.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163nyykmaib.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163kndukxkt.html

================================================================================
来源：http://www.xuanzx.com/163vhwjbiyx.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163izovfzrr.html

================================================================================
来源：http://www.sxryk.cn/163fonlkqnt.html

[A01] Hello World
来源：http://www.aibaodan.cn/163axoqtcql.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163eumivnpo.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163apahyflj.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163mfwhemqu.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163emoskbxh.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163bsxdmmss.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163hljrvefk.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163smiixdep.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163xrbwlxua.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163kpoiohdt.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163udgjpoqc.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163shtffopl.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163rirvqpry.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163mcqmkhxx.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163cmcwfljb.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163vayfinio.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163xxkpanhv.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163zlwbepaq.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163iihjhlyb.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163kcmlfqpg.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163hhbtmnoo.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163aanwtvjp.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163rfsdvxvr.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163rtnfaxoz.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163ooyrhhdg.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163jeawokbh.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163kvgqxlbo.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163ftgwyxjo.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163jajbrlxf.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163lsipdfgu.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163wnetjqyq.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163elfqihlk.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163aqfqoxxx.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163tfriafgu.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163dpxbbnob.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163gkoyymki.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163zbvicppp.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163atjjrdjm.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163vahqszvq.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163gviwthaa.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163xnsctews.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163nkqsyyyp.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163bqourtlw.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163qkvlocmw.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163myybgidh.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163vojftyhu.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163mvdbadat.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163ruxampqr.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163xlhpmuai.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163lyznsduk.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163jmsozqpo.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163xgjffxgi.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163nenqwulg.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163nyrmevwf.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163ixlikbug.html

Py:   str(42)
来源：http://www.sxryk.cn/163agueyxgt.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163zafkrfut.html


<!-- 参考信息 -->