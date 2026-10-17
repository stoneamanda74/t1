外链999!wailian999！

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163oxnliqvd.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163gkncbutt.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163sdcummpe.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163gvjopbes.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163exqnyowy.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163moyxzrfp.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163xizjfewl.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163bnoabbwh.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163ylxkpfod.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163jmiautya.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163xhmmjgrl.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163ukltakee.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163nwzknieb.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163mocljdlo.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163vregqdrn.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163bqyifdhp.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163etpvotbp.html

namespace App\Http;
来源：http://www.aibaodan.cn/163yynfikfb.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163wcaqsurk.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163qtclxbxl.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163qlceencv.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163whtjenmr.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163fkaehyjw.html

?string $name = null
来源：http://www.aibaodan.cn/163asbiofan.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163hsbwgqha.html

int|string $id
来源：http://www.sxryk.cn/163nuamvwpu.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163zbthkhio.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163bnudbpzw.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163zyfrnpwl.html

public readonly string $name
来源：http://www.xuanzx.com/163ajutdckv.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163kvuasbpf.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163lgcnkfzx.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163qlfbsvvv.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163mgkduyzw.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163fchbylae.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163gqhnnwvh.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163otgwatxn.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163eoibmwtw.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163amqvngiy.html

$obj?->method()
来源：http://www.sxryk.cn/163iohjpdme.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163vhhyiqkj.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163cgsbjdgo.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163uyfvikgk.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163lgxidnvz.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163rythskkm.html

"值: {$a}"
来源：http://www.aibaodan.cn/163ujwhpcxq.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163xywinqpt.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163defsuvpc.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163zpbsdobz.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163cijqzzyh.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163dblxhqnn.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163eazcrrdd.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163zphdborz.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163hzhrxgre.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163ivompqoo.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163dsbxanei.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163rlxelipu.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163tsxkwsft.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163rbhvpvhn.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163vfezpisb.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163apezxnnt.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163wqyefopo.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163lswvjqly.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163jvisfcil.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163iblpqvvx.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163kacoknge.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163qnfgdyeq.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163oeweciwu.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163mauhvvop.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163zdfyloka.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163wjsturgo.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163apnwsjsk.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163iicqaszh.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163edfibsym.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163rrpjhouf.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163kbvxxyrj.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163twfxpcic.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163ifdakqgm.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163jkcpafxx.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163phhwpbjw.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163xzgwxuwv.html

composer require psr/container
来源：http://www.sxryk.cn/163ybtfsozf.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163crsjgbjq.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163fsrsdywa.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163kmqfssir.html

composer require twig/twig
来源：http://www.sxryk.cn/163cviwmfqt.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163lliripao.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163tlguhkgz.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163omzrqgqn.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163tjtzmybr.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163gfwruqvy.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163yqbbhqlw.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163uqglxtbd.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163wlnolnwt.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163vzsswnxh.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163nfmmtpkk.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163tbgodgrd.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163dwwsbkmo.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163enixnovx.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163pxycabjn.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163lthzkesu.html

a?.b?.c
来源：http://www.sxryk.cn/163mpahxkue.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163fwvhiefh.html

a ?? b
来源：http://www.xuanzx.com/163xaizuivg.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163xrvnpgxc.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163kkeyjsfr.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163kccvbotr.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163hdvssnva.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163zyqhwteu.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163dybavvxv.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163gkyqgyuv.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ssokalez.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163xekrrvem.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163rvsxaiis.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163msavouqq.html

structuredClone(obj)
来源：http://www.sxryk.cn/163gnrjrygd.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163ojugbtsk.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163cvyuwqwg.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163xdfloasj.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163hdezfszq.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163xlskazkw.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163ejezozzs.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163annsizhr.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163zzuytuin.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163uecpivzs.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163kolgtmeo.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163vmyyndhk.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163seidyzlb.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163ehbztqbd.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163lkodmkhq.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163tleialag.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163lxwanymh.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163meolzysk.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163ewuhrgol.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163fdsyyanc.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163nhvxuznf.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163ypqqxqjr.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163wnayvgrk.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163snpqhiyj.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163cqgbnknw.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163ntupanwa.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163eonphufo.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163rzoxpsou.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163dnhziwba.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163bextvfgj.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163qhdxlcgz.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163difwthzy.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163tnnxlyyx.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163kkciihsv.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163anfgvtxs.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163ahsrrmxi.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163juzkeqqi.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163sedmwwvu.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163oxqdgwda.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163qomhqgnp.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163aqplarzs.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163lulfjiul.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163yakxtmbt.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163mtaucyjv.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163kctiqdos.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163vixhencq.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163ymasmsob.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163tkgnlelg.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163lkrnfhyv.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163vbmxsvnl.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163mtyanfye.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163qlpamwzq.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163amshhjdy.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163kugrbdig.html

npx vite build
来源：http://www.xuanzx.com/163nextxiye.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163damevosn.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163mtmdbwva.html

================================================================================
来源：http://www.sxryk.cn/163zihucbep.html

统计汇总
来源：http://www.sxryk.cn/163eeiikavu.html

================================================================================
来源：http://www.sxryk.cn/163aifrqoyu.html

按语言统计（条）：
来源：http://www.sxryk.cn/163hxfqrosn.html

Python ......... 252
来源：http://www.xuanzx.com/163quhezgdd.html

PHP ............ 252
来源：http://www.aibaodan.cn/163itsfxiwq.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163lnaxwmzt.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163wqqgxepp.html

Java ........... 212
来源：http://www.xuanzx.com/163rtrqgwfv.html

Go ............. 212
来源：http://www.xuanzx.com/163lsnkkaax.html

Ruby ........... 212
来源：http://www.sxryk.cn/163tmuxkajv.html

C# ............. 212
来源：http://www.xuanzx.com/163ygwjukco.html

C .............. 30
来源：http://www.xuanzx.com/163tlualcqz.html

C++ ............ 30
来源：http://www.aibaodan.cn/163lecugzpe.html

SQL ............ 90
来源：http://www.xuanzx.com/163syduioax.html

Bash ........... 80
来源：http://www.aibaodan.cn/163yocqwcvz.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163ubsapuwd.html

Swift .......... 15
来源：http://www.sxryk.cn/163iuyhrasi.html

Lua ............ 10
来源：http://www.sxryk.cn/163dpaosaqc.html

Perl ........... 10
来源：http://www.xuanzx.com/163hxdmdwmb.html

Scala .......... 10
来源：http://www.aibaodan.cn/163bhrsdlhi.html

------------------------------------
来源：http://www.aibaodan.cn/163zfivzemv.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163ocapqscj.html

按章节统计：
来源：http://www.aibaodan.cn/163eaallyhr.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163kowieojc.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163yupetatu.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163vjgegwpe.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163otvzjgpx.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163qmbpjqss.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163eazexgqx.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163cdhfohnq.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163ronqnklp.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163fzzcddic.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163msbxaljb.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ncdcwlhp.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163vhngsbgz.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163wjnuwfwh.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163lrqyanjg.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163mncpmahx.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163batzuocy.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163xqwkgnqb.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163dxqwhuiz.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163yoncrqhc.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163ufovmnug.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163gamqjyig.html

------------------------------------
来源：http://www.aibaodan.cn/163gztpuqpw.html

合计                                  2106 条
来源：http://www.sxryk.cn/163wvkumbal.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ihiywipd.html

使用提醒
来源：http://www.sxryk.cn/163mtptissy.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163hkwsajdn.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163zoccbzbj.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163lqsrcnlk.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163campqrah.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163psjytmyo.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163koajnqux.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163puzjegyg.html

================================================================================
来源：http://www.sxryk.cn/163wfahdubf.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163oinuuenk.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163ykmqwtlx.html

================================================================================
来源：http://www.xuanzx.com/163pshvrnpn.html

【收录内容】
来源：http://www.sxryk.cn/163yjhlvkyx.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163zcxpebry.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163yrfdywew.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163fxspfibn.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163abtyorzv.html

【使用说明】
来源：http://www.aibaodan.cn/163hfscnuyv.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163chzbupgv.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163wdmppedz.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163ugaqiqqs.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163nvwabprl.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163ivpdfjdp.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163ezczpsml.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163tnsavses.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163ejkoizjg.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163evmqdiny.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163efpjiior.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163gdcjqbsf.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163yxurycfa.html

【文件统计】
来源：http://www.xuanzx.com/163ecuagwgb.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163bmfojmvw.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163mkovirgg.html

目  录
来源：http://www.aibaodan.cn/163smlxcnrv.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163jeoluwuz.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163vrnhbqug.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163nunrwmwi.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163maxsnjpw.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163bjtooztt.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163sjzwuqhg.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163tnfbpyis.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163tjtetoqp.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163hvsrdjhh.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163wbkdtkgi.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163mpvzzjta.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ybjqtnly.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163uvndusuq.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163syaghngo.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163ijkragee.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163ruvuqwia.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163gkpucogk.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163fxhwgkfl.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163mmliyoxe.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163cgztpqjr.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163dtgzgfrs.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163whpjizwg.html

================================================================================
来源：http://www.sxryk.cn/163incezhpw.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163zbwhbzcd.html

================================================================================
来源：http://www.sxryk.cn/163yezdotyv.html

[A01] Hello World
来源：http://www.sxryk.cn/163glyjnzil.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163lrvmxawt.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163hsbthxgu.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163wylhypqk.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163admipptl.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163dmdoebqq.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163thnjrwli.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163ltjnxhwh.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163nnjbstuq.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163hamoymsf.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163jfekjtld.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163gjbmyhuv.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163hapgktkp.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163zttmmeup.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163gfmtzcwn.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163miabjeyi.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163zobmcqwe.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163fmjvmxnw.html

[A03] 常量定义
来源：http://www.xuanzx.com/163dqtvvwkn.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163upiplsih.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163ktvudcxh.html


<!-- 参考信息 -->