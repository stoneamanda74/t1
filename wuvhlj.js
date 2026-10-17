外链999!wailian999！

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163hprbpyfi.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163uguqltpi.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ikfxxkbk.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163jztftdmo.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163nsyhlgez.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163jzbkpamq.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163tgimpehz.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163zkjiqqmz.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163vusyfexp.html

================================================================================
来源：http://www.xuanzx.com/163zgudyocg.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163bbbacwci.html

================================================================================
来源：http://www.xuanzx.com/163ujshogsq.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163dadznaaj.html

println("Hello")
来源：http://www.sxryk.cn/163jyeitrxh.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163wydqdwzu.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163xyqwjqcm.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163fcngjnja.html

"值: $b"
来源：http://www.sxryk.cn/163aftgqmom.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163annsnksl.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163tlgqlowu.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163yfjvdnqy.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163umhfehip.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163kmhtnrns.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163ptfmvaol.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163aksdfdeo.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163smcmufcg.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163junbwkey.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163kpxjkqog.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163nwbeaayz.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163iwrtwwnb.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163yincnjdn.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163pclpbxqu.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163acnkfbla.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163pvswifap.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163yrkxhsvs.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163xroqzsxr.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163bxkveyww.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163fabsipod.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163vagcbasb.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163zlsqrmqc.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163ipuvafaz.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163gutzqpui.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163cmkfdhhl.html

print("Hello")
来源：http://www.sxryk.cn/163onwsdvyh.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163owxolcpx.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163opgwsjue.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163rtjqxdfn.html

"值: \(b)"
来源：http://www.aibaodan.cn/163rglgdfbt.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163xfojwnqc.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163gqzfghdf.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163pgztlzoz.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163bdnbbact.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163sqvforlm.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163ftnsddxe.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163wqcsyfwx.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163uwtxojbb.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163doegojsg.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163zyuxdqvy.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163rccxigmy.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163dtosgxst.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163mdqyxnds.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163ridwxqqv.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163vjjrwcpg.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163ldplmdgx.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163jejmtvxt.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163klaeqtrs.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163ydroapzb.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163fnjboboc.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163dnlhlmil.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163izygypjj.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163ojcrwrhn.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163umwvfwsk.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163mwoccyyi.html

print("Hello")
来源：http://www.xuanzx.com/163myaklzzn.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163kgnbmldo.html

local a = 1
来源：http://www.sxryk.cn/163yvifxsfp.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163ugjtkejh.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163utmiyvlv.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163aikdzvka.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163ectmcngo.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163iefpbvbt.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163hexufjpz.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163yrbwxplx.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163dwazbllk.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163zlgkhbpk.html

"a" .. "b"
来源：http://www.sxryk.cn/163tmulyjbp.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163xxfzaerv.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163yvlrmjxo.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163zovqnvvl.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163bxnmwqxa.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163bhttofbr.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163vvopktxy.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163nnbgnbnw.html

print "Hello\n";
来源：http://www.aibaodan.cn/163rzakrjte.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163mdfrdfgq.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163fjrioran.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163dxptioax.html

"值: $a"
来源：http://www.xuanzx.com/163gqzsqksm.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163aekfqxro.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163crlsyopo.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163fccvhkzp.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163huhkduha.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163cmxxstus.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163wfuxidul.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163darawbre.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163sohtrqlf.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163xmketzbp.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163enpmsair.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163pkblpjvs.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163nplwelba.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163lcocodct.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163hqewrsbp.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163edbamonv.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163kdziosvd.html

println("Hello")
来源：http://www.sxryk.cn/163eszsihem.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163nbzfhjaf.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163qqcwqacd.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163kflvwnbl.html

s"值: $b"
来源：http://www.xuanzx.com/163bcaazpby.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163tiqihupx.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163dglbgedm.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163lqznhygg.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163rtkarpso.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163qadgyryd.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163ugwhhrvq.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163gfxkctso.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163mcqothkx.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163hmbxzhiq.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163bfxrkdep.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163zofctxgx.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163ngxwcwwn.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163eqpxsrkm.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163evwmhyhb.html

================================================================================
来源：http://www.aibaodan.cn/163xjiflqnt.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163stbrtbcs.html

================================================================================
来源：http://www.sxryk.cn/163njaimscp.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163vrtbdblz.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163rpstxqlh.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163uiwjbxdr.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163ybtaxzlm.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163rcwucikb.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163dpvofvbu.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163fbeqtkje.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163ccemhuqd.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163mdzilzci.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163hcfhslel.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163flfmvohh.html

{**a, **b}
来源：http://www.xuanzx.com/163srveuwax.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163ngwzhfxx.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163zbmibybn.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163mkwjmgtq.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163nccnrvoh.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163jsmzwydp.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163hcmrkmxl.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163nbxxwrde.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163bcxtqtvu.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163azurvqdl.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163yyowbyrt.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163vpsaityw.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163cijtdxyt.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163nyixznte.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163tjgdgsne.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163txdxysik.html

defaultdict(list)
来源：http://www.xuanzx.com/163cwtpginq.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163suixsqdp.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163yfpjtqfh.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163hkjxpeub.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163bnnwwnra.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163fyeddbit.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163yqymntcv.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163mqdooska.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163worhxbqs.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163bedzmjyv.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163pyrsjlzl.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163jrovwmju.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163sxliyqnd.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163fnqaxegn.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163qzmipjcx.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163qbrgdnyn.html

list(zip(*m))
来源：http://www.sxryk.cn/163ppjkifeo.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163rdhgxbdd.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163ukcnoxvb.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163hznrmsig.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163ruvgfdwc.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163wzkibvyy.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163knkddvtc.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163saqiconh.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163czbnryde.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163wqaetyyx.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163yiqflvab.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163blglvufy.html

UserId = int
来源：http://www.sxryk.cn/163muqypiyx.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163dyeytasf.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163jecwwifw.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163mbpwukwb.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163uweomqfa.html

[U31] Py：单测
来源：http://www.sxryk.cn/163womgdmrl.html

python -m pytest -q
来源：http://www.xuanzx.com/163vnbfckty.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163sckbuxfk.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163qazxamaj.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163udfpgcrf.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163xglegijp.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163rkkxvmvk.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163bzxkqywb.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163rnywisvc.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163wjwyrjwz.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163wxkfakhb.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163uavzyspi.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163dshvcimr.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163mztasqih.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163bzeqhupj.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163xpllerxm.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163ewauojit.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163bihptrjf.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163yoadhebe.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163rwcbmofh.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163pqjolnbs.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163kkwumhxh.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163rbsuqmnw.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163hrpokopi.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163ypplthar.html

namespace App\Http;
来源：http://www.aibaodan.cn/163zjxkauxe.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163fwcszbuj.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163fjynwkkb.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163zgpljvyw.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163pgfbldql.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163mrlnyntz.html

?string $name = null
来源：http://www.sxryk.cn/163exinengc.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163pwjndumy.html

int|string $id
来源：http://www.aibaodan.cn/163pzjlzipe.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163oppdfzfk.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163mjfrthgc.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163vfeqzlqq.html

public readonly string $name
来源：http://www.xuanzx.com/163ckfuumpl.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163lsvakasw.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163awbqjymf.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163peiykllm.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163bfvcjoov.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163hiosordc.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163jkslgytk.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163pbifxvcp.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163icwhsvaa.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163esqvuoxy.html

$obj?->method()
来源：http://www.sxryk.cn/163lpzqtaoi.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163yxgrreak.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163ylocmexy.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163zcbmlzqu.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163uqpxfecx.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163lrndmctf.html

"值: {$a}"
来源：http://www.aibaodan.cn/163xxcbznie.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163gplehvfb.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163zmfnjksz.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163gtuhxtqq.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ylkenalz.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163whrookcs.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163kxlvypif.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163duitoggr.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163lrygbbuu.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163khdedzhe.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163btbbgpdb.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163clpllvdj.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163uyhdmcgg.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163qumcgdkz.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163fvtcyjnj.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163aiognimv.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163gmsmhpcj.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163xxgaazap.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163amjcyswh.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163cognnvuo.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163esdpksze.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163lyogokpo.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163fpbtlkhc.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163rnxfscwb.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163xnixegrx.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163wwaxpdgw.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163rywtkdxx.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163osxssvlr.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163vojsghen.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163lajyjxvg.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163ycdqccgz.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163zhrhoxsj.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163coaummwx.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163vpigigcv.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163gsofukhu.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163mplpnqel.html

composer require psr/container
来源：http://www.aibaodan.cn/163bdelfvux.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163ogkpvbpm.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163nphnjnep.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163myjmbptc.html

composer require twig/twig
来源：http://www.sxryk.cn/163jwanadab.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163hpupmmjm.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163evvtvqio.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163acusxqjl.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163blyhqqfa.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163pbpcqxmz.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163cfotwejx.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163ychjnmpk.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163gayxlqkk.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163euppgtoz.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163xryyviqr.html


<!-- 参考信息 -->