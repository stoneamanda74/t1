外链999!wailian999！

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163kgxwpjwe.html

namespace App\Http;
来源：http://www.sxryk.cn/163husqbfeh.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163usogkbqm.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163opspyywo.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163ozluguri.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163mwtxmvwl.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163fauzuyow.html

?string $name = null
来源：http://www.aibaodan.cn/163aopbfimd.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163buuvuwwv.html

int|string $id
来源：http://www.sxryk.cn/163ymlcxhcz.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163htuiwpnh.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163iqefbxsq.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163hnbczkkl.html

public readonly string $name
来源：http://www.xuanzx.com/163gazamjqj.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163vutlrtau.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163jcwxzfwc.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163jpedhlrz.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163hfxwlani.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163wzzbanue.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163iukuajzg.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163onhycbbj.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163jfnavvdb.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163gviqrnct.html

$obj?->method()
来源：http://www.sxryk.cn/163vfqwwfmj.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163zxfwjsdr.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163nqpoknzu.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163lhymyeyh.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163lgwvbzbr.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163ntjiaczv.html

"值: {$a}"
来源：http://www.sxryk.cn/163escvctbx.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163dwwbopio.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163idwnnbtj.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163xztwdtnr.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163zysszsan.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163ryrpnkjf.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163vtgutwqy.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163fmfzzyrl.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163asatwopk.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163eusoygzl.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163abwxdqcd.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163pgosgaxm.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163ykmsitsk.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163baxyhqda.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163fqtlejur.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163lrdtfryy.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163cyxhxwtj.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163fuzehqan.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163qknsaewd.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163kmggpqoo.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163akozgaxo.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163zyvlzdrv.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163wmsgcibk.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163xxelmvlx.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163iwtgzjzh.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163kvgpvymd.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163ltfgazpe.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163nxgmfhvf.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163iqsmzven.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163ajuvtmeh.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163bzxbmktk.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163wcyrnkhe.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163jtjzlzqp.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163czjjwzfm.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163rxamsqjb.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163vziaeegp.html

composer require psr/container
来源：http://www.xuanzx.com/163wrldqmjt.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163baoqafdw.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163jwxhdsjh.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163tcvhtnjl.html

composer require twig/twig
来源：http://www.aibaodan.cn/163nsoefvcc.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163stzzohmn.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163vizgryhe.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163ocrcykzz.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163czoepwzf.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163uqdkiplw.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163uhmgjyay.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163mbubqxyn.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163winneepq.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163lxgfnipp.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163kopowcvq.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163ngzzdykt.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163yzvjcfsu.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163pdedrsrb.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163oohqbzrq.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163tifdetmb.html

a?.b?.c
来源：http://www.aibaodan.cn/163trrwnsec.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163tmvsfapm.html

a ?? b
来源：http://www.aibaodan.cn/163nlevhtnw.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163cnchxvng.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163iuwgepys.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163wvxvxndt.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163mvhvublt.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163ohlbnjad.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163ivzwufvm.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163afakurou.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163zkphapqp.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163arhjkpaw.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163sjxpkbwb.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163gqjrqnxm.html

structuredClone(obj)
来源：http://www.xuanzx.com/163lbwtagny.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163kjpcjfhc.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163ouveueaf.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163nvpduhws.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163epojxowp.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163mhivdjkg.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163tuqezrjy.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163fkwodhni.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163mawcrhlq.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163umpyvzwr.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163pjnlqcge.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163omlrzjyz.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163hdjprkbe.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163ajetvjib.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163kfbuoyuk.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163ehnkzena.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163fvpgxbdr.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163tojhzump.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163eqnvzfeu.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163odmeivpb.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163kudcsevi.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163lgcxlpwn.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163vkjrmdqf.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163qfgfludv.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163oleontsc.html

[U105] JS：节流
来源：http://www.xuanzx.com/163woxgrqvm.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163dzxforsl.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163snwcetcf.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163qbnmytfp.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163iumhtwyf.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163lhtiyorw.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163ulhcwgyz.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163tzolnhyk.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163bqrqctxe.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163aildebuy.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163lcaubpkg.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163fkmjdezw.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163rehdagjd.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163nshosnvn.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163zsxbwjqy.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163kedufdfc.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163xpluvmnb.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163fcbzesou.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163aarghrfb.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163stktakks.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163xxyqtgdn.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163tyztnwxa.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163ftiljllb.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163uswvuugf.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163eiqqbnwn.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163fmybsnej.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163hwikixem.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163srajbvoo.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163vnhdeuyk.html

npx vite build
来源：http://www.sxryk.cn/163ekquiqlj.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163mwvfzxhd.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163xcmffxxi.html

================================================================================
来源：http://www.sxryk.cn/163kbpgrjrg.html

统计汇总
来源：http://www.xuanzx.com/163ixmrrmmb.html

================================================================================
来源：http://www.xuanzx.com/163plxgxmjw.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163ttlnlnfg.html

Python ......... 252
来源：http://www.aibaodan.cn/163abopntps.html

PHP ............ 252
来源：http://www.xuanzx.com/163khcfcpuz.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163iqaeuuwi.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163vbgnjbbp.html

Java ........... 212
来源：http://www.aibaodan.cn/163tqnidxqa.html

Go ............. 212
来源：http://www.aibaodan.cn/163yovkgbgj.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163wmwpkhbr.html

C# ............. 212
来源：http://www.xuanzx.com/163ojmcvkmk.html

C .............. 30
来源：http://www.xuanzx.com/163npenrbhh.html

C++ ............ 30
来源：http://www.aibaodan.cn/163ondzbpaf.html

SQL ............ 90
来源：http://www.xuanzx.com/163ogqgbslz.html

Bash ........... 80
来源：http://www.xuanzx.com/163rphleuia.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163yuhlzotl.html

Swift .......... 15
来源：http://www.aibaodan.cn/163zhndsfmu.html

Lua ............ 10
来源：http://www.sxryk.cn/163hjvwdipy.html

Perl ........... 10
来源：http://www.aibaodan.cn/163tflftqgv.html

Scala .......... 10
来源：http://www.sxryk.cn/163enhuphdu.html

------------------------------------
来源：http://www.sxryk.cn/163llqqmblk.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163xpfdbbnx.html

按章节统计：
来源：http://www.aibaodan.cn/163zaxmdjsm.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163aeuxjufe.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163ulqdiunz.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163wphwtjjl.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163cctuqzvp.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163rexegkvi.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163wdpoobpq.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163jpanjnmx.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163sdwwioby.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163nqyxtoho.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163ladcjukk.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163vsiwviqu.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163liimsfrw.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163rzpvzjcg.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163dmlnsrsu.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163kpmvhttq.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163mchppzdl.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163dhlmzpfy.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163xqlbeivj.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163lcfccvnh.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163tyujqzrt.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163yslbwrgs.html

------------------------------------
来源：http://www.sxryk.cn/163kjdxhalz.html

合计                                  2106 条
来源：http://www.sxryk.cn/163nkdbyigj.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163rejwiuba.html

使用提醒
来源：http://www.aibaodan.cn/163iwynlctd.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163tugyslze.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163ktsuvwiy.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163bkbkkglx.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163tjyrotjc.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163ceckmeth.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163tpfcmevz.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163iglxumco.html

================================================================================
来源：http://www.sxryk.cn/163naizuagc.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163ndixggwc.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163jsiapgca.html

================================================================================
来源：http://www.aibaodan.cn/163opaymjxu.html

【收录内容】
来源：http://www.xuanzx.com/163xeyckwoz.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163grxvzwni.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163iaxsqhfr.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163vzuzwvuv.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163ipxsxdma.html

【使用说明】
来源：http://www.sxryk.cn/163lazkiwie.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163lmorkhna.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163nuirlclj.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163kvyarkmg.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163pvlgfojo.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163jtxngzfy.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163kbcacghn.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163soifxcwe.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163dlhlyhhq.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163ddmwlckx.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163ypwiijon.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163uxfykpsg.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163pippbexo.html

【文件统计】
来源：http://www.aibaodan.cn/163jmywrxmn.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163yrwtljti.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163infyozjo.html

目  录
来源：http://www.xuanzx.com/163dxwfkela.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163vfmqoevt.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163eskgydxe.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163hkivtbaq.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163jmwztknp.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163hhecmbee.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163ixntgrpp.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163kzyphksf.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163mqgzqqgo.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163dvdnrxaa.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163evhxzero.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163qfwtgvoz.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ehfhyagc.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163nezuqrnf.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163isptypod.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163ijjcxclv.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163ovpdptty.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ryvlfkdl.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163jnpxeruz.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163azdorpyg.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163slxdcwna.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163xfzxujju.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163kngzkcjj.html

================================================================================
来源：http://www.sxryk.cn/163fyyrrjvd.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163jjbhebhb.html

================================================================================
来源：http://www.sxryk.cn/163iomqzqan.html

[A01] Hello World
来源：http://www.sxryk.cn/163slbcngnf.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163nbxuxlcu.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163iwffxmld.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163unjioblb.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163kagovhec.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163igomzdmq.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163cbpalyzd.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163evbduqwz.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163azsmqmwh.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163ptevbdur.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163akttzgtv.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163ydnxethb.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163jnxmiqze.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163okpjwzec.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163fwxawjrp.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163ifvqirzm.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163yumyhxps.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163mewxpxig.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163qxetueio.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163wbqyfdft.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163ramzmvfs.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163ekdftijv.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163zncpbrxe.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163iyohvptv.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163fwmozmop.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163llulsmno.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163ggwbdocy.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163dwmqajly.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163iskeaubc.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163oghkqtue.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163fofhdfdv.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163uxipfgyj.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163nnvuegje.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163icoezxpv.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163bhmqggjc.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163mziiiyvy.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163ejaahwvj.html


<!-- 参考信息 -->