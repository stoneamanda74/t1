外链999!wailian999！

strlen(s)
来源：http://www.sxryk.cn/163tdslxpuc.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163zbvkzvis.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163fqufhnex.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163tpxmdtrc.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163fonytuix.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163ayveytii.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163vlmddvdr.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163tgilldrf.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163evwavwgm.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163vckpixdj.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163rjkswhmt.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163nuditijo.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163yemswkdy.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163jlnecpxc.html

fclose(f);
来源：http://www.xuanzx.com/163lfhsogkc.html

[S12] C：写文件
来源：http://www.xuanzx.com/163tobzrivl.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163jiygtsdl.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163zdtpiuxn.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163bpkklhwx.html

[S14] C：枚举
来源：http://www.sxryk.cn/163mhfnimju.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163zfgyiwyq.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163hwmucbxf.html

(double) a / b
来源：http://www.sxryk.cn/163lyqraqyr.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163ubtsnout.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163ucwqwnuf.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163wbpukzeh.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163dovfdcjl.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163iocwqacq.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163zjcvmurf.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163tmnjenkm.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163hanpmjnx.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163ytavfylf.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ydddcqqd.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163tkhcfize.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163xdxmnjon.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163yaybyzdw.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163kuxcrinu.html

[S23] C：随机数
来源：http://www.sxryk.cn/163tiwzsppb.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163progvsgp.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163coeojkyw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163hztfrite.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163frdbwfww.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163shrhwsnv.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163iiapuzyq.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163rdhcdfge.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163ypqfamri.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163weilhhvb.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163gbssetxv.html

static int counter = 0;
来源：http://www.sxryk.cn/163vsyaubpl.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163qvayccvu.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163dsyppfiw.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163bdnjygaf.html

#ifndef X_H
来源：http://www.aibaodan.cn/163lliqxbkb.html

#define X_H
来源：http://www.aibaodan.cn/163xakkaimi.html

#endif
来源：http://www.sxryk.cn/163fwgpswcu.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163dmfhwxwo.html

#include <iostream>
来源：http://www.sxryk.cn/163fvwcjikm.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163cqjqfdax.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163izvexivg.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163pmtcexcg.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163sbdlrfpz.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163osoaknvk.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163wflctcwj.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163nldqtxpl.html

[S35] C++：map
来源：http://www.aibaodan.cn/163ajfdyhvz.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163vrdaiadn.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163ndepnmjc.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163qsyfacxs.html

[S37] C++：set
来源：http://www.sxryk.cn/163clfuydyq.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163ogkmffue.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163bcleudgg.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163yutysmes.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163myqkvofp.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163ndvxdttu.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163ikwmveqz.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163luabxiqc.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163dsnwcpzv.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163lymgnjwn.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163rjxvmwar.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163drptxmmp.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163lpxjbqln.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163reiyxtln.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163guhdzdxp.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163jmkjeudp.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163laeoyzdi.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163aorbrzqf.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163crvhquaa.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163ljjcuarc.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163jnfhttmj.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163ihavetkx.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163ptgejplo.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163zrgbcidi.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163crepdenf.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163atusxyqx.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163lwywttat.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163sxszfeko.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163qzfcbiqh.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163cozwascv.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163efoybonc.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163puxcrdcd.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163eseuuhun.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163hxiawxkk.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163nkhsypqr.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163kwhtdazi.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163bfynnzeu.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163orlxztnc.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163vjckmgzh.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163aezhxtjy.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163xadnwgbd.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163catpgzfp.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163stmergjb.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163qbzvlkps.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163gpiblhxu.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163kgjmnzsa.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163haeluuef.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163xfsziity.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163gjxgkjio.html

================================================================================
来源：http://www.xuanzx.com/163klvmpwmv.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163qtijpuxf.html

================================================================================
来源：http://www.aibaodan.cn/163vhbtpjuq.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163dhjsndea.html

println("Hello")
来源：http://www.aibaodan.cn/163owjhyclt.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163haaihgyw.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163oldrgxnv.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163cgntwlvg.html

"值: $b"
来源：http://www.sxryk.cn/163aeirqwgo.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163amtdfzkg.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163lkaufrdb.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163fxotuntk.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163ycquyvlt.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163zyzjpefj.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163wcwqnbyk.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163wpfczcwy.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163xizmbqcz.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163afsiglxw.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163caumvfaq.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163uztwksoo.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163dfsseamr.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163icmwhevs.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163hepcyixi.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163nzbqfuit.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163lbujzddt.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163wxkfdlyb.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163ccvestuq.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163ruzkkzzr.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163lvflvjcg.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163hyofipey.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163sxdhqezy.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163nlzjpsrj.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163ydxdvnik.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163gvxflejo.html

print("Hello")
来源：http://www.aibaodan.cn/163hrktnpjz.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163ukcsqkbo.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163ybtvutcq.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163jehhnwll.html

"值: \(b)"
来源：http://www.aibaodan.cn/163mjgsdtti.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163dainuqbq.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163ixcgjtbu.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163rsociryn.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163cfqbibju.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163qtndhlkt.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163qdculdil.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163vnoizyzk.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163bconcpwr.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163ytzqzzxx.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163pldhytqw.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163kklkkhgx.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163jcchpyxp.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163pxxecvym.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163mentdeik.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163agupxzso.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163irpgeaap.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163srtgzynk.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163vmxuqkaz.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163onkbouix.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163iqmqthlb.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163mkmrpdzs.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163fqzofjkk.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163trviandj.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163qlqjzfyv.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163equhidyf.html

print("Hello")
来源：http://www.sxryk.cn/163nezycqwf.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163apiilwhk.html

local a = 1
来源：http://www.xuanzx.com/163oqzhrsmp.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163rxqytkvh.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163jujitwhk.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163kdfqesdg.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163rmgjgzwl.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163stjuwneg.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163iscikdtj.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163cocnnujx.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163ttwrwqxq.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163ghxmmyqs.html

"a" .. "b"
来源：http://www.sxryk.cn/163xxjzxoiw.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163tizziuqp.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163cvfvuyym.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163lgoomkkl.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163vaytuigt.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163oarwwzhc.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163lvtmosho.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163tlpibwmc.html

print "Hello\n";
来源：http://www.sxryk.cn/163ykzhudjs.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163wfawteei.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163jybfncke.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163gwyhnnbf.html

"值: $a"
来源：http://www.sxryk.cn/163tnxwufcd.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163kgxhbwss.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163ldnngzgf.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163rqrimiik.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163zuadtoxq.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163fbfukplq.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163fmupsvqv.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163ddstivfk.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163noxhwbjc.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163spydxfbg.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163deboicth.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163ndrhvhtw.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163hpaweuwy.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163atzmttol.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163xybqttft.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163grtztkwq.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163auxgqvut.html

println("Hello")
来源：http://www.sxryk.cn/163kmqfwqtk.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163pojhhkvp.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163qzqzgxwf.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163tklfgmli.html

s"值: $b"
来源：http://www.sxryk.cn/163bxlrecbw.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163ezlvqdjh.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163riehxbpu.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163nmhbqhki.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163dsryqbqs.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163ckwqybbq.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163rtnqxgwr.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163aoqjmhty.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163bpepbytc.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163wwvnlmze.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163tcaalicc.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163sghrcwld.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163hjoopsow.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163rbznltma.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163pvkksuvc.html

================================================================================
来源：http://www.aibaodan.cn/163tzzwzmlc.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163nnhooema.html

================================================================================
来源：http://www.sxryk.cn/163tvlxukhj.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163pnmyrtha.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163vzjylkei.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163tjjpzuar.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163aaokxnst.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163vgdqrasm.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163ixfzrmss.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163ikvxhmmd.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163hdopfvyw.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163opntlmjn.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163yrhricvg.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163mzmhebot.html

{**a, **b}
来源：http://www.xuanzx.com/163rgfqkqgq.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163ersruvfc.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163jmxpwsyd.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163safxvtfh.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163puoycbhc.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163xebkbwfo.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163xmetzqrg.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163ebgofbly.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163bktjpxzu.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163dnrwhmuz.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163lgtqlysk.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163mzeohhyc.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163tufkzpjw.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163pbjgqdwu.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163upnxuyiu.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163euddojuf.html

defaultdict(list)
来源：http://www.aibaodan.cn/163vzxlaohy.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163quinlxqx.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163vxjmzcsg.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163tvbyplls.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163xqelibtr.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163gfybsunt.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163ndfhzdjp.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163pkkyadqh.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163hnkkcpze.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163pfcdaznl.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163bjtwcpyt.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163lobiwjvb.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163uujdmmwn.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163xpgpiehh.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163koakpbwv.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163edgntzns.html

list(zip(*m))
来源：http://www.sxryk.cn/163pxycxnoz.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163tdihvzdn.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163ikqtison.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163icwqnzjt.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163zlxjwqqb.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163jdjswpxk.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163chnvdogn.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163duivpcms.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163doicefit.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163lmxntblr.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163nzqbeldq.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163pmjoavrv.html

UserId = int
来源：http://www.xuanzx.com/163irefkdfp.html


<!-- 参考信息 -->