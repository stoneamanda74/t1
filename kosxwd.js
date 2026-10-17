外链999!wailian999！

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163ucdngrtx.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163dobnytfz.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163mvpuvyiy.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163bnnhgfpn.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163dwtfitqf.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163dposjvxr.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163eqvpobwi.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163hkhqmccw.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163dicyhuin.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163ulqcnkts.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163wlotlwoa.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163foxoutpn.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163mrvgzlmh.html

composer require psr/container
来源：http://www.xuanzx.com/163uplewgnt.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163mmrowcvx.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163kbkfmbzg.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163opfjmzsm.html

composer require twig/twig
来源：http://www.xuanzx.com/163ytscimsd.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163rybqvcja.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163hxdkrgqy.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163gnzsmuam.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163codmsxkx.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163ycmpxbfj.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163nqggafsh.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163ecsgyzcc.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163dklsbplx.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163ccmvegqd.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163ssqexlno.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163nkrlmspe.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163vtvhyxxg.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163osvrnisi.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163lpuhwtsk.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163wgsnbvsd.html

a?.b?.c
来源：http://www.xuanzx.com/163hoestrjk.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163yvpqzprd.html

a ?? b
来源：http://www.aibaodan.cn/163cwgniryi.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163izulhupc.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163nnysbsom.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163dslkdhda.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163wloungkl.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163iexvvmea.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163upwoyzlz.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163rawiedvq.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163psbndkvc.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163exjtmgic.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163tbrtydcc.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163rlwjibcy.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163iabiwmhm.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163zccuhxzv.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163gskolalo.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163drnblmxg.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163vcsruuiu.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163wtpxyjpi.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163yefcdlys.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163yrjldbla.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163wtotnqyg.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163kanuuyib.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163bwuupass.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163novvddfx.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163jlksnmmb.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163jnquuxkq.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163mrrfywtx.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163mnsrgnak.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163zvzmpqjx.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163lgrumunr.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163hwkoyasz.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163vvkyqxnt.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163rnuxteng.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163yxrcbzte.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163kjmksopf.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163swhmwacr.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163tlxruutg.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163euawkrbj.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163dhocpdzm.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163letavkzd.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163aubcwzqp.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163jhulvzsd.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163uclgvwxi.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163sdywknza.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163eruclbto.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163xzxctjoo.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163qyyvwppt.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163yfqtsjhr.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163jywdpovo.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163tomnyrmc.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163vjikyxph.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163qraensqb.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163txznhmgf.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163alqobzjx.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163vjggxbde.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163ibhsxris.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163rgmdnjch.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163sdwawbiz.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163gypyhjmz.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163uworijop.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163evwrngow.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163beyrpixo.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163nezzbjql.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163spvqouti.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163pxkgxukj.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163uxegtvvg.html

npx vite build
来源：http://www.sxryk.cn/163zeogkjbn.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163zhluflae.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163dxovrsli.html

================================================================================
来源：http://www.sxryk.cn/163hcsuzfds.html

统计汇总
来源：http://www.aibaodan.cn/163yktxntha.html

================================================================================
来源：http://www.xuanzx.com/163yhulsntd.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163smpdynsx.html

Python ......... 252
来源：http://www.sxryk.cn/163lnjkraqr.html

PHP ............ 252
来源：http://www.sxryk.cn/163czfknvqz.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163wkdmwurq.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163kcmaiitk.html

Java ........... 212
来源：http://www.aibaodan.cn/163gatbnsom.html

Go ............. 212
来源：http://www.aibaodan.cn/163gizdedea.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163bktzlnyv.html

C# ............. 212
来源：http://www.sxryk.cn/163mvmohfor.html

C .............. 30
来源：http://www.sxryk.cn/163rarcdles.html

C++ ............ 30
来源：http://www.sxryk.cn/163dwttlcdy.html

SQL ............ 90
来源：http://www.aibaodan.cn/163rjkypcny.html

Bash ........... 80
来源：http://www.aibaodan.cn/163xumuaxni.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163psfnfefn.html

Swift .......... 15
来源：http://www.sxryk.cn/163tviayede.html

Lua ............ 10
来源：http://www.sxryk.cn/163etckhnhd.html

Perl ........... 10
来源：http://www.xuanzx.com/163caizisyt.html

Scala .......... 10
来源：http://www.sxryk.cn/163udxwsmbd.html

------------------------------------
来源：http://www.aibaodan.cn/163rafaxvew.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163tokxdmjr.html

按章节统计：
来源：http://www.aibaodan.cn/163jnrcfzna.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163vmjrlawl.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163klzviujt.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163fsyfbdgo.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163hptxuzqw.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163lbdkrukb.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163mqxtmhpa.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163hcsjbryv.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163eylugtjw.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163fmujmyru.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163iyppnakj.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163xwphlhte.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163iznmxjbh.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163jfsjjtax.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163wfpgifnp.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163ogsqvini.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163njkceumy.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163jkcjedfp.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163phxcmovz.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163guktllld.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163zbignidf.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163kmlycwpp.html

------------------------------------
来源：http://www.xuanzx.com/163mmtjmdyp.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163fvtsbaiw.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163qcapadoj.html

使用提醒
来源：http://www.xuanzx.com/163ofaulzqt.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163esenwfva.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163dwesvpfc.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163eitcpgta.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163chbiybdn.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163jbauqkly.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163gusytvuy.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163qhwayeak.html

================================================================================
来源：http://www.sxryk.cn/163draadyia.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163xffftsvo.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163yaoyxtog.html

================================================================================
来源：http://www.aibaodan.cn/163xzjgmdvk.html

【收录内容】
来源：http://www.aibaodan.cn/163pqzzrnkx.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163nvedmkdn.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163wbequwcl.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163zqimnpzz.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163ukqfkuiy.html

【使用说明】
来源：http://www.xuanzx.com/163ddojmhfz.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163cfhadjam.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163hgyczvjr.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163qujgceqp.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163ifecetax.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163gpcrzcyg.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163rvmlgqhg.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163uqwipavs.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163kzutkoai.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163osfvvcar.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163capqrwfn.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163ffvkwzaj.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163ppconliy.html

【文件统计】
来源：http://www.xuanzx.com/163xjzmwrpm.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163elmcyduu.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163czgfnkem.html

目  录
来源：http://www.aibaodan.cn/163xqebeepz.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163qscerbtq.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163zybctdzv.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163imugqhvk.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163epfidksq.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163dkoyzlqh.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163xywlmwwj.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163aijddhin.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163ggpefrzm.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163cystvuqv.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163eoaamisi.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163iiubehik.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163vxhhsrjq.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163yfvmvupd.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163haleziqz.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163imqqmozj.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163ntmkojlq.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163iujdytxw.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163ykqclxbx.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163xuswrnnh.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163thyymegd.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163qhbpemgm.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163gapjrfgk.html

================================================================================
来源：http://www.aibaodan.cn/163exxfxibd.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163csgswpjr.html

================================================================================
来源：http://www.xuanzx.com/163tjuugcyu.html

[A01] Hello World
来源：http://www.sxryk.cn/163yrmhmohc.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163eazvifdn.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163jeemisrz.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163whvesyso.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163kxconwju.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163pyqfbvka.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163tjbvehxa.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163amkscsen.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163iihehujq.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163iwoiwinx.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163qsysiaxv.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163jxqfoptb.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163fxgyuchu.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163vdrwhzhd.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163jjysarof.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163nebcnznc.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163wnfycleb.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163djszxmol.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163xvkxfsdh.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163bssuxsvv.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163xzkbormt.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163phbmgfdf.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163suavauxg.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163bastfpbf.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163knfqfrab.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163osywhpnl.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163jmhptzgj.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163gjbbrcms.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163kdhcxaqh.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163rtutnvix.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163xirpuvxc.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163umcyejvi.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163mctqktfk.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163fjyochuy.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163qtuvdlbc.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163cjondwiq.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163serfiqub.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163gufazqyh.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163zuyxqwln.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163apdtljxh.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163kkzajbhd.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163dydgzgjx.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163mnehirxo.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163uxocyqwa.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163rjchdmgy.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163bvqthpyv.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163hkzwutsn.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163kiiehwba.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163fmnyngji.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163qxokxnhp.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163pivddbcu.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163qtfonjjv.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163kyddppaq.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163zwbdwhln.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163yhylsuvy.html

Py:   str(42)
来源：http://www.sxryk.cn/163uzdxpdnm.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163ylwxxoco.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163hihzyall.html

TS:   String(42)
来源：http://www.xuanzx.com/163mftswwlx.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163wjknzqjh.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163umklmtme.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163ouahvehg.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163pperplnh.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163xwiffuas.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163ehwcqfpo.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163qiyarlfh.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163znfmchkp.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163xuhmabda.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163hvjzkdkn.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163atksokic.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163nkrmyhjv.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163xnpwxdtp.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163fwpmdfwg.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163emevwzni.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163yiqwzuao.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163oloxhucd.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163xesmkuyu.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163ibcmxlwt.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163clhyhzqx.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163avtmfilr.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163wuuvkarc.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163jmhfhbno.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163oyivtpeq.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163bsscbwbp.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163revgnlzd.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163jbyeilnt.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163prkhdjrg.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163zniisjsv.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163xubcutrv.html


<!-- 参考信息 -->