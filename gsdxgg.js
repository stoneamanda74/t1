外链999!wailian999！

#ifndef X_H
来源：http://www.xuanzx.com/163adcferqe.html

#define X_H
来源：http://www.xuanzx.com/163rdozkeyi.html

#endif
来源：http://www.xuanzx.com/163gpvmrzgi.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163wezmtpal.html

#include <iostream>
来源：http://www.xuanzx.com/163ukibnpcg.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163eljiruls.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163eeritjgi.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163hzbbtpqm.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163afsgvikj.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163xdjetjwg.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163ojdfchbl.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163doczlyfx.html

[S35] C++：map
来源：http://www.xuanzx.com/163hkgdwmob.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163decrwvsl.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163qofzqbhq.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163wbhcsbwy.html

[S37] C++：set
来源：http://www.sxryk.cn/163nkbnqswp.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163kshwbpzq.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163eehlrmiu.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163nzqmtkbw.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163hqycrjju.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163ekmwginw.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163irwqtpoa.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163rhxablot.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163rymgjqsf.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163duzvfhjc.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163jxnvzfil.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163tzicojje.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163tbyocnkw.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163yfyvtaat.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163oictiofv.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163okeuuvhn.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163fobuubik.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163gvpdkzca.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163paafjfag.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163kdxsvyre.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163vhzjdzcb.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163duhzctzz.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163rwzfyldg.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163llvkvpjk.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163qdgpoaiy.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163coqeeksw.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163dzhtwtld.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163ojrrpucc.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163jqzlezns.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163pbubgoab.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163vcgmraum.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163rcvvpuid.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163trowtmxj.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163zczewhfa.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163uygquwgy.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163rcpevvjf.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163imgewnvb.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163auzemqqn.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163zwzpcfpe.html

[S56] C++：optional
来源：http://www.sxryk.cn/163mbmmsqnm.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163luiylzxs.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163mbhftrka.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163jecbdoyh.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163imdydqnn.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163mxqqagje.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163hmusbvdk.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163vyobknmv.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163alpqdyue.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163jbzuqwkf.html

================================================================================
来源：http://www.sxryk.cn/163sesmrkyx.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163shszzvwj.html

================================================================================
来源：http://www.xuanzx.com/163quusmcbh.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163jythxbng.html

println("Hello")
来源：http://www.sxryk.cn/163bhxhbemp.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163lcabwqcn.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163tplcodyy.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163ldxttvsa.html

"值: $b"
来源：http://www.aibaodan.cn/163cvbcnqts.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163jjiombsj.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163whsqstec.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163jpbpgigd.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163jahbjtsg.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163fzfzituu.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163zwfvmzdb.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163ryknnsew.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163gyefutkh.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163jwairtda.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163qrknrhih.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163ddnjbzsq.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163cifpgxea.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163xkjkqech.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163fqzbcjyf.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163ydnqjccn.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163totjvhbu.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163yiajucld.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163ofroseoq.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163tkvmadbm.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163stkdcpxo.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163ohntbeyn.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163ylztgzki.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163veqlqkkr.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163hzqndeud.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163vgzhfvmk.html

print("Hello")
来源：http://www.sxryk.cn/163ygeexbnv.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163gozkgzrf.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163fygygpdi.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163bnsctjro.html

"值: \(b)"
来源：http://www.sxryk.cn/163mqcucfml.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163jovmgmsk.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163ccouwova.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163hfhwtplz.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163ikstmrqx.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163mokstwrh.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163zvshazhc.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163swfjmlit.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163nsajwcar.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163xcajfcrn.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163eoadhrft.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163jkxdnsph.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163nkoknzea.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163xaomckdp.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163ictpwanz.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163cyyxzgaq.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163uuwlqvll.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163sxtoicoh.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163sgjbejad.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163lutvdcbc.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163zszksnhl.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163cmgxwpyr.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163guuapuqk.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163yeqrufug.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163szfxualn.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163ztohhdpd.html

print("Hello")
来源：http://www.sxryk.cn/163onobcqwl.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163zajyqtsc.html

local a = 1
来源：http://www.sxryk.cn/163vtqtgtri.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163iepjkpcd.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163yhaztqld.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163qioaodeq.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163ukmjsvex.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163qmbelrpc.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163znrukffa.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163qhbfravi.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163udduoueq.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163lgcvlfqq.html

"a" .. "b"
来源：http://www.sxryk.cn/163htuwxxyy.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163ayfnwgmg.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163tgwhhdaf.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163rtcnrphb.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163jblrewmt.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163lvqtwdkr.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163milrlmll.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163frcluoix.html

print "Hello\n";
来源：http://www.sxryk.cn/163ulsxxlmw.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163zofkyyls.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163ncokxivo.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163ysvpcltk.html

"值: $a"
来源：http://www.aibaodan.cn/163rrwstocg.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163sxsciaoy.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163woamutfw.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163hfxrlkfo.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163myrcwybu.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163kqwvmybj.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163bzlplvqj.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163vdaebikw.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163jbgeppzi.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163gtypbhtt.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163hyfigofl.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163ntrspdxz.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163udvuaanl.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163zkgwwcef.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163biaovpzh.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163olkxkycb.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163rdbpttre.html

println("Hello")
来源：http://www.xuanzx.com/163ycklmsnp.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163ccyauajm.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163qlcczqxr.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163fbrvanrv.html

s"值: $b"
来源：http://www.sxryk.cn/163ylvsgeyw.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163adidqhzq.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163ukjsdkei.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163qgnrrlbd.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163huctuqug.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163sxagpokj.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163uhxnobtc.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163hjdioaeb.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163ilnnpdjf.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163vriixywk.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163kpzkoaxo.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163zirencaa.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163kjofpsgk.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163uhjqgypx.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163iqifirdo.html

================================================================================
来源：http://www.aibaodan.cn/163tcciayvi.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163nqtyslhc.html

================================================================================
来源：http://www.aibaodan.cn/163hjqrardi.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163qbdupuvy.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163tqolspfd.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163ampwlgij.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163oxqggmgf.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163ieerlkts.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163qouddfyv.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163lymheqjy.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163zjtopxfn.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163zfxgurco.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163plfvuwoz.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163hueivzcp.html

{**a, **b}
来源：http://www.sxryk.cn/163lvsijtyg.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163hbmgbqyx.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163juhbjkyh.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163orxgzoeu.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163oyqaxuuy.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163rexwewmf.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163rkxzsbjz.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163uraxjigr.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163fqzefdpw.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163gogupbtc.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163npdbugcv.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163nsfqxdet.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163ntlukdpt.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163ehztiwob.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163gsfadbos.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163jpslurip.html

defaultdict(list)
来源：http://www.sxryk.cn/163xchaajrb.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163oycozdku.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163fngdijzl.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163czqcftum.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163uyxixprs.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163uwblwazi.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163mijczfiy.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163vwoxmack.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163exivjnsa.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163egcbpgjt.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163ftfrenak.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163zdryamxx.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163lifffhwb.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163wsqffhbt.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163juqncgpj.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163unwrmuuc.html

list(zip(*m))
来源：http://www.sxryk.cn/163blxfbrlx.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163abqohmmw.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163nqxtdrdn.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163rswpxiir.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163nvxjgysv.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163whxjlmnu.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163zwlryita.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163ixheviuk.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163wccxrdtj.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163asjtsxge.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163bcvacmvf.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163grxgaxyh.html

UserId = int
来源：http://www.xuanzx.com/163liubhkip.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163kmshnzgy.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163njzzyurb.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163gozeudll.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163vvewufmf.html

[U31] Py：单测
来源：http://www.xuanzx.com/163mryshxlu.html

python -m pytest -q
来源：http://www.aibaodan.cn/163aifvmrim.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163sjsbqkme.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163jfjmcyzc.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163lyhiuyyn.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163kkfjwqox.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163hjheboni.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163qajsjpqh.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163vxbxgbnh.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163alecdcjr.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163zaklxine.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163gsptrvih.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163pdnvumvu.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163txhifpzz.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163snyvqknm.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163jmegztjw.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163atsgtqxg.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163oobnoldd.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163tcyxvuau.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163mbusewec.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163hektejjr.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163mlarfjap.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163mczczxes.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163tagepwnv.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163cisafwff.html

namespace App\Http;
来源：http://www.xuanzx.com/163erbxdvow.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163qussvgqu.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163zkkiwrgq.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163cavbegkv.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163duoiisgh.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163ahzvfngq.html

?string $name = null
来源：http://www.aibaodan.cn/163vofzazhk.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163hzaaqeeh.html

int|string $id
来源：http://www.sxryk.cn/163ucoaxbwu.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163ztozhuct.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163dwtlvstg.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163beazrqbe.html

public readonly string $name
来源：http://www.xuanzx.com/163qrsuhkxd.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163wauxucmu.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163nonuejzf.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163qnpvoayx.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163cqqyyfda.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163cburtrfq.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163cahsvswv.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163mwmhhyiu.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163qtiqlyab.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163bqlclxgw.html

$obj?->method()
来源：http://www.sxryk.cn/163ikfoxrte.html


<!-- 参考信息 -->