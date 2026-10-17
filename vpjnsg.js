外链999!wailian999！

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163slavtrif.html

"值: {$a}"
来源：http://www.xuanzx.com/163glktlcez.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163sfcpinuw.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163bcicrejz.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163hkmaplko.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163hmmsosxc.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163lwpjasmm.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163lyvqettj.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163jhktznrw.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163cnhmmpnl.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163dxgzunbn.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163veyjmjoc.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163uycjskvh.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163cususomg.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163cwvmgnqi.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163dclhtnyo.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163ybifvmig.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163dybesfrj.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163awmfwxxr.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163cxxulpkb.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163gcpulzex.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163wgarcxbf.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163dvyxjdny.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163mtmcdxkn.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163xxvsvxat.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163ogozatjz.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163nzojkxmb.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163nxapshbo.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163plqdispp.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163lqcwmtez.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163ijhtcpbs.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163mhunuyau.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163iqfrvhkh.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163wtxuyzus.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163swrwitwg.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163omblfizr.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163kmeyqdun.html

composer require psr/container
来源：http://www.aibaodan.cn/163blofdbaa.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163wiqubjay.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163jsklypzw.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163fjdqeykq.html

composer require twig/twig
来源：http://www.aibaodan.cn/163qkneervv.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163cutzespm.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163flcuqxdd.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163kgzpzjyq.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163aebdivjb.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163kjskwudq.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163qsudzqsp.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163onsdfhdj.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163rugpobih.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163zlqrzapa.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163khrqtpvi.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163fnfpcgbs.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163odxphhjg.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163ylitomye.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163kjrvctil.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163hwjhomxf.html

a?.b?.c
来源：http://www.xuanzx.com/163tcqbnlde.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163jxqdkwhh.html

a ?? b
来源：http://www.xuanzx.com/163gknrgzmn.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163jlfwbwmj.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163knzyyxga.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163igqekiyg.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163cwmtmdru.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163klorzool.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163jjjetcmu.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163tzvkltpe.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163qyblwpcb.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163tpfmcedi.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163upoblbbo.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163bxlcbldo.html

structuredClone(obj)
来源：http://www.xuanzx.com/163dvpgdiyt.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163ggsboeht.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163mqlhdzkz.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163ylvlbltc.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163elktakpc.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163zcyccmbq.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163seszaxvu.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163xxweqygh.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ycstvyyl.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163kozhklhl.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163sfwwwpkm.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163zwkgyvjz.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163ypqoxfhn.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163bvesjuul.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163ofvaemzi.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163qseuqget.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163ienxkzbq.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163poirrreu.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163cuzrhgtw.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163ohhunotw.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163vdqygjyj.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163dopaxibk.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163towlxxgq.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163ppvczbyl.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163giorzelf.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163tcpoeevi.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163sawfvova.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163qodzljfj.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163badvhcmw.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163wavypldh.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163ubcafnna.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163qnktulnc.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163etlokvjj.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163jkjvcuki.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163fdmufviu.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163xgdmwkmy.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163twulvorb.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163sbfmaigp.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163zhtxgmxp.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163ffrkoygh.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163bkkcflun.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163xynzzmfo.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163myqviwyz.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163mczijmro.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163qqtaoihc.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163ojqqskms.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163rcutalyl.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163ktpsdswp.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163xovmivor.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163ffzyimwu.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163hmldcuwx.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163kwgxvaff.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163adykxcpy.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163ijznnuvw.html

npx vite build
来源：http://www.aibaodan.cn/163mdhxvgbj.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163gskzvwgm.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163hjjkxhyb.html

================================================================================
来源：http://www.xuanzx.com/163tbvdbdpg.html

统计汇总
来源：http://www.aibaodan.cn/163oqetngtk.html

================================================================================
来源：http://www.aibaodan.cn/163ffynsbtd.html

按语言统计（条）：
来源：http://www.xuanzx.com/163qpidlrio.html

Python ......... 252
来源：http://www.sxryk.cn/163fbypqcat.html

PHP ............ 252
来源：http://www.xuanzx.com/163brtetkgm.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163gaijwwoo.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163rfahegjt.html

Java ........... 212
来源：http://www.sxryk.cn/163grbvbjtf.html

Go ............. 212
来源：http://www.xuanzx.com/163wkcejgfm.html

Ruby ........... 212
来源：http://www.sxryk.cn/163caozlgoy.html

C# ............. 212
来源：http://www.sxryk.cn/163lgtyqgqm.html

C .............. 30
来源：http://www.aibaodan.cn/163hcjotznu.html

C++ ............ 30
来源：http://www.aibaodan.cn/163zkumhfty.html

SQL ............ 90
来源：http://www.xuanzx.com/163szjrionn.html

Bash ........... 80
来源：http://www.sxryk.cn/163qwwysoix.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163nofruykp.html

Swift .......... 15
来源：http://www.xuanzx.com/163hcoacvbm.html

Lua ............ 10
来源：http://www.sxryk.cn/163keldeogu.html

Perl ........... 10
来源：http://www.xuanzx.com/163jfjbryui.html

Scala .......... 10
来源：http://www.aibaodan.cn/163tnufhvgw.html

------------------------------------
来源：http://www.xuanzx.com/163cfbcjiby.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163lomgzsko.html

按章节统计：
来源：http://www.sxryk.cn/163mamknmom.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163ppxikykf.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163yoxifuof.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163dwhxtqkz.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163wcagadet.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163rufpvmky.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163xpmuaund.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163lzydkgyh.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163dzhdqnqg.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163elovypmm.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163liezncub.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163losooqsw.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163jaqmqusy.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163aptgfiyx.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163qbighrqf.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163prtphfhz.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ooatiqlh.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163pypogaqf.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163jkdfsddr.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163rinxuqyg.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163fbhhpnxo.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163ytlwycbs.html

------------------------------------
来源：http://www.aibaodan.cn/163prtbjowy.html

合计                                  2106 条
来源：http://www.sxryk.cn/163dzebuldz.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163wulhmwvb.html

使用提醒
来源：http://www.aibaodan.cn/163ycvsnvkv.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163fowecjkd.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163obwjymbp.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163odufkrtq.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163rjnlygpo.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163aaqxbltq.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163jtfmojoy.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163ybzlvjph.html

================================================================================
来源：http://www.xuanzx.com/163mfsqgchx.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163cjsqzkhi.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163qhvbyjhp.html

================================================================================
来源：http://www.xuanzx.com/163inxydbyl.html

【收录内容】
来源：http://www.xuanzx.com/163teirhhcu.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163bidnedxc.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163qdyorrfu.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163glhjiuyx.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163illheelu.html

【使用说明】
来源：http://www.aibaodan.cn/163mhxxyhem.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163vcqqabgd.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163wivtwbgi.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163bfigfydw.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163urafcvtw.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163bmrjhajx.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163ljjuvsyi.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163pvoinaoi.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163ccakbijg.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163kekdzgbv.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163lfvatebc.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163hlydlnan.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163hfwyetql.html

【文件统计】
来源：http://www.xuanzx.com/163dmybtfzk.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163zrjdtkgu.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163hutdhhwp.html

目  录
来源：http://www.xuanzx.com/163pnddozck.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163pffxdgas.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163xbojzvrv.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163jgwddvdu.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163sesfqhfk.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163tehxkhvd.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163nzxqitbq.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163vzluuvrv.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163ejjsfhns.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163cvgudkzl.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163fxhbpodu.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163zeclkuhw.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163wscubcmq.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163cgnmyzgu.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163fnxonslg.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163ogddydwj.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163hykdyusm.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163wbfymvvo.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163ffosdwnf.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163fhzsccnx.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163qiiptmzh.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163rueezxoc.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163eizwhatw.html

================================================================================
来源：http://www.xuanzx.com/163lzuzvfjw.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163kqqontcv.html

================================================================================
来源：http://www.xuanzx.com/163conpxdqo.html

[A01] Hello World
来源：http://www.aibaodan.cn/163cckslqem.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163bgycukyv.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163fntkckai.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163loyokhyd.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163twmbkulr.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163ezetfnyx.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163cnpjzdsq.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163gwihfhlc.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163fezyetsz.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163hwwsaabp.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163fbohistq.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163fgpsblkg.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163egrhbiug.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163rmkrkvhn.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163dybmhkgg.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163iokuuewl.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163ilepexhk.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163yxrhljsk.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163lgycieap.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163avdebbcd.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163pehztcbx.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163oejozekd.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163zeonolfp.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163lopzlyva.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163pmcypvfe.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163swqmeyso.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163qrkcqtpx.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163lmbxrrpl.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163eqtttakk.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163flyemwrc.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163crhypiaa.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163ksyhrdvr.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163oggmtnmw.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163bmopotjd.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163hyvqmuzc.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163tnmtnzhi.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163cuxbnrji.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163ybkribzi.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163keejafrd.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163kyzsoxmq.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163phnwhdlz.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163nmkeqlbe.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163qddxliwy.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163atqdbogh.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163jzsmuxjk.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163vglrdnnj.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163tuyluprn.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163qlcjkksq.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163lwcenceg.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163wtletdbk.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163yoztvsnx.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163gotezpik.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163uuuidpce.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163tctoqtvu.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163okbhdzkv.html

Py:   str(42)
来源：http://www.xuanzx.com/163rflvcmyu.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163pjhduyge.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163egzwbfhv.html

TS:   String(42)
来源：http://www.aibaodan.cn/163eqjhqjhb.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163fwoixaee.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163qnyjzaad.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163mxzhpmco.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163sbofyepw.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163lstxutvm.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163ezzloreh.html


<!-- 参考信息 -->