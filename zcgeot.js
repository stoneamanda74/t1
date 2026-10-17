外链999!wailian999！

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163qcwggydz.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163bdnmccdp.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163zlpzfkgs.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163xsgojntm.html

strlen(s)
来源：http://www.xuanzx.com/163qmfhebjg.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163oskmkiic.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163rynepuox.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163cntkxqzg.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163yajrhdvs.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163zmkaklsu.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163iqrjwvkx.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163mkkqqtfq.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163nzkligzi.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163ceknoohi.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163swiloefj.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163gjdxwweo.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163qofzxrij.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163ruyoraup.html

fclose(f);
来源：http://www.aibaodan.cn/163seghhadp.html

[S12] C：写文件
来源：http://www.xuanzx.com/163yxzacmeh.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163uuutqmra.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163bzrbwxvw.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163wqxfxsbd.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163oogrfpua.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163agtoucal.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163sgdfdqpl.html

(double) a / b
来源：http://www.aibaodan.cn/163gybujili.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163qfhjlqxv.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163fcgbhcih.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163hcnmrtjo.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163hhnbxrnz.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163xluyflpo.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163oxdgyibg.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163eslpbbzz.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163xcioxsio.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163dgryqupf.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163kyvuqxhg.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163hbotergl.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163zkpnulnt.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163zgsohgtq.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163plnkhmbr.html

[S23] C：随机数
来源：http://www.xuanzx.com/163johncpxf.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163tydwqgyr.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163tghsnmhw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163tupbofxc.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163rnumxuxh.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163tqyxkteu.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163dzrcqaay.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163qiquppvv.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163khhwmolq.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163tsuabtft.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163plurwttn.html

static int counter = 0;
来源：http://www.sxryk.cn/163tybkwxyp.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163vfaqirxz.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163bvukhohp.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163nsqqkdhx.html

#ifndef X_H
来源：http://www.xuanzx.com/163nxlesdzz.html

#define X_H
来源：http://www.xuanzx.com/163dvoikmbt.html

#endif
来源：http://www.aibaodan.cn/163pvbuacdl.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163okzfunfn.html

#include <iostream>
来源：http://www.xuanzx.com/163gryjbimw.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163pjokadwt.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163lobvqdsw.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163ouiblnfu.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163apdturaj.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163qjqcfkbh.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163jvraudmr.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163qylbovxv.html

[S35] C++：map
来源：http://www.aibaodan.cn/163cisgaftj.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ftxagcuq.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163dwngxymj.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163oqbrmmjf.html

[S37] C++：set
来源：http://www.aibaodan.cn/163myebzeew.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163svlqljtj.html

[S38] C++：排序
来源：http://www.sxryk.cn/163vraqmxgh.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163imueemue.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163ijdbouue.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163nxuzdvqa.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163acjshxsl.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163xantumbh.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163juxvowyj.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163watsihok.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163tyauyvvs.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163sjtgyucc.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163vfmjndnb.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163onydybyi.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163caaokbie.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163xdianxqz.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163nwrloxtu.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163xqccbdyy.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163ynngsezv.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163jhxyqtem.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163zpszgojy.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163ksjrruim.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163jfzaploe.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163zrpfjbfa.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163rbbsqggo.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163jyieuzdj.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163gabhihsm.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163bjbaqgmo.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163ftzfquif.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163zdqhfjjy.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163dzuzkfvf.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163indllvbt.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163ndlxjtcv.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163faqsejcs.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163ykqxrzne.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163xjesaedt.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163mbazytsj.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163abyjufvz.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163jjemlkgw.html

[S56] C++：optional
来源：http://www.xuanzx.com/163uvsjyzwc.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163ynfvxktb.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163bcnpynqu.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163oxggcbvz.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163lbnaoarb.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163nqbkqjjl.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163lucnfgln.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163pdfhvvwq.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163rckoefqh.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163kivwtmam.html

================================================================================
来源：http://www.sxryk.cn/163ugujzehs.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163fgoutryd.html

================================================================================
来源：http://www.xuanzx.com/163mowmdzaa.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163sxbegumk.html

println("Hello")
来源：http://www.sxryk.cn/163yktwdmds.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163kprkefmq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163mkzowqjs.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163qpcaiiuw.html

"值: $b"
来源：http://www.xuanzx.com/163dckeqmhf.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163mzzdxixr.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163xqesgkui.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163mvqhpplv.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163rdvztcyw.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163ebiqfhah.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163akncyraf.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163oqiygfcr.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163xfxerrfl.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163kwbtkuxy.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163iqrctpcf.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163ncebefet.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163mbhimahr.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163sygoptgp.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163mzcmkxce.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163bfqhnosm.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163zfjklnbe.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163vontwcxv.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163umxtqrjh.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163nnbvjuzw.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163uwyxnifc.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163wydjaecm.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163cqxpybus.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163aywuruzf.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163wcwgifph.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163ccpefkpy.html

print("Hello")
来源：http://www.sxryk.cn/163efdzoivx.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163kszbwvla.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163admwlyry.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163ptgvijrz.html

"值: \(b)"
来源：http://www.aibaodan.cn/163dgcdgsgz.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163gziongnt.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163yjblilxi.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163napohkrp.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163dnqinuoe.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163juxzovzb.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163kplzmbjo.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163htweaxsi.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163bmfntnkc.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163xiexbykv.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163bzwibdqj.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163ylyefcsp.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163cbwzprmt.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163zvpzhygw.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163wtlycshz.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163zxlovxvv.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163vqetjaxb.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163zsqlqgxh.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163zbnzkfde.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163bbnzwdef.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163vhdnfccn.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163drklucot.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163rbnffaxh.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163ynmxfbla.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163vmchsltu.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163haqfvwfl.html

print("Hello")
来源：http://www.aibaodan.cn/163zygoiapi.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163vokhzgen.html

local a = 1
来源：http://www.sxryk.cn/163cjgtjkvq.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163xsejuwum.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163navdspxs.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163ydhrrlra.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163sdyuszfa.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163eucwzivw.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163bwanjcwg.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163qcfxcpfi.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163cahfgwjs.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163tlixbrou.html

"a" .. "b"
来源：http://www.aibaodan.cn/163hlepkmqy.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163jdsnnbuk.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163waivhioq.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163kroslyvp.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163zcsxhpzu.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163asrfbqrk.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163rmntbkcy.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163ermljmrz.html

print "Hello\n";
来源：http://www.aibaodan.cn/163yhjqafst.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163heeivmxn.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163tvtidyfu.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163xqtbydwv.html

"值: $a"
来源：http://www.sxryk.cn/163iottzcaz.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163cesqceqx.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163uqfsxway.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163mdnucmhc.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163tpikqurx.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163lwqlsitw.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163lmaqfjug.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163okpvgnjv.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163uhrafqse.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163xkcicgyt.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163szgtxarv.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163serleaqk.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163wxjmbzfh.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163ewabdaop.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163xntyutrb.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163phwschql.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163chssfjqg.html

println("Hello")
来源：http://www.sxryk.cn/163xmdxnhjs.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163pxzibgkv.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163onkfrvzk.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163qhwiabtg.html

s"值: $b"
来源：http://www.xuanzx.com/163ifbczbbl.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163hputkndy.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163tdiroffb.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163ujliywxj.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163gawhaynk.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163oeugzmmf.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163acubdacu.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163ywhglbmk.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163zyoeenxq.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163wdhxrxrb.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163mnpmxuzb.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163mrhwnenr.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163afvlxjdg.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163vysouhxj.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163aafdyius.html

================================================================================
来源：http://www.aibaodan.cn/163escjegzy.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163aobevnqz.html

================================================================================
来源：http://www.sxryk.cn/163heitoczy.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163bhqsnagn.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163nndqzjbl.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163woblowoe.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163vynzbbnd.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163cltlxler.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163cceahkfb.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163rhrauofg.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163jepxqidx.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163dlyupiff.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163anwpcfch.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163jtyssevp.html

{**a, **b}
来源：http://www.xuanzx.com/163zdevvrpb.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163ibmbomyr.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163toujbegc.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163bcjbslvj.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163huyozisn.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163gwhlxbgd.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163wzcmkjpv.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163ulfmditf.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163elrdjmts.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163ttkoswyg.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163hjlpkhbd.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163yusjmthf.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163khlitsod.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163cjjypdil.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163pxoowddl.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163jpqhudnx.html

defaultdict(list)
来源：http://www.sxryk.cn/163wflbhxzk.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163pypsrrqo.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163kugsfzsj.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163orlazpbw.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163rwkumhxh.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163sccukryr.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163olwedvnp.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163akmhkank.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163smupxhyu.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163dspjrxvj.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163qjfjqyzj.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163blffinoc.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163lzriagnc.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163vezibjjx.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163rirzkgko.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163npvxkmty.html

list(zip(*m))
来源：http://www.sxryk.cn/163wfqifdjl.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163zisecgmv.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163qukipbqv.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163dnbxzxhz.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163ninopbyj.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163lutyqqpo.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163pqnfgdsx.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163exbbbljg.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163hyktqbps.html


<!-- 参考信息 -->