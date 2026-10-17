外链999!wailian999！

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163rvmfkoro.html

public readonly string $name
来源：http://www.sxryk.cn/163ukyatziw.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163acevbakg.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163bxbvnrvm.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163xfxdcfvh.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163higwesvx.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163uoxfhvcn.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163fwcroait.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163jgujtrvl.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163qrgwrwfh.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163sdagqpbk.html

$obj?->method()
来源：http://www.aibaodan.cn/163ocerykwp.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163lmlgulhl.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163bousdeyi.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163qjbtbgix.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163jxwflprp.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163vwjrfchd.html

"值: {$a}"
来源：http://www.xuanzx.com/163qoqtksuf.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163slhfnmfp.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163xgxmckls.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163zcwtbwor.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163lfweupvn.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163oivqvbhv.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163ujjmvyjh.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163xubfbslw.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ipyuhyqt.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163vgmlkdrf.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163hntxmmou.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163xntfkneg.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163pjhfzbam.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163gsrartar.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163udcrfpkh.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163fbayngew.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163xtbrbhdo.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163kdnsgjrm.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163utnxfrhf.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163utxznvqk.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163fpffijvr.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163jrsmqybo.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163ohgsqbpo.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163fcltrifq.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163yzsilbur.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163ptdhnvzg.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163inujypig.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163xmwcdudn.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163mnfvmege.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163hdgsfgzc.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163dpxgbxib.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163ahcyzkvw.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163nxwppaha.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163gqwhpehx.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163jrxeeyvk.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163yrxyciaw.html

composer require psr/container
来源：http://www.sxryk.cn/163zxnblonb.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163lhkqltkx.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163axdjgicw.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163oackaegv.html

composer require twig/twig
来源：http://www.xuanzx.com/163mmmeupfa.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163dhqvoxma.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163guldswmx.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163bfmrmrze.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163klhfpkud.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163tbeciitp.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163gumchjub.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163cjlrnjgb.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163xvhcgxal.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163gfytzzzm.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163qblklijh.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163vprnxsnh.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163ijmyxmsg.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163nzizhjzt.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163haatgwgj.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163pkqtjdsw.html

a?.b?.c
来源：http://www.aibaodan.cn/163zrbvhgte.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163vovvhwel.html

a ?? b
来源：http://www.xuanzx.com/163ycbkxwle.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163gkaxooek.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163dzebnkyh.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163fmypvuma.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163ejugbnau.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163ycetsshg.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163vkingkff.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163uekcrkbq.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163jkosxpko.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163xbukelal.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163uylujeuq.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163kivzxtaq.html

structuredClone(obj)
来源：http://www.sxryk.cn/163oyoezqzh.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163wzmkjuak.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163bnzxjqfk.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163qgxzceor.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163ytpgywdr.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163hzdjzonx.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163pnyanucv.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163kgxszxca.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ubgyrncp.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163xmbsycbu.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163iboapmcy.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163qvictnjt.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163cyyvmtel.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163pvvilkym.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163zywbxxxx.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163wbpudhyv.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163ytuwgnyt.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163heakatyi.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163dhkytudl.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163ozgjlexz.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163elokxikr.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163czzejqej.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163edjgxlsd.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163iedzynij.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163qjkfarcz.html

[U105] JS：节流
来源：http://www.sxryk.cn/163pvfntklk.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163rnrkmstx.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163dmsqizwk.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163rjwprgui.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163gsgqqkzc.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163vrpprchn.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163jjkhordu.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163piopyoft.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163pbvpmhyq.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163rlgkvktx.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163hsbyvsor.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163ysaklhau.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163kkdilfny.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163lvfswebp.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163ssbptrzm.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163nyqrzaxi.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163lspypcro.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163jsofwzup.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163czrpzbkq.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163wrsboqje.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163jvdalnjo.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163pjvbjofh.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163jbpwalja.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163nsuohqxl.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163ngrpnadb.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163nbqnbdmr.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163nxajkjqk.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163jnktkbxq.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163immxshyy.html

npx vite build
来源：http://www.sxryk.cn/163oiybyvqj.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163muxtpufy.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163abrwhdab.html

================================================================================
来源：http://www.xuanzx.com/163fgnhbsuc.html

统计汇总
来源：http://www.sxryk.cn/163vjvzfudd.html

================================================================================
来源：http://www.sxryk.cn/163ufuxpmwu.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163btsevcmd.html

Python ......... 252
来源：http://www.aibaodan.cn/163mwkbumfq.html

PHP ............ 252
来源：http://www.xuanzx.com/163xdbawcdj.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163mlhzpros.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163zyifbgtq.html

Java ........... 212
来源：http://www.sxryk.cn/163fgckkzce.html

Go ............. 212
来源：http://www.sxryk.cn/163nhgyzlgl.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163zbmjkbxf.html

C# ............. 212
来源：http://www.xuanzx.com/163hrfurjxa.html

C .............. 30
来源：http://www.xuanzx.com/163zrkfpbgv.html

C++ ............ 30
来源：http://www.aibaodan.cn/163ojgwegpn.html

SQL ............ 90
来源：http://www.xuanzx.com/163ionqdnex.html

Bash ........... 80
来源：http://www.sxryk.cn/163uutzmcwm.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163ldlbcjub.html

Swift .......... 15
来源：http://www.aibaodan.cn/163vgpslfbo.html

Lua ............ 10
来源：http://www.aibaodan.cn/163fczhbilj.html

Perl ........... 10
来源：http://www.aibaodan.cn/163vuvksfwu.html

Scala .......... 10
来源：http://www.xuanzx.com/163jijfcfxu.html

------------------------------------
来源：http://www.aibaodan.cn/163zsqtruho.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163wsqtpbcd.html

按章节统计：
来源：http://www.aibaodan.cn/163kqytyvxn.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163euaukood.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163yodlatvv.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163tfbtljso.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163bdlqdfxt.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163pakhsxtu.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163rkrzwmuo.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163owpwdolh.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163nvromdtp.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163iukspjkp.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163dexdsyov.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163zhnsbrcj.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163otjvthhq.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163zejigjiy.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163hsbxmbqr.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163vhulbbqb.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163fsfuneci.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163duptbhyw.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163amezuooj.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163lqprurzr.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163ljszusno.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163sizgeija.html

------------------------------------
来源：http://www.aibaodan.cn/163gwrvxxfh.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163udprcdsn.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163frnnehxf.html

使用提醒
来源：http://www.aibaodan.cn/163nxszgvpc.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163wnmalyhy.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163rrxviesz.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163uzpauqkj.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163cifnjckd.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163vccepdud.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163ctadfabd.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163rehjdsyx.html

================================================================================
来源：http://www.xuanzx.com/163rgzkzjxj.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163ufqlycjr.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163oayrkels.html

================================================================================
来源：http://www.xuanzx.com/163xlcpvzat.html

【收录内容】
来源：http://www.xuanzx.com/163qjhumgin.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163wabuvpzk.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163njhdpupc.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163qwwksinz.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163aaamfwmt.html

【使用说明】
来源：http://www.xuanzx.com/163eatwitwq.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163kumagrtp.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163yahbxram.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163ncsjpapg.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163fwcvquss.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163jurkyubb.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163felnvbms.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163eivmnirs.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163ogabhxvk.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163avatsjks.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163cgnkzqxa.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163kmulotcg.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163gizuaepl.html

【文件统计】
来源：http://www.aibaodan.cn/163adpusovq.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163hwshqzbe.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ocvlmpem.html

目  录
来源：http://www.sxryk.cn/163xalixiha.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163zxevtyvb.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163ypqynods.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163duazrkhr.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163dwyxwgqc.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163inhtqrjn.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163dsfrpxgk.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163fgeieygb.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163dmfnmzso.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163kmynsxxh.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163gvjsnmmj.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163pbtcaouq.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163csamizzr.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163yomajwmk.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163nnibzutv.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163dbpjpypp.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163uytagxxk.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163jwwzgzvx.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163wnlkhevb.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163vvmnljxx.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163ungxqtgx.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163rulxefnv.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163nvkmjirw.html

================================================================================
来源：http://www.xuanzx.com/163cflwwqlc.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163qiezpyyw.html

================================================================================
来源：http://www.aibaodan.cn/163fgvtlqnb.html

[A01] Hello World
来源：http://www.sxryk.cn/163iomheqlg.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163puohzlhy.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163eludvmbc.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163dipursbz.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163dgyiqhgt.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163tqmvlxeg.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163blbziymb.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163uldkxzdn.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163ouqlqbdm.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163zukdiyjz.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163zdmqosiy.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163fxnuxffk.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163mhbmiktp.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163arewdtyc.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163mrdswtqp.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163vbychght.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163rqnnnjay.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163wyxlvpok.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163awnykxsl.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163mbfwhzun.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163ijgkeqog.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163zfgdlafo.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163miufwjnn.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163lxrshxlv.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163kjhugcfd.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163xbxmipib.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163trfaltce.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163mzugafos.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163ilyhbwwj.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163ocfcgxtm.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163sukigbzs.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163abebnbyd.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163valrpvhm.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163tbjzitzo.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163ruowwslb.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163tvprspsh.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163zzosmqdn.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163tiednqcp.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163kgwudhyu.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163ilgmhtfc.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163qbmgkozn.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163jkvcfqlj.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163cxoiqrxh.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163gvlaarvc.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163msqchgiw.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163uslwmrpq.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163etltcyjy.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163xbhcctvl.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163ftsnqvln.html


<!-- 参考信息 -->