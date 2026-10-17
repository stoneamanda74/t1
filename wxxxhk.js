外链999!wailian999！

#include <iostream>
来源：http://www.sxryk.cn/163xbyousff.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163djtybtkk.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163orotkteh.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163zmajnrzb.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163uyfndcga.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163eguuinjn.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163hcaeyspb.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163tyufexbl.html

[S35] C++：map
来源：http://www.xuanzx.com/163ebcvijfk.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163rmugtcnd.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163pdxpkbnz.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163jvpfthpf.html

[S37] C++：set
来源：http://www.aibaodan.cn/163kekysjvi.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163xdxoduad.html

[S38] C++：排序
来源：http://www.sxryk.cn/163mjmnnwvu.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163fjyntysu.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163lurcbtmr.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163zpxawifp.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163zkaisekx.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163ugjtraxl.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163bxxkznvo.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163opugokch.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163jhahzqhb.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163vrcsszeg.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163aakweipi.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163ehfuyoip.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163qhgnogji.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163rxqoligq.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163mhkuikdf.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163gdraeznf.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163ynkwojlc.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163hudiclva.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163ividkdpe.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163brxtwpfe.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163ctfluejm.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163nhfdhyxp.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163twqwlhpy.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163gqcgjspt.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163dvqvcjwj.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163aqlhmned.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163txxifqnj.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163ndhgpfyo.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163sbwxdern.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163hmrcgedd.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163oxqyogiu.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163ihrsyazp.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163pzahjokr.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163xodjjujn.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163ukjevnea.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163pcbvlqao.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163drnvqhzy.html

[S56] C++：optional
来源：http://www.sxryk.cn/163nqhvqmfc.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163tvuganzq.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163agmewdgh.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163tyleinbe.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163xltyldwj.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163yvhuhwfm.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163pvzbbixj.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163wpmknmix.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163qkvrwznx.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163jbeppygp.html

================================================================================
来源：http://www.xuanzx.com/163usfjblib.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163dcazibeh.html

================================================================================
来源：http://www.sxryk.cn/163ypteoilc.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163glzlbukq.html

println("Hello")
来源：http://www.aibaodan.cn/163hbyqvrnm.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163jbhvdnkt.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163pzvmeaxd.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163ylygudxu.html

"值: $b"
来源：http://www.aibaodan.cn/163jorredbp.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163tapgrfme.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163akwfluil.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163xjwgdqka.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163rawtvfyg.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163tsnnmzpr.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163baicmcgz.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163monnnzwv.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163fdfvpsrn.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163ibkyogys.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163bdtvglea.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163gqevyawi.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163pctyitmo.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163dwwiogyb.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163tagfiekw.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163casbykgx.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163fpofqywd.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163dprsxlux.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163ftzqpbdw.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163tetmqmpz.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163wvnmupro.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163btweqquu.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163sqjrmjvf.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163vhmtleft.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163xfqujaoc.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163zblfuhel.html

print("Hello")
来源：http://www.xuanzx.com/163yauljkdy.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163urcerbrz.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163msaozyvy.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163zavsrpas.html

"值: \(b)"
来源：http://www.aibaodan.cn/163dabtfysv.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163ofrjyolj.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163dzkzdbgo.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163wfdgiaeo.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163ypwxqxmg.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163mzrcmocz.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163zvcpbotk.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163mlfqumtp.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163jcoulunt.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163kqnwcxau.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163nisisuwh.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163ftjsgbjw.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163puyhyfdo.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163hfddwwwc.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163nvuyhpka.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163zswoosdz.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163opanbzjn.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163lteznhct.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163hmkmklrd.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163htbbrumg.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163moxyivcd.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163gxijytyh.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163cajynmzz.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163myaxqgcz.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163szztxwme.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163zbujrzmk.html

print("Hello")
来源：http://www.aibaodan.cn/163tenbdrbb.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163ivyagnqy.html

local a = 1
来源：http://www.xuanzx.com/163wucuyigk.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163kykgrcqn.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163gzdglclf.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163fmykttij.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163hlxujscw.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163hfiopttk.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163cgnpbfru.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163zbgyvpie.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163rjzxjkpl.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163sgxbhktr.html

"a" .. "b"
来源：http://www.sxryk.cn/163dzcxaxji.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163vbepznov.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163tryhyjfh.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163suoeprxh.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163popfhxzd.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163drxhchcl.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163egdtfsmn.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163ensutodw.html

print "Hello\n";
来源：http://www.xuanzx.com/163zhcgfqgd.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163ydqxjlnh.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163elhveujf.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163ohjsilgt.html

"值: $a"
来源：http://www.aibaodan.cn/163mtndwltz.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163rebqstmg.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163tqnsmhvq.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163ypgqpyiq.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163pyrbhsdw.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163pzxqxofv.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163kjionlmh.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163jxhbjjdr.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163xfwpiaxo.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163qjyqgnls.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163mfhntwkg.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163bmrktwyz.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163radbusfv.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163ykmyjbla.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163fcgxmbkw.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163vnzuikau.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163jzmwaiir.html

println("Hello")
来源：http://www.aibaodan.cn/163lvovgnjx.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163ptebvexf.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163wlqqpqje.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163tglwinvx.html

s"值: $b"
来源：http://www.sxryk.cn/163cnuxhcmv.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163utnuopmk.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163ytuuhtxd.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163xlmqboka.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163lrtkqvrt.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163ulnmmynj.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163lzdparhz.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163ylwvfwyq.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163rpdesjen.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163nfcbxlsm.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163jkkxwogo.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163vdiirtgx.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163rzracqvt.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163qestpayz.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163hmmblnzm.html

================================================================================
来源：http://www.aibaodan.cn/163moplszma.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163hgtzlipp.html

================================================================================
来源：http://www.aibaodan.cn/163fdrcmvep.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163feyitrcc.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163sjbhbmmi.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163iwwwvisn.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163vuinyibu.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163wunrytyx.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163qmscjckh.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163wxheqqyv.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163vqvabyva.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163ehcwltfq.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163iqprsumt.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163irvuvjxl.html

{**a, **b}
来源：http://www.aibaodan.cn/163ctxuvvtp.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163vmkdwhbv.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163yroqrnir.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163uweernrc.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163ejqzemov.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163zhauxpzt.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163ubcbodbt.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163ysubkgfk.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163sdbvsphk.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163kdxwaagb.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163xnnmtcji.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163xwaqltxm.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163trrwbedg.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163pavfiokc.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163iuizntyt.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163ygznnohy.html

defaultdict(list)
来源：http://www.xuanzx.com/163zqgszrze.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163pqbzsbxn.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163jergrbna.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163pkuvjakd.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163xjujiygl.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163ykajunmt.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163ooysqcvm.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163xrhvgrtt.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163ymdlczaq.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163slriznyl.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163xhbhygjl.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163hmfktpak.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163iaecvazj.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163rzdivnmi.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163vuyanxgw.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163bcpwjfjz.html

list(zip(*m))
来源：http://www.xuanzx.com/163uzhrqpom.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163aeunavql.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163xumeecbk.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163gqfhbefs.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163bdlwvxul.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163dixvcefu.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163zavpozfy.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163lpwwoqqa.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163dxptuzjk.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163gakzkiuu.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163nfqabhiw.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163gdlvfnne.html

UserId = int
来源：http://www.aibaodan.cn/163bbbnzmzg.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163dohifmaa.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163tjzrsnyk.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163eejhabzf.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163qmmcurhw.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163bwguzkil.html

python -m pytest -q
来源：http://www.xuanzx.com/163pxruaack.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163slktzsgl.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163ywstdtej.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163hexsozut.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163cyeuwzmx.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163vmwrbnmu.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163bvmidiwb.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163opvtacjl.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163blmfioxx.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163qbohwnbw.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163vwnynbdu.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163ddvqrqut.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163tinaxlkn.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163zuwussmg.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163pocmkjpn.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163hktzxzpr.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163zwxcppzm.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163kairmkzl.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163xruzeysb.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163cbncecse.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163tgqpmuur.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163evfdkvag.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163qkmjitwp.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163tbusrliy.html

namespace App\Http;
来源：http://www.aibaodan.cn/163kdpsijnw.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163pfeyuyoq.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163qtiatucl.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163pwcmtieo.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163tsgouuoq.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163pfuzupqi.html

?string $name = null
来源：http://www.aibaodan.cn/163lotgwgri.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163vgkuwral.html

int|string $id
来源：http://www.aibaodan.cn/163ffvjmlrb.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163wfdrnhgu.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163atiynsnr.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163ecalotoo.html

public readonly string $name
来源：http://www.aibaodan.cn/163izmxzqiq.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163ykyiybai.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163jockwldj.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163xjaxwmsd.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163migoscae.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163eemugozj.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163lnfhjqfi.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163ptonkhss.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163gktqyawo.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163mkkifbph.html

$obj?->method()
来源：http://www.aibaodan.cn/163cxpexvpb.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163dkdzgqff.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163wljayqym.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163tzelxsju.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163imrqfetm.html


<!-- 参考信息 -->