外链999!wailian999！

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163lrkrnbme.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163znxkglfb.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163pxkmtbij.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163iigjjwsm.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163kepqmcet.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163unzvecdl.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163upmcqqxk.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163fsoqhgcj.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163wfgxmzpt.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163yvzfjsbw.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163bgmkgdux.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163vaglflxp.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163pjujntgp.html

composer require psr/container
来源：http://www.sxryk.cn/163fcdqwspd.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163vcobefrf.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163qxxgknkt.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163jiyipbji.html

composer require twig/twig
来源：http://www.aibaodan.cn/163eodzparv.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163rvjabuye.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163zgggcrns.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163znbyizmq.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163becwlbai.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163lkkhhihs.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163eohabtni.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163gntiyqma.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163icccefsz.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163tkyhvkpa.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163hxszdxdp.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163szwoauze.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163vdkcvgqy.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163sswbyoni.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163ugoymbfq.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163juwsalae.html

a?.b?.c
来源：http://www.xuanzx.com/163bnqaawau.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163pawoahzp.html

a ?? b
来源：http://www.sxryk.cn/163lrfmzawa.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163tsoqmhnc.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163jwqmhpwn.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163qdafmyvo.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163lrbeinwp.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163qgchrfyq.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163uuvpuvnc.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163yumoamrq.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163nzwaecvu.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163desyjaqw.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163ixhkdlfm.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163wyrnfcnz.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163xfukpirv.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163hwqpmtti.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163mfbdnexj.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163ojlgpndu.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163diyomxjx.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163nxyhfteq.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163hfufvxuk.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163fpejouba.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163lqnbmhrn.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163wvlgnajs.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163xjiaugyl.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163mgiocfrw.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163mvufkxjt.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163fyqyhmsw.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163tmglfyhe.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163vsocciqf.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163wlyywqlt.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163jtcrudwz.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163dxkrvlmc.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163exwekvar.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163yngduvnv.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163lnqlpzjo.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163gazwpyly.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163mcupofpi.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163bspmwfet.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163thtokgbh.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163hfoayfhu.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163ekfpcqvw.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163qwdbpkbt.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163aykrroeg.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163cimdmyxk.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163bmppikpq.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163xtryjxja.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163dhybcwnm.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163peoqcvax.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163jrkuztwp.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163yucuggjm.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163ukqycoht.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163jhsxthxj.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163lpmrgibu.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163iriafxkw.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163bwnazild.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163yupwmicm.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163ituwcaqm.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163birkczyo.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163gxmcrcga.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163pwtsygth.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163tqzknzmd.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163vozjkhqv.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163wgsruwdp.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163ugawvmue.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163ytlzaysk.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163drafnvfa.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163lsxdtjpb.html

npx vite build
来源：http://www.sxryk.cn/163kmnysmju.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163nojrupxr.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163hfrntxbw.html

================================================================================
来源：http://www.aibaodan.cn/163agbqkboh.html

统计汇总
来源：http://www.xuanzx.com/163fpiqfypp.html

================================================================================
来源：http://www.aibaodan.cn/163jngauwqe.html

按语言统计（条）：
来源：http://www.xuanzx.com/163ozdjxuec.html

Python ......... 252
来源：http://www.xuanzx.com/163jeqekewt.html

PHP ............ 252
来源：http://www.aibaodan.cn/163dbzhylum.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163mplhsopb.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163qvozhcoy.html

Java ........... 212
来源：http://www.aibaodan.cn/163tjwprenr.html

Go ............. 212
来源：http://www.xuanzx.com/163xbprgkty.html

Ruby ........... 212
来源：http://www.sxryk.cn/163znrdtole.html

C# ............. 212
来源：http://www.aibaodan.cn/163dytpobjg.html

C .............. 30
来源：http://www.xuanzx.com/163sydjfbzx.html

C++ ............ 30
来源：http://www.aibaodan.cn/163dxpqpwlr.html

SQL ............ 90
来源：http://www.aibaodan.cn/163fxiouaco.html

Bash ........... 80
来源：http://www.aibaodan.cn/163cihuikpp.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163zkvqfuql.html

Swift .......... 15
来源：http://www.xuanzx.com/163lxvgqjcn.html

Lua ............ 10
来源：http://www.aibaodan.cn/163ezaosmgq.html

Perl ........... 10
来源：http://www.aibaodan.cn/163gldzvwjt.html

Scala .......... 10
来源：http://www.sxryk.cn/163houmdmiq.html

------------------------------------
来源：http://www.sxryk.cn/163fmrkwksi.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163ykgnopmu.html

按章节统计：
来源：http://www.sxryk.cn/163fwzkjrbp.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163zrhnaaab.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163eyuqxxjl.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163aaeynjus.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163aevbfcav.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163ggmztjyp.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163pvffctra.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163bxafgqvr.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163esvzigha.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163vzjgjojy.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163ephaelit.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163hssmoxjl.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163xpqbvrug.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163gxgxhplw.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163vhowxonq.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163rdtrqaax.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163rcyxvzbt.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163xnuvdyzu.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163epeakoga.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163tkilfmzs.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163nkyvhdae.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163vxjupkkn.html

------------------------------------
来源：http://www.aibaodan.cn/163ezguawai.html

合计                                  2106 条
来源：http://www.sxryk.cn/163smqouwsr.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163llhvklba.html

使用提醒
来源：http://www.xuanzx.com/163fcakaivt.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163yxdjbhee.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163czdqjxez.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163qyfaxjzy.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163jqqzfkal.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163czcqpikr.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163eujiyzzo.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163klnfzmlz.html

================================================================================
来源：http://www.sxryk.cn/163dcjrnztz.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163ngjdggsu.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163wfaaczkj.html

================================================================================
来源：http://www.aibaodan.cn/163xvxiudwm.html

【收录内容】
来源：http://www.xuanzx.com/163ngivowyk.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163sayolbyz.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163xtyrolnt.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163vadfoajo.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163mgmtnxaz.html

【使用说明】
来源：http://www.xuanzx.com/163uskhvqow.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163pwvrcdin.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163wdppoocw.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163qqineluz.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163uryitgmy.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163lruwowmx.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163ftkghvqd.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163zblxlfwc.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163cqpxoqnn.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163qfloqpzq.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163artnounv.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163qmjcjufx.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163ysxyyugg.html

【文件统计】
来源：http://www.aibaodan.cn/163czwcwfki.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163hqafjyjh.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163mvtuclim.html

目  录
来源：http://www.aibaodan.cn/163febpertv.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163lsdmjqts.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163asgcnlkk.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163hyvktbdx.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163hxintxzs.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163yrqeytnv.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163rzqehbco.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163fyxdshjk.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163kochqewr.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163jxjzdqzx.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163guiqtngw.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163xijdjmvt.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163dfoyxoxy.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163znvcvsah.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163abdhuozh.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163zmcllmbg.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163balwuvpe.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163fmtxdiul.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163hjigxozp.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163tchjvakp.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163qgadxpxp.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163whylghwi.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163qiimczlo.html

================================================================================
来源：http://www.xuanzx.com/163kuoquuwp.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163yarupuex.html

================================================================================
来源：http://www.xuanzx.com/163gcowqaij.html

[A01] Hello World
来源：http://www.aibaodan.cn/163ujkgnrrj.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163jluhyhpz.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163qkowjxnm.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163tqjfxiav.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163bfrwaerq.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163edwabomf.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163trlkchkj.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163bisprywz.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163qsofhskd.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163lrsnbori.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163xzpggylz.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163zzdhcdsk.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163mvxuijeh.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163zhnevxib.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163txoduhxl.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163vglaydon.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163wxqftnka.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163wlqxrlmm.html

[A03] 常量定义
来源：http://www.sxryk.cn/163feyhzdel.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163nkxjajic.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163qrhlnbfk.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163wvcektgz.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163gemdjubu.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163tpdyfzlr.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163ncinvzsc.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163tbmglzio.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163puptxrhn.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163rurdqgox.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163rjvjtvaz.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163saxoptet.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163livoixmy.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163dlmblbbi.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163qqixpsse.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163aemtepaq.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163rwaetara.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163fhmxzvos.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163njnrkqgs.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163iveeqylz.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163chcwwjtr.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163yjgnwked.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163ozvkaapn.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163icffdtpv.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163llldiwel.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163yogvedxl.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163dqkzjllm.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163mktrrjgn.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163kpkrxncj.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163cpxsssop.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163icotxmub.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163mjnmvfpp.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163kudtogll.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163whdcoivn.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163wgjnpjsj.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163yvafeldn.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163xcolvtqa.html

Py:   str(42)
来源：http://www.aibaodan.cn/163fhuwzmbn.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163qeyqklnq.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163iuegyqez.html

TS:   String(42)
来源：http://www.sxryk.cn/163xqvdxvyi.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163wzyksneu.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163scmxmxfi.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163nqvgvmoc.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163fdcenwgf.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163jfeckrtc.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163itvezilh.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163qsbbagdu.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163bqbiusag.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163mkuzramb.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163ketfblqk.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163gfbmgfwn.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163vuqcjfwl.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163pftmfvin.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163pxbtjclp.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163rwsnsldd.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163wprhzgtl.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163cwohwgky.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163hsrfbuxl.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163hujekkjd.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163lznosyzl.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163yvxdczck.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163icwdkfmx.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163kznqfgmm.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163zgqtrbfm.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163tfkbsnte.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163nzpmcaln.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163yvdohwyx.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163yezeumkd.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163febtnzvq.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163mklrmzit.html


<!-- 参考信息 -->