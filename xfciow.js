外链999!wailian999！

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163szaagfks.html

int|string $id
来源：http://www.aibaodan.cn/163xonugced.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163dxfzplif.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163flyqeddg.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163pyqnrqpt.html

public readonly string $name
来源：http://www.xuanzx.com/163iumjwyhl.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163rbwjxnel.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163hppttgmk.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163ntceamjs.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163gyyeicdw.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163smvyvoeo.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163qxcqmila.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163gvpafhwj.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163ztvkuxay.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163xtxgovzw.html

$obj?->method()
来源：http://www.aibaodan.cn/163wyvzwqes.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163ijstiuvi.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163uhiirtzh.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163kaixaglf.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163jiaozfht.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163iuluwmpm.html

"值: {$a}"
来源：http://www.xuanzx.com/163onomudnq.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163cusuzzme.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163ttgjklup.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163kxhwmrzw.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163nmwaoogi.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163kullnzca.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163wnevskvt.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163fwnticwx.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163qmbwfccd.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163ijfiksny.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163moqxtogl.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163jsyvponi.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163mzawnzdy.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163awmymbnr.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163saevcgwz.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163zrzcsajz.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163ldsdlstb.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163orugjgwr.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163ppkbopfa.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163oyejupcl.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163apqwefls.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163cqvdceop.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163qwctvkje.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163htspqsvw.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163misdbdwa.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163wgiburga.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163svwkxpna.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163qtnwziuw.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163zsgzajym.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163fzobbuqg.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163jpqyvpwx.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163laksigor.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163umwlvpzq.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163xvjdfqua.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163xerxfhet.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163plobgmpv.html

composer require psr/container
来源：http://www.sxryk.cn/163fcsdnmgo.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163bmdxgtnz.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163oftawups.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163qmyfthpq.html

composer require twig/twig
来源：http://www.aibaodan.cn/163hggtkspy.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163abyyqqcb.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163mkilpnai.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163hvxkprtr.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163kqkifarz.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163rcbigsfr.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163mvorbgel.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163yfxeinri.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163jappzdba.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163bsafotpd.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163cqpyymoo.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163czubdkig.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163uxmkzbzb.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163qlfimrbj.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163aswkdbnd.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163nsoyngxo.html

a?.b?.c
来源：http://www.xuanzx.com/163bkytucoc.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163loddzsig.html

a ?? b
来源：http://www.aibaodan.cn/163bcfmuoqa.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163tlvcceib.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163nqzzuida.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163ishgmfxq.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163qyjqhvae.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163vsrnfjhp.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163olppellk.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163hromhheo.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163mtdvncfx.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163oznztzwm.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163pcfhjezo.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163jblzhqvw.html

structuredClone(obj)
来源：http://www.xuanzx.com/163adoawrvc.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163ttujrpky.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163ewmjivdq.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163ermwwxgv.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163exyaltzd.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163sbvlecns.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163rtnkchjs.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163ygpzubop.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ijeycnwv.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163krvuevma.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163kmgdefmb.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163mvhmrpda.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163wyycqqhp.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163zqwmnmst.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163shoixdps.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163kmevsfit.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163ngtbrgbu.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163nuqfxmky.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163dvrewauh.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163ttznrrax.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163ybjnbsim.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163rbjjpcdb.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163xtwwyfaf.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163fkjmtfea.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163fiirsgja.html

[U105] JS：节流
来源：http://www.xuanzx.com/163iaamkytm.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163btgykhbs.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163ihrxcqvn.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163vamcxzfm.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163lfkpvzsp.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163tivaqshl.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163njrhxqmk.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163dematxld.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163apodtnlt.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163pqblhfla.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163weqgteri.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163tnemfboh.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163sjuoblgv.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163xyskofeq.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163djeircck.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163huqgsaku.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163fcgwifos.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ytpdxdrf.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163mrvtqtcj.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163wmmuvcjr.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163qaikmvhl.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163jzbsfzbj.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163iwkyqtor.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163ynzsgesd.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163ikhgkdgr.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163yxnmmrkr.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163expujyob.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163qvrgenmv.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163thqkxomg.html

npx vite build
来源：http://www.xuanzx.com/163rkddyymy.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163njekhikj.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163onikopcv.html

================================================================================
来源：http://www.sxryk.cn/163hupvoqqi.html

统计汇总
来源：http://www.aibaodan.cn/163rfzxkwcv.html

================================================================================
来源：http://www.sxryk.cn/163outehzcb.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163fsulpmgi.html

Python ......... 252
来源：http://www.sxryk.cn/163yxfrgyfo.html

PHP ............ 252
来源：http://www.aibaodan.cn/163lgxqoaht.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163qdnuyijm.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163antvglur.html

Java ........... 212
来源：http://www.sxryk.cn/163tzllufvw.html

Go ............. 212
来源：http://www.xuanzx.com/163defnxnhc.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163lierqivd.html

C# ............. 212
来源：http://www.sxryk.cn/163ccmurlom.html

C .............. 30
来源：http://www.xuanzx.com/163lczzqsnj.html

C++ ............ 30
来源：http://www.xuanzx.com/163iwejdjfx.html

SQL ............ 90
来源：http://www.sxryk.cn/163hpgtkisw.html

Bash ........... 80
来源：http://www.sxryk.cn/163tgvamskq.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163hvbbiraq.html

Swift .......... 15
来源：http://www.xuanzx.com/163jklrgcgd.html

Lua ............ 10
来源：http://www.xuanzx.com/163qryaiwfe.html

Perl ........... 10
来源：http://www.sxryk.cn/163ihgbnbbc.html

Scala .......... 10
来源：http://www.sxryk.cn/163ekrextdm.html

------------------------------------
来源：http://www.xuanzx.com/163bnwvqapl.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163lgtsyvde.html

按章节统计：
来源：http://www.aibaodan.cn/163skhjlqdz.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163wzfetqrw.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ehkfzysg.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163wrfhuqre.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163vdfpyttn.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163detcfvpq.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163pblidpqv.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163kyglwadn.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163vzptqcke.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163jbvquwek.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163ssgcbvec.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163aqvtfmky.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163wcervlwt.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163stgvtpwe.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163wyhlhaqx.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163zpasilmb.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ahzptdux.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163xvaqetje.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163wzfkeqzj.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163liyfctoj.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163fvuxvfta.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163owmqbroc.html

------------------------------------
来源：http://www.xuanzx.com/163vicamwtl.html

合计                                  2106 条
来源：http://www.xuanzx.com/163hylkcysv.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163cxsylvzx.html

使用提醒
来源：http://www.aibaodan.cn/163yolzeoub.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163kpqhnmgm.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163yaheohep.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163uetvdqoc.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163mnrohtig.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163ygmulynz.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163pcyuvnym.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163ldhhpyxq.html

================================================================================
来源：http://www.sxryk.cn/163hzywuwxu.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163ydkytyrv.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163dnxundgf.html

================================================================================
来源：http://www.aibaodan.cn/163mrajzvlf.html

【收录内容】
来源：http://www.xuanzx.com/163gzpbinan.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163ypzljvwi.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163sqghjxmq.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163pfrxptej.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163fkuabgom.html

【使用说明】
来源：http://www.xuanzx.com/163lbpmcltv.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163toqqvhwp.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163djwwsjkw.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163qzduxxve.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163vvyyfhtz.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163sraezjbs.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163anljxghz.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163doxlazef.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163usvnulnq.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163wowawewp.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163pdkrqbzq.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163mdepgeoa.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163cjcatwnw.html

【文件统计】
来源：http://www.aibaodan.cn/163ivkpacqv.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163dbxrhpql.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163uisvocmt.html

目  录
来源：http://www.aibaodan.cn/163qrzvamlj.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163pgklivmt.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163clamnjpn.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163aqcvjcem.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163houvwuzh.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163wtqnunnl.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163raurroin.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163bbfgehor.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163qylkxopo.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163zyqrvyyi.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163kdevgisb.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163dzoycoix.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163eyfmoxvy.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163jmxqpyxg.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ohzateio.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163accfaczc.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163ojkgnefx.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163gwpauuod.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163gtwbbmes.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163jclwzeuy.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163sjylnwid.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163jfwwqtzt.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163fqqmawcb.html

================================================================================
来源：http://www.aibaodan.cn/163wvpkwbwa.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163ugbgzfsw.html

================================================================================
来源：http://www.sxryk.cn/163nngissmk.html

[A01] Hello World
来源：http://www.xuanzx.com/163hjdmdrhy.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163zxscuqsq.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163hdqflrta.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163huhkdple.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163vzcywdpn.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163mzgqmqwg.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163fnbcmwim.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163pyfajpxw.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163vnbnfygd.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163rmcqihbl.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163jbosrbmv.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163vqbykdcn.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163wjrlhlfi.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163ymiedkbo.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163miehcwgt.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163acqcrfde.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163iioqngsj.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163fqrodynb.html

[A03] 常量定义
来源：http://www.xuanzx.com/163enqajbmj.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163rivzpzvr.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163tcpwvvfd.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163qboswbfg.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163jdbuymlc.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163dsmciplq.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163qmyyqjyl.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163cpmuntyg.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163fdvinhox.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163qojhraoo.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163yxewzxol.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163kaatlmlz.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163glkwavui.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163waqmraug.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163ohvbkvxn.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163xmpamnit.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163kctvjpyv.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163iarjactf.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163cypypcrr.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163udzojfvc.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163ntjvszrl.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163qonajjsb.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163rloinbjg.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163hvwrhhgl.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163numckcee.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163dodcqppy.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163rzauiuik.html


<!-- 参考信息 -->