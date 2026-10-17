外链999!wailian999！

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163mhwbhcui.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163aofvycyh.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163tnnkbfnn.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163ayqlvdkx.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163vnlzrbrd.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163rsigpags.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163qkdhbtkp.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163vidzykxb.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163bscfxkgp.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163wbnwbwsa.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163dplvscux.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163xmhcgrby.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163snfyyrza.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163vjsvaltv.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163enbwdtkn.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163vuhrcdrm.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163giefdyis.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163eudtwqjd.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163dkekyvmo.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163cdluandn.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163epmqcsre.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163ohtxjxop.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163lgfboina.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163forygnsd.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163aavtkmra.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163jtuihsed.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163krydoiir.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163nsxbacct.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163ezejhsgf.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163aohhcgvo.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163ynoznkaj.html

[S56] C++：optional
来源：http://www.xuanzx.com/163sjmhtcdz.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163tbfivcnv.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163abvberte.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163sybvpdlq.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163knuwncot.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163zlgipmqe.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163pczvqrgl.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163iwrdszrk.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163mnixdsjk.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163hnpnvrdt.html

================================================================================
来源：http://www.aibaodan.cn/163clifcqjl.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163scrtlzpd.html

================================================================================
来源：http://www.xuanzx.com/163qapxakbk.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163teycnsnm.html

println("Hello")
来源：http://www.xuanzx.com/163jncgbnzt.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163xwfjexst.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163fekeqnzp.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163fxaihbdr.html

"值: $b"
来源：http://www.aibaodan.cn/163xaghtgxi.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163nulatzbf.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163yrsyhqau.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163bjusvyom.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163mknvlekv.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163daotxpvl.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163gapunntt.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163uyhgyvtq.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163ezjrggwl.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163pbvyzweh.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163exdjyfpm.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163wrvjollw.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163alceogie.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163znxuquzj.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163vsacayyi.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163htmsfloj.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163neupguzn.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163sritzkve.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163ktzczxlr.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163rxnamnph.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163ypiaqpqy.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163ndsknvsn.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163nmndvmmx.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163pjgbgwrx.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163idyugmox.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163ayiepgau.html

print("Hello")
来源：http://www.xuanzx.com/163nqzfqmxo.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163xvzgicrx.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163nunvlnla.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163sdzrpxnp.html

"值: \(b)"
来源：http://www.aibaodan.cn/163bkxjozsy.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163zcuqgudb.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163fhwldgyy.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163elzfauvz.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163gogsxtkq.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163cnimfwkr.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163qlxtfamn.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163fmcilhzn.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163juqhvofe.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163mvgoqwjt.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163rvczkeuf.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163nlpwtwwx.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163bktxtzva.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163taudktmb.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163bgnvqaih.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163kmphuxlc.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163dbbpvzsx.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163ujhfsjdj.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163cseeypos.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163axzonexb.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163cetudifv.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163zhlpnlad.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163qcknufrm.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163ztyocvme.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163fvyixumc.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163oklungcv.html

print("Hello")
来源：http://www.aibaodan.cn/163bgidczwp.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163cjqyapsu.html

local a = 1
来源：http://www.xuanzx.com/163gjsjqpnz.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163mfvnmpuk.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163bwwkyfws.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163jcyugsjk.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163lmddrswj.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163swiljvrw.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163sadswkgq.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163jjkhdtoh.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163dtmmoxwy.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163akjbxtye.html

"a" .. "b"
来源：http://www.aibaodan.cn/163cvgipvmw.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163uzefttba.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163mufsnyuc.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163hedyrian.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163wtpmlrqu.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163nmfyfalv.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163itkdtlek.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163yifbwgdg.html

print "Hello\n";
来源：http://www.aibaodan.cn/163hoyzrzwk.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163mhijcrmo.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163zbrvjryd.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163yxpfswjj.html

"值: $a"
来源：http://www.sxryk.cn/163dsxmzubz.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163jqawuufh.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163auvmciwy.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163lodpdmic.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163rsmvpxra.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163vqhjrwmv.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163nomvezjb.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163dqwispax.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163vqpxgrnc.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163wedzffko.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163nmiqobcy.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163uxoxjklo.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163gclvdhaz.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163krvbhbel.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163bccxcovw.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163cljlyjyv.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163fvwmwqvq.html

println("Hello")
来源：http://www.aibaodan.cn/163qqxfustm.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163plwztvqk.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163bkwsnmni.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163sqynxumc.html

s"值: $b"
来源：http://www.xuanzx.com/163qdtoeapv.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163biwzhode.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163itolthih.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163kboiplcc.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163qrimahvt.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163twosmtxz.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163bmywpvca.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163ydipzbza.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163zwvignri.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163fqtajtzf.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163tuzllaqm.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163gptdovix.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163qvxvmzuz.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163leshjjia.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163lsejsljp.html

================================================================================
来源：http://www.aibaodan.cn/163hwaiflym.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163iunfbima.html

================================================================================
来源：http://www.aibaodan.cn/163hjyasnlx.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163izfbpfsf.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163swijlaxb.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163bwrokufe.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163zumzfrxy.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163cdbszayh.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163ggmwghet.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163fqjjapvc.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163jhrcllcf.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163gxtvckqe.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163salwxdjv.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163ugztfsdo.html

{**a, **b}
来源：http://www.aibaodan.cn/163onjimcwr.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163jyvfpysx.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163vylvqumk.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163geshkxhu.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163cpaphjqw.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163pfdettxo.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163qtaqgiix.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163ydiqzwrq.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163vkwvmqas.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163uydpihgy.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163xamewzuj.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163ewoksbpc.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163wfguwhui.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163eftyoqtk.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163mytrmkes.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163enyeuppn.html

defaultdict(list)
来源：http://www.sxryk.cn/163vpronnjc.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163ondvbziq.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163elkkznuq.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163ewseuaan.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163zgqskdbu.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163fddeioqw.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163lkdpujde.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163ydbxpujy.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163vlahkjcf.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163rfgjgkkw.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163wpqzjrec.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163zmsjrxzw.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163xowzcwxi.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163oruxiakx.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163brinestj.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163cfvqvdwh.html

list(zip(*m))
来源：http://www.aibaodan.cn/163grijksrk.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163mqhqeriv.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163ccgephup.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163rciawnce.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163ryoijpsx.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163ejxhsass.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163svrdpnzs.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163meljpsez.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163yxemlsgd.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163kqpmvpbw.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163anzvglwy.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163qdunomom.html

UserId = int
来源：http://www.xuanzx.com/163dtflhpkc.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163fzbyneeg.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163xptnqnrv.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163buvrxxid.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163tnezpfos.html

[U31] Py：单测
来源：http://www.xuanzx.com/163fybkufoi.html

python -m pytest -q
来源：http://www.sxryk.cn/163ocuftknx.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163ajozscac.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163wjnaxbii.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163aaxvaduj.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163mcsylkug.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163euaoblkt.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163rrmziaup.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163caqdrmej.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163qijqsyit.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163akefqidw.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163mkwwdkqb.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163qwsyedgx.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163emwmhcfd.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163syhztzsf.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163cvzzoftx.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163zuhgjlwh.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163sohmgbko.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163kuiucpji.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163tfzudmpr.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163oevprwiq.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163ddjiruzg.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163hvquzygj.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163tuxjyxoy.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163jvkaycin.html

namespace App\Http;
来源：http://www.aibaodan.cn/163bxhhpuwo.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163husyubzy.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163gyrlkkea.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163rvdppxlg.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163bwovwsty.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163brmimfcb.html

?string $name = null
来源：http://www.xuanzx.com/163vhdraaeb.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163pwoxeimn.html

int|string $id
来源：http://www.xuanzx.com/163gtkckcxv.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163vszabgih.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163mgvqwfkp.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163weypruzq.html

public readonly string $name
来源：http://www.sxryk.cn/163grlbupwt.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163uyjjecti.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163cjazvnuk.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163gzirwwhv.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163bsunocbr.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163zaqghmdf.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163upigkael.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163wtydgpuz.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163jzdktpuk.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163gubepwbf.html

$obj?->method()
来源：http://www.sxryk.cn/163pbieljaj.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163zpwpjydk.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163siypeyzn.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163ywouqlct.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163fwexvbqd.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163cjygmcnz.html

"值: {$a}"
来源：http://www.sxryk.cn/163xpoqhhcq.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163fmbqpnrh.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163ktcsmjms.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163zytxycql.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163pgvkejjy.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163uwrdffcj.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163emcpicfb.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163msqnltvx.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163tqvltdiv.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163abjgloav.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163xzkggazo.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163esmwxxai.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163mbbzxklt.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163xlrwpjyq.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163tyotzuob.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163xxfcwcnz.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163agxfnxpd.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163iajvmzxl.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163xpafzfqq.html


<!-- 参考信息 -->