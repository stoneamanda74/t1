外链999!wailian999！

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163nfjhiahd.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ytzkxmnp.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163cvtpufqr.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163ztstozcq.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163fjqderik.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163qldoafos.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163vdekimlx.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163hoqdgtci.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163nrkhelfi.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163bbhkpxbz.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163jflcroqg.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163gtjiqdrk.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163gsenguuw.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163iunsknnq.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163gionzyiu.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163zxeeppwi.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163zztosdqb.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163ijwqwkag.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163yqxrbkmp.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163kyqjuwsm.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163oociqhvz.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163jmiykxky.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163wpgvzkrq.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163asgovskd.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163hwjfhgqc.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163xgcwxvrp.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163lfxeqqvd.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163aaiwlqfl.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163zuailxtv.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163ohscrrau.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163ofbzrioh.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163ucvtgkfh.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163rmknbesy.html

composer require psr/container
来源：http://www.xuanzx.com/163qeshjkab.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163kcbmhfpg.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163dwchzdvk.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163skeoepcs.html

composer require twig/twig
来源：http://www.sxryk.cn/163wdrkmrhq.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163yxfccodt.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163zcebarpa.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163unxdwgfj.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163vlbbcjdw.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163yoldrdrc.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163ephnxghf.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163xuiszbfy.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163mwondodp.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163cjcprpak.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163kzxvlyge.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163gggjmapm.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163qjygoayv.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163xijwfvzp.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163dvxgzknd.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163msehmzkh.html

a?.b?.c
来源：http://www.sxryk.cn/163edbyqvkr.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163badilvrg.html

a ?? b
来源：http://www.sxryk.cn/163xslvrjxj.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163htjaxrte.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163ealdewgk.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163gotoktks.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163rsgdlqxc.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163qqnizzum.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163yurlnfia.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163thweuqnp.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163iugijzbx.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163meztetbj.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163glqifsao.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163xvmxokpv.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163ztcefqyo.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163kfpokigb.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163lmbowqzw.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163wuskzkmi.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163lhwhdxxs.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163swvabchp.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163qhhthdpq.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163mwaqofiv.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163kwgrdmus.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163flvddudj.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163bkavpjws.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163epsaqopr.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163spwfmbka.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163dvuqitfh.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163qrcmcsoi.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163qwoqpozi.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163deusaekx.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163wlxixxjs.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163pixsyzsk.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163ctbynlib.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163yetxxacx.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163dpdffhql.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163qmsjgied.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163gyidtuyz.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163vbhigktd.html

[U105] JS：节流
来源：http://www.xuanzx.com/163lpilkadw.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163wpqlhbop.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163aevbddnu.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163lyilvqmm.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163kgjggpqp.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163qrpkzkug.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163iobhggix.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163vrpnkfon.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163iacyajfe.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163dlzmjwds.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163mbftemmb.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163estfansp.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163zkjspfqn.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163ljnmwlxb.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163odphohjt.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163ygqegjgg.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163vjqquxcr.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163kgczuoul.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163gkdctlod.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163gemnfrjh.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163ozgmgmzk.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163npznogdt.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163weyxvjau.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163cchdmnun.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163tlgnskgm.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163jpicmycy.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163gzbtwdcf.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163dbvesivf.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163cwfvotqe.html

npx vite build
来源：http://www.sxryk.cn/163lmpzsbrd.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163wckvpriv.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163qubiswek.html

================================================================================
来源：http://www.aibaodan.cn/163cxqzxwxu.html

统计汇总
来源：http://www.aibaodan.cn/163ifvoloza.html

================================================================================
来源：http://www.aibaodan.cn/163ggufxxeh.html

按语言统计（条）：
来源：http://www.xuanzx.com/163nfjvkjzn.html

Python ......... 252
来源：http://www.xuanzx.com/163zgwjjmtf.html

PHP ............ 252
来源：http://www.aibaodan.cn/163sjgbpupe.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163ggkaarnd.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163yrcqceda.html

Java ........... 212
来源：http://www.sxryk.cn/163bwxjxuok.html

Go ............. 212
来源：http://www.sxryk.cn/163alhnfpvl.html

Ruby ........... 212
来源：http://www.xuanzx.com/163rdhjeuty.html

C# ............. 212
来源：http://www.sxryk.cn/163etttypkl.html

C .............. 30
来源：http://www.aibaodan.cn/163navdywzn.html

C++ ............ 30
来源：http://www.aibaodan.cn/163vsoettre.html

SQL ............ 90
来源：http://www.aibaodan.cn/163brpqcndy.html

Bash ........... 80
来源：http://www.sxryk.cn/163gdyzcjdo.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163hyvbxjmr.html

Swift .......... 15
来源：http://www.xuanzx.com/163qgcmpool.html

Lua ............ 10
来源：http://www.xuanzx.com/163riqkycbn.html

Perl ........... 10
来源：http://www.xuanzx.com/163tuhpqgxs.html

Scala .......... 10
来源：http://www.aibaodan.cn/163guxpypsf.html

------------------------------------
来源：http://www.xuanzx.com/163ctbrjodn.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163trlyryso.html

按章节统计：
来源：http://www.aibaodan.cn/163hqmmoecu.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163pctlgxgl.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163acwelmde.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163gfdogumc.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163pqfatxpa.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163dbheopfl.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163mpxnpqna.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163skmtgsrk.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163hybylmfy.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163pqirdkot.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163pjvegdvr.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163pyrtzohv.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163pgknpxno.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163tkqoatvg.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163oerpadrl.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163thyfoykj.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163spwvhoeu.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163moviecrc.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163nmeuyupv.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163rwmaehnv.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163natnvrfo.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163ojcoqpeu.html

------------------------------------
来源：http://www.aibaodan.cn/163ddoftdkc.html

合计                                  2106 条
来源：http://www.sxryk.cn/163rtgpymyd.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163zpqhtvls.html

使用提醒
来源：http://www.sxryk.cn/163hodoehfh.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163eylnfcfr.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163nwlyazqc.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163kqxdsaax.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163tbfwtgeu.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163jgxmzedf.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163ffednebz.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163evextrdi.html

================================================================================
来源：http://www.xuanzx.com/163ctyophbn.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163mokpamyd.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163mfwpkwea.html

================================================================================
来源：http://www.xuanzx.com/163ayfshkqv.html

【收录内容】
来源：http://www.sxryk.cn/163qtjenoqp.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163vtgwahui.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163qvdsynxn.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163ehphmcfh.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163jvbtjvok.html

【使用说明】
来源：http://www.aibaodan.cn/163beukvcih.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163rwpecuze.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163hutwsyfu.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163plyfjdbn.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163pkzfmuff.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163ghxktbxw.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163snhaaush.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163gptsfqka.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163mhsjyglx.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163idkrxjwu.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163iuryqfas.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163rempqkid.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163wilikekb.html

【文件统计】
来源：http://www.aibaodan.cn/163poopfilw.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163jlkocrza.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163chzaxxpc.html

目  录
来源：http://www.xuanzx.com/163berfzxdr.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163apsepclu.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163cvfdwnya.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163hgvmtrde.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163owhkxdac.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163iyywznhk.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163telupdkp.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163utwavmaf.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163ezfeiupz.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163bxbwrdod.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163weupdjns.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163kqobsssf.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163nornxmnm.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163bcqbkxbm.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163tkhjjyfw.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163hkphkxtw.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163qutyygbx.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163tvhgsunh.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163zkbzymlp.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163ntjjcfjh.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163mzdernah.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163iozsrxwo.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163asztnvaj.html

================================================================================
来源：http://www.sxryk.cn/163qvambdby.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163khpcrimf.html

================================================================================
来源：http://www.xuanzx.com/163dkrqxrsf.html

[A01] Hello World
来源：http://www.sxryk.cn/163qedephor.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163oblrrlyz.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163crhrzrlp.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163euphtkmu.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163qxnfqspk.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163bzxdznph.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163qsirjjqy.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163amntuerb.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163clnwqwla.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163fixzcrod.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163ivefapbz.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163bkxodgqv.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163aaypmbhm.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163ffugmzxm.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163xlrbvuyf.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163cyrmkduh.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163srwwhhzk.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163unfvdqwp.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163bupfxtfe.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163sqezhzoo.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163mgcffaop.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163sknjvqak.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163ggdgdvyc.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163dtjkhxnp.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163zdytsxss.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163axyxqvfi.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163vifxcdcd.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163zdtscdmi.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163udibssia.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163jpyacvfm.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163tidvggvb.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163lhctebrk.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163swlohhdn.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163lrcuimkc.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163lxcfzbvv.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163dbyhnzlj.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163hixvimfo.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163zgsshujg.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163vmlnkgvu.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163zngecbar.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163luaegkhd.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163hadpdrgm.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ugyxendi.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163zpxjqity.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163qgczmiky.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163xoeosswt.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163tmtsfduu.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163trbolkse.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163oestfzao.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163qzggkjjm.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163lzidjzkb.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163bmkzkfbe.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163kjrbvasv.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163piqwoowm.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163vhvevcjj.html

Py:   str(42)
来源：http://www.aibaodan.cn/163sbrtuiap.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163qhadakbo.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163ioszoqmj.html

TS:   String(42)
来源：http://www.aibaodan.cn/163hjqwsxhf.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163nifgzilv.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163bnjnznrp.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163gqejpmqr.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163tgwphacg.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163akzuyzkw.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163zdqxlngh.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163rcgcajho.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163zuocnfvt.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163eumxrtli.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163kaseugta.html


<!-- 参考信息 -->