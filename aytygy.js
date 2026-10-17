外链999!wailian999！

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163zwofewsp.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163daghcijr.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163rrhkthcp.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163mmaujzeb.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163njabfacf.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163sqwcrgvx.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163clszcbbd.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163peeskqkl.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163neeqndcq.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163totxjdhq.html

println("Hello")
来源：http://www.aibaodan.cn/163qktbspzt.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163hziwigjm.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163qcmzyzgq.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163yrquphud.html

s"值: $b"
来源：http://www.aibaodan.cn/163dlvqaduk.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163pgwemrqy.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163muldzvzj.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163tiuunpxd.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163tcyucjcg.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163clfsxuwm.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163nqbiboae.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163dvklxgot.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163isvhsdlh.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163vkuokpfb.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163yimatpff.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163nmbfhfpz.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163rywkpmnj.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163paaickzy.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163qcbvvfyg.html

================================================================================
来源：http://www.aibaodan.cn/163xjrudzbu.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163agqzkzsz.html

================================================================================
来源：http://www.sxryk.cn/163thgaeoov.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163ugbbroyu.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163cfiscbgj.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163kzcedhob.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163oxofhgyr.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163znsyqbdy.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163fksdzqun.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163atwhjwxw.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163ntyqmfyq.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163djngdemy.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163xiehcrcn.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163rfqoqotd.html

{**a, **b}
来源：http://www.xuanzx.com/163zmhtnhej.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163wtiisnef.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163yoikuypb.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163itztyoww.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163cvvibtii.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163tduthrdp.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163uhrgscwh.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163idnsamtc.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163pffrfovr.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163xojrjymh.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163rsbwgsbv.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163njqhlcmk.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163vmxirqzr.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163fjqaidml.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163kxyxvomy.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163hxmvlnyy.html

defaultdict(list)
来源：http://www.sxryk.cn/163pyhvyfqm.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163jvocmujj.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163qgkulamf.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163itkpezfb.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163linhywub.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163vpouaskv.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163xifdhasi.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163ojqmoirj.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163oezgxlsq.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163keoswrcx.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163wapffifg.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163ogpkofsz.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163ptcalpjb.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163cphqcmai.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163bfawerrz.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163vvhbykti.html

list(zip(*m))
来源：http://www.xuanzx.com/163jgddhopr.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163gtkjnqpr.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163popgonjb.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163trstqafr.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163tdrhwfus.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163fqyesemx.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163monyieib.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163liqsqied.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163xjlmhped.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163ivabxmre.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163dhzhwbls.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163cpjfesmo.html

UserId = int
来源：http://www.aibaodan.cn/163pjlkrnow.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163ofyutfjx.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163rqniwmuy.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163solzolvw.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163suzgyjgu.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163nuxrisxi.html

python -m pytest -q
来源：http://www.xuanzx.com/163jlnpnnsu.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163xsqsimjw.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163osagylcr.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163hxzrojcs.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163vwpgrbmi.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163arybzxik.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163knxknlwm.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163leghcepz.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163nzkhqgiu.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163qzucaxll.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163tjuulgob.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163tgqkgbeu.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163jwdygqfz.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163zvoolltw.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163aulpidbp.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163tlnovpsg.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163sydqwmtl.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163towgshio.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163eewjrtvr.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163wdjdhund.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163cswwhqyw.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163mrgebkiq.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163fcyzvnee.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163yzffdqgp.html

namespace App\Http;
来源：http://www.aibaodan.cn/163kyglxzoo.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163qdbmisti.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163rrtlsbtm.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163wtaxorfg.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163yspyhwqa.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163paucngsc.html

?string $name = null
来源：http://www.sxryk.cn/163bmsrvfqt.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163zpwszxnu.html

int|string $id
来源：http://www.aibaodan.cn/163gyatihjp.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163bhxignyp.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163kjyrbsnf.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163hgnlpjqz.html

public readonly string $name
来源：http://www.sxryk.cn/163madnmsuy.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163vgiyjrqu.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163tdcqyczm.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163nmubbrht.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163eiojeplx.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163sfxpjlgb.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163rvxpsase.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163hkwzrltv.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163rascwqwb.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163zticqvdo.html

$obj?->method()
来源：http://www.sxryk.cn/163dgroijuf.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163tsmmubnd.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163mucaqjlr.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163prpkywlo.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163worpzwmd.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163gugicwfk.html

"值: {$a}"
来源：http://www.aibaodan.cn/163zbbprskh.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163ecsebgup.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163ydrpoggr.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163rqohpzyy.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163vfyjikyx.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163blxpqgoc.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163nlutkhec.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163swjqiwln.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163zezwcpyb.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163idlgraho.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163eewgsnvy.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163zuejgybw.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163ueszyolg.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163ivcyzisu.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163etvqsqxs.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163ftfniyvb.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163znsrwjzm.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163azlkhrjw.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163lbjtqccq.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163wfqdxmkc.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163qrcfyqql.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163rqglglxl.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163kpywebcw.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163ctdwnurh.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163sdplstqb.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163jnaionvq.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163tcaajtkm.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163oaolyunr.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163pwyvrmml.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163qmqkaysj.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163wxswdpsr.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163cprpnpfj.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163fcrmrkqt.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163nrvhgmca.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163kvkjwzbf.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163whnpoygh.html

composer require psr/container
来源：http://www.sxryk.cn/163crktkswo.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163hqslyiei.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163icqatynl.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163tuabwyak.html

composer require twig/twig
来源：http://www.sxryk.cn/163tunvxfvf.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163qucfovga.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163jifdnrar.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163cbnxrjhi.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163eczhpcib.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163hldvagpg.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163zygkdpwn.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163bdrmqdeg.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163fcisrvwv.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163unqmfsmm.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163wgzxujxi.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163rntrdycl.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163mxhjabhx.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163mrvsunbr.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163tjiystyq.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163yrjnrbsu.html

a?.b?.c
来源：http://www.xuanzx.com/163jmeivjfo.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163hqdwfnye.html

a ?? b
来源：http://www.xuanzx.com/163jmjgebro.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163mteozrmj.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163rhxlrojo.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163xztnvuol.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163fyjpjote.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163homcmkjg.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163nwfvwefu.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163nabckoqj.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163mxwyjoor.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163bbbjygbb.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163mpdthemu.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163xmpwhtrw.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163zekitlix.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163lufehhww.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163rspudsuc.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163xqlgrfgf.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163zcfxluxt.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163tevqvbau.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163pbjkdacs.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163oyujxogz.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163fdombeve.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163ylkscegx.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163tijratnx.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163ioitgpkc.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163ghkmxmqk.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163oxtphywj.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163sttvhddy.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163tznxvbdp.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163qjufutax.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163jtqrkgej.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163pfchdxtu.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163xadzqgol.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163ytqeqmxh.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163mfruwgdr.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163rrnlsbwk.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163mvznpqxd.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163yuysaktq.html

[U105] JS：节流
来源：http://www.xuanzx.com/163gbpisetd.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163ykkazzng.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163vjbeplts.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163nqknaerj.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163vgmijwys.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163laspczei.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163hibtoebv.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163ucptlbox.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163zwuzbbga.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163jcqnrvum.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163jgsfqemk.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163hctvfmfn.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163xurzabqm.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163htxfhymx.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163pudpjfjh.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163efmsurwk.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163viapqzyq.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163aczwfmaq.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163bckhstvv.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163pcubhhfn.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163rihexwil.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163rycksakz.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163fdkzxyrd.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163lxojvxof.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163qyfvrzkk.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163fetqqbdi.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163khnromtf.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163zgyapdcj.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163ptajqyys.html

npx vite build
来源：http://www.xuanzx.com/163qwuhdpsy.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163qvlriwth.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163uraxcayw.html

================================================================================
来源：http://www.aibaodan.cn/163hxbaaysr.html

统计汇总
来源：http://www.sxryk.cn/163gefomznl.html

================================================================================
来源：http://www.aibaodan.cn/163akooaokm.html

按语言统计（条）：
来源：http://www.sxryk.cn/163ofgjlqef.html

Python ......... 252
来源：http://www.sxryk.cn/163gkoojfhq.html

PHP ............ 252
来源：http://www.aibaodan.cn/163pqvymtoe.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163bhzrzwsw.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163sgoheysx.html

Java ........... 212
来源：http://www.aibaodan.cn/163smpchwnm.html

Go ............. 212
来源：http://www.xuanzx.com/163jlmagqko.html

Ruby ........... 212
来源：http://www.xuanzx.com/163vakyngzg.html

C# ............. 212
来源：http://www.sxryk.cn/163voretvzf.html

C .............. 30
来源：http://www.aibaodan.cn/163qgjakvcy.html

C++ ............ 30
来源：http://www.aibaodan.cn/163erjbuqnn.html

SQL ............ 90
来源：http://www.sxryk.cn/163xoaphskb.html

Bash ........... 80
来源：http://www.sxryk.cn/163crotzaok.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163tpxcaawh.html

Swift .......... 15
来源：http://www.sxryk.cn/163vunvdriy.html

Lua ............ 10
来源：http://www.sxryk.cn/163sekmowzm.html

Perl ........... 10
来源：http://www.aibaodan.cn/163rwsqewbs.html

Scala .......... 10
来源：http://www.aibaodan.cn/163qelnebqg.html

------------------------------------
来源：http://www.sxryk.cn/163nikctitf.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163hqujluhy.html

按章节统计：
来源：http://www.sxryk.cn/163nnudzgkp.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163dfdfawjl.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163biuxmekm.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163hjysofka.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163vaotjaol.html


<!-- 参考信息 -->