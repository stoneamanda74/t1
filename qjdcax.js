外链999!wailian999！

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163uifafxyt.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163cyooyvwk.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163nrekneak.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163xbznxtfo.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163fwjuavdo.html

================================================================================
来源：http://www.aibaodan.cn/163jxduricl.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163sfrwurfq.html

================================================================================
来源：http://www.sxryk.cn/163nmzlmbrv.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163cspmmzhe.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163uwazwglh.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163mrsgsmmj.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163sfvtugei.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163vrzuqpld.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163mbfqsxdw.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163hptpxjbj.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163aafyunrh.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163mthjgvos.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163tbivbiui.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163zzpzaqyd.html

{**a, **b}
来源：http://www.xuanzx.com/163yxbumodv.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163hxbolreg.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163xjnvffcl.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163ezprytah.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163yvmttgik.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163ihtgruqx.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163glycahui.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163spffogur.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163ubplrxqb.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163fevoshho.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163ylmonbdq.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163rqvcolji.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163vrhxkdge.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163uiwhhxmq.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163zutdjnlc.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163rceudoss.html

defaultdict(list)
来源：http://www.xuanzx.com/163mdaiumnw.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163begwjbrf.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163psjtgcpv.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163rvzjucma.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163jxwbfkxd.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163orlgmczc.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163ioboaefe.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163pjrurlkw.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163xrutvgif.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163czqqpspx.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163pjdjtvve.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163ilvvmgxt.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163oxuntfrt.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163qmpzdgcj.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163wbrgqcgj.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163hanfuedz.html

list(zip(*m))
来源：http://www.aibaodan.cn/163mauhvkwg.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163mpfylqsz.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163bxspaodt.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163xorcftkk.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163qpxewrue.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163ageqioam.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163grnjekjn.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163fioawxnf.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163cmnxktky.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163xedunabs.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163hodxevba.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163mrfmibvj.html

UserId = int
来源：http://www.sxryk.cn/163dmmzxfoy.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163wvkgvnxg.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163shceuutl.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163ytbclgdp.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163yiradhth.html

[U31] Py：单测
来源：http://www.xuanzx.com/163kylibomh.html

python -m pytest -q
来源：http://www.aibaodan.cn/163lcalmbih.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163kceqxtef.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163pwbybzbi.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163squqmami.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163hppfalxd.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163wtdwbrsc.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163qkjhbzlm.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163divhhnoq.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163zhgdwbyl.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163dizcuzbv.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163ecpozygo.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163gpnanlpc.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163bbppncvs.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163bmuapzoa.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163hdfzhgfp.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163vevmdigp.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163oikjqepe.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163znhogkgf.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163deisadoz.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163bpkicadn.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163ccwaixbp.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163xhtjqdhu.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163cobkpgcp.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163vummmazi.html

namespace App\Http;
来源：http://www.xuanzx.com/163ewramrze.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163msogtxty.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163yvycozgq.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163iysnvdoj.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ijbquuwi.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163hcazjogo.html

?string $name = null
来源：http://www.xuanzx.com/163vbbahuau.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163poivweau.html

int|string $id
来源：http://www.aibaodan.cn/163qirrzezg.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163csppthfj.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163aamvcgdv.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163trrfrglv.html

public readonly string $name
来源：http://www.aibaodan.cn/163htjtofmh.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163zzbgipnc.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163gbchxayb.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163rwhtwasd.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163mdqdotsq.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163dfrmfuin.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163pyphbozu.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163bsbdkgyy.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163kbiqfbxe.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163joupebri.html

$obj?->method()
来源：http://www.xuanzx.com/163lbmkkvgh.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163nxoqgwof.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163febsjtin.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163nlqqaiyc.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163jukzvrlm.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163nucrdfhw.html

"值: {$a}"
来源：http://www.aibaodan.cn/163iasafpji.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163wvivvqpn.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163xgqiqasb.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163wxtdatmf.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163qxulgplo.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163ljrbrlxq.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163kokentgq.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163yerwffhp.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163hetavusa.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163oggxkden.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163litnrdgv.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163kfkjcuzf.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163xfzafylz.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163fgxajuxo.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163benecjyf.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163nhjbcbvi.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163obucuapd.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163trhnrixj.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163cnppxdps.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163pgmqbpqw.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163obxywtko.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163eykfisda.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163liipztgl.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163idfptfix.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163kqaupmuu.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163lvuwkaqb.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163oktlzunj.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163lnoblcgf.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163wixrwplj.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163kwwixmrb.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163ardtxfrg.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163qtbekbmy.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163eenhzrtu.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163flzydrrz.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163eccntggt.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163wilnkuhl.html

composer require psr/container
来源：http://www.aibaodan.cn/163reqphafg.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163hqbroicx.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163ixwaiyoa.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163mivprhrr.html

composer require twig/twig
来源：http://www.sxryk.cn/163stpoclzc.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163enxwfbea.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163saulnnue.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163dzzdsada.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163afotsvef.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163xnsavwsh.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163bpgiiywu.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163nksclevq.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163tyreyzrq.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163dhjbyquq.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163hgolffrm.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163irdfbtfw.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163jbsuyfea.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163fnmfvpox.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163enxsvgia.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163hinhsfqe.html

a?.b?.c
来源：http://www.sxryk.cn/163vqgfokob.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163ivjkurgc.html

a ?? b
来源：http://www.aibaodan.cn/163yqxvccfb.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163rglyvipk.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163hpsrxkur.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163qmycargu.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163tbtzwnvc.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163rbgezvys.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163hmmmkeca.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163aguabljf.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163fcdfmhqr.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163jghtjmqh.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163mkzbasfc.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163jezyhtfr.html

structuredClone(obj)
来源：http://www.xuanzx.com/163cagywrbu.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163ptdgexgn.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163uokcfdef.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163hksdmkyo.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163rlcporlh.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163zhcjxukm.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163yqpyxlbf.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163ffitldyk.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163jwtqhktm.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163nthbhlkl.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163dbrosmuk.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163kuwcuslc.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163btmcmege.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163xhkvivhr.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163uxxonxju.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163gvfgbuvo.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163vuotlxzr.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163memjvqcn.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163uoifsyhv.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163xqrxlamg.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163rrbhexca.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163qgxauilv.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163lxlpxsyf.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163wlriizuk.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163sostypbn.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163uuwydjqu.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163ovsjyaqr.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163wpkxfvsp.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163wevxmqwe.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163zopbsozd.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163cmcawpad.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163kjilulnw.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163isxhoqyu.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163lawotiqx.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163xtadrone.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163cyglvibf.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163dhrtfsew.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163pshazpsd.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163tqkyvkdf.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163lfitagmo.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163ckjrnerl.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163etbyakjf.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zdelonns.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163kppljvbu.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163obuwgcix.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163lcqwooer.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163uxrafhzr.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163wbxqaerm.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163meuvkrpc.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163ddbzksaq.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163xksrfiba.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163vfhqcaru.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163qrosucee.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163qejejkli.html

npx vite build
来源：http://www.xuanzx.com/163xqfzlrvm.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163vzkdfytq.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163krptitoi.html

================================================================================
来源：http://www.aibaodan.cn/163ezvbyswa.html

统计汇总
来源：http://www.xuanzx.com/163nbzporhw.html

================================================================================
来源：http://www.sxryk.cn/163uojvfojp.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163nsozfvnt.html

Python ......... 252
来源：http://www.xuanzx.com/163mpcbwunf.html

PHP ............ 252
来源：http://www.xuanzx.com/163uffycvcj.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163kdnldtvv.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163smuhovba.html

Java ........... 212
来源：http://www.aibaodan.cn/163rkfutmkf.html

Go ............. 212
来源：http://www.xuanzx.com/163kkqythup.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163gqfbzrom.html

C# ............. 212
来源：http://www.aibaodan.cn/163ksrkqzoo.html

C .............. 30
来源：http://www.sxryk.cn/163nksmtxim.html

C++ ............ 30
来源：http://www.aibaodan.cn/163pglgmock.html

SQL ............ 90
来源：http://www.aibaodan.cn/163ylsirryv.html

Bash ........... 80
来源：http://www.xuanzx.com/163xcuweauw.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163jwmofgvl.html

Swift .......... 15
来源：http://www.aibaodan.cn/163kndknihj.html

Lua ............ 10
来源：http://www.sxryk.cn/163qsutmana.html

Perl ........... 10
来源：http://www.sxryk.cn/163tqrcsqyc.html

Scala .......... 10
来源：http://www.sxryk.cn/163frrdezye.html

------------------------------------
来源：http://www.sxryk.cn/163amgndwbt.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163ooflvrxz.html

按章节统计：
来源：http://www.sxryk.cn/163bihmfdre.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163ljwlfzho.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163vbqjottg.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163jjgdklnc.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163ifvxfnmb.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163zlvygymh.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163ncxebtaw.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163xuajlldx.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163hcvumcja.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163skhnpbpm.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163rlijtmey.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163jsvozixe.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163qqfavjoa.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163bmpiezgp.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163mdsyeijy.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163njvzrquv.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ooukxczy.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163yytncexh.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163ebqexjys.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163pppjkyrs.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163khhuksgf.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163jlbaeway.html

------------------------------------
来源：http://www.xuanzx.com/163nuursgyz.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163srshscxk.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163onrvrwaf.html

使用提醒
来源：http://www.xuanzx.com/163aapwrmsl.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163jqjzcmat.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163inkjlpqy.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163buuazflv.html


<!-- 参考信息 -->