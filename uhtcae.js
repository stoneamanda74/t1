外链999!wailian999！

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163nvawtbgq.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163aehxtfzv.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163ihvsmcuw.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163csveifmz.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163vzvncgzf.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163ouqhuvge.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163sbqdbosp.html

list(zip(*m))
来源：http://www.xuanzx.com/163sccukszv.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163nqlvsqzp.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163hwchyyll.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163lowfuhmi.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163qdizpuxn.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163yvzjiwob.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163blcmgxyl.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163dmnjcnhh.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163gghfklut.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163ggfzonhu.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163qaybmlil.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163lvkfhebe.html

UserId = int
来源：http://www.aibaodan.cn/163pdcyoxeh.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163agvpgzcd.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163pivckpjd.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163bbsmoail.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163ijbaudow.html

[U31] Py：单测
来源：http://www.xuanzx.com/163mbublrmf.html

python -m pytest -q
来源：http://www.xuanzx.com/163xccsqtlg.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163foqokxrq.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163okimjbfi.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163aohjwqgc.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163pfmivhnm.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163ksinfwwo.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163vgnhricy.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163lnzuayoh.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163qqebkvth.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163qqrrinwv.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163fxbchlle.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163hlcrysfn.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163cuwoglxl.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163gccfvepw.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163rrqurfxn.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163rmmluqlj.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163mpuygoss.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163ijykuowv.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163emecyuwm.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163autxfwgy.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163aztnggzl.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163oxzvsjws.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163kgttfrii.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163nolempxo.html

namespace App\Http;
来源：http://www.aibaodan.cn/163fzmqfvqs.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163bokthlaz.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163vghdynoa.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163jvgqbpof.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163fbtvmhvp.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163tlbedasp.html

?string $name = null
来源：http://www.aibaodan.cn/163efwvpxnz.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163zjebzhqt.html

int|string $id
来源：http://www.xuanzx.com/163ntnxjcxz.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163ojvilxzl.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163xcaulnzl.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163bskgztmw.html

public readonly string $name
来源：http://www.xuanzx.com/163nhjpsesr.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163cxqitaus.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163gcqdwnqa.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163ypjjgkkd.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163sdpankth.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163kvmewcdw.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163vwlbzswh.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163nsfttcfu.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163vgilfpxr.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163lkkwidti.html

$obj?->method()
来源：http://www.xuanzx.com/163udeubfjj.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163menomkrq.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163svspatkj.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163aucypvch.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163lxplzndo.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163binbfvon.html

"值: {$a}"
来源：http://www.aibaodan.cn/163ihejlydr.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163hftwpcgd.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163nlakdelf.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163szokegya.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ynuapnul.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163frfgylut.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163swpastza.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163ugiiafny.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163olrpqvki.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163jnheifhp.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163fabciwlr.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163gjnssqrb.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163aefojuik.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163pvckfdam.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163txsiifbm.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163unldlpsl.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163yrboghac.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163veqwhiyi.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163xhktnxsl.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163pofwtfgs.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163bnljpcxl.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163pjbzhwdy.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163zlukdutm.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163nhokeshc.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163uolealsn.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163gojzmlbe.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163syggftqu.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163ebgvwaix.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163ztmugtti.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163ufrogncm.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163bvqlmall.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163nszqouno.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163miqcbmmm.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163foqctwuu.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163ogawwdco.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163lgbzzmkm.html

composer require psr/container
来源：http://www.xuanzx.com/163cardohjt.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163qpvzrnnk.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163wgnuwago.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163wmvxffcz.html

composer require twig/twig
来源：http://www.xuanzx.com/163rvpigdpa.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163amlavxvb.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163gllbocgy.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163dshsvmau.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163uyzubnkj.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163derrvhgc.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163nqrvlihw.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163luwvpbok.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163mviqcwxp.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163uxbpqcgh.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163nxbnquvu.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163kgjsscgw.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163wbgoxwjp.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163tcgtpsuo.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163okvgwmoc.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163rybjoiaw.html

a?.b?.c
来源：http://www.sxryk.cn/163ghtosxwr.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163gghrglmm.html

a ?? b
来源：http://www.aibaodan.cn/163zqexsyob.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163fbpluhca.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163ggoeajfo.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163uilbmvqv.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163sehobrnt.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163lqscelzf.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163nrdwwkhb.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163dpjixivl.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163xoqssvfh.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163bqudfeds.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163jynzwalg.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163wcjizpzk.html

structuredClone(obj)
来源：http://www.sxryk.cn/163boclbair.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163uofcwybm.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163psoibipq.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163hxwekapy.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163xvkcmmkv.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163wklxldlx.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163awbtdvob.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163bwhnekxo.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163qpdsddbn.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163wjysaiiu.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163woonkvuf.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163givmfpse.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163uhwnjrgi.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163urcgevoe.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163fashkdwf.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163unqofrip.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163usotmqjl.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163abxvfydk.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163krfgfknk.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163crpltscf.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163emhnrwqi.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163hmlboxum.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163ewyujisi.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163bjdolyqj.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163gpstteoh.html

[U105] JS：节流
来源：http://www.xuanzx.com/163bzmwxajl.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163wjzyudxx.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163mqehoaur.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163itxvwucc.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163aknvfuhu.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163ulrephbk.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163flyetsln.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163pngrcafs.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163pmsraahf.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ktanxvqf.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163escvpaup.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163waacqjwz.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163fktqawbz.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163spclcdqc.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163ihrejbub.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163gnsqznwc.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163qjypdjox.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163nlywndel.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163lpngqedz.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ymldulri.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163kvskcmnj.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163jmmvmzej.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163bmrcktfm.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163dunyatsv.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163jpfzkxpa.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163knlcmiph.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163enhnoddb.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163waixiqif.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163lzhckhut.html

npx vite build
来源：http://www.aibaodan.cn/163iifzvcnv.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163gzsqbkuu.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163sqgvoqmi.html

================================================================================
来源：http://www.aibaodan.cn/163jmdyzmeg.html

统计汇总
来源：http://www.xuanzx.com/163qrgdufwa.html

================================================================================
来源：http://www.xuanzx.com/163aubjplfz.html

按语言统计（条）：
来源：http://www.sxryk.cn/163txdpclbs.html

Python ......... 252
来源：http://www.sxryk.cn/163rvagomcu.html

PHP ............ 252
来源：http://www.sxryk.cn/163cshjomdw.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163vdqqtlyv.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163jseiyowj.html

Java ........... 212
来源：http://www.aibaodan.cn/163vscccrif.html

Go ............. 212
来源：http://www.sxryk.cn/163ufjkpqle.html

Ruby ........... 212
来源：http://www.sxryk.cn/163hgekqrea.html

C# ............. 212
来源：http://www.xuanzx.com/163oiccdazt.html

C .............. 30
来源：http://www.aibaodan.cn/163qsxbppuk.html

C++ ............ 30
来源：http://www.sxryk.cn/163vpmmsirq.html

SQL ............ 90
来源：http://www.aibaodan.cn/163aqmytwmm.html

Bash ........... 80
来源：http://www.sxryk.cn/163dqmpcrjw.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163zglfcmvp.html

Swift .......... 15
来源：http://www.aibaodan.cn/163qbmizxsh.html

Lua ............ 10
来源：http://www.aibaodan.cn/163vehgprug.html

Perl ........... 10
来源：http://www.aibaodan.cn/163rhfzkizj.html

Scala .......... 10
来源：http://www.aibaodan.cn/163lvpyedhv.html

------------------------------------
来源：http://www.aibaodan.cn/163ywatgyvp.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163uajwcqss.html

按章节统计：
来源：http://www.sxryk.cn/163olriyzid.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163waopskkk.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163yryrtxto.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163jjunxhic.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163gcfebjjh.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163folpqqdc.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163vbfroeef.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163hvaofauy.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163sbqipwlf.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163hqmaccca.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163xnoplbaq.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163hlqmpbbg.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163hwcmiiri.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163efgmmkkh.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163hzyfmmvu.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163ajtlqhoa.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163jmbnhong.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163nubkylpy.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163gxxnqiyj.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163nnuqdupc.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163afpocbpu.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163vwfujvjp.html

------------------------------------
来源：http://www.xuanzx.com/163rdtefxtu.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163saqdlrfs.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163zivnnnkq.html

使用提醒
来源：http://www.aibaodan.cn/163iafjoxvm.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163bftvtpay.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163ffklhhpj.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163lowhecfl.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163acxyhxja.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163pmtiyfjv.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163pbucinrj.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163caepkjpn.html

================================================================================
来源：http://www.xuanzx.com/163jjodvcta.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163bmeqstrp.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163lkhrgpha.html

================================================================================
来源：http://www.xuanzx.com/163snzvdtpe.html

【收录内容】
来源：http://www.xuanzx.com/163fmiqplvk.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163vwbidafn.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163vjnucphs.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163zteasoqo.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163cmgcecvf.html

【使用说明】
来源：http://www.aibaodan.cn/163qkuumshx.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163igwizrjv.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163ilhyuegn.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163zgwzjdfn.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163byudbvqd.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163fobvdftq.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163ncltchxs.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163stzaxnuz.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163xlwaadgk.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163dlijlbzz.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163eraxneab.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163ywaocqzw.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163ajjqaaoa.html

【文件统计】
来源：http://www.xuanzx.com/163uxsepblt.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163hpcsgeyq.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163avzvdbbd.html

目  录
来源：http://www.sxryk.cn/163jeahgzhv.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163bokpvnxg.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163jdpodsab.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163lfwccptk.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163fdgtacdi.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163oworelnl.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163qjxjjkwl.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163whliyvqj.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163apubetvw.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163opcaamdw.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163kylduaoi.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163kbylozbr.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163dcudbnag.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163vlgqzmuj.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163jqfjhmoq.html


<!-- 参考信息 -->