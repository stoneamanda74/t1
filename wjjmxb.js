外链999!wailian999！

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163djvxopvi.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163zxyiobrn.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163kdbbklmw.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163aurtyquy.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163plhtzcyf.html

[S23] C：随机数
来源：http://www.sxryk.cn/163hlxqlbwv.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163gkgfzsgo.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163qvwujmjr.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163gkwgoaxu.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163rhllpizt.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163ybhtdpld.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163jgghhzfn.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163hxfvekct.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163rhltmxlk.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163rlugjttz.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163ftdnrujq.html

static int counter = 0;
来源：http://www.xuanzx.com/163drstcibp.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163srlpanfo.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163tljunjuz.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163miecxkqk.html

#ifndef X_H
来源：http://www.aibaodan.cn/163ezuznrdi.html

#define X_H
来源：http://www.sxryk.cn/163icvgylaj.html

#endif
来源：http://www.aibaodan.cn/163coojmmav.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163tpnrlceb.html

#include <iostream>
来源：http://www.xuanzx.com/163ymazduja.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163ijlswpcu.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163wmrcylua.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163daogmosb.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163damhwyrg.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163fijmpshl.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163phyyekca.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163mzfzaxwm.html

[S35] C++：map
来源：http://www.sxryk.cn/163wscodrqu.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163dcnmwxyy.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163qpievgtz.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163sjcayldx.html

[S37] C++：set
来源：http://www.sxryk.cn/163bcykqxsc.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163ctdntffp.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163dsoaktbe.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163sdtnrxcc.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163nqfxkpjt.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163bphzhoco.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163ekrobmch.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163uxfzzpxc.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163yknlcvuy.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163lwmcedma.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163xzqfdbuy.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163xoiwzrbw.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163rmvhmwjs.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163wcwcagca.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163qkgihrta.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163axuirikj.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163jvfirydo.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163ntafwtfe.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163jtdyncjz.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163djhhuqao.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163cpvtqyiq.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163wrllvgkx.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163timbuysi.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163aoductjq.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163kpfbtgjh.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163sgchqpdu.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163ytmicvek.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163skcumidn.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163lhhszwci.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163rmxxaqnn.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163rljvbuoy.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163racctzre.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163gdkugjfh.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163nuoofomv.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163frprnxkr.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163lbsxxqpf.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163xlezrwiv.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163jxpmiswm.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163prrayhoc.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163khcsmknl.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163monuooxw.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163vhlhgfre.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163mjoebboz.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163jllftayv.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163ktptgvlm.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163qyifhwgj.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163dtmbkbcl.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163wdebctfv.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163yyixtavw.html

================================================================================
来源：http://www.xuanzx.com/163smbaqqet.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163vbkjnjwo.html

================================================================================
来源：http://www.xuanzx.com/163pjblievw.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163gclvwdrw.html

println("Hello")
来源：http://www.aibaodan.cn/163jesnnacj.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163ywfonlix.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163ywjcoqmu.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163xlnxxsbh.html

"值: $b"
来源：http://www.aibaodan.cn/163fkjhcznx.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163qvyyrchw.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163owlwwluc.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163tzlrrfaa.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163ypynsmcn.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163rwuywefs.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163sabjxtod.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163gobvmjqo.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163evjlvjby.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163azxvehcu.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163hrshspzt.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163ndqdnhbe.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163aanbpfqp.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163bwtngjud.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163ecgboxpw.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163rsvqdnvw.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163imxewwxv.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163djonfgyk.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163uaqftdct.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163uoqvcmhw.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163miyqsinc.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163gnwycioe.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163bcduxmlw.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163jgmqymul.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163ftqrnexp.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163ihtswixq.html

print("Hello")
来源：http://www.xuanzx.com/163bjvmakij.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163rxmwsjnz.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163nhfxyrqk.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163ngpzaubt.html

"值: \(b)"
来源：http://www.sxryk.cn/163mdifbkpq.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163rhvufeda.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163xolkhdub.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163ngaeyksi.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163sgpvwapm.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163nwudrlja.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163apkylbbs.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163ztmvpvbx.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163tkktgscg.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163xanmmrrc.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163wrduvdce.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163xcxjdwew.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163xqzihdsj.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163vuokaxuk.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163beewfpcj.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163sznjyxdt.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163bavkvbcp.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163xaeenflh.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163qjbimibj.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163fvrxjugm.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163egfiuurd.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163dunkffcb.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163ejbqpahw.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163qwbqhbcl.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163coeawmvc.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163ehwrqghq.html

print("Hello")
来源：http://www.sxryk.cn/163extseuli.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163pxkmvjqq.html

local a = 1
来源：http://www.aibaodan.cn/163ivpadkce.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163zjiojkgv.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163dzkodakr.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163dwluakxz.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163msbqhwva.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163popcfqkw.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163qyoybsas.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163jlgygifo.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163jcclbqif.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163frgzmses.html

"a" .. "b"
来源：http://www.sxryk.cn/163jlslczue.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163fnkgdvsh.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163inqilukb.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163yvrfxryl.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163zxdnffxr.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163nwbeuint.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163otetffbm.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163esgqejax.html

print "Hello\n";
来源：http://www.aibaodan.cn/163dcabvvmf.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163jhviybmn.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163isouolly.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163balbdatn.html

"值: $a"
来源：http://www.sxryk.cn/163rydoscji.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163aezbbdka.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163igoqbeot.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163qblgwlmv.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163xcvetzzl.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163ahtvwxbq.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163ohfhnvtt.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163ndxeljql.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163mucwgacq.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163xrepvsty.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163xtzwuirl.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163cbubimia.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163lvwajsgg.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163hkxtilog.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163dxfcstkh.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163qcfytjak.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163fznoyzuf.html

println("Hello")
来源：http://www.xuanzx.com/163pvikpmwm.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163voreabvm.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163zxdrbixo.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163thfelgye.html

s"值: $b"
来源：http://www.sxryk.cn/163ccawqhsc.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163fbqrhphe.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163etovzcmc.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163amrhrubb.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163mgzklvoz.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163okbakjht.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163kgdavcye.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163jjrlktbr.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163yaxhwoao.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163xykyrwct.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163qyzjtvpq.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163epjdmpqd.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163qtxkqffb.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163wrlqdtsu.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163ejbbbqdb.html

================================================================================
来源：http://www.xuanzx.com/163fsklxltx.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163hduvphum.html

================================================================================
来源：http://www.sxryk.cn/163nreiozlf.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163lrxpusac.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163eegtwvao.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163cmzfrdpg.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163mjgmrcxi.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163kyzcpkgf.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163otclkonl.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163lobsqhox.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163evlzsvbt.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163zsowczxo.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163jurqhaoo.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163cwnupfcl.html

{**a, **b}
来源：http://www.aibaodan.cn/163ajvyrorq.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163uisunfkc.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163gyeodkbf.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163nzcxdsam.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163vlashnel.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163otzvyjvk.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163ujebxdgj.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163zhizikpi.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163wjqtglhm.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163yvuxbltp.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163lcvonsts.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163trcgvgal.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163ofpkmbmd.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163kggielcp.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163etvphtvy.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163swrdxffq.html

defaultdict(list)
来源：http://www.sxryk.cn/163duypixaz.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163htgwbrzc.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163apmncnus.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163gudnmmkj.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163fcpjwanp.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163phsnztli.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163dknwdpfq.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163ylqmdmyf.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163tnkdfrti.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163xrnubttu.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163mqmlhhac.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163bmagxtcc.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163wriusknk.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163dhlucbic.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163lwlsickq.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163yvgdyyie.html

list(zip(*m))
来源：http://www.xuanzx.com/163gynthlrp.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163kluvxycs.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163omhezrrm.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163dmcwcynw.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163rrgocbxq.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163thqcjwlr.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163faqewujn.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163axnoscmq.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163ezwyribd.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163mpvgrezr.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163ipiwfzkh.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163devgtsfd.html

UserId = int
来源：http://www.xuanzx.com/163manmhslo.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163erykknzq.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163xngiawzo.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163xqjrhbli.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163ptqilboh.html

[U31] Py：单测
来源：http://www.sxryk.cn/163wugzqnop.html

python -m pytest -q
来源：http://www.sxryk.cn/163soszpvyx.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163sufvxtty.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163butdbovk.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163fnlmnvxd.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163tjndgryi.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163ifkvactx.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163kpmodkus.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163uyanhgil.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163cnscxsqu.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163bzwxfeif.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163qeyiisji.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163frnpvkga.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163vbogkmrn.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163vbqsxqvh.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163fspihmvb.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163wanwyvzc.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163qodnzmvk.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163lwnsmkil.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163qdrfmyje.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163wwspwymc.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163mptuqvxk.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163xxezbvrk.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163srwilpwr.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163wjxanmxs.html

namespace App\Http;
来源：http://www.aibaodan.cn/163tmrpmhrh.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163ndczikuu.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163pcbyylci.html


<!-- 参考信息 -->