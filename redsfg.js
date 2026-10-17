外链999!wailian999！

strlen(s)
来源：http://www.xuanzx.com/163oeeeupgv.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163qzvftyao.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163wacehewa.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163ahhudode.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163tifwfocb.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163nvuzpfdy.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163fyugujtn.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163qqizmauu.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163ztfylznj.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163tltqdmob.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163gaunjbti.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163mbktsdtl.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163sozalzto.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163cmhxqrna.html

fclose(f);
来源：http://www.sxryk.cn/163ocstagky.html

[S12] C：写文件
来源：http://www.sxryk.cn/163wgyjtcgs.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163hpyjrlqn.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163gbzxnzzi.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163lbtsgwed.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163bqwyvcsx.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163qjlncmml.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163voksmjel.html

(double) a / b
来源：http://www.sxryk.cn/163yrtbbtpf.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163nfohzmyh.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163gyzamqpl.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163eygvhjwi.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163sfsnpzir.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163nitkvzet.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163yhdukbfx.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163samrkbgj.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163prrytrbk.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163zwwtdkkc.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ijpejehm.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163ruzeucgp.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163dvfslrhi.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163qqwbckse.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163edbnjxwl.html

[S23] C：随机数
来源：http://www.sxryk.cn/163gkspfzqk.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163tgsbsqtp.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163hczudvwh.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163pintzcfe.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163luxucubb.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163agagvmgq.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163gtttmfko.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163wrbjhqko.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163gozmlxaw.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163fegktcxh.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163kbulcobo.html

static int counter = 0;
来源：http://www.xuanzx.com/163fdqvffva.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163snsrgwmu.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163hdijxvrk.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163uyssiqig.html

#ifndef X_H
来源：http://www.xuanzx.com/163uswbrkdd.html

#define X_H
来源：http://www.xuanzx.com/163nsftriug.html

#endif
来源：http://www.aibaodan.cn/163uaptowzf.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163adzawvvc.html

#include <iostream>
来源：http://www.aibaodan.cn/163zrzfiigy.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163szsrwcpe.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163irpjtmgu.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163tyfsyqhr.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163esbmqjzy.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163wfhfxexo.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163nagrkrro.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163wumgiagz.html

[S35] C++：map
来源：http://www.sxryk.cn/163oygbwpwt.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163dtsauypb.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163gkrjhmnl.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163dgysspeh.html

[S37] C++：set
来源：http://www.sxryk.cn/163onuxmisq.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163swfegdah.html

[S38] C++：排序
来源：http://www.xuanzx.com/163jyrvkwwf.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163vrvurxqx.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163fqfmwikz.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163kncrsxck.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163hnnosxbl.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163vpfgwqyv.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163hkslqfwd.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163rphzbuqp.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163ulwcmrqj.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163nytlejgw.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163pfhpxtpx.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163ytxflqil.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163nycvsfbt.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163woavrnsx.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163utrfegbn.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163dbrvlfjv.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163qstrotmw.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163ytnvatcl.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163qmdhwibj.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163ygwqvgok.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163pfucsidz.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163anyzrrvc.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163suatiziw.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163zhhvoxip.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163joultbzk.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163kzcgifxt.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163wulyyfyl.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163duejluvc.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163cwxaqmux.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163prbdktpl.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163neljbnjf.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163ohotrpqq.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163ojbipbxo.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163wevebbzg.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163pinhpysn.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163qthpfwdd.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163qnprqydo.html

[S56] C++：optional
来源：http://www.xuanzx.com/163lsbwshfr.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163zdfnjqrj.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163jmcbzlxz.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163djqnkpxd.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163exzncpin.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163fcbxnewb.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163haftvltm.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163ohocyhad.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163ctiqzebe.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163hmlumkvs.html

================================================================================
来源：http://www.sxryk.cn/163owuwkhtl.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ujgglebx.html

================================================================================
来源：http://www.xuanzx.com/163dwobxxls.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163sjbjqbbc.html

println("Hello")
来源：http://www.xuanzx.com/163ktadmqmu.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163nlukzsfq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163tfbyfmhg.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163tbwpzego.html

"值: $b"
来源：http://www.sxryk.cn/163podnggik.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163mkpcyyld.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163ouaknrmv.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163kcxvlpwb.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163wiymsabe.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163azffcaop.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163yswgpclu.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163lhrxxhey.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163cywelatt.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163dgwfznlj.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163gbgootnc.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163bgcwoyae.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163scpwkkpk.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163ktpurnds.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163ihafodkd.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163atqubvwf.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163mjpskeop.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163pnlsmgfq.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163ksucgiuk.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163zwrgzrft.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163deiwjixf.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163svxxomxw.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163wffbrvcb.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163bibtywim.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163rkpopvmi.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163wwwheqse.html

print("Hello")
来源：http://www.aibaodan.cn/163ebtocera.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163qajuwwdn.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163whiqbqbk.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163yysydnnl.html

"值: \(b)"
来源：http://www.aibaodan.cn/163luwaiduj.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163btrkktko.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163jntqcwcg.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163obnzlwnj.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163sqvxdulc.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163mwdbokso.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163zvsopsgo.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163wlidszmy.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163geubnyma.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163kumcoyut.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163omqrpadh.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163frdnrpkr.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163eudoaxgy.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163xhwosvun.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163sjabrwfs.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163rkpgbbhr.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163ficsiqpz.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163rxoklnhx.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163cawbckwr.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163ddlzyprx.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163hoxohtct.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163uxrudhhd.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163azubhbrv.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163bzijbyfj.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163mfocbedc.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163gbibhnhc.html

print("Hello")
来源：http://www.aibaodan.cn/163jnlhvybm.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163upvkjsms.html

local a = 1
来源：http://www.xuanzx.com/163tqrthpwd.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163vbgngoea.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163tfltleuw.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163qaiaqpdh.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163gidciqeq.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163hnrltcza.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163iliqphhn.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163szymtkcs.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163rnezeedf.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163ivniagpb.html

"a" .. "b"
来源：http://www.xuanzx.com/163fjfugwxz.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163jxzglbrb.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163blvvxguz.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163ygctggzx.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163ajunqlix.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163gmmmbbql.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163tfzbbwea.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163uselhasv.html

print "Hello\n";
来源：http://www.aibaodan.cn/163ermvvwwm.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163flwfhhhm.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163pyqytacu.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163idowvwmg.html

"值: $a"
来源：http://www.xuanzx.com/163bchvlbyl.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163fcvzsmtl.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163rkvcorho.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163kwayxide.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163zxkudnox.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163jmvnksrg.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163fpvegqea.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163xychskoj.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163vmyrxfbt.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163rkjyhzpz.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163catiqpnd.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163zcnapaik.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163ehwkxmku.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163zgdhhxaf.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163qaipuapf.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163enszwtpy.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163cddhzmah.html

println("Hello")
来源：http://www.aibaodan.cn/163jtkkfpis.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163swybdplb.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163pciwbnkz.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163hnzvjcqf.html

s"值: $b"
来源：http://www.sxryk.cn/163lvocvuum.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163ijaznqmb.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163ddluavhb.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163ezcnymgt.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163nsaigndf.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163qoggflcm.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163ajgqfvul.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163iayatdlf.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163smkjhcfw.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163lnsrbihy.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163ofdaftwg.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163hfkqdtdz.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163ljjllmly.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163abcbpbch.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163jdfwrtsg.html

================================================================================
来源：http://www.xuanzx.com/163kqkjfbez.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163dkoayurp.html

================================================================================
来源：http://www.sxryk.cn/163ienewsos.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163eselwwpq.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163gsvgmykq.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163hluvnvyh.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163bofsdizs.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163mcpbcbkm.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163vqklrrel.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163yjtvtthd.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163tnppmmkf.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163rfvbifkf.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163rysuhkub.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163pxplkurj.html

{**a, **b}
来源：http://www.xuanzx.com/163wejbsctl.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163svnkvqmg.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163sqrvqnpt.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163angzxmln.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163kenkqnsr.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163nqjdtags.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163hxvutebl.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163usygtgmm.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163wekfcyji.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163nggoznix.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163qansbhjf.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163bbjcfwnv.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163xfvjsifx.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163ywtozsrh.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163uhaeaqym.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163iidgcgal.html

defaultdict(list)
来源：http://www.xuanzx.com/163malbhvir.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163quzltnjb.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163rbpdlkun.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163dejpsaoq.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163ibhagdun.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163oallfmbx.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163pkhnnnan.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163jjrspamd.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163teybgahv.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163yudfqttr.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163emixwlzh.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163dooqvsfb.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163nzncmnrn.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163jwozzrmw.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163cdujafvb.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163vpzvvwix.html

list(zip(*m))
来源：http://www.xuanzx.com/163rutblkpk.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163jdvakple.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163byziscwo.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163tcvmshje.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163iixyotui.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163elspjiad.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163naawmcpj.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163qklxqjxw.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163vrsqepda.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163vhscwror.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163ijhsxzye.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163abbaxxhv.html

UserId = int
来源：http://www.sxryk.cn/163tcwkyzhh.html


<!-- 参考信息 -->