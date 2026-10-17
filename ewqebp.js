外链999!wailian999！

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163huenhega.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163iizhuasc.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163sofwfysa.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163ncqzzkzw.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163boofkqfs.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163egnqtgax.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163neuzyywp.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163xocfirus.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163ssbnpkay.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163blbulyaw.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163iqomgrti.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163rywftqbk.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163anrbizme.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163kuwgbvcy.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163wwqzrxfo.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163kddlslkt.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163qdafxiud.html

namespace App\Http;
来源：http://www.sxryk.cn/163gdbhqcwp.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163nmywdszm.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163fweeejav.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163rppxgkmd.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ugdzartc.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163mxmtfkwc.html

?string $name = null
来源：http://www.sxryk.cn/163hgmmlbnu.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163hrgvolgb.html

int|string $id
来源：http://www.aibaodan.cn/163vxqczndd.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163gbotiggc.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163kckaoxsc.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163tkozzjvd.html

public readonly string $name
来源：http://www.sxryk.cn/163vunkdpke.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163nttkitut.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163ffcresro.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163xqqlqiem.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163fmknmvxd.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163atfunxpw.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163vumuvshu.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163ydypruvs.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163jtbesecg.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163jvcjucba.html

$obj?->method()
来源：http://www.xuanzx.com/163mvuvnnsi.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163oozusymk.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163twduslfh.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163fvppkath.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163meznljmc.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163ehmdvvjb.html

"值: {$a}"
来源：http://www.xuanzx.com/163ylkdndsu.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163dbdxvxqu.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163ppotamqz.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163rhxuvzwt.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163rkntogjj.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163jfmxvuzj.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163coiwskod.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163zszxaber.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163klecoldx.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163aiwsjkdz.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163aaqofyoq.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163ndjwcuff.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163dzecnogn.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163drwgxlpy.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163qjktlqcu.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163encufefq.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163hpxcfsid.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163evvgflts.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163uvvqztcp.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163xdrzcrfw.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163kqmsthxn.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163mkqzhrpq.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163jgnutxci.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163gaykjeao.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163mhudyrdq.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163xymjqtkf.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163phxswiqi.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163imzhyaqe.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163aopotudn.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163thnsribd.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163xxfbfdyc.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163baqjomka.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163tmszeryf.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163fynvitni.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163fbcevnoq.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163uxcqckuq.html

composer require psr/container
来源：http://www.xuanzx.com/163ipahdeqz.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163qaugamth.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163qbavfqqw.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163yqlqiwft.html

composer require twig/twig
来源：http://www.xuanzx.com/163jsewdxzn.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163howpanyf.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163bonayigg.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163fgkclvpi.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163wfrpcpco.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163dscaodxi.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163ynfoaoyh.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163uxjiljbo.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163pwelxxjr.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163sjjnckea.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163nilrwzlu.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163yhecxwrk.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163bfbbpljb.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163mvmshgrz.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163rsdbajjv.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163qhefskmm.html

a?.b?.c
来源：http://www.aibaodan.cn/163baqkqzdr.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163ypgupiia.html

a ?? b
来源：http://www.aibaodan.cn/163fdfvhszn.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163phrsbyzu.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163voplwyzu.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163xhtplmsd.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163fgbpdkdw.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163sghtmcmj.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163zzdrfsch.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163ndwozvcx.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163vrpaahhz.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163idpoqjvz.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163qpzyjjrm.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163zcuqtzkk.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163ncktaend.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163uvepscyf.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163arhbifyu.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163ckzrpanr.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163epkocgmi.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163ezimhgoj.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163midvhjls.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163ygfxgyli.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163iawjgafj.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163insqxzcz.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ualckjgj.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163spmpilez.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163ktdldjlr.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163csfbyekv.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163xcdinjji.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163ybykhpnj.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163fgohtwmf.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163myqrigvz.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163vxziobey.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163euyagpph.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163bthateue.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163fdjwwngr.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163karciesb.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163njfiudbl.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163znxuxfjl.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163sjpoqezc.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163izyowrjk.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163gldfgond.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163jjfkgstt.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163cfapqdcn.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163vbrsqoid.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163itaxknah.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163lmquytdu.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163rpabndhv.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163lcgjsgit.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163aosahfiw.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163qvjqjbmf.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163ghlrgfop.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163lvuxfdyy.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163yjfmhxja.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163xskgpeev.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163zwvmzhmq.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ihazcwju.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163ihoysxcw.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163mgrlozbf.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163afahmqqd.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163drmnoxtk.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163uagfzvfo.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163bjceopkb.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163edqcfdln.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163ypldzoad.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163scypcmnk.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163pvahlgoh.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163auskdhst.html

npx vite build
来源：http://www.sxryk.cn/163wcisimdy.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163mwujegpv.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163nnugjnoq.html

================================================================================
来源：http://www.xuanzx.com/163mmbgazkt.html

统计汇总
来源：http://www.aibaodan.cn/163lpzfvmoc.html

================================================================================
来源：http://www.xuanzx.com/163jqrlunnk.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163wtpeweaw.html

Python ......... 252
来源：http://www.sxryk.cn/163gdtuxwdq.html

PHP ............ 252
来源：http://www.aibaodan.cn/163zwkxlsee.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163wgbohabo.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163dgsflasn.html

Java ........... 212
来源：http://www.sxryk.cn/163kdhdronz.html

Go ............. 212
来源：http://www.aibaodan.cn/163hpgmotqh.html

Ruby ........... 212
来源：http://www.xuanzx.com/163uexmbdxb.html

C# ............. 212
来源：http://www.aibaodan.cn/163lqdmiihv.html

C .............. 30
来源：http://www.xuanzx.com/163twpdycli.html

C++ ............ 30
来源：http://www.sxryk.cn/163ahhubyzh.html

SQL ............ 90
来源：http://www.aibaodan.cn/163htboefya.html

Bash ........... 80
来源：http://www.sxryk.cn/163araolzqi.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163toysxupd.html

Swift .......... 15
来源：http://www.aibaodan.cn/163siwxssbv.html

Lua ............ 10
来源：http://www.aibaodan.cn/163dicevepr.html

Perl ........... 10
来源：http://www.aibaodan.cn/163sqtmrryd.html

Scala .......... 10
来源：http://www.xuanzx.com/163rnuztavk.html

------------------------------------
来源：http://www.aibaodan.cn/163agjeapyj.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163jvdfluta.html

按章节统计：
来源：http://www.xuanzx.com/163pwmkgcki.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163wxgtchts.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163agpnaryx.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163katsiccp.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163hujuuync.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163ujubnqij.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163lltghruv.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163omqgylfd.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163bjrcznmf.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163zkqkgvbm.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163cwoylvqk.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163mbakoiso.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ezckgore.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163xibdkgbh.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163lvcuzpcr.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163cyhoxawa.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163niyczspy.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163ezgqkmye.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163aqnaouge.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163avqbmoox.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163vdkmsiaj.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163nqynjmzp.html

------------------------------------
来源：http://www.aibaodan.cn/163qtbajpsp.html

合计                                  2106 条
来源：http://www.xuanzx.com/163xfsujoxw.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163iphwsjap.html

使用提醒
来源：http://www.sxryk.cn/163qdigdvup.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163eudsbfuw.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163cigupzll.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163zlwfemvy.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163ltoxopuf.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163fcxuqqhu.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163uyrhnmwo.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163ewbvaavh.html

================================================================================
来源：http://www.xuanzx.com/163idieugpl.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163wdkwxlny.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163cmvvzahz.html

================================================================================
来源：http://www.aibaodan.cn/163ptffisaq.html

【收录内容】
来源：http://www.sxryk.cn/163oidslxps.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163vqfxxwgt.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163pnstaode.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163nsmhpdmr.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163qkcepqsi.html

【使用说明】
来源：http://www.sxryk.cn/163eewcazdp.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163mwurtsrw.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163zydvnivb.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163yklztupb.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163hprvcylc.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163nadotesx.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163qzkzhqlq.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163xetaghzf.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163bftztzzw.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163hcfztaaz.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163hligegnh.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163urfcyrkg.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163kjzuydxd.html

【文件统计】
来源：http://www.xuanzx.com/163cxmdnewa.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163zegceuyk.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163aedeuirr.html

目  录
来源：http://www.aibaodan.cn/163rxqdrzev.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163tmjsuppb.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163ntqfzhgc.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163qdywxeor.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163zsgxvjjn.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163rjsvvqrb.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163oirskjqr.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163wvepszse.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163htkjnuhb.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163wwxrnmwd.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163mtttfwsn.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163wnmwnyio.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163wxdvpwqy.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163rvszrwvo.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163zgrumpxj.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163sreimliv.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163tdxsbohe.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163zpxvwlls.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163veuhbqzh.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163kcqycbjw.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163zxhxgksk.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163bejorcae.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163zsehbdxg.html

================================================================================
来源：http://www.xuanzx.com/163tlrmihue.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163goaxazii.html

================================================================================
来源：http://www.aibaodan.cn/163ctqrwpkq.html

[A01] Hello World
来源：http://www.aibaodan.cn/163mavsppxx.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163wveiibpf.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163jsbnpirr.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163xbaqyjqu.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163qpnvweva.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163uoapyyru.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163uuaoljwm.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163slmzqzjr.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163ncqkwvnz.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163cduyqhjo.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163hslyggdk.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163ktxqqpik.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163bktajdhl.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163dcoxbfbz.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163ojvpuywg.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163eqppgnbf.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163zzdoqbps.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163bgvrwhpo.html

[A03] 常量定义
来源：http://www.sxryk.cn/163sloyxukj.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163vsnrcaox.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163bgllpxtx.html


<!-- 参考信息 -->