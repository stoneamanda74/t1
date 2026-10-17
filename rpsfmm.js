外链999!wailian999！

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163dpzkmnqc.html

[S23] C：随机数
来源：http://www.xuanzx.com/163uahgqcha.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163mhekusnx.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163mwjkycjh.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163famxrniq.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163kesktphk.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163hwiehvxq.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163fxyrqzrr.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163ifffiscr.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163qgvjomzf.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163gtyykqdr.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163mkrianmh.html

static int counter = 0;
来源：http://www.xuanzx.com/163hxpyyypi.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163wazfmkmm.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163onlmscuo.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163zeiidmrs.html

#ifndef X_H
来源：http://www.aibaodan.cn/163ggnauppm.html

#define X_H
来源：http://www.sxryk.cn/163kgifbpzl.html

#endif
来源：http://www.aibaodan.cn/163zlqdewrw.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163ncahvfiv.html

#include <iostream>
来源：http://www.sxryk.cn/163wsxyubwv.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163epxsawxo.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163ugbyhxqy.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163sdsrvwga.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163mkdwjdac.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163twameokl.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163vwmbnfdt.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163ptaccjts.html

[S35] C++：map
来源：http://www.aibaodan.cn/163jedyealp.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163nblzwjwl.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163llowkwfn.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163eufmycnc.html

[S37] C++：set
来源：http://www.xuanzx.com/163fghnbtpm.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163tzlxoxqo.html

[S38] C++：排序
来源：http://www.xuanzx.com/163xpaocqth.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163jvdmsbrx.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163qafqvpey.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163hoggfbtt.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163xkgnseqj.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163cpyhjjoe.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163xzrbfgxb.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163zjoazrdh.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163suqqmrbd.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163vxvrzeps.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163vnngxamt.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163pwcxoapr.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163wubyakuv.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163nenzfzyi.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163znlyjvqv.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163gchwtzeu.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163rlifldwl.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163rgcncsmc.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163jgqmlqzd.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163qlhowihi.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163ncnbpdcy.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163mexsaysf.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163qnobglcg.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163hvqysvdh.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163ykbzctsc.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163xnikifmu.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163wqkpoxqj.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163imtcctzm.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163sbmqmxmo.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163lxhggzwp.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163hoftevzq.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163wyilpemm.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163nqbjxvog.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163rtboxlyv.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163wexdvdcr.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163qkgarzvu.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163gtwcbkey.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163niziqrlc.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163tjoaltzx.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163mhfgfzus.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163nwxbichm.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163fivqpmwp.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163odcoidyr.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163khlxuorq.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163zdsplegp.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163cxzrhjxk.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163resxizqy.html

================================================================================
来源：http://www.sxryk.cn/163vdfxejui.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163ziqbfhla.html

================================================================================
来源：http://www.xuanzx.com/163wumdcsym.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163mkuwaohp.html

println("Hello")
来源：http://www.xuanzx.com/163anwqjrcg.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163ecnijfmy.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163eaiffebu.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163noilkhtw.html

"值: $b"
来源：http://www.aibaodan.cn/163btqtrogb.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163vykaknno.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163onqqbnfn.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163silziubt.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163tyzchtoy.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163lceuabhs.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163nadheipe.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163uqsjvube.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163axayppua.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163rpcurxqt.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163shhjdjqp.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163fcuaywby.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163zqeqqbif.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163jxeegsvw.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163gygpozlk.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163xnapqozo.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163ouxnhdgk.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163xunnkuah.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163isrhakyr.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163nzxtehce.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163xpeblucj.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163otlvmtkb.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163yfpubjpm.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163zlyubcct.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163kbbamfpx.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163jflqffmx.html

print("Hello")
来源：http://www.aibaodan.cn/163pazjwqfj.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163cgltayjs.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163sbnmxsao.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163wbeaurih.html

"值: \(b)"
来源：http://www.sxryk.cn/163zrhotfgc.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163hmfxvwyv.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163cwowzlnc.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163nhiswwhc.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163rhzddgye.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163sdbylxkw.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163vaqftpzh.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163siuijimx.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163tbevuugp.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163yzxggeae.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163qmvdidyh.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163ztaocpkb.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163ffoeshsl.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163oqvuygio.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163buemysfr.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163qmaxjnla.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163foofkftb.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163gisfhvls.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163zrjmpxba.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163soqdzdsy.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163qdxrvnzh.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163mmwexjxk.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163ynpcyali.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163cmeihpxe.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163tlcbtrow.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163dozozqxm.html

print("Hello")
来源：http://www.aibaodan.cn/163bokyfmlt.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163evartnrv.html

local a = 1
来源：http://www.aibaodan.cn/163sjwlwhkq.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163ttsvtrfb.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163uvrbgpdv.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163budvnudp.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163yoyrpopp.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163egxzoafm.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163peiemumh.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163yqjngcsv.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163leirzbbx.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163gczcutiv.html

"a" .. "b"
来源：http://www.xuanzx.com/163auajedcj.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163dovgpgix.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163efdhfdng.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163ujpifwcw.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163yiqemrfx.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163pfdyyzax.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163luepcain.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163oycrntsn.html

print "Hello\n";
来源：http://www.aibaodan.cn/163cxwqnmlf.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163ttuarqwp.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163wsfrgtie.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163lonxxity.html

"值: $a"
来源：http://www.xuanzx.com/163uxdkddgo.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163gwnmdflm.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163pewtafph.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163ozkluqol.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163oynzrcfg.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163mfcojbba.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163cblwqtde.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163fsgqsdnx.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163lmqzkfyp.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163ohbiirqk.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163vbaznrxj.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163qzngtqum.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163ejonnyfs.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163jsalnrpf.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163pamouazi.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163neskunmu.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163mnbqbfjb.html

println("Hello")
来源：http://www.sxryk.cn/163zncgefqb.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163hsobjyvl.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163nmbwflas.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163hslccgqm.html

s"值: $b"
来源：http://www.sxryk.cn/163uyctamws.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163ksthyxux.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163rrfyxiru.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163pdzbinem.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163tsimjkpt.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163nziwpvls.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163rhxdebts.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163gidvxgdc.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163iaydxeep.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163oqdarjbn.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163etuikfmh.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163janivurk.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163yfqnceex.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163axczfjik.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163hnyrenlq.html

================================================================================
来源：http://www.sxryk.cn/163fpxbadbj.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163kkgsdupm.html

================================================================================
来源：http://www.aibaodan.cn/163ctttdfvv.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163duzrbgng.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163wthliodi.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163llmpmcbi.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163ukxnbqql.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163ouordoij.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163ahthjnbw.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163xqebpnql.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163ykggehkq.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163yjfjgpjr.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163sugfwzoh.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163izerbnrt.html

{**a, **b}
来源：http://www.xuanzx.com/163hfzhpaje.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163nuwiiuni.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163jolzlsvx.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163rbrbkcca.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163hqltifxk.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163zsobcctt.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163cvqpdwbf.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163doowvvul.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163dsejpdgn.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163zxaiymmq.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163divgezla.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163zsuolmiw.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163gsbbclpc.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163qehxqqpy.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163ibicpkuu.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163lmkdangs.html

defaultdict(list)
来源：http://www.xuanzx.com/163huioqopx.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163nbfzrgea.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163cjtppszp.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163evuaxvun.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163uzdoucjg.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163ixzusvmr.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163yvakmnku.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163pscehucy.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163bzbxxbno.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163raolvpip.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163rzlsnggr.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163zltdohmk.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163gfubxzhs.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163zsvceggh.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163fzvnisof.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163jnyyimaj.html

list(zip(*m))
来源：http://www.sxryk.cn/163hyjxoexu.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163wuetofro.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163zlryyevn.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163actorcqd.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163sioryvao.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163kcbmbjsf.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163nixdmqfh.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163hudgujkh.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163ohphjxms.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163wvevfvaj.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163jdavgzys.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163nwbckhqt.html

UserId = int
来源：http://www.xuanzx.com/163kvraemnp.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163tzracvko.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163ozvpesvv.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163ejscheea.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163rcaqskfd.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163eblwugkm.html

python -m pytest -q
来源：http://www.aibaodan.cn/163yltcexmy.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163sqmcnzvk.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163fqoogxsl.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163aaubqvye.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163pruyuzap.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163mrkeoxfo.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163xanadtpr.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163mvaxrnmq.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163cfupuuhm.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163rnksxvkh.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163dbsppynr.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163luabskcw.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163nhyfwpgk.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163nyeqbcqg.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163xyvtetcg.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163bvgbfpsg.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163stvlacgc.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163rggqykyp.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163myroqsdn.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163swwezuzt.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163zhhdlejm.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163xscmwoba.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163olfgurmp.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163wabzbtqo.html

namespace App\Http;
来源：http://www.xuanzx.com/163guxauyyc.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163eocshuzw.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163seobedlx.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163tmryddck.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163whivowzw.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163glacvrsi.html

?string $name = null
来源：http://www.sxryk.cn/163ecoyfqlt.html


<!-- 参考信息 -->