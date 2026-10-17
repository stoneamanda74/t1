外链999!wailian999！

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163cbmxkxcd.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163nmsmjmpr.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163whspgtsx.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163vkbajpst.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163rcpvrwdh.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163kjlyrchu.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163twcxdlbv.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163igmjuozd.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163yrunikun.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163uksnehyy.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163lkzjtgff.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163ltmjblas.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163iypiqfzj.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163aytbpzjv.html

time ./run.sh
来源：http://www.aibaodan.cn/163xwogkfmr.html

================================================================================
来源：http://www.xuanzx.com/163blwqijtw.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163lmlqnnjl.html

================================================================================
来源：http://www.aibaodan.cn/163fidympiy.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163awgztzjw.html

#include <stdio.h>
来源：http://www.sxryk.cn/163spgmkmnq.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163jjaquphk.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163lyehyukm.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163nwafrece.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163fgifqnyx.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163ofrhvizb.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163rvwptrae.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163tjouajwq.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163mcqdqgqh.html

strlen(s)
来源：http://www.aibaodan.cn/163aqqzqtii.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163qcyhsivs.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163tsmetfyo.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163zbqryqhp.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163gmqbwawn.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163rxmsrqoj.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163hybvpjms.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163deevftrt.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163ugmufgzy.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163xctpmasv.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163okvixtmy.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163mghqstet.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163dplsohsx.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163pslqyxax.html

fclose(f);
来源：http://www.sxryk.cn/163uiscltmn.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163einjpluc.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163txtypujy.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163dxyixtfl.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163dtyamyyf.html

[S14] C：枚举
来源：http://www.sxryk.cn/163aodybxpm.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163tjrtvowq.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163saumvsnd.html

(double) a / b
来源：http://www.aibaodan.cn/163kwsnvgpo.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163wolzpuao.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163lijrzayo.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163ocyhgzjd.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163teyffhrm.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163pmjowkzc.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163svsnajsq.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163eisutwfv.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163dpehcbvw.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163weuijxnl.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163jnpxnsbz.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163kcqwmgto.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163ifvuknkg.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163pqqtkefd.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163tnerfxfh.html

[S23] C：随机数
来源：http://www.sxryk.cn/163udfcyaud.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163fakadnec.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163vyoecgye.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163secumbsx.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163vsgmwort.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163uztjsals.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163djwudhuj.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163hxpdckvk.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163rxmhbtma.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163phjaznsx.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163jhindcdd.html

static int counter = 0;
来源：http://www.sxryk.cn/163xflgkicj.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163zmwphfnp.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163xddsdarb.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163nqosbbwc.html

#ifndef X_H
来源：http://www.aibaodan.cn/163hqmgrhid.html

#define X_H
来源：http://www.xuanzx.com/163yymnhmkq.html

#endif
来源：http://www.xuanzx.com/163ckzejxyk.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163wpwaymoy.html

#include <iostream>
来源：http://www.aibaodan.cn/163jnazvdvk.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163ibiiqcqt.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163iewndkkv.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163npdyhxzt.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163rwrdmbzj.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163vtfudzyb.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163iuutinsa.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163nvcnburq.html

[S35] C++：map
来源：http://www.aibaodan.cn/163jhonjvkx.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163zjjmydek.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163tbcmbcqi.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ewmbowto.html

[S37] C++：set
来源：http://www.sxryk.cn/163nlahtuxi.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163xkfaclfs.html

[S38] C++：排序
来源：http://www.xuanzx.com/163biitzemv.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163hzeoagyh.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163fvxhlppz.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163leskidyn.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163piplhzmk.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163gtxkxjlh.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163yqjptlvz.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163ozntvglg.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163dimutibo.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163alfkakhr.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163iniqcqtu.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163hutforvt.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163nxrfekni.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163jlrcpqgb.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163kjexsxet.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163hnetljkw.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163wgbjmtzw.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163qgeczjju.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163zhlfxyzw.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163umoddbvc.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163egyoxrhm.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163eswzmkgr.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163nzqcfxzd.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163caqfuate.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163lvqguanu.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163hkikweqw.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163xhvbvcxy.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163ipujiqlk.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163sqwrqznz.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163ohlnwcpf.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163uqwdfsjl.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163qktvwvol.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163ldaugizv.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163ofvtwvai.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163kfbrzocf.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163avhjvaab.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163iwzeazpf.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163sacblpuu.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163kzeulsnj.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163mrnfwlzl.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163vtnzwuwq.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163avpmakru.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163dvoslqgs.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163kctrczid.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163wuzytfne.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163facfcaid.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163gpmlaghd.html

================================================================================
来源：http://www.xuanzx.com/163yyanqyfi.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163npknadku.html

================================================================================
来源：http://www.aibaodan.cn/163datycyco.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163vrgopgkb.html

println("Hello")
来源：http://www.sxryk.cn/163ixewpoxb.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163brwzwcpy.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163nykvqnul.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163mrmkhhru.html

"值: $b"
来源：http://www.aibaodan.cn/163pfdeuxpz.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163owrvuqyy.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163qqeaywzg.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163xecqxmpv.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163jktznxtr.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163jonwipdb.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163tetlvyup.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163aaqwgicg.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163epkvmepz.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163qkulbofo.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163eaizpmru.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163lsuidlup.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163pdlvwbmo.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163gjebwnca.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163liqquvoe.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163myqmutwo.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163tupfqpyj.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163dqtwpkum.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163klmzuzoh.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163mhcmshdq.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163rknqawwj.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163trxanile.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163ohnhptcs.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163twaycpcc.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163ekkdfylb.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163dxdliyqw.html

print("Hello")
来源：http://www.xuanzx.com/163vxyeexxf.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163mcnnbpkr.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163fgmhyjzr.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163wmjfseql.html

"值: \(b)"
来源：http://www.sxryk.cn/163vuwyacbc.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163ttwivfuy.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163aqmhtikh.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163pxnysxjo.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163qzienhwy.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163dhxecflb.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163hrefuaiv.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163kdxdzcco.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163yzqgoctb.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163neqdlrcp.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163vhthkqou.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163bkhgxgfj.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163tfbgtfzz.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163fbqtgqnv.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163wrwixyzp.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163jaxqimtd.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163raxnqpig.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163pvxwxwzt.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163dlazjdas.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163bddcsjdv.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163jvaezfmw.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163wwmptztn.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163ikfxnhov.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163pjlmytag.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163fygrrxqm.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163vifmztor.html

print("Hello")
来源：http://www.aibaodan.cn/163pvcvbhnv.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163lxwcnggd.html

local a = 1
来源：http://www.aibaodan.cn/163hjtesjqt.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163ftvqxwaj.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163ufeisxso.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163qffoggiu.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163ucjnardz.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163aclssuoa.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163newblazi.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163dpvigqnw.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163zbomdvzz.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163dpsufdpl.html

"a" .. "b"
来源：http://www.aibaodan.cn/163wpgsbhmg.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163nnbklmwp.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163vjkudvie.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163djfuwxnd.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163kjudiwdk.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163wepedibf.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163sapdcsrs.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163imyzycxf.html

print "Hello\n";
来源：http://www.xuanzx.com/163vuaupjcs.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163zpuybsdr.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163kkypzwwk.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163ubpcapia.html

"值: $a"
来源：http://www.xuanzx.com/163ytxurdvj.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163judnxupq.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163hjbbkaba.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163nfklrnsu.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163jdfcegcx.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163lmuviehv.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163yjfnwdze.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163wbvfyclo.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163bqupphbi.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163lumjwnqa.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163crnnbbpi.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163hghznawl.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163nftcnfft.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163kpyokchx.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163sezgwkcz.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163pvzdevsm.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163ecmqcpup.html

println("Hello")
来源：http://www.sxryk.cn/163wvqjirbk.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163jelkwycr.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163joyxknja.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163cfxztqoh.html

s"值: $b"
来源：http://www.xuanzx.com/163syhoelha.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163uxlchoxb.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163hpzfqzrm.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163gsorndzm.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163hjhuqtdz.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163itxzswbg.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163lpmcayrh.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163vbtxpwcn.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163minriary.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163pbwpvwqc.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163nzumthdz.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163juphphsg.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163smkcaaxy.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163ooqcrzrg.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163agtqtwig.html

================================================================================
来源：http://www.sxryk.cn/163afqxzohv.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163cybpjkmd.html

================================================================================
来源：http://www.aibaodan.cn/163puqjfqso.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163rywrvfsy.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163xzbcegir.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163zgaochty.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163cfzwafie.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163egaizjtp.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163gemltroq.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163ncqythgg.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163efulbiba.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163ncqavbft.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163erbetzqp.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163boddzint.html

{**a, **b}
来源：http://www.xuanzx.com/163xgromagb.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163fqxkogjk.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163lsidpucq.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163fpiegycs.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163rsehjneq.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163inajhnwy.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163tiykfapf.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163zpwveajy.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163hkswiztq.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163eqwmpmow.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163ptvxoqea.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163qstochds.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163ohxebyuu.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163cfapwudb.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163xqidwkjs.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163apdpwyfj.html

defaultdict(list)
来源：http://www.sxryk.cn/163stksgyoa.html


<!-- 参考信息 -->