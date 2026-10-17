外链999!wailian999！

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163tntqjgvt.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163wwojzsnf.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163kmzqrxit.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163spnqgltg.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163kybuvljf.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163dtqxholr.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163jurkpwlx.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163pnpqtsve.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163zdkcihuq.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163bojssktv.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163zehmunge.html

defaultdict(list)
来源：http://www.xuanzx.com/163wpkntnzm.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163rklioqdu.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163hhlsdvce.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163lkgbauiw.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163anitisir.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163wupbxfgw.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163iydxcpvh.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163dsouxumo.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163lxbarnvb.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163ehdvtgby.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163zhtkujhy.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163zxwbmyhc.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163btxkmehp.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163yanghpaq.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163kfjpmcyq.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163fgqzkiys.html

list(zip(*m))
来源：http://www.aibaodan.cn/163vwcrvwas.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163izgnxsds.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163ytdpkvfd.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163jgrhmiri.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163ubaomxse.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163brsarjds.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163tkblbubu.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163teojzibs.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163ipqocudj.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163ytdtjibw.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163pmipzosw.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163ptmoesqa.html

UserId = int
来源：http://www.aibaodan.cn/163umtqyceu.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163ecqzsqpp.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163orgjiycf.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163xtrunlmq.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163vybiqcyb.html

[U31] Py：单测
来源：http://www.sxryk.cn/163akdqzbrw.html

python -m pytest -q
来源：http://www.xuanzx.com/163ltozokry.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163enepnzsw.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163opzvetwg.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163dzbessui.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163bykshniu.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163ljmklrrz.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163lzfgmyjd.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163stnxisgh.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163coztzfdp.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163kyquldsz.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163tgonqjte.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163uixiqrzy.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163gakrreee.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163nsmhqqna.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163eaoxaabf.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163dltmodmi.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163yqabvbws.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163nvzqutng.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163hzyfnrkd.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163jydivjkl.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163qmdmavtm.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163qjzesjhi.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163ktnpzoqm.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163sruslfdm.html

namespace App\Http;
来源：http://www.xuanzx.com/163fzshkzfk.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163cabpfobx.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163gsnwsaan.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163kbggblyg.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163gxxpdzxl.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163tmucelhh.html

?string $name = null
来源：http://www.xuanzx.com/163gnrlapkn.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163divvmdyf.html

int|string $id
来源：http://www.aibaodan.cn/163wtwluvuy.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163hdfepzng.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163yshybevx.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163onyldcdz.html

public readonly string $name
来源：http://www.aibaodan.cn/163zkitabsz.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163rxrjokpm.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163ziswosnv.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163czjcnbis.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163jsqmpcbz.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163sgggfkow.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163vepiswwn.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163iyibegrq.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163rfgfudlz.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163rgoamgqx.html

$obj?->method()
来源：http://www.sxryk.cn/163wmvqzdjy.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163qwkldmew.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163shgxorrf.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163idqmospb.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163afhnascy.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163tuuoegnp.html

"值: {$a}"
来源：http://www.sxryk.cn/163fbfxjnve.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163zsjpscii.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163glezuhas.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163txwjvgef.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163wfxogeyu.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163qplixoja.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163nsrkeqvv.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163odswittw.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163vdmtyqud.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163yxvrstfo.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163qblbxzff.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163sdbarcla.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163yyzyfuja.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163peofaacm.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163obwnavrt.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163rhsaibax.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163igvvlcvh.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163kporulve.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163qlyluemz.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163ebijasuo.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163ymvtznqv.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163babebxjs.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163eyffkwfr.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163shildckx.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163ijotzoje.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163ntkassrv.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163xixdhodq.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163rucifjpw.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163qtmafipr.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163nvsgmtaq.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163ajxbpoap.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163iktoucmy.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163qndzjaym.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163xktqmscg.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163qghbgrwa.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163nvzfvgcp.html

composer require psr/container
来源：http://www.xuanzx.com/163rovtqwru.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163aceqmjtj.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163jodziovp.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163conoygsv.html

composer require twig/twig
来源：http://www.aibaodan.cn/163cnfgjlwc.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163myeetwvg.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163bybodvny.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163czbqdypf.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163yltvxsxh.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163riustpka.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163ufrmofxq.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163zwxpspfy.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163iawtrtvg.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163dorvmcbo.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163ctcmoppo.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163zlucioph.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163wzgzvrfh.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163voukzcnu.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163fojyxlfu.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163vgafaldh.html

a?.b?.c
来源：http://www.sxryk.cn/163hkdopvri.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163ddcwiayh.html

a ?? b
来源：http://www.xuanzx.com/163puyvbccp.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163omkcppdk.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163flhijefb.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163wutrwjgc.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163befkznie.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163djfzgkst.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163bgorvwzy.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163mgtbgnmy.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163mqvlqhej.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163kypnkcdf.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163nhyltqbx.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163bshuqddv.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163qecdibok.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163wcqzeagi.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163tpuboust.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163emtrpsrv.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163tllkirvx.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163tknneetl.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163ptigzdnc.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163eylwfhzg.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163cphsssgv.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163dohoetvc.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163fsiwklhd.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163aqasxkih.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163vcvzkwri.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163noeulmqi.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163fcajyily.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163okvqovjb.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163vypejaya.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163yepzndsj.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163zczsvxqk.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163xigocsaf.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163txxnefua.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163stwtfnuu.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163lsfatygc.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163bfxagvpa.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163cdbcumlu.html

[U105] JS：节流
来源：http://www.xuanzx.com/163ntxwsrwb.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163ipbkewtv.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163dbtwbbdk.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163ncdvkrvo.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163wzavqavm.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163zbwwotke.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163hnyeuepb.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163nzleqblv.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163bwdkbron.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163zhtbatmh.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163fqudlpjq.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163qouzakzo.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163blzmyecn.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163agqlztzi.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163rjujwwju.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163oeupuzxx.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163hbfqzzmc.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163demwzaik.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163fqmezmfy.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163yfmcqbzn.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163sqmurjqj.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163arugwgep.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163swzaiacf.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163pecdexun.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163rsthymzc.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163dxbxmxyu.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163mjcpvjbu.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163ybpkzzvu.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163dtwwmmnn.html

npx vite build
来源：http://www.aibaodan.cn/163yblgsbic.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163arnywkzp.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163ykyozpck.html

================================================================================
来源：http://www.xuanzx.com/163qccpgaco.html

统计汇总
来源：http://www.xuanzx.com/163bxizkhkc.html

================================================================================
来源：http://www.sxryk.cn/163sklmhvrb.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163sezvpapz.html

Python ......... 252
来源：http://www.xuanzx.com/163qxcrismm.html

PHP ............ 252
来源：http://www.sxryk.cn/163jvvgjxlu.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163aganglzr.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163xdtidoqj.html

Java ........... 212
来源：http://www.xuanzx.com/163zcxotglu.html

Go ............. 212
来源：http://www.xuanzx.com/163wpgbghbm.html

Ruby ........... 212
来源：http://www.sxryk.cn/163zeogmcnt.html

C# ............. 212
来源：http://www.xuanzx.com/163mrmcpysj.html

C .............. 30
来源：http://www.xuanzx.com/163emlobqbg.html

C++ ............ 30
来源：http://www.sxryk.cn/163jciornvs.html

SQL ............ 90
来源：http://www.xuanzx.com/163htuhruis.html

Bash ........... 80
来源：http://www.sxryk.cn/163oyzwwqaw.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163gzzwjqzf.html

Swift .......... 15
来源：http://www.sxryk.cn/163wrozfdrj.html

Lua ............ 10
来源：http://www.sxryk.cn/163somfkyks.html

Perl ........... 10
来源：http://www.aibaodan.cn/163pivsmovv.html

Scala .......... 10
来源：http://www.aibaodan.cn/163bkugcjyu.html

------------------------------------
来源：http://www.xuanzx.com/163lfyjfpgc.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163mibfilfi.html

按章节统计：
来源：http://www.sxryk.cn/163sszykfpi.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163rsziookq.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163hlkknaeg.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163vtkeljcu.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163jkngsgfm.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163mehkkjqi.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163ldwxjhly.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163jbmcncqz.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163ogcrlryj.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163lddklqma.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163whvwkwud.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163npccnahp.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163dyeufzcn.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163tcxykhju.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163zddakbhu.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163ppstvoxj.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163hnskpjry.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163zqzxmwld.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163rimhnyqw.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163canwjvbs.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163fxwoheld.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163dhebumaf.html

------------------------------------
来源：http://www.aibaodan.cn/163htbsgsmc.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163gkzxaadl.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163pysjwbea.html

使用提醒
来源：http://www.xuanzx.com/163uvlpncgu.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163oovozmfe.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163vooreokh.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163ypfwnlyk.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163dcwginje.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163mvhgbtsd.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163yhkvliqd.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163bltvabwd.html

================================================================================
来源：http://www.xuanzx.com/163ssgvynuu.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163udkyykkv.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163gqhslrty.html

================================================================================
来源：http://www.xuanzx.com/163gupcargs.html

【收录内容】
来源：http://www.sxryk.cn/163qxhcxlqw.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163rcpggiyo.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163xljcctfq.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163ozuynuzz.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163znocvzod.html

【使用说明】
来源：http://www.xuanzx.com/163jbzxtfbk.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163vipsutat.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163kuwyzdjf.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163kosticef.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163bylntvjq.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163qguzagig.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163qauuoiwa.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163lrralyot.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163djjgjsox.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163jjqvpmvu.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163rlkvekeq.html


<!-- 参考信息 -->