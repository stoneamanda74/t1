外链999!wailian999！

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163dupwhghv.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163ylonsfnh.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163qaracnwo.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163zjhvrbvr.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163ktozvujv.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163vhghrcgh.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163kqrcfhkk.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163aswwwomg.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163obfhqwze.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163ectcmelo.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163jxeacbcn.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163lrzdmrnd.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163xvymmoye.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163kmyrksak.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163zgdeislg.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163btmuxled.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163pwphpaov.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163gwgomoxn.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163cbxnurtl.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163klhprmvw.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163pciftjmi.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163lyalhkan.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163pemtbiox.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163frrsqupm.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163qxqaizlx.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163enpvopao.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163tudemcgx.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163pdaynnyg.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163pbkgbbjj.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163zyaeiixj.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163hxjmjura.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163xjsaovoy.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163ymgqunlw.html

composer require psr/container
来源：http://www.sxryk.cn/163pnmkvmur.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163kydutptv.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163ufochaab.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163xpxorngi.html

composer require twig/twig
来源：http://www.sxryk.cn/163jmykgmvl.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163zyhuader.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163iuyfxwjy.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163rtxamprs.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163vlsblnlz.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163wyjkgnqi.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163fxwzavgk.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163sinimtbi.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163ujgpasnk.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163guyagdrz.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163quuwzyqd.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163jxmcsxnm.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163qemxmidi.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163cpvhuzap.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163rfjysacq.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163gblotmbq.html

a?.b?.c
来源：http://www.aibaodan.cn/163qvonreta.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163oujbopaw.html

a ?? b
来源：http://www.xuanzx.com/163imvxcjrx.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163wevpexpv.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163uifponda.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163hcpsreru.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163ebcjroqj.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163mjtwyjzt.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163jkqdjjei.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163ddyeiwdz.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ousrhked.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163ajvjsikl.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163rkzldzhv.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163zmemnnbj.html

structuredClone(obj)
来源：http://www.xuanzx.com/163lenpnpxv.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163ftbikzmd.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163cjotzxyx.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163fymjtajw.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163jyfiornl.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163kkuyomey.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163vzmbgnjl.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163gzhjzxhk.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163vfqniysd.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163lqyfvpgr.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163dupavfro.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163mjwfbotb.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163idwuiohs.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163iiiilsce.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163bbgqkpat.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163jodgyelp.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163kukhnhce.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163vmrgbvnn.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163jmzaalmj.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163vnrckmxw.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163xtjxotkv.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163fniedhcr.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163swsflzua.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163yefdfcik.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163cciniitz.html

[U105] JS：节流
来源：http://www.sxryk.cn/163hayfxgzw.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163qznvapgm.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163vletcksb.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163hafvheil.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163hseqthds.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163dxkwazmh.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163dqxkpjhh.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163pgximonh.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163izdlyorq.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163bsbefjxr.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163voxoiwbg.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163psgjftyo.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163zwzqopiy.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163wdojvhba.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163vewurexr.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163gnfzabiq.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163kqkntvjf.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zodtglgr.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163ilgvqjth.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163lwntgops.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163ndlhnelf.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163hbxheuoj.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163nsqlfwmy.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163tgywocbl.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163rapfwfet.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163uhepbdqz.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163kwhcmscx.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163juviozqu.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163adbystun.html

npx vite build
来源：http://www.aibaodan.cn/163rahvijie.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163aepivxmm.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163tmdkjfzo.html

================================================================================
来源：http://www.xuanzx.com/163mjyanlsf.html

统计汇总
来源：http://www.sxryk.cn/163tehlmghu.html

================================================================================
来源：http://www.xuanzx.com/163dtrpmjnq.html

按语言统计（条）：
来源：http://www.sxryk.cn/163clcpxysw.html

Python ......... 252
来源：http://www.sxryk.cn/163hvkgpuva.html

PHP ............ 252
来源：http://www.xuanzx.com/163gybghzzy.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163dglzsswu.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163xlewsyzk.html

Java ........... 212
来源：http://www.aibaodan.cn/163iiehvoub.html

Go ............. 212
来源：http://www.aibaodan.cn/163qzmwyukg.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163lppdqfmn.html

C# ............. 212
来源：http://www.aibaodan.cn/163hqdkgxzz.html

C .............. 30
来源：http://www.xuanzx.com/163bapybzrn.html

C++ ............ 30
来源：http://www.aibaodan.cn/163aldfmdog.html

SQL ............ 90
来源：http://www.sxryk.cn/163mtjlzile.html

Bash ........... 80
来源：http://www.sxryk.cn/163sobzfzoe.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163uugqqfpy.html

Swift .......... 15
来源：http://www.xuanzx.com/163ctgpgfgi.html

Lua ............ 10
来源：http://www.sxryk.cn/163absbftzq.html

Perl ........... 10
来源：http://www.aibaodan.cn/163srsadmpd.html

Scala .......... 10
来源：http://www.aibaodan.cn/163nzljuwvu.html

------------------------------------
来源：http://www.aibaodan.cn/163bxtfwtvb.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163crbsvhgu.html

按章节统计：
来源：http://www.sxryk.cn/163kpskllcd.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163nxtwykee.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ophndspm.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163nlufawyg.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163qzmwileg.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163huoyxwyb.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163uigbbnpy.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163wmnrksdc.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163dnlrxtdk.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163knledobq.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163lthsjmpn.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163flaggkkv.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163bysbzqdv.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163kcggthqg.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163owtogkcr.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163skplkcly.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163taabmavt.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163gdqdosjm.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163gkhvornw.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163swdjonnn.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163gommuiyt.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163qmaidftc.html

------------------------------------
来源：http://www.aibaodan.cn/163oeemfbax.html

合计                                  2106 条
来源：http://www.xuanzx.com/163kmhjwung.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163awmnufye.html

使用提醒
来源：http://www.xuanzx.com/163yfozlfvg.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163fftrcpzp.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163urvpbsqn.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163uwggvmqk.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163rlwlkmmu.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163nbkpjwnd.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163cqlgkykc.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163yjjqblne.html

================================================================================
来源：http://www.sxryk.cn/163tgllkvpj.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163wdzmzjdv.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163twtrtxax.html

================================================================================
来源：http://www.aibaodan.cn/163moncoxmt.html

【收录内容】
来源：http://www.aibaodan.cn/163qfmprhdg.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163sxjtovzh.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163uigqxysv.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163bsrapwsh.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163gcagfnji.html

【使用说明】
来源：http://www.sxryk.cn/163ssvxwfms.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163bnjdoaip.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163tenibmnf.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163mmmaazpc.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163wqeubwsx.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163bgvtpfhc.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163azcmpbuh.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163ajezcleg.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163vyrxmxxg.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163pmkembpg.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163xkjwkjeu.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163hnbovpkw.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163rinancgw.html

【文件统计】
来源：http://www.sxryk.cn/163fzftifxw.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163ypnpzgpo.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163syvxoegg.html

目  录
来源：http://www.sxryk.cn/163quuehuwp.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ozzsgcaq.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163hzlucuxm.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163pblfqwou.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163ocuoblla.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163cbbeysbe.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163rwjnulwv.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163xzozhzoj.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163endisvaw.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163hzpntupf.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163hariukqe.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163uotuzbtr.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ksqsgtrg.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ibwbjoad.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ixtuhfcg.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163iadkogtb.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163btlircct.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163likingtn.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163gjigjeav.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163chcnpiyq.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163gslfcsoz.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163yvfyhwmr.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163ehvvbxqo.html

================================================================================
来源：http://www.xuanzx.com/163rwmxuvwi.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163nhdnfonn.html

================================================================================
来源：http://www.xuanzx.com/163oowqwlcj.html

[A01] Hello World
来源：http://www.xuanzx.com/163vuxcgztm.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163tgqemiak.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163qgnnecdx.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163inbzbnja.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163uqbzaeoc.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163qpwbyyue.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163inhjscba.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163wdjumryx.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163pnshimyk.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163txqqfthc.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163chjyeget.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163vetxwqqi.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163wrebmezw.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163ruglchou.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163pjlgeksl.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163ydxjmepw.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163hzjuyqjm.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163wsyuokwi.html

[A03] 常量定义
来源：http://www.sxryk.cn/163kcvmtypj.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163pxvnhezb.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163wzgxovmk.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163rzuvgqvl.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163arhxousa.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163idzjmtim.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163dbenetvk.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163jqjrlsxy.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163dbuvlxam.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163qhotgulx.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163ttdkfuug.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163osockehg.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163yceeovzh.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163asrttoyz.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163ujjztrhc.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163zrvlzunl.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163zuhbdeog.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163iomddmrz.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163lwsnwcsb.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163tmygstcu.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163swejvfnr.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163vfiergtw.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163zxbzjtiq.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163qvasovzo.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163hbcrqpik.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163aqayrbzk.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163zfeejgfm.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163wqksrqia.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163qsngpsdy.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163mfbzsqvp.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163ozzwdomz.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163zrwpbict.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163cyukenpl.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163sgxobkdi.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163egiepcld.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163rvxzjxcf.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163ymndohfe.html

Py:   str(42)
来源：http://www.xuanzx.com/163jpaomdmj.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163vmlcenfc.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163qilyasom.html

TS:   String(42)
来源：http://www.xuanzx.com/163ralyxrqs.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163mdgyptbx.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163umnygojf.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163tdptyopf.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163tozlpwzd.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163bbjbjzuk.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163ggmouaud.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163wbbhlhgb.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163tbuvgast.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163acdfgrpl.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163qbzkmric.html


<!-- 参考信息 -->