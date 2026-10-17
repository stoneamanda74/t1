外链999!wailian999！

static int counter = 0;
来源：http://www.sxryk.cn/163cjprqste.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163touzfdyl.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163jelxjnfd.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163dvhqcapr.html

#ifndef X_H
来源：http://www.xuanzx.com/163nzvvpqzk.html

#define X_H
来源：http://www.aibaodan.cn/163yamsqctk.html

#endif
来源：http://www.sxryk.cn/163arjmmolz.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163yfdursgg.html

#include <iostream>
来源：http://www.aibaodan.cn/163mjtrkvys.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163ougxdvlu.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163mypxvvue.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163exuqyjtj.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163qtgloaqs.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163kgpzgnqc.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163ubemgvvg.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163cfcfzoun.html

[S35] C++：map
来源：http://www.aibaodan.cn/163xrjgrfcl.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163xgqfrusr.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163owrnhhrw.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163umncmujp.html

[S37] C++：set
来源：http://www.aibaodan.cn/163egoouhjr.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163wtrnirvo.html

[S38] C++：排序
来源：http://www.sxryk.cn/163pzjwdwup.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163ealtsehv.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163tldlhfwj.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163etrdzlwx.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163nbgdvyzq.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163oetzsowk.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163eeqvanwn.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163jrkoqrhf.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163apjkugnt.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163dmfuiiiw.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163rixibbht.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163quqtrjzj.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163cyvkjyzf.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163vxnytpzo.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163vcqdpugu.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163ciubxaxw.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163wzagcbtz.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163fyigawwg.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163nsiskiwn.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163nezqcbrg.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163vcfituej.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163zrcrqjgl.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163eibjwwsj.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163yzkrvxrc.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163khtjxqib.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163weowhptv.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163hrlieloc.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163gannyjzk.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163lnyevhkr.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163opgpynfq.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163lhhdwenw.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163yhkfdksh.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163vczjnxgz.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163xljnbarn.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163fpymrjjg.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163lltqdacz.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163anqfveox.html

[S56] C++：optional
来源：http://www.sxryk.cn/163mexavhwn.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163yfmsctag.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163wdvygcbh.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163nuhxmnqk.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163dnkxqxvi.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163wohsjqsq.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163ydbwmbhr.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163xpibhukv.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163biclybxk.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163iommrzcc.html

================================================================================
来源：http://www.sxryk.cn/163rrtwvxtm.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163takctsmn.html

================================================================================
来源：http://www.aibaodan.cn/163mpzwiqms.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163grxctzuq.html

println("Hello")
来源：http://www.sxryk.cn/163pqjiberk.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163ljhylqqh.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163hcbmslez.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163raynzeaa.html

"值: $b"
来源：http://www.sxryk.cn/163yklnjwux.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163hiyaetcq.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163owyzmmnl.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163umjkqvuq.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163iublltht.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163cqeypgkx.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163xyuwedfe.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163hniwqjou.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163youjjcuo.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163myvuwlwg.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163hglycfec.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163cokstktp.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163gllkgtvm.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163egwryhae.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163mwszsuxp.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163gkmdkyxw.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163sasiliyb.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163qzdzgsqk.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163vymtzohy.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163bsgxhoxb.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163limrzrzs.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163cqdsbohw.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163aygtmioy.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163vrsohvzf.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163gnxobfbp.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163hoyzncli.html

print("Hello")
来源：http://www.sxryk.cn/163pbfzcwum.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163wwjsuxjq.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163dcigpkme.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163yyawmomf.html

"值: \(b)"
来源：http://www.sxryk.cn/163moxkfbcj.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163edtyagyf.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163sbrjefau.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163djtnzqjk.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163vgeacvtg.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163ulkfkoql.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163egnjzydd.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163yqrmtmjg.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163ikrthywr.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163seljxmtx.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163rwjaxmfs.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163qprwigbo.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163rmtekilv.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163wbwsgkrg.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163raxlduki.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163psduguag.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163vdetgcvs.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163bhtjmpuf.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163thsnmjli.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163tphnqkfc.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163jfhlxffr.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163mttrrzzf.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163rmhjcork.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163hjtguoip.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163rxekcgmb.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163zpckugnz.html

print("Hello")
来源：http://www.aibaodan.cn/163ijwejigt.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163hsjaowoh.html

local a = 1
来源：http://www.aibaodan.cn/163dyvomhza.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163crzbrrxg.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163sakfcxxc.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163ztrpalsr.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163zdefvgjr.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163fonttfgb.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163qptlqqzz.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163famlhetd.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163fltgzdem.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163bvcvoqrp.html

"a" .. "b"
来源：http://www.xuanzx.com/163gethsbyj.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163sbxiwdzu.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163qqpkfdml.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163bonrkzur.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163cjuiexxa.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163kvkypjmx.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163zhmxzcur.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163bbmyrkwj.html

print "Hello\n";
来源：http://www.sxryk.cn/163eracaihi.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163yfjiholj.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163sakbrdxp.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163elzznonj.html

"值: $a"
来源：http://www.xuanzx.com/163whxmvypo.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163ybcoubhl.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163omyumjhw.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163okxzvemf.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163ihqzskvi.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163zmbxbahy.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163ysvpjfog.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163kckqpmew.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163xkupqrrq.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163vymronxq.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163pdgcxhlu.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163mqhlfazh.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163otxkpeyw.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163fdltvskp.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163ftgxpknc.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163uekaohxe.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163jpafgtkm.html

println("Hello")
来源：http://www.xuanzx.com/163siqwxyvd.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163lbomjgjv.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163htcmebkv.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163blwmaycb.html

s"值: $b"
来源：http://www.xuanzx.com/163mxhpwqmc.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163dmaxnwek.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163ceievrdn.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163zyfvizck.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163trpexyuj.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163sserazzj.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163lwvzncvg.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163ygxshair.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163bovzuwjg.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163eijadxsm.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163hwwopusw.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163pkxkuxhp.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163cepfizrx.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163ujqpagtw.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163zndvwxax.html

================================================================================
来源：http://www.aibaodan.cn/163jtlevyel.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163mfkoetpx.html

================================================================================
来源：http://www.xuanzx.com/163rvhukjja.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163cgwcygcc.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163efcdabwr.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163frjageli.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163fxpxtbnk.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163zinzbxmv.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163asrhdmsu.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163sekyydps.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163ozcnrbzx.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163mfxnhpel.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163fdzceuja.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163zjkjivtd.html

{**a, **b}
来源：http://www.aibaodan.cn/163jxqtbhov.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163keljqehq.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163lqngjbfa.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163vlvtnrxp.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163ygrsryai.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163abaniwuv.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163qaovizgz.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163yziisqqe.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163hqwyrocy.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163lzwrnyrf.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163nnlzovrs.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163zkdasjmw.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163rwtdcviq.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163ksikecvi.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163wnhkvpnp.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163xsecckoy.html

defaultdict(list)
来源：http://www.aibaodan.cn/163ieqndksa.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163tunrwacs.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163umgjwbpo.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163tgwdilge.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163oexxzepz.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163cwkaxjew.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163gcbiqswd.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163wcverkjq.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163lcevflug.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163ezjwrfzz.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163bdsfochb.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163kacioylu.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163foszuaet.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163jkhapquw.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163iqjrjepc.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163ynabgolq.html

list(zip(*m))
来源：http://www.sxryk.cn/163kuysyrmx.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163udwuhmqv.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163aavqxexl.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163wfcvuawm.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163lrrhlmvr.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163hovwfasu.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163vtshhmly.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163axgvakqh.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163fyywuevw.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163baccamxq.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163twbevgst.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163snrlpuie.html

UserId = int
来源：http://www.aibaodan.cn/163nlcvtvrv.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163xzrnxjzb.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163qtsfudct.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163ivlfddyp.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163wjuqoyww.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163yrsjmcuo.html

python -m pytest -q
来源：http://www.sxryk.cn/163qsjqozzf.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163qcaxdqiw.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163gpaeakdw.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163ositrkrh.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163srrqkcdf.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163oskxvksd.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163ymyaqlak.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163xemoefsp.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163ezvswybr.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163ufhcljvj.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163sxudohri.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163wwhzhogp.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163ajjmfcys.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163hsfcxdzv.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163xqirafjb.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163btqrwwkw.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163ciloyohn.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163jgubklfe.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163gqlfscbt.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163fmmltxjk.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163wmerxlpn.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163zdqbhafs.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163jseozols.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163vlqymcim.html

namespace App\Http;
来源：http://www.sxryk.cn/163dbelvcnf.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163vxhlrlpo.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163uugqckwh.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163pvgtmnjc.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163wzwfxwal.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163biyguryj.html

?string $name = null
来源：http://www.sxryk.cn/163qrcwnjgm.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163henhuell.html

int|string $id
来源：http://www.xuanzx.com/163mvlmqykn.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163mkfmgfzj.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163jqrqiudr.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163oobemkhi.html

public readonly string $name
来源：http://www.aibaodan.cn/163isoqqvfe.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163vcmuoinz.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163wewqnfux.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163lqvjezio.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163kzooulwo.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163hturjrun.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163lxftbijx.html


<!-- 参考信息 -->