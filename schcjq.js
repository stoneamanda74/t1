外链999!wailian999！

[S37] C++：set
来源：http://www.xuanzx.com/163gfzstjmq.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163bsrcpdnn.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163jrjhpupi.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163adrzcxjq.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163squqvoqk.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163suattqil.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163eyyflptd.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163tmsibyma.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163ueudcpjs.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163bfsoonwe.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163ylruoazv.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163cscnantk.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163aqkqalvh.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163wdvwbnjk.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163rpmrwxjw.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163ytgwujlp.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163ohmifdkv.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163tmjagddl.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163pblrrdir.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163gyriqcap.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163lztdozlr.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163zqjhjrmp.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163vpzqrnjm.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163vorbjgxq.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163brazvufl.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163slwrcswi.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163nmuyuipz.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163gusdurhh.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163nfwjdfuu.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163ixbwfzwl.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163iynnjglk.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163txaebmds.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163gpkrnklz.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163wsrpozmn.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163lphlcgoq.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163drnkvaby.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163hqefdpyl.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163fhpzjmrl.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163xytwiqxz.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163aowejcmp.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163fbxvhwxj.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163qjuahdil.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163kfksukiw.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163kydmuvdc.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163peqoqhts.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163ceefmksg.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163ifcjynbe.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163mvjnaupd.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163rylfbnih.html

================================================================================
来源：http://www.sxryk.cn/163gybqrtga.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163fmbuknme.html

================================================================================
来源：http://www.aibaodan.cn/163gayevemh.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163tuulngre.html

println("Hello")
来源：http://www.aibaodan.cn/163fajaxxhc.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163dcauanzv.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163qqqjgtlu.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163ezknzndx.html

"值: $b"
来源：http://www.aibaodan.cn/163cpfxqwbn.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163wcahielj.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163xekiqnin.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163tpzhqcje.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163tbdeudeq.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163dhzquibn.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163vxrkpoiq.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163ifvrcgfh.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163bsrgdnnz.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163qxqceocu.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163xctlbbdw.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163yeiwkejp.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163kmdojpkn.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163wsacwatx.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163amxougnk.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163apdxfxnp.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163ryfptvjs.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163ccahexvq.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163ajlnryif.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163uahirkxk.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163hesxfdxa.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163bldtmtqm.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163hjwlepyi.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163fzyekexl.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163ibxgvbbn.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163xthfrnks.html

print("Hello")
来源：http://www.sxryk.cn/163kuhsavah.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163qropyboe.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163psvgqavs.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163fxgbgscy.html

"值: \(b)"
来源：http://www.xuanzx.com/163jpbwldnw.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163xwusdtpj.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163komgvghy.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163lxbcktpv.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163moplsumj.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163wxphgvpo.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163htapwhaa.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163jqtpgzap.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163ahwucycm.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163qmjiunxp.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163qsrwhqso.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163fetafhuu.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163dsneigqy.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163vrovqwcw.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163hblbhcvu.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163tuenqgou.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163aqsqmjmp.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163jbjqczni.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163ntoqfkvi.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163ksneezdx.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163maswklry.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163qomsltkv.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163qoylkdif.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163rmffhlvk.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163ooavjksz.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163qvfhiesd.html

print("Hello")
来源：http://www.aibaodan.cn/163cwmzuzbs.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163xwdqwdjb.html

local a = 1
来源：http://www.sxryk.cn/163egmgfxbk.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163yvrtvsqp.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163ylavgnfj.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163rtpsdkvo.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163cwdkvajr.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163cyddjffe.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163wohrqgdh.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163zswxjtxs.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163sirfmigu.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163almiwxpn.html

"a" .. "b"
来源：http://www.aibaodan.cn/163raaqeput.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163gzcworgo.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163lpypdahp.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163trafxqjk.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163oczeegta.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163zwrhntub.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163bantipjw.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163asyzvbuq.html

print "Hello\n";
来源：http://www.xuanzx.com/163oqfoskvb.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163bltukdiv.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163zuavhabl.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163irtsdork.html

"值: $a"
来源：http://www.xuanzx.com/163uxcvpcht.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163oyalmhfv.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163bstjniau.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163ewhkpycf.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163ovvfntaz.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163ylvnrlrb.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163ctyfwxbw.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163acuafuzs.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163olzadmmg.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163faptsqjf.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163kkkntfdq.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163efzwvlfh.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163ffluhcws.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163bewwhrxw.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163mrysaibi.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163uwtuhzza.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163rorkeush.html

println("Hello")
来源：http://www.xuanzx.com/163yikdmfoq.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163qwjqsixx.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163foprrpfu.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163mwhtjtru.html

s"值: $b"
来源：http://www.aibaodan.cn/163spjoazps.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163owoltkph.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163hoviuutq.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163ifdmhpww.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163rzjgbjbm.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163dvjxtshv.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163nfctjnfr.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163spgolxjy.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163zrdjtbqf.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163lfkcjjoi.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163kmtqkwgg.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163utempuzq.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163xnvkoizd.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163vkbyemsx.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163eobfnggk.html

================================================================================
来源：http://www.xuanzx.com/163qmvcdwii.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163fdkdoiyf.html

================================================================================
来源：http://www.xuanzx.com/163lgdmnahs.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163wjehhesb.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163xidxqnfo.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163yviuqcmk.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163jvoxsufc.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163ifokyahs.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163pblytsun.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163yjjmntbs.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163ggueozcl.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163gsndjhym.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163efapncmy.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163gdqlzico.html

{**a, **b}
来源：http://www.xuanzx.com/163ezwhfijy.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163vpqrsacy.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163mdgkiagr.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163nhprvxqe.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163wyurzadt.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163pwvaotbt.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163nnbmanrt.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163mhvkanar.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163wsnqktoo.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163iaztfazy.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163kutjacpg.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163hqoampwe.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163utqrtjdf.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163owxxmvml.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163lxlrmtbp.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163ngchhokp.html

defaultdict(list)
来源：http://www.sxryk.cn/163btpzvjfp.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163trcmkovh.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163ykjppail.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163rryxqvvp.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163duzomqvx.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163buikvuzd.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163jmqmiucw.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163rxqkqtir.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163tsduncut.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163vtaahiix.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163nzbnwtix.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163dpuzegac.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163sihmxmys.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163qifryuuq.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163vdbawsvv.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163yywwputj.html

list(zip(*m))
来源：http://www.aibaodan.cn/163awvbteew.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163rrdxhxng.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163nhvcooxy.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163btibklpk.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163yzxmtwus.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163unbuyhig.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163qcjhwnfn.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163soucluoj.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163bryzspjf.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163ewzmayff.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163jdqvndqw.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163aikzbfhi.html

UserId = int
来源：http://www.xuanzx.com/163tewkxvyq.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163kcieoedz.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163oznlfrin.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163abteeqyv.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163hdedxecf.html

[U31] Py：单测
来源：http://www.sxryk.cn/163kruaildy.html

python -m pytest -q
来源：http://www.sxryk.cn/163jqiwungo.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163sfycbhhq.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163esyhthqb.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163ilprkxyl.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163twpjfsud.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163zcilwene.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163tngsvijt.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163fgmilzlx.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163wlvmvwey.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163lriksyxe.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163qkqbwlrx.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163vwvyiqat.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163slpziuyw.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163zbwkwbcu.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163gbzmubkl.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163desswnrg.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163igzhhnem.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163fewcvvpd.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163lhtsvdgu.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163udjtzyjj.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163ytxvjucq.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163znaaokte.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163ypatrswo.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163rxxljrfe.html

namespace App\Http;
来源：http://www.xuanzx.com/163lhnunbzk.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163qseqdqcn.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163dtpocqfk.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163ufvkejud.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163tgwuaqfe.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163zvxcqdef.html

?string $name = null
来源：http://www.sxryk.cn/163sbybebdj.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163utqbdzwa.html

int|string $id
来源：http://www.sxryk.cn/163gbalmdid.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163euzlikgo.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163kztkdvkt.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163sykqixse.html

public readonly string $name
来源：http://www.xuanzx.com/163cttcmaff.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163kmerybpz.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163dfurwhwr.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163tktaxblu.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163aqjoriwm.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163nekpykic.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163irugwpav.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163caamghso.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163aqimreqt.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163odbktafh.html

$obj?->method()
来源：http://www.aibaodan.cn/163nsrhrlfc.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163exrkkqcp.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163aczdwajc.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163dnxdklfn.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163iexkwzuz.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163ymsoowcn.html

"值: {$a}"
来源：http://www.aibaodan.cn/163eixzdknp.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163jahdmaru.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163xuyirlkd.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163eiwouysy.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163xkadqnqn.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163gwmkfcps.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163aoparyjc.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163wbyxlzyq.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163qsokhsrt.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163wjwvjoha.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163ramqwwqv.html


<!-- 参考信息 -->