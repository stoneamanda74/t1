外链999!wailian999！

[U65] PHP：会话
来源：http://www.xuanzx.com/163ueohxwoo.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163jhfxlneo.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163zchkcpfi.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163ksfsiems.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163dnaicnix.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163uotlctwb.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163gunasbkp.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163zozerdou.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163qiohzimb.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163omhbyzjv.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163plgancpy.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163wtqxsbzr.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163vuvyvofz.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163xsrrsdec.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163gnnnziss.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163nklycpio.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163xnojspta.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163ukmhqjig.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163smzjhull.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163vlttsojs.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163bexxcgbk.html

composer require psr/container
来源：http://www.aibaodan.cn/163wcgtonzf.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163rlsmwtvw.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163ghrqpxzv.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163vtdsblif.html

composer require twig/twig
来源：http://www.xuanzx.com/163xjdwssut.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163jgmqzatf.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163hurikyiw.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163jfmjbvge.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163sxmywmyn.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163szbsmuyr.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163pyuzxhzo.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163vtzkjxzj.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163dxsvnyvq.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163bcadioil.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163ydzqyfes.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163mlyuwggt.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163uwtfgnfh.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163dfwjbxkj.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163jyqzxzgr.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163dpqieevv.html

a?.b?.c
来源：http://www.xuanzx.com/163hzafpiwp.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163scjyofbm.html

a ?? b
来源：http://www.sxryk.cn/163pmnhxesi.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163scapigxr.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163abxcrarg.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163wrbzrpbw.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163haydkucm.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163zwrklznj.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163btfgkfpq.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163ccdxoetv.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163cwwnkwqs.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163fhasbfbj.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163dzgrrbjy.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163dwfnkrmw.html

structuredClone(obj)
来源：http://www.sxryk.cn/163xdixedpb.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163zsafftes.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163qipxkprp.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163jxpqazfj.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163fmlpatzz.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163wwyyhmgt.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163zqrymjmy.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163hsgzkpta.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163hjykszci.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163bdbonjjs.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163czdxnwte.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163pgphjcbn.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163vpvpfpfc.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163gsbztvxx.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163mwvrxstj.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163nusvnkfi.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163htotulvz.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163yjplbgmg.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163birottwn.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163qgpogcbp.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163dntndxwx.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163krkfjjbx.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163ujbeszga.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163aevbkdnz.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ayhsvnex.html

[U105] JS：节流
来源：http://www.sxryk.cn/163ramgwvnc.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163iequxqpe.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163evkcstnn.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163ldndgjvn.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163xhrdsjyj.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163ggepcnco.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163vbgildrg.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163kujjpqri.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163cdjduzgq.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163rfzxqudl.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163lycmtuir.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163ocrrsfga.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163bunryvvp.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163vblnmobk.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163wjlgmkpp.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163wutzjlpo.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163sqkdggnd.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163syyqqnjg.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163vyoblktm.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163utovdqwi.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163sbfsbrvl.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163scbgxhnp.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163fixciomw.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163lobtkbij.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163zzyvehdp.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163wbcazpph.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163oicyahav.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163wobhimew.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163vxxsasoh.html

npx vite build
来源：http://www.xuanzx.com/163mgklrcts.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163efsrdnyu.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163wprupnla.html

================================================================================
来源：http://www.sxryk.cn/163qrjeugtq.html

统计汇总
来源：http://www.aibaodan.cn/163zxjuslzm.html

================================================================================
来源：http://www.aibaodan.cn/163bwrerxth.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163vabmvltv.html

Python ......... 252
来源：http://www.aibaodan.cn/163greqpcha.html

PHP ............ 252
来源：http://www.aibaodan.cn/163pkpcsjjo.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163wokjltkz.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163ivxaeilq.html

Java ........... 212
来源：http://www.xuanzx.com/163sxykskpa.html

Go ............. 212
来源：http://www.sxryk.cn/163rnkeicnd.html

Ruby ........... 212
来源：http://www.sxryk.cn/163ijeojdjx.html

C# ............. 212
来源：http://www.xuanzx.com/163rguekign.html

C .............. 30
来源：http://www.aibaodan.cn/163nypjzwyz.html

C++ ............ 30
来源：http://www.xuanzx.com/163alraauat.html

SQL ............ 90
来源：http://www.aibaodan.cn/163ajapwgtc.html

Bash ........... 80
来源：http://www.xuanzx.com/163mwvbviji.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163dxyjskzb.html

Swift .......... 15
来源：http://www.xuanzx.com/163gkowcbxc.html

Lua ............ 10
来源：http://www.sxryk.cn/163kickgasj.html

Perl ........... 10
来源：http://www.sxryk.cn/163vtkudjxf.html

Scala .......... 10
来源：http://www.sxryk.cn/163gvobwajb.html

------------------------------------
来源：http://www.xuanzx.com/163cdutrqdf.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163tzkcbgfa.html

按章节统计：
来源：http://www.sxryk.cn/163vxczwihj.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163vsidhttq.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163elpgofue.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163imysswgb.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163uixmozwq.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163xoaonpyb.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163tnkjkzpt.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163xshzdicg.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163zwxfrias.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163laxssjib.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163vepbwmeo.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163omdjzkup.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163wzkuapdj.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163gqivhryx.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163qilmdgpf.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163ikvosgwt.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163icejygjc.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163mtidnuni.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163rgzwtcld.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163zulwmaso.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163emenzdhg.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163dcnszswf.html

------------------------------------
来源：http://www.aibaodan.cn/163kaadmfne.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163noexqsnm.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163xzspinmk.html

使用提醒
来源：http://www.sxryk.cn/163wnacweqv.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163iqgzigkb.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163gotixnfa.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163lvmqkzfn.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163ekbomkez.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163ktrlydzz.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163mgseueqk.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163glzzrlxs.html

================================================================================
来源：http://www.aibaodan.cn/163dirqiksq.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163psewxvdm.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163dgfrrtua.html

================================================================================
来源：http://www.aibaodan.cn/163ssplothp.html

【收录内容】
来源：http://www.aibaodan.cn/163osvqeuhd.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163bccfquzk.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163gcdzpvny.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163ozxyscom.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163icdsqzjg.html

【使用说明】
来源：http://www.aibaodan.cn/163fgrrcele.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163rnresapk.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163cxbanufg.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163ylbysvkq.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163lqznjsxh.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163iqoqyshq.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163nblbhadv.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163nyxdolnp.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163gnbhagkh.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163kxqwlspn.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163ldhzgnuq.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163wcdcwgpr.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163tgnrdmyo.html

【文件统计】
来源：http://www.sxryk.cn/163hjrzpwou.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163xdouncze.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ctrzsfxm.html

目  录
来源：http://www.xuanzx.com/163vwgljbfl.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163jcpcvvyq.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163mirbcvrc.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163inczequj.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163idtnxqzx.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163ldylfeam.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163gfyhdljx.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163emhzkemd.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163chkypwis.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163egvlubru.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163hcjbrdrf.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163zdfukffc.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163qfaubhfo.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163kfwnfjsf.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163egopoqvv.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163xftonnld.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163ohmqohyj.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163fomsuwxn.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163vslwcyeh.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163eqbepvnc.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163tawetrft.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163hrgfycef.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163rmasgzwn.html

================================================================================
来源：http://www.xuanzx.com/163mzgntano.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163livpcysd.html

================================================================================
来源：http://www.sxryk.cn/163hayvrvjy.html

[A01] Hello World
来源：http://www.aibaodan.cn/163nspmndjg.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163vojvljyq.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163divnphrb.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163cafiuepc.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163qdsueepv.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163zwvyjhum.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163qmklrqym.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163hwbbhukp.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163wpgioklb.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163zrttkijt.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163mlytgozt.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163rcoipohl.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163ysoponqk.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163tzxjlelo.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163wvyuytna.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163xdprdjxr.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163kgsuqafk.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163lseowfpm.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163gmggwoxh.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163gtmiivfi.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163ayghlrnn.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163trsstssv.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163lnqfbnlg.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163melkklfb.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163rnllymxz.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163vbqwruxu.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163ijjntjdu.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163dfmtrwht.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163linfdfuw.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163afemxpye.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163qmywuvko.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163rciofdph.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163qaykijzj.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163eyzadtsz.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163tsarvomf.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163hgkozdau.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163flrgzjgv.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163atvzempp.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163ttpxuwur.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163qlecnjzq.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163mlhotdji.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ntuubfvj.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163texfhidv.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163tkxervqn.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163oeocdkml.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163pkzwwvpc.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163nriwbjbp.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163lkfmfspq.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163tqhunoep.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163npqyshua.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163xxbbrjdw.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163arecpdqm.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163wptacdaw.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163ymigigvn.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163vkmccimu.html

Py:   str(42)
来源：http://www.sxryk.cn/163ygktoegx.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163otpynlki.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163clerszfk.html

TS:   String(42)
来源：http://www.aibaodan.cn/163mwdmimjd.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163ljvrgzkh.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163hjkmthoi.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163zfliufhv.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163fjpvryar.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163hjevukfe.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163gulsqfsi.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163qwpvqlgy.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163wfxbdktr.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163blttjhlg.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163omsdsoja.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163fpjkzlzz.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163pmdqdwpq.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163dnrweuks.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163tjltdnvw.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163alpwpadc.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163cbzerspa.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163vbryduvx.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163xodriwsg.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163ydsoucay.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163gemqyjra.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163qsunczye.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163rnudycrt.html


<!-- 参考信息 -->