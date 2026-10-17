外链999!wailian999！

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163eqalehyl.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163kavmanxm.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163dxffskax.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163cstbtvks.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163vamwxjsm.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163wbhgugqi.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163kdwmemzd.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163vcgstavp.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163pvgcdugq.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163gwjcgxyi.html

fclose(f);
来源：http://www.sxryk.cn/163nexqwlws.html

[S12] C：写文件
来源：http://www.xuanzx.com/163urseevqg.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163hbrntdpz.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163vybbxkqu.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163nqlwukwx.html

[S14] C：枚举
来源：http://www.sxryk.cn/163ivdfiyge.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163bhqhexoe.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163hvndnlls.html

(double) a / b
来源：http://www.aibaodan.cn/163nwjqvbvd.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163nbddthsa.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163arocbrze.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163xnjqyxez.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163aiipjjvb.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163zkuemksh.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163mezdryiy.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163yaaevjnb.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ihxpeuex.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163glpwgiln.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163jkoelvya.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163tjlatbmz.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163xblxgutq.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163cyrozsit.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163wykxvxqj.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163tyyeggws.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163owuukkcl.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163vgrmkimf.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163pfucdnrx.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163ibrdlrne.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163orggkqul.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163kxixlxbu.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163izrhfyqq.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163aospomcu.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163rjkhbfst.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163tuqokrtt.html

static int counter = 0;
来源：http://www.aibaodan.cn/163kxdtyctv.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163kqobzgzv.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163vvtppakg.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163shjjzpsy.html

#ifndef X_H
来源：http://www.xuanzx.com/163nqfnqsjy.html

#define X_H
来源：http://www.aibaodan.cn/163fkhalaht.html

#endif
来源：http://www.xuanzx.com/163rzysbxbj.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163ihncqllu.html

#include <iostream>
来源：http://www.sxryk.cn/163egdxqifu.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163mqlnfltw.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163hvefapnu.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163jbhaggcf.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163sarpsygh.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163twvnyoab.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163pmurojaw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163qgzpttld.html

[S35] C++：map
来源：http://www.xuanzx.com/163xvhbpvyv.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163vnzjrzyj.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163xkiltyjo.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163oqhgkpiy.html

[S37] C++：set
来源：http://www.sxryk.cn/163jvjzeqzz.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163jfzxtsyg.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163wfaxuary.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163opqdsdir.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163dndsygth.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163qfimirwu.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163mehuzzqz.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163qmwcbxpu.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163ekvryqvg.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163bdiwlbqs.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163aodizzpt.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163bvvfrlvm.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163igltzjws.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163oltsczlg.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163zyulqxhh.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163tsgvtcxa.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163ajqqygbc.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163zirlcxlv.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163dmybigbg.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163oqqklgqi.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163priaxswp.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163gfiombov.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163tsmdttij.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163gcmvgaiw.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163rhetctqv.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163bwalwrlz.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163jjfktllm.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163yokgaqcl.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163ejgiswnk.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163dhzchail.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163ooytwjic.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163crxwaswb.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163kcsjwblt.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163jssrqxzh.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163kupzzmam.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163djwlarsf.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163uxjgrbjo.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163hcefddtm.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163iecdmqyb.html

[S56] C++：optional
来源：http://www.sxryk.cn/163fidodtto.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163lhyungob.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163rkkpqony.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ggriomzt.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163wjdturcz.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163dfmbqetc.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163dlgnbhrg.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163wgbovjlb.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163isrdcipp.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163vjsagqfa.html

================================================================================
来源：http://www.sxryk.cn/163aeslfmub.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163pyeeblsk.html

================================================================================
来源：http://www.aibaodan.cn/163aprhajld.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163hipovbkf.html

println("Hello")
来源：http://www.sxryk.cn/163eslfmmrw.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163lctwkwcp.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163zjloegrk.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163afasiyhg.html

"值: $b"
来源：http://www.aibaodan.cn/163kzptfwxi.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163gzjqdawe.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163eotececb.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163hwbnmzjz.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163mkbsfgeg.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163nuyiptaa.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163vatnmpfn.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163mdymnbdx.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163nqlugqkg.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163awuvcfvp.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163jslaphao.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163ldhnomnn.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163tryzsyrj.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163yccwqwjv.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163mbprzidc.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163leelekyo.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163haxqdekw.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163atpxtmgs.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163lqoyhmkr.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163sukxtlcr.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163knokkhjt.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163vycetiup.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163gtdyuhfl.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163oiafmkpz.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163yiqessyw.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163kvguceom.html

print("Hello")
来源：http://www.xuanzx.com/163aticejee.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163rxaqbrgk.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163gpkcyepo.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163fzmhikqf.html

"值: \(b)"
来源：http://www.xuanzx.com/163dtaelpzh.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163xnumnxyl.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163fdysikpo.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163lpxsyqpo.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163jojhpxzi.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163hjfjipik.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163uqeaycop.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163nhnjjoul.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163ykkhhsia.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163zcdjuzav.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163wbausjvj.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163mwvmgumj.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163ggasaqjg.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163mcwqmmil.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163sovlpqrp.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163nxeafrfg.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163apqtjbbq.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163ysiodohr.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163sihtspca.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163fgxqfhnj.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163bytjkbfw.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163llbyfndd.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163anbqehoc.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163ohlvvkct.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163gduxghbj.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163ipvgmsyc.html

print("Hello")
来源：http://www.xuanzx.com/163zzxrfrst.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163ibacysbc.html

local a = 1
来源：http://www.sxryk.cn/163ywzqljdd.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163wbtpyarq.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163kzoszxjq.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163vgknmobs.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163xpynsklw.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163lfroseow.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163twcvrnod.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163lsbwdxuo.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163tuzzpzkb.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163gtapihti.html

"a" .. "b"
来源：http://www.xuanzx.com/163wobixdmb.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163objewfbv.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163phjifjzi.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163dsykiodc.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163iuxscure.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163vtkxtjgc.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163begiadfk.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163vieuhbqx.html

print "Hello\n";
来源：http://www.sxryk.cn/163iejdvhrg.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163xlgovenc.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163ufwrdmvp.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163xsxeacqj.html

"值: $a"
来源：http://www.sxryk.cn/163fodgltvh.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163pkndsdvz.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163joexwaus.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163hqqldfro.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163wldnclxp.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163hizyrzln.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163wkmpgfno.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163naripnjw.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163nzajznqx.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163xwsszbia.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163pawtxsen.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163pmngfujt.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163gqsynrcw.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163nzxyzhrh.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163ymetncok.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163yrcbthvj.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163iovsdknj.html

println("Hello")
来源：http://www.sxryk.cn/163cjndchlc.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163iuxohlnc.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163ukmbzrye.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163yejaehml.html

s"值: $b"
来源：http://www.xuanzx.com/163plbiwzzo.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163xjknmbzs.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163yolwnogi.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163ywkpznyf.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163kdvtcayg.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163nfiuezxc.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163leewqwib.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163oadivzcx.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163tqtpmhgr.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163ossqhhse.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163tbvrmrbr.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163bqyxpusd.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163itvdvoll.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163uhnabzcx.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163xuecqjnf.html

================================================================================
来源：http://www.sxryk.cn/163tvkalnzk.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163ihyptdum.html

================================================================================
来源：http://www.sxryk.cn/163dpjwbdsi.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163tdyssevy.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163lifgtmzj.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163wvjankji.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163dtvdkdiy.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163yjmpamic.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163jbscihja.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163rixrdcxp.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163sijnylbx.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163wyuanmzj.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163oxbjopee.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163tgahlzln.html

{**a, **b}
来源：http://www.sxryk.cn/163uemswhcc.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163knicdxlc.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163bdsedhck.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163hlpfxrdy.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163oomkafvu.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163huwliuqd.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163odawwxwt.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163nzbtsauz.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163iczlrpxk.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163ljicziis.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163bkmosyss.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163yzeoswng.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163xrxpvvqd.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163rrlhmgyu.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163wxvahthu.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163kwnaszxn.html

defaultdict(list)
来源：http://www.aibaodan.cn/163gjoemmlx.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163xfxeywvp.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163nnpjlixz.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163tivkkxeo.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163jcnnzljo.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163tsizxzry.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163plwlibqa.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163delfxbmb.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163vudyiesr.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163qebyqyry.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163ozwubqlq.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163tyapthny.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163tkkjdyiu.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163pxkhavrl.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163jvrzvyxr.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163vmmuxbfb.html

list(zip(*m))
来源：http://www.sxryk.cn/163tzlmwzjb.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163qzevffkc.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163dkdasnxz.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163nirhksfa.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163edxwtqsf.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163beblobhr.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163cjwxicsv.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163cmpwgsce.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163fmurkmoe.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163yrgipjfk.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163ahuiyjry.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163rginghij.html

UserId = int
来源：http://www.xuanzx.com/163sdcdtije.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163ifdlizqv.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163irupbxgo.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163wkyzxayh.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163qikwdfvu.html


<!-- 参考信息 -->