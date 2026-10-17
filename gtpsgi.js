外链999!wailian999！

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163nnibflsu.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163gazayvky.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163axsgqgvd.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163kbckzzbz.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163qlxigsjv.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163nokohzvt.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163rjmshwss.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163rcsyxant.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163lvrruwji.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163qrhkvirz.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163yrjphnvg.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163rddjrxyy.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163iptjwmlm.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163bjsidchc.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163jommacoe.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163qzgwcmam.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163xyyzpqwx.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163kdukxwsy.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163oklkwtde.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163cdzwnagw.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163fsreheln.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163jfckzmjw.html

time ./run.sh
来源：http://www.aibaodan.cn/163iaziader.html

================================================================================
来源：http://www.aibaodan.cn/163mbuetmde.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163ildfubzc.html

================================================================================
来源：http://www.xuanzx.com/163qpquzkyl.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163xfprfzss.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163avlkdrno.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163feacrdqz.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163klfgucij.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163opqzavhl.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163pkiknpwt.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163ddmpoxga.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163bmxtcyrr.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163xzcmrhow.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163nasoquxo.html

strlen(s)
来源：http://www.aibaodan.cn/163plbnbzln.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163hltdqkew.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163gjmczlra.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163eikwrubk.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163cqllclfr.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163ovttgzsj.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163gmsnaaog.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163ucflffml.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163ptgkaksd.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163erreiimk.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163mbpyfzvy.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163hchaziky.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163wicwgjqn.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163khnrclja.html

fclose(f);
来源：http://www.sxryk.cn/163orjhtlab.html

[S12] C：写文件
来源：http://www.sxryk.cn/163rvldugzk.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163fgaazplm.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163rytmfrdz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163quknisql.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163xksfjrwv.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163xrbtrlhp.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163ungkwgfe.html

(double) a / b
来源：http://www.sxryk.cn/163cshoasmn.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163bhymgqnd.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163gaqtkzvi.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163vpolzcls.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163ogzufkil.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163bsxcnktc.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163hsowfqdr.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163gxaltssw.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163dndyebis.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163xafruvds.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163msrcomjb.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163ahrtlete.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163oqflvouf.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163izzjaftq.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163gzawfakn.html

[S23] C：随机数
来源：http://www.sxryk.cn/163lxrlrvwx.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163snzjqdft.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163wbgxadli.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163phtnvcrm.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163khqpnfkv.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163myvcluda.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163ksvvigll.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163ugxbrnac.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163xbogkkkv.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163qvhfalge.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163gfqrcizr.html

static int counter = 0;
来源：http://www.sxryk.cn/163eelkcuho.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163panmyxtc.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163lfkbeiaa.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163rrwygbvt.html

#ifndef X_H
来源：http://www.sxryk.cn/163rtgakylr.html

#define X_H
来源：http://www.sxryk.cn/163qsiilcvs.html

#endif
来源：http://www.aibaodan.cn/163ltbznufj.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163stzpqpmp.html

#include <iostream>
来源：http://www.aibaodan.cn/163fhwlerqs.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163mneykocg.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163qchvdkqu.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163pjgfjqja.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163nvhlmvjm.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163bzctlvoa.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163rrhqtmbh.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163bywigdnz.html

[S35] C++：map
来源：http://www.aibaodan.cn/163hufiixoy.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ofoqdubt.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163zqpxsvut.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163otvrvmyn.html

[S37] C++：set
来源：http://www.xuanzx.com/163qxtvdxjl.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163iqzwinui.html

[S38] C++：排序
来源：http://www.xuanzx.com/163ihkqgpjd.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163wpcjotmy.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163ogrmkiqe.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163ihorwznm.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163mhnuzixf.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163rtsobzzu.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163fxyyjhdz.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163gbozcfia.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163kelqijui.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163wwkupsov.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163dbqdgzgh.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163lnrllzly.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163ygeqlkke.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163youojefg.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163axauuale.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163ymacliov.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163fgrmkwrg.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163uydnazys.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163lzdfrnwi.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163abedetfq.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163aceblzke.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163veraqyua.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163mjjpmzdk.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163eirvunwp.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163ogohdzxh.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163wmibnlbv.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163wbaklfbo.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163tngoasap.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163jnfjtzpc.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163borxocvg.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163tkmuvdjb.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163iuddgmhw.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163ldylpezp.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163junxqgcq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163zcpbdqnt.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163uwjirlte.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163ejcxaygz.html

[S56] C++：optional
来源：http://www.xuanzx.com/163kuzmuqig.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163getbhokh.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163dzhfourp.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163xoomvbva.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163xvfkpfoy.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163knmbuseh.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163eopmejgq.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163dyalrbjv.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163moydyutr.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163kjkfzcwb.html

================================================================================
来源：http://www.sxryk.cn/163gcmjkjak.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ritjiiny.html

================================================================================
来源：http://www.xuanzx.com/163bkohkbcl.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163ussmghxx.html

println("Hello")
来源：http://www.aibaodan.cn/163qqqwovwh.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163qfivcxzh.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163mcmejxzb.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163vzqmblkz.html

"值: $b"
来源：http://www.xuanzx.com/163nyumrvgt.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163uhrgbtfb.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163qxtksgvj.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163uioptpnf.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163vrltzvam.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163wbnecyzd.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163hrgqeuik.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163rvnieqrt.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163aomwzrbb.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163xdstazwl.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163ccszhztb.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163jauklfdt.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163txukdqjg.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163lpljrimh.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163ecogdyqf.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163pznfuazy.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163plccuzwt.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163bofhwdmw.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163yhiavopg.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163bckkhwhw.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163dvskjrdp.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163gukrlokw.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163mpmldbyr.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163qmgmvxqk.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163xqpyqvgz.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163novbyzxy.html

print("Hello")
来源：http://www.xuanzx.com/163vdhvuowz.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163fsliwmol.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163boguljje.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163yafgkywv.html

"值: \(b)"
来源：http://www.xuanzx.com/163ayulbqvn.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163kcuwxhox.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163jmwcpslu.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163taftggyk.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163kfkwaudw.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163mwrthiiw.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163ydlaikuv.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163gokkosuf.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163ecsydsmg.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163xowxuzyb.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163dsjfqiqe.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163gujmekyr.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163pmqpmsmh.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163qjyjhpym.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163mcpfehyn.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163mzhxezww.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163qxxdwzrb.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163kssyxako.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163ngepycdv.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163jzyaridp.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163fbsythde.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163rapwlzbs.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163adbzwehe.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163imtywjkg.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163uyifobsu.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163ukldnzsq.html

print("Hello")
来源：http://www.aibaodan.cn/163mprdlxbn.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163eitklkwk.html

local a = 1
来源：http://www.xuanzx.com/163njivqzwo.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163zpenumyy.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163injfegjy.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163ziprxqdx.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163oexgryjy.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163vjgtbcwz.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163bquqvjgf.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163govcilxp.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163jzeazwqi.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163umvbnoig.html

"a" .. "b"
来源：http://www.sxryk.cn/163hwqjpeky.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163bjbidvmr.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163ojtzpmnl.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163chpsftyr.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163dzzditzw.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163hljkakuv.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163rdoqolyg.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163gerfycoa.html

print "Hello\n";
来源：http://www.sxryk.cn/163rrrblqqa.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163mtuohlky.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163slccnhpd.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163dnrbpfvp.html

"值: $a"
来源：http://www.xuanzx.com/163knyyrowv.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163ihoythps.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163elmhieri.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163gwvsfmzp.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163nragyofw.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163seocdtxb.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163iejdzcqw.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163kogdfhix.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163dhfvgfvu.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163wqlzuujw.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163rdmvwvni.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163egbtzlxu.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163wpwahpdu.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163hqlicyip.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163qhezuxhi.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163qsrslqsp.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163hntigajg.html

println("Hello")
来源：http://www.aibaodan.cn/163naslzxxc.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163gmivniiv.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163lidetqrw.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163uycwsuqo.html

s"值: $b"
来源：http://www.xuanzx.com/163iydhhotz.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163refllqln.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163lkqivfqp.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163pgjoebti.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163qmerovjw.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163jigdygze.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163yxlwdgib.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163vdoxfnac.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163seukdrpa.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163ulflrnpc.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163wwhoqinw.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163unoqxjhm.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163eyowjmij.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163mifelfag.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163zbiphhwp.html

================================================================================
来源：http://www.xuanzx.com/163iqvdrete.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163lxbugyjw.html

================================================================================
来源：http://www.sxryk.cn/163vxkwycak.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163fnofzsic.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163xjflooox.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163zvizzjrg.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163razcmdlx.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163nbzqxdlf.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163neofzxng.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163viulgpmg.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163zbrdzezd.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163xbiatmfn.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163mcjdeqrm.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163gplxvhly.html

{**a, **b}
来源：http://www.aibaodan.cn/163vnyttlkt.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163iltezfqx.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163brabvbqz.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163keoedllz.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163emkwpihx.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163ajgabphs.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163pdapexrn.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163huplxfpc.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163niswqwxm.html


<!-- 参考信息 -->