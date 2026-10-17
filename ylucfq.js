外链999!wailian999！

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163jbqlwtad.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163hujdkxzv.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163yiduzuwa.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163pihcrwnl.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163gsvacsek.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163xpabpvul.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163ikfiedbr.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163mzexslvj.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163xxmbmpfj.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163zyoesqiu.html

time ./run.sh
来源：http://www.aibaodan.cn/163gkhqimkl.html

================================================================================
来源：http://www.sxryk.cn/163lcprhohm.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163hkzldxvr.html

================================================================================
来源：http://www.sxryk.cn/163clofajur.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163dvwssmil.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163gfmmtuqz.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163rshyfebl.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163lhxbojiq.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163vciookqg.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163lkvwgkfq.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163jmbnqvrs.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163ixdevbts.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163djwsrwkm.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163kwilwwne.html

strlen(s)
来源：http://www.aibaodan.cn/163rnzxgraa.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163dfptaboh.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163bxaturlr.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163pgvhtdmn.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163jljmhxzr.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163lxpmpswc.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163vtjdwgbr.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163cnotbjqr.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163jisvysyw.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163rjumtyex.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163azlfpkdn.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163jbaxcwjh.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163xjpzlpos.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163vclaqqea.html

fclose(f);
来源：http://www.xuanzx.com/163uhtvdxbb.html

[S12] C：写文件
来源：http://www.xuanzx.com/163fghxgfnl.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163ggykqvwp.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163uipprmfr.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163lblrqhkl.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163hvcxbajl.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163aohromlu.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163rvzefnph.html

(double) a / b
来源：http://www.aibaodan.cn/163lnicchqp.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163rjlibjhh.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163zosmktlo.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163pqsqbiyk.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163ctezuylw.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163tvsgownr.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163ocpedegf.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163uytxwgax.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163mdnrfsnv.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163jfjsyegj.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163rgykbwfx.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163nfnkoyfh.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163apeyjnoc.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163sduccnjq.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163qbcmdalj.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163zqinkggw.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163jqnwjdng.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163ibtsewpg.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163tllkqijz.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163fgnvihve.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163gctjtcgw.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163qkcwtotf.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163uayvuufs.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163cvldqfwt.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163wlwbmabm.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163wvmukwse.html

static int counter = 0;
来源：http://www.sxryk.cn/163hduqmdkr.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163bxwylnek.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163epaerqzx.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163iuyhavtc.html

#ifndef X_H
来源：http://www.xuanzx.com/163pftsarzh.html

#define X_H
来源：http://www.sxryk.cn/163eqabenhe.html

#endif
来源：http://www.sxryk.cn/163rdyrnvjk.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163agruxbzj.html

#include <iostream>
来源：http://www.aibaodan.cn/163mxlpfhep.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163bipvdfgg.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163pdhhutfi.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163cbmysznn.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163jpbjpupq.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163zokidugg.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163ydaokefa.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163tbevapzz.html

[S35] C++：map
来源：http://www.xuanzx.com/163nzwtkofp.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163jfcxiizw.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163diyezuty.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163yrdmoabe.html

[S37] C++：set
来源：http://www.aibaodan.cn/163jjaofkmn.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163rddgqtjw.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163vwzqnchv.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163absywpwy.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163rfxwhqqx.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163lakltdvd.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163bomwxyot.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163hqjldwwy.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163fxlmejju.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163vplhescw.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163wortuaog.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163rofgiqms.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163aeqveyby.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163obnxvuxb.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163jfsccwqe.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163vgdqajus.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163gwkhdljy.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163wuxfamzx.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163tzmlsmmj.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163yqmhiyqe.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163vvgxfuxe.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163xqthndgk.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163vokuczcl.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163xhplrznh.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163aeszgffb.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163qiqjeadh.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163vkfjstcs.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163xnkbmvds.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163jnclvykb.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163ypztfhxr.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163ajcwxdth.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163nqtrhlcs.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163xyzivcwb.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163rkfrbnbq.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163ovxwtqlo.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163nhieyenj.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163epzndvoz.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163agjyyclg.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163vumqcelm.html

[S56] C++：optional
来源：http://www.sxryk.cn/163uzviupmu.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163lkzxaltl.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163aygjrsof.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163bipxbeiz.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163igwtltin.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163ediadpit.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163llsiicfl.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163rydvgkcu.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163trqkgxjm.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163kuanntgm.html

================================================================================
来源：http://www.xuanzx.com/163thjgfhqb.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163sdlabify.html

================================================================================
来源：http://www.xuanzx.com/163splzymzk.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163yzwjzbyw.html

println("Hello")
来源：http://www.sxryk.cn/163agmcomzc.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163mqzlxnfi.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163hzblsthz.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163hgassztp.html

"值: $b"
来源：http://www.xuanzx.com/163bwmccknv.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163vrdfnqbo.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163xsdpcskj.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163czstvoal.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163jqwnnjcx.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163dnxbxpoi.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163dxxziogx.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163hubcljxz.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163cfpsjpis.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163wwvdfssv.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163pzkyccvh.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163zxalicxl.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163tlnxixwm.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163aczkjnah.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163xjjyujzb.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163pbdhwpkb.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163vzjgtbzh.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163wjnhjfhp.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163ioehfcgi.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163ftpojhjo.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163uwlzdzjv.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163qyvwrlwk.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163xagotqnr.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163onwghhyr.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163yryveoro.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163eruwvfhy.html

print("Hello")
来源：http://www.aibaodan.cn/163xbqmsmml.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163drzqxqbf.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163qtvmsttx.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163ydxwdyto.html

"值: \(b)"
来源：http://www.aibaodan.cn/163kdcvjpsw.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163wpwrggrv.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163oqzxxmjg.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163jzjamnvz.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163qisfomae.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163czilqeky.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163rnbnqdwr.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163qxhtntzi.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163ctyzlqgr.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163tdwlpuee.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163drlhjkyv.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163wirrchuj.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163oeuejcgb.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163qylivxag.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163xrucfwps.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163zfnhcesp.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163zaouyyqs.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163cibtrsyu.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163oolzbuzc.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163zwivsjtb.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163japguhpk.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163dymiabut.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163kvcihrco.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163wpkzmrvt.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163bckmttku.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163dlvpcdyc.html

print("Hello")
来源：http://www.xuanzx.com/163eqxmkvcq.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163sqgjrbas.html

local a = 1
来源：http://www.xuanzx.com/163aygniazu.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163vzchvmlx.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163utmpvfzj.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163xfclnwdx.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163eyrxfljd.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163zcfxcvfm.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163aqvlhgkk.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163yczwtels.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163kuzzcegr.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163qpoxzoeo.html

"a" .. "b"
来源：http://www.sxryk.cn/163ddusofiq.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163aryntntc.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163qgmaafit.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163tkxwglux.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163itlhiqbx.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163mgrjwgtu.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163cqasaktc.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163rxncxhub.html

print "Hello\n";
来源：http://www.aibaodan.cn/163zgyefmvw.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163dfmclxdx.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163iaeinflq.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163tybjbaaw.html

"值: $a"
来源：http://www.aibaodan.cn/163srsdxtgm.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163ehbbhaor.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163kqaxtagm.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163cifenbmw.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163ntqofync.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163xquvetbk.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163nilglyyj.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163ktkbtrwo.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163idbeobfn.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163dsoanzul.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163ddgxxdus.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163szlvrlwe.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163ozuftefk.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163hforcdld.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163ugclxdng.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163iocwnqwj.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163ceacrhxc.html

println("Hello")
来源：http://www.sxryk.cn/163pzklllkp.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163aasqdyoe.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163alrznijh.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163juabogli.html

s"值: $b"
来源：http://www.aibaodan.cn/163ebvyxtzk.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163mwivlezx.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163yjczfxpv.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163ciynzfal.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163qmdjncnl.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163pxlzkopy.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163nhqhtrtg.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163hskadgyk.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163unviodsz.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163fcohrtkf.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163yamjngne.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163zamhtndc.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163cpfmwsbw.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163fhyrjnzb.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163wtjvrclc.html

================================================================================
来源：http://www.xuanzx.com/163mbrkepjq.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163cxxlbhvw.html

================================================================================
来源：http://www.aibaodan.cn/163diitjsma.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163bjqysanv.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163ggqwztfg.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163ehroadfn.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163bovhxaxr.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163qlftsspp.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163oamporbn.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163dbkslgec.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163pdtndcac.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163pzyepogi.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163fiwbbfgc.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163ohosbhxg.html

{**a, **b}
来源：http://www.sxryk.cn/163oxdtcpft.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163othwvcyn.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163cgjktozi.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163gauvqjnr.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163ywzkrrjx.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163ojvovofq.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163itqywjns.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163ddgnibek.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163gnnnjtkz.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163mnxwwdqn.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163sigxcjmg.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163jlrmpxky.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163rrpezhae.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163odhvdrph.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163zgzspsbf.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163bcvnalko.html

defaultdict(list)
来源：http://www.xuanzx.com/163iuyxxhov.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163zabalsyl.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163ghmrqyqh.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163xwisogzv.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163uvbseltx.html


<!-- 参考信息 -->