外链999!wailian999！

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163ptmpcprv.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163ljhvugpo.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163iffsmuqf.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163fhzjuqkl.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163zeppfzca.html

print "Hello\n";
来源：http://www.xuanzx.com/163cdxqzexh.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163lhwvjvrs.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163jgtaniwt.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163poibwryt.html

"值: $a"
来源：http://www.aibaodan.cn/163tlrzcixp.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163bmhktsnp.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163kbxwheka.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163dyslukjf.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163gjaechyh.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163ebqfuzkl.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163dgrwjfbf.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163iuatzkew.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163xkjloffn.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163dajpgckm.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163zdpsaqrj.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163mxocbidc.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163txnzougb.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163smadgjmt.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163qvixjnyw.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163fjbzqpjt.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163xsbjtilx.html

println("Hello")
来源：http://www.sxryk.cn/163xqtocfvg.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163qtsixjjp.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163pzymdyvo.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163hrdzgfmp.html

s"值: $b"
来源：http://www.xuanzx.com/163zocdhpez.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163lbjabjkl.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163tvauiyel.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163imwrcpur.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163rxjvvudp.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163tnqzyvxg.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163sshcpijy.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163wbozjdah.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163ulrnowsw.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163yljhhjir.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163suzwtbrz.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163kdikimug.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163xxcnyrtz.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163yvdomumt.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163dbtqsydk.html

================================================================================
来源：http://www.aibaodan.cn/163swudrbkx.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163jbpbxdjj.html

================================================================================
来源：http://www.sxryk.cn/163nlqfnbqx.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163jzpozmla.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163nnvuvuzj.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163xqdtpyfw.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163rklpamax.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163pofqnhog.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163aiooibaf.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163adurgnec.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163xudgksvk.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163kixxvisp.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ztsvcrhr.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163wuudofby.html

{**a, **b}
来源：http://www.aibaodan.cn/163crgkldvq.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163gqvkxyaj.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163jpmduqdd.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163dmsmkfbc.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163ufleukcq.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163huqmsuqy.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163aijejnio.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163vxxuyowl.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163hrcklhlx.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163ehqnyxzj.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163zveqlldb.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163ifnvyzga.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163tootlrpg.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163godtdfka.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163wzvsqiab.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163dwsphcwc.html

defaultdict(list)
来源：http://www.sxryk.cn/163mlsxxkne.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163wtfntqpi.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163byyjihut.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163roqckqfy.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163uashhwcl.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163akxhijtp.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163nwtpdbhv.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163yoolpefx.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163bsxghqcz.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163vhxrkimu.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163brnexzmf.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163koagdbdy.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163idtmjsbm.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163tcnbeqva.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163hbrdiqfs.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163tclcxjdw.html

list(zip(*m))
来源：http://www.sxryk.cn/163xosfsrct.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163obajxobc.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163uucametl.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163wztxdhni.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163yqbzdepy.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163mqymqprx.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163txuxoydx.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163pxkzfyyt.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163mjrzkzka.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163vbbymqpj.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163zjpjiiiu.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163wrexsrls.html

UserId = int
来源：http://www.sxryk.cn/163abuaqxsc.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163hsxcpdwr.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163sasrzksh.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163uxignisg.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163zckoyadp.html

[U31] Py：单测
来源：http://www.xuanzx.com/163ecmbckea.html

python -m pytest -q
来源：http://www.sxryk.cn/163bdvisaux.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163mtqwwytp.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163xmdpfnbv.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163ckkgnleu.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163vtbjdkdq.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163ogriyrye.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163aawpquqn.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163mlwnrhnb.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163fxfvkidd.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163gnjatkdr.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163scbeycke.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163wuvickhf.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163nyagrvsx.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163hfmwajhi.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163lspaoznx.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163lqgtetmc.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163bmszuqmk.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163cyuoxten.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163jcgbwrvh.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163kzodywbh.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163bjxanfzj.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163wcsksfvq.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163yhquyjjl.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163xjunquvg.html

namespace App\Http;
来源：http://www.aibaodan.cn/163tljgolyq.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163ihbjqany.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163fudspbag.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163gvyrmcyr.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ixzwyocz.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163eparlufj.html

?string $name = null
来源：http://www.aibaodan.cn/163wvagrwko.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163qnlydrqn.html

int|string $id
来源：http://www.aibaodan.cn/163gktuutsr.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163odarpfpi.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163ezwlmuts.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163mpqkjnpg.html

public readonly string $name
来源：http://www.xuanzx.com/163uchilipc.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163xlbttxhq.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163dxzyuitt.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163fwgiljpn.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163sgwqfkvh.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163abrdfmto.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163ujyegyre.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163vjqrvcnz.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163egcyfqga.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163pcqhsiij.html

$obj?->method()
来源：http://www.aibaodan.cn/163qsfqecdy.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163vozjipln.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163nsgiiabo.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163owsjrfko.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163vmzlkrws.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163ghqylpbv.html

"值: {$a}"
来源：http://www.sxryk.cn/163eayiselq.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163sestsing.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163cczuheyd.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163zlaofsto.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163wsijasmh.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163bnylxrpm.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163ootfdald.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163izanfnds.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163czpizgag.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163gjhghbzq.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163etxhamvx.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163kaxnegry.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163yhqhinbk.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163dhiumerr.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163fbtcnouz.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163syhiimae.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163lfihuryp.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163fpmnzfev.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163fiawtzuc.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163ubmscfek.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163awawzzlu.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163szhwqcnv.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163zvxyadtr.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163hsffdxun.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163lbunvwdz.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163outwbzmj.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163urpizqnd.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163mjvsrylk.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163cyydtclv.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163qyaxfxqa.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163bitcqjtg.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163hhuodemf.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163qpqgamlt.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163gzgpfzit.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163fxogksjc.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163binbyxjo.html

composer require psr/container
来源：http://www.xuanzx.com/163edauvmrd.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163xceogyvn.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163iuzoppix.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163ttkfnotq.html

composer require twig/twig
来源：http://www.sxryk.cn/163bqqeekaw.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163defxrqzo.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163mgsuymbh.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163jdyypphs.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163cfcxicnr.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163zxyraoor.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163yridgtir.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163wvnfheth.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163xshwvvix.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163jjarrnnz.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163qqheomcw.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163prtyvgha.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163ufllawex.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163sxuvylrq.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163mxolipln.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163bkmzinee.html

a?.b?.c
来源：http://www.sxryk.cn/163eaktpqic.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163tconrcav.html

a ?? b
来源：http://www.xuanzx.com/163iyuzyvcr.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163hxdsrnvq.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163cbhltwqv.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163tgzebwpe.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163dpksalzy.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163mpuczmlx.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163urvwiuzw.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163dolptljx.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163wliumxpv.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163jsrolpoc.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163tfjuworp.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163dqrtmufz.html

structuredClone(obj)
来源：http://www.sxryk.cn/163bismqiiq.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163ggcyborw.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163epgfgeig.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163dbwdcrri.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163gxjwiaee.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163wshzxyln.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163vfisupvt.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163mfygqalt.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ltmqidzc.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163dnbshjlf.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163gfefjevd.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163sjpnptfw.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163xjiweqkn.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163pckcizcr.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163uldmiokp.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163ptdhnmne.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163juprfygl.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163ulurldxw.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163ijulbgsa.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163zqyizrky.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163ppyjzjtl.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163yymxesry.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163tcgsvnys.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163phnulxso.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163hhfluyjp.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163mdvculyz.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163sqondgoq.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163bvstwmwg.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163admkqvks.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163papcsqnr.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163cjuuymvn.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163vsquxopi.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163tkximkgd.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163cfnxowul.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163oldwnkfc.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163hobdhktz.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163jqgidstx.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163dsfqajpk.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163liftocyg.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163gmoyvgci.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163klcsoylk.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163vlytuuio.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163vtowdqsa.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163kspijcsb.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163njkzxjbe.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163pkymzadg.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163yhpqvirb.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163tmgkrtpf.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163ywgklysr.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163nkwqsvey.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163zsvdshvd.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163ylwbmmht.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163bzmowfvf.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163imsbxpgw.html

npx vite build
来源：http://www.sxryk.cn/163tfjbpopz.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163xdvroctl.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163bpeaoqks.html

================================================================================
来源：http://www.sxryk.cn/163ovulpbif.html

统计汇总
来源：http://www.aibaodan.cn/163nrajadhv.html

================================================================================
来源：http://www.xuanzx.com/163ogconfhi.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163dpjraeyv.html

Python ......... 252
来源：http://www.xuanzx.com/163tdfdnptf.html

PHP ............ 252
来源：http://www.aibaodan.cn/163vobakqsd.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163qyhidswi.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163fruqyuga.html

Java ........... 212
来源：http://www.xuanzx.com/163lcipapks.html

Go ............. 212
来源：http://www.sxryk.cn/163jcocwbxp.html

Ruby ........... 212
来源：http://www.sxryk.cn/163nsztzrux.html

C# ............. 212
来源：http://www.sxryk.cn/163ooinnfcu.html


<!-- 参考信息 -->