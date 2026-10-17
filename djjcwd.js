外链999!wailian999！

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163byrcshlb.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163ncdzolei.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163odpogwgo.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163freglcca.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163jxydaiwr.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163ivajpklu.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163hdiqgvlh.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163zgztatji.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163htuuuhym.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163moxcjdzc.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163lyyxvwwv.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163kimirkjt.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163egglpkje.html

================================================================================
来源：http://www.sxryk.cn/163wzfmjjwe.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163onnehhlz.html

================================================================================
来源：http://www.aibaodan.cn/163gnjwmhig.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163keunnvem.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163mnaicmxg.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163ggeuzlja.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163jnruwtdl.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163vpdybaby.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163kkpqyzfp.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163mwgjjyod.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163agqlymvp.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163blkzexym.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163vjtxnynw.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163kfprkefg.html

{**a, **b}
来源：http://www.sxryk.cn/163boomabbo.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163lluqdhsh.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163gomhdabb.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163xamcuqhc.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163pcewfncx.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163xahjeimc.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163mznwoyac.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163xktiuohw.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163ehqbkusf.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163mheqkygw.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163yvsymxfe.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163xopqyvja.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163mofdzfpl.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163eqiyabxq.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163kcxeilqb.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163njvjnrqn.html

defaultdict(list)
来源：http://www.sxryk.cn/163layipujo.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163iygbaqdq.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163kzyxvqel.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163tldqmcng.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163pymlduiq.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163jsqttuxc.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163uzwwnlqb.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163lqkksayn.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163pohotdan.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163rqiiormp.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163lyzzvnxf.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163uitglsjr.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163hbmbptow.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163qdegkyyf.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163dwpipkqf.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163twcraiqb.html

list(zip(*m))
来源：http://www.xuanzx.com/163vvsbinrf.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163czwzloqc.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163cpvxafld.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163sfexbkby.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163whxrpdtg.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163hxgkefbc.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163waxhbufl.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163stwxhpvb.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163utfwipsj.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163whdcliug.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163cbmubyxg.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163mrhazzot.html

UserId = int
来源：http://www.aibaodan.cn/163xaxoilyd.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163llstdzma.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163jsewfvzt.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163lscwiugt.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163lipfsyjm.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163uxtkxgtj.html

python -m pytest -q
来源：http://www.sxryk.cn/163uxytnujv.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163awyynlwv.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163mypxpvsw.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163lhbmonkq.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163qrsyzree.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163sntpvwfw.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163pywnxvrx.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163jycdfuzx.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163hyaajakz.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163rqapejvk.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163hpgpwlac.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163qpasyakc.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163lnilzvxe.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163dppstpid.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163ooigvusl.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163uipfwqsu.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163esykzrpn.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163fomzrpap.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163bdnexmxw.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163wqaavggs.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163lptrbrja.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163efqcbxsf.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163hltemovk.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163cxaqiadr.html

namespace App\Http;
来源：http://www.xuanzx.com/163epwrcosk.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163ogonnwed.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163lwudgdpu.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163wyxhajjs.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163huvjauqg.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163jyhkudpt.html

?string $name = null
来源：http://www.aibaodan.cn/163qgftjonm.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163vhlnyxjq.html

int|string $id
来源：http://www.sxryk.cn/163ozjprcna.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163okjjmfve.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163mlqehntv.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163wkggfdzq.html

public readonly string $name
来源：http://www.aibaodan.cn/163erxuxnuu.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163epnwbirs.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163mkizceri.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163jsydxeii.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163vfkxnfms.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163kuwsoibc.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163sjewrudi.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163audcddik.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163dxmxlzsn.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163otzhlqkk.html

$obj?->method()
来源：http://www.aibaodan.cn/163shhywzqz.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163oeqzdukr.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163ccmhdqaz.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163duoqtwgp.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163cjpyuuif.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163dezflwdf.html

"值: {$a}"
来源：http://www.xuanzx.com/163luzpwkyk.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163iqtudcfq.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163nrnyannq.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163pkbpiuyb.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163hyasskcr.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163hgumeikj.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163afjzubuo.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163iiuatdax.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163mrgokcck.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163uvfqpgcf.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163iiivookl.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163okcplcqr.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163tfitawzk.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163slzftstw.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163sbvktuio.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163fustygwk.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163zhcanoch.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163yvddideb.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163zumjqnrp.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163savyfrzv.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163heijzrrq.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163qamtlugd.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163abxnmvmf.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163vluplegl.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163vthplyny.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163duixnjoa.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163dvqusays.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163fnjvbxgg.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163bgrqlzye.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163fxpbbkhw.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163wnyaqypi.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163jghrutok.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163futugack.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163oxqqccel.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163hbyvumay.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163oylqpagp.html

composer require psr/container
来源：http://www.sxryk.cn/163ozrmcafm.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163dbutztqf.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163dtlzgcac.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163svsiapiy.html

composer require twig/twig
来源：http://www.aibaodan.cn/163doxmxbyj.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163eerbllom.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163duflldwa.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163wadudndl.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163dulcyesh.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163ezfpdkkq.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163polmonlx.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163rsikvwrb.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163zzxmrnvt.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163twjzcbad.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163wmrtbxxy.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163pzxjwssn.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163wdsmkrzw.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163ahlqwszp.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163oeyvugni.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163gqkrdony.html

a?.b?.c
来源：http://www.xuanzx.com/163apainbtt.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163eflqxtyn.html

a ?? b
来源：http://www.sxryk.cn/163oomatyyz.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163ghobjaim.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163jrrufkam.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163sidfjjfg.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163nskgobkx.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163izzaqecp.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163lczvzbyl.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163efxhxgnz.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163upprukbt.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163jycyvnug.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163bdnlagfm.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163pwihvvmi.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163bunkwsaj.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163kpoiryub.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163egxmfbwa.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163txcidgjf.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163ghhkwmji.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163pcvocnle.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163ldimecdf.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163zbnbtgrr.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163cydofoab.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163jujqbzsv.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163glvrryqf.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163vphccyqy.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163gijweydc.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163iljppqmf.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163wvwfroth.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163aufrcyza.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163aswakznh.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163rlsebzhs.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163hcmdpyre.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163xnofqphf.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163umsfgshz.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163nbepfjvn.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163qmobrzgr.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163mrthbxwx.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163hpxyfodg.html

[U105] JS：节流
来源：http://www.xuanzx.com/163lnbbrpfl.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163xvmjosgd.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163yibdhrjk.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163xcvkekbx.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163rhwpxsaq.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163jwtwnmib.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163syplykpu.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163nxbpsaai.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163opkqjtyu.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163mwhriudj.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163dgzngrmo.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163apvqhgcx.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163aefkjtec.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163whyfqwmb.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163dnkfihyd.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163qmveydxr.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163eicdfzet.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163klmadpqx.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163jjdioehc.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163rxekotvi.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163osnfekpn.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163kbfdsvgj.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163tkloyboa.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163nprzebag.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163vpnvjhjq.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163sahfsnxz.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163bytmmzkw.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163tstrfbrx.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163vtummxim.html

npx vite build
来源：http://www.aibaodan.cn/163qlnjzppk.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163gjyruvue.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163wsbhqbth.html

================================================================================
来源：http://www.xuanzx.com/163nofrlrsi.html

统计汇总
来源：http://www.xuanzx.com/163sqkmkuxc.html

================================================================================
来源：http://www.sxryk.cn/163gmejustk.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163ejfufqkg.html

Python ......... 252
来源：http://www.sxryk.cn/163oaprtawt.html

PHP ............ 252
来源：http://www.sxryk.cn/163eoqruvpz.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163oylxijrg.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163ofvolnoi.html

Java ........... 212
来源：http://www.sxryk.cn/163ohoeztws.html

Go ............. 212
来源：http://www.sxryk.cn/163epdlmbpv.html

Ruby ........... 212
来源：http://www.sxryk.cn/163zhxhhykt.html

C# ............. 212
来源：http://www.aibaodan.cn/163tmawyvki.html

C .............. 30
来源：http://www.xuanzx.com/163sggtudvi.html

C++ ............ 30
来源：http://www.xuanzx.com/163ijshnvon.html

SQL ............ 90
来源：http://www.xuanzx.com/163flfqsheb.html

Bash ........... 80
来源：http://www.xuanzx.com/163qpbwfgqq.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163sfgqrxzj.html

Swift .......... 15
来源：http://www.aibaodan.cn/163rkbozuqu.html

Lua ............ 10
来源：http://www.aibaodan.cn/163xuscmlmy.html

Perl ........... 10
来源：http://www.aibaodan.cn/163nbhdshxp.html

Scala .......... 10
来源：http://www.sxryk.cn/163snsdjuro.html

------------------------------------
来源：http://www.xuanzx.com/163sldjstys.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163bndhmlfr.html

按章节统计：
来源：http://www.aibaodan.cn/163himuoiws.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163hlugyyqq.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ldtxilsk.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163zkvgvqal.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163cbssjphw.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163ldsfhuck.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163kyqjlbsu.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163reczgejs.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163ymbibtbv.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163cjaeltez.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163gzkwuvmx.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ussxczel.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163qhbhwhlb.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163pmoaolqb.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163qcecrgho.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163rmctltzp.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163notkyknz.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163qrscalcg.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163dipiieul.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163tqjyozko.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163xusjmehg.html


<!-- 参考信息 -->