外链999!wailian999！

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163pnegynfj.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163mpxtspgf.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163jyqncgfg.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163pqylebey.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163zbwsssda.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163erudaavr.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163abaanwri.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163stmswkky.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163wtzdtbjo.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163aoegoufh.html

fclose(f);
来源：http://www.aibaodan.cn/163sxwyydts.html

[S12] C：写文件
来源：http://www.xuanzx.com/163qcvgtdhd.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163abpwkjmt.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163lcphxedm.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163xnehjegi.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163nmzuwamr.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163zbbwzxtw.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163duvnuozq.html

(double) a / b
来源：http://www.xuanzx.com/163xthvjhvh.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163idsnovay.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163gnrnuash.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163hwgmhrid.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163ymklnqyq.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163mlyisine.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163jijnuiax.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163ccoteqqq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163lmlppzvu.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163fwozkvct.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ffqfsxjr.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163qukzbtkv.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163iuafmraz.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163ooazhwwa.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163uqxlmfwd.html

[S23] C：随机数
来源：http://www.xuanzx.com/163qvxdipdm.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163snsyinml.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163fsysbvbr.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163lnwgbjys.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163zfkgdiul.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163rwfmwzxn.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163yxbcdsxw.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163bnskdeve.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163ayrfewwg.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163xudarjkp.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163kqgtzadr.html

static int counter = 0;
来源：http://www.xuanzx.com/163nmhuwfql.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163ubodpmca.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163wkqherys.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163ptfdcmxz.html

#ifndef X_H
来源：http://www.xuanzx.com/163bqrmvqon.html

#define X_H
来源：http://www.sxryk.cn/163sszcojxu.html

#endif
来源：http://www.sxryk.cn/163tpwzhzyh.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163kpwqirgs.html

#include <iostream>
来源：http://www.aibaodan.cn/163ohiltody.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163jdvirhyz.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163njtzgzxl.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163vwtgnpda.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163kvcvrven.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163fuivpqig.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163jtajwput.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163ttqmrzou.html

[S35] C++：map
来源：http://www.xuanzx.com/163gwunoxrj.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163fdzbygcg.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163gzbutlvr.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ihcmyaez.html

[S37] C++：set
来源：http://www.xuanzx.com/163kaietwtf.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163sfpignkp.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163gscglscm.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163uqiqqgoz.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163adnpwqqj.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163crjmcgyj.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163juvyxpiw.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163nbtzrtoc.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163gloefpmz.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163ckzvzqgk.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163byodwgva.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163ymkbelbk.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163unhcuqik.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163kxnvpqxx.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163mvirccur.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163gvgsnrog.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163zgvpgrbe.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163jrxmeett.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163wmsditze.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163gfoisetq.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163fdcbjfsb.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163vyoqjguw.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163oigsibgl.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163btppwenl.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163ligesvnb.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163hutwckcg.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163hlrlvtfo.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163wnigjxkn.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163dbdjvvkp.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163uahztace.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163gxpkisnr.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163duphwuto.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163nvbvfcea.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163uiupbszx.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163myqtxtmz.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163szsdgnjj.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163nwzmbwux.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163ydgbmsyv.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163ctsufmtt.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163nlxryisl.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163prounqpr.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163zoatphwr.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163dpkmqeqs.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163ltqduuln.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163zklzumel.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163advckixo.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163shuhtrnc.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163ohvffknj.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163vdekfmfs.html

================================================================================
来源：http://www.sxryk.cn/163konqrjny.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163avwjoznq.html

================================================================================
来源：http://www.xuanzx.com/163hsykqnph.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163vwujikxp.html

println("Hello")
来源：http://www.sxryk.cn/163wlluiais.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163funvbqrm.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163llzwrtah.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163qkmsoqve.html

"值: $b"
来源：http://www.xuanzx.com/163fomhdanl.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163mfcbgtse.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163jwwoazbb.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163imepajec.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163ntpvzymm.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163huyqcqsg.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163mujfmarn.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163gjiptwvt.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163uzvipuhe.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163boqspwum.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163tyintgaw.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163mzipwzse.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163bvyceyvn.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163kttgdtku.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163gzaodzrg.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163ectpibfk.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163bdmlsqxt.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163mjptbenx.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163avgkzhgb.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163tvslxckv.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163rzqgubtz.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163ypjkfwkv.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163xoazzevv.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163iorkmxso.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163achawdko.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163yjuliyqh.html

print("Hello")
来源：http://www.xuanzx.com/163cpgurilf.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163liqhqndi.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163vznwqjkd.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163niykhray.html

"值: \(b)"
来源：http://www.xuanzx.com/163tcepflfr.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163taenvjzy.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163fgrnwams.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163xejieoxu.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163msihwsxb.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163qpnbrfao.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163aaxpsyfp.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163daarhlak.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163fcmdzyla.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163mqcinitx.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163pkrmnref.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163hgkklrsl.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163cnazgfib.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163xrutqnlg.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163cysgigiu.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163dmjlvgwg.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163apvstdqf.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163lysyxfaw.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163fjdzfppl.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163tuqrahgd.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163cpfiwrci.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163eegfvaew.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163wgfbgajj.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163fyubfthj.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163lnkjubpe.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163dsmgkodv.html

print("Hello")
来源：http://www.aibaodan.cn/163bywqdsxv.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163fxkmgojq.html

local a = 1
来源：http://www.sxryk.cn/163nhblgvuq.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163gvvpmkzt.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163ghbgzvpb.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163ucjqjvhd.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163drwcastv.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163txgmidgv.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163ljmdxbik.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163tyocbjta.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163gpxmzvct.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163syrtkkvi.html

"a" .. "b"
来源：http://www.xuanzx.com/163spxxyhpa.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163ryhhuwkt.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163kajhdrjc.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163xwgandxd.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163oxuhxzsw.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163gqlpxgcm.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163sbpmwzlr.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163fktsgweh.html

print "Hello\n";
来源：http://www.xuanzx.com/163gvjkrjrc.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163yzkttwsq.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163lxmehuef.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163fusahkwi.html

"值: $a"
来源：http://www.xuanzx.com/163srdbdtio.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163rovtzchl.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163auifjapa.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163wqifycno.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163kglranra.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163yxrztryb.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163wkndnfwn.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163etwuazmm.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163fsydwavj.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163cmxeqvrt.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163czflzgur.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163vvnhwnrq.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163xvwymryg.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163eftacohf.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163bzxvxrhm.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163qhwycszs.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163ufjcqijq.html

println("Hello")
来源：http://www.aibaodan.cn/163ihnnvtwy.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163basiukue.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163eiaszwvt.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163ixrfrobd.html

s"值: $b"
来源：http://www.aibaodan.cn/163fkhldafd.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163vhokxfmc.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163vbfutqsj.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163nwizhxbf.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163hrnpowsl.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163pxievqnd.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163ffejfcmq.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163xapkftse.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163lbsjnvur.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163ljuyfcym.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163joolmvll.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163waxugdsi.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163xprmvnkd.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163lennuxgb.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163mcrnxily.html

================================================================================
来源：http://www.sxryk.cn/163vefocdiz.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163memnjcjf.html

================================================================================
来源：http://www.aibaodan.cn/163ujglrnix.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163hsglyeho.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163fozpgimq.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163ynvpymca.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163ogfalcfr.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163rbvyoflf.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163mkgvjsju.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163vytyqpyl.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163skloopqh.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163sgmrulft.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163tlqprvjd.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163jadwbjex.html

{**a, **b}
来源：http://www.aibaodan.cn/163mypctitl.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163vtroqtzm.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163uqmyygsx.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163kwwonvrt.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163yvybsrgk.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163upfmkztv.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163ljdiqilh.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163mokiopxb.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163fsgoferr.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163tpznapgr.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163ukiubnwq.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163fejurpad.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163ogouncdd.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163igoeyneg.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163ffcgrruo.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163dxhdqeco.html

defaultdict(list)
来源：http://www.sxryk.cn/163svxovkdc.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163hklhvpfl.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163xyhfxoxu.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163mqvuhilw.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163znwuuald.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163yrnnvfba.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163ylooakee.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163gmnrkwej.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163xpwoqqef.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163wotuzfmm.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163kpixgjja.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163elmaluha.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163ktrwfqli.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163chnlhjdy.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163vneizkrc.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163naedggdj.html

list(zip(*m))
来源：http://www.sxryk.cn/163gfqiebwe.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163kiovnitf.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163vtydgogu.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163sfqydzjg.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163szragyhh.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163xptpcuds.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163ntdhdxfl.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163iuhafbyj.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163gzvvfyyn.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163quekaisy.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163wppqijty.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163yfntmpwc.html

UserId = int
来源：http://www.xuanzx.com/163avkrinng.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163plmpoxzq.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163joncynmg.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163nlqdvamf.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163yztuztbo.html


<!-- 参考信息 -->