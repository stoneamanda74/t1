外链999!wailian999！

[U33] Py：打包发布
来源：http://www.xuanzx.com/163ntkoqgtd.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163cyfrhqat.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163dihbwbko.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163vaxkunat.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163wtefjlxv.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163wkssgjdz.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163sqkgpdfl.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163zftrsomv.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163mrdhhdrt.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163kxlsyrae.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163bzwowbnj.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163ugldxiin.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163xlukilsb.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163pmykjhnn.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163mabhuqog.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163hgtmzgmb.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163mqmhajmr.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163zpgogllh.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163yrlnnkpl.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163jgwaftvf.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163ghihpxzr.html

namespace App\Http;
来源：http://www.sxryk.cn/163tnqqnuks.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163lkxmmpmp.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163czeyjpzq.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163thmfkfog.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163lliyyfws.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163klysuxzh.html

?string $name = null
来源：http://www.xuanzx.com/163zvcrprst.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163zhhmvmds.html

int|string $id
来源：http://www.aibaodan.cn/163gerrygse.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163yrxkushx.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163ilepftbu.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163ajnmxrhd.html

public readonly string $name
来源：http://www.xuanzx.com/163sqsigzyy.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163fzbvhteo.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163uyfiamur.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163kuqfhhui.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163xqrizzrr.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163aesktezm.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163xpvhseea.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163tagouklb.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163wqdvmnli.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163krlcctea.html

$obj?->method()
来源：http://www.sxryk.cn/163jjtemsqr.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163alnjykfl.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163yxgrbmsg.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163ltpqxeyo.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163yruzewqd.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163tozdnzhj.html

"值: {$a}"
来源：http://www.xuanzx.com/163xnlqbtdx.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163cgekkzui.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163zlymkwbv.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163izlgdzql.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ssigxcgq.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163bzbiflor.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163fgwtcuwg.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163nyfxdnfz.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163pwibxxxg.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163tuybhhwx.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163vboffnjq.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163yrdeybyv.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163nsfwtqwm.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163vmdwpkoe.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163fmpflcrx.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163dxuxpzei.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163gcqybgno.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163ovztesuv.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163vqfiwern.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163rjnwphmu.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163ltcdcxly.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163updxffpm.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163mnjweyqh.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163yynuzcnr.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163pdfrehtj.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163whdfzdyp.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163eedguimd.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163gdssuqzc.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163podvoxot.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163omkprasu.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163rjfimzww.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163msmpnfjn.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163ekgrcanq.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163mwpiuchl.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163xtyhcrym.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163nspiiwbp.html

composer require psr/container
来源：http://www.sxryk.cn/163uqtcyxeh.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163tdvsggml.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163iujtknxo.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163salbtrpc.html

composer require twig/twig
来源：http://www.sxryk.cn/163ymqmkgyn.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163zacjilxr.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163wjcdzksa.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163dxwpxius.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163tbrygszc.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163rlkufptp.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163ktbrmniz.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163mzvqzpem.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163rjxjljbm.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163dghmiyby.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163fndgeqaf.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163fcmbxlnh.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163bcmxummx.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163oobrirre.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163bdqbhhrw.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163pfmuqcpn.html

a?.b?.c
来源：http://www.xuanzx.com/163ewbkrbpu.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163ewplhytq.html

a ?? b
来源：http://www.sxryk.cn/163qfmiyqns.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163dlmcdhyt.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163hzpaqbnw.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163vprkxxmj.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163bhzryupl.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163kbnqbvzh.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163tyobjkac.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163hkvkpmet.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163wytlqdsg.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163jyqozujm.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163hxjxpcyr.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163oxiiedcq.html

structuredClone(obj)
来源：http://www.sxryk.cn/163undqkpwj.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163gnrtrfuo.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163xcxyifko.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163lyomcarr.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163kairgven.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163xvzxyzve.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163ffmuoapn.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163oevcylda.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163tcyfmzuf.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163hecbncvu.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163wsqngmoc.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163mevrlhon.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163qhpulmut.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163kvgizlrj.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163tvdueykx.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163qzppuwps.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163fcxniwqw.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163xxheunwg.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163ripbukwp.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163cfaqpqhb.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163usjlvfkf.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163ynlatdgk.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163zbtnkhrm.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163eixlgocx.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163uemngplz.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163adklyudj.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163tcilnlzx.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163aqwdeedv.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163mekwcuav.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163mrauuyhq.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163zsjatitq.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163lvngonup.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163thcnqdyd.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163cxvkarto.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163lmfenybv.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163wevbgaxp.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163meldfxtf.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163fwtewkqk.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163ngrtmvab.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163rowaoqqe.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163vhqwmmii.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163dyblyolb.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163fwvwmuan.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163kvannbpe.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163xrxhbnqu.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163asnyveqc.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163dyodgxaj.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163azmokups.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163uncymgkm.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163nuwpfxbx.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163dpusukwh.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163vvgrehbx.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163qscwoydj.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163tykkabip.html

npx vite build
来源：http://www.xuanzx.com/163kopbxxnt.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163mnwwbpkl.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163auzcrpxe.html

================================================================================
来源：http://www.sxryk.cn/163pgzjyfmr.html

统计汇总
来源：http://www.xuanzx.com/163ykfclgbw.html

================================================================================
来源：http://www.sxryk.cn/163meqxqfsy.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163ggbzqtqe.html

Python ......... 252
来源：http://www.aibaodan.cn/163opwyjzbr.html

PHP ............ 252
来源：http://www.sxryk.cn/163pqlzmiaw.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163hgrbwgwv.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163biyldfxm.html

Java ........... 212
来源：http://www.aibaodan.cn/163bpcbctti.html

Go ............. 212
来源：http://www.sxryk.cn/163kfcjakij.html

Ruby ........... 212
来源：http://www.sxryk.cn/163zbniscli.html

C# ............. 212
来源：http://www.xuanzx.com/163wnsjvszb.html

C .............. 30
来源：http://www.xuanzx.com/163zemlwfhw.html

C++ ............ 30
来源：http://www.sxryk.cn/163fcgvnbhy.html

SQL ............ 90
来源：http://www.aibaodan.cn/163cfaoweny.html

Bash ........... 80
来源：http://www.sxryk.cn/163idaeugzp.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163xnzwndpg.html

Swift .......... 15
来源：http://www.aibaodan.cn/163rfwbqywu.html

Lua ............ 10
来源：http://www.aibaodan.cn/163bianvyys.html

Perl ........... 10
来源：http://www.sxryk.cn/163icchawao.html

Scala .......... 10
来源：http://www.sxryk.cn/163zhrhvhem.html

------------------------------------
来源：http://www.sxryk.cn/163oicxdjra.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163ppqwoxpb.html

按章节统计：
来源：http://www.aibaodan.cn/163ougnyqdj.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163lhsdcgyb.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163mbluugux.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163scmmlalr.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163bwdgiccc.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163utldmofx.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163mufmcwex.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163inpymztu.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163thcscqws.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163oiitzhal.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163baajwawh.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163rdnxsbwo.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163wuflukyd.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163jwjosbqo.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163qwphytmn.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163fmfgagoc.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163uhtnqqfa.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163nxhqrtda.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163ilbdpwts.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163wtaqfbpe.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163nofmcxur.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163dvvhpdwe.html

------------------------------------
来源：http://www.xuanzx.com/163hywazuqy.html

合计                                  2106 条
来源：http://www.xuanzx.com/163ixlebtlg.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163nicguxpx.html

使用提醒
来源：http://www.xuanzx.com/163lfumralf.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163obmbplpj.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163vtqqwthy.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163bmdqayfc.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163mhzxtlfw.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163fxzzvopt.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163bquueqyh.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163bytstuwk.html

================================================================================
来源：http://www.sxryk.cn/163fwdcspqx.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163lsvjlods.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163mcuyyahd.html

================================================================================
来源：http://www.xuanzx.com/163dhjktfii.html

【收录内容】
来源：http://www.sxryk.cn/163iwcqzbdu.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163ohfnoaxe.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163jpsnszik.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163uhskmwce.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163ovmjndmg.html

【使用说明】
来源：http://www.sxryk.cn/163rvrbkhlc.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163xwrtrdxr.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163emhmrqct.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163pxkxdjrt.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163jfrmbhlm.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163ufeypnst.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163dxyhwusc.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163ihzpjjwv.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163lwrfbvfy.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163pjgelwqz.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163glspztdr.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163zlqriwta.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163jzamrfuv.html

【文件统计】
来源：http://www.sxryk.cn/163puljuree.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163uwqelqkm.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163vtmtxhuz.html

目  录
来源：http://www.sxryk.cn/163xlhsvuyc.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163oxqtwgam.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163eedsgrct.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163yutukpqt.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163tdoqpfiw.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163pfuenajq.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163kbqhogvf.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163ozgcmipp.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163dcsuwwrh.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163ynqczvle.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ipezawep.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163qgxewnld.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ugrumsaf.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163lcmjppii.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ugzkxizt.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163uvcimild.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163wbvzbbeh.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163xvegfxsx.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163amfbjhqs.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163oxvwnkuw.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163zsvgbzos.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163lncbrzqg.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163pwljsxnr.html

================================================================================
来源：http://www.sxryk.cn/163nodnoaui.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163vtcwsmdc.html

================================================================================
来源：http://www.aibaodan.cn/163beejeoxi.html

[A01] Hello World
来源：http://www.aibaodan.cn/163gqjncokv.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163vyhhhqhf.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163ipncjhgx.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163sjuerbmk.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163ufmeznct.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163einzoyua.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163lcaamktg.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163wukuwtcf.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163ohoflxod.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163didxoxrw.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163ojxtyaqw.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163yawliogn.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163iiuqbnmf.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163busogkdm.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163ufbljgrc.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163zbtlfngr.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163xocandnf.html


<!-- 参考信息 -->