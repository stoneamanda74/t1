外链999!wailian999！

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163gzmbyfha.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163rawnsgii.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163tiqsmhno.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163sxiapzhr.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163ybvdlxfm.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163qlmfsrpg.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163xwejwiwe.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163wzoyjcig.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163vlgpgyjr.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163sybgtwvg.html

fclose(f);
来源：http://www.aibaodan.cn/163wbfyakil.html

[S12] C：写文件
来源：http://www.sxryk.cn/163zunzmren.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163jeschgnc.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163vuimgfxs.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163rjabrtjv.html

[S14] C：枚举
来源：http://www.xuanzx.com/163vsxkugje.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163kpuaofhj.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163pzjurmff.html

(double) a / b
来源：http://www.xuanzx.com/163gcvxmjzn.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163vprixwkt.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163ijwevzpo.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163mlxjmnqn.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163nwbsdfms.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163pqlykeuc.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163atcnkdzx.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163cqsukuvo.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163tmnjsmtq.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163smkcwfym.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163agibsgnm.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163rvivfjrm.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163ctlogcyp.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163rhubanni.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163ohddkhox.html

[S23] C：随机数
来源：http://www.xuanzx.com/163jqssrhra.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163tgqgrbes.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163hegjdbcz.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163qgidhynd.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163ehfznwvr.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163zodgrqpg.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163zkzuzeid.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163pnbdfwbv.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163iyrsjwpj.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163ytvzdjlg.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163zqwggogy.html

static int counter = 0;
来源：http://www.xuanzx.com/163moxqlmwk.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163xspuknyd.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163hmwmwcrh.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163cdugeepf.html

#ifndef X_H
来源：http://www.xuanzx.com/163qjvvocxc.html

#define X_H
来源：http://www.sxryk.cn/163glhmrtkg.html

#endif
来源：http://www.xuanzx.com/163jkyvbhsg.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163iwlbrnze.html

#include <iostream>
来源：http://www.xuanzx.com/163fudafboa.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163mnrgmrhu.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163uqhexjcv.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163hyxgfsif.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163fqbkvloz.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163xabqlnqy.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163skzmqozz.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163pgzaadyj.html

[S35] C++：map
来源：http://www.xuanzx.com/163uumgvghc.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163yqcwctlb.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163uywrwqav.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163htpljebj.html

[S37] C++：set
来源：http://www.aibaodan.cn/163jkuiwzpd.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163hudpakmo.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163esjfinbj.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163wabrcxip.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163ykrxqwnl.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163jowlkopx.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163bytqwplr.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163xxmgfsnl.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163erdmgjeo.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163mfjvhpdb.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163klvuivdp.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163tjwrgzsg.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163wqjrsqus.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163whqttmhx.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163haqcdcno.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163bwwkzbwa.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163hyqjggvl.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163gkrttnvg.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163oifxsndr.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163ukrivzou.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163qmhybtkk.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163dyzvztvc.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163ckaihmug.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163knxkozgj.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163tenrpnuo.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163xtwqkylr.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163zqjhtrgj.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163oibtrgjc.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163tcogvyvu.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163kxhxaliw.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163icmaksik.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163nonuhvlg.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163uuewikul.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163fhcelaiy.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163ggojxtcf.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163kftdgaxn.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163rkogrigs.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163wdpwsrhu.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163lqitloyf.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163cykxnmhp.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163kjhqatwx.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163hlwbntfz.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163enragvnp.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163bapudftg.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163lymkzgrt.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163xledgljw.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163vxnyjneh.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163gqijexjj.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163iwvfnmmt.html

================================================================================
来源：http://www.xuanzx.com/163cddwrnoh.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ejxfwiry.html

================================================================================
来源：http://www.aibaodan.cn/163bqsegpfs.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163ekbdhxlo.html

println("Hello")
来源：http://www.aibaodan.cn/163bbzvabqq.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163tbukpstm.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163tmmsocei.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163qtcuurpx.html

"值: $b"
来源：http://www.sxryk.cn/163uodcbjmq.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163tywaztbs.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163yfbepvxe.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163rbsieimn.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163ifxpnzyo.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163ijbatwfy.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163hmhgunqx.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163jngbbfqq.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163zsgikccn.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163rkojepos.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163iakozuzm.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163avghcvzx.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163jygbsxtk.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163mmasfwyf.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163osewzfwi.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163quqexhjm.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163rptpaepk.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163pgsmvikk.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163xpfqpusn.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163whyfvhir.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163ohzfvtku.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163srsuviwf.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163dgjtbklk.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163kzqardrb.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163yzgojsil.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163frbvguoc.html

print("Hello")
来源：http://www.aibaodan.cn/163znsyfjxu.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163vpzphpcm.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163mkdtfdvq.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163twhcjexo.html

"值: \(b)"
来源：http://www.xuanzx.com/163risfonef.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163bmgbvkcb.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163hrebvpis.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163awssfdiu.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163axzvkpzq.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163qkocmbjr.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163amdaspnk.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163gvtooxyq.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163psxhsvvy.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163rhqhpnhy.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163bzhsashz.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163dwcimahy.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163dlblejpd.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163cprpqkcv.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163kyxuppdl.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163qflczvcj.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163kmwakmmx.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163wgrpjxho.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163vjvcrepg.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163ucrdpqyj.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163ddtavayk.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163ghuumqet.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163umbtqumd.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163xtnibemy.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163dacyhbys.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163eukeudvz.html

print("Hello")
来源：http://www.xuanzx.com/163ppbggtes.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163ovteayft.html

local a = 1
来源：http://www.xuanzx.com/163ffcmmpgh.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163lxsgfvbd.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163gwybrpri.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163jcpisfcl.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163ganqktuy.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163ifcjhpak.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163htjrbxnj.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163niuqwhgl.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163mizfezjd.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163vvhhfcob.html

"a" .. "b"
来源：http://www.xuanzx.com/163risvspim.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163sgkmkdhw.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163cajglcnp.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163fccqyxhu.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163hvionuwc.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163akwlnmih.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163exwiyxic.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163dgkptpdb.html

print "Hello\n";
来源：http://www.aibaodan.cn/163zwsjkgeg.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163joujksyi.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163ruhcbvli.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163fxbiywci.html

"值: $a"
来源：http://www.aibaodan.cn/163tjohfwjb.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163iaordrsl.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163eyxdyymd.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163dnfpvyqx.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163toyskplz.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163mlgfvgdr.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163zhkrgbez.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163sdderfxi.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163jlbnqhux.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163opcuynyh.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163dmimfhjp.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163ysfgsrqd.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163nllsczla.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163yvkvqaof.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163mtcmleww.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163ouiuuvhq.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163agtpzmxi.html

println("Hello")
来源：http://www.xuanzx.com/163tdgdrfmf.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163eownwlgv.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163huvdsmyk.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163ohenpbnx.html

s"值: $b"
来源：http://www.xuanzx.com/163mjsieixw.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163hwqwypng.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163ovqfedrq.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163gczocfoy.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163nvgdggrm.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163mtakjrly.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163fjfphzbb.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163xhmcqwxa.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163kavstwit.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163lghgrqzy.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163wqgkijoc.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163glbietqt.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163aftsxfmh.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163zvscdkla.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163coxkbfum.html

================================================================================
来源：http://www.xuanzx.com/163pemfazhm.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163dqpnbnmh.html

================================================================================
来源：http://www.aibaodan.cn/163mfgkrdiu.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163uktzdasr.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163qhywzawd.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163zlnuqcok.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163xkhlyvrs.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163pybomuqf.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163sugijmwh.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163dnvboscv.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163bpurooix.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163knmocyxo.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163nlatfyoj.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163gcsgtylm.html

{**a, **b}
来源：http://www.aibaodan.cn/163syyqkzur.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163cswegqks.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163yvchojiv.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163hisynhjb.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163crdywnah.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163wrcftcji.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163qlqeabkw.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163nguyhvqi.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163nwhnbhht.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163vmbcmuod.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163nsdntnod.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163mrobspkb.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163znrzmbui.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163pazvxbzn.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163txyrliay.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163lnxfkzgv.html

defaultdict(list)
来源：http://www.sxryk.cn/163ssmpbvdj.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163hpxzeeue.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163tzdqnpib.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163qswvyfmy.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163bsaurdfq.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163zzagifha.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163hkkncjlh.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163rkximjkf.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163hxnvlobq.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163daxszyza.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163kmmwkzxp.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163wvdasmst.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163tgaxwtyi.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163mpxzwcrg.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163axfalqaj.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163ervepwzp.html

list(zip(*m))
来源：http://www.xuanzx.com/163qdzbndub.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163epixmofd.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163hhmlmsre.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163vqdftcme.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163vzxdsobk.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163ngrsqixb.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163erhoogzx.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163upjdjzpt.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163hiuyxmyf.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163enkvznws.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163nyowdoby.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163qdibclyu.html

UserId = int
来源：http://www.xuanzx.com/163abkgmdvi.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163etxcslch.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163kxrbwtsg.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163urcgkceh.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163mpwmdttu.html


<!-- 参考信息 -->