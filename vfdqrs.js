外链999!wailian999！

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163mawwfdno.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163gcsexwgs.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163fizrfaph.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163wadavvns.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163vaiyjvgm.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163jqshqpil.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163jxevpyyw.html

defaultdict(list)
来源：http://www.xuanzx.com/163cdxwejyq.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163syhdmoti.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163acscwvnx.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163cujdxmxr.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163xyyprdro.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163fwrcobxl.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163ncekyfjo.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163yaatqbts.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163emkxpmng.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163vrvczjbf.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163xuhthrlg.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163sccuvjiu.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163tabuscha.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163nhjobvyy.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163rnifdmib.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163vvnjpekd.html

list(zip(*m))
来源：http://www.aibaodan.cn/163iwsfvdah.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163bdvasqtj.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163eiscokfa.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163qvpnioje.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163jfenmjzm.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163dxvpffnd.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163oavzvhun.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163bhcisxei.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163jdqctexg.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163lrhqyewf.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163narlctfq.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163jgaevjrb.html

UserId = int
来源：http://www.aibaodan.cn/163fqzrrnug.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163vmzfvasr.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163ritutalv.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163zjatlyao.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163qckdrsfi.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163jrkgtszt.html

python -m pytest -q
来源：http://www.sxryk.cn/163wtzcmerz.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163psvsjsnq.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163waodynsu.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163lihzrrvc.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163iznwnlcn.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163ruhorilc.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163lxvtytpq.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163zlwaqlyd.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163baagztgu.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163xygalajr.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163rnqnregg.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163ylipxttn.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163mmpfffzi.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163mzrzhrsh.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163qmbrzvxe.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163kalungks.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163joovinjv.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163xsymgaoo.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163qwkpucwb.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163myfetzdf.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163xhnfgqdr.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163humhufxg.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163tkouryra.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163xqzelhvj.html

namespace App\Http;
来源：http://www.sxryk.cn/163xydszofj.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163lpdzxjrz.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163celdqhsd.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163tzipjeyr.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163dhdmhwgn.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163zdwkgohf.html

?string $name = null
来源：http://www.sxryk.cn/163sqthtnzd.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163plxtkuwh.html

int|string $id
来源：http://www.sxryk.cn/163clbpgeud.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163wvkjxoss.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163kuxuxigu.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163mhccpcoh.html

public readonly string $name
来源：http://www.aibaodan.cn/163psnazihe.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163jhfgkzuw.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163nphiqkts.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163jegcjwua.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163lcmwnyto.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163yqgovkon.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163aaiapkyb.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163qcbjjqts.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163huoiuosf.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163eixpoxsv.html

$obj?->method()
来源：http://www.xuanzx.com/163pckqghxu.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163gjmymdul.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163aruzftkf.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163ohwzbgzk.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163dqtkvvnk.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163zzvznshh.html

"值: {$a}"
来源：http://www.sxryk.cn/163rahvhlkh.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163nedakdtr.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163qhhyssiu.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163jecxyben.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163fcufkkmf.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163mseqwalb.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163kzffhfcr.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163ochultmb.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163worffydv.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163jkxbtdrk.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163chxxqnxv.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163gwvhlaef.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163kxmpmmwl.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163tithgfyf.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163igcyngax.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163auuluekl.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163gtwzwlat.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163hjnjrwjy.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163bvzyvxjh.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163hrtcdroh.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163opfelsqu.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163iaclhate.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163vergrhxn.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163gouatkog.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163nyngayiw.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163tjlvdrtk.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163kxyrvlgw.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163rajjflml.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163tsstablb.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163kssfjwkq.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163ctuhfirn.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163zdehzmsg.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163jgcminsk.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163nynmolhz.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163wirzvacr.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163gjknfhcw.html

composer require psr/container
来源：http://www.aibaodan.cn/163yxuonbth.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163tbarpkzd.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163lqjjtjop.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163xyeuxjyk.html

composer require twig/twig
来源：http://www.sxryk.cn/163yaxuetmm.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163cmgtarkm.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163fcztdmiv.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163fxetwlhk.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163knfeffin.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163hxnnatxs.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163mixvncoy.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163eenfcfft.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163huyylnoo.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163bktbwjmy.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163occjtras.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163trnsuwvq.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163aufqvckl.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163jglyghoq.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163ysfxdhuq.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163bqdhwgle.html

a?.b?.c
来源：http://www.aibaodan.cn/163wqnbvobx.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163btjyudnz.html

a ?? b
来源：http://www.xuanzx.com/163uljaapxv.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163otowbehv.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163tmjtnivq.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163pasnecwk.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163kihyyjyd.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163ladtuxco.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163gmrfsvlm.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163kwcghhic.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163rthrzzsh.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163vywaqvzh.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163hvfveqzg.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163ddqpmjxy.html

structuredClone(obj)
来源：http://www.sxryk.cn/163ztiydcad.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163zysehsqr.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163unpuavoz.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163laxxrmub.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163znkbmrrd.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163hrzkomyd.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163fasjujkv.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163intwvzjx.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163rhgrpbxz.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163nygecfes.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163pdduzvyd.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163uidtpcuz.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163miferemf.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163qwnibjgc.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163wtiymdmr.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163trkegfhi.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163ulteecym.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163ssvnzqbh.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163waqlrnoj.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163bktmqysh.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163ivowgtgd.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163oicgovmz.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163oeozmplr.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163otzdgmhl.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ucsfffwy.html

[U105] JS：节流
来源：http://www.xuanzx.com/163esslmoel.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163fmcenlpv.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163ltustqhh.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163lvrnmqxl.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163crvvfiiq.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163ycypobwc.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163cxnvokhx.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163kpygrxir.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163jfyfzezo.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163ayqfdqha.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163qorisbbm.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163whbilokf.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163ozlhoxgn.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163lffqqhkp.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163koltvdlj.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163dahaartg.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163ufkpkvve.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ynkeziye.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163ekhooipr.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163ekwqzono.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163soiuaymq.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163ahorfscg.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163xniloitk.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163kemblfhg.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163odcukzkw.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163lgyjiikz.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163jvqcjjmj.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163xqbgcqwd.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163gkywveiq.html

npx vite build
来源：http://www.aibaodan.cn/163wtfjbvpc.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163dvvlmyqq.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163holeocko.html

================================================================================
来源：http://www.xuanzx.com/163oqbynjcn.html

统计汇总
来源：http://www.sxryk.cn/163niwufuvv.html

================================================================================
来源：http://www.sxryk.cn/163dyonqasz.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163msyfhoug.html

Python ......... 252
来源：http://www.xuanzx.com/163woyfdcpv.html

PHP ............ 252
来源：http://www.xuanzx.com/163ohnxxidi.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163pxmjvwiw.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163qzjxeatz.html

Java ........... 212
来源：http://www.aibaodan.cn/163buzrxpwr.html

Go ............. 212
来源：http://www.aibaodan.cn/163iulyrmag.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163hidtbqgn.html

C# ............. 212
来源：http://www.xuanzx.com/163ilzhdtjo.html

C .............. 30
来源：http://www.aibaodan.cn/163gitmpqrn.html

C++ ............ 30
来源：http://www.xuanzx.com/163cukhestv.html

SQL ............ 90
来源：http://www.aibaodan.cn/163oaqudpqv.html

Bash ........... 80
来源：http://www.xuanzx.com/163ckewhxur.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163nhfdfboe.html

Swift .......... 15
来源：http://www.xuanzx.com/163jshocmyp.html

Lua ............ 10
来源：http://www.sxryk.cn/163ltssxrom.html

Perl ........... 10
来源：http://www.aibaodan.cn/163ssuyqifl.html

Scala .......... 10
来源：http://www.xuanzx.com/163ukflfyrc.html

------------------------------------
来源：http://www.sxryk.cn/163vsttimww.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163ftzjsygm.html

按章节统计：
来源：http://www.xuanzx.com/163gnxfkzxq.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163qldvxbfi.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163navexfvx.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163nhxexvqk.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163wylryoep.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163eyhoxepa.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163aphbyumz.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163fpzftisa.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163pcbkmygc.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ovklhoua.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163fhwxzlpt.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163abisrlph.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ntquezsq.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163gwrtoxky.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163wrsnponc.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163bbfawsdt.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163wpzxglak.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163ncjplccj.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163bmjwuhmu.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163pumpuxnd.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163whftuvhm.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163pbdzpefo.html

------------------------------------
来源：http://www.aibaodan.cn/163yxyghftd.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163cclfjbgp.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163gfhpjtgw.html

使用提醒
来源：http://www.xuanzx.com/163nnendiuw.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163hzspftrk.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163lgymuplj.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163yrmprrxs.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163bykiejtb.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163uvrrdnbx.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163cfglzktx.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163ixtdwqdt.html

================================================================================
来源：http://www.aibaodan.cn/163envgnmcj.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163kxfyormx.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163obywljkh.html

================================================================================
来源：http://www.aibaodan.cn/163viqeruhz.html

【收录内容】
来源：http://www.aibaodan.cn/163nsfpsfyh.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163lbaukuyf.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163eddadpuq.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163fncuriei.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163gapxzapb.html

【使用说明】
来源：http://www.xuanzx.com/163twetpctd.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163kfznvlif.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163mjwtddzr.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163mbmtgron.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163rejjdnus.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163liofwqdc.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163dbicnklb.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163grcaqbbb.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163umuicxfc.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163etgwpexi.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163doolaocb.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163ltvjjuqh.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163lpyvmhxl.html

【文件统计】
来源：http://www.aibaodan.cn/163iorsfdzn.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163znargvpi.html


<!-- 参考信息 -->