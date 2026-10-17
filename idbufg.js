外链999!wailian999！

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163wpridejq.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163akqjbyxq.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163iknekzsl.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163ndyzqhlk.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163rhrygpye.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163kwolmzdu.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163upavmwyj.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163ifubmtvx.html

strlen(s)
来源：http://www.sxryk.cn/163wxlcleih.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163hzaiotwm.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163xkimgwoa.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163mnpmzbbg.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163vobqhtfn.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163qpmcycrp.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163pjjkgoif.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163qvryyfmh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163gkmrqpqd.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163umoptsoh.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163zffedlmi.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163skbxtlhu.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163tscnavdl.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163enmosgkg.html

fclose(f);
来源：http://www.aibaodan.cn/163sgnpviea.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163zrzntlki.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163xwwgmbag.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163aorfrlbh.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163sbzcosip.html

[S14] C：枚举
来源：http://www.sxryk.cn/163gmbjsrag.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163yyjzfyas.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163jkkdkodi.html

(double) a / b
来源：http://www.sxryk.cn/163uhurulfj.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163ucmbzeze.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163aggbfefe.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163fabmoizu.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163vypiencg.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163fvwkjhvz.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163aaqztyar.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163gfottdan.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163zkplyguw.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163nokjgsuq.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163pknhndad.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163betrhjao.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163julefkzw.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163bibgvonw.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163wqfudbyv.html

[S23] C：随机数
来源：http://www.sxryk.cn/163hvifcqnn.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163hdrzodfs.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163eqkrmemm.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163rxoaoiqj.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163gkkpydfy.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163fehyyhnv.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163ethfsxct.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163ashshwaw.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163unkubeyx.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163zuajpchr.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163adhaembg.html

static int counter = 0;
来源：http://www.sxryk.cn/163jvuidmwo.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163jchzvtfk.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163vtopjczp.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163emodykfg.html

#ifndef X_H
来源：http://www.aibaodan.cn/163wdhbivoj.html

#define X_H
来源：http://www.sxryk.cn/163hndccwog.html

#endif
来源：http://www.sxryk.cn/163atfqfpvj.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163tclsajzz.html

#include <iostream>
来源：http://www.xuanzx.com/163zqphxghu.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163kbhadxeo.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163fpnmwtzv.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163vuztnodp.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163ysglcybb.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163nieabvns.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163nstgnvve.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163rrjusqwk.html

[S35] C++：map
来源：http://www.aibaodan.cn/163tikuvojl.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163zienyfdw.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163sbhxwthh.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163buejeqyx.html

[S37] C++：set
来源：http://www.aibaodan.cn/163zajvnvyt.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163yvbihkve.html

[S38] C++：排序
来源：http://www.xuanzx.com/163fpodhnna.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163tzkwouii.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163qdoxkeyh.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163ozqrcebe.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163rrvfrqhy.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163vqvhcigc.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163lihkogmb.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163tlbgatvn.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163ytxvggam.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163rnuittpm.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163unubeqyy.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163scjqhbyo.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163grnjhzgc.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163lsldwxij.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163ieqwxkps.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163qcyksvlq.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163qobdqdwt.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163wiymyque.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163bbjtijpu.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163spezbmfz.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163utofgukt.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163fvngzvsr.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163mxatncpe.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163xpbxwefm.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163zuoqyddo.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163ojfdwcoc.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163qqtmoewp.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163uifsghsj.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163hbdczodu.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163gsgaezag.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163cqdawfik.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163kgehipcb.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163vtdtukkg.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163cjoactfy.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163rrznpjls.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163nepqdwbp.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163eneysons.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163ihfhgzyo.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163eoorkcap.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163bleppnmp.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163lmwckovm.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163ezjlhjgx.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163ozdievci.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163jmsvisqd.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163sweacknk.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163hubulasb.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163imwpmqgo.html

================================================================================
来源：http://www.sxryk.cn/163fmfuyzpo.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163vsbtlhom.html

================================================================================
来源：http://www.sxryk.cn/163vsesixim.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163cbtvfbzq.html

println("Hello")
来源：http://www.aibaodan.cn/163vywsdygc.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163hbjthplq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163zinxapai.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163lqjaqmjn.html

"值: $b"
来源：http://www.aibaodan.cn/163axiinhvo.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163hkwkrhrp.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163rohgfppr.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163xciydjpv.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163cxuxjzjv.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163bscnjeum.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163wzlwtdga.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163vqxlcwcd.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163pllfmmso.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163ymuvoszi.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163zccqebex.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163gouzbkfg.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163vwogkloq.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163brzymeir.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163byqvqoeh.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163mgruxbjl.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163ubiaawqb.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163xjdfdwjl.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163vopmamhz.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163ocrszemq.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163qewogrqy.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163sakhadjt.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163qdwvpeoh.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163pgjongyd.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163cxpiruop.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163uhtnbiyp.html

print("Hello")
来源：http://www.xuanzx.com/163upgkqavg.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163effrygje.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163vmmhoiru.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163rcapnflr.html

"值: \(b)"
来源：http://www.xuanzx.com/163wkvttzun.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163udiratji.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163jsrocwee.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163lbmkzhkw.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163jgrpwajv.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163shignfhf.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163hubfzsyn.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163suwupwkg.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163udulzcch.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163jlvdkpjj.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163tbgjbput.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163cupxcnpg.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163gqjjsbgn.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163ecvewicy.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163yatyyjap.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163ggfthdxo.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163zhbbywri.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163ygtnvdlk.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163bbzdianl.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163fjlncago.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163lvolspno.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163dbmdhqzo.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163mxmmcvhp.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163jphaekls.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163rjpvrsfi.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163lbevawma.html

print("Hello")
来源：http://www.xuanzx.com/163wxxdgstn.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163fapfgltd.html

local a = 1
来源：http://www.aibaodan.cn/163bmuhnetb.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163fotaqyhq.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163oyxfrvut.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163awloumqo.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163ujppwwkq.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163ugzizega.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163xqhdmwot.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163wtybybcl.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163grykapde.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163ygtgrwkr.html

"a" .. "b"
来源：http://www.xuanzx.com/163ikgsxmtl.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163kekvcsfr.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163wkvjaqhe.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163edbanrey.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163rryigwsd.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163smbifxbg.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163szyqnitj.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163trsciqit.html

print "Hello\n";
来源：http://www.aibaodan.cn/163luuiilkn.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163qqdygnhp.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163xefvsqzk.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163pumxwhiw.html

"值: $a"
来源：http://www.xuanzx.com/163lhizcdcr.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163wjaddbyj.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163tazvgfsr.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163mhddoafy.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163vtyrfttl.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163dzgsbvuw.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163vgnmcbxd.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163aotvbbbm.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163zihdudeu.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163omklicab.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163hsozqqka.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163ybojnkpy.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163osgqqhwn.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163zvpexmam.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163kzcrdopy.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163qvfhpeur.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163yyesvpxa.html

println("Hello")
来源：http://www.xuanzx.com/163zjjpfagq.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163bvmrqead.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163fdfteqel.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163lylfrfnh.html

s"值: $b"
来源：http://www.aibaodan.cn/163icvsazgu.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163amevugvz.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163hwsrjtfh.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163ldjzulqo.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163oehfzuzw.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163sgspfuxm.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163rcfceaaq.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163szapenzw.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163holgmrnp.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163hydyofcu.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163uehcofef.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163kspngfwq.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163ljrtdujg.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163ywtohcja.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163rjdmdzoi.html

================================================================================
来源：http://www.sxryk.cn/163ebgkztfz.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163xqjjuvjs.html

================================================================================
来源：http://www.aibaodan.cn/163wrfeygev.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163sejpstkd.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163nbpgyrsx.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163keggerko.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163lbnyfmvf.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163fvwfqlpg.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163zyfsvrky.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163yqzsgnwj.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163dnvzygyo.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163wpydlrgt.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163mhqneume.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163sujdroof.html

{**a, **b}
来源：http://www.aibaodan.cn/163dzksuiws.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163khdceawn.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163xovuzmgt.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163xxacwyor.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163aacnufvp.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163yynghjuj.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163zqgetyht.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163xnehlyva.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163prmznhbm.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163pjorihuy.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163eibmbjeo.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163qmlstutz.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163mxdvuerb.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163inrjqcxn.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163ndzhvtpa.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163hykexbfz.html

defaultdict(list)
来源：http://www.sxryk.cn/163qzkbvign.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163odnarvqn.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163xkozkfaf.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163vvqpwtug.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163jmkeyzwh.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163vbjwmtlp.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163rjclweap.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163whjcmjyw.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163alnshmiq.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163hcycvyfg.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163omifldqx.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163vgowbnyl.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163zdeilivy.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163brylkgfn.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163mtjpmath.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163vctncgzl.html

list(zip(*m))
来源：http://www.sxryk.cn/163iroqjyor.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163sxdzzpnn.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163utxqulir.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163ypruuosq.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163etxclqnf.html


<!-- 参考信息 -->