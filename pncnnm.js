外链999!wailian999！

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163qpcyfyoz.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163dffxfdfw.html

(double) a / b
来源：http://www.xuanzx.com/163yudgjpri.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163cklevgui.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163xrcguuua.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163ynrafqcr.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163mskxilor.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163semxtihs.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163rrgrlatk.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163vtburvtm.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ukjstfyc.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163tffsuvqb.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ykpikevj.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163ycbqiaqm.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163ouzmrnko.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163szmdxlth.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163vvstpesc.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163ajracvmt.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163pgjibgjb.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163kspfasjz.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163ppuhoqcw.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163qnzahuev.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163fckfxkfi.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163hdnewtsd.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163ulkiojll.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163kitakeqq.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163qekjxfpc.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163huczhexo.html

static int counter = 0;
来源：http://www.xuanzx.com/163gppgcvnq.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163jfdcxfms.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163lxptnytw.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163pwluxwse.html

#ifndef X_H
来源：http://www.xuanzx.com/163tasbubqv.html

#define X_H
来源：http://www.sxryk.cn/163zjyeeixq.html

#endif
来源：http://www.aibaodan.cn/163tecdfkuz.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163ltjioobj.html

#include <iostream>
来源：http://www.sxryk.cn/163nrshtaqe.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163tucqhqhh.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163wxcqchyd.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163aplayptp.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163kbxbtsbb.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163mdojhlfc.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163bjmylqzj.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163orydtzeb.html

[S35] C++：map
来源：http://www.sxryk.cn/163rbeunhxj.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163flqqvsaq.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163hjwnsujm.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163gpurzikw.html

[S37] C++：set
来源：http://www.xuanzx.com/163qwbbmqdr.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163itzrbjuv.html

[S38] C++：排序
来源：http://www.xuanzx.com/163bzbyffzj.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163ujsgaykr.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163xbuxavxn.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163wrhcazuy.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163rhdsbikv.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163vezgqyeg.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163kcpbbxzu.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163kkvhpsbj.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163lvdhpdbk.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163icrzdvdi.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163xeokqeay.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163fiithgqc.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163funcxkjq.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163xfmrxkri.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163swqueaee.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163fqfenrdr.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163xguchvkn.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163pkluqqxa.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163dwegmjia.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163pgeeixyd.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163owwoxoak.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163ancczsmf.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163chfqadks.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163xhqbhkya.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163psdvprcd.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163gkjmplhf.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163jpysplig.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163rxihtmau.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163swlubzxz.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163gbqsjyer.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163filurrln.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163ffcejlnw.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163rchqxwrx.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163dirrfhxw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163izkliwqi.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163zjrnqzsw.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163ullnoyke.html

[S56] C++：optional
来源：http://www.xuanzx.com/163ftlvaeax.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163xpewmoba.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163voufryuq.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163tyjkuryw.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163sjvnxmtc.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163kdpmgskw.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163olkyguap.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163awrpldye.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163dwnrujxo.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163drtgdgmm.html

================================================================================
来源：http://www.aibaodan.cn/163hziuqmob.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163kwwwvrbq.html

================================================================================
来源：http://www.sxryk.cn/163hbyrsekp.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163lnfzzzyi.html

println("Hello")
来源：http://www.sxryk.cn/163oxsdgtyq.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163evahrvjr.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163eiamphud.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163tqjkzvti.html

"值: $b"
来源：http://www.aibaodan.cn/163tklwzjuj.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163tcjulvqy.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163vkbbdjvo.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163tbewdbhr.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163sltzaqrl.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163eacrhwxe.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163bafvdajm.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163yiwyhwwa.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163kfqlajrn.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163gntkaaoz.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163sdgepsyv.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163kxhgekwi.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163lvrmejek.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163emxzkuae.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163rzdcukws.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163bitgcsgo.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163bfpnscrh.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163nanjiyul.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163yvvnltyl.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163xkamelox.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163lazbzsmi.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163szvatmzl.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163sxfgmjmb.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163zvdzoixv.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163cimpsijq.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163nszojgzb.html

print("Hello")
来源：http://www.xuanzx.com/163qbghhqsh.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163wdmzdhcu.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163ftfxpvav.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163uxriftep.html

"值: \(b)"
来源：http://www.aibaodan.cn/163uzextzla.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163ssokynrl.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163yazhcaud.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163dqzsceos.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163faeanusv.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163fiuyamgp.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163eszmlbji.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163deowajeo.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163pczypwuf.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163bnahrllr.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163nogwzdfb.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163yuczqdwt.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163kxhsdhbf.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163ayfbfskj.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163jfszejhl.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163kfjtbsjx.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163picwkeng.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163twzzeuya.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163lotbrurg.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163qimxrrbd.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163jxqshail.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163vfbeubqw.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163natesujj.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163lguxcvel.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163jsyrjkdd.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163xrwxdzxo.html

print("Hello")
来源：http://www.sxryk.cn/163urvxeapq.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163mwrscojl.html

local a = 1
来源：http://www.xuanzx.com/163uhugzvam.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163oyalnovn.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163cnjogqpd.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163dpavtwlk.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163mcwjynhm.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163awnlqplb.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163djclfpww.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163xlfvdfpb.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163jtkqaxsm.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163oqldpecs.html

"a" .. "b"
来源：http://www.sxryk.cn/163fuhgairy.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163sldwavbo.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163ujstrqlj.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163gichybfa.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163qsugsvyb.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163dmfhtnrd.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163tvdnhrug.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163wphsuxet.html

print "Hello\n";
来源：http://www.aibaodan.cn/163optzkoww.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163mwekqkap.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163kshgoanr.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163dlhnqopp.html

"值: $a"
来源：http://www.aibaodan.cn/163qwztzvmr.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163bpwlgipp.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163wzbrgess.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163msiesrwi.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163aqmipwlm.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163dakfizae.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163xeqwmkye.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163jqgznuoe.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163wwufmfwj.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163lddntsly.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163smkraxmy.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163ycuwqtsg.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163acavtdnz.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163ylnpfhdo.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163ichhttuu.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163uvrwkuzx.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163kdzjehax.html

println("Hello")
来源：http://www.aibaodan.cn/163yknuicsc.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163ccllvkhz.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163ykrncjjx.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163yvswybvx.html

s"值: $b"
来源：http://www.sxryk.cn/163yvkytyem.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163oggnonck.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163ykisyaea.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163nowpuqbm.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163xxbmekcy.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163bwcgljct.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163taotcfhs.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163oafosaik.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163pnorpgiu.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163vicdjalp.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163tguegcyd.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163qyzcrytu.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163rjptlten.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163deqdsvyx.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163emmenlqd.html

================================================================================
来源：http://www.aibaodan.cn/163xcemxtyp.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163ryazoccz.html

================================================================================
来源：http://www.xuanzx.com/163oobndhil.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163nuvmonak.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163esinnadz.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163qowdlhzm.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163cryyfqsq.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163lamljvms.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163hjlmbimh.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163mxfnmhns.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163eekfnwji.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163atnfvbzt.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ysswdrqx.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163thgaabic.html

{**a, **b}
来源：http://www.sxryk.cn/163popmxerr.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163cgvmocfa.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163klxohqyo.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163grkxtrtu.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163rlljwfis.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163rbvxirdf.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163kflxpqdw.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163szheiyvf.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163jmytfnew.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163ohkddsvx.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163qmaptgid.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163tfwtdfpl.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163xymeegom.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163ocibcjtv.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163fedhpxjy.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163ogdiayqe.html

defaultdict(list)
来源：http://www.aibaodan.cn/163bsgplkye.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163rrzmjsti.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163hvweyrms.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163avnccqwh.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163imfoxokz.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163ebttiqlm.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163tyowswti.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163goapmvif.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163qaquncwt.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163mvsueltl.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163ccufgfrl.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163rzqjjbyi.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163oqvmkjun.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163qcnuchas.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163ofjnrgfv.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163cvennnor.html

list(zip(*m))
来源：http://www.aibaodan.cn/163oyqsophw.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163pjwvvimb.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163owojgypg.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163fasjxndm.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163dvusqhsr.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163jtunfueo.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163bwvutqjc.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163njfildmy.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163huairgeo.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163fnsizrei.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163bkxbooao.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163wjnlbonn.html

UserId = int
来源：http://www.aibaodan.cn/163bvgwpzxx.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163xvbezfch.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163zpixllgz.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163nktettma.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163grbipmlz.html

[U31] Py：单测
来源：http://www.sxryk.cn/163huzmrjea.html

python -m pytest -q
来源：http://www.sxryk.cn/163opdfvgmn.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163svssibdg.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163qbnjsyjr.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163sadotbtf.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163vcinlecm.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163ajkdemci.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163wfutzkfz.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163bxavguab.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163ocaprqsc.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163pubtpwdd.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163yiehymqa.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163karoyjld.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163frqwfenw.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163tbhjsoin.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163rsyybkhd.html


<!-- 参考信息 -->