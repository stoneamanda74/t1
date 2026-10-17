外链999!wailian999！

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163vjggzwcn.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163jitcfpfj.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163miqqvzwy.html

defaultdict(list)
来源：http://www.sxryk.cn/163aclvnwde.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163pdjyetcv.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163tybusiay.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163ztdtsbcv.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163whnrnidt.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163favtfdck.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163kxwyxxis.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163ymftiwgg.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163avhublhl.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163xmnahkyq.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163rqnawpuo.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163bomhanec.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163sklojzug.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163qpblqlgd.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163xbxefqun.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163wsxfcyil.html

list(zip(*m))
来源：http://www.aibaodan.cn/163ueteygmn.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163lwhkhvsb.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163kpemxljo.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163csxbqwkg.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163virsbcio.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163pnwymxep.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163pwycisbn.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163emzsbrfe.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163tirusdcs.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163yabhzqqk.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163pxhvkjzx.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163mweuwgdg.html

UserId = int
来源：http://www.xuanzx.com/163vnmpevoz.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163ymafzsmh.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163ymxgjinw.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163zwjcglkd.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163fcvgjetm.html

[U31] Py：单测
来源：http://www.xuanzx.com/163mdxrwtuh.html

python -m pytest -q
来源：http://www.aibaodan.cn/163xetpaota.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163mvdgcryh.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163ykmpqptz.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163vqovzgrf.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163ckkubeic.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163jemhqqjd.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163bbwovvla.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163yhjidqop.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163izvevysr.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163insgbfhs.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163ilduljme.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163enbnzgol.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163wgcvssog.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163wepxfcjv.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163eckkyibf.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163aqpkskii.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163twrhuomq.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163vvplsubd.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163mtjqatgg.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163oqmhultv.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163hzwegbrk.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163srayzimb.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163gquekade.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163niidcruh.html

namespace App\Http;
来源：http://www.sxryk.cn/163ivfijqqx.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163pxevxrfq.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163xttzvwav.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163lyqcaoyd.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ssnwxaok.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163zjbkmtog.html

?string $name = null
来源：http://www.sxryk.cn/163uajbzsvj.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163qliadekx.html

int|string $id
来源：http://www.xuanzx.com/163swhxcbtk.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163jaetowvc.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163jeybdgdd.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163navpjiih.html

public readonly string $name
来源：http://www.sxryk.cn/163rdovnztu.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163mdmdypte.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163celoruvt.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163llychaab.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163eeonciex.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163pwojnmxl.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163ujybnmck.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163phlthlza.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163rawoezjn.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163btdhnwnn.html

$obj?->method()
来源：http://www.aibaodan.cn/163jcdzyftv.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163bgtcgfse.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163avitjxpz.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163smlbwbqx.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163lynxlayx.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163iukhjhdg.html

"值: {$a}"
来源：http://www.aibaodan.cn/163xlkmhune.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163ficttknp.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163xeykdrgz.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163cyfnsooo.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163vwfukldh.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163ezbflktn.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163lytzqbuj.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163xdeogmti.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163kcxvppri.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163bbxcdfbv.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163ibwkhsdh.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163lcoydfxm.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163izixzjvt.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163biiohveu.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163prnoiqhy.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163qaeekogh.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163zqlfvymb.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163loziqbvv.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163kfrdwuyq.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163hfustnno.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163moladbea.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163joriiujh.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163zytkqqlb.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163kxwfqkpt.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163oqradmyc.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163dkaxwbvj.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163lqdraxkk.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163irbnuwew.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163fkbvblrp.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163qugriqkp.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163jhlobxxn.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163kxtpapxn.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163djxzoyib.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163iciybsxq.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163mdzykmal.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163sohhsqxu.html

composer require psr/container
来源：http://www.sxryk.cn/163nmxafpmb.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163jqpplzkd.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163osfjuzie.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163xtdhwmpp.html

composer require twig/twig
来源：http://www.sxryk.cn/163yjltfucz.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163ykqlrebb.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163pymznqoq.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163rbtlwxcl.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163biirfpht.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163urlfiita.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163kzmzivzq.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163aqlpbvna.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163zhjfqiuk.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163lzmdhsgc.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163oeefuukt.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163ukxtqifo.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163alpvlgwy.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163ynlzhjtv.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163yrumctar.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163lrtjdnkq.html

a?.b?.c
来源：http://www.aibaodan.cn/163ambuwels.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163jmgmgvbc.html

a ?? b
来源：http://www.xuanzx.com/163pactqajv.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163kjgoygpx.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163slmbwqdw.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163gyxehkdj.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163wvyoeikv.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163mprbqlhg.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163jzylfqoa.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163nkxwlsqn.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163sayckwpi.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163hhdymwgc.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163rgbumyzm.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163zeisancn.html

structuredClone(obj)
来源：http://www.xuanzx.com/163slxafwvy.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163hlwivyjg.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163xgbzjrox.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163xqccursa.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163wmhttckp.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163awvcdhwk.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163qlowybyb.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163ljnbmcef.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163dvgiriux.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163njiczobs.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163quxuxxpl.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163bmchjxyn.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163ssdjdpzh.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163szrxzdsz.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163hwazesve.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163yyhdxioe.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163rmcrlmqm.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163epbaknxw.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163texpisps.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163jxotehyb.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163inijhubd.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163tozilabg.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163mzyowdzn.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163mmhbrxhs.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163havtfudl.html

[U105] JS：节流
来源：http://www.xuanzx.com/163aqldqjmf.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163xabuunpf.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163rzunbfmz.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163roxhfxtr.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163xzmvdkcg.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163ugwejztc.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163lpeszzli.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163bosgvwgg.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163zguomjcm.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163guftxcwm.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163gxhafwbf.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163wdaiywsk.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163cmxmjuor.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163wuuwletr.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163jejsahgo.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163vawjkkym.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163cribkqzz.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163qspowgvn.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163hyjtvndz.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163yannftvn.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163busjbynw.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163ashzssln.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163wzlecyve.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163zmwrbztp.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163teiisjhw.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163amboldwt.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163wyrvaqtk.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163rzifytps.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163zukmiljp.html

npx vite build
来源：http://www.sxryk.cn/163myhfrbfx.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163ggrdfuym.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163rchmfkbx.html

================================================================================
来源：http://www.xuanzx.com/163zldqetpt.html

统计汇总
来源：http://www.sxryk.cn/163mhpgekun.html

================================================================================
来源：http://www.xuanzx.com/163jfjujrbv.html

按语言统计（条）：
来源：http://www.xuanzx.com/163qegyfeid.html

Python ......... 252
来源：http://www.xuanzx.com/163yrhbktnd.html

PHP ............ 252
来源：http://www.aibaodan.cn/163bgubguzx.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163qejbhznl.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163zabjzokh.html

Java ........... 212
来源：http://www.xuanzx.com/163jowqkddb.html

Go ............. 212
来源：http://www.sxryk.cn/163skjautog.html

Ruby ........... 212
来源：http://www.xuanzx.com/163ranjnqtk.html

C# ............. 212
来源：http://www.sxryk.cn/163scgdopqi.html

C .............. 30
来源：http://www.sxryk.cn/163qdwntquu.html

C++ ............ 30
来源：http://www.xuanzx.com/163gmammivs.html

SQL ............ 90
来源：http://www.sxryk.cn/163agkrwzeh.html

Bash ........... 80
来源：http://www.aibaodan.cn/163uvcxtiei.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163ephmnrqg.html

Swift .......... 15
来源：http://www.aibaodan.cn/163mkndloew.html

Lua ............ 10
来源：http://www.xuanzx.com/163wtqzbnry.html

Perl ........... 10
来源：http://www.aibaodan.cn/163vuxlyynn.html

Scala .......... 10
来源：http://www.xuanzx.com/163ykloywyc.html

------------------------------------
来源：http://www.sxryk.cn/163xpndwioj.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163rhrzaqck.html

按章节统计：
来源：http://www.sxryk.cn/163ixmwsuzv.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163gmxhotql.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163fewrccvl.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163hashukwe.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163bfeoixup.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163scfiorye.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163xoyugnma.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163yihnelyu.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163pirzakbq.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163bgubtuqf.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163wvrsaxug.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163qwunntgd.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163nltfdnhc.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ztkdmows.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163oedxjncx.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163cxjsujkv.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163zhddybzm.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163ubrbmdce.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163mbqleevf.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163zqkujqss.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163btqygkrt.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163gatcowcu.html

------------------------------------
来源：http://www.xuanzx.com/163uazvtzwx.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163bhuqqneo.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163iemlsteh.html

使用提醒
来源：http://www.aibaodan.cn/163keskzbxb.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163coesnrox.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163cgaojlgj.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163wwmkpfzq.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163zbwteblt.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163iykatxxv.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163emmirsum.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163pnclpefc.html

================================================================================
来源：http://www.sxryk.cn/163ykufyfqm.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163lfwohdua.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163vvjfozkw.html

================================================================================
来源：http://www.sxryk.cn/163dheiyhro.html

【收录内容】
来源：http://www.xuanzx.com/163xeihvdhq.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163mgyhbvji.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163nhifbrus.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163opxmgttz.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163agizptkv.html

【使用说明】
来源：http://www.xuanzx.com/163klmjtuou.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163rvzctydu.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163fnajsuwt.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163lgsjmbpd.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163rsulkwuk.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163dfqlghfu.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163ttqftdpp.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163oprsqsxa.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163kvjyoxww.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163xexaxxxe.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163fxilkaud.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163zfawmsum.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163siffgzml.html

【文件统计】
来源：http://www.aibaodan.cn/163ydvisufy.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163jrehmluv.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163yugpadkc.html

目  录
来源：http://www.xuanzx.com/163uvoouyyj.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163qyawgkkj.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163hacmqryf.html


<!-- 参考信息 -->