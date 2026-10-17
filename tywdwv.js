外链999!wailian999！

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163zmrsskge.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163ihkgqxwj.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163cxvmwxme.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163akqkylrj.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163uzxavnoc.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163cxaugkcr.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163xzjwrtcf.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163huuxmwts.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163mndishtz.html

================================================================================
来源：http://www.sxryk.cn/163aekggsms.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163kjllwayu.html

================================================================================
来源：http://www.aibaodan.cn/163ngcancrr.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163pxucwlae.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163hilstmqa.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163tykevevp.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163zhmdrnkr.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163ogzbimvn.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163xjxrqrwl.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163tnfgamsi.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163jqnowqqc.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163qjtkzsdf.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163masfovcj.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163otmnikie.html

{**a, **b}
来源：http://www.sxryk.cn/163ivzcgabw.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163gbfxvmhi.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163ydbgbaab.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163uxnlripn.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163kkomuzsz.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163jrwmdkrx.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163wubxpjhp.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163yacmkkoq.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163vqxiekvx.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163gsymnaos.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163evbdmqeu.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163hmaxkojm.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163putfpjjp.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163klswbllh.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163ryqiushj.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163vihklset.html

defaultdict(list)
来源：http://www.xuanzx.com/163lezwztrr.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163ntlharac.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163excahfph.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163habwvvni.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163aozeknal.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163expvefpe.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163dtchzcrx.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163xppppiva.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163ljaynryg.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163isernbyc.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163mrefabin.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163mpotfeyu.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163gtdkjxai.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163ucydgygj.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163hoftrvst.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163yqaeefjq.html

list(zip(*m))
来源：http://www.sxryk.cn/163iroycapj.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163qjuouphe.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163gohnowoq.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163awzuyfle.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163mnttjxzj.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163eknzhisf.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163inkkjuwp.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163opzewzwr.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163zqmhdtcu.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163yktnzkws.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163xamhhfza.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163iajnfnta.html

UserId = int
来源：http://www.aibaodan.cn/163amwymyfb.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163qogyjhql.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163ivwynznt.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163dnbqdgec.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163itjtuyng.html

[U31] Py：单测
来源：http://www.xuanzx.com/163wlhbwhye.html

python -m pytest -q
来源：http://www.aibaodan.cn/163xveiqzqo.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163forujhhs.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163sgpystjk.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163fwdqfkce.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163zqdkwslz.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163frsoryhx.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163agzoxwny.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163rflbljxn.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163mloykoyc.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163bxlcqeef.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163cgwbwpoy.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163aggztmxo.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163gdgkkxmb.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163oygicumg.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163vsigqeuv.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163bqnoylgs.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163cfnkyejn.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163fpoqfmbv.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163hoxpxnjw.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163ihiruxin.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163czeoeotc.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163ipjavabh.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163orrkcjtq.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163lbmkkmvy.html

namespace App\Http;
来源：http://www.aibaodan.cn/163gyjnbzwu.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163ukpreped.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163dppvfgtt.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163eorqwqae.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163lroswdzd.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163afusvibg.html

?string $name = null
来源：http://www.aibaodan.cn/163tvsylgfh.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163cohbpsee.html

int|string $id
来源：http://www.xuanzx.com/163wnvnttpx.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163nbdraoqo.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163efesygzv.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163wqflnzbx.html

public readonly string $name
来源：http://www.xuanzx.com/163xekuryen.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163rbdfdwua.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163lwppcbhd.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163yzmbvxdv.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163vnsuycmh.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163wblbijbm.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163mzuaeuua.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163wfiphlcy.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163sjgzmtcg.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163cimaxdip.html

$obj?->method()
来源：http://www.xuanzx.com/163vkovegxn.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163sfxocjyz.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163navpoxfm.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163mlvbupju.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ragedcdc.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163godwkyux.html

"值: {$a}"
来源：http://www.aibaodan.cn/163malclkcs.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163wdhmbfew.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163tdluqxky.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163lnlhevyg.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163rezvxhhz.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163nrjsdvyv.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163ftptmfap.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163uigehjsb.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163piaavoia.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163jcojaqwo.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163naqekvzo.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163zjbbvxur.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163hfgwyuvq.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163gfexfnfy.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163gsglcpwa.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163ychsihyf.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163itsjdwrx.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163jpommorl.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163ykxkjhhv.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163ulahmluo.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163kjkixuun.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163igqbfetg.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163cldijvyf.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163hgwrtmvy.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163hxecwmut.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163fhhnnkhw.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163cswhhatr.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163psabqekz.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163rahlkwgc.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163ehbvjzlz.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163ikkwhwfp.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163elsgbuwi.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163relswjel.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163nmxvsdle.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163hxsvvwmd.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163bimsnztf.html

composer require psr/container
来源：http://www.sxryk.cn/163jbzmbucj.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163tcmfxwwn.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163nzchepst.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163zimdhkst.html

composer require twig/twig
来源：http://www.sxryk.cn/163mxixbuww.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163xloevchc.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163qdxrnpvp.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163znpvbdgn.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163mymledgj.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163tebbwese.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163mikujlur.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163uphvkmtn.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163hnbeigma.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163yzbhxeio.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163tcrmuwqj.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163bpvihrrs.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163maguizgp.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163qzcvnyuw.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163ptiukrun.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163mmfwnzre.html

a?.b?.c
来源：http://www.xuanzx.com/163zjvejgtx.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163flswqemn.html

a ?? b
来源：http://www.aibaodan.cn/163vepglgkv.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163ocjtmtib.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163mhxitpaq.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163tnkfudcq.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163xxyghwfp.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163nfyxslgg.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163nqgrbanv.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163kiuzqbxu.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163qirxdzem.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163giuygzbs.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163kqxouqlh.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163hjheujwc.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163tfyukslo.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163awqilezj.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163ivkaydbj.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163uvhfysvk.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163bzchxwuy.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163ebcmjmrc.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163lhoveuij.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163pyjgzsgy.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163zjppqrhk.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163zmurcyzp.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163xvopyqcb.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163xreavuew.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163keutzcuc.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163tgorqxdg.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163kmrdqeep.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163dqqryzwc.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163czjsbjex.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163icyruune.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163hnlbvdfn.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163bzkyllsx.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163oftizfqi.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163quohdaku.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163eajrkasv.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163iofdjsdy.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163kmwknygo.html

[U105] JS：节流
来源：http://www.sxryk.cn/163gmiigwfr.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163kpgwwxpp.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163ptkfmbsx.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163yqkxaayt.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163ltjfhzuh.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163thtzimmy.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163htbzhsco.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163rhlomtch.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163uzppsmon.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163rhxrebwc.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163nrzhphul.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163dgmdtgpq.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163hapctdfx.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163wlmnijrx.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163lrbgeqfh.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163qlksvvgv.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163mjkmjfxx.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163bqajlrhe.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163untzntgl.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163buvkaune.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163accjjimp.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163stgjjdyq.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163qeghlnbw.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163qqvyhghp.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163opczausa.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163wgfqwpdr.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163bmhhcadg.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163iafcetft.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163hgvvitxl.html

npx vite build
来源：http://www.aibaodan.cn/163tkxlgdup.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163ltqduuki.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163nfzxvbso.html

================================================================================
来源：http://www.sxryk.cn/163wuynvnsk.html

统计汇总
来源：http://www.sxryk.cn/163ejohlitc.html

================================================================================
来源：http://www.xuanzx.com/163jtuxbsfn.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163uhnhplio.html

Python ......... 252
来源：http://www.sxryk.cn/163jiojutbi.html

PHP ............ 252
来源：http://www.aibaodan.cn/163xogropif.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163upjqwsun.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163pyfhggfn.html

Java ........... 212
来源：http://www.xuanzx.com/163jqmzmndq.html

Go ............. 212
来源：http://www.sxryk.cn/163xxwnieay.html

Ruby ........... 212
来源：http://www.sxryk.cn/163pwnwtkov.html

C# ............. 212
来源：http://www.sxryk.cn/163wuyxlmhx.html

C .............. 30
来源：http://www.xuanzx.com/163exoztuka.html

C++ ............ 30
来源：http://www.sxryk.cn/163hnpblzht.html

SQL ............ 90
来源：http://www.xuanzx.com/163qrddapfk.html

Bash ........... 80
来源：http://www.aibaodan.cn/163jbdxeito.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163diupggua.html

Swift .......... 15
来源：http://www.sxryk.cn/163mozkooty.html

Lua ............ 10
来源：http://www.aibaodan.cn/163toglispu.html

Perl ........... 10
来源：http://www.aibaodan.cn/163yeenbpkp.html

Scala .......... 10
来源：http://www.xuanzx.com/163pzkeugks.html

------------------------------------
来源：http://www.xuanzx.com/163dtavypjw.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163usjgwtkk.html

按章节统计：
来源：http://www.xuanzx.com/163wwarxcqm.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163gpgcefhk.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163hptfbpxd.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163waevqrmd.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163zkdfcawr.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163yjeobbgl.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163toapprrc.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163hljzgpwb.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163dkqrevhb.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ziwnmaqe.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163etwxuhzt.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163hesmfgfe.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163mliyblkl.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163wofklixk.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163nhjhdwxt.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163ynvoxuwx.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163rkfyjcis.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163nynyrllh.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163szydjxas.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163xnumngqa.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163oaoukgfh.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163jwqejvzm.html

------------------------------------
来源：http://www.aibaodan.cn/163dxrdlkol.html

合计                                  2106 条
来源：http://www.sxryk.cn/163bkyioqhw.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163lmozmonz.html


<!-- 参考信息 -->