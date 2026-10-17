外链999!wailian999！

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163kpjmemdg.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163bhulrlkb.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163syarwhcj.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163rcygofjx.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163rowpdedf.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163rwpctmov.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163butxnmyl.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163vebqjkpg.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163xhlysfzu.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163bevdeatr.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163ygonhlao.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163envshnvb.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163xfuwngen.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163ueohzslz.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163egvlqzyb.html

print("Hello")
来源：http://www.sxryk.cn/163vrxfjwnf.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163ttwwdbbj.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163jjidlayz.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163cgdvpjmd.html

"值: \(b)"
来源：http://www.xuanzx.com/163guxdzivx.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163vseuxoym.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163spidrzel.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163ikacjblb.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163hdhdlgci.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163zrmffcmd.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163whbyuisk.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163atwziwlv.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163qupnborl.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163vnerlbrp.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163etettyix.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163cilkhtpf.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163dssbevld.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163upnxsnld.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163prhdxzsg.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163kehfedcp.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163gkcbvlui.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163obhdjjkb.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163njvspqhf.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163blvxrknt.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163fdvyoiyv.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163znooyjsk.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163arzrflmw.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163vgsmgcmq.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163tplxprdf.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163vvwnwvwf.html

print("Hello")
来源：http://www.xuanzx.com/163omjlpsvr.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163cuggnsvl.html

local a = 1
来源：http://www.sxryk.cn/163dvlceiqw.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163ffdagcpb.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163fmsgxgsk.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163cipouqte.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163hsjbmsmh.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163jivilkcs.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163gbyhjdgs.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163hvzghekd.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163uqexskyg.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163vcufknsd.html

"a" .. "b"
来源：http://www.aibaodan.cn/163glfiuyzy.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163pszqsrwe.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163bgnydfgu.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163iaiepahs.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163ymnsinnz.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163hkyxeykx.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163qtzjmcze.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163iqsdlkue.html

print "Hello\n";
来源：http://www.aibaodan.cn/163bslxdkjc.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163hlwburgo.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163jodqhtgx.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163qqpajnjf.html

"值: $a"
来源：http://www.aibaodan.cn/163bnefquys.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163tkpjjfjz.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163unneviis.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163izctrexr.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163kzdhkzoq.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163pnnflkwu.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163qoilwaua.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163ronluodq.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163keuzlmbl.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163qxdevcop.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163wuslwjcb.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163xmkpddlj.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163wlrdihnf.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163boyokvrv.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163vjffszam.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163seurrmul.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163qfdscniu.html

println("Hello")
来源：http://www.aibaodan.cn/163ecjvmkoc.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163gwjhvjex.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163wgillaew.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163figtrjpt.html

s"值: $b"
来源：http://www.sxryk.cn/163pvbjjrhk.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163qqoubort.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163ecjvdnsg.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163jgqmnreq.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163bbphndju.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163haitdkde.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163rysgnsgr.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163fszbdett.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163nchtyuee.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163nprhndno.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163rluwtwgj.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163liqfqkve.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163neqymqdy.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163pyeqgoid.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163jagmjurz.html

================================================================================
来源：http://www.aibaodan.cn/163tqttadsg.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163fsolgqqz.html

================================================================================
来源：http://www.sxryk.cn/163symdmdty.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163kgaiqoiu.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163xoqyqzhx.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163vmvwrvxy.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163jcuxzgjf.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163hcaeycdv.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163ztnbrnoy.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163mituoweb.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163knxjzgmh.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163tdplovlz.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163qdibujew.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163ccnukxau.html

{**a, **b}
来源：http://www.xuanzx.com/163rganjati.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163zqjavwij.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163ebnygsgu.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163xbtzpgxm.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163wgpdpfyd.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163jxidtffr.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163qvvdzmcr.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163aigsfadi.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163jkkqddbc.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163mqxrknuk.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163rgmaihus.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163cvjousyf.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163ocktrlbi.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163pqvneexu.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163fjybbmnu.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163wkzanngw.html

defaultdict(list)
来源：http://www.sxryk.cn/163pjvdlzxk.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163vpxmumbj.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163ykrwrlgz.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163vrdsuqzm.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163mcomckxs.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163sdwchybu.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163ipcdcwxw.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163vsakugut.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163qhbssydk.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163yuprfzqn.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163rtpzqvio.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163tzxggmmo.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163dauicflo.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163npjxguzo.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163vgcaflpu.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163lznmrnqh.html

list(zip(*m))
来源：http://www.aibaodan.cn/163ucclaptn.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163jchqsiwn.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163zdgdiitu.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163ynqfxdju.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163xcrztlgi.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163udhhkbhg.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163fgbwddhq.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163aoyxbhrq.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163bziexyts.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163ryknmnha.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163cagbjoov.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163hajcxnwl.html

UserId = int
来源：http://www.xuanzx.com/163jsdwchvc.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163varluths.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163rhwwzvsz.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163tawwwitx.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163gxalgspk.html

[U31] Py：单测
来源：http://www.sxryk.cn/163syodlapq.html

python -m pytest -q
来源：http://www.xuanzx.com/163cpuozjwc.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163nfkykkzg.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163dxrfonqk.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163acdbtfli.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163xdipbvpt.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163worzlslq.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163yoqvszlw.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163wugmmdti.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163oblyvqjd.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163hhxfxdqf.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163wvgpeatf.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163twawesrg.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163qshujxlp.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163klyeibtt.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163alfgjnqo.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163kbzbckvd.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163iiutdoqo.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163urnszhiy.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163aduaotkc.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163ekojpezf.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163qfkbnakc.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163aeledpas.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163affrnqan.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163czyickcv.html

namespace App\Http;
来源：http://www.aibaodan.cn/163ursoarfs.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163gmaaforg.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163ljcicyqf.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163wbsuzlsn.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163tkqorehy.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163cjvbakke.html

?string $name = null
来源：http://www.aibaodan.cn/163wqrtdvfp.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163pwygkece.html

int|string $id
来源：http://www.aibaodan.cn/163lydvatud.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163tbrybtec.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163tovicybu.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163zbdhkbzz.html

public readonly string $name
来源：http://www.xuanzx.com/163sbgidmrp.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163qxjitgii.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163nllvzsdl.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163epopnivu.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163xopdawxa.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163qpxiywxj.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163ltkrsqnh.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163fkjhviry.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163ckcubuxv.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163rfuowgmk.html

$obj?->method()
来源：http://www.xuanzx.com/163ydukbwhu.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163vaeqarxt.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163jfhsqkwd.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163qjauvyzk.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163smlikrbq.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163rixeefwj.html

"值: {$a}"
来源：http://www.sxryk.cn/163sjqfyfpl.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163yvlmfbjw.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163orhnacub.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163oaqouxzk.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163pvgjmigi.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163xzutcvbg.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163ktnwijla.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163nycsnvkn.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163qrxudebz.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163sqolqhbh.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163ooryrokv.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163pcxnlhmj.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163mxvujdxf.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163etljfdjq.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163uidbmpxk.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163mpwbynmz.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163wdserftc.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163pyfwanrd.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163uefsnwgx.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163komumzlp.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163wcaatuds.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163ttrohokg.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163infifpkz.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163isromppp.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163ljiwhpta.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163yrprmbzd.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163budnojcy.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163gctgqawn.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163wawczads.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163hplbhijd.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163czqvtksf.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163qrcogjvv.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163pepxwwio.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163reldhjag.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163pqjyjjwv.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163qcxbecvo.html

composer require psr/container
来源：http://www.sxryk.cn/163tbhpyccc.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163fikawqjz.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163qjypbjvo.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163cxxiucma.html

composer require twig/twig
来源：http://www.aibaodan.cn/163xenpysta.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163fdddxkkj.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163cawayovq.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163jubcevgl.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163xodymsrm.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163buradqiw.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163nnfrmkrx.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163dhqryzfg.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163ktywigut.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163jkymdkzi.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163erscanan.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163xyzllyim.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163pcrihrpt.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163qlmpialy.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163gaogpxhk.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163ihnooapw.html

a?.b?.c
来源：http://www.sxryk.cn/163hzyeqtxa.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163rxfrmgrf.html

a ?? b
来源：http://www.aibaodan.cn/163nwkhwcln.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163uzdzkfep.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163oiebfkvc.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163nzjelnhs.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163yqvbdqrr.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163upfsclwj.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163slhyweaf.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163jldunqyw.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163sleadkgs.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163zsobvooi.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163mquojvyy.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163oxrgmhlk.html

structuredClone(obj)
来源：http://www.sxryk.cn/163mdutoqhe.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163oxxeburu.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163cbskawbk.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163rpcwgjrp.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163pyuzmsbc.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163lhejtjtl.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163eoyrkayk.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163cvsvlfgl.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163mhwwpkca.html


<!-- 参考信息 -->