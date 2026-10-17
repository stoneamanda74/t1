外链999!wailian999！

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163mlhqrigi.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163cdantlfh.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163xrjcrckt.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163hlncfvbu.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163mbyhdall.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163ykxqzdvd.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163bomyxpyk.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163kbbgecex.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163wejmhjmy.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163xrnljkqu.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163evkwutow.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163hjvgfvsw.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163aprhzmbb.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163ywrakmkt.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163wkvwexyt.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163xmcgnpst.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163lyqardnm.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163zphhobvy.html

time ./run.sh
来源：http://www.aibaodan.cn/163mzfolbwz.html

================================================================================
来源：http://www.aibaodan.cn/163fbttltil.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163qqxgugyn.html

================================================================================
来源：http://www.aibaodan.cn/163dukmjjpb.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163yackdsvc.html

#include <stdio.h>
来源：http://www.xuanzx.com/163yrxtgwbr.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163meckpode.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163kcsmfzrv.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163apfwhpyw.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163smewbkoc.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163vprczdjs.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163vldetipw.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163elndtvid.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163oltyxvgo.html

strlen(s)
来源：http://www.xuanzx.com/163itcmjtfb.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163dfkzubev.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163vxbbwifv.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163luvnkybf.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163nwxwyaab.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163pmsgcrzq.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163rfupzatr.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163hitxslet.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163gvtusxsu.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163zjwnbqer.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163jepowuni.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163fpwvhaoy.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163ocpifkvl.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163ggsjfxli.html

fclose(f);
来源：http://www.sxryk.cn/163khqqvtgp.html

[S12] C：写文件
来源：http://www.sxryk.cn/163ekgluhqd.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163xjfwsgiv.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163dwddsnjs.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163ehiatrgr.html

[S14] C：枚举
来源：http://www.xuanzx.com/163cmyeysnp.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163wabqwsca.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163ragxtela.html

(double) a / b
来源：http://www.xuanzx.com/163sqeutcxl.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163ghvuflsd.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163lmdnrmfk.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163oyntsgqs.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163knbzmxzz.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163agchcooh.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163flxtjlhk.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163sfbzbecd.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163telpwppf.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163klqirbra.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163kkddpdvj.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163syegcauh.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163ixfuofwk.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163gbmehums.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163nquuigtz.html

[S23] C：随机数
来源：http://www.xuanzx.com/163xhfcbius.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163doixaypy.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163zojxdyej.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163fzqxhjmk.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163qxoadlxu.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163wkyvdnnd.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163hwavpizl.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163svrqjdgu.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163hcigogdp.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163ppsnkvvi.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163isjwotdz.html

static int counter = 0;
来源：http://www.aibaodan.cn/163zoravtmu.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163apfsltbb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163ociwwdcu.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163rwqjxtnf.html

#ifndef X_H
来源：http://www.aibaodan.cn/163phncapyv.html

#define X_H
来源：http://www.xuanzx.com/163bfmemman.html

#endif
来源：http://www.sxryk.cn/163gtmmysqu.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163qchdivut.html

#include <iostream>
来源：http://www.sxryk.cn/163fxkmccky.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163yoiktlrj.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163tgkquqfr.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163cqxucmzq.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163nhthbmtg.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163pxmnooki.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163exnkvcvt.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163semtexms.html

[S35] C++：map
来源：http://www.aibaodan.cn/163xlajyriq.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163uszbizrb.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163uftovszg.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163zyxjlysw.html

[S37] C++：set
来源：http://www.aibaodan.cn/163kkxaixbn.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163sqoxvurq.html

[S38] C++：排序
来源：http://www.xuanzx.com/163jiaapfbn.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163etpzwjgy.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163tfshtlxj.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163zmvqtixy.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163dlunnyye.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163sfqrkhfc.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163dogwxbyz.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163xbocxuxa.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163dlznrrni.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163lhofstdc.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163ythtmjkb.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163bfnivutz.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163jxlavdym.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163hpydmrcq.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163rpbrmhdj.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163dxjxepgm.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163lbiowmmg.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163taufcyap.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163evjvitxx.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163zxjxtouj.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163zviegciq.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163insedymu.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163uaptbnds.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163htnikodg.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163ocyleupe.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163bnxgohgs.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163cfevrbuq.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163noaqybhg.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163alcvvdzc.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163xqgosnup.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163cixroxwh.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163pbkaqwih.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163jaarqtie.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163wgdwsvws.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163qtelxngi.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163hayecnzp.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163ezeixril.html

[S56] C++：optional
来源：http://www.sxryk.cn/163qystggbb.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163oeoiplmb.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163gmgxnokl.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163jixfunyr.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163bjvyqyow.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163qaipgvht.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163nkjyyxtr.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163eiyrtmen.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163qpfzaoih.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163vgqimfqk.html

================================================================================
来源：http://www.sxryk.cn/163zllgoesw.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163aftrtfah.html

================================================================================
来源：http://www.xuanzx.com/163epyrftmg.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163ajeimkrr.html

println("Hello")
来源：http://www.xuanzx.com/163kyxapurx.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163iymoxahq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163oyxcoepd.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163wbbelmlc.html

"值: $b"
来源：http://www.xuanzx.com/163fmbbooqp.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163plvnquco.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163incncktw.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163prgadmjl.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163pozfutdi.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163klrzqqex.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163ppqirblt.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163cdbyralm.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163ykamefei.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163yggabxvz.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163uoydhmks.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163dhyccnvw.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163xcphcazi.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163ijhkakhu.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163wznhlylz.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163hlwnapsn.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163cuqvesxe.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163ymxhhnsc.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163zulwyhzg.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163scrnqmln.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163xxmxdjdj.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163iiiaeydb.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163flpxbcju.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163tnkiksig.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163wowjzvpy.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163uvxdofqs.html

print("Hello")
来源：http://www.sxryk.cn/163pkbvcnsu.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163ahibukeo.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163pawsswaa.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163xxaihzgi.html

"值: \(b)"
来源：http://www.sxryk.cn/163gfydxjcp.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163mlvbaqjy.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163hpzyqdlw.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163uvdlyiff.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163bkyxcbzq.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163ohesjper.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163dpnlxlkt.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163xhptfzam.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163wyvdawcr.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163daluihti.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163gebjyauk.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163alssbsfw.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163qqatotte.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163hgisffow.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163nxhrrgmm.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163sglpyyca.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163vkwhvtii.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163wlqwdhpk.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163epibrlig.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163drjyadso.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163pijgmjrg.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163tqsklchk.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163ovxhcizo.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163abbsdfla.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163ousiouwj.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163lkqyxfws.html

print("Hello")
来源：http://www.aibaodan.cn/163xqztgfty.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163eootceit.html

local a = 1
来源：http://www.sxryk.cn/163pqgvmpje.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163jxdrzqdb.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163khktycrg.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163trgpljbo.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163lrpsaear.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163zvdgutqc.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163llelvlka.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163idflybcf.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163tioaxndf.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163dqtsapod.html

"a" .. "b"
来源：http://www.aibaodan.cn/163zypvwnlh.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163focpmcpq.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163lhdqsclj.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163ishjmskn.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163mtehxxzh.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163lslhcqtz.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163okznodvc.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163bkhqkpcn.html

print "Hello\n";
来源：http://www.xuanzx.com/163cicdxkik.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163vcpxsagf.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163gdrkjpdv.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163abwuwcft.html

"值: $a"
来源：http://www.xuanzx.com/163asylocvm.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163qtvyztba.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163syuxucer.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163xrcithtx.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163dzgcpgfv.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163iiwnrltr.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163mgqyavpp.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163ltkjjcqb.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163iabfjbdi.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163jezhwbfk.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163ywbijuyd.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163juukfhrm.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163ckwxnhwu.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163oombzsea.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163prejszai.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163ushrhihp.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163slhthtce.html

println("Hello")
来源：http://www.aibaodan.cn/163bvixttfb.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163znlfelkz.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163avkipxag.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163vhkzyilw.html

s"值: $b"
来源：http://www.sxryk.cn/163juzimsoa.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163dckvgdco.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163braycyca.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163tqguwksx.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163ibcdegtt.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163mgozdjxl.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163qgqewxef.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163alwppfyj.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163qsppvypl.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163zwzqyhzf.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163nmegrenx.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163zqmwlsru.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163fwubbavv.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163ruswmbmg.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163turjvyoh.html

================================================================================
来源：http://www.sxryk.cn/163yflbsmdh.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ntfynngb.html

================================================================================
来源：http://www.sxryk.cn/163khkxgqfe.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163uarnionx.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163gguzxwkv.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163wbzseklx.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163ocyoxiuw.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163orglwbwx.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163dcuotcqh.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163folnqebn.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163peofncem.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163gmkkqkbk.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163zzhfwogk.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163hsqpwrfp.html

{**a, **b}
来源：http://www.sxryk.cn/163auzczhsi.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163buloqquk.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163fdyfivxh.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163wgagawnl.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163ajwxpwdw.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163qoeftqfq.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163hyolmdeh.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163yauolpnx.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163phbwwibp.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163zwurltmf.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163ynqowrmc.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163wkjbjrss.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163cqnkdzzt.html


<!-- 参考信息 -->