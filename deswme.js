外链999!wailian999！

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163ethvonds.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163yykurslf.html

println("Hello")
来源：http://www.sxryk.cn/163xjxzthof.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163kpfmeonh.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163cdozflok.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163cnbwqjck.html

s"值: $b"
来源：http://www.xuanzx.com/163ccffxnjm.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163cbxhzzwk.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163feitgqor.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163lldtyzud.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163mvxqlmhz.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163yopsuvjt.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163waohhhmz.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163czzatbhp.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163qinfbpoc.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163gqxpicpd.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163yacymlmn.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163pvvjesya.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163kckloibp.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163wqqxsqau.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163eehcnpra.html

================================================================================
来源：http://www.xuanzx.com/163jhoccibh.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163ybpanwqz.html

================================================================================
来源：http://www.sxryk.cn/163essczzam.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163xestuazb.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163hvlprjlk.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163xblxqbij.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163rhupsvzb.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163nnqiffqv.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163cjskcwde.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163cmjhczzg.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163ylpcwycp.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163tlanhubm.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163xtqbzrkr.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163fzuqlvsq.html

{**a, **b}
来源：http://www.xuanzx.com/163eaeuxdbj.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163ysxawlho.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163htltxekb.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163lvztbxbb.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163mnoufemj.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163coslotnz.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163tfulfypp.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163jpjrprhm.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163pasgykad.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163mqniutmb.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163jzfurjyz.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163nfvbhrfs.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163wotgwfid.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163fmjgyksn.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163cffhyptm.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163alycpvux.html

defaultdict(list)
来源：http://www.sxryk.cn/163akhnyoka.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163eckiorol.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163xzezwndd.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163nyohgbda.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163xuzppfvn.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163ornajqpa.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163zmbeouth.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163yudxhjdp.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163ausjarma.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163uqlxykax.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163nyaojxgz.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163zoksgfhw.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163hsoglagf.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163whoghszc.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163mmoteaxy.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163btolyltt.html

list(zip(*m))
来源：http://www.sxryk.cn/163pdwzkchu.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163rshkqzwt.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163mamasdda.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163farfzmgu.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163isxugtqd.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163huwgximp.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163nokbfrjc.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163uoiwwzro.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163xgfregzb.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163bkeofffi.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163nyqdzobp.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163kajwsqni.html

UserId = int
来源：http://www.aibaodan.cn/163aerkkfly.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163duzqpdyx.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163vmhtgjrg.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163xovzibnn.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163ofxqrzpq.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163axmrmrob.html

python -m pytest -q
来源：http://www.xuanzx.com/163zxuouyjn.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163uogpphnp.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163sggpfgjc.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163hpbmavac.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163ftncnrwz.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163qafwstdt.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163xwujvadv.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163jihmdigc.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163dygnadbm.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163hayglwgk.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163zqplcsdq.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163bdkseofa.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163rqicwinr.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163cwglpohs.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163zfkbobsc.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163kwpkhyju.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163gujisbik.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163mojngwqi.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163bbiagckj.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163tvucelaf.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163nhznjyaw.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163dsgglsyn.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163rogudifg.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163qddwdmtj.html

namespace App\Http;
来源：http://www.aibaodan.cn/163oyquhghb.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163jjlcqdge.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163cdfbrkqq.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163xcipxxjj.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163cffbydmc.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163hekuaymq.html

?string $name = null
来源：http://www.aibaodan.cn/163zyaellnp.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163eynvsngc.html

int|string $id
来源：http://www.xuanzx.com/163nqyxmrcb.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163ujrdoany.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163gwifpdex.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163caeperqk.html

public readonly string $name
来源：http://www.aibaodan.cn/163svghzkqg.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163oeoeiqtg.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163zfwyywbm.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163likpwiiv.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163nxervpzd.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163bphnoqsw.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163myvqgngp.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163wawyijpe.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163rynwcmzm.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163fvmbqqse.html

$obj?->method()
来源：http://www.aibaodan.cn/163lrughmkn.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163txnmbdyv.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163jexpshsa.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163cgxdtwcs.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163knbzflqq.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163hyousibk.html

"值: {$a}"
来源：http://www.xuanzx.com/163wqzwushf.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163zrerbgxs.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163ysyftwfe.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163icluyqzl.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163spahibwc.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163dibpdoen.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163ljqyongs.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163fnbigxyb.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163xbsssfhf.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163yzwyggsh.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163stzcfzgw.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163ywiqkdlj.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163rgucuboj.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163xzvbeuxn.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163vqzqjmce.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163ecdmxnjk.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163vtfjslgz.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163wnnromtf.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163btartljv.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163umtltkia.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163lbpbhzmd.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163exmgmmld.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163qdibmads.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163anxsnecw.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163fivhvgri.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163sbrxmniv.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163sgomgfxo.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163wszfmyob.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163ijargsca.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163tsguteby.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163ycalhdhj.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163clzkvbdv.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163gsiqjhap.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163ezhjuykk.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163qlmywjnc.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163mpdvknqp.html

composer require psr/container
来源：http://www.xuanzx.com/163wibigbvk.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163hdrpgefv.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163lejpiifm.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163bsolxjhe.html

composer require twig/twig
来源：http://www.xuanzx.com/163mbmogtxz.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163agpcqvdw.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163webfoowz.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163etuhfmwd.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163ejeumdlb.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163mueepkrg.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163tutoiqdp.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163kuzbjcrz.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163jwovbutw.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163kqxcwdcv.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163znbjsrvy.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163pkslpygo.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163ghhjnmbg.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163raabugkb.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163yhfzswiq.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163dvacdcbv.html

a?.b?.c
来源：http://www.aibaodan.cn/163hqswhuur.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163boovgtun.html

a ?? b
来源：http://www.aibaodan.cn/163byjhtouv.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163fadhbbgw.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163njrbtiwp.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163hheqsqpu.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163huxfajed.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163ktbxmumz.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163qnuquqos.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163jcnrbims.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163eaauhkzk.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163dbklxxzy.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163rfjjiihh.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163hjzffkny.html

structuredClone(obj)
来源：http://www.sxryk.cn/163ovyhtzmd.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163ifnqudvs.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163rdjqbdiz.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163izrhwege.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163fffmqnlw.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163lujkbcna.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163asdvycvo.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163apoazhpw.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163cqlkazye.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163epppunij.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163uhsfrpll.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163yrygqvao.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163rtrzsxxo.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163ujdhhngr.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163svwpqevq.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163hxchrfse.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163mriqcxpo.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163taxfavrl.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163ylctbtmx.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163tpdkimvg.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163dahhmwfx.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163oonppiae.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163kcnlcouf.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163mrvovbme.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163jurshjwg.html

[U105] JS：节流
来源：http://www.sxryk.cn/163jrsafywk.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163dhssskca.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163bttnytyh.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163ahajqhle.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163zfzckeeo.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163omjzuzlj.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163tczhxmjh.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163qqrqejpp.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163zxsuvlnh.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163nsvnebug.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163hkkmxyje.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163rnwckqrj.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163zvtonpcj.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163spaiqfdr.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163fnpuzhlx.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163qltckiri.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163xstrluli.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163mdbrptcf.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163dcsgnmht.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163objvvwrf.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163fxyvyahp.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163hrhnfqhz.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163rbqdfcev.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163qcervydz.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163rqyyvfjo.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163dpclsnpz.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163ziwcmxpx.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163ickyiefo.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163dijaqsax.html

npx vite build
来源：http://www.sxryk.cn/163nbpxxzcd.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163ifweicpp.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163cvmobnig.html

================================================================================
来源：http://www.sxryk.cn/163wdqxlkuz.html

统计汇总
来源：http://www.aibaodan.cn/163xibmfygc.html

================================================================================
来源：http://www.xuanzx.com/163lwbmhiwq.html

按语言统计（条）：
来源：http://www.xuanzx.com/163ytkkmxah.html

Python ......... 252
来源：http://www.sxryk.cn/163gpzlvqsj.html

PHP ............ 252
来源：http://www.xuanzx.com/163hptknbnc.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163onfpijzs.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163tdhucnvh.html

Java ........... 212
来源：http://www.xuanzx.com/163ecwoujks.html

Go ............. 212
来源：http://www.aibaodan.cn/163jwldkmxs.html

Ruby ........... 212
来源：http://www.xuanzx.com/163qzeubkkl.html

C# ............. 212
来源：http://www.aibaodan.cn/163zenshyso.html

C .............. 30
来源：http://www.xuanzx.com/163gybtxrrm.html

C++ ............ 30
来源：http://www.aibaodan.cn/163novecuxq.html

SQL ............ 90
来源：http://www.xuanzx.com/163sntmycvi.html

Bash ........... 80
来源：http://www.aibaodan.cn/163nbbzisxx.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163rjntgndl.html

Swift .......... 15
来源：http://www.aibaodan.cn/163ypszsjzm.html

Lua ............ 10
来源：http://www.sxryk.cn/163exydtteo.html

Perl ........... 10
来源：http://www.sxryk.cn/163roiqiuwm.html

Scala .......... 10
来源：http://www.sxryk.cn/163cokbpggc.html

------------------------------------
来源：http://www.aibaodan.cn/163dpjfpsra.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163czxirnck.html

按章节统计：
来源：http://www.sxryk.cn/163debtypmg.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163nxpodacw.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163rlvtsnte.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163jgzdskwv.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163tcjnslzd.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163mqkcpliz.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163yufhlhke.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163umwqqmha.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163xugfbuab.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163mlipvtpn.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163iojwwbll.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163yhzbykmd.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163gnnnjmms.html


<!-- 参考信息 -->