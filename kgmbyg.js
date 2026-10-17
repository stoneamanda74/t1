外链999!wailian999！

[S45] C++：lambda
来源：http://www.xuanzx.com/163dbuvhytf.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163kmvjvnxf.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163hmsareru.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163wusjrzfw.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163nzuoisvx.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163auyubkus.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163rujijdud.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163cfgfawzy.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163xtmdzibf.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163gvnfgjdy.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163ggyajhgu.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163dwivqchp.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163dgtczzou.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163cwchrdbo.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163xtobegba.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163jzkbcnrd.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163eigrgxos.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163ockudpgv.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163deqdxiog.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163oklxtici.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163dssxzvmb.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163nmkkkjea.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163vaeticwz.html

[S56] C++：optional
来源：http://www.sxryk.cn/163ohthlavy.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ypbuajis.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163pzahsiat.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163onjusbav.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163nkjcdiot.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163pvpomimn.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163vrafuyee.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163fzrdnerg.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163zitayxxb.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163suknlzoy.html

================================================================================
来源：http://www.sxryk.cn/163krvhuljq.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163jdtpohqe.html

================================================================================
来源：http://www.sxryk.cn/163klmrdqwn.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163qzzewjbb.html

println("Hello")
来源：http://www.aibaodan.cn/163fvbitwaw.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163fxbincfq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163lirlucvj.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163nqhwomof.html

"值: $b"
来源：http://www.xuanzx.com/163ervctvri.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163eisxzvwq.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163qpfrpbbe.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163lqramjar.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163zxzhcjfx.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163coaxavzp.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163sfrppeyz.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163fqrsqsyu.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163gcuepqot.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163dvauakex.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163meoaozrb.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163kwqhrsmz.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163tocedtkw.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163tfnkeemb.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163civvbgse.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163ciorgqdr.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163bmmbwhga.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163iywlacep.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163dxbyapgf.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163xlijzuwb.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163kqclnunj.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163ucbovxvq.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163ndswwvyy.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163mwiblnxy.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163dpmjenml.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163aqxoxziz.html

print("Hello")
来源：http://www.sxryk.cn/163ixamhlaj.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163mcnnefmv.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163ediouvvd.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163eeemtemo.html

"值: \(b)"
来源：http://www.aibaodan.cn/163bstghoio.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163vbfcpobh.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163qwswmpbp.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163shxeypdn.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163phspfidm.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163sjahkcuk.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163cvvkuexi.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163mhbzktsq.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163ipszocxo.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163taknonda.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163jjzxdvey.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163samxddhy.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163lzuaqyml.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163misgzlzo.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163hubadshi.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163ingjwqlm.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163glixhkvh.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163dzxfumxd.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163wiorvjvi.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163djwocewe.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163qbyrkdjk.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163iysfmvvf.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163ydzsbdvq.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163akhqoqeg.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163rctxyitr.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163lobabsib.html

print("Hello")
来源：http://www.sxryk.cn/163nqlezhoi.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163wimvxkzv.html

local a = 1
来源：http://www.sxryk.cn/163zkhizntn.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163nibxchih.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163igrjusnx.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163kgaqjuxk.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163dwtnqmfs.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163vdiqwoiq.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163rmzcvrbt.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163zfcsizxu.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163wzktntiz.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163qtslbypw.html

"a" .. "b"
来源：http://www.sxryk.cn/163zrifpbwl.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163yxezcrju.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163smxltmvd.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163ncrrncxe.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163pqmovthu.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163faipihrr.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163vvzpnsix.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163iodbtmee.html

print "Hello\n";
来源：http://www.sxryk.cn/163rijdjgkl.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163ntrbryss.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163vgsjjoph.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163avabcigi.html

"值: $a"
来源：http://www.sxryk.cn/163aicrxync.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163tgondhia.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163wtqjaqdo.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163cjkszbnb.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163nyfkignb.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163hqqunist.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163jxwetdlv.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163owzfbgas.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163rlbeptai.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163tmvxpiij.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163egwchsjs.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163zwotoffs.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163scunocbp.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163cjqkgmbd.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163wayayypx.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163pgfauhto.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163kosmsawl.html

println("Hello")
来源：http://www.aibaodan.cn/163mmdiqccz.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163ghahcjxm.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163vlnahopq.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163dzozoeig.html

s"值: $b"
来源：http://www.xuanzx.com/163xvkjublq.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163admqlnvf.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163iixjhxcf.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163vwgflsib.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163laqrihna.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163wnqeumhd.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163ngwsueii.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163dhqqzbfp.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163jnfsyoom.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163omlpqmua.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163oitaxtgh.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163mmeeqmgs.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163rxumwfmp.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163yqyizczz.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163blcfihrk.html

================================================================================
来源：http://www.sxryk.cn/163jqudgycw.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163vzvxziet.html

================================================================================
来源：http://www.sxryk.cn/163umaxyshu.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163dhnxxqet.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163dhorxvtm.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163qhlrfcgk.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163nttgaakv.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163rkzajzkb.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163yumfzvkd.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163fmfddjte.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163ginqccue.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163rmwaajch.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163jimwiexi.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163tymcyudj.html

{**a, **b}
来源：http://www.sxryk.cn/163hdbovprm.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163whhndvpu.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163fbedxmfd.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163pxdhnczj.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163strfjact.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163mllkoles.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163gbreegeu.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163bhbbbosu.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163qahsgdfy.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163jjysedfu.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163iaudyjrt.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163pokcrwav.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163qgelmcph.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163ulsisgbp.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163akrfxkyc.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163ekrzfjua.html

defaultdict(list)
来源：http://www.aibaodan.cn/163vuffxgsp.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163hpaymssl.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163wkqambam.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163xwpamwkx.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163kzsmlsmm.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163pwrnufnw.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163drermwpg.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163refxnyqb.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163qlqyoqdk.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163gacyefwk.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163bfmgxayz.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163fnwhigsj.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163aspuzpvn.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163oaywxpoo.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163uelrkcqb.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163dbwevajs.html

list(zip(*m))
来源：http://www.xuanzx.com/163tfwjgokh.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163mzecqkhn.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163deohwdhm.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163nhmrfmqv.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163iwucrxvk.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163yxvtzbsu.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163shwcyayb.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163cjgedwij.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163qvtmogrp.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163cdlbhbxh.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163ntatfbmq.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163xagwpxjr.html

UserId = int
来源：http://www.sxryk.cn/163ogbkkvfy.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163yodypmjr.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163nttrvbcr.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163ehktokdj.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163lixcsfbx.html

[U31] Py：单测
来源：http://www.xuanzx.com/163iiqlwoar.html

python -m pytest -q
来源：http://www.aibaodan.cn/163lkoalhkf.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163blpuhwgk.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163xmpdpsfi.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163ogvekcab.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163pberzegs.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163bltzvpkv.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163lewbxctn.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163zyzdgfxw.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163oputulyj.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163kotgonnq.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163vbhslgrd.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163ravcibqz.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163fvhemlhs.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163qtfryvts.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163dfumfbpk.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163mfixsrwt.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163dpnjijoa.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163qksbopvw.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163izgtxkwv.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163okjnquuy.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163qovengue.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163nmogkljo.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163spzdadlw.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163zgksqnbu.html

namespace App\Http;
来源：http://www.xuanzx.com/163ridzgavi.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163dsxiskjz.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163iiffpkox.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163exuvwyiy.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163viyeusys.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163irrfgizu.html

?string $name = null
来源：http://www.xuanzx.com/163mxlyfhkr.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163wzzsfwmt.html

int|string $id
来源：http://www.sxryk.cn/163cvnfolan.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163nipodhkl.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163trtjetdb.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163ezaiqdah.html

public readonly string $name
来源：http://www.sxryk.cn/163mijrpnhz.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163oshufoni.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163xbgavdum.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163sqxygcrx.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163juqwckmp.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163qzvnjrkc.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163jyxxkitk.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163mzbsdluj.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163fxsyqgis.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163wjiukowt.html

$obj?->method()
来源：http://www.aibaodan.cn/163ldosumze.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163xophrqre.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163bkvaulys.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163hkklkdms.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163vzszcthw.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163wcocayis.html

"值: {$a}"
来源：http://www.xuanzx.com/163xikgrdex.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163vxakirxn.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163pxqayukc.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163crkrivrp.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163bolhqnlv.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163scahmkok.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163tsctlvcy.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163dluqibba.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163cmicrtvy.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163yjhiqfgw.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163llvplgbn.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163chmussjp.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163mhrynybw.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163ntfnzwjw.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163zrapauis.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163qltiirwn.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163uddnfqkz.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163ssfwewjn.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163sqpttkmd.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163uxxhmmjz.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163vrvrnyqg.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163kanradps.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163vtnuqyji.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163heonyriy.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163biwzemmj.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163qfvbyomq.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163tlhtfcux.html


<!-- 参考信息 -->