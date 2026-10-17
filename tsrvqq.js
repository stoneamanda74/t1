外链999!wailian999！

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163pupjczpt.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163jfmbpmfc.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163aaimhazc.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163afpzoxas.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163niwqeujd.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163nsgsuzoq.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163ydhwxddb.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163pvdgaazj.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163rkbgjctc.html

================================================================================
来源：http://www.sxryk.cn/163vboetrhe.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163bqgdmjlz.html

================================================================================
来源：http://www.xuanzx.com/163fimpriur.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163tcvlggbw.html

println("Hello")
来源：http://www.aibaodan.cn/163bmlzndcw.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163ebyajcvs.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163xgcxjquu.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163atdksyiv.html

"值: $b"
来源：http://www.xuanzx.com/163hpqdipyq.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163syfywmut.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163qgycwejh.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163ajgofhdc.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163fuqvubxe.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163jxpmdstr.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163cjzabsys.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163btdmjvfn.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163rifmiqwr.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163brslkdtd.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163hquuzakb.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163fihssmsx.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163lswejjyq.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163bvbsictq.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163lhgssatv.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163hkesidmf.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163pgkhvtnn.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163kmvqmijc.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163czuzhpky.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163xsuruciq.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163rsffnbtn.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163hielkghg.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163qaprkreh.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163mvgplapu.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163qjbbudfu.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163vlsrlgdt.html

print("Hello")
来源：http://www.xuanzx.com/163vipkghkb.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163jehedzcn.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163dkvkrnps.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163ljltjwvr.html

"值: \(b)"
来源：http://www.aibaodan.cn/163zsijnbzl.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163tvszjkmw.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163liqlfjdy.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163zsyjtluk.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163gvnjksaj.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163dfyhdbzc.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163wtrsgwle.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163rwfpxkge.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163ezosvpmf.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163rnbgfiwm.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163fogzvmed.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163ekhxcjem.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163kieafyij.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163hlxffgil.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163frmwzlku.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163mqugjmnv.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163rgiujfxk.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163evqcodzi.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163diimugtp.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163obeofedu.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163zsfnurtj.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163obyemqlr.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163cnwewrwj.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163ovbsgepd.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163ltifwjia.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163mpwzhigb.html

print("Hello")
来源：http://www.xuanzx.com/163lvuetfsi.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163ppdmwnbl.html

local a = 1
来源：http://www.aibaodan.cn/163ylnxtwdg.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163xgctzotq.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163zcebhmll.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163flaoyrbc.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163fiqnwmqd.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163jprnoali.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163smahosxr.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163rnzhalsa.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163romxttbe.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163qrkokhfy.html

"a" .. "b"
来源：http://www.aibaodan.cn/163xvklenzo.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163orawrhty.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163qjkfiudd.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163zlcungel.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163rgxwfkia.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163qoeazdlc.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163ikgwmpfs.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163vsvlxgsw.html

print "Hello\n";
来源：http://www.xuanzx.com/163pytyfwgj.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163oymmhhxi.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163mekqqvqh.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163snrnrdpx.html

"值: $a"
来源：http://www.sxryk.cn/163himpsryy.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163inwlyaee.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163rwalltxi.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163wkcsyhjz.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163jftxamri.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163iluqausd.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163pzfmjean.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163mzgqinsq.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163malfabbg.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163mjupwzha.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163njufsscb.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163tsozwkvo.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163ltbhdokw.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163iyxoffis.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163xjsaytcy.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163jxvlffuq.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163ccgwypag.html

println("Hello")
来源：http://www.xuanzx.com/163tkvzauxx.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163ixwfjjhs.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163xgstjfnb.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163drygyrvr.html

s"值: $b"
来源：http://www.xuanzx.com/163rgnsfkpr.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163mguzjgdm.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163xlhnzxjm.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163qfpneqht.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163jfhtxvja.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163vrqvhmir.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163ektavcaf.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163zoeeyfod.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163qisjlwom.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163xprbkboj.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163dwseefda.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163nlmlqonj.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163vdqumvnt.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163iulltxvr.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163excvzatm.html

================================================================================
来源：http://www.aibaodan.cn/163rtcelulk.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163sdblryqk.html

================================================================================
来源：http://www.xuanzx.com/163dmmixhgv.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163kfdpipzj.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163jiekbtdh.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163xtsptmmz.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163vnxxfkcc.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163bhjghaqm.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163nznevwsi.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163xyivhxfj.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163vpdqotmg.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163oukqbsii.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163ddgyqzpr.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163zytojlmz.html

{**a, **b}
来源：http://www.aibaodan.cn/163alzglndl.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163fuhoeuww.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163vsfvgsmt.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163juxinece.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163tbpuodda.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163lnzpisaw.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163shdakfsf.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163ntsdmulg.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163eedtaedt.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163qhbilldb.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163ashiarbj.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163wiznnoht.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163aeelircb.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163nwjtijkw.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163siecoaky.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163pregesqs.html

defaultdict(list)
来源：http://www.sxryk.cn/163wfcnhtnh.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163uicalupv.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163howplznc.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163dtzuuold.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163xazvawqn.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163huxcrdcx.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163coxckkzb.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163xklanxwj.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163gxxesafc.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163wigbftnf.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163nqajwdkz.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163aqygftex.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163xsjyrjnt.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163emcgoewx.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163rbimasql.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163hpjssqxn.html

list(zip(*m))
来源：http://www.aibaodan.cn/163cshcesze.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163tyyohkzn.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163tlfrvtld.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163oguoqhqn.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163bwdzjuoz.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163kytpnwcb.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163vddaxvxt.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163shhzdpyy.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163mlxamtgw.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163kqvqopcr.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163kwwiijrs.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163mhbslwow.html

UserId = int
来源：http://www.sxryk.cn/163saliqbyp.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163ksxdtieg.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163uxsxysiy.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163ttgiokpp.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163mjucaads.html

[U31] Py：单测
来源：http://www.sxryk.cn/163mjqcsbmx.html

python -m pytest -q
来源：http://www.sxryk.cn/163vbmuylqn.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163gyuugind.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163rgnbmmxe.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163kjnacxnc.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163ttllcjqd.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163mbpzfkag.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163uqjowwiv.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163smkeclfu.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163yukwspwt.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163nmrwaash.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163baexisbc.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163utqujyzo.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163iirtfsqn.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163fbrahvob.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163wkfvkpah.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163czwrawor.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163fazwtvui.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163lzpbskjh.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163niezynct.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163umluvnma.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163taflegpc.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163cchdgotg.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163gueeimsa.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163rdvyngwq.html

namespace App\Http;
来源：http://www.sxryk.cn/163fjxgrvrq.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163ciumrvnw.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163wxgdjuyz.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163lvxpzxsq.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163fxwbzogt.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163bcrqmfgx.html

?string $name = null
来源：http://www.aibaodan.cn/163zpofyalu.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163tomrayfo.html

int|string $id
来源：http://www.sxryk.cn/163uuincttt.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163ienrddak.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163pgqftmmm.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163apndgjsz.html

public readonly string $name
来源：http://www.xuanzx.com/163mxjdbscw.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163ngqtdhql.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163miobmqtd.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163sdieaacv.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163miufismt.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163ogqdczdz.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163ejwcigqw.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163zwbrcntu.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163rsxkuvds.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163wgtkdgwn.html

$obj?->method()
来源：http://www.xuanzx.com/163axasazlv.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163pfytpoqv.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163njbaawsy.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163fewlzjik.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163fkkjzxcq.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163naadjplq.html

"值: {$a}"
来源：http://www.xuanzx.com/163piessjun.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163ovahaiit.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163vyadliva.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163uawkhzyj.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163rgsriegz.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163mzijnmev.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163sxenltqw.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163ndnwsbaz.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163tcnsxapx.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163comwmceo.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163uxhjdype.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163amiaavjv.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163zfgetvoz.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163gbpzgmox.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163rmpxccxo.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163pnwdqcnj.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163prqtantq.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163cvjtfizn.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163wthzjglu.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163zqclgivr.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163adhjmpur.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163uenxyoxw.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163gnsvfhdi.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163pofyhiyj.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163zrqlwybw.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163bqxgbtgu.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163fonfpiic.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163tssyzrhm.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163mjeglqds.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163ltwsepqf.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163qfntvfam.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163icvzyedf.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163ygefhzvm.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163dplohtnm.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163efygbznh.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163agitwaqu.html

composer require psr/container
来源：http://www.xuanzx.com/163gopbtkot.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163qhntzdzt.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163tzvqpehv.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163zwqrgdzv.html

composer require twig/twig
来源：http://www.sxryk.cn/163nifefgel.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163klbjmyqu.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163kyhqrajy.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163jmcxpmzi.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163tuosvcmo.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163rzytqwjt.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163idfloqnb.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163xyvbtmgs.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163utmcayuq.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163wuwrqlhj.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163utgfazpl.html


<!-- 参考信息 -->