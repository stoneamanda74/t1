外链999!wailian999！

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163xlspqmgn.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163zvuqokoi.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163agamycna.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163eqbdxsah.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163jauoayir.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163vqyhlhlv.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163tlpxxqwa.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163wjbvtdfy.html

strlen(s)
来源：http://www.sxryk.cn/163gvqsoact.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163xfffaqss.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163piofclvd.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163yengxoqd.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163xfatehhr.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163jwmftpny.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163xvldqkpn.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163anxjdixf.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163exymkqzl.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163axbsmjif.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163fngmasyj.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163ooemghtd.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163bibojnho.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163mofcshur.html

fclose(f);
来源：http://www.aibaodan.cn/163rrgjtrcx.html

[S12] C：写文件
来源：http://www.sxryk.cn/163voalhdhg.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163cbhmclnf.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163fcltfrdr.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163zubueioo.html

[S14] C：枚举
来源：http://www.sxryk.cn/163lmwrubty.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163zppkkkew.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163nymmrweh.html

(double) a / b
来源：http://www.sxryk.cn/163czaulmbg.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163rnyythfh.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163phiybbsr.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163zddmbiba.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163goftowlb.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163hlaqkisc.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163dsfqzcak.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163thbhtbjy.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163azpgcykz.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163jccdwmhh.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163bzrluxqs.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163ikraakla.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163pnifzdhe.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163nzwkrbxh.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163arwtxper.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163fphgxuzr.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163onardwgk.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163mpkmagwf.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163uaqdemqe.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163czrpnzat.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163vcrcldag.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163ccazyyvt.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163csaxvqzx.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163azdkfphr.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163mguzdpfa.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163myxfioaf.html

static int counter = 0;
来源：http://www.xuanzx.com/163khjtdckr.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163lgwufgoe.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163ojrzgjgq.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163xvipfdqj.html

#ifndef X_H
来源：http://www.sxryk.cn/163qqxffecd.html

#define X_H
来源：http://www.sxryk.cn/163ijmjkdei.html

#endif
来源：http://www.aibaodan.cn/163jcqhqdpc.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163kvggxeak.html

#include <iostream>
来源：http://www.xuanzx.com/163zlqvoson.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163vzbbvtwp.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163jojqwwhk.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163wbgynhol.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163htogfkoc.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163myiqvnqu.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163oolkvhvb.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163bwrdopgs.html

[S35] C++：map
来源：http://www.xuanzx.com/163xcfsroaw.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163lfuzsgoa.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163moofkizy.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163yccbfciw.html

[S37] C++：set
来源：http://www.aibaodan.cn/163pugzrhfn.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163bniyvojo.html

[S38] C++：排序
来源：http://www.sxryk.cn/163nllgwneb.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163kfpguvvg.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163nqubapld.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163nhvhrcru.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163msabdxuc.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163rygxnzmd.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163pgqndily.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163lgnbjcsr.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163smioqlcs.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163zooufaec.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163rbpmypxb.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163lcnqpggn.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163wwsoioej.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163nvnsjjni.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163yqisapuy.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163nadokucs.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163vzhytmep.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163ovauaapr.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163nefkjdnj.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163udclqcts.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163gunawiby.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163rutgtzhz.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163cjhmtqkp.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163ksdsvbul.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163jnpohckl.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163sizkaafu.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163ridxjxlp.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163gulfeprr.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163uvjfjcml.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163geuxlfoz.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163gzzpttcf.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163ygxikecs.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163ojdakpnp.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163oferporq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163clnymzlu.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163xwwdvdil.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163tgdrcotx.html

[S56] C++：optional
来源：http://www.sxryk.cn/163yvknwyec.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163kmjuzlut.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163wwcwcvjk.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163dwbxepqr.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163mngzsmjs.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163otjcdbtq.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163zesyifsh.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163ibnsovfh.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163snbaioii.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163heholqpn.html

================================================================================
来源：http://www.xuanzx.com/163uctmcdcn.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163jmaaopkp.html

================================================================================
来源：http://www.xuanzx.com/163eyzicelh.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163knbzydhr.html

println("Hello")
来源：http://www.sxryk.cn/163upwezgnk.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163lnsaacwt.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163bpqwezua.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163ucyabyfo.html

"值: $b"
来源：http://www.xuanzx.com/163bqxsxlon.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163ypffffcv.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163jjvahdpq.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163cnmjffit.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163idhsxzrc.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163jshibfpb.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163jarmmlso.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163rciirjtl.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163kiyxguyy.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163wtemqjle.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163nuamfsas.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163nswpyybd.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163jynqchkx.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163qvhumcfu.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163chibazgx.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163vbdhnvua.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163mxpjsfrl.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163jonutxvi.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163thimdqsz.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163igjjicov.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163cwpbdnai.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163rkdfonpw.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163uefcvczh.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163yeaeleah.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163mwebtrup.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163irisupgq.html

print("Hello")
来源：http://www.sxryk.cn/163fnlaqhvb.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163finjgxzj.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163iwomcqos.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163bdlrgzey.html

"值: \(b)"
来源：http://www.aibaodan.cn/163hfvyxoch.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163wpajujjz.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163rjbngrar.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163gfyanqnj.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163sdryhmti.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163mydjrusm.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163mnsrdgvi.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163lunagrdl.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163vlcytjxh.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163umljndhc.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163fftjlhbe.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163eygsquzv.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163frhgzqsu.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163zicqexxa.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163oigpytqc.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163yfctdszs.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163safurbnc.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163oapyyuqh.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163cnmurcoa.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163juvmccue.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163kikqyknq.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163jrfyajgt.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163eyinasrb.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163vnziahwh.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163svyhqtnk.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163dxxprbbn.html

print("Hello")
来源：http://www.xuanzx.com/163driynkxv.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163eeruexxs.html

local a = 1
来源：http://www.xuanzx.com/163amirabxt.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163ozmujofw.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163dtfyhant.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163ghlhrcka.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163jrxjjdcm.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163qmrwzots.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163xrssyfbt.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163bhqmkrqv.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163nvpcvfjl.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163togglcxu.html

"a" .. "b"
来源：http://www.aibaodan.cn/163nsibifuw.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163jnbhlsdt.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163mceemllx.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163ilpjzwww.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163wtzpslgn.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163qhtexryu.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163fmhvkose.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163lypdapfz.html

print "Hello\n";
来源：http://www.aibaodan.cn/163sssdttse.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163ovyazwbs.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163xfamhofb.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163prqnjbqx.html

"值: $a"
来源：http://www.sxryk.cn/163emddbvgg.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163nnpjihaz.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163fcdemsvl.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163rpneihkc.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163cvjmjvsh.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163dkvbgljm.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163sldnlcyv.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163jreyfyzt.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163bfhbtgta.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163kpmjcvxr.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163ccarxlnf.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163gaxfcsah.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163oczscoqk.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163jjvzlhrh.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163hqtupdrv.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163ppzikxup.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163dcbuawfo.html

println("Hello")
来源：http://www.aibaodan.cn/163evewsdlk.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163zjlygjqq.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163xtdxyecd.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163cwxujklz.html

s"值: $b"
来源：http://www.aibaodan.cn/163awuretkh.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163dwyblvpq.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163yjdtzhfg.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163udyilaqs.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163yhpthhaj.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163lqfemdod.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163qzgkepvq.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163tlcyldlc.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163afaglcae.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163mnzejgxr.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163cgfkfgri.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163vesixzpt.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163abkpanwx.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163pgzfkhgz.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163jxlhwqzr.html

================================================================================
来源：http://www.xuanzx.com/163zoyahker.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163yxakagrd.html

================================================================================
来源：http://www.aibaodan.cn/163ukklxeva.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163anphnynd.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163oqwmojrq.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163gstojsic.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163njdaerno.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163hfmaotyf.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163kkxmqyaj.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163bfszoagc.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163reyzxuhf.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163ffnfogtx.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163fwbawbgd.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163gevcbfye.html

{**a, **b}
来源：http://www.aibaodan.cn/163awodflcb.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163rjxfjgpw.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163pasvspeo.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163wtfmpdhe.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163udgkzkmr.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163fhkgvbpr.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163hdzjyvtj.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163bajrfhgp.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163rbhujccn.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163cumnymom.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163tsrzmooy.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163wwqauuca.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163kvmyjhwo.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163dagqyddd.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163wmnnupej.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163abkrlmrb.html

defaultdict(list)
来源：http://www.xuanzx.com/163jjshvpdv.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163hdzdkycm.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163rhetxgxj.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163jzatgvrl.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163dzbfrkpo.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163fllzjags.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163xhlynvrg.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163dctztxad.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163zfkyfyiq.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163gmojvfmu.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163yovizrdf.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163njyzothh.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163wtbusddm.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163cdrigeht.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163kayhfajw.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163slotuyyk.html

list(zip(*m))
来源：http://www.xuanzx.com/163pigzrzof.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163mcwwcduk.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163tgjakesl.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163kelufiez.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163rikpagpn.html


<!-- 参考信息 -->