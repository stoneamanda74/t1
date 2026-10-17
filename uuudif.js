外链999!wailian999！

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163oqbsluff.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163nskrubth.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163lonenhkp.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163jggxcilo.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163szgiploe.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163ooxczyef.html

fclose(f);
来源：http://www.aibaodan.cn/163dssiubvw.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163qgnssiub.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163ohltmvvv.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163ujkepxoy.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163hzexoxps.html

[S14] C：枚举
来源：http://www.xuanzx.com/163tkjufjog.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163klxvqrfl.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ibliloja.html

(double) a / b
来源：http://www.sxryk.cn/163sapiuvnm.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163glzuhkfq.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163igyuolha.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163pwheuxpb.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163uzefvwwx.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163slxogdue.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163lpjbtvek.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163exhovpzp.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163eytvbxqu.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163kblcciao.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163nxrhcxhp.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163mdxuxrqu.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163khchgxly.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163bpdvpdhu.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163iugbzkvv.html

[S23] C：随机数
来源：http://www.sxryk.cn/163fkxuakvm.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163nqnytumd.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163hqrzyjun.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163tvtmraer.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163matwcfwa.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163rwywqfob.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163ejoucqfr.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163fuablafn.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163fvthjpce.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163bwffsnjf.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163mmtjudro.html

static int counter = 0;
来源：http://www.sxryk.cn/163vvfhpnpd.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163febuuyrz.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163flowetgs.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163ftkpdsih.html

#ifndef X_H
来源：http://www.xuanzx.com/163idzjpwex.html

#define X_H
来源：http://www.sxryk.cn/163ponfeufq.html

#endif
来源：http://www.aibaodan.cn/163pipcumcb.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163hlxqursd.html

#include <iostream>
来源：http://www.xuanzx.com/163nlmbpqpf.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163ztirbmfw.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163adbadbnw.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163lfdtkysg.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163pcdakfbs.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163ngacqrdk.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163pnnpkhgx.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163lcsdtwqz.html

[S35] C++：map
来源：http://www.sxryk.cn/163jmpkjvwe.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163nyabywwv.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163vnkorrux.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163exufmckz.html

[S37] C++：set
来源：http://www.sxryk.cn/163zsfwmrpd.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163kvwtlhoc.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163lklserxv.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163fdjkgnis.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163dxbbvadr.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163akzjkpya.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163gjiruonn.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163fgkgrvfk.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163siyregrz.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163gtuulqlr.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163hyrjmsqh.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163miqiznlm.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163jfmodjfh.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163fbdxvchu.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163wfquooar.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163nynaoaqn.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163onnrvrju.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163xasjtjby.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163msutlcac.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163vnnpfkzu.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163jzeeyjny.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163nhchrjwl.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163cknloerj.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163ndsrgebw.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163xxoqpzei.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163vfbnhkot.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163dmgnfxwm.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163ybxovfpv.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163vvmmzlqq.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163cexsabfj.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163kcrttuot.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163gzcvdlhz.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163nhguttiz.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163mnzxymfk.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163qkfuspzu.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163hikqzlfy.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163qkmsfbdb.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163wwmhxcun.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163irjckucb.html

[S56] C++：optional
来源：http://www.sxryk.cn/163hiyjoavw.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163vikieigf.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163yxjguwmm.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163pquuxcyk.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163yquzrwys.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163wnqaxwet.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163hovbpkpd.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163taowpzbd.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163hqbquqxu.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163niwumndo.html

================================================================================
来源：http://www.xuanzx.com/163znwhrzwe.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163jhrnonee.html

================================================================================
来源：http://www.sxryk.cn/163rdclxtyx.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163lmjdlsge.html

println("Hello")
来源：http://www.aibaodan.cn/163uuyloxjl.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163mrvrkjpk.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163uermqalu.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163plnuczer.html

"值: $b"
来源：http://www.aibaodan.cn/163wgesnbxz.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163twljapen.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163zcjfrjxz.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163lcgpvqfw.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163gnjsnqdl.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163vbvcxdaz.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163yunbosev.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163kjweatrc.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163zlstfyfb.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163vzilgmnv.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163uejiaujf.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163ymhzptlb.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163huhzjrmx.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163gutvrqcu.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163pmqckfqf.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163cmaiewgr.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163puyhncpe.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163ekphfcnz.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163ykfjoeao.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163omijttkc.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163lbancnjj.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163irbybylt.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163ggqqajkt.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163rfeeqwxh.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163cowfothr.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163rlasjwof.html

print("Hello")
来源：http://www.aibaodan.cn/163ivatepsn.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163fqoawsoj.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163qemnxubu.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163wdnvwmhr.html

"值: \(b)"
来源：http://www.xuanzx.com/163xxhcsdrm.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163cznwjgwq.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163eqzyptkp.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163crszxmnr.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163hbvfyrom.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163ptrusiok.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163ghszznvm.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163bsqtlwcz.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163yfjepvdr.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163dhlnvdmy.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163ijrhlawh.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163jehhjzca.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163ierozjrj.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163asoznynb.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163jsitayig.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163ezhrfhkc.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163yaqutrxe.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163snveovbi.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163nbopteox.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163kbnrvbyv.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163vsloomdq.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163sqyviuhg.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163fjhqckyy.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163eyficlpo.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163tyskzqkc.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163wvvfbcwx.html

print("Hello")
来源：http://www.xuanzx.com/163kepfpzfe.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163pbpnkfcy.html

local a = 1
来源：http://www.aibaodan.cn/163awmjdpun.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163rbhgowjo.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163psqdoeap.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163jexsqqhj.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163urcqzbki.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163qsyudkbh.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163qfozgdcy.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163cpvuzgry.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163qigmgsqe.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163nijfysne.html

"a" .. "b"
来源：http://www.xuanzx.com/163mmvoyimh.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163fgoyejkq.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163tnqdgkvh.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163rmkhydxv.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163rvcbktup.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163kpxdiqxe.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163ovitizst.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163xxtvaiwg.html

print "Hello\n";
来源：http://www.aibaodan.cn/163qgnkoriv.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163knbhyczk.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163pmcrwgrr.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163kbexmkzy.html

"值: $a"
来源：http://www.xuanzx.com/163juiaqsoa.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163cdvaqooy.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163mobutuwp.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163vujbruzl.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163ekzmeqti.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163sbdcarqe.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163uuqamuvy.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163sqkdwqzd.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163gfpsfmqv.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163maixnlif.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163gvgzjsgw.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163dngybapp.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163bwohtqmt.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163qqzvhmlj.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163zskwviop.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163tmthdniv.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163rewdlwom.html

println("Hello")
来源：http://www.sxryk.cn/163rgskiltf.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163ozifiiav.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163ptctbete.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163bjvvrqvl.html

s"值: $b"
来源：http://www.aibaodan.cn/163fhasrwdd.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163uamdwesi.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163sduadbqc.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163gpnzamxp.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163vudvdxeu.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163uxlbdnex.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163haoiuror.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163yjqyupow.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163lddxixkf.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163ujfrnvaz.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163hpspbfqf.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163gavpelaq.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163fwbhchgl.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163eowvkeaz.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163rhlwftzi.html

================================================================================
来源：http://www.aibaodan.cn/163inlpstfb.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163tktorjmu.html

================================================================================
来源：http://www.aibaodan.cn/163gcdzzxzs.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163ztwfleaw.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163musjfxuq.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163cvhtvhjk.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163dkkorzzq.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163fzcigktv.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163ufkwidam.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163otxgsclb.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163onphpqyr.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163fbdzqynl.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ocdjmqtc.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163slgcovcc.html

{**a, **b}
来源：http://www.aibaodan.cn/163dxwvttld.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163oivnfwfi.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163mviyuctl.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163ecjewmws.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163rphlxokh.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163bjkoibof.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163byrxbbkf.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163fjflwsfu.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163bfsyergj.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163xvbkhwrp.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163ahbxdrrj.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163xptdfmya.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163txrikykq.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163fbkpyodu.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163yuxqgxoj.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163xrurtvhx.html

defaultdict(list)
来源：http://www.xuanzx.com/163afhlzurt.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163nfpzeppa.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163weaynbdi.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163llryukca.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163uppkjzyh.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163qwrlhfyb.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163popfwebj.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163wonavscr.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163yzxyehzo.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163iiemovzt.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163uawcxwib.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163gqozoyde.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163jqykycpi.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163mxeteojb.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163vwwbmsrq.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163brvdqqbp.html

list(zip(*m))
来源：http://www.xuanzx.com/163qgztxiqj.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163movjdjcp.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163mbieebof.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163qgwsydxg.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163pqtykbdr.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163siezbhqw.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163tujvswwg.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163kljxmwos.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163bcxlkcmw.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163qeuellgz.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163qbnnweyb.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163emzmpumo.html

UserId = int
来源：http://www.xuanzx.com/163epcjzkuu.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163vurnoeql.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163qgngnlsl.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163ifvulxhp.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163zacmkdim.html

[U31] Py：单测
来源：http://www.xuanzx.com/163ryjsrpaq.html

python -m pytest -q
来源：http://www.sxryk.cn/163ipmnarwy.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163idherkgd.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163fhrmpgyb.html


<!-- 参考信息 -->