外链999!wailian999！

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163tgvbkygi.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163odloahqv.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163nvrecsyo.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163rolzdttq.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163jjdfxfzd.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163vtbnclkf.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163xbkxnqvi.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163skfagweu.html

strlen(s)
来源：http://www.xuanzx.com/163zvdgsdic.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163ednhdmit.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163wmgdvxqt.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163tywwtkhk.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163soxyrusb.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163vbpcnyek.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163knxbwxiz.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163hruppmij.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163nwzzmdsr.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163zexnvxbr.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163dxembxfq.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163gfwzugxp.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163bcmxcvms.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163fkgdhmak.html

fclose(f);
来源：http://www.aibaodan.cn/163rmzbyzpc.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163daxhinzl.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163zyeupgcc.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163xtfcgbgl.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163twutsqxd.html

[S14] C：枚举
来源：http://www.xuanzx.com/163exdgutpa.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163grgsqftv.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163nrhhvxld.html

(double) a / b
来源：http://www.sxryk.cn/163cokpijyp.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163keafjlrv.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163zkpqmzvj.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163jkdwepzp.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163gwqabucu.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163iaokwlxs.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163fcdfcvgd.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163feqltxed.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163nzhwbwzh.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163wtjylfkc.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163teegyiso.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163xlarhvhp.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163kfabxxyg.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163mcwlkfxo.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163ajqqztxy.html

[S23] C：随机数
来源：http://www.sxryk.cn/163pbjsxiqc.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163pikiutje.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163ylmucrbt.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163gmxdromr.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163uhcaqgpp.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163ljeintml.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163orvcnkkz.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163vroadthh.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163jsnbaqzo.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163xdvqpaea.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163funxeqlq.html

static int counter = 0;
来源：http://www.sxryk.cn/163mnhbvoqh.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163oxoiavrh.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163evzvoonq.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163wmbyrafs.html

#ifndef X_H
来源：http://www.xuanzx.com/163kwhfixni.html

#define X_H
来源：http://www.xuanzx.com/163czwyttbq.html

#endif
来源：http://www.aibaodan.cn/163crgtvuhm.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163utestljf.html

#include <iostream>
来源：http://www.sxryk.cn/163iyetpscd.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163mpraftuj.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163gundiuzz.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163ccfguvek.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163zispjvfr.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163jcddsqhy.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163vytbawgj.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163nfoofeyo.html

[S35] C++：map
来源：http://www.sxryk.cn/163rzjhndwd.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ctraqqer.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163bpblyjav.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ziobehfc.html

[S37] C++：set
来源：http://www.xuanzx.com/163svqmtarf.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163qbvijpwc.html

[S38] C++：排序
来源：http://www.sxryk.cn/163gpagjlgj.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163tknyesfu.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163jkxdezaz.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163ywatmwnq.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163kzvcsuoa.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163obxjylhi.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163nbtylqcj.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163gxcqozeb.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163qepmoymk.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163amvgsyvt.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163qregtgbi.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163xwdmkxqb.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163ocvkxoop.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163rnodoaxr.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163iagcdbsx.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163ocwgkqsm.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163uevamqrp.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163npqasflt.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163uozcxtpt.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163nzxmxxkr.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163wlcydhye.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163klfrmbqy.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163xedrelcn.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163ekytskov.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163rxkqgkyg.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163pofqsici.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163xfrqrvcf.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163ykarcqow.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163zunbbhuv.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163gurvuhgb.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163tvqvphaj.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163rbhbdyni.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163eokuqglg.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163zpnxkevt.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163dskjadyw.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163urocteuv.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163hcwktzxm.html

[S56] C++：optional
来源：http://www.sxryk.cn/163eihffafi.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163whyjzggk.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163vjvxdpjx.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163lkivjiwo.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163skqczhee.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163znwibodt.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163hsrklyyf.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163ahiyblkg.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163oqbnfkdt.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163izseyjxo.html

================================================================================
来源：http://www.xuanzx.com/163axkrceje.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163bbbvniwh.html

================================================================================
来源：http://www.xuanzx.com/163mvdrgjwz.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163itbqnnpu.html

println("Hello")
来源：http://www.aibaodan.cn/163hrwblhvk.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163birllfoa.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163aipddnid.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163fzeebedi.html

"值: $b"
来源：http://www.sxryk.cn/163eywlbmef.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163vnrxdtlh.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163gvcthlzr.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163gguymkhr.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163ansybjvf.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163ramtnqsb.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163pckrscva.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163wjgqkbdu.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163wcipwmbr.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163rpcddpew.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163qvotjctm.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163sskhwech.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163juncydel.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163edyaxmup.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163ifjfrnmm.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163jliisbew.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163ejbljikw.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163ugjzyicn.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163jrmiotlc.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163xrjrsgoz.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163jrzbiymd.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163wogsgtwi.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163adgncphh.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163whossbaz.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163umhmdpeh.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163chfwwsuj.html

print("Hello")
来源：http://www.xuanzx.com/163ltakwfru.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163erubyxjm.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163tytxnqid.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163cvwoviwa.html

"值: \(b)"
来源：http://www.sxryk.cn/163djfutdil.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163ftudemdx.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163yxisziix.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163ljjcrbuo.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163uewzigth.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163owslmvub.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163lyyzndyy.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163ontakkwd.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163qjrcjivy.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163engluppi.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163hfmmehtt.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163cycxeqhb.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163ylvzntlp.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163phtyvhga.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163fynokofs.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163wyrvtvic.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163lpyuionk.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163ijocsqwy.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163iqsmqmas.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163doebtwxy.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163vhmsmsvj.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163hnnqpegn.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163ljshynxv.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163bxhubgwj.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163ejvfdxai.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163flmdfboo.html

print("Hello")
来源：http://www.sxryk.cn/163vcdoyjyn.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163gdfrviae.html

local a = 1
来源：http://www.sxryk.cn/163nzufnksu.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163yvebmrcg.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163grvpzbjo.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163ppltsdmo.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163ezerbamt.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163fvwzdbiz.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163bvkxknxk.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163ttpkdghn.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163dbqqamqv.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163btifqpsh.html

"a" .. "b"
来源：http://www.xuanzx.com/163wbjexhyy.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163gtsqusam.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163hpjkfzci.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163dpiqzhtb.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163hjmxjhqo.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163rjzufswe.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163ttsuyqbc.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163uksshrth.html

print "Hello\n";
来源：http://www.sxryk.cn/163dvkgjzua.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163qhuynktx.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163juixutsk.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163ezwzxvzl.html

"值: $a"
来源：http://www.aibaodan.cn/163dfurgezi.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163wvuvnyxt.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163hqnkmhuu.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163fmxkwdnb.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163onjwyxxg.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163ijrgbmks.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163ggafblua.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163qhjdaufr.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163yyzncvoz.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163rhenenjj.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163hwvxulzh.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163cxouqmid.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163prhamnmj.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163omrhvovp.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163dbxpgmkv.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163qmgtldlj.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163rghpodre.html

println("Hello")
来源：http://www.xuanzx.com/163yoybybwp.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163wlotyhwr.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163iqgtmuma.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163qjlysfns.html

s"值: $b"
来源：http://www.xuanzx.com/163ktadxbkx.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163ovksgdai.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163yzssuuvg.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163asgchtxw.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163arnjcqfi.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163ikkggffi.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163nhskeoir.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163kvhpuair.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163pupmmpmg.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163pponuzvf.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163gdtssdxm.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163tnbcguxy.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163cradhocf.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163fzwumzba.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163gwssvztp.html

================================================================================
来源：http://www.sxryk.cn/163wykbwppz.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163epzheexv.html

================================================================================
来源：http://www.xuanzx.com/163djzcnghu.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163lgkuulys.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163fuwehdht.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163rexnaixa.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163ysggifnn.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163gbznwpis.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163xpydsgay.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163suwbgfkz.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163zlseutop.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163dpbnijoi.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163opgfhetx.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163fvwwfgxb.html

{**a, **b}
来源：http://www.aibaodan.cn/163lxxeggld.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163eaktwyay.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163icnetpzh.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163vehyjihy.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163secydxix.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163zrrrxbhq.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163hcpnsqui.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163dtdzqnrz.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163seoimuov.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163uenqcwzs.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163nanbbhwr.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163phugudan.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163vouaofln.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163fspeyyci.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163uylmmgec.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163xauctfnm.html

defaultdict(list)
来源：http://www.xuanzx.com/163emdigzpw.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163devenorg.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163kkfyhoyr.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163jiuxhjbc.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163mgtwkyga.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163niaiyrkv.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163lemkuczd.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163gyrovzcd.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163atmrogyr.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163ilvutrgw.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163sfsbihyj.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163iuzhrkxf.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163kfruyari.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163rjlqpjgm.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163tdjkdpdr.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163lxuznzqq.html

list(zip(*m))
来源：http://www.sxryk.cn/163abvxjgin.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163szifcgkn.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163havtpnwi.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163nkijpxpi.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163pawimbod.html


<!-- 参考信息 -->