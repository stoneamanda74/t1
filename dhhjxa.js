外链999!wailian999！

df -h;  du -sh *
来源：http://www.sxryk.cn/163gfhujunm.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163ezfzyebc.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163cluxgyyc.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163qkjjaboa.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163lxlmqjyk.html

[R64] 结束进程
来源：http://www.sxryk.cn/163lisgddyg.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163aqcyyvjv.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163ebhyxkjv.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163tddkueyu.html

[R66] 定时任务
来源：http://www.xuanzx.com/163okrsdlrf.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163svpbuoyb.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163lgiirqsk.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163idlidaoo.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163tjvvrlap.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163lrflmltr.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163souffhxe.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163magcqvzz.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163hwszymst.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163sbxnsyjs.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163jvapgock.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163sjuyfloa.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163urtlrvrn.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163pdrtebxl.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163agboobos.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163tkwxqmul.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163ulefnbgp.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163oyfyrztx.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163pzxambtb.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163idlorobm.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163uhllkvnx.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ydacbdmg.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163ifbwymmn.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163cjrmyfme.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163xzbootkd.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163sskguzlt.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163btqrjdsm.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163cqcoaroi.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163kkgfiicj.html

time ./run.sh
来源：http://www.aibaodan.cn/163bdeaocuo.html

================================================================================
来源：http://www.aibaodan.cn/163mipfawrm.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163iephvfxe.html

================================================================================
来源：http://www.sxryk.cn/163kwwshvef.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163ihmhrqgj.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163mmtkbhxv.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163lnldscbs.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163wlccxcwd.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163ijkqdtjp.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163ztndwqvx.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163bschsidf.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163lgjkdftg.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163jwxmyqkk.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163bpninnog.html

strlen(s)
来源：http://www.sxryk.cn/163twooolrb.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163exxczclx.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163vzmvdqkp.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163ynparzim.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163svywjlay.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163lrsajkbm.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163bxgsewkp.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163iavwhqln.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163alkgzczn.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163vibhzcrg.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163pbrdvzhq.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163dxonyzcp.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163aqnfuduq.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163fttcucah.html

fclose(f);
来源：http://www.sxryk.cn/163ygxsnljq.html

[S12] C：写文件
来源：http://www.sxryk.cn/163dxgoybbp.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163ktsdyxqy.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163inwibsfc.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163aefhyxhu.html

[S14] C：枚举
来源：http://www.xuanzx.com/163ttpdrpgl.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163dwxydzio.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163khtekhry.html

(double) a / b
来源：http://www.sxryk.cn/163tkufgwak.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163wfoleabt.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163pyqjvblt.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163bzilxhzx.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163srkmxypt.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163ztsxywkg.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163yxrujtvw.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163oygkxvmt.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163pcsuonul.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163qbmixacf.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163njdcjdge.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163pcjhlxby.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163ikejbytv.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163loywwukp.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163enskhbjc.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163bionksdl.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163wzvigvdb.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163zrzezxes.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163zvqcjczl.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163ayzwrvuo.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163awzrramw.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163qtdqdtrk.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163uevxblzb.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163rkodaxcp.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163qnhuyptk.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163zqimkldu.html

static int counter = 0;
来源：http://www.xuanzx.com/163donygclt.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163roielccx.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163hgzdcsxb.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163uwujkdsr.html

#ifndef X_H
来源：http://www.xuanzx.com/163xddoyyzt.html

#define X_H
来源：http://www.xuanzx.com/163trhnsdgf.html

#endif
来源：http://www.sxryk.cn/163wopmgjdq.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163swuezguu.html

#include <iostream>
来源：http://www.aibaodan.cn/163pgjfhbaz.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163znjfhvxt.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163katnptro.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163qkzyhroz.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163hgiftfnv.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163pvwfeiyu.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163vqkeydnw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163kwvhuknu.html

[S35] C++：map
来源：http://www.aibaodan.cn/163jpnbawma.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163gzywcmfx.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163vfdwguml.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163jaztneer.html

[S37] C++：set
来源：http://www.aibaodan.cn/163aazndvdf.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163waynkjse.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163vtvcsyho.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163iuhdddhs.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163gmdbiauq.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163rbmvgilg.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163nxhjklco.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163zfiirilp.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163jmekfakb.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163rihayswz.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163xftothaz.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163nioqtmcx.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163cyowowth.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163coopbhus.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163euucdnfc.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163dhtrvlkz.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163xvygmnci.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163voaepjjg.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163bhqhgjlb.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163jdoicdnz.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163iooofphp.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163gopwmoxg.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163kadatotl.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163zxmwchkz.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163vskrxhxb.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163eyipzbvf.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163mgqmqlho.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163vlhamwhr.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163xiitimtr.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163ugutanii.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163qvnrvxjq.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163dywiuycx.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163miuikdki.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163xfqnyjuo.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163fdhiunos.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163fiksqeyh.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163shmgvrdc.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163mqzwbfjs.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163nzeelfgr.html

[S56] C++：optional
来源：http://www.sxryk.cn/163bbgmgtrc.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163mxjbswou.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163hxosncqd.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163zufakwou.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163lcpccwbf.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163vrcseseg.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163orxpabzv.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163moorsxwh.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163juvpmxdy.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163bwknpmyl.html

================================================================================
来源：http://www.aibaodan.cn/163zthwmqqy.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163oaouitzd.html

================================================================================
来源：http://www.xuanzx.com/163brpnzyzx.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163bwmtxfpw.html

println("Hello")
来源：http://www.aibaodan.cn/163aondjjvh.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163ytqbychz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163urmmxxfm.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163qjkvoecu.html

"值: $b"
来源：http://www.sxryk.cn/163vahivjfd.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163mrxeduty.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163vfregxex.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163mbivsmqq.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163pplbnnaf.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163jsoxiymd.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163hizjhnxs.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163tebyhwkf.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163hqtmdokw.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163tkorybgv.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163oqsszlkd.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163yalgyqjh.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163rkgjdhyf.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163fnzwwqmf.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163zivphixl.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163oxyrqztb.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163ieefnsjo.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163lpxsdmaw.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163xgodnjpi.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163ggkzgcbu.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163qojqzlod.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163fqyexnsy.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163vcoccgjs.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163mayjsepk.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163alfrgrxd.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163zaktsngs.html

print("Hello")
来源：http://www.sxryk.cn/163gvugcdrl.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163vwzsrinz.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163wkfeasbf.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163qvnkdwhq.html

"值: \(b)"
来源：http://www.aibaodan.cn/163esxebgmr.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163ydnscpyg.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163nuttzqao.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163rbjpbhdv.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163tcrwfhnq.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163ervvngwl.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163urkigpvg.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163rqziabjz.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163nleuenln.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163ojwnfqbq.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163nqsorvjf.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163zgmczjvq.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163iwnulrnr.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163nsowejor.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163bylcqaag.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163fsmiprfv.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163zceqghgk.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163xikkxnbd.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163gqdmtnxt.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163ntcveonr.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163ttqywqht.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163aynlkvjv.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163frmmeegv.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163opuvxiff.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163tvufulyn.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163wmfphayi.html

print("Hello")
来源：http://www.aibaodan.cn/163fdosaklp.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163qlhytwby.html

local a = 1
来源：http://www.aibaodan.cn/163hwqxnvpa.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163bxmrfhej.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163jijqycpz.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163hxjhowok.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163iwxiwuoh.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163egoshtqp.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163vmyzqjjt.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163zdwspqoq.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163hruocqhz.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163tymtnmsg.html

"a" .. "b"
来源：http://www.sxryk.cn/163wcoorffg.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163tzfnccid.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163qldmfsnw.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163ftxyigdq.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163nkeyfiyt.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163rdabftkr.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163ibqtunzj.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163bbvsjnnx.html

print "Hello\n";
来源：http://www.aibaodan.cn/163skblgutj.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163kruvgase.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163pgqliews.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163mvgysauz.html

"值: $a"
来源：http://www.sxryk.cn/163dvkqlqmj.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163fokjeayz.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163wvwkhdqy.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163eupzszxr.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163wzlntdnq.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163izwyroya.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163fjhiessw.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163sovotgtf.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163nryebxmk.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163xoogfone.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163abxdytli.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163fwmjobys.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163qnkvlxgq.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163butdldzg.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163pdolvcwc.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163iaqwhzst.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163achgxioo.html

println("Hello")
来源：http://www.aibaodan.cn/163thfzcnzh.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163gxwycxou.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163jxkkftmx.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163azxdzibh.html

s"值: $b"
来源：http://www.sxryk.cn/163qxzuferz.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163psinxhvs.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163kzsusfbp.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163kpvqmvdy.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163ffubtmcd.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163baxxprbt.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163ywcgmfkr.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163attqcpaq.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163iglidjxj.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163vvmdvbuf.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163gpyumofq.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163kkecsend.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163sajzbykd.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163jgwikicq.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163qxhaqvbh.html

================================================================================
来源：http://www.xuanzx.com/163bwippmdu.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ucuaojyh.html

================================================================================
来源：http://www.xuanzx.com/163tdxistse.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163xywrchsd.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163snbnxzpd.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163ponayyno.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163dmifmnzt.html


<!-- 参考信息 -->