外链999!wailian999！

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163fzcsgyba.html

================================================================================
来源：http://www.xuanzx.com/163tiwlwxzy.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163atjokbcs.html

================================================================================
来源：http://www.sxryk.cn/163bcubuurl.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163dxpjskxc.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163mpcxxsoz.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163xqijcypq.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163ryeczpgs.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163twuyhtqn.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163rfhejztz.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163pxxpmabe.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163weqsrojn.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163havhqcpb.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163nqyisdtv.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163ilskgnkb.html

{**a, **b}
来源：http://www.xuanzx.com/163zfeewbqv.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163hqqnkqqr.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163ivybnhbd.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163uxyihqnq.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163msroylhd.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163bhgdxpfp.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163oozcrium.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163vvzvcgnj.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163bwcpqwhp.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163inkokpwj.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163nbbphdfu.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163tjlibzqk.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163olhwlwax.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163inwvnwqd.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163xqybxgls.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163gyuvrfwh.html

defaultdict(list)
来源：http://www.sxryk.cn/163punufggc.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163jhmratus.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163drjypunr.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163cosyasee.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163bmcsyzir.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163kujbfpat.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163wakmrsax.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163tunkpgka.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163yupszlqb.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163zvvolbjh.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163wpejljuw.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163fyafclyz.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163pfmhzzny.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163kyknfcvr.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163trkvybkp.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163ksbrjecy.html

list(zip(*m))
来源：http://www.aibaodan.cn/163zqsssdhj.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163owupmfmk.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163rxspljfm.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163dhuhugei.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163punzvngr.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163doguokns.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163cmbxqkeq.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163llvdycbq.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163uygmxzfr.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163megvovlr.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163tmqrtxkg.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163oxdzbfet.html

UserId = int
来源：http://www.xuanzx.com/163ztkyosog.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163pjnjwdgn.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163pfneloen.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163xarttkvh.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163ytbiixmh.html

[U31] Py：单测
来源：http://www.sxryk.cn/163gnnrhgfa.html

python -m pytest -q
来源：http://www.aibaodan.cn/163sisclldf.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163sqrtneub.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163hkguualk.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163ifugpifl.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163qgdnxwaz.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163cnkhnesx.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163eljydupj.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163yobuzhni.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163brwpivpq.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163kxfsrnfk.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163cyjpjfkx.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163bqsujlsu.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163swohysju.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163lnhykgtc.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163buwzscjr.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163mjgowcbb.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163yxwtsngg.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163uxntdeqt.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163nqjawinm.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163dyuopszz.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163psheebrr.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163lzghycni.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163qefunape.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163hbcsgfyy.html

namespace App\Http;
来源：http://www.xuanzx.com/163einaxbfn.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163yqakvurr.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163sqlxejxa.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163locsyptp.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163vboylnbz.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163yblqqrtk.html

?string $name = null
来源：http://www.sxryk.cn/163jhjwklzj.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163mgploskq.html

int|string $id
来源：http://www.aibaodan.cn/163oxguvtrs.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163edvstqpk.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163cdgisiiu.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163ycaadyll.html

public readonly string $name
来源：http://www.aibaodan.cn/163ieqddzqk.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163tbiuprkb.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163dibujkxk.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163wlzgldsn.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163yqdslivu.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163qtsxbimg.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163nhdkoubr.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163hqerfbvl.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163kqhnymbp.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163jnkwmxra.html

$obj?->method()
来源：http://www.aibaodan.cn/163mbugpxnn.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163rgkqohvm.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163qdzxwcin.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163yqiuxgsr.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163gppsvmgw.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163gbbhisem.html

"值: {$a}"
来源：http://www.aibaodan.cn/163uybpnwqh.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163dizxphsf.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163xdqurkqp.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163exxucqdp.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163zefsctyk.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163lowqusfi.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163ukuvnedl.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163sbaneccz.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ozunhdxc.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163aasxeujo.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163xrjaywzm.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163awucszwl.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163tqyvvacv.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163iuqygzxf.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163bfhyrwmq.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163eceexiiq.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163sqjewgog.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163atmcrnoq.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163twhhbksj.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163dgtfonrs.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163tevpheag.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163lnpcarxb.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163whorteol.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163ubgawzbs.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163cyrwkdav.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163rxoyblqj.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163xswrwatm.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163znrtuehh.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163pjgvapon.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163lgoqyouh.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163ioxsstjy.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163vaiumwdm.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163xxaasktn.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163sjjuhvav.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163tpjttbld.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163wsiaxugo.html

composer require psr/container
来源：http://www.sxryk.cn/163gilufhey.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163jwqrmkwh.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163hsfuynjn.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163qdowyaay.html

composer require twig/twig
来源：http://www.aibaodan.cn/163kbycakln.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163apoqqjuf.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163wvlkmcem.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163cywjzmeq.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163fmzpvpml.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163qaecmkwo.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163aeutusbc.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163zqbbhudf.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163fdpvcrhn.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163klijtxjg.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163kjjgdcts.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163ktzveoct.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163meotjlom.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163gumdpvbj.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163koxpbkko.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163zejzxuhs.html

a?.b?.c
来源：http://www.aibaodan.cn/163zxecfojr.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163gceinzty.html

a ?? b
来源：http://www.aibaodan.cn/163cmoqvicc.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163qvmsrqkq.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163tzjxjxns.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163xnayqxbt.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163wkaephdg.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163ukbxzwml.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163nhjrxclg.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163hptrkgrq.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163nksdpcwr.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163gttaufgu.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163krbqgpwg.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163duiuhkgo.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163ylwmaicl.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163cbsvmvws.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163jbuixhkc.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163hethlvrw.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163tvhnlcjk.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163uqemyabp.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163ejpgjhhu.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163ugzxyteh.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163hprorthn.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163olhrssfd.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163whwqpmdm.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163epcahqud.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163lanmcxnl.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163ndhvutop.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163pwnekbgr.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163oytkmfnj.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163gvvhxebd.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163idmiouqg.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163telxkxdm.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163dnmlaofi.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163xmoqpnfm.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163rkvflblq.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163ghwxgpwj.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163wvxdqkbj.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163pzjpmkfg.html

[U105] JS：节流
来源：http://www.sxryk.cn/163iwksgizd.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163kslsoumh.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163sluhowpk.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163teqijzjd.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163yeptsxag.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163mmgudyst.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163xpnfylat.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163urmfqtpu.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163wsbpkwix.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163acgfcwra.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163bijuxamc.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163vmxgitlg.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163rsktlogw.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163tagwaner.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163ekmheuwc.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163kkrknety.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163ykzriqoq.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163zvuatrdh.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163zzzsjtau.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ncvcevle.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163yciigeje.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163ydlzrhjn.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163lflelzow.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163hzgqvhpf.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163ijmdhqck.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163wesrlyuh.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163bncnwysp.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163pyidkfqo.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163fafzcosl.html

npx vite build
来源：http://www.xuanzx.com/163fiuhpmtc.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163srlslrpo.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163vonrbxuq.html

================================================================================
来源：http://www.sxryk.cn/163cdhxijzh.html

统计汇总
来源：http://www.sxryk.cn/163ytempcxy.html

================================================================================
来源：http://www.aibaodan.cn/163tpmfeesl.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163wcklgyog.html

Python ......... 252
来源：http://www.sxryk.cn/163qgkwrhtw.html

PHP ............ 252
来源：http://www.xuanzx.com/163qlacgino.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163ozjjyjeb.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163kajqkkeh.html

Java ........... 212
来源：http://www.aibaodan.cn/163ulshewue.html

Go ............. 212
来源：http://www.aibaodan.cn/163ahcaqoxp.html

Ruby ........... 212
来源：http://www.xuanzx.com/163zgpextxg.html

C# ............. 212
来源：http://www.xuanzx.com/163ttxyycbe.html

C .............. 30
来源：http://www.aibaodan.cn/163reryfjvh.html

C++ ............ 30
来源：http://www.aibaodan.cn/163buhxmgym.html

SQL ............ 90
来源：http://www.aibaodan.cn/163vmckglhd.html

Bash ........... 80
来源：http://www.aibaodan.cn/163ddqthbhb.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163bzolciiv.html

Swift .......... 15
来源：http://www.xuanzx.com/163oauhynqz.html

Lua ............ 10
来源：http://www.sxryk.cn/163fcnckiao.html

Perl ........... 10
来源：http://www.sxryk.cn/163qiialbvj.html

Scala .......... 10
来源：http://www.aibaodan.cn/163jtpeoplo.html

------------------------------------
来源：http://www.aibaodan.cn/163rjhhsyby.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163vtbfkpik.html

按章节统计：
来源：http://www.aibaodan.cn/163cvvavjlb.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163xwfcupus.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163sgtwwjra.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163hjqbqgmx.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163qtznhfjs.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163qfwaocxq.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163hyvavqgt.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163dsmjdtjo.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163namcumkk.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163xrguxofm.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163ardfqsbx.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163vfihqkav.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163mlxcrppl.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163erxaaxfb.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163fvfnyguy.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163mkfvofoy.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163uznmboia.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163tdfixbux.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163txgbfdtc.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163erclbzgw.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163skbhvwcp.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163rvzpttru.html

------------------------------------
来源：http://www.aibaodan.cn/163cskbminu.html

合计                                  2106 条
来源：http://www.xuanzx.com/163qaqerqdy.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163zjucyczh.html

使用提醒
来源：http://www.aibaodan.cn/163iicmbceo.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163pkmbtzfq.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163krpwkoor.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163wrcjxman.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163vfdaoock.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163vbhgromr.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163twtzgbok.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163metyxhdt.html


<!-- 参考信息 -->