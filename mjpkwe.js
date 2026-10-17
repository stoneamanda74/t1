外链999!wailian999！

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163knqdrafu.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163rddvlnke.html

fclose(f);
来源：http://www.aibaodan.cn/163cewtqblp.html

[S12] C：写文件
来源：http://www.xuanzx.com/163dhthmnft.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163czulgigv.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163ahhkxbgx.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163uixkqqzs.html

[S14] C：枚举
来源：http://www.sxryk.cn/163roxhjnvm.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163qasgytrz.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163udasrjpc.html

(double) a / b
来源：http://www.xuanzx.com/163gvafgzgl.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163mlagwywp.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163hwaxatez.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163flhilntm.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163zalmedcp.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163wsqgnwmc.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163nwqgrwqi.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163qzzcdoar.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163gamsohbt.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163pmsqbfdr.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163etafiymp.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163rcohcdtz.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163mfwyvwht.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163rdlmenft.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163rrnqoejc.html

[S23] C：随机数
来源：http://www.sxryk.cn/163lfjztflc.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163kfshikrw.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163hbegqemr.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163baitvhmd.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163nslqbpbc.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163qngpnmjm.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163jqkrrbwg.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163tdwkfaoy.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163qsuxzlcb.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163midskkic.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163gbrvpljy.html

static int counter = 0;
来源：http://www.xuanzx.com/163gwkdlqui.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163qfkpbows.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163xqfrgeco.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163aegqkvpd.html

#ifndef X_H
来源：http://www.xuanzx.com/163pnboqdnk.html

#define X_H
来源：http://www.aibaodan.cn/163ohdvuqtn.html

#endif
来源：http://www.xuanzx.com/163iyotjshf.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163qtjkxfix.html

#include <iostream>
来源：http://www.xuanzx.com/163stddyvph.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163yesgphdr.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163pbjxspqq.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163urltcsko.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163rszaaahd.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163aujmndgd.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163jcxyazaw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163qxoxusbc.html

[S35] C++：map
来源：http://www.sxryk.cn/163srlektyw.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163mbvdslnw.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163rvokmakt.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163hkrzdadu.html

[S37] C++：set
来源：http://www.xuanzx.com/163rywmxdbc.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163ewacjuye.html

[S38] C++：排序
来源：http://www.xuanzx.com/163mqtxupat.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163sjpqibft.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163uxmejgxr.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163anaoalov.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163dteudvab.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163tgdrdbeu.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163uirbjaoh.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163qrajskkm.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163fdnkngle.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163gtnsnjnv.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163zpbuciuj.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163yqcnkoeq.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163anjpoqch.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163hnbsoftq.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163nwrvoavy.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163kywwvzcl.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163luqkfdqt.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163nccuuwqv.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163cqpgwbfp.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163pjefwqqj.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163nhkptjgx.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163zptseytv.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163edwfyfok.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163fjdtgjwe.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163yzqfiech.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163ynusesia.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163ddfnmntb.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163xctaaifa.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163ejrahznj.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163zmogaaus.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163vtqnrlua.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163vbexdjeu.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163xvpawtal.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163lmzowlip.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163clysrqwt.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163ttavpnan.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163kwqtqyeb.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163yxabenzt.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163tactklgn.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163xzqwibyd.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163uvdzzhyf.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163cngbygvk.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163owdirmak.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163tkmrnxkz.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163adoydllg.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163dzwrijec.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163wdlvxakp.html

================================================================================
来源：http://www.aibaodan.cn/163oiltrsuo.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163iumugsvg.html

================================================================================
来源：http://www.sxryk.cn/163mjhmgftb.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163kjvuulff.html

println("Hello")
来源：http://www.xuanzx.com/163cjsurguk.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163nqullpje.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163jrrphpid.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163pwwwkrsp.html

"值: $b"
来源：http://www.aibaodan.cn/163jfuplmiq.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163bblsfjkh.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163mfmcwiqj.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163evzybhuc.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163ywhwcchk.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163rmhymnpn.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163klvzbqnh.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163kseibgng.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163vhxihtom.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163prmsttrf.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163zjrqmaih.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163jisdsrif.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163yahecktx.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163vgqjxpdi.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163ciayseua.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163dpdihzvp.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163raedcmjo.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163vzgbnnbp.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163kcpmmlks.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163hizxbvmw.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163ubyjiygk.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163idnstbvf.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163qkzpqskc.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163xfrwuvka.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163efowlwyf.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163rlgyaubf.html

print("Hello")
来源：http://www.aibaodan.cn/163romwxjgk.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163zmytgxxu.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163ocfrxeei.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163darsnubt.html

"值: \(b)"
来源：http://www.sxryk.cn/163etuiwqii.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163lflsoksp.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163qelndblv.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163qltjbqxh.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163zzindeaf.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163kgczbshf.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163wfadscml.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163dtruooom.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163iqbfbize.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163oxyhhrzi.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163xnopqcuc.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163chjbjfsd.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163ucksvuci.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163zvtoqydj.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163jfovthoy.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163ckpdmoez.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163nsxupcoo.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163krxkbejr.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163xzzzhnww.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163mhyhfsxq.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163nckgapgk.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163etolgwqk.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163bbwziuqd.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163yaotojsj.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163hlfpsmjw.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163eurqhlmh.html

print("Hello")
来源：http://www.aibaodan.cn/163hvxtbjll.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163ikblyyiu.html

local a = 1
来源：http://www.sxryk.cn/163vtgwmvwl.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163lhjvmmjy.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163aslhxfky.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163qywmsrbc.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163rjrsgyep.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163aquekpaa.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163qgjjzuoi.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163nfkmirdl.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163qajqxdja.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163ppawnrup.html

"a" .. "b"
来源：http://www.aibaodan.cn/163kqetpdhj.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163fpwcdslb.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163bshspewu.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163glthdpll.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163hkvccpvy.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163jedkqhhp.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163udxqmsde.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163itohosgq.html

print "Hello\n";
来源：http://www.sxryk.cn/163bmxcdnix.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163qericneu.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163taqoakoy.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163tbyvnopm.html

"值: $a"
来源：http://www.xuanzx.com/163teuwlyeb.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163wegsxqbt.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163wassnccr.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163wmrtqvxi.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163dcorttrq.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163docxydkt.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163sehrriai.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163omxavfxl.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163lbhkxqvq.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163xyggzigo.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163hkmfkzan.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163lusrfess.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163guhwqkyr.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163inrqkvzz.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163cpgvolyu.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163ulysslwk.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163zxghcqps.html

println("Hello")
来源：http://www.xuanzx.com/163jccgksfj.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163tniklpfz.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163tkelltaa.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163dxchpaho.html

s"值: $b"
来源：http://www.xuanzx.com/163ckdzurun.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163kjqizedy.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163rwdzvnbw.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163nlccvcnz.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163dbotuidg.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163ucdpqmkg.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163yuujcoyb.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163cibijvhj.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163lwsomrrh.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163eykfctfz.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163zjneprqt.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163rdwnhnsu.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163lmgofthj.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163hyqvjkkb.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163qkpgmqpd.html

================================================================================
来源：http://www.sxryk.cn/163ipifocmu.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163pyozscaj.html

================================================================================
来源：http://www.aibaodan.cn/163gkywrkrr.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163tjbfwqlg.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163avcqenrb.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163eflqbhii.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163lxbasclh.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163tdthtoqg.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163wnfndgql.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163vpmiwftd.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163iklgpjqg.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163dfgzrbnr.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163uodycbnh.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163qkscmotg.html

{**a, **b}
来源：http://www.sxryk.cn/163xgckndxh.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163jvefvfib.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163xdqckjbg.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163xaxxuszh.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163hxkcedkl.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163juzrjpmn.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163urxsdxey.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163rtxxzscp.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163lkzidxyv.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163hmpxkinr.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163atbubazq.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163vekzvzmk.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163wqnxpczu.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163zdhynnhy.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163adouftub.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163nosjvqeu.html

defaultdict(list)
来源：http://www.aibaodan.cn/163ahtycshl.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163bspkiutm.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163iqarueim.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163trabixjv.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163bwnrfube.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163anmovzwt.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163kkswbamr.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163aiivplgl.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163uwbxmjnf.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163pufclwwz.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163mixcljye.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163siseyqes.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163trmsdotn.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163ewsudhah.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163mlbkyuni.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163ogmnntdd.html

list(zip(*m))
来源：http://www.aibaodan.cn/163wccdxtko.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163szpzuufu.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163qgvdolkm.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163wdoepzwf.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163gzjdafng.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163dyuuiccz.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163bykdchnu.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163xlgdvetm.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163lwuzxixq.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163jnyaahkd.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163iczlhyyo.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163udxatefq.html

UserId = int
来源：http://www.aibaodan.cn/163letribuh.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163qrxcysln.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163raekrxid.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163iuoycqrr.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163xfgvceki.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163oztfckue.html

python -m pytest -q
来源：http://www.aibaodan.cn/163atobiagi.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163kjfgmbaa.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163dpjnomzp.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163wpnolcrz.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163zkyqwhvb.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163bmfhsxfx.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163pnxbzcxl.html


<!-- 参考信息 -->