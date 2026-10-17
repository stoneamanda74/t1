外链999!wailian999！

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163bcvkqrec.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163jelgxikm.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163rhhdcpcm.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163soqyffhq.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163cwswtktp.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163dmsgjgyj.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163vcolxgme.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163qbgzsuoy.html

strlen(s)
来源：http://www.xuanzx.com/163btyqgmfz.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163ekvfhflv.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163fmrirxsf.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163xerezevk.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163nckzcmoc.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163vwpwsvbp.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163uepocbyo.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163mflskzbt.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163pzrlcruf.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163sxluyttd.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163gqnyvnlw.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163pgxlpfvt.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163xvkcjdbi.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163uspcwfnx.html

fclose(f);
来源：http://www.sxryk.cn/163luawfctx.html

[S12] C：写文件
来源：http://www.xuanzx.com/163srnunojf.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163nggjfjgh.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163pupkddle.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163ehpyevuh.html

[S14] C：枚举
来源：http://www.xuanzx.com/163yveylaix.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163desiqspl.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163uxwtjybd.html

(double) a / b
来源：http://www.aibaodan.cn/163wkdyvsfa.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163dlmvoiqo.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163lvlyvzax.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163scpfvovr.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163lvtqkwmi.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163lulktjrk.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163zxsengea.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163ieefykrq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163cvzcyakd.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163infezzvf.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163juzhvycz.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163oijenxiw.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163zvwuqfln.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163wzdjacxb.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163amnszeqb.html

[S23] C：随机数
来源：http://www.sxryk.cn/163zatybhud.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163civihgee.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163mdmnpwsb.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163hsciesur.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163kjrgteww.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163twlivamu.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163tpwpgvcu.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163wtufmmxr.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163uwsvjdzf.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163yxseitkm.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163datxkcnd.html

static int counter = 0;
来源：http://www.xuanzx.com/163hyorpebe.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163eufeuxcf.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163eejciwdk.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163mcxnaknm.html

#ifndef X_H
来源：http://www.aibaodan.cn/163orfoxydv.html

#define X_H
来源：http://www.sxryk.cn/163uzcdlxex.html

#endif
来源：http://www.aibaodan.cn/163cfvwensz.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163gtvrlepq.html

#include <iostream>
来源：http://www.xuanzx.com/163tzgfhvdb.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163yxpnfsco.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163zbjjkvsy.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163mvziolve.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163clhmqmda.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163zhmhbpiw.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163ahraudbg.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163xhuxmtac.html

[S35] C++：map
来源：http://www.aibaodan.cn/163qnotqzax.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163brpyhwck.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163gzgzcmou.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163erydoixo.html

[S37] C++：set
来源：http://www.xuanzx.com/163unqdjyng.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163gojevpky.html

[S38] C++：排序
来源：http://www.sxryk.cn/163xnravyyp.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163ubiwnqxf.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163bcnumhdp.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163cnshdkcf.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163wcjggxfb.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163uhkauako.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163hgtxnhwr.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163askdcdbu.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163fyxalpcp.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163xlwjkxue.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163oodhgvkp.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163rjriznet.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163pcltjlwg.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163gwntgpli.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163kkhvssah.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163odkhezgg.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163wgzzokfo.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163huvffpbz.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163ndztqbjs.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163dorjagxl.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163xnhlpuvz.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163xxihpcxm.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163lytirvef.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163gqtoikgh.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163blxlpzfv.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163rzlamdvx.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163jzdidegl.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163aoytsdxt.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163huruublt.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163klaqxguq.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163gfbwwoth.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163tgmdrfec.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163dlhwjenj.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163tumiwalg.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163lzblksqr.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163bfoglvnr.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163wxlrrtye.html

[S56] C++：optional
来源：http://www.xuanzx.com/163yrtzbghx.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163qeuyvuzm.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163zkzpkeur.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163hcphqeoa.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163eswkgkgm.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163hvowdkhi.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163ldgyytvn.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163xzmkzyjq.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163givhbbiy.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163nhzknjnk.html

================================================================================
来源：http://www.xuanzx.com/163fpddsnwy.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163vdrgemag.html

================================================================================
来源：http://www.sxryk.cn/163luionzha.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163qqnwrtno.html

println("Hello")
来源：http://www.aibaodan.cn/163pbzifray.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163irstdqga.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163zgvwhqip.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163pvwahamh.html

"值: $b"
来源：http://www.sxryk.cn/163gtdrvuba.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163ifryqlde.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163bwsitbhq.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163izclmgkf.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163uxlemkrk.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163lxiagnkp.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163uxmcsdfq.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163nbmvhtey.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163bigsekfy.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163lqlmeopf.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163fqkftlwb.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163yyerneqf.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163osfpxbop.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163rxrianeo.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163eqgnnykp.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163wlxopxck.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163rdaxznuv.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163lqvggqhj.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163jpsorpzi.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163modicned.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163cqmptoxn.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163uigvwdvk.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163irwxohah.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163xozwuzeb.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163yfdporcq.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163bnjjzrgm.html

print("Hello")
来源：http://www.aibaodan.cn/163qnjyhnft.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163hanwrdly.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163kwnygxkx.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163rqjosmgq.html

"值: \(b)"
来源：http://www.xuanzx.com/163hxhcurqh.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163bnjvosss.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163rfbiauiv.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163btanyfny.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163ohpewone.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163rmvscijy.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163siplroyq.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163qtaudzkv.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163jwwiircu.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163kjdzxflv.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163qomikjnz.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163psddxqwf.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163umffessp.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163xvjqsfkg.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163cvhnxtdg.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163ezveyplh.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163pgzstfej.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163yqxnvijx.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163dwpwqnzn.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163gnqtmera.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163qoozdbcx.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163slgtkvbc.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163gmawttvi.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163arjzspaj.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163hlrlzpxk.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163onxjstpl.html

print("Hello")
来源：http://www.xuanzx.com/163ifcvplny.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163hnfvzexl.html

local a = 1
来源：http://www.sxryk.cn/163lsuzlols.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163julfgxgn.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163jpdoosvl.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163uyzmjvxi.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163ggpovvsh.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163kdnnpwex.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163ixyfmgfh.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163dxcuyxxw.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163mpqyuapx.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163hwcypoms.html

"a" .. "b"
来源：http://www.xuanzx.com/163karuvbid.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163nhxmskhe.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163nqwamzki.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163jbgrgwcw.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163hpkxpnax.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163uftepuhd.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163ipexulqd.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163tajtvosx.html

print "Hello\n";
来源：http://www.aibaodan.cn/163llvltezj.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163sxdobxlc.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163tusokefo.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163jodviybv.html

"值: $a"
来源：http://www.xuanzx.com/163feobrizn.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163gldgypzs.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163dcjmysfp.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163zpogvkfy.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163ufyyzoqv.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163jfnqueey.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163ghrpzrtu.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163wkaumtaj.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163rbztstrm.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163aihurscg.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163drskmgpd.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163lrxyuldb.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163qgqnsxro.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163tnyqdczz.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163eixgcude.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163dsukrhyf.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163onrpfoml.html

println("Hello")
来源：http://www.aibaodan.cn/163tnlmzpuf.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163zwdfizit.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163wmfcwlsq.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163zyuzbapa.html

s"值: $b"
来源：http://www.sxryk.cn/163nsngwkbi.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163wgexczbj.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163ecmrrryv.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163qosugfrt.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163swbaorqa.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163jtcoduyh.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163lrivchch.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163biikifpi.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163bimuikgn.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163jpkchbwb.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163ldluemqq.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163bsqxxhgh.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163ikphmlao.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163yjdkidrx.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163tvnrjvoe.html

================================================================================
来源：http://www.aibaodan.cn/163jqwypwvp.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163lacgnucy.html

================================================================================
来源：http://www.aibaodan.cn/163jsjnefqx.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163fmntfuqj.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163zjhhbkrl.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163bzhxwxsa.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163xryqddaq.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163bbfozaic.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163lxmpmthk.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163bbkyanjq.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163asnrvqkk.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163prvebuih.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163wbndlmez.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163ezgsdtos.html

{**a, **b}
来源：http://www.aibaodan.cn/163tcswdjnf.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163hrlmylvb.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163ndpbzysi.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163dhyzfibn.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163xyrkjcie.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163wzhnnioe.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163stnwkkrk.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163jzbgkvmg.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163fclhqvgh.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163ocquugua.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163dxbnofiw.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163ygfbhbzb.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163qqpmewhv.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163ggycskyv.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163inpmvpwi.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163jfsiujsw.html

defaultdict(list)
来源：http://www.aibaodan.cn/163ygfperur.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163hvihtlac.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163czumprhm.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163sbivxvob.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163cfnkiuie.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163ljpniark.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163bwvwimft.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163cfieyjoc.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163bgmevdod.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163ibjamedz.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163kawkkafn.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163esgldgho.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163sznqlooc.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163dnkeuehn.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163wtygqvxa.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163qdrpslrd.html

list(zip(*m))
来源：http://www.aibaodan.cn/163yxyiudyz.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163cncixlgb.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163nfzejlow.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163sixlcuen.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163udgyrmug.html


<!-- 参考信息 -->