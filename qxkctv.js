外链999!wailian999！

S. C / C++ 专题
来源：http://www.xuanzx.com/163ktyubwzv.html

================================================================================
来源：http://www.xuanzx.com/163mpfiakys.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163tyoknepo.html

#include <stdio.h>
来源：http://www.xuanzx.com/163nmzohlwn.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163hnwgvmwl.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163afxmumuq.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163bxhnlhfo.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163qizatddd.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163ybrytgqt.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163hfugkjxh.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163bexthndn.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163shddcxog.html

strlen(s)
来源：http://www.aibaodan.cn/163yrtqzxuu.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163amrazqfh.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163xgpmnpfq.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163dfypmjdy.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163togrbjnn.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163uegzaghg.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163ilvylqxm.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163rofwmoxz.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163ucyxfaex.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163btyxzqcq.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163atoqrkmc.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163zljppqhj.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163optrcihk.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163ysstqprs.html

fclose(f);
来源：http://www.sxryk.cn/163ewiifpig.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163ltbfusvs.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163oeppywvs.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163uxkutslq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163ckfvfuwl.html

[S14] C：枚举
来源：http://www.sxryk.cn/163npckroxf.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163hrfghbpu.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163aexpyshn.html

(double) a / b
来源：http://www.xuanzx.com/163epfalqnz.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163ozurhwyg.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163xnptfjty.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163yzzkozen.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163witentua.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163ptimmghq.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163odybuljl.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163gimdzutm.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163uzpfpgfh.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163kduubauu.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163xcwxyycp.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163abucuodm.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163npazpgfn.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163dbkqimpl.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163rovwtmlw.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163ddmxpzuj.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163rwgopnui.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163rjbesnmv.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163sfzionjv.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163ltiryktx.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163lgzyexwg.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163czpnmrjb.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163ymrihkwj.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163tblbzmcv.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163mamumipv.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163jqtchjcw.html

static int counter = 0;
来源：http://www.aibaodan.cn/163fskaharh.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163qitpfjbn.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163yshbznoj.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163wtvhxtgw.html

#ifndef X_H
来源：http://www.xuanzx.com/163krzpfnrn.html

#define X_H
来源：http://www.sxryk.cn/163aurithuy.html

#endif
来源：http://www.xuanzx.com/163ggbuyhei.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163tylgjqik.html

#include <iostream>
来源：http://www.aibaodan.cn/163bgubckwu.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163dchbjbfd.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163knaijkql.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163cdlghyje.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163sokinlev.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163fiwmmglv.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163kbsqwjhz.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163alctuuln.html

[S35] C++：map
来源：http://www.xuanzx.com/163bkcrupyz.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163vgkqgear.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163apcqsxwl.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163jxmslzzv.html

[S37] C++：set
来源：http://www.aibaodan.cn/163byyrqwlb.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163wgqwuiez.html

[S38] C++：排序
来源：http://www.sxryk.cn/163lvmiritb.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163gngypnbg.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163rgucouni.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163bgykrfcq.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163yztahoim.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163wmignrjg.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163mowqwhgp.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163rflsusjo.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163vutgforu.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163xeslpbrj.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163rkswxphr.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163oovbznap.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163sunnpnfc.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163nsuquxwt.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163hwdykooa.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163hwlrrtri.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163wwcyfcbz.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163dascfkai.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163oopushed.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163dtpdapvc.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163wgqzesuk.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163soohuomp.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163kdqnodlm.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163wnlwnvdw.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163lxmtachk.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163pbifarzt.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163urqwiyio.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163mnwkxorv.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163gbzgabps.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163eycxucmv.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163hqwnzbir.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163thuoobgr.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163zwllwpld.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163uggultvo.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163yrycncjv.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163vehiisle.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163bcusbhdw.html

[S56] C++：optional
来源：http://www.sxryk.cn/163mmmnfxhe.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163cihgwwod.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163tzyuddzv.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163iovoqjhf.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163lztelolo.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163gevohggl.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163fbeiijag.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163mtgdevnb.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163zzcytunn.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163evbvuqzi.html

================================================================================
来源：http://www.sxryk.cn/163mocvopgi.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163pwnembdp.html

================================================================================
来源：http://www.sxryk.cn/163mzniaekx.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163qbzjkjyd.html

println("Hello")
来源：http://www.sxryk.cn/163hptutobf.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163npdgpmyz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163oaujvdsm.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163rekfejum.html

"值: $b"
来源：http://www.sxryk.cn/163tgcefwbq.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163zgtytyqw.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163iefeuxbz.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163ssmfackh.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163sopbbbzz.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163hdvmypzt.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163bypoppfq.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163cnbogudn.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163wbmzldes.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163aoglrnux.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163srqdqzck.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163hfsqywlp.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163dmacylte.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163ughtekbg.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163bfwoectu.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163fkjrjeth.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163ujjtcmeq.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163qcpgljil.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163rviypqak.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163jsxqpsso.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163yhczlufr.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163mnfzmkek.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163tmplzqah.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163nlmrdawp.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163utjvwelx.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163ctcpbwxj.html

print("Hello")
来源：http://www.aibaodan.cn/163quuwwauv.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163bmobllhs.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163hekklrwe.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163cexziapa.html

"值: \(b)"
来源：http://www.aibaodan.cn/163svmaagdl.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163tqziteqx.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163igiyixkt.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163gkcbvsbb.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163bjgtczcq.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163qwymnlar.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163axcnakcp.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163tnnpiymu.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163latgvwoq.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163taehhpmc.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163ciunusyg.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163yutuvujk.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163ljgfayxu.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163oveeivjd.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163fkurwxrs.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163bllojbgx.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163tasxiwti.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163pbuzttuf.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163iulhnmlu.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163rjevzbwx.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163xxvkztxo.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163xaavmhfr.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163ipqnxagd.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163gjvogjyx.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163ezilivls.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163ohhyfucy.html

print("Hello")
来源：http://www.sxryk.cn/163ipzglkii.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163lgsqlogu.html

local a = 1
来源：http://www.sxryk.cn/163hbcccaxt.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163qeuiuzlo.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163xetqdtkz.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163luoklbyq.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163dpjxawbz.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163leixcygq.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163moyjkpak.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163ycpogddg.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163jjxkwuzj.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163tcyhtuob.html

"a" .. "b"
来源：http://www.sxryk.cn/163rmtooylv.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163lepvcwoz.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163tovxffbc.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163bvsbqgzm.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163ijmkbssm.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163sjshatox.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163btpztfrf.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163nsqpotnl.html

print "Hello\n";
来源：http://www.xuanzx.com/163hyvlhmpe.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163jjesazik.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163nsncdjla.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163qduafmqu.html

"值: $a"
来源：http://www.sxryk.cn/163xxavjscz.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163rwbqyluh.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163stxajmrh.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163tgccnelk.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163wkllooyq.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163xnzlmrro.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163yprpxabq.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163dierrjcr.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163wuswafmi.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163dsyvfuhc.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163llgvssoh.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163bxpjodqm.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163hxvroovy.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163hajemvnf.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163ehhcjbcu.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163myloetwo.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163xazclwix.html

println("Hello")
来源：http://www.xuanzx.com/163gtdlsvlo.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163hjvvwgqz.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163uwiysqxh.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163pnodzart.html

s"值: $b"
来源：http://www.sxryk.cn/163xiaaexfx.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163msrbhmwv.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163dohxnkwi.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163mciytdks.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163hmdzbmrq.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163hbpktdxz.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163loetjtno.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163qwydrnpl.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163bsjwfzdd.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163ticedubj.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163xjsjrfjt.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163cbffqdte.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163kitaegef.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163gnhgmbxj.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163ahtaodji.html

================================================================================
来源：http://www.xuanzx.com/163arhtifgp.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163kgbosxfa.html

================================================================================
来源：http://www.sxryk.cn/163yvfscrhr.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163piwjhfwp.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163sevxgjpk.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163laqrgyfm.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163wlkrwsay.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163gxuqqkup.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163sxryhlct.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163hhyydujr.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163erpfijoy.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163ljrmsawd.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163varkbpgc.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163rdikmwhv.html

{**a, **b}
来源：http://www.xuanzx.com/163bhxcsvol.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163anoxafuh.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163lhbsoeqa.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163wuqqktzc.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163gdikiyln.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163fahalxmx.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163ivpyltio.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163qmviyacs.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163kxotajrk.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163fjkmtjfm.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163jzgbmlgg.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163bbrozqog.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163cbdwqegy.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163vvrrjpab.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163irucbraf.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163zjcnpddc.html

defaultdict(list)
来源：http://www.sxryk.cn/163bpoformr.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163aswktcxq.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163qvzdzjhv.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163beksgunq.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163fpkiosxk.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163redvzpfy.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163pzrwtzhg.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163zgtuduqi.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163hinknyod.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163ptsjdlmv.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163niexywwr.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163kdzxzuwk.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163zjgpxrbq.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163xvjusfgk.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163fdjhczwh.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163bqmmsutb.html

list(zip(*m))
来源：http://www.xuanzx.com/163cfgqarkv.html


<!-- 参考信息 -->