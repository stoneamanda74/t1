外链999!wailian999！

[U31] Py：单测
来源：http://www.sxryk.cn/163czrvlitc.html

python -m pytest -q
来源：http://www.aibaodan.cn/163kbrjsmtt.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163twuwxjwy.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163ujlgmgdt.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163jhepeusx.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163mxpgzmqg.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163fvpqdawx.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163ccrhrsdz.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163rjhxqape.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163sumwbwhk.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163fmkmmwcr.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163aqjcsqbm.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163vuarvzzj.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163qovpfznt.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163rfwmsmfv.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163savcxzws.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163ehopptej.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163tcenvauv.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163xqwppqpq.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163mhbrktwf.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163icfkftbb.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163wczilvlx.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163ynqftyon.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163olqslwta.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163jbwwdeoy.html

namespace App\Http;
来源：http://www.aibaodan.cn/163jxiuqzqs.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163bvbjmyvs.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163ovtgdzgh.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163tumvnhxc.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163omwixyms.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163rmrtrzqf.html

?string $name = null
来源：http://www.xuanzx.com/163qtbadvlp.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163fbdspzjn.html

int|string $id
来源：http://www.xuanzx.com/163mpeupjez.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163fkvgpego.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163slfjxnmr.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163qpdwpoje.html

public readonly string $name
来源：http://www.sxryk.cn/163gyvmcuxg.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163firwvmcd.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163vhniymvs.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163alcaawqf.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163geidnsso.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163lmrcmxzj.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163mblnppyu.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163mikwibwk.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163iyrfpjwj.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163uaahoyny.html

$obj?->method()
来源：http://www.sxryk.cn/163enftagom.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163kykkaair.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163bnqzuude.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163qfzgmfqp.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163txmytwir.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163qrtzfdmp.html

"值: {$a}"
来源：http://www.sxryk.cn/163olyophjb.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163mjfnmwsv.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163fanspwlh.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163pdwinrfq.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163jcznhlhx.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163aioixkda.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163ljvqxxzl.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163zcivpqig.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163etacojak.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163maaopavp.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163umwqwmyk.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163wxysffbm.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163gytjytlu.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163vntnocoz.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163zvmryvtp.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163fireehmp.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163giparvdj.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163myaugxsk.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163wemfvegx.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163rqaukzxm.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163fwycqigx.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163cvpnysvs.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163aetcchff.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163bztgrgyz.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163jnzhyvdf.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163tndomiwb.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163oilpjsqz.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163froldmio.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163fwthyelb.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163dcrybmpd.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163ovetxcod.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163ofbbiure.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163darftegs.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163nrmgedvw.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163hcdyaplw.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163vzdegagd.html

composer require psr/container
来源：http://www.xuanzx.com/163jkyxlzsx.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163vyrofuoj.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163gdmmlhho.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163dfftnhmb.html

composer require twig/twig
来源：http://www.xuanzx.com/163xqzbwfnl.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163zowusewo.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163dqnwulch.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163yuvxjuss.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163tkgxpfvs.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163waxohszf.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163lqhanlta.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163aljymdzr.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163iizznjtk.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163cxnnnlhe.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163hboomppg.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163sqczhxrt.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163yokrrciv.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163pdvobvdd.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163qqxxcfcp.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163qyvfijyl.html

a?.b?.c
来源：http://www.xuanzx.com/163zelcfkgk.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163wlqsmdzf.html

a ?? b
来源：http://www.sxryk.cn/163usgkbtbp.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163locdwvhu.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163hywgdaoo.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163bturagos.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163sdfxixab.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163citeaxde.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163inejgenn.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163oeuofqkp.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163fuhhypdg.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163iopcrujh.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163quaulqfm.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163rfjqufmr.html

structuredClone(obj)
来源：http://www.xuanzx.com/163kffwkqtt.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163dlgnstjh.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163qfozehar.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163ozrzpwmd.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163igjvxlsv.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163jspsffgg.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163ekqqraqe.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163frolukqx.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163frpfsevi.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163hstymtjp.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163xcdxrorh.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163xjfmgtkm.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163lskqcacb.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163giuaxphb.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163yypwiyxw.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163npelqkhq.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163nvazqkfy.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163vbpyioyq.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163prbmlfdu.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163lyduabmy.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163eumidlbj.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163qbthjeun.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163zyhcwzht.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163zsgbcmcl.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ncfbzxto.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163eqhrgkve.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163sjgajyry.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163kddeijdk.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163pevjtyik.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163cyldxatg.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163orytvmnk.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163nobbxzwr.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163mxggzdct.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163gnivxabq.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163mqbaswga.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163rvgtplte.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163thzlbkuo.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163creimhhc.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163bcysaoiz.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163ddsxlvwr.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163hujmxdxb.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163efxtldfa.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163uejhydhr.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163fexakjhx.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163uaoltsyt.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163fadwklbt.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163zhzgopbd.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163fzxaxwfg.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163zrmhvefm.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163ybtnttgk.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163padailog.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163uogfeeju.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163wyzqgvvy.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163qgifjnjr.html

npx vite build
来源：http://www.sxryk.cn/163luyxzuui.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163agpnkfaj.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163nxghrrgu.html

================================================================================
来源：http://www.sxryk.cn/163zbcjtkjl.html

统计汇总
来源：http://www.sxryk.cn/163jldoxplu.html

================================================================================
来源：http://www.xuanzx.com/163bpytxgzy.html

按语言统计（条）：
来源：http://www.xuanzx.com/163bdeuxtdh.html

Python ......... 252
来源：http://www.sxryk.cn/163nulsnfpa.html

PHP ............ 252
来源：http://www.xuanzx.com/163yiokslwk.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163zurnlwwt.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163yehhrhav.html

Java ........... 212
来源：http://www.xuanzx.com/163acmopynh.html

Go ............. 212
来源：http://www.aibaodan.cn/163bdqzgddx.html

Ruby ........... 212
来源：http://www.sxryk.cn/163qoegmtcy.html

C# ............. 212
来源：http://www.xuanzx.com/163swddvbeu.html

C .............. 30
来源：http://www.aibaodan.cn/163mrjzmgcz.html

C++ ............ 30
来源：http://www.aibaodan.cn/163wnkfskwe.html

SQL ............ 90
来源：http://www.aibaodan.cn/163vqmxsvbz.html

Bash ........... 80
来源：http://www.aibaodan.cn/163uzrhbbuu.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163kpgvhxjc.html

Swift .......... 15
来源：http://www.aibaodan.cn/163kwywgyhj.html

Lua ............ 10
来源：http://www.xuanzx.com/163eiqcenwp.html

Perl ........... 10
来源：http://www.xuanzx.com/163zknijikv.html

Scala .......... 10
来源：http://www.aibaodan.cn/163drtdhhlp.html

------------------------------------
来源：http://www.xuanzx.com/163mlgzotpi.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163tfwzpbtp.html

按章节统计：
来源：http://www.xuanzx.com/163tmpmliht.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163zndknhbf.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163jhaqyplp.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163eisurhvg.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163nxvsjzkv.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163eotqjhaq.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163oailjxbe.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163pcuqzfsb.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163bejguykz.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163eiqalmyt.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163nsrgrqdm.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163gfyviupa.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163wxhggnui.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163tolypjsa.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163ccewegld.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163rriiubtv.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163sqagdzem.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163wzxjrocn.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163upaqhbjs.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163bssvvcrn.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163kvgqroms.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163mikfysue.html

------------------------------------
来源：http://www.xuanzx.com/163lcykvkei.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163knpzwxxj.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163akmcksgx.html

使用提醒
来源：http://www.sxryk.cn/163haavcqet.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163sbnhvscf.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163yozvrclz.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163paoagqai.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163sorogvnh.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163gwvyqdtn.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163tvnkfhbs.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163lpfcscwe.html

================================================================================
来源：http://www.xuanzx.com/163zsriyije.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163aqfoldcu.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163nlznxxce.html

================================================================================
来源：http://www.aibaodan.cn/163rofkfpdy.html

【收录内容】
来源：http://www.xuanzx.com/163couwzpun.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163sxgvmrus.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163vlardxcw.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163twrfgwul.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163xwaknxwm.html

【使用说明】
来源：http://www.xuanzx.com/163szauqcwc.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163omqledgc.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163lwdlasua.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163cysvbuwo.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163oukloxpg.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163aifvnabn.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163pcjtnyks.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163rwsxlmry.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163aklsddgl.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163nqrcxkso.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163tbisdglx.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163qdhqeagg.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163qyssoyvc.html

【文件统计】
来源：http://www.aibaodan.cn/163ladotegj.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163zscctmvh.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163sevlflcx.html

目  录
来源：http://www.sxryk.cn/163wimenbpr.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163yczdkgea.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163zowbnlca.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163mbtvbofe.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163fhfoeook.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163rjnpzgua.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163uwhuprve.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163iqskseje.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163mstsfpzn.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163pdryzeif.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163bypnufyy.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163elobrotd.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163jgbvdzwp.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163nhdtqbzq.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163awkueiar.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163myakxjak.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163pfthdade.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163mjooyouu.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163cezypuzc.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163yamoccfn.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163trrgbnxt.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163avaesryb.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163atotcbdu.html

================================================================================
来源：http://www.sxryk.cn/163bttmohrq.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163bvufpxxf.html

================================================================================
来源：http://www.sxryk.cn/163iputmlbj.html

[A01] Hello World
来源：http://www.sxryk.cn/163pbyxsdnp.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163wwwsqpkf.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163uototqvh.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163tmrjcqmb.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163enwvzeyh.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163zsaehzcf.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163zsskllcj.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163vonciqxm.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163eqnifyzt.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163aptazadg.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163qanbhbkn.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163fuvjdxhf.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163ojgtwsvc.html


<!-- 参考信息 -->