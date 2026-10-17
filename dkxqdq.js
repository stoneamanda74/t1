外链999!wailian999！

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163nynukyqw.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163gcnfendm.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163uytvhdiy.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163ofqybjil.html

[U31] Py：单测
来源：http://www.sxryk.cn/163uzbvuidy.html

python -m pytest -q
来源：http://www.xuanzx.com/163nelijwbw.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163lbvklolw.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163iwfeadfd.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163gvzgznad.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163rhowesjz.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163gsboobkv.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163vvyvajqk.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163ubrmojuo.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163qnytnqbj.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163rflftfrs.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163jtyxpued.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163zeaqbhhe.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163yaefsjph.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163smagmebb.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163xacdizmt.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163wowwzyrg.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163bwxnflvm.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163fbfbgtca.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163nktpsukk.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163qowwwdtd.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163zzkppzka.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163qfaryvuk.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163kvtddpgm.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163ggzjasng.html

namespace App\Http;
来源：http://www.xuanzx.com/163rltwnoed.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163kmlwujqd.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163tmwpkvrm.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163fgmohpqj.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163nethcwqn.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163hpzuskna.html

?string $name = null
来源：http://www.sxryk.cn/163ejvljyud.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163lauuszjj.html

int|string $id
来源：http://www.sxryk.cn/163sqqxtggp.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163xvfjytxs.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163irojueyt.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163vezphhev.html

public readonly string $name
来源：http://www.aibaodan.cn/163vgdrgfgr.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163lsqsztof.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163fnsjuvxs.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163bvozkajj.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163hbwtzbwi.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163mkcezkyi.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163ozvmwmmh.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163iqokrfbs.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163ihqeboct.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163bfpkhlbw.html

$obj?->method()
来源：http://www.xuanzx.com/163fmqpivfp.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163sdxtrqjf.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163smytngnl.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163ycfayggh.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163cgfxofzu.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163lahtmamn.html

"值: {$a}"
来源：http://www.xuanzx.com/163vnajhjst.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163tcxyrtqn.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163ddatzlmg.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163dqipkyav.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163xpchuipc.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163vuwoflbf.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163dmjybjtl.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163buwdwtop.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163fjlftluq.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163wsypqklc.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163chgvscgh.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163hzzessqc.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163bdxyymnj.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163cenonjof.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163qucjcgge.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163lwzzeist.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163rxmxdjxq.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163ypnftilp.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163xqbsiyqh.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163uzkrjege.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163vywrfusl.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163bvupxrbu.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163gcrqbrvm.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163nxmqqxtu.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163lbzmjmui.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163qfsrcgsy.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163xomitscn.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163cylsqmxj.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163lcawtfid.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163dkenjsqa.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163qmenlmkx.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163jptnfugj.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163hnhszdoe.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163fghqgewl.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163gzkqifsr.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163nkcegzyt.html

composer require psr/container
来源：http://www.aibaodan.cn/163csjrehum.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163ultcgwfq.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163vxelxzff.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163kubtbdfs.html

composer require twig/twig
来源：http://www.xuanzx.com/163ssoofmzz.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163yovoqzpq.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163xdpaehzs.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163uextzryy.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163qxknmbkf.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163oyypmcgb.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163mdnfvfnt.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163htqbcpmq.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163ccnizlfx.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163ftpztnrm.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163mueqkxwi.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163epxynbqd.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163yiluivsm.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163ykpanpda.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163innhlnpd.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163tnyyjuyj.html

a?.b?.c
来源：http://www.sxryk.cn/163meuzgmym.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163tfdshxij.html

a ?? b
来源：http://www.xuanzx.com/163cbxarytw.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163hdvlnwvf.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163fhadlfiw.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163edewuirl.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163olagiqlv.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163cmzegaoo.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163xecerwfc.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163cbhihegb.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163rigebaef.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163iyhpocip.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163bbjubalk.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163gwyibblt.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163llivrttn.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163rndgfjdj.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163crulgkkh.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163aksiadtp.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163thjvzzbx.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163ztxkqzzm.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163tbjaiawm.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163fuphtgwc.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163fgwldctv.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163gfbqtabc.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163rbclecsi.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163yvzhszoy.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163rcbwhves.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163mbiuwxtz.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163hsovppnz.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163oqwwlmxb.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163ylevdwxe.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163macpbnbw.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163mrbgfggl.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163rdkbdjqf.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163jryaabvb.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163lnylsqjx.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163njtagnmg.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163zdhhtftd.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163meuppxqk.html

[U105] JS：节流
来源：http://www.sxryk.cn/163isltqghp.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163vxdvklvy.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163naxrcenx.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163qhagylkw.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163klqjrwvn.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163fjsbbyyz.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163irebazog.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163pbdxwfga.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163ahozhacc.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163teeaiqpj.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163ymmfbtqj.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163ddiacajh.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163digygcub.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163qqxncpou.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163btpifdgw.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163qghaowoh.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163wuchlmvj.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163icehuqli.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163cpjgtzpc.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163nwdrzaew.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163xwyqhlwt.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163aqynadwe.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163tmpuxaas.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163ecrojhhg.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163jotdbrgy.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163zuwaaaqy.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163igwnjbdq.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163raytnvee.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163cqosgjgd.html

npx vite build
来源：http://www.sxryk.cn/163rakbjkwt.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163htykykcb.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163egjbkznr.html

================================================================================
来源：http://www.sxryk.cn/163nigcgegg.html

统计汇总
来源：http://www.aibaodan.cn/163yjflbzhu.html

================================================================================
来源：http://www.aibaodan.cn/163szhixdfs.html

按语言统计（条）：
来源：http://www.xuanzx.com/163zvveqfrf.html

Python ......... 252
来源：http://www.aibaodan.cn/163niaslfhx.html

PHP ............ 252
来源：http://www.sxryk.cn/163ogzkzttb.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163luzezuem.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163aivqzpkx.html

Java ........... 212
来源：http://www.xuanzx.com/163wuzjojnw.html

Go ............. 212
来源：http://www.xuanzx.com/163mmxguadv.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163mrydkihf.html

C# ............. 212
来源：http://www.xuanzx.com/163ouhnjcgg.html

C .............. 30
来源：http://www.aibaodan.cn/163nyqahzzd.html

C++ ............ 30
来源：http://www.sxryk.cn/163pandqezr.html

SQL ............ 90
来源：http://www.xuanzx.com/163rbsytrpo.html

Bash ........... 80
来源：http://www.xuanzx.com/163xlgaexzv.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163rfwpzyel.html

Swift .......... 15
来源：http://www.xuanzx.com/163scskcrbt.html

Lua ............ 10
来源：http://www.xuanzx.com/163umiiysfw.html

Perl ........... 10
来源：http://www.xuanzx.com/163oidrzmqa.html

Scala .......... 10
来源：http://www.xuanzx.com/163vvamjgne.html

------------------------------------
来源：http://www.aibaodan.cn/163wxrjpunk.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163ilwacfrs.html

按章节统计：
来源：http://www.xuanzx.com/163hfrsmrgu.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163ogvlicgp.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163cvegmpeu.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163uodmhnsl.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163lauvcwun.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163gepgnlyj.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163kyoghzqf.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163tmtnastr.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163tltpgdbc.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163lmzcwdnu.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163iixhsbmt.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163buwugaxl.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163dabdnvmj.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163bitxshnr.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163yzvedpqu.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163bbwfynmf.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163rkpnhieh.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163lhaaeser.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163fpodktrq.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163dggngesv.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163lbwbfzck.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163bnicotui.html

------------------------------------
来源：http://www.sxryk.cn/163ebcfoseb.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163bapqagca.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163gvekmuyl.html

使用提醒
来源：http://www.aibaodan.cn/163abhsfayf.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163piflpkep.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163epqorocg.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163xvpsmrjz.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163tkdcmxqs.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163qqimmpki.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163ngkjklel.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163kntvtvza.html

================================================================================
来源：http://www.sxryk.cn/163hstyhtqo.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163ubegllpf.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163npvpwguh.html

================================================================================
来源：http://www.xuanzx.com/163fevtrkwd.html

【收录内容】
来源：http://www.xuanzx.com/163dtiqsavh.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163sgmbwdod.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163hlsdviby.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163dmulqybb.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163pkzrlbdx.html

【使用说明】
来源：http://www.sxryk.cn/163jxxqaxfk.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163xlxswgxu.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163lhdnibxm.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163qgsogttx.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163fgljqvsu.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163byrdizto.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163xwaeciro.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163evpqgnkd.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163iqquriyr.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163hphmtxam.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163xqmddjqg.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163lyyllzbf.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163puvvikmg.html

【文件统计】
来源：http://www.aibaodan.cn/163fzyhases.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163hpaiotac.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163djbyfdii.html

目  录
来源：http://www.sxryk.cn/163aqvahjze.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163dhzmvaeh.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163iduzichm.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163vitgudgt.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163hukaleeb.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163tnddrhja.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163nvbgobhc.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163ukvzeuzv.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163wqhkygax.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163pgfxsnri.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163jerrfiak.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163lykzqpmu.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163qbskfncn.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ferajcop.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163wfmlahlb.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163nyboqjyp.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163svyuzuwz.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ruokfgfb.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163omekgixi.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163scselcnm.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163yppdstek.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163jjklaepm.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163amnvqkrz.html

================================================================================
来源：http://www.aibaodan.cn/163ygmnxlwm.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163zdlvxqdd.html

================================================================================
来源：http://www.xuanzx.com/163iqltbenn.html

[A01] Hello World
来源：http://www.xuanzx.com/163vlfndmqw.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163vsuklstu.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163wbjzqajq.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163shqvknvm.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163hhzbkcui.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163oqsibrjb.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163czxpvpxd.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163qpauekqa.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163bjbvrift.html


<!-- 参考信息 -->