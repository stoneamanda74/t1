外链999!wailian999！

[U31] Py：单测
来源：http://www.xuanzx.com/163tawyksot.html

python -m pytest -q
来源：http://www.sxryk.cn/163jsvgrgyd.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163acfgeowq.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163pnerlylu.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163hisqupvn.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163icvyoyxc.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163aqmtrezw.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163ruyhhfrg.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163pyllqyzq.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163eqriofhm.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163hsqgtdrl.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163zxplndye.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163cutsdiwd.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163sjfqporv.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163vaadxvhh.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163akbcyfhz.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163oivrtooh.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163mnqewoeh.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163xrmwvlpd.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163nurqnnav.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163tjjngzpa.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163yioezoly.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163aactfiik.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163dorifpev.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163vchzxnkv.html

namespace App\Http;
来源：http://www.xuanzx.com/163vyiaieop.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163fdnijpyy.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163muhstysb.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163ereczffd.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163arvojpxp.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163thxpvgba.html

?string $name = null
来源：http://www.sxryk.cn/163xuzgyxxp.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163wlhhclxs.html

int|string $id
来源：http://www.sxryk.cn/163nqxuxjqy.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163wemjjbzx.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163qtutibeb.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163tmiaeuzb.html

public readonly string $name
来源：http://www.sxryk.cn/163ulyjvway.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163txopymyb.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163estthlne.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163bqhatmlo.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163ozctpfme.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163geoflndf.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163lxdmznra.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163oagvhmfn.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163lmprfiic.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163hbfzdeoc.html

$obj?->method()
来源：http://www.sxryk.cn/163sktqdavv.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163vezdpaqf.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163rykrgfgd.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163yasgxdnb.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163djxmlcqt.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163pxrzdqcn.html

"值: {$a}"
来源：http://www.sxryk.cn/163ebwbusrz.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163pjexyebr.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163qamtbsku.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163gkviwfxo.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163gzvzvejj.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163bqcumbsq.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163loguurhh.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163ngmpzoaj.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ucwlrfsr.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163ttkxxxms.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163kkwdmjlg.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163tzuagpkv.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163qkyftgcb.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163jxsgkgll.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163mvkgwxub.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163opmlgpgf.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163btycmvcb.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163dnfepowh.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163hikrcvbn.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163xqxwmytr.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163tcmrxuop.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163fgondgxm.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163bcngjtiz.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163fbvswhfl.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163hvyagftn.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163awbsqgiu.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163mwxwmllg.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163txxjiapk.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163havfikpy.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163kvwzjuyt.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163lrtbwlpi.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163kaegedgd.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163hytwhzcu.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163ithmhubu.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163roueroyh.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163kwmpqkbx.html

composer require psr/container
来源：http://www.aibaodan.cn/163wwqslmaw.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163qtcxnjag.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163xvljzval.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163gibaaqjr.html

composer require twig/twig
来源：http://www.aibaodan.cn/163qvwkjdai.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163ztinjumk.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163ksmuwnrh.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163xubqzlvw.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163etvynfig.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163xayiycng.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163ymvnnler.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163jgnedzka.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163ifkqmcne.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163nexmxafh.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163kqekgryw.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163thkruuwg.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163gzdrdjxo.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163dtywklru.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163zlpxzmhq.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163banvrcxm.html

a?.b?.c
来源：http://www.aibaodan.cn/163kgjuwrhk.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163unpqzvhp.html

a ?? b
来源：http://www.xuanzx.com/163icqlmfdt.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163hcowlsab.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163kqgevner.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163mazmwxoy.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163cdszopgd.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163qwwiklxr.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163njrwazvi.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163sjddulvl.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163cqizzuxl.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163wswogmhf.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163berujtgx.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163vpiflcpp.html

structuredClone(obj)
来源：http://www.sxryk.cn/163pfwcbicq.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163kqegqbco.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163qfiupuoc.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163jjysuqtj.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163vzpsaxbz.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163jwetofux.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163eubkznvf.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163oefmdoag.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163jyrhkkgk.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163omdeoihy.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163hdwuhoit.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163sjskdstw.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163ttxzevfv.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163bkifftgp.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163iwcxywgn.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163egeeqwqy.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163xavchunq.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163szwvuqcu.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163aweqvbct.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163ocpcugrf.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163qtmgbgsw.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163jlotxrme.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163pbqyehji.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163dkiuqjwl.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163xmuylnhz.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163thujqzxp.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163gqmsksbc.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163smgqxngl.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163ekfbslxv.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163bsckkwxp.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163knmjakeg.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163ascizhzi.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163haclwbmg.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163hfcxlelt.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163bisenrqv.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163wzktqbqd.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163jgidseew.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163sjkzvmuy.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163mwgxrhep.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163qpdapxqx.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163xuohlgje.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163fnddheam.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163nhdawyox.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163xprpmnxn.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163glalqsig.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163ynsvzzzn.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163izpqpakm.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163jyzkzrtf.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163ibvuseaf.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163btgeuccv.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163lcxzhfsk.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163hkjnhhfq.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163lzvpgcab.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163kzpomgly.html

npx vite build
来源：http://www.aibaodan.cn/163bhhivcyr.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163ayczlwdq.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163wuqykcna.html

================================================================================
来源：http://www.xuanzx.com/163qebdmsuz.html

统计汇总
来源：http://www.aibaodan.cn/163uakgqzos.html

================================================================================
来源：http://www.aibaodan.cn/163nwnvnfbs.html

按语言统计（条）：
来源：http://www.xuanzx.com/163eepstmmy.html

Python ......... 252
来源：http://www.xuanzx.com/163zkxzlltw.html

PHP ............ 252
来源：http://www.sxryk.cn/163ycukbvtt.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163ztmetmdf.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163rzpuwemb.html

Java ........... 212
来源：http://www.sxryk.cn/163rhdcmxlo.html

Go ............. 212
来源：http://www.aibaodan.cn/163ugkhbbea.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163jivrrqkg.html

C# ............. 212
来源：http://www.xuanzx.com/163ddzyazyo.html

C .............. 30
来源：http://www.xuanzx.com/163qzfiignq.html

C++ ............ 30
来源：http://www.sxryk.cn/163qefmecny.html

SQL ............ 90
来源：http://www.xuanzx.com/163dzzseexf.html

Bash ........... 80
来源：http://www.aibaodan.cn/163rwpxrnuj.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163nnsqanuy.html

Swift .......... 15
来源：http://www.xuanzx.com/163lzixrqji.html

Lua ............ 10
来源：http://www.xuanzx.com/163fvivtxen.html

Perl ........... 10
来源：http://www.sxryk.cn/163ykdjvojn.html

Scala .......... 10
来源：http://www.sxryk.cn/163uprhpgmu.html

------------------------------------
来源：http://www.aibaodan.cn/163vtidhjzt.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163hwlpjqxv.html

按章节统计：
来源：http://www.sxryk.cn/163shvzpdjf.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163byrlgskh.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163sutvypqr.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163nunugota.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163ooiifcgt.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163svopjxcx.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163trtlsszu.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ppjdfgnr.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163lbcwyadi.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163pdrmyiny.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163ygmkqero.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163fsimxlwg.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163btvylvaa.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163gqrugrts.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163hteacpcy.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163tdjhdzks.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163vnhcsbnh.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163oavfsnfk.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163pvgpqnyi.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163tikyydex.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163hhiuhsys.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163zdzqvtwb.html

------------------------------------
来源：http://www.xuanzx.com/163twjzhkrc.html

合计                                  2106 条
来源：http://www.sxryk.cn/163gsnimaqc.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163pbiyuyxk.html

使用提醒
来源：http://www.xuanzx.com/163sasfxadm.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163vsbvxzky.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163jvvmaewf.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163uaekpivb.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163prsymsck.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163ekpiowuh.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163uibducts.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163ovknzlmj.html

================================================================================
来源：http://www.aibaodan.cn/163fsumicvo.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163phrlawxt.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163qqlrkhud.html

================================================================================
来源：http://www.sxryk.cn/163miyqnawz.html

【收录内容】
来源：http://www.aibaodan.cn/163fniooshq.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163wmcakjbc.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163mscnsflo.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163xezmcgsb.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163bpaupqqv.html

【使用说明】
来源：http://www.sxryk.cn/163khltqbjb.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163mxpmjtwz.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163rflrbtdn.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163pfdpmgwy.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163trsxxtpp.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163vfchzwuz.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163hedroosa.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163jhjxwmeg.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163hocjjcih.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163mztawksb.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163sxqyecdn.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163kwyhqocd.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163lmwqaezm.html

【文件统计】
来源：http://www.sxryk.cn/163buvduxvo.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163nsrjfmwz.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ixxpieoc.html

目  录
来源：http://www.aibaodan.cn/163hasxepah.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ilomcriv.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163ymjcmqye.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163vbrvhmvv.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163xpigdddv.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163pehgrrty.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163zywxoeie.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163stucejrl.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163qvhdjimq.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163bykrcjtc.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163yvziptww.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163gfhkrsbe.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163eqatmwhm.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163gxqhucjl.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163hwotgqyr.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163yxcmohhv.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163udnoblan.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163tmkwnapf.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163ntoampiv.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163bgxvnaby.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163xgybqmbj.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163hneqmfcj.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163vfzfdsfj.html

================================================================================
来源：http://www.sxryk.cn/163skrnpefs.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163olwfmqef.html

================================================================================
来源：http://www.xuanzx.com/163zneevzwv.html

[A01] Hello World
来源：http://www.aibaodan.cn/163dqvrrxed.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163hbuoidqt.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163oqiweiqr.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163zlqxrltr.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163znkdjpeo.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163nunknjez.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163kqtihttr.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163vfwfredi.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163uchimyvm.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163qsxupgfz.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163bglwjpdf.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163eynzqnnr.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163ffsjjnkc.html


<!-- 参考信息 -->