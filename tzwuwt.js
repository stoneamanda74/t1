外链999!wailian999！

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163xgyzjshp.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163fowksytl.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163qyldueoy.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163lgrappcy.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163bacyfnyu.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163mxkbelgp.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163qntxulga.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163jxhmsjer.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163fgfxfytj.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163entvuhcf.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163geozqspc.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163gvtqmkab.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163gbwkyewk.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163hxaifizz.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163szdocygh.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163xfbqhgwj.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163kizbwbmu.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163mlfjnpde.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163zaopkemt.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163ohfhdvwm.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163luzijyin.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163cisrunvh.html

time ./run.sh
来源：http://www.sxryk.cn/163tbtxhroa.html

================================================================================
来源：http://www.xuanzx.com/163umvesujo.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163thktplwi.html

================================================================================
来源：http://www.sxryk.cn/163tqhdiomd.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163gcpjuakw.html

#include <stdio.h>
来源：http://www.sxryk.cn/163jqfvonkn.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163cbjrtfnu.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163srquqvrd.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163qqzhcsjy.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163zxgvycuh.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163kdphyabw.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163denpuqon.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163ktoxxpcm.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163ehrxdyur.html

strlen(s)
来源：http://www.xuanzx.com/163movaviez.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163lkcyizsu.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163ensggbtw.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163upqaapkn.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163rjyhteff.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163hbrocmbg.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163ecdlxykg.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163fkqooniz.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163gnamnrfj.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163uhnfqmnv.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163fbpzhuxj.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163mcbtbbin.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163kihpyhpg.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163mkjcaphj.html

fclose(f);
来源：http://www.sxryk.cn/163tkizurgr.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163kegndqwb.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163nuhblkvz.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163wnhbwthr.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163dirpsigg.html

[S14] C：枚举
来源：http://www.sxryk.cn/163bysuplao.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163qvsiesfo.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163ccmxxmou.html

(double) a / b
来源：http://www.aibaodan.cn/163xbbnwxgr.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163bvryosrb.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163kxaurpyi.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163ssvgvhgf.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163hbxivyzq.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163udpfjwfv.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163gveffwol.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163ftwthgzz.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163mysaprtj.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163rlbzathl.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163uvkpluzp.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163rfnvywea.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163lbqpanjw.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163oyzndvof.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163roflmlta.html

[S23] C：随机数
来源：http://www.xuanzx.com/163ylewosgu.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163wdluceop.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163zpnntnyl.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163yyldgzpi.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163pqbcrzup.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163jxkpvqwe.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163sfuwdlwa.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163cgdtjygj.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163jjofqdaw.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163lisxceul.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163bcdkoidq.html

static int counter = 0;
来源：http://www.xuanzx.com/163ufercmtv.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163nkjevbpb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163wqbrxfxu.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163vhvugpvu.html

#ifndef X_H
来源：http://www.sxryk.cn/163sfqpncee.html

#define X_H
来源：http://www.xuanzx.com/163lcounstd.html

#endif
来源：http://www.aibaodan.cn/163rfgeqjlo.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163eorhvaof.html

#include <iostream>
来源：http://www.sxryk.cn/163thmeivtu.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163udpxjrse.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163vvvaqsxj.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163cpbqabdx.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163yggitwzw.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163eevwcjqu.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163wpgicllb.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163wmgcddqx.html

[S35] C++：map
来源：http://www.sxryk.cn/163wsaxqawr.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163tgyggzff.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163amgqxsac.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163fvdicyvc.html

[S37] C++：set
来源：http://www.xuanzx.com/163nbjafnwq.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163raynxujl.html

[S38] C++：排序
来源：http://www.xuanzx.com/163aasnunuy.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163slzcdamt.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163vzyiyyru.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163tiwnezus.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163swcoirlh.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163cpxgjcyp.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163fkjymlif.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163sphthlpi.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163blhjysyj.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163dlekkrcl.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163ulwgkjoq.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163iuibmdtb.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163pwpyfhxv.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163rcxepfcu.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163fevalfgo.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163wpjdihiw.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163kqbhngci.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163qhfuhfga.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163prldpcbc.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163ghxrblho.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163ufkamgza.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163hjzxrpte.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163amfgbmkb.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163czacpxgg.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163nrlwwdbf.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163khlwrcly.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163aeenbrxf.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163jatshpsy.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163mbywefvt.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163ogzdwuxz.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163oamvbmis.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163kdqifkdo.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163xzdjiqsv.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163fbieayap.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163cnicgxdb.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163xaaznjyv.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163ygsbempn.html

[S56] C++：optional
来源：http://www.sxryk.cn/163rtaflavj.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163vdhsknbj.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163oqzwnxtl.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163usndanrd.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163iswweonx.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163ypjogjts.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163vvnrrbab.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163aeiktdeu.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163nicfrgbo.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163xydtgfld.html

================================================================================
来源：http://www.xuanzx.com/163brdqcnbe.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163qqtnxces.html

================================================================================
来源：http://www.aibaodan.cn/163hxuiwmta.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163ruhsbuiy.html

println("Hello")
来源：http://www.sxryk.cn/163tpwhvywb.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163oiyywsxa.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163tblkiqgh.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163krncwcly.html

"值: $b"
来源：http://www.xuanzx.com/163rcvdvjgq.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163wcjiswjs.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163bticrrib.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163ispuneyi.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163tlljmomm.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163tidbccys.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163fxfxfxca.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163aqplwyfs.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163madtgovk.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163bmsxtgqf.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163qxtijavz.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163wekuiyry.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163nztvxzvt.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163ydeorhog.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163ibckecqq.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163fsbiuwrl.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163bjsonwqp.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163pjkncqid.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163zimomihz.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163xlauquxb.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163dsbcayrx.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163lobkkoyy.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163vnwimbce.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163ldorwlwr.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163qjiiowwe.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163ticseuuy.html

print("Hello")
来源：http://www.aibaodan.cn/163vkbgsvjc.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163fqhmsoci.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163akqrwaka.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163zzaklplr.html

"值: \(b)"
来源：http://www.aibaodan.cn/163sqjfkzlg.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163qxkyolhv.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163fugljtra.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163dhwsngmn.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163fxjexlpf.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163xyncfwec.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163ieofzoyu.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163hqhquoll.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163cyduyzti.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163wbhvttzg.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163zgtmnwjq.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163azcalhuo.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163lxkujwpy.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163umcnxihv.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163jbtvqsjm.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163vmqkyhrl.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163stmirbvy.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163klzergii.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163jkhifrkc.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163udoobwqo.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163hutravsh.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163rrxyeecp.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163rsaoivcy.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163jnesqlnb.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163iblqcjtb.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163rjnsgoci.html

print("Hello")
来源：http://www.sxryk.cn/163rozfnltm.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163qlutdanx.html

local a = 1
来源：http://www.sxryk.cn/163hcdibhfk.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163npbpiahh.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163guzmxnje.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163gkbwhcwf.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163tffcrzol.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163kvgwbqtv.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163dndvhbdu.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163gbbopwnc.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163bnxtyxca.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163xpwajqds.html

"a" .. "b"
来源：http://www.aibaodan.cn/163xosjqvxm.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163shabbhyw.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163bdxllkvw.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163dpeutnin.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163ekbvizsg.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163blyqghnc.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163vqeuvrvy.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163nerqplfp.html

print "Hello\n";
来源：http://www.sxryk.cn/163wybfzmez.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163blrsscpj.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163msmpqlux.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163ynsxnomf.html

"值: $a"
来源：http://www.sxryk.cn/163gnrxgrai.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163mvbhksnx.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163xdbwzypq.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163odjajksw.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163vlfcpvfr.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163vmjiypjf.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163radqqoaq.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163hxenwrzu.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163qyboagdd.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163eqxpokuz.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163nxkqolie.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163nqoqdkhv.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163upzdpxym.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163rjzzrmog.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163ovqumwaa.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163ghngohvo.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163toqetdkm.html

println("Hello")
来源：http://www.sxryk.cn/163tmzaxgaw.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163bloaanyb.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163xmjwjwnb.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163mixagnyi.html

s"值: $b"
来源：http://www.sxryk.cn/163dvmzxxom.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163zgftxojt.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163fhehgqph.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163nneczqlv.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163nlxefkzz.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163geqypaqq.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163jjcenodo.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163wkumxabs.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163uwlohiju.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163satsxmmg.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163jqhgvaag.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163slwzanig.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163fycvorhi.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163tvvjhysq.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163bpgebbxd.html

================================================================================
来源：http://www.sxryk.cn/163qpvvtbsk.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163rjpwdrkj.html

================================================================================
来源：http://www.xuanzx.com/163tllsremm.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163ueivinnz.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163icuvukbv.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163umnuiyuo.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163bwtqeqrk.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163cxqecyfe.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163immjuyqc.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163pzvozajr.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163oilxlxdx.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163yslqjjrj.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ssjzinim.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163mepjbiom.html

{**a, **b}
来源：http://www.aibaodan.cn/163nmvvhvti.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163vtvoamlc.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163ydwhzcom.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163djbmllnl.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163jpxczygp.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163szsaymsc.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163ivmnkpyz.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163henquzkb.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163srvbuwop.html


<!-- 参考信息 -->