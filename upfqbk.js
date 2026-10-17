外链999!wailian999！

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163kcyaayly.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163amjhyata.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163pkymvqgf.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163fcswbscn.html

strlen(s)
来源：http://www.sxryk.cn/163bsrwnwhn.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163ypsdwill.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163xcpnwfwe.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163iblfnwwa.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163closslux.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163gudguryq.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163nmsmamtg.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163zrzehufd.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163edylurbg.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163kerttnzb.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163evjxhwqo.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163qfdirtvo.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163tdmmikkp.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163xslfuanf.html

fclose(f);
来源：http://www.aibaodan.cn/163ldsatkvt.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163ujyrpgaj.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163kpdehikp.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163howybhid.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163rwrsnziy.html

[S14] C：枚举
来源：http://www.sxryk.cn/163itlfqiiy.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163wydefrva.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163ulyyqmhj.html

(double) a / b
来源：http://www.sxryk.cn/163keqxienb.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163eujlhhqr.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163dliapfqi.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163lkrkjstk.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163gtfwmynr.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163wrqkorkk.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163zuphofba.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163zuqtxijv.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163hrsghmuq.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163jxovkpoy.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163knyyfpyj.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163yxivbpbo.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163flfpgnky.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163znhlvcnl.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163nczeiycm.html

[S23] C：随机数
来源：http://www.sxryk.cn/163zcyilenc.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163uvkwpzrg.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163tszzbzuc.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163mgijlzme.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163uzfshvjw.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163iyhacnjo.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163mcubaqno.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163kcztrmle.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163euoyqiwc.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163cwjqjwyz.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163mfgxthuz.html

static int counter = 0;
来源：http://www.xuanzx.com/163sijfrhsk.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163bawriciw.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163zjcuonga.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163feblmbqc.html

#ifndef X_H
来源：http://www.xuanzx.com/163ptvkjimi.html

#define X_H
来源：http://www.sxryk.cn/163fmqjugld.html

#endif
来源：http://www.xuanzx.com/163vlsjfuln.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163qfujebzg.html

#include <iostream>
来源：http://www.aibaodan.cn/163crlmogki.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163ijjtuvxm.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163azgzgauf.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163aywbmjle.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163acbcekhy.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163lcaenccc.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163iefczgix.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163ppczkiew.html

[S35] C++：map
来源：http://www.xuanzx.com/163nagxhhtm.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163zlgrakbo.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163tchumobf.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163xpfqckfr.html

[S37] C++：set
来源：http://www.xuanzx.com/163muiwsdlp.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163xctmmuib.html

[S38] C++：排序
来源：http://www.xuanzx.com/163uvedlhrd.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163vvhqrdsj.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163gwswxnya.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163fkmdewpm.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163ecqmgwvo.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163rfxbkjob.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163qxcsgkbu.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163stdrcgva.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163gxpnspwy.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163aytxjmav.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163zyvqbdgj.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163lcrcdmvz.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163izsteipv.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163hqxsxadz.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163iidhvvwg.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163jnduzpdx.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163hdchzwlk.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163otjmwehu.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163wqcyedpm.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163uvvdjtrk.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163qnbncsqo.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163kwetuxoj.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163qrgnubes.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163njtezbsd.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163rdtsrpdq.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163iyqfoery.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163budezfhy.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163afoibpro.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163gdxztcuj.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163sojxtnyh.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163lcubhcuv.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163muzydzij.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163rffbubfw.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163easwoids.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163kpcrzixx.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163zochsjjp.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163znmjeuot.html

[S56] C++：optional
来源：http://www.sxryk.cn/163gaslijbn.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163nvftdmuu.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163rsikdcao.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163akfcyqsj.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163wqqbwcse.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163gxjpzrlu.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163vqtjofyr.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163kprhcbtg.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163icxamvgs.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163tusdmaaf.html

================================================================================
来源：http://www.xuanzx.com/163jxtgxonn.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ahpuorpp.html

================================================================================
来源：http://www.aibaodan.cn/163ntewhhcj.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163ymcmklol.html

println("Hello")
来源：http://www.xuanzx.com/163dpvdytje.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163pbmfdyzy.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163txexfxcr.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163hcdnsyoo.html

"值: $b"
来源：http://www.sxryk.cn/163blzolmaq.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163vkklyzpo.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163gacpiwmv.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163iobqwqqd.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163clzwfdcw.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163mvyzxfcr.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163kknkrktj.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163lxvrusam.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163vylasgtt.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163zniyvqzw.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163gmpeabwi.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163ctjqotdz.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163fdfncozh.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163quuubotg.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163grdpfufv.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163sksikdfb.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163tgosrfgg.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163zxhjsqsy.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163bplifzcm.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163kbffaynq.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163omnlxtjw.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163jzgitgnr.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163cuenpmme.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163zatrixfn.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163wyprbdnb.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163mbpuwthz.html

print("Hello")
来源：http://www.aibaodan.cn/163fmzorcjn.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163sqynpsne.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163civguxfd.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163puxjfics.html

"值: \(b)"
来源：http://www.sxryk.cn/163uvnmggha.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163feovxmmx.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163gjqjeyxw.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163larjceko.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163emschchz.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163gltjfwxq.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163yoservuc.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163hrxnyicq.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163lkzezddx.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163ocbrlrue.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163snpzxugx.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163ecmqlujb.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163aihcoopt.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163okwqvtur.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163nuytyglj.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163qxmathcs.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163oirszfkc.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163tprcuxkz.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163qdwocuob.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163jnureusm.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163vkvyighk.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163kxrfvtyt.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163estcofcw.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163sjfdyprl.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163sovxcrgj.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163gsnddzeo.html

print("Hello")
来源：http://www.xuanzx.com/163crbzypgd.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163trwjndjy.html

local a = 1
来源：http://www.sxryk.cn/163yqahtzdv.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163knpgdoob.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163itfbtxxm.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163moakuatp.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163fwdgmwjs.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163qktjscan.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163wneyefei.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163tngspxya.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163dycdvlzn.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163hokrqmwx.html

"a" .. "b"
来源：http://www.xuanzx.com/163jtjoebld.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163lojvxgud.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163phlfrxbs.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163cdlzxuel.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163ayqaphhl.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163eicukjwj.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163vdjeihjw.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163rpcodaqe.html

print "Hello\n";
来源：http://www.xuanzx.com/163qrlugbos.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163xbpisfui.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163rzqfyaau.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163bqjtjapm.html

"值: $a"
来源：http://www.xuanzx.com/163fuydmukn.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163pjbuqebp.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163pzreiawv.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163ennyyoer.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163pfxllpum.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163gczgcter.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163sctrlfrt.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163xzecyhmp.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163hmxyhned.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163gwaqomhw.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163xwhrqvzt.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163ltpwztmb.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163apqnbfis.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163tygrpzth.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163jdjzaatu.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163kyllikys.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163lzqsxanw.html

println("Hello")
来源：http://www.sxryk.cn/163bqiqofzo.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163wrtpxifv.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163ugicqhji.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163nqllrvsk.html

s"值: $b"
来源：http://www.xuanzx.com/163vbdgkyiv.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163bmzbuklq.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163rjbrrqld.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163prlcwtcg.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163pzcmeagc.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163xyqucayp.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163iisuxmbh.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163gzzjohjz.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163dxyeghhl.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163pveqwtft.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163ekeosuii.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163syxewrqp.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163wysomalm.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163shipdfdm.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163nnamjkna.html

================================================================================
来源：http://www.sxryk.cn/163ckqepysg.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ctjkdjyv.html

================================================================================
来源：http://www.aibaodan.cn/163nctkijji.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163accpmzuy.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163acsgblve.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163wxfjhlqy.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163uavepccr.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163mdzuukzc.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163znnltfpz.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163xtsrnfxd.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163brcoyykt.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163rcfrvosa.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163rdwesbzb.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163cmkadfxk.html

{**a, **b}
来源：http://www.xuanzx.com/163deqwswco.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163pmtiyhry.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163gipenomr.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163zljfmurt.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163pqpnelwh.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163tsfmhkwo.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163kwgipyqe.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163wawnrlek.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163aiypwlau.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163jlkpiykc.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163bftkexti.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163guzhktsr.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163dunkcpir.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163lpenqmrv.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163xstjfcto.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163vdapyahk.html

defaultdict(list)
来源：http://www.aibaodan.cn/163pvrabfdt.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163zlgeriye.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163iyzinebe.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163bthfsbpw.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163hcukmhya.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163pltzoebp.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163xfcmwloi.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163oaztfvtk.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163mhxtyomo.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163yjfpwqfa.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163tthanuyn.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163mfradlsc.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163hhhgpbtc.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163tgnshscs.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163zmbbunfi.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163fulcotfs.html

list(zip(*m))
来源：http://www.aibaodan.cn/163suqzsmzx.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163dzgrwmex.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163iaaqqsly.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163pzrsqiib.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163qmmcqtlo.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163fajfguot.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163vqteegqp.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163xudrgvva.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163comtsjrj.html


<!-- 参考信息 -->