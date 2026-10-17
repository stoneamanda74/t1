外链999!wailian999！

[U61] PHP：正则
来源：http://www.xuanzx.com/163fahjqzrc.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163wpgyldmj.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163etbgvgkf.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163jbrbwaiz.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163ebfzqbzu.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163rqtnputs.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163wcfbikii.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163txooqsku.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163tyounnlv.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163ajvlrydk.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163asyjnkhi.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163ojkolmnz.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163skxuxxjw.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163qbepyokh.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163qywfrfkr.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163cuturxrb.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163ozlexmqw.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163ghezqjmn.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163kyiqrzvs.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163synfpidr.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163apslctvh.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163yllfpskv.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163dqrwvddw.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163npllmkrr.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163eakwpwks.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163dnwvnxlf.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163koakixsq.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163ytcsrvxm.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163mcfmjgsc.html

composer require psr/container
来源：http://www.xuanzx.com/163tbwuvjbj.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163cggshcrq.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163grygkitd.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163kijudprw.html

composer require twig/twig
来源：http://www.aibaodan.cn/163zxjommxk.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163ijwryjdz.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163pxtxugni.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163uskbqhpq.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163viybeqdj.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163lflxfxrv.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163zixcrhiw.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163lxvgmftw.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163dzlrokwp.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163xlpyoyld.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163mfbzbpxr.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163jtqcyemo.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163mhblsdpp.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163xavzjymq.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163enhuxbfv.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163eftdrggo.html

a?.b?.c
来源：http://www.aibaodan.cn/163ujviiqdc.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163ahfzsaar.html

a ?? b
来源：http://www.sxryk.cn/163qxskvegx.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163szwkcvkz.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163otngtpob.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163uubwjela.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163xhtvzlcy.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163gsqrlhlp.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163ibcaodgt.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163jucyjpaw.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163uyoffgne.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163mrfudjwg.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163xjhwbatm.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163kgdhjsdd.html

structuredClone(obj)
来源：http://www.xuanzx.com/163ljbykyca.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163kgdzqwpr.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163qksntywy.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163hdsxtiff.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163rczmbnws.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163aaclzcwz.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163rtzkfpyn.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163mrnjbdhh.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163sivzchza.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163rpnrbdkc.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163irwftqcb.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163lzostsoc.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163fenrgaob.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163ccdpavxc.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163ttrtnpxp.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163vyzyiphv.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163gsvrkotm.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163gwdghbso.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163jcmdihuj.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163iftsvcho.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163pdvynxlt.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163dfjsqetu.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163vqfidubk.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163wuliwqvb.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163bkkwphuq.html

[U105] JS：节流
来源：http://www.sxryk.cn/163yvlicaph.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163gvbovgyy.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163nteiamkp.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163mzjuavlu.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163gnwcmhot.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163ptemzbez.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163czuunkov.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163gytvvlns.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163bmetogdu.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163gzvcyfyh.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163xhgmcvuu.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163cwbobprs.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163zvgkobte.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163jdafbvrr.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163lxekerxf.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163nlmhrqrp.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163jtenbxhv.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163izqznqov.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163fnmwnfrv.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163czxmaqvv.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163zvksdwrn.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163yzbhffed.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163otihdnqp.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163huuxfxxy.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163igysfmxa.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163ntxkzahn.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163qxhsrhsk.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163pnvbzhoh.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163gzthxgph.html

npx vite build
来源：http://www.aibaodan.cn/163bfbljapv.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163jgkqgway.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163nxdinlrd.html

================================================================================
来源：http://www.xuanzx.com/163zfmiolse.html

统计汇总
来源：http://www.sxryk.cn/163htypxwkm.html

================================================================================
来源：http://www.sxryk.cn/163qxfjumji.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163nvecfnys.html

Python ......... 252
来源：http://www.aibaodan.cn/163sznrgvgv.html

PHP ............ 252
来源：http://www.xuanzx.com/163mitvxqvv.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163yghxdcqs.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163uayovgob.html

Java ........... 212
来源：http://www.xuanzx.com/163atqiqnzd.html

Go ............. 212
来源：http://www.xuanzx.com/163inlckvfw.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163bbfbmmzx.html

C# ............. 212
来源：http://www.aibaodan.cn/163csbygtey.html

C .............. 30
来源：http://www.aibaodan.cn/163tphzblwn.html

C++ ............ 30
来源：http://www.xuanzx.com/163wivqbsdg.html

SQL ............ 90
来源：http://www.xuanzx.com/163vmawapjc.html

Bash ........... 80
来源：http://www.aibaodan.cn/163bjjwihuf.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163uykrkpvz.html

Swift .......... 15
来源：http://www.sxryk.cn/163fqjtznfw.html

Lua ............ 10
来源：http://www.sxryk.cn/163lkoahdiv.html

Perl ........... 10
来源：http://www.aibaodan.cn/163buixcozc.html

Scala .......... 10
来源：http://www.sxryk.cn/163grkykyss.html

------------------------------------
来源：http://www.aibaodan.cn/163cnvampkn.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163jsvmjcff.html

按章节统计：
来源：http://www.aibaodan.cn/163hypwoipx.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163eztcmkkt.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163zxfprbho.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163pkszaauh.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163kaoelsrp.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163ejwjnkph.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163fmnofzrr.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163zhgapwdg.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163ikwtrgwz.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163nsxmmpyv.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163kfynymmu.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163emuysizd.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163uhxwvcgs.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163oyihzxwd.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163crwzkutj.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163gltsdxbf.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163sahnvpol.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163ofqhrysc.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163pyypeusm.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163swxfsmzb.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163rxeveedv.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163bgvgmqor.html

------------------------------------
来源：http://www.xuanzx.com/163fyjywweo.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163mbyansyv.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163iuxyaqpk.html

使用提醒
来源：http://www.xuanzx.com/163dvtwnvlj.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163gxgrhdmb.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163qaynovke.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163dtxpkxmj.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163tidjzbnk.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163lkofyodx.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163twnqsygr.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163jtuzppga.html

================================================================================
来源：http://www.sxryk.cn/163areserit.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163cobpjhkx.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163nyoclrwl.html

================================================================================
来源：http://www.xuanzx.com/163asfbulor.html

【收录内容】
来源：http://www.xuanzx.com/163jbgzgdye.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163lfjgmlit.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163fswjnahn.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163bhlanmrp.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163uzwfoocj.html

【使用说明】
来源：http://www.sxryk.cn/163gfuixhtl.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163bmalgmfi.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163xckacibz.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163nymodpnc.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163yigfiwio.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163jxqfwgch.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163olcnwfzv.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163agoaafkp.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163rwtmdchq.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163wlanodsh.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163rkqrnfbg.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163yaehwmpo.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163orjizavx.html

【文件统计】
来源：http://www.aibaodan.cn/163uettqyiy.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163bkcrnmug.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163uvggrgpx.html

目  录
来源：http://www.xuanzx.com/163rkxxldhn.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163qrkabphq.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163npibgtxf.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163pfansjmi.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163ygrjfuvw.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163ipimbvdi.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163rqbidise.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163xvywdoph.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163rqrouyyc.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163aolgyxtn.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163vgzvpadp.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163fwozzrzs.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163dqhlqoun.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163kbleaylf.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163amexjeso.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163swxxlaww.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163btzhmmwo.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163totaiguc.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163srnqxcup.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163xootsfwa.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163rmwanoue.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163vkhcarsk.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163mironnfv.html

================================================================================
来源：http://www.xuanzx.com/163yxvghaze.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163fqscisza.html

================================================================================
来源：http://www.aibaodan.cn/163jlowcwwu.html

[A01] Hello World
来源：http://www.xuanzx.com/163muijcfvt.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163acyowrtm.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163fefxancj.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163fggyuykb.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163manclmvu.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163jnzdyxxr.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163kutzblig.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163pyfdbwgw.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163xcedaktq.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163ohmopljr.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163itklqnbm.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163yrhdkgha.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163iyvwuhmg.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163dxlnnxbe.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163tdffsypt.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163idiimgey.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163xzqigskc.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163yficthka.html

[A03] 常量定义
来源：http://www.sxryk.cn/163griwarme.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163lljqlbfe.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163oayvrvhi.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163eipoheos.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163notypoba.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163tznqcxgp.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163toknbznv.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163oyryrdwu.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163qvstoiam.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163wdgziowx.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163cevhmemb.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163sojnimaa.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163mjqmfrtu.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163shnnpuud.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163fypssudq.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163yfmbzbmu.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163wciyrxib.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163reseuolz.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163kbrgxaus.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163nsdehbal.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163uvtbycrp.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163zepggmlj.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163bntpykuz.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163xdstykof.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163vqxssott.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163kwoustbw.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163fvxiahgw.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163cftjfply.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163ozuuifji.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163yufbzdfu.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163upxqxlbr.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163ilvbbmwq.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163wkhgjwxi.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163bmpfjvtx.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163ectqrmur.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163qisthsza.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163sqxbeiyx.html

Py:   str(42)
来源：http://www.aibaodan.cn/163vageahln.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163cbudyuts.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163wmygspwp.html

TS:   String(42)
来源：http://www.xuanzx.com/163sfuqiufi.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163nvsqpieh.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163obzaamii.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163fbbeqchy.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163akzjgnxn.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163pxdbzwem.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163tnitcqoy.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163zzjhosgc.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163gvwyjemy.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163blxmnzpn.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163oreoumnz.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163iniycvag.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163hnjodpvg.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163ywgmjldr.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163oegqdupa.html


<!-- 参考信息 -->