外链999!wailian999！

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163oquxxwev.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163wpjylcvo.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163sgwwhyxm.html

list(zip(*m))
来源：http://www.aibaodan.cn/163encswluv.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163asumebjp.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163ecnufgxv.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163uhahxhkk.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163juzfoyqk.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163vmiiixxq.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163cawcoqup.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163vcxothna.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163xbwzkcsq.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163knpcbueu.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163ehxinhov.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163qccjcpcw.html

UserId = int
来源：http://www.sxryk.cn/163tokityog.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163lxvttrys.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163ujcvmgrh.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163qebxdabm.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163lizppozu.html

[U31] Py：单测
来源：http://www.xuanzx.com/163uyqjzvfb.html

python -m pytest -q
来源：http://www.sxryk.cn/163usfhsdye.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163lmboshvu.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163zyswrhls.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163mylhgvqk.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163lysyfnas.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163dkqhvpfh.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163jpyukoda.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163msknxhps.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163lnyhnqhv.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163bkqouoep.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163tgjvobnq.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163suwdwmoc.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163rbzepjjx.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163lbgtfgkn.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163diawdzuv.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163xbrqdkaf.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163peengsot.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163sbjoamew.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163nqatfnkp.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163ulvievfs.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163ixnaqrns.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163jyqpbxvk.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163vbxfifmq.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163tdzovamc.html

namespace App\Http;
来源：http://www.xuanzx.com/163lsqjitea.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163zrgbpkgo.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163elpaojke.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163imsrfxsh.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163veptooeh.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163pzngfugm.html

?string $name = null
来源：http://www.xuanzx.com/163mbihzoks.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163viddwbxz.html

int|string $id
来源：http://www.aibaodan.cn/163tfuiegod.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163smwbkwaz.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163qescuqph.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163gtnbvlbt.html

public readonly string $name
来源：http://www.sxryk.cn/163apqvdkvj.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163pzoeeask.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163llvolcri.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163rmsvjxmt.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163fqduacpp.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163cxufrdqn.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163nhwsuwkb.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163qpljdmyd.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163zxorvpuw.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163cxxeiabo.html

$obj?->method()
来源：http://www.sxryk.cn/163tpbnjetq.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163cxnuwbzl.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163oydvvwot.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163qsaqafen.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163zyfhxian.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163jlubojng.html

"值: {$a}"
来源：http://www.sxryk.cn/163zmzwankz.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163odstaops.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163cnvyuxzy.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163utctsxmk.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163lshnrczf.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163rlynbdlm.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163ydykudlx.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163twfpfliy.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163gtcbqpyb.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163befdoxqv.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163ytsauobu.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163ydrlnrzs.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163vsfemosh.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163bzmxahpx.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163qzjyrgmc.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163ophpvxwe.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163ijougznf.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163tnmbylth.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163hkkrhdsa.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163nyfawpro.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163yvetigct.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163yrwsbtqd.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163xuliewie.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163lrazhrfr.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163oihzzprw.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163lcvyljyr.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163vamyaxgs.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163kcvhgrbn.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163hzxvzkyf.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163notapfau.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163cbyanbrj.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163ryjzacem.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163riyojpaz.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163vtlpljop.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163bvjmpywe.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163uaracwbi.html

composer require psr/container
来源：http://www.aibaodan.cn/163ngezmebb.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163odhvfbeu.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163gvepwrqm.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163ewonqbpd.html

composer require twig/twig
来源：http://www.sxryk.cn/163qyxhkmxz.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163kfccjvti.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163ybkengmb.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163svwatuvz.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163xwsxmzto.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163kauymwvi.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163idcgqvbw.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163fwxuiwie.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163nnwnklwi.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163ocjhpsqx.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163aamxvwut.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163wuayffii.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163ugndsual.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163lksverzf.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163zmbapsff.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163ravsfjgc.html

a?.b?.c
来源：http://www.aibaodan.cn/163qmmmdmpj.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163onljtnky.html

a ?? b
来源：http://www.sxryk.cn/163yhynmfhx.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163qccbnzkm.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163sygendjv.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163kvcrqmra.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163klfqnaid.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163alwewcly.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163wrznwgtr.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163albzoxrh.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163zdlhddip.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163ahokyeoi.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163rdawpaex.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163fmnrriwz.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163tyxocbmz.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163uiuokhui.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163xrelkocq.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163zgksgqwt.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163dhwhstwb.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163cklmfulp.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163pxcrrazp.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163vqnqmtxq.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ytcmnmek.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163ghwjyhsg.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163xlhxaaod.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163rmccvisq.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163jrhdbvjl.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163ysjrwjoy.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163uuvzvelu.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163xwvxpiuw.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163ebhrssaj.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163xpwybjbd.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163kqoqheud.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163lygfemzt.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163jkssbpgx.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163xskghexq.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163qebajkql.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163esidmqre.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163esfljyhu.html

[U105] JS：节流
来源：http://www.xuanzx.com/163aezicetb.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163nntrttsw.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163tfhxqfuv.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163hnjjyunp.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163pyefbmrz.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163kwigcbgf.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163rpxhabrz.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163aouiuvkx.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163jqpgkdmu.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163mrbuavcf.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163gkgrkucn.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163shslcloo.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163ozxxndup.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163vavzjahx.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163twqmweye.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163zpzuddbv.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163paelhnit.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163akykxfqn.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163eihyruao.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163zqqkqhkz.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163zdaptrzd.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163ehbiowtv.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163tjtsdomp.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163gsrkbjgj.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163evbbibuz.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163lyjnshrg.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163xokibgoy.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163upvmowqx.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163rcuogrqm.html

npx vite build
来源：http://www.xuanzx.com/163wkszhbyv.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163utbuswud.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163zrjgowtf.html

================================================================================
来源：http://www.aibaodan.cn/163wqshutor.html

统计汇总
来源：http://www.sxryk.cn/163amahrjzs.html

================================================================================
来源：http://www.sxryk.cn/163zzivaztn.html

按语言统计（条）：
来源：http://www.sxryk.cn/163fzrymjuq.html

Python ......... 252
来源：http://www.xuanzx.com/163qsrizcby.html

PHP ............ 252
来源：http://www.sxryk.cn/163mmpxikqq.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163uwywdbgh.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163flqvnsmm.html

Java ........... 212
来源：http://www.aibaodan.cn/163xnbldxso.html

Go ............. 212
来源：http://www.xuanzx.com/163suexzrid.html

Ruby ........... 212
来源：http://www.xuanzx.com/163ewrbxvae.html

C# ............. 212
来源：http://www.sxryk.cn/163cdvpschw.html

C .............. 30
来源：http://www.aibaodan.cn/163ndmialyk.html

C++ ............ 30
来源：http://www.sxryk.cn/163hojbqkch.html

SQL ............ 90
来源：http://www.xuanzx.com/163zzizkvqu.html

Bash ........... 80
来源：http://www.sxryk.cn/163txlhphky.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163olpeemls.html

Swift .......... 15
来源：http://www.sxryk.cn/163hntxmxpw.html

Lua ............ 10
来源：http://www.sxryk.cn/163qomtenbt.html

Perl ........... 10
来源：http://www.xuanzx.com/163lwkslkxx.html

Scala .......... 10
来源：http://www.aibaodan.cn/163dpvvneyb.html

------------------------------------
来源：http://www.aibaodan.cn/163mnducfkp.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163qnmzhcqv.html

按章节统计：
来源：http://www.aibaodan.cn/163fwqzphtf.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163paqyhzdt.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163xkiulplq.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163gebjzmow.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163gexpuacw.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163nqmbkihn.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163cblhvxci.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163gabhwdqb.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163lqpveyua.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163wjachnnf.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163vmyrnkhg.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163vmadjeyl.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163smmmhygq.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163poomyffc.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163hsivgwlz.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163bjwlrpmi.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163uyvnebhn.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163ozyhmdqz.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163ftdzdvgt.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163lwpnlrws.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163xciwcopn.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163bpmqafcu.html

------------------------------------
来源：http://www.xuanzx.com/163poxspfcz.html

合计                                  2106 条
来源：http://www.xuanzx.com/163okcxjdnh.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ooyuaxzw.html

使用提醒
来源：http://www.sxryk.cn/163mpnbgnfh.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163bugcgiht.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163eghlnepb.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163migeoxrj.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163xwjpdxkb.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163svnaafhu.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163gaurjzwl.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163onlsyndw.html

================================================================================
来源：http://www.sxryk.cn/163jqpzpzzv.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163mcojugsh.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163kcehrfca.html

================================================================================
来源：http://www.aibaodan.cn/163ajrsiwkg.html

【收录内容】
来源：http://www.sxryk.cn/163gxkebuxv.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163nraujyil.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163xlimrwka.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163rztrjdrh.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163uzpukjhd.html

【使用说明】
来源：http://www.aibaodan.cn/163nptldrfk.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163kfrcddsl.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163dbftovrp.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163imvzidwr.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163ulknsyee.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163uagjfwnq.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163axlhgmim.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163kjluyzpu.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163diuhoesx.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163usnjgxht.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163kchxyedr.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163yxtepsak.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163odtmbszu.html

【文件统计】
来源：http://www.aibaodan.cn/163dlspbctj.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163qqchylxr.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ycbijtcs.html

目  录
来源：http://www.aibaodan.cn/163bwqlhadq.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163shehpzix.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163lwkrxbmz.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163hygxdisk.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163mpvatwvj.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163qsekkfvr.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163gojcrfph.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163toeifmnh.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163orzofeev.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163vkyusknx.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163iveatalx.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163uujnblei.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163regfhcwd.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163lpehmynk.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163jzujqrxf.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163ghmghcxk.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163lzvyhewz.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163aykmfkiu.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163itcspkze.html


<!-- 参考信息 -->