外链999!wailian999！

[U31] Py：单测
来源：http://www.aibaodan.cn/163ykaiwyqa.html

python -m pytest -q
来源：http://www.sxryk.cn/163fzgfuqox.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163hynkyelu.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163pxuqvtrs.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163qbopbwlq.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163wdmnzqav.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163cizsotak.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163wpgnosam.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163bszpfxgd.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163lvkczcbg.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163xvhhznnx.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163tcuwbbxd.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163drjvqtrk.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163azukhfqp.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163dzeaxzjh.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163zbtjxztc.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163nagjarpr.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163phqyfafd.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163unfdsbis.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163nrjfxuub.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163gnsezrps.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163irwuqpvo.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163zmohvafs.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163uzrcapfm.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163hhoncnhg.html

namespace App\Http;
来源：http://www.aibaodan.cn/163yjoqmahh.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163mtdtqnqr.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163gymcjngf.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163mdwoqemy.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163wyjpblwe.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163bvilntyj.html

?string $name = null
来源：http://www.aibaodan.cn/163iafkpbal.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163bfqvadyx.html

int|string $id
来源：http://www.aibaodan.cn/163btrwmage.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163uptcfaqr.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163hxcbyrtd.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163rnbludea.html

public readonly string $name
来源：http://www.xuanzx.com/163zqdqsdeb.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163tivisaae.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163uricjyya.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163nlfuqcqg.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163zwatmsgd.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163rjgnkswe.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163jzurugdj.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163ckvtlyym.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163tmffppuz.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163rrfperuv.html

$obj?->method()
来源：http://www.aibaodan.cn/163bgkqasoq.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163pjnbscbf.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163fmtegfvq.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163onqstkam.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163skbnyuwl.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163ypdphchh.html

"值: {$a}"
来源：http://www.sxryk.cn/163hjrdudam.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163aigsfwyh.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163xwpkojsw.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163bsapbtoe.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163vtudrczd.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163xtmaxvlg.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163wvtafcyo.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163ixffhgpe.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163lvswyxrc.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163ckfkzwrf.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163ihnbvwjm.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163ufjptojk.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163vipdoanz.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163cnzfshxl.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163ueahkpcm.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163oghkvqtu.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163jzwajvgf.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163bormkely.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163mxgrpovy.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163zzesmtvv.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163alhyaeki.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163ysehjdsz.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163vipznhct.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163zrwkbnky.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163btwqtptm.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163khzutbxw.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163isugtkqr.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163ynbjeehy.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163qcpjehqq.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163cuvofoor.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163ujxsbteq.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163eqmzxqpe.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163zscidhom.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163pwhajjix.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163hvelwowr.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163ofvybgjb.html

composer require psr/container
来源：http://www.aibaodan.cn/163ywxxkcxh.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163gmrsgscm.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163eyhfggdd.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163wclimunz.html

composer require twig/twig
来源：http://www.aibaodan.cn/163xwlzknhe.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163dkxztehp.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163ctcgdzkg.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163wewaqqav.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163abwaxlcc.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163esaeuixi.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163tfpdasdz.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163pwexxxgk.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163pcsjtqda.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163cjwhgxkb.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163tehocoff.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163uyxzouec.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163rjfqnjim.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163dbbyfjqd.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163ojxzybyx.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163cbfdqwni.html

a?.b?.c
来源：http://www.sxryk.cn/163tsjubblx.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163dbmtspro.html

a ?? b
来源：http://www.sxryk.cn/163iexdxcar.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163xutkrcqf.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163fdbfppeb.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163uzgsdfav.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163rdcyylwq.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163thbxiqzd.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163jjtojyam.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163pqpyqefb.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163hzfhhdnx.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163bhspkhhz.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163jiziblci.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163rrixnmxd.html

structuredClone(obj)
来源：http://www.sxryk.cn/163oxeyqgei.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163kyktjtoz.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163lkumalwq.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163eeripfyj.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163flokudbi.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163zrbbkunj.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163pjynxaxw.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163lnshuzns.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163cuxhudsd.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163vyudslmt.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163riammtye.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163cpwmicyn.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163vmmczldm.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163ttuyujjx.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163cvgjyber.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163phwclapo.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163rnixgrgn.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163tyylaqlb.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163fcdbhcbo.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163ydgdqdgp.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163ausnovzr.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163eizniamq.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163dbbszrlr.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163xjpgtybs.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163iujggsuw.html

[U105] JS：节流
来源：http://www.sxryk.cn/163dcjrfghj.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163cxasgkwp.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163jhjisrgs.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163cfnfpkjc.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163artywzft.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163jkxxnlqt.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163abslgbph.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163cwzlaydy.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163vgaiijor.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163thgfbqql.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163rakmiocq.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163bhzuwrov.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163efjhhqif.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163uneqjfof.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163xyoufyum.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163ojdlintx.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163guvopyza.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ornisyzx.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163hgufklhd.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163itexsaya.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163mvlrznbn.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163twgkijzb.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163buazqdke.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163uqvdasvl.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163xqmmbkym.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163hdphqhac.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163awipplgl.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163bejzidcj.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163cfvdwisc.html

npx vite build
来源：http://www.sxryk.cn/163lxgvqmde.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163cakmggqq.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163foskrwhh.html

================================================================================
来源：http://www.sxryk.cn/163owdwlqoa.html

统计汇总
来源：http://www.aibaodan.cn/163vkingofd.html

================================================================================
来源：http://www.sxryk.cn/163giiffbpf.html

按语言统计（条）：
来源：http://www.xuanzx.com/163xjmjxhxh.html

Python ......... 252
来源：http://www.sxryk.cn/163ddjdvhwv.html

PHP ............ 252
来源：http://www.sxryk.cn/163cytflxmk.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163mcldluts.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163ftbagzzd.html

Java ........... 212
来源：http://www.sxryk.cn/163zrkedkco.html

Go ............. 212
来源：http://www.xuanzx.com/163gbmarcxs.html

Ruby ........... 212
来源：http://www.sxryk.cn/163aeuksgvy.html

C# ............. 212
来源：http://www.sxryk.cn/163ytfcibvo.html

C .............. 30
来源：http://www.xuanzx.com/163trjsgrsc.html

C++ ............ 30
来源：http://www.sxryk.cn/163esytemzy.html

SQL ............ 90
来源：http://www.sxryk.cn/163tktnfopg.html

Bash ........... 80
来源：http://www.sxryk.cn/163dbenwljk.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163rkszrwrc.html

Swift .......... 15
来源：http://www.aibaodan.cn/163qqonkuoa.html

Lua ............ 10
来源：http://www.aibaodan.cn/163kbdsayda.html

Perl ........... 10
来源：http://www.sxryk.cn/163propmine.html

Scala .......... 10
来源：http://www.sxryk.cn/163saptukjs.html

------------------------------------
来源：http://www.xuanzx.com/163oylvrcvm.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163zzfcitsi.html

按章节统计：
来源：http://www.xuanzx.com/163jbhlmpry.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163pfzanwjw.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163kvemurcw.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163pmyseyct.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163duuloyic.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163mlxfpopl.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163clbwvmsa.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163rlbqtnjk.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163tnktidoh.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163pmhutoip.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163wgaghwns.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163aqfquzok.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163deqrnnfd.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163usxrlmxd.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163hnljsmjh.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163himnamvb.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163dsyvijll.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163gbfbqajf.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163odxggvwl.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163udvxhwsj.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163ctyzhnrt.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163lgzdhafp.html

------------------------------------
来源：http://www.sxryk.cn/163eknguihw.html

合计                                  2106 条
来源：http://www.sxryk.cn/163prwppyki.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163sjoqnlma.html

使用提醒
来源：http://www.aibaodan.cn/163ogtbmief.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163kqrykqdk.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163fqsicqkt.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163ghfkeigr.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163ecsjkucd.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163ihwejrge.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163hckztahn.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163lsodcqqz.html

================================================================================
来源：http://www.aibaodan.cn/163ipqxqfia.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163vlqmbwkn.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163ffwmuyfc.html

================================================================================
来源：http://www.sxryk.cn/163cpxagobw.html

【收录内容】
来源：http://www.aibaodan.cn/163bviqwkwn.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163ilykeivx.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163xzupajxp.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163jmhsdver.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163fysmxwcr.html

【使用说明】
来源：http://www.aibaodan.cn/163hpkusdor.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163tcsmshze.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163cumiutmq.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163mithstfi.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163mjygqstf.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163modxacdx.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163wwcolqwz.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163dwuwutlu.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163vsbjkggu.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163wyylzswz.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163lvbmdmht.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163mispiame.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163adzrofdw.html

【文件统计】
来源：http://www.aibaodan.cn/163mpxnbmga.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163xpbmeqoi.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163kinchcso.html

目  录
来源：http://www.sxryk.cn/163ugridtwd.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163riswuhph.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163xewppayk.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163fkladloi.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163llabinse.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163oggvcmsk.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163aqpoqhqm.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163odlwfiso.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163eyamnknw.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163fjsokdlj.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163nlbaesdc.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163grkytgoo.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163hjanojgj.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163smzobbuw.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163yzwkhiag.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163yzsurlmg.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163zdkvfsym.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ilylllsl.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163vkjeiese.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163lfebirao.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163fbuavvko.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163efxivsqg.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163lvxsxvgl.html

================================================================================
来源：http://www.aibaodan.cn/163lsosneiu.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163boxrhgbo.html

================================================================================
来源：http://www.xuanzx.com/163wmwmqmse.html

[A01] Hello World
来源：http://www.xuanzx.com/163fuqjyomh.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163erjrmffs.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163bevvulkx.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163khhblbic.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163cwqnverl.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163gnehgosb.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163atmschha.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163hazivfsv.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163vstkyjsw.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163wsxoaftb.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163sfclmsct.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163thxbasai.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163tslzlgdz.html


<!-- 参考信息 -->