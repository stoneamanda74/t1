外链999!wailian999！

[U61] PHP：正则
来源：http://www.xuanzx.com/163dxuhzrhd.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ekfarquz.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163lueknain.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163wamhuyll.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163mafxgkoa.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163tjwkwqoy.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163cxbbsvef.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163qmmztucq.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163zsblrjgb.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163vvszbwis.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163jgpvwwoo.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163dulixskb.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163hwthclca.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163kxixstij.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163higodrew.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163enbjxpuu.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163vpzfxrby.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163bhxyaqor.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163xqpryqjj.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163nzhxlxmr.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163qhkbkqne.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163dvmejqiu.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163yohazjeq.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163eelyibgo.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163cajyqmjf.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163mnjzfijg.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163aqafwgcn.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163jweqbohs.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163soqsbntr.html

composer require psr/container
来源：http://www.aibaodan.cn/163izrwiqpe.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163acbkmwrn.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163xdxpqvdr.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163gbepdxgi.html

composer require twig/twig
来源：http://www.sxryk.cn/163tsfmufuu.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163ckomogqg.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163ofufgxrh.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163sdtsgdlh.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163qstdkmgn.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163qdavjfjf.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163geddhujz.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163fjeykgfv.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163vkeykdnc.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163kfkcymtj.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163kspucuic.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163nyodqeqd.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163gmkrvkca.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163hbwfclyb.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163qzalgotd.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163elhgxfik.html

a?.b?.c
来源：http://www.aibaodan.cn/163hjmvozfa.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163ftyjvwar.html

a ?? b
来源：http://www.sxryk.cn/163alfmtswy.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163legtbaiu.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163vtvpkyqv.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163mevvanub.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163isirnrhb.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163iwmkzthz.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163utxvjbzr.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163uxcjsudh.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163vctogpxg.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163lyepsfhq.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163jbrhyhnx.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163pzebptml.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163cinyxxft.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163glzivmkc.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163sjuvxwpu.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163ygjmubvd.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163vuxeqxhg.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163qprimfdx.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163nyptmddy.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163ttqdlfyz.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163qmokjgnt.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163jyihualt.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163tnynbdvs.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163fwbkrjav.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163exqfgcbf.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163nbbuouzz.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163zxfrjbve.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163nrrnnvys.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163necupvbj.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163pmwzakec.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163fignebjk.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163rnbmfklm.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163dcxwcduf.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163ddpgxpns.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163dlrzukpj.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163wugoqwrc.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ddeskhnq.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163fufzvhbt.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163xktiaear.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163yhalnhjs.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163ojwghvqs.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163fdccyxmn.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163qqxbnqll.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163fyjktmuf.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163doihjiby.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163lihfzimg.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163rxtwjnzd.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163annnzyep.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163wyuvgtuu.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163pjzykjqz.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163ihdgwaew.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163hhtwzkrm.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163jiivxlyw.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163ptilgccr.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163bgvkawws.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163mggovimu.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163vefpnqxz.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163fizvjayu.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163tkrbvvii.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163hrergyiz.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163zjrkioov.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163iqqyqdlz.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163uyrlascg.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163nbkokyck.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163ksyimwuj.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163twtqasgs.html

npx vite build
来源：http://www.sxryk.cn/163okphmhnr.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163wrrmvonq.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163qufnhonz.html

================================================================================
来源：http://www.xuanzx.com/163pwguvpkr.html

统计汇总
来源：http://www.xuanzx.com/163niyndyxc.html

================================================================================
来源：http://www.sxryk.cn/163cuaekiik.html

按语言统计（条）：
来源：http://www.sxryk.cn/163lpnwhpzw.html

Python ......... 252
来源：http://www.aibaodan.cn/163ewayreuc.html

PHP ............ 252
来源：http://www.sxryk.cn/163bkdxjoco.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163czusbrbu.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163yhravqwh.html

Java ........... 212
来源：http://www.aibaodan.cn/163xjgksmpb.html

Go ............. 212
来源：http://www.sxryk.cn/163afeyjxsi.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163szzioozc.html

C# ............. 212
来源：http://www.sxryk.cn/163dzhcddlz.html

C .............. 30
来源：http://www.xuanzx.com/163wufvlfyl.html

C++ ............ 30
来源：http://www.aibaodan.cn/163nmiclacw.html

SQL ............ 90
来源：http://www.aibaodan.cn/163vxxxzrou.html

Bash ........... 80
来源：http://www.xuanzx.com/163bospvarv.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163yxxcimqb.html

Swift .......... 15
来源：http://www.aibaodan.cn/163rbyleiyy.html

Lua ............ 10
来源：http://www.sxryk.cn/163qzigxlin.html

Perl ........... 10
来源：http://www.aibaodan.cn/163ufivvele.html

Scala .......... 10
来源：http://www.aibaodan.cn/163iuodyqxk.html

------------------------------------
来源：http://www.sxryk.cn/163szogswuq.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163pamabaku.html

按章节统计：
来源：http://www.xuanzx.com/163gnevnecu.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163lbmhgeyu.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163hkmwclbs.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163zwqexjew.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163berqlpmg.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163tpdffhgw.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163cnffioqn.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163giitllij.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163ajaxzvbj.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163mngrmvzr.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163jnvvecnj.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163agmdfefq.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163cjkuyyxk.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163rmdhowjg.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163urawcmgq.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163ceqvidur.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163qzzkyyyy.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163gwlduwcg.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163qqqgrloo.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163hyljmpgm.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163pmprxxtn.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163ydfhystw.html

------------------------------------
来源：http://www.xuanzx.com/163niptxabg.html

合计                                  2106 条
来源：http://www.sxryk.cn/163gnjixgrx.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ehtoqrnm.html

使用提醒
来源：http://www.xuanzx.com/163agzewkdz.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163yupsiydi.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163oxqsrrer.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163eubxbjkf.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163kgtvjoat.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163wnsyelsk.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163wfnryiol.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163ougxyesp.html

================================================================================
来源：http://www.aibaodan.cn/163gkyaemrh.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163xsgbrzou.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163rshuztyg.html

================================================================================
来源：http://www.xuanzx.com/163jksqqkav.html

【收录内容】
来源：http://www.aibaodan.cn/163urntbtjh.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163htispoep.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163vdqiqdol.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163iqwcrwgi.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163arohlvij.html

【使用说明】
来源：http://www.sxryk.cn/163otxyuznl.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163vgpcqech.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163mehkrdie.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163yzhttwgg.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163xkphokez.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163jeghdljk.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163zuyeoqxi.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163luhnurbo.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163mogidzhh.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163ywgjccly.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163bbuwafre.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163odmxqesd.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163qbbaibgr.html

【文件统计】
来源：http://www.aibaodan.cn/163jjjarawo.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163eucymrlw.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163nycawuum.html

目  录
来源：http://www.aibaodan.cn/163bnupfcrb.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163byoyhejw.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163vvepvetr.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163aldrhrci.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163txixzftx.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163kzuchalb.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163vmsokfje.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163ylpfytjs.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163ezbrveqz.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163bvqshkmg.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163wblwjfxz.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163esknzrug.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163nyykqgmr.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163fktnhqej.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163nsqbnnkj.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163ckrynfhe.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163chuejbhm.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163bctqwfzy.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163yuhubzba.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163tfqybjfj.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163rwmhklvk.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163oojoipoy.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163iroinspv.html

================================================================================
来源：http://www.xuanzx.com/163ytlpefad.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163jubrilvw.html

================================================================================
来源：http://www.sxryk.cn/163fcdypqtg.html

[A01] Hello World
来源：http://www.xuanzx.com/163zlcqojsr.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163zuamacci.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163fyapsnho.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163pajgxivs.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163jpietjop.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163fsikwpwa.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163phydabqp.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163ajfxumeb.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163zlgicdqb.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163mpajwicb.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163amimmotg.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163rhmywhjw.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163yghelgds.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163hmwidstf.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163mnjlxlpk.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163whqjvpyt.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163zcilofov.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163lhysxqvr.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163loipsshl.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163nnxluhcw.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163ypqckzmr.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163svmlbbcz.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163qvbmmgym.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163cupxqgqa.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163rylxcqur.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163mytmmzyn.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163whttmoqk.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163hxrztgwe.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163orbaeynn.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163bynvulti.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163bplfayqh.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163lebhjsmq.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163glwocltj.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163hbuuatgu.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163lfuxzujb.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163ggscuuhy.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163nbuncyye.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163zznbnngx.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163ladlbrtq.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163maflixle.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163achaiohq.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163cecdgowp.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ofauyrjc.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163jqdftrzd.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163skajdvzi.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163nkhpmbek.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163kowurltz.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163pafmhhhf.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163aqijslfh.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163mhxxtgvq.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163synoulsu.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163hmxelbng.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163ofrswdlx.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163kkjgpuda.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163tiiebsig.html

Py:   str(42)
来源：http://www.xuanzx.com/163bqjwrzgu.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163yzlfakhi.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163nsrnvttu.html

TS:   String(42)
来源：http://www.sxryk.cn/163nnysgkdu.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163pikxmddm.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163jdxdcrgd.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163bqiykydz.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163viqyrvod.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163yqacjhfg.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163owhjdpfr.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163kbwpzcbm.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163xdwzhnyu.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163oagwkdja.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163juxmuohp.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163lrsqgtan.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163cmfcledn.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163wheukogj.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163kvhsdqsa.html


<!-- 参考信息 -->