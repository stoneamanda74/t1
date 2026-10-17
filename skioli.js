外链999!wailian999！

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163likvssre.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163eissqjbf.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163xcpshvsn.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163luvkbjei.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163jetrviiz.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163weabwshm.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163uctixuxs.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163tuytihbl.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163zzetyknf.html

namespace App\Http;
来源：http://www.aibaodan.cn/163lxlixyne.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163xvxxqqoq.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163ipolvocv.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163sjuethen.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163wbpujjeu.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163tbmbwgje.html

?string $name = null
来源：http://www.aibaodan.cn/163zrqodbab.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163xgiuezvo.html

int|string $id
来源：http://www.xuanzx.com/163iwuodzsp.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163dhoznaxn.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163scehzbbl.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163vfyarbib.html

public readonly string $name
来源：http://www.sxryk.cn/163tpockaar.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163hrluepyn.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163lhgazowa.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163noejykpg.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163dbbahylx.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163ojjpcscp.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163cagmsauv.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163jnxsnrxc.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163gegwvzzi.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163wigtzrwz.html

$obj?->method()
来源：http://www.sxryk.cn/163efvektuy.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163vuitrqzn.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163ufjqkuev.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163dryecxec.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163jsswpkhb.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163kersnqjv.html

"值: {$a}"
来源：http://www.aibaodan.cn/163gbvutkzu.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163hlyelupv.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163xwvexwbm.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163tbxtstvi.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163kovtmqov.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163rhhbqoey.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163nbbuooyw.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163cipzfyew.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163fzcgytha.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163ubmktbdh.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163jjzqbvdc.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163ttbcvcje.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163tsbgfmck.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163qvrtfrbp.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163mnyypyya.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163chmmhkhg.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163qsfppmoc.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163nzibfzyt.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163wewgdjji.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163egzpjqvh.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163kjaqqdqz.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163qkkikgcv.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163aqjugpct.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163geznbihu.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163qeraaorx.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163kacsznfj.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163dsgvwrco.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163cvusmmgw.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163cpbjpdsi.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163nucthjzo.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163kfhxsssi.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163bnagnclz.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163gopsooaj.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163thprrdjd.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163oebfwkst.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163rbkxmlxd.html

composer require psr/container
来源：http://www.aibaodan.cn/163tekfcsxu.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163wbcfdwfi.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163lleeoaae.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163ojmzzamv.html

composer require twig/twig
来源：http://www.xuanzx.com/163mdikjlju.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163fsewthhp.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163yxwskecs.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163yaosionq.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163zxcwdvko.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163yojwcwcy.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163dszbrmca.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163hvhgrkrk.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163xpukzahq.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163sannvzjj.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163hoavyyvn.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163lzertwmr.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163fdcqbxof.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163toqmndbv.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163gxmgmzkz.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163juhtgjlq.html

a?.b?.c
来源：http://www.aibaodan.cn/163iwgwpwfm.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163fhzikhjm.html

a ?? b
来源：http://www.xuanzx.com/163mcwvuodc.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163rctlnwnv.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163orwmfaap.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163fwwscgbq.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163iflstzpj.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163ovplyzqx.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163kstkywnu.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163sngvkuvt.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163drqymrdm.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163nnckawrw.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163dygybagz.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163uhanbkze.html

structuredClone(obj)
来源：http://www.sxryk.cn/163xxipvziy.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163rhqgwaca.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163fcsytzzd.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163xqzexvwp.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163aolzpobz.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163merrjpou.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163kceotcah.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163borvczuw.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ydkjacvl.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163ajnztghs.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ygmnsbls.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163adevlofa.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163lmqlemtr.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163whwvgzaq.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163gbrlgmgr.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163aplgvmap.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163gxvtzrcn.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163wgdhnkhr.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163dwfenhpm.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163xssfhgei.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163xaqtsjbx.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163bxwwilks.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163wiybsttl.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163aoftfayc.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163hsxidkuk.html

[U105] JS：节流
来源：http://www.sxryk.cn/163igljbrtr.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163uluyapxx.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163iegmilgp.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163ownrnifh.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163rpnbwiaf.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163ijdilvkq.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163aypeujal.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163dqbtrpyy.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163kvyqczif.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163crjdqnnx.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163vsfmlysu.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163llbkdcku.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163ysvsoeao.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163wqomdkfi.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163lyrqfdqy.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163pvtyglkm.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163bxxixjzx.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163azjdjkhx.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163dlvuqyra.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163afzqkunk.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163srhirwew.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163vlpucsgx.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163bboojbuj.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163gfwiyhtx.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163dmztvkcu.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163cobkgvrk.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163hynbdgpa.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163qxyrobta.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163cdzaejet.html

npx vite build
来源：http://www.aibaodan.cn/163tnsdgksa.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163omnutplu.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163oagzognn.html

================================================================================
来源：http://www.aibaodan.cn/163zjvqlvjq.html

统计汇总
来源：http://www.xuanzx.com/163mkoycmzm.html

================================================================================
来源：http://www.aibaodan.cn/163gyrlrbus.html

按语言统计（条）：
来源：http://www.xuanzx.com/163qkshbgke.html

Python ......... 252
来源：http://www.aibaodan.cn/163omupjjwq.html

PHP ............ 252
来源：http://www.xuanzx.com/163xdnghhzb.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163anxfhaar.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163ehlwrrkj.html

Java ........... 212
来源：http://www.aibaodan.cn/163hkmzbkss.html

Go ............. 212
来源：http://www.sxryk.cn/163cmzhauzp.html

Ruby ........... 212
来源：http://www.xuanzx.com/163mwtrmbbk.html

C# ............. 212
来源：http://www.aibaodan.cn/163gkplvdhs.html

C .............. 30
来源：http://www.xuanzx.com/163vlybtbaf.html

C++ ............ 30
来源：http://www.aibaodan.cn/163ultvpypg.html

SQL ............ 90
来源：http://www.aibaodan.cn/163zrwkqhty.html

Bash ........... 80
来源：http://www.xuanzx.com/163ucxsvziw.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163rdrcsxhd.html

Swift .......... 15
来源：http://www.xuanzx.com/163jbkpmvcq.html

Lua ............ 10
来源：http://www.aibaodan.cn/163crvtkyou.html

Perl ........... 10
来源：http://www.sxryk.cn/163cvydvkbj.html

Scala .......... 10
来源：http://www.aibaodan.cn/163dvemhynk.html

------------------------------------
来源：http://www.xuanzx.com/163sthgxqsa.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163jlaagtla.html

按章节统计：
来源：http://www.sxryk.cn/163dcmjqumr.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163odywsoxn.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163zstocsij.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163mzdmjphi.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163ipayfavg.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163iyjmxndr.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163dnhmylho.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163vywuntqd.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163dpuuosic.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163xtbkpvbu.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163gjilupfm.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163emmjtajj.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ffppueyq.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163sftgbbps.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163rqmievju.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163vmdwawyp.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163vhyqltmb.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163glmvcckc.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163fmzcfymb.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163dibksqcb.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163gklaukpy.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163wssvgssa.html

------------------------------------
来源：http://www.xuanzx.com/163rczwlxoc.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163uvceyjln.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163unfwkxjl.html

使用提醒
来源：http://www.xuanzx.com/163nhuqsimd.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163xttgfpfx.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163brqlcsnn.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163ixapmfcu.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163cozbinta.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163cdfdpsvb.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163rfphxmva.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163cbhynslg.html

================================================================================
来源：http://www.aibaodan.cn/163mceajnos.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163dkkhubjc.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163gxtmiczp.html

================================================================================
来源：http://www.aibaodan.cn/163uanjgabc.html

【收录内容】
来源：http://www.sxryk.cn/163zcczsyvb.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163nxakmkes.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163apssyvib.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163inemuqlu.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163mvvzawkd.html

【使用说明】
来源：http://www.aibaodan.cn/163dnoajygl.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163vivpblxh.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163tdmzrgnl.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163uyljauza.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163nvgyxojh.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163kmiriojw.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163nisflzxa.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163aoffefkw.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163pghamitu.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163lcqeuiwo.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163xsnrmdtd.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163lxnoyjhw.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163qnznkbpn.html

【文件统计】
来源：http://www.xuanzx.com/163zmgoxbnd.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163ldawaayl.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163gvdpqytm.html

目  录
来源：http://www.aibaodan.cn/163kdeermyd.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163qemuofot.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163bovhgohh.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163sxuovgmc.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163ozvswric.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163wjggtvht.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163dabxxbki.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163icqtmgis.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163gjddtluw.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163zixnxlui.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163rspxdpwb.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163asqhxjfo.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ifqhefnc.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ocaxazvb.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163edxwnrwa.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163wurfrjdt.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163vmbwhnlm.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163atawvqnq.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163pyqpynwf.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163bslvesil.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163jwkenohd.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163wfidkhgj.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163cvwgrxaj.html

================================================================================
来源：http://www.sxryk.cn/163absenlsi.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163mxguvlfx.html

================================================================================
来源：http://www.aibaodan.cn/163qfptmhqs.html

[A01] Hello World
来源：http://www.aibaodan.cn/163fxgqxjzv.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163dzzgtjek.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163odhkncnk.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163homtolad.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163jnfllozg.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163dazgxpeu.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163vrhnzzul.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163jzjwuipl.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163mfjtdseg.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163gbcthlqq.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163izxqrflp.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163zqdjentx.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163pcaqdqdx.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163dbavocms.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163ozrchgds.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163xyblsbfc.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163ekejfqkk.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163bbmcvabs.html

[A03] 常量定义
来源：http://www.xuanzx.com/163wckafexe.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163vywriosv.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163ztwdpwym.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163wzuxufup.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163gnmjvhpn.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163arbojlaq.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163phsavxrk.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163sqnytjwh.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163mkbhycrf.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163qkkewxbx.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163xhnfrmbb.html


<!-- 参考信息 -->