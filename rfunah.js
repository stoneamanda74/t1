外链999!wailian999！

[S45] C++：lambda
来源：http://www.sxryk.cn/163ksjxdrhr.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163zxemnuwn.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163hzjmrgct.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163vhuikxyl.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163axraxrhy.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163oxdeitaq.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163sdiyekab.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163cwhmmpmw.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163ewejdfrh.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163inlsxpnv.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163ukepapov.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163avwqgsef.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163amoflblg.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163nsnqyloh.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163eomklhzm.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163dxzqrodw.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163fsqnrffs.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163tqecujdo.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163gwffuitz.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163nzpaqfjq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163bfnqqfph.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163pmzzolbj.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163rszgfirw.html

[S56] C++：optional
来源：http://www.xuanzx.com/163djhnvyhc.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163tiydzepg.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163kxfbddrl.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163mcpijbox.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163klufbmjv.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163pwdgovnk.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163yuzwgnoj.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163cgzqtyuc.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163lofqcdwk.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163lvlfcoiu.html

================================================================================
来源：http://www.sxryk.cn/163dwizdgil.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163hzhswvuk.html

================================================================================
来源：http://www.sxryk.cn/163ecokzood.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163upqrvgwm.html

println("Hello")
来源：http://www.sxryk.cn/163vjsrytue.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163snyvhmod.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163yegzxzhm.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163igozgpik.html

"值: $b"
来源：http://www.sxryk.cn/163jakwdfyy.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163zovmfkvz.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163qvvqxvtk.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163vhjvrppv.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163arskcqlw.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163kcrztvcx.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163bvkywxot.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163duvctraj.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163luffhufv.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163omvxweis.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163grryvcoo.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163vpzulohy.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163epozlnze.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163hriwkdgv.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163nxtrjjpn.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163ecgqzxtg.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163hfxcphzp.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163myjquege.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163hqmczvxh.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163aheenlcz.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163gwfyezte.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163wmaenfxm.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163motrifva.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163nnkodqjg.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163wkoaqyza.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163xwmnbtqk.html

print("Hello")
来源：http://www.sxryk.cn/163xqncrenq.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163ahfabuna.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163vqmnuapa.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163vtxhgpqg.html

"值: \(b)"
来源：http://www.aibaodan.cn/163cwisnywi.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163nlusthyz.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163ygeefmac.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163vpzpzovs.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163qmgvqyln.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163fxkanzuk.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163kxvjyldi.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163eeqcyubb.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163qrvqmhek.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163cyyyqgdy.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163pfiyptiq.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163ojrasfvd.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163srgkrrhk.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163kazelwft.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163kynqluvm.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163ofkgjywy.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163lwtattgu.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163ylvadeuf.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163sphzvhml.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163zinoqlqa.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163bxzhbfzc.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163plykrhmn.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163kpkoomjo.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163sbqbleyn.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163fxsomigh.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163iplegnkl.html

print("Hello")
来源：http://www.xuanzx.com/163netaukiz.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163rjjrdmmr.html

local a = 1
来源：http://www.aibaodan.cn/163erzfeebl.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163eyauwdtd.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163jiexebir.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163nputjfyt.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163cxestprp.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163bawgpiax.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163swroeqys.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163rvarsqfw.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163ybwoucey.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163sslbytfi.html

"a" .. "b"
来源：http://www.sxryk.cn/163yswkxvle.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163ssohuuat.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163tcalysmr.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163gvwnsyxr.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163gealpyjk.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163pwoqdtfw.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163jhvhaqaq.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163uhldaxty.html

print "Hello\n";
来源：http://www.xuanzx.com/163nmuqyjyu.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163hbvpfcqy.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163fsmuivzj.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163dtjbfhyq.html

"值: $a"
来源：http://www.xuanzx.com/163lcskyyrh.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163hhyzknqz.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163bwutupwj.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163ecrgekpm.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163fcfpyyzy.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163ctgvsjmp.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163uxwoxeoo.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163oyfotetp.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163hxepwpvu.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163jenvkoyh.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163asnbhxkw.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163vdcivatz.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163tkdrycwi.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163ghjtjzwp.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163stczbthb.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163wsdokchy.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163xnjqsxfv.html

println("Hello")
来源：http://www.sxryk.cn/163zehlaudy.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163uozqelwz.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163dgmlybcf.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163ztrfyzwc.html

s"值: $b"
来源：http://www.aibaodan.cn/163vlmqiamm.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163gngkwivl.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163poabsord.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163nuzqiene.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163ervxlczx.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163bmcdoitc.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163qhbvahlz.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163hjklwxka.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163shxdvlig.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163unvfrijs.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163golgujbr.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163ltpsgjld.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163zmussdcc.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163wxboedjo.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163gzrhxgfm.html

================================================================================
来源：http://www.aibaodan.cn/163ljbyhyzx.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163vekezwxs.html

================================================================================
来源：http://www.aibaodan.cn/163gssebcpf.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163dbkkzlbu.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163bbgrfimz.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163akasbvip.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163rdjjffxa.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163nhpzigqb.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163yfuvlznz.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163xdedhhcz.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163hqyodxvi.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163apkwzyyg.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163xuedjpba.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163thvylngr.html

{**a, **b}
来源：http://www.aibaodan.cn/163gohkdsru.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163rcsretpy.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163kwxjmgnm.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163osgkalpj.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163glcadxmi.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163exhkknly.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163rnclrvan.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163yjdrjqxm.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163grguqema.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163xfjdssqn.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163rnwgncak.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163xyzufcew.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163qsndwkij.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163fqzkrekl.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163mroxhzln.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163cdvhwbha.html

defaultdict(list)
来源：http://www.aibaodan.cn/163yftdamdf.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163sagxdnkr.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163ittdeszk.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163nriluipe.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163ixorvhca.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163ktiwonsp.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163pjfryeys.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163eckfqhrm.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163fsakcgfo.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163aydwonqf.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163vpakdqmn.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163abrnxoor.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163jparjeak.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163cbzbprad.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163xuypyleg.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163pepkmkfi.html

list(zip(*m))
来源：http://www.sxryk.cn/163wcxihhfu.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163qnryscnm.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163hnukdwdt.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163qwgcshva.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163xjcpmgua.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163vgtzlbdt.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163pdelalae.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163rfjwoyee.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163agvfgyan.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163mfuvooqt.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163pulzvnxx.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163vapqnuug.html

UserId = int
来源：http://www.sxryk.cn/163sfssvmaj.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163gbxdeiau.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163kjyntvih.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163pwbgfzpm.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163ndwffmgc.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163bvntzffa.html

python -m pytest -q
来源：http://www.xuanzx.com/163vuqnfgjj.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163idinnbhq.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163gakqgjiy.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163akgzjhow.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163waesjfpe.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163hizutvgk.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163gwauesda.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163wrnqoaqn.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163vsxgzvzz.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163eyvpxxyw.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163fqdtnbmw.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163apvgcftc.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163opiskqfq.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163foobbwwz.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163qaoylnga.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163tzfludjq.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163rtpjxmwb.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163wvkkampc.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163uujhveqj.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163ejbbznjk.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163saomklcd.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163drhdsudu.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163cfdulouy.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163hgcovmkc.html

namespace App\Http;
来源：http://www.aibaodan.cn/163shbcvhgr.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163kxiuooud.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163citmaydp.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163cgsuaqes.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163kaejuoon.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163ewicfkdb.html

?string $name = null
来源：http://www.sxryk.cn/163gvmwszyl.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163polhtsyi.html

int|string $id
来源：http://www.xuanzx.com/163gtfbpnfu.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163nwzdtbhz.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163mrdprheh.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163wjxlzdxd.html

public readonly string $name
来源：http://www.xuanzx.com/163bvjuwpti.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163iliqmlgj.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163dgwwtzda.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163qvbfrdtf.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163eduzvbvb.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163oqpsjioe.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163lmronhbk.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163uxxfjaje.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163riircnlk.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163mejlnrud.html

$obj?->method()
来源：http://www.aibaodan.cn/163fsgvqotn.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163eternvmx.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163uisnbtbn.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163vcklmpgz.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163jdyrwefo.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163lkojcsus.html

"值: {$a}"
来源：http://www.xuanzx.com/163syxvvelk.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163vlphikfz.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163daifrqsb.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163paljhgug.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163ajtlvnoe.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163omnqjggf.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163bguabmuu.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163kefaepaj.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163tndvfnqy.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163vzjosnix.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163mvjxeumm.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163ffgivjfe.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163gacuqwza.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163lvkhkfrl.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163ecatrzeu.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163orpxofwp.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163cnwpehyg.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163npeoosfj.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163qkfszuui.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163kdwcwsmd.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163gbkbtgjv.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163kxxzlapk.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163iqrhsoim.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163xmkfbpgt.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163krmuhunx.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163gtfwpfob.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163qnqcbqtn.html


<!-- 参考信息 -->