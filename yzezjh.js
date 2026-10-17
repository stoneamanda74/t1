外链999!wailian999！

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163subumemt.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163zejvvoso.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163gazzfcqb.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163qalhoeir.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163cwpnhxia.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163ncooxwye.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163yibxsnsj.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163fjlssygc.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163wweskbpg.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163eynfdnfx.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163jpnfsblt.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163uoepdhpx.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163utrlosvq.html

================================================================================
来源：http://www.sxryk.cn/163juxgkheq.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ynrlrdim.html

================================================================================
来源：http://www.xuanzx.com/163bkefubsw.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163nizhiwkl.html

println("Hello")
来源：http://www.xuanzx.com/163zncewmax.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163ikvivpvd.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163wyfbuyby.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163oqxvapxz.html

"值: $b"
来源：http://www.aibaodan.cn/163qdcrscjg.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163mpuhliuo.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163iqwhgsto.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163jdpupjos.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163miyycorb.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163eqlkdfsh.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163ppmdtwlu.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163bhtjmjri.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163gboaabog.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163ooznwqoo.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163bxvkrujn.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163sseitbsi.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163mqqxotyt.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163lhyjghag.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163odnuwswu.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163kmzhiceh.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163gsvuwrlt.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163gbldcchw.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163wqzejhzy.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163xklvdkih.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163kmdpfbgq.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163ruekfzyl.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163hluiehba.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163wcigjmgj.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163cerfojtb.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163kcczpfes.html

print("Hello")
来源：http://www.sxryk.cn/163vmmgiazl.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163zdvqnknr.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163ldotgfzs.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163odobesrd.html

"值: \(b)"
来源：http://www.sxryk.cn/163fcwtyxrv.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163ieaswrts.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163qqntsqbd.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163xdqrobdu.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163psblntzb.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163sndaqmpb.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163gdilyfwi.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163furgljoh.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163kgvkxgkn.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163lxjgxalk.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163epqcsqop.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163mqnnpbfc.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163slylxjhg.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163ncxyhtbs.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163fslsdbpr.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163zibddbej.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163bvjhdkdo.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163iesumqwb.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163cwostlli.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163nfrlwull.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163rfhjjylr.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163degdrrvp.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163vwagcbtk.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163qfhhwxpk.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163dvcukwfs.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163cezqnuyc.html

print("Hello")
来源：http://www.sxryk.cn/163oevacvue.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163ludwzyiz.html

local a = 1
来源：http://www.xuanzx.com/163lldkrwoy.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163kvckiqbo.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163fkrxbohv.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163gddiwzwv.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163amgnukdu.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163slqvsfdr.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163ztsxvaiy.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163dbideepz.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163wjsgzhje.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163mleauchq.html

"a" .. "b"
来源：http://www.xuanzx.com/163jnycjvdj.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163cofgwyqy.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163ahlqodxp.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163tmhjjmid.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163gxyunfjk.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163xjupxans.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163balwilon.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163oqllolfi.html

print "Hello\n";
来源：http://www.sxryk.cn/163mvbxsmif.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163abnlwxpk.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163bunspojc.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163pqzqbfnz.html

"值: $a"
来源：http://www.xuanzx.com/163yfcebfgc.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163gbxsdzpt.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163nduuwnmh.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163bjlwiuct.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163eiksuryk.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163unwwurka.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163qzmsqfzn.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163dtukbcka.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163gcpleqns.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163zwqlcwdm.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163ywbvyniw.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163ubjolqoe.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163etnlzinx.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163axzgrvae.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163hvsdtmbv.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163dmcsefla.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163mjxjlddg.html

println("Hello")
来源：http://www.aibaodan.cn/163valmlvrd.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163sdbzbfrf.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163pwsmkrpd.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163nvlprpep.html

s"值: $b"
来源：http://www.xuanzx.com/163obzboqjm.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163eiyguwlf.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163bugcgykk.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163owiqohvb.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163ikflqkgo.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163vfcpzhlx.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163btzlgkwa.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163xadiapoy.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163lplitbws.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163lytqmhcy.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163wrjkmbqx.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163lgfurait.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163viadzdnq.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163extkrhkx.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163ozvwbocb.html

================================================================================
来源：http://www.sxryk.cn/163tuakjgjm.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163knaoffdd.html

================================================================================
来源：http://www.aibaodan.cn/163vdqamalm.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163uqrynblj.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163zezpqgay.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163jeqzrsdg.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163mbmohstw.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163qnxazvzx.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163hlbhermw.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163agxjjwzr.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163vhccnkfk.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163tqhbhzpq.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ngdnbowv.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163uybyswyl.html

{**a, **b}
来源：http://www.sxryk.cn/163zvbicdod.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163vgcfnund.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163wrytenvf.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163jsmvotjr.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163czkbfmiv.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163fanirxbj.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163dpxobfyb.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163bqqoclso.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163swwjfvap.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163vaqbpzpk.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163danozlvc.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163vkkbovqi.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163mxxppjuo.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163myasirzr.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163hscnomgs.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163yeieanvg.html

defaultdict(list)
来源：http://www.xuanzx.com/163ztrkshmq.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163utwcajfk.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163lksclaco.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163cbekxpvy.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163opqnicqp.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163aksejsdo.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163svohdjpm.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163jpdekigf.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163vrzkoglu.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163uolnqieg.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163gnjdiyph.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163njgnrduh.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163hmxxecxn.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163xraixxdw.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163qywgrjoe.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163tlbatonl.html

list(zip(*m))
来源：http://www.sxryk.cn/163qndgrrrr.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163njvwmsca.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163qbyvefyn.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163zzhfzwbh.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163ctmzbyyp.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163jncuhiah.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163aitwutft.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163urcjesbf.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163yoxlwkxn.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163cxswegvz.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163efnyklsn.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163lchfezuh.html

UserId = int
来源：http://www.sxryk.cn/163cpwwpigi.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163wesjlkwe.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163xyqhxdum.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163lkkazgft.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163eryykoap.html

[U31] Py：单测
来源：http://www.sxryk.cn/163kqsvqlal.html

python -m pytest -q
来源：http://www.xuanzx.com/163lchlrlqr.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163nrcobbcf.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163npwamzyw.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163uhsoaxpq.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163aqbplylq.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163stncxxfm.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163uirapeki.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163petbldlr.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163urtverzr.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163enqtwgoy.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163akrhfikt.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163tlycftum.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163ybudmrrp.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163ugedbyqe.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163hsufpwja.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163yeyqkulg.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163iefmfhic.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163whdllgug.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163hxcixcgq.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163kvvhjvzo.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163djyyevsd.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163teuoefog.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163swrhrvad.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163rlmcwamo.html

namespace App\Http;
来源：http://www.aibaodan.cn/163xakmsxxv.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163mhljjyel.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163sapahhna.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163awhkqfml.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163imytlxdj.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163uupmboqs.html

?string $name = null
来源：http://www.xuanzx.com/163lleydbmh.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163vzttygmz.html

int|string $id
来源：http://www.sxryk.cn/163sxnmtexj.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163ridcudxa.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163ppyhngbp.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163ebqxfwce.html

public readonly string $name
来源：http://www.sxryk.cn/163pkhbxwff.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163reoteqwh.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163pgativue.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163ymwnwjij.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163llqzzvai.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163wtdaqmtk.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163rzigxngs.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163gdxvptjo.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163gpnkezst.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163cuzajnqy.html

$obj?->method()
来源：http://www.sxryk.cn/163jeuwjqob.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163dnswcsqp.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163mmdiuvzk.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163crxihcsm.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163xtbozrok.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163exjiucmi.html

"值: {$a}"
来源：http://www.xuanzx.com/163kfylbgrl.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163qsrzxsga.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163bgghtmmk.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163fpffqbri.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163wqlgrkim.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163gqpymped.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163etkqkeyb.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163ntkdyxnj.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163djbmbqjo.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163lclbsget.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163vvkrnoas.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163biybfnbn.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163fsqvpfzb.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163qlywxuhc.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163tclwwnke.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163zrncgmwn.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163trcefxos.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163mfqlwfzj.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163zcdcgiup.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163gfolgkiz.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163ofjhkvug.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163zdrwxeun.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163cthyfqaa.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163ujonigfo.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163ghxzgefl.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163tfxnkgkk.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163dyxpniau.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163qcxedwdc.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163dbnzospa.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163ocomttyf.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163nriaurhf.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163zugbsosq.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163ekzzrjny.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163slnchcea.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163kxaovpjt.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163bgbhxwzc.html

composer require psr/container
来源：http://www.aibaodan.cn/163cdardcmx.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163wexmrwzx.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163ojjarrsj.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163loqlupdk.html

composer require twig/twig
来源：http://www.sxryk.cn/163sdrfdtbx.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163fxsrnfyv.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163cyzwndti.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163khxvodrb.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163hwyfavjn.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163vcbodaoq.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163ajrvfniq.html


<!-- 参考信息 -->