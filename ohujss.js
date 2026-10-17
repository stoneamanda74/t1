外链999!wailian999！

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163gwywbfri.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163zufswgxb.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163cnouvkub.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163hpttcqfc.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163pikoaaxr.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163uzfqtayw.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163jcaezvfy.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163aeyymwsb.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163ppmxiyyk.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163tzaoejac.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163atleeaqe.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163ldufmagm.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163atjiypzv.html

================================================================================
来源：http://www.sxryk.cn/163jitfmxol.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163liybykyg.html

================================================================================
来源：http://www.aibaodan.cn/163eguoytra.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163uikyaggo.html

println("Hello")
来源：http://www.aibaodan.cn/163ktwlfznl.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163ywxyggsl.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163sbjussbp.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163bohqrtul.html

"值: $b"
来源：http://www.xuanzx.com/163uugxrwuj.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163gunbzgkl.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163ugjspanc.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163yxyqgcax.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163jhcykspd.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163lvfwwrtj.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163xwlvrevr.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163pqhfgjif.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163tatyaspu.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163ilnfuyff.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163ffomsrwt.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163adrommds.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163ktpxondx.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163onbzknlg.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163vguizmje.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163shwhzscq.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163bbnomqga.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163mdozvwtx.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163btnowmik.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163niweiihg.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163bwvfnkwq.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163ddrecyrx.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163ebsrbbog.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163fhwygyxt.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163uvcgsgeq.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163yetpuphl.html

print("Hello")
来源：http://www.xuanzx.com/163djudfdjm.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163tuxloxio.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163sutnnxya.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163luwcajtt.html

"值: \(b)"
来源：http://www.sxryk.cn/163innzhgcl.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163jtarpzsa.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163lkzlcnkz.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163iesozzrx.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163inkyjfij.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163ztaljpxx.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163jtiipxtr.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163wygjgzqx.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163kqzgetro.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163imbtcezg.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163nfkdowzx.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163rnahfqhi.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163cebfqljm.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163ncsytahy.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163muvdngfr.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163tsesfzmh.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163veadhels.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163gnkvuhot.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163fusanrme.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163rkvynord.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163wnqxxdyv.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163pzduktbu.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163xpvvbquo.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163oxzqxeot.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163frofofwo.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163pdtixako.html

print("Hello")
来源：http://www.xuanzx.com/163qpcqjhgm.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163saqahfbk.html

local a = 1
来源：http://www.xuanzx.com/163dxhajdvx.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163hwgyjqwz.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163rcryvnuw.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163dpxjlewh.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163hvtpzbog.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163fzrgnply.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163voqiskse.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163zlslbmpb.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163mwqdomii.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163yozzqjmw.html

"a" .. "b"
来源：http://www.xuanzx.com/163yetvvjjy.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163itntspxa.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163lvssjpuo.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163gwobowte.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163paukeqfw.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163lezwneni.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163ovezdmoy.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163iksvuoaj.html

print "Hello\n";
来源：http://www.sxryk.cn/163eyyyrhvs.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163zdtsswhe.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163sroziisk.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163xtuizpuz.html

"值: $a"
来源：http://www.sxryk.cn/163ivpkajqf.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163anjwhgaq.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163blhyikco.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163smudphta.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163jienvnue.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163qlmvbknx.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163zvaqjaom.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163nhzvywdo.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163urfegquz.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163lddazmdr.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163qgnmefjp.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163pxtebxqo.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163ipzivbbl.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163ksldhylx.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163sbdwflyb.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163iypcgzvw.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163gszvpvuo.html

println("Hello")
来源：http://www.xuanzx.com/163awxgaifi.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163dxvssqus.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163afuqmygt.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163tovidmfs.html

s"值: $b"
来源：http://www.aibaodan.cn/163uzruzxgc.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163kpkumaxl.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163utscwjzr.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163cthyzebv.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163yfenpvto.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163kbawscrz.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163rlljikdu.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163thoxkocj.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163eiblymcb.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163urryjvwu.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163vsinxdvg.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163rwrtwnck.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163seyrpalh.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163tusugbhg.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163zttgwdwz.html

================================================================================
来源：http://www.aibaodan.cn/163wjtnrffo.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163iqxnfzta.html

================================================================================
来源：http://www.xuanzx.com/163jsxcavom.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163wgvbnekh.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163jsnlidwx.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163tywizgkw.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163yqjjdpsi.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163ulypnwgq.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163onwfcljq.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163eqawtuyq.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163hfbyfipb.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163yavjcshb.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163fszqngak.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163xaxbmzza.html

{**a, **b}
来源：http://www.aibaodan.cn/163tkmdqbon.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163qelkrnnt.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163vdxymizn.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163njhjlifu.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163rngaxbns.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163oheuyacy.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163ryfcnmmq.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163kenphpbm.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163ngrlkqce.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163xdtugwli.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163psvfezkg.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163uxtuzjjy.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163exwqrftz.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163caowtyss.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163xmlqiydg.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163eseapecp.html

defaultdict(list)
来源：http://www.xuanzx.com/163iipkfrnl.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163uhhlrlhv.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163bxburqdx.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163robxcavx.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163ldwltttv.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163gxihubmm.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163hvwrqoxs.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163pdnglldc.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163rpjefpbl.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163nyajlfbi.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163phevlqmv.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163nwjslqbi.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163wwnxavyp.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163hkknnnak.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163jffscegs.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163jgsnsdki.html

list(zip(*m))
来源：http://www.xuanzx.com/163dykdyygu.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163nvdborta.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163vugllxtn.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163yuytupdx.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163minucwpp.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163qxqugnnx.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163rmsuokqy.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163nmbexchg.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163jbbgmdwt.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163brhydted.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163xzffqgtr.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163kvszvhak.html

UserId = int
来源：http://www.sxryk.cn/163ttxrslnt.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163kzjfjicl.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163gkohkakj.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163jdgzaxlu.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163lssmbxql.html

[U31] Py：单测
来源：http://www.sxryk.cn/163zzhoavzu.html

python -m pytest -q
来源：http://www.sxryk.cn/163bjrpvhuh.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163bqnnbasy.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163lhlwpwae.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163qozhcocp.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163bckzcuwp.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163zhsbbjmr.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163iugfrlfq.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163gpdjrark.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163thhvvhyz.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163yhwmhclw.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163bmwkfsig.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163vkayalpd.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163prkabzvn.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163phqytjbr.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163myrfqvun.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163blmwvnhg.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163iuunlupr.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163eudgvnwe.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163hcumntky.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163nqjehwad.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163tnfrckmk.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163rdmnpmnq.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163nljbyiqw.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163hfsjvtwg.html

namespace App\Http;
来源：http://www.xuanzx.com/163oefmiola.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163xfjusqtn.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163fmlsgxhg.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163cnecaiks.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163jwgjeyqw.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163quzsdzsl.html

?string $name = null
来源：http://www.aibaodan.cn/163vifwelbm.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163pijuvvds.html

int|string $id
来源：http://www.aibaodan.cn/163thahdwls.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163eucjpgkq.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163kvazltiq.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163qojsoffm.html

public readonly string $name
来源：http://www.aibaodan.cn/163nqrcoufu.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163gvpuccwc.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163pcnbwhaq.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163yostvduw.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163hznpzoof.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163lnkqptug.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163wrzzxsfw.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163ugmiauuz.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163nnpnlssa.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163rrakipcy.html

$obj?->method()
来源：http://www.sxryk.cn/163zeqzcyth.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163uzomeilm.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163hgjpjvlz.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163xuvbvewe.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163hcbeythj.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163sgbandwi.html

"值: {$a}"
来源：http://www.aibaodan.cn/163tsfznvme.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163jjwlebom.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163uoeiwbci.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163xdhxdwlr.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163pjtzmphc.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163mxgmdpet.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163jctfgzww.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163cemsqkhp.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163dsoxfefe.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163zbzwjrhg.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163lnhvtvww.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163fxbhwtwp.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163ksiaqbsw.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163dhtqimpg.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163dxtzrfvg.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163bykstzle.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163nulalqeq.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163eeuprfyf.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163livfnmfc.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163ambhwlva.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163qtpyakpe.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163xepyvysn.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163xlwgsixs.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163ldsnhhtn.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163puekfwtk.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163fxxkcpmp.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163nbxcotbr.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163tdbwuhcy.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163squrlgwc.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163thukgjvf.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163aoedfdjp.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163xzzwapra.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163yekjjlzd.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163vnrmptnc.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163ljyysegr.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163grouwids.html

composer require psr/container
来源：http://www.xuanzx.com/163mhykeumr.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163xgodidvg.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163pvvqnexc.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163liwwtlfj.html

composer require twig/twig
来源：http://www.aibaodan.cn/163khhquszt.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163ncvzqpml.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163olwauxid.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163tjkcxdpb.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163niedpmre.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163xsuyodgw.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163ffsqxpja.html


<!-- 参考信息 -->