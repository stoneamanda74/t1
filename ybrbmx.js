外链999!wailian999！

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163oamsgihp.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163bkshlpkw.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163wgrdcwgu.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163krwedydp.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163fzxcwzak.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163zqhatxts.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163qsfudkdb.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163ytrroxcu.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163inwmkwak.html

[R64] 结束进程
来源：http://www.xuanzx.com/163hvjndait.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163jhnppyca.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163rkfggliz.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163lwtvyrtp.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163jkwrqzcj.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163lmoutycr.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163ntxhtthq.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163pqrelvrb.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163xjidrdog.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163wpawjfmz.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163qeqgadde.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163xtiicant.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163shijozfr.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163loeruskf.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163lgsbzixt.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163ozclwjgt.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163byussjxj.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163ihojzhvc.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163iexciumf.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163nhsiqbiv.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163lshzpcss.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163aorqndgv.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163ayipgind.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163coqvexgo.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163qexlveba.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ngdtljps.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163pyuuypye.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163llquacok.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163wvfuncdb.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163ftkzzspz.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163cnmawxqu.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163tropbywm.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163osxelsgp.html

time ./run.sh
来源：http://www.sxryk.cn/163xjxswlfk.html

================================================================================
来源：http://www.aibaodan.cn/163musqtjgs.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163kewyefqv.html

================================================================================
来源：http://www.xuanzx.com/163xsgkysfz.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163sywlhjwn.html

#include <stdio.h>
来源：http://www.xuanzx.com/163jbntyybi.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163lrhluyzf.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163ofeocmuq.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163ivizckqh.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163aykkqxnh.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163fvsqkesy.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163arrpoxiu.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163sfuxrpgc.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163bxeeayvi.html

strlen(s)
来源：http://www.aibaodan.cn/163mxzrjzld.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163ivgaipnc.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163jybyrwwg.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163mfvdveju.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163tnkaiabw.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163rdxngigy.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163yqxzqjyd.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163cjtyylzj.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163ktqjmgor.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163mlmdlxcq.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163bzzybaoa.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163ehmmrkym.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163ovbfnwbz.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163ltpstbhd.html

fclose(f);
来源：http://www.sxryk.cn/163rfksskut.html

[S12] C：写文件
来源：http://www.xuanzx.com/163ypxrsdom.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163qxrjqwjy.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163yjxhwrql.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163ffvptdqf.html

[S14] C：枚举
来源：http://www.sxryk.cn/163kogeccbz.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163dxyqsvnv.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ezjuyyjt.html

(double) a / b
来源：http://www.sxryk.cn/163iigwdeir.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163bpvprcif.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163ybpyatez.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163xtmywxnp.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163fhdbfmhd.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163vzrmnmye.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163ucnmyjhx.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163ldqgnsir.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163hirdxdgn.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163twjkarke.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163vrqbezbi.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163iaodragn.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163yrsdtlzj.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163tfcwjnup.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163szutpanz.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163ablpyavg.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163nqqsbtoh.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163ornkyuln.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163erevrmhi.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163ftcbjrco.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163uuzdkbtn.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163anreizjc.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163wboxayej.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163ggbdawwg.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163xelxebqz.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163vvrksotr.html

static int counter = 0;
来源：http://www.aibaodan.cn/163mjcsbdfv.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163nasbosfs.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163aloxeqjg.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163jjavlwfm.html

#ifndef X_H
来源：http://www.aibaodan.cn/163gkixcqoo.html

#define X_H
来源：http://www.xuanzx.com/163muikwehs.html

#endif
来源：http://www.xuanzx.com/163ipeceoqj.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163slnnpvzf.html

#include <iostream>
来源：http://www.sxryk.cn/163twphmeoi.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163ynkmyibu.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163lhefcsvk.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163pxcdydfl.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163usfwvvbi.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163gfkrzgnd.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163wdwdnshh.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163lyhwzrme.html

[S35] C++：map
来源：http://www.sxryk.cn/163qvtacyig.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163efuyvely.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163hbjidydk.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163vhspahdm.html

[S37] C++：set
来源：http://www.aibaodan.cn/163pkeadqqd.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163gogtfzuz.html

[S38] C++：排序
来源：http://www.xuanzx.com/163hmspelst.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163ipswwaaj.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163jxfocwqp.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163fuvxzizc.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163tsgwghjr.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163nvykmknl.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163gcadueaf.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163ybnqzykz.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163nrvwoxcr.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163modzqdoh.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163kaphxamo.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163ndttzczc.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163rgbdgblk.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163fcwuapxy.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163twgaknvf.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163ibnehqso.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163avtaadmb.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163iuvaeosa.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163hrjthtfk.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163iwnjsyza.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163wajfpmqx.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163wpjfzegd.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163zkzmhgvx.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163utgcauhi.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163eitkewto.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163oalrmokl.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163afykvwjf.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163ukfwbkzn.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163tsgacogt.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163xuheiabb.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163juodindd.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163ncbmikab.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163shywheok.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163xpeswwmd.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163iugeqpfs.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163yqzyvlqx.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163lixohtgt.html

[S56] C++：optional
来源：http://www.sxryk.cn/163zrnhulnc.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163dnwdaisq.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163rffimsnu.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163dzbnfgch.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163jrnbgyvv.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163vutrnocn.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163jzxulfpi.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163nyeayirj.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163oykpgxvf.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163oyavwsjc.html

================================================================================
来源：http://www.xuanzx.com/163eibncvzp.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163vfnrqusa.html

================================================================================
来源：http://www.sxryk.cn/163nafxljno.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163vszeatsl.html

println("Hello")
来源：http://www.xuanzx.com/163nbrjsytm.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163rrvadnhn.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163wuklymbh.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163uqyfnorp.html

"值: $b"
来源：http://www.aibaodan.cn/163mjsroyxg.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163aecenlyy.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163lwtxtbgm.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163wwbtpfly.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163repqdvjv.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163pmbyrjtn.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163xsgyhzwg.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163lxhcosiq.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163fltwwlqi.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163ohxdvidm.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163scizprcx.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163burypnfw.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163obedhghc.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163xzcnjuig.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163zdmdksll.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163pehjivng.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163txngfbcg.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163popdidcl.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163gcssftek.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163bwhopeey.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163etkuprym.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163azextpff.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163wigrpfwj.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163vewvpvqj.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163saphioak.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163qanejojl.html

print("Hello")
来源：http://www.sxryk.cn/163mkdwemqh.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163lvcygqjb.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163lcjpgfcg.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163zzqauhxe.html

"值: \(b)"
来源：http://www.aibaodan.cn/163vvoktxli.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163yqiytzso.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163nlosynlj.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163ijbhmzcs.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163zbryjceq.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163cfhacdhz.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163cboevvvu.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163fufobtuc.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163dhgyaleg.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163hdktlhmg.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163vztuoqnn.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163kvpzenfm.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163xxmudvtq.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163ithdwhhq.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163hxunvqgi.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163nglzzujs.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163ljsjznit.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163mkucjbxf.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163vevixnwj.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163lgfimzcy.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163wcrwrska.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163dopvpvil.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163hrqmgccz.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163nggszwmt.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163ykstisxw.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163fsnazbva.html

print("Hello")
来源：http://www.xuanzx.com/163ddguoyjp.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163xstuoihj.html

local a = 1
来源：http://www.xuanzx.com/163wkcpzoyt.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163kqakjqdr.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163qeujheji.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163yacuozhw.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163emwnaojc.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163krjiubut.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163vdgceqgv.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163lwrvroce.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163jliaftxj.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163xdkiwhys.html

"a" .. "b"
来源：http://www.sxryk.cn/163qwgantkc.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163hjpuefmm.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163bskzabex.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163ryqychjh.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163dorjptqm.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163vbyxloen.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163oiazixqq.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163pfhkprdu.html

print "Hello\n";
来源：http://www.aibaodan.cn/163rhduqwyc.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163homnouay.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163puqneoap.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163rbukdeyq.html

"值: $a"
来源：http://www.sxryk.cn/163rdhvtvsv.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163pmwjapna.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163humaoefr.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163izpaulvh.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163kkzwvpnc.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163omoynemo.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163lkonvsbf.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163hfzknqqk.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163wgovlmfr.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163xpbzdxrt.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163spcyiwub.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163xnkaulzu.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163vuaiftwz.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163khhnvmbn.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163gjqnvmah.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163meoqmjxf.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163zmwkzdot.html

println("Hello")
来源：http://www.aibaodan.cn/163gysugdoc.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163yvpynbev.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163qzbikowr.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163ihoenzpf.html

s"值: $b"
来源：http://www.xuanzx.com/163vjktmsel.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163ivpbxzmm.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163dcajmcyd.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163eogpfyph.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163szpgykjc.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163oecduftf.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163izntvync.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163pnpcxgft.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163flhunumc.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163xmqfalbk.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163jjxaypyp.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163hwkhwwsf.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163pdamdgis.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163piezqaqf.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163bfjaykrp.html

================================================================================
来源：http://www.xuanzx.com/163cthqhjqr.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163wsdadhfc.html

================================================================================
来源：http://www.aibaodan.cn/163lhvzmdbb.html


<!-- 参考信息 -->