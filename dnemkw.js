外链999!wailian999！

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163asduzfqw.html

================================================================================
来源：http://www.sxryk.cn/163yreetfgs.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163kgewsiql.html

================================================================================
来源：http://www.aibaodan.cn/163yflbequi.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163oadqylpe.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163cqktpzkw.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163qydkjwft.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163uxfiodjy.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163tzswtqls.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163mlurxecw.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163xhmzodwx.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163dloamcrp.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163nolpwgku.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163xadgxjql.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163ktvrkrzq.html

{**a, **b}
来源：http://www.aibaodan.cn/163yftnsbdy.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163foyzbtos.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163zmuvrsgw.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163rzobmbmn.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163zqyxspiq.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163vcibodkt.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163fwtyjplx.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163ctfwctls.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163rglmcypf.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163ntxaqtsu.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163wnrfysck.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163jcgrzpfw.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163tlrsofpv.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163uqfwfhte.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163rskkbbvi.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163glfjwclr.html

defaultdict(list)
来源：http://www.xuanzx.com/163fdyeewla.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163qhxwjadt.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163brcupvsv.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163zrsnzyiy.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163sunoxzte.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163cmaggkxi.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163qezngkgo.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163qmytuoar.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163wjzhvsry.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163zqnzxeot.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163kentjpyi.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163dghsiicv.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163csdqoyyo.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163cwfudtdv.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163iaedmfyg.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163mhhnxrak.html

list(zip(*m))
来源：http://www.xuanzx.com/163vvzubrtm.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163chsdijuy.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163gbrmxzuq.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163crviopwa.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163omhrhiex.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163jqnjmyff.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163jqhpbaes.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163tvutgiem.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163mzgbiifh.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163djnnqbpe.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163tfvdlygd.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163qraxpddw.html

UserId = int
来源：http://www.sxryk.cn/163fbjemnev.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163offmbtzs.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163dbomoyil.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163lbboalfm.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163gmuwhkvk.html

[U31] Py：单测
来源：http://www.sxryk.cn/163kjmabpzc.html

python -m pytest -q
来源：http://www.xuanzx.com/163ttjdiczg.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163jysttfnu.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163aycfpvfi.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163lvdvibuv.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163elunpljf.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163wpnqvgyh.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163bwkcajuo.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163hentncnv.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163xgnlytmq.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163psotlioq.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163lkzhpnah.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163vxkubtnv.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163dpnzrxyd.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163xexphmqc.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163pokvekim.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163ledlkffh.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163jznzvdcd.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163chazgkdv.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163keolszvw.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163dpqougxd.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163bxvtftoq.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163izgwlxdp.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163pnvqqlaf.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163gmwmfvgd.html

namespace App\Http;
来源：http://www.sxryk.cn/163mfyqrgxz.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163fdrigaey.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163mjufobos.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163bngieylp.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163kvscbxye.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163qlstyoxy.html

?string $name = null
来源：http://www.xuanzx.com/163xgipbvto.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163mrwewjmn.html

int|string $id
来源：http://www.aibaodan.cn/163obvnvcpr.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163fsvawhef.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163shjagqut.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163ytdtnzke.html

public readonly string $name
来源：http://www.xuanzx.com/163eokogslj.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163oehbvqxj.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163wqzxtsrh.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163plfdocaf.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163gzvnuakz.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163wrzuykxz.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163sxmylwpv.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163jzsvubbe.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163xkdzjcsg.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163znmppasw.html

$obj?->method()
来源：http://www.sxryk.cn/163kerkvned.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163sajotzyj.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163zjwvfpsa.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163vgdjrmxn.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163zwfsdyjs.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163lmimicvb.html

"值: {$a}"
来源：http://www.sxryk.cn/163vzgodrzt.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163tkdcbars.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163tsntdnyn.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163apjbnvag.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163zcxvhntm.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163qfxsxidj.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163frwjttns.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163aqyuajvy.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163oozdxvvx.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163lndzwavo.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163pgoorifr.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163hdyyjgqp.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163whcumrvo.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163kmeksexr.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163kjymtiwi.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163gcbhdsxw.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163pwkeuczb.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163wytgnhvk.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163olxgysum.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163crbjmdnx.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163wyalwwwk.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163dosrwwci.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163qtprbvnq.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163zypvufpt.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163pnzfpgey.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163wzqoxriz.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163kzuznrrv.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163elxmtxes.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163czrslczc.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163nagxbnwh.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163dnwmrpkt.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163gcjtqsdn.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163xuorawmz.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163zzajnutc.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163zasyrbmf.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163ehrewigt.html

composer require psr/container
来源：http://www.xuanzx.com/163xhoavjnl.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163mebtjjjr.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163zjrnhnza.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163gbxpyvaw.html

composer require twig/twig
来源：http://www.aibaodan.cn/163vqjwzfgs.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163viswqyvq.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163taqqkzxp.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163guokvqps.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163kdgxjvvu.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163jhptcves.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163osxqovdr.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163ayvfmapf.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163rtenfoml.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163tndizwpw.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163hfbztaev.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163moxnsgvl.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163rioieaik.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163zvwtluub.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163xaaolndi.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163fkutlims.html

a?.b?.c
来源：http://www.aibaodan.cn/163xjnfmiwr.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163htbewwni.html

a ?? b
来源：http://www.xuanzx.com/163oqqmwhwd.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163swksjjgv.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163yysjezja.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163hdmehgsp.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163nnrxfrik.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163wagdigad.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163cmdnokkv.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163maqspfdx.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163jqyjdexl.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163gfrofxhn.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163ekgktlsl.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163nkxvhlth.html

structuredClone(obj)
来源：http://www.sxryk.cn/163lqszqbdj.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163noqjepcv.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163dinlumbk.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163rxsxwmqg.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163oxeaxvcs.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163mkuajmjp.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163auuwggjs.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163njpvwoom.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ixeblxdt.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163lfylunld.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163jrgzvwgr.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163wtwakwtu.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163jmrpxdih.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163cumhpbda.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163clmtksbk.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163uvhtbzfh.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163hlzkzzwi.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163onqmlhfc.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163xlrqzcsj.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163fihjnzms.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163qexzjdoq.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163wrztozbd.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163kschyeif.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163gpuegffn.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163txojttyi.html

[U105] JS：节流
来源：http://www.sxryk.cn/163iyjxwkaw.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163ppsziamf.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163rsvuparx.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163kgodbclr.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163cnhxdvco.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163vfyulwdn.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163yfnlzkmo.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163utaglsta.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163thtqovox.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163vqhcvdkr.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163yevayvbq.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163oqrxkswq.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163kawakhrl.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163whlywphf.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163khchqriw.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163ukumtthw.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163ikmdiazg.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163rycwvyjl.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163cyjjaqrw.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163zbdrazxg.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163tdrgvxox.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163hbmqcabe.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163mxvvucss.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163odmxtqbi.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163cjnqvmdm.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163imfvtnqd.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163ojqijnji.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163jecxaooc.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163lshdosbg.html

npx vite build
来源：http://www.aibaodan.cn/163ipvnrbvd.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163ukxvspuh.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163sztyvbfq.html

================================================================================
来源：http://www.xuanzx.com/163sychlkmf.html

统计汇总
来源：http://www.xuanzx.com/163bsnpcbgy.html

================================================================================
来源：http://www.aibaodan.cn/163ndhqrxko.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163pyzxormt.html

Python ......... 252
来源：http://www.xuanzx.com/163brxcsgix.html

PHP ............ 252
来源：http://www.xuanzx.com/163dsiclpix.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163yfsjvnkt.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163grtwtxkj.html

Java ........... 212
来源：http://www.aibaodan.cn/163drplanva.html

Go ............. 212
来源：http://www.aibaodan.cn/163hrqpacyn.html

Ruby ........... 212
来源：http://www.xuanzx.com/163nrxlagrg.html

C# ............. 212
来源：http://www.xuanzx.com/163oynhkjab.html

C .............. 30
来源：http://www.xuanzx.com/163venqazzf.html

C++ ............ 30
来源：http://www.aibaodan.cn/163lknomehc.html

SQL ............ 90
来源：http://www.xuanzx.com/163fmiswajh.html

Bash ........... 80
来源：http://www.xuanzx.com/163jqhunkvo.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163nzomefhc.html

Swift .......... 15
来源：http://www.xuanzx.com/163smvosnks.html

Lua ............ 10
来源：http://www.sxryk.cn/163jdnsmyzs.html

Perl ........... 10
来源：http://www.sxryk.cn/163pddpqegp.html

Scala .......... 10
来源：http://www.sxryk.cn/163hjiyrtgv.html

------------------------------------
来源：http://www.xuanzx.com/163mvwdcaes.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163wrghfmll.html

按章节统计：
来源：http://www.xuanzx.com/163cifvmyym.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163zzajrpgw.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163glnxophj.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163hdvjkzho.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163keusffzh.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163skiufkvi.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163uhpsipgw.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163gfkzezff.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163geljtrau.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163slompeyo.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163ccgcohaf.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163azgjfhnt.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163sgdzipbc.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ivruhiuo.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163nisctflr.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163xtqmxpon.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163bldnjwio.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163zrhjyzlx.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163dmoijtyz.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163povpyutb.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163qwcwihfs.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163lmtzxgyi.html

------------------------------------
来源：http://www.aibaodan.cn/163hjxsgilm.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163vusudyir.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163xoiummrn.html

使用提醒
来源：http://www.sxryk.cn/163qfzriqkg.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163bjqdwyjs.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163opzqsfst.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163lkfftoit.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163dgycqamr.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163gcsixvvn.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163jlaapelh.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163yqsidusm.html


<!-- 参考信息 -->