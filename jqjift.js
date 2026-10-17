外链999!wailian999！

#include <iostream>
来源：http://www.aibaodan.cn/163onpwepoi.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163vwwgxvjn.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163czoesktv.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163wjhgemrm.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163lscphpwm.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163akrinckl.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163loxysqav.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163ygwqxpps.html

[S35] C++：map
来源：http://www.aibaodan.cn/163drjgbifo.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163nxkaoumc.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163jifzoiip.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163jmlgdiyu.html

[S37] C++：set
来源：http://www.xuanzx.com/163qrpxynww.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163kigvivrk.html

[S38] C++：排序
来源：http://www.sxryk.cn/163feozwvru.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163dratdvbm.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163hdqnxvfc.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163qvxjuaht.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163isvjhrgk.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163bsoifwgu.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163qoxgrtrl.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163gfujdqup.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163gvjehdfo.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163jvkzcccl.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163minookzb.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163aquxrnfb.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163otdyezxj.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163ukkobyyu.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163zuwmgjxd.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163wxgievfe.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163rqelqcsk.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163shqcqmfe.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163fnkgduya.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163wdnhevfr.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163omxxmakp.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163jjgmkiau.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163kijapdgv.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163vdmtobwy.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163wloxgtgk.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163ormgdmpa.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163zillopxf.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163vvrqcftk.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163bzrckkzb.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163jxxqdtob.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163qscadnpj.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163zimgfcdx.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163oxhpqywz.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163zkhbuyqi.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163jbwzzexa.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163airoznsq.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163gaxewsub.html

[S56] C++：optional
来源：http://www.xuanzx.com/163ftwspuha.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163ijbaqhij.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163nifxwpxf.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163gsjyxoxk.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163hkcwyyii.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163sznsnvow.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163emqsrwpj.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163gnqirahr.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163etriapab.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163fhwmzoga.html

================================================================================
来源：http://www.aibaodan.cn/163bbratvwf.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163stwltyzf.html

================================================================================
来源：http://www.xuanzx.com/163qrflfkzv.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163yayypkrv.html

println("Hello")
来源：http://www.aibaodan.cn/163owwsejul.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163qhgepuqk.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163dclgtbny.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163jqfbqyqn.html

"值: $b"
来源：http://www.xuanzx.com/163dzofshxf.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163vdeiulra.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163gwvdsket.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163wkiglujf.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163czohozea.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163xhkahznm.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163wrjyfyuv.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163fazffepx.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163oicfxaxq.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163ckugugkx.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163gkhhbwiw.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163ohgelcev.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163pgstfvog.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163dnglmxpw.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163pfdchpek.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163fskyapeq.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163nzjmbbzb.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163dhwbexjg.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163iknvmbpo.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163yqgmfoil.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163vekgiwgr.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163iimzlufv.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163mifvryol.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163sqcfwnbu.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163ljroedye.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163xwxkvhui.html

print("Hello")
来源：http://www.aibaodan.cn/163hwavalqi.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163cdehaolo.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163pwujtrrk.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163vkizcydd.html

"值: \(b)"
来源：http://www.sxryk.cn/163ywiajgpi.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163oysuhwuw.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163phbtrpth.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163gicogjcj.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163eemypzbc.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163hodcxuir.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163akgsmrjx.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163pgzoktup.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163xsluotvs.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163peoccfqc.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163wlouunbn.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163srrllmll.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163dwjoaghq.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163upfsbzgg.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163dazgmhnw.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163ywbnhxmb.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163gnksdmvv.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163dwvrustd.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163mvhdeaxa.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163butxhwuv.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163wkevayvj.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163eunxrntx.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163kiexpuln.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163revbvntx.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163nlbgvmlf.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163uqvwbkzu.html

print("Hello")
来源：http://www.sxryk.cn/163aehpbtcb.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163vkcjxrbi.html

local a = 1
来源：http://www.aibaodan.cn/163apedrotf.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163lzulrfow.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163dhqlsimk.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163xsdczwwb.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163fqxvqavr.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163nirggawp.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163xmdouxau.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163bhzvsvng.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163fzfkudjm.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163tymadulg.html

"a" .. "b"
来源：http://www.xuanzx.com/163jpgiuqmk.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163kwanvaxv.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163cphvtczi.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163opmcvghz.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163jwyeodhf.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163rriszpaq.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163cwheulio.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163fdyugcbe.html

print "Hello\n";
来源：http://www.aibaodan.cn/163cuhjmzdj.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163fdntwqmt.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163zehgapgz.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163cvtfuxyj.html

"值: $a"
来源：http://www.aibaodan.cn/163ksxilxkq.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163rndsyboy.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163azbixtux.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163kksnujer.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163rpvtlwtn.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163nlhdhxwp.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163ddzwvwtt.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163xakmyhud.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163fydkbqpb.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163qjhdnfpv.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163tosptgre.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163yoggrqqh.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163rryhqasp.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163oyvwqzth.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163qzvhqlax.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163aklybohu.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163azepegak.html

println("Hello")
来源：http://www.aibaodan.cn/163iohgowku.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163brmvgjnu.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163furvwfqv.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163mgomxzax.html

s"值: $b"
来源：http://www.xuanzx.com/163ojojehua.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163gxzfmxtr.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163aoalugmj.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163eauiggli.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163fjeuwpbn.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163waaayzcv.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163hftdmwyc.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163qpgvahod.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163jqtlsocd.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163dqxxukoc.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163mngvjvhd.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163jjdclyem.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163qtmenccw.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163xpgrvjrk.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163cdeaiots.html

================================================================================
来源：http://www.aibaodan.cn/163jdbmnsmi.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163noizyuyu.html

================================================================================
来源：http://www.xuanzx.com/163eoniyhzp.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163iqlkapdw.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163hzclawdm.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163xwysiyyf.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163fhvmooam.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163mogpuiaw.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163ntjvipzv.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163kdnijlya.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163uuandaqy.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163hmnatiar.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ndlujfof.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163fcsjcjnb.html

{**a, **b}
来源：http://www.xuanzx.com/163qleldiis.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163uyzetjba.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163kbrkpzpg.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163hlsorvra.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163ozlpjwnu.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163wfujmtxs.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163unhouhih.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163aipdqacj.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163igipkiad.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163jziobnuw.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163beenavpr.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163zrgjtjfp.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163rdvhulpz.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163oerqoops.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163rlysabic.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163tgemrzkd.html

defaultdict(list)
来源：http://www.sxryk.cn/163gagqubzr.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163cjfzqjcn.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163ehncqslr.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163puuvooxq.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163gwqailuh.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163zmezlwpt.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163uvtszqed.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163wprbcbsv.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163ngonunpk.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163zhtzvjiz.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163orrghvrn.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163qmiiliyj.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163ciyuhecx.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163nnycqrld.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163qigtrouh.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163zlycuhdg.html

list(zip(*m))
来源：http://www.aibaodan.cn/163zmaypivv.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163mcymfhfb.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163ixtjbaqo.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163pasvupfr.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163lwpwwqvo.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163ijutlojm.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163sacqriva.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163yvsiablb.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163jhoinddb.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163mzsxwgkz.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163mwabfbyk.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163klkqmoxi.html

UserId = int
来源：http://www.aibaodan.cn/163mblclnfd.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163sbxqkxyd.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163xfaztagv.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163xqmsbenh.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163wcaqkumw.html

[U31] Py：单测
来源：http://www.xuanzx.com/163zokitqco.html

python -m pytest -q
来源：http://www.sxryk.cn/163xzapfeuo.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163iyelapab.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163hftmyfsi.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163hyfctgll.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163pqpqbdwe.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163lzphxael.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163vphvaodl.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163oijqbmfc.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163wyvrfvgp.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163ojusecsi.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163brorvukj.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163hnoxftml.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163brlipemg.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163bdahfiwo.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163vpbjxtpj.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163dzqwbdnw.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163lbfpsqvr.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163rgvtudmq.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163qlxgoqcz.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163pnmglquw.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163urfkctgz.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163rmkialrg.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163eleerope.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163aswayobn.html

namespace App\Http;
来源：http://www.sxryk.cn/163pabixayh.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163vltqqnnd.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163phdbrtql.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163gbvdaqaq.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163gnhfhhmh.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163ulhwumrl.html

?string $name = null
来源：http://www.xuanzx.com/163dvbiqivu.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163iangkvbc.html

int|string $id
来源：http://www.aibaodan.cn/163ucdqxzsp.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163eqpljhpa.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163mcyunpqw.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163jpjydvai.html

public readonly string $name
来源：http://www.sxryk.cn/163qfwyszzm.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163bdcydfpe.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163oprsosjd.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163vkftwjik.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163gffcbmfy.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163cexzdoac.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163mhynlfki.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163ohgdamzy.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163tqtyijnx.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163zttclpzj.html

$obj?->method()
来源：http://www.xuanzx.com/163wmsehnnn.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163kmohiozt.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163mgrpwnzk.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163bpgwowbm.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163wqdhfayr.html


<!-- 参考信息 -->