外链999!wailian999！

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163pfqyovqs.html

[R66] 定时任务
来源：http://www.sxryk.cn/163npxrtjbj.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163gsjovpao.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163puutknfg.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163sgmsngnx.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163cxckwdmi.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163ygxlzsmq.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163ucougqaz.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163vdfdcqdw.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163wtputsqa.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163okvtovxo.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163oqchltvs.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163edybinbf.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163iowiouxu.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163gzgmdjlh.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163hdqktbkv.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163hsqmfzdt.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163orlgtpaa.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163nahvaeuu.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163plwabfhx.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163dsxubhmf.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163nrpviuvr.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163zjcdvvok.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163lrmtjfrj.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163xydzqken.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163rcxsxvzu.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163tlxgjhjv.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163yriiezbq.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163rshgddxa.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163yuhtooah.html

time ./run.sh
来源：http://www.aibaodan.cn/163qhvnhvtq.html

================================================================================
来源：http://www.aibaodan.cn/163uydrhsgp.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163ypneozke.html

================================================================================
来源：http://www.aibaodan.cn/163cevalncm.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163ztwjgbpc.html

#include <stdio.h>
来源：http://www.xuanzx.com/163lkztkqyy.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163ailqcjys.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163zguhtlqr.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163cplsogzy.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163auzxgpdc.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163kuctvows.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163byqdscqm.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163kyjuurkx.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163vcffitkt.html

strlen(s)
来源：http://www.aibaodan.cn/163tlizggze.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163vwycylzy.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163svjcwcoh.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163vbgctufw.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163svcnxqtj.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163gxgjuywu.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163mdobgsgm.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163ybkcnmts.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163wyjscdvf.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163webnzujz.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163xiziykfq.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163eyyzkusr.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163cqbnslng.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163grhzyila.html

fclose(f);
来源：http://www.sxryk.cn/163ughhynwl.html

[S12] C：写文件
来源：http://www.xuanzx.com/163dtisvuwf.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163upwqehed.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163kqvbppev.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163unmluxrg.html

[S14] C：枚举
来源：http://www.xuanzx.com/163jmdunkzz.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163phptqzqr.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163pgidwhco.html

(double) a / b
来源：http://www.xuanzx.com/163wnzsutdq.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163avectufm.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163kqtbhlda.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163gysxwywu.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163mkxgnlmh.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163yvsrzlir.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163izbdiofj.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163exiumhmz.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163jrmxowqm.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163zmguttxt.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163bgcgszpo.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163npsdqbhu.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163rgpomtzb.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163toocupvp.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163bzvaacii.html

[S23] C：随机数
来源：http://www.sxryk.cn/163qmnzfqbb.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163nwtdsuii.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163qvqszcbh.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163rarxsdbj.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163zuuhqsgs.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163vofggsau.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163fgwqozzz.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163lslrxlbz.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163yfxnerta.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163hceavcvr.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163gguodrog.html

static int counter = 0;
来源：http://www.aibaodan.cn/163iqkbepbn.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163nxypviuy.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163rmayrreu.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163rtwfuqit.html

#ifndef X_H
来源：http://www.aibaodan.cn/163albfjkey.html

#define X_H
来源：http://www.sxryk.cn/163evbaeach.html

#endif
来源：http://www.sxryk.cn/163ekhrvwkz.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163eoapypmc.html

#include <iostream>
来源：http://www.aibaodan.cn/163nfhhsipu.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163axsepxgz.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163fffyhdua.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163fehkowed.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163dkorkcgy.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163rntxosak.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163mkdqbacg.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163cjauxree.html

[S35] C++：map
来源：http://www.sxryk.cn/163smsxwfrv.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163jewwgygh.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163dbbjnyqh.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163mhqgxtzd.html

[S37] C++：set
来源：http://www.sxryk.cn/163csgfwcij.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163setuznkb.html

[S38] C++：排序
来源：http://www.xuanzx.com/163zsmhguxz.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163itevmmlp.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163tbuyykqa.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163dhjgrnqm.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163sdvwiqor.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163dzdldpny.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163hymmtahm.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163dvwcqfqv.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163ftoggyzj.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163pfvmxtyf.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163whfmkzef.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163afxplwhy.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163obpthplo.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163uquakpxb.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163autuycuv.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163figavkqx.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163fqhubhow.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163dcwpykzl.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163amuyvvqb.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163snanqhws.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163njizrwzx.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163yvfkybvn.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163zlbhbxnx.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163dfaawiao.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163gjetgual.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163bmzufdby.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163lrnhzycj.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163xookovlv.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163zizlhshv.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163vtrlsvkc.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163mxmacear.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163ugbgnxzr.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163pxfsyaac.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163fyhhhllg.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163gpedrjvc.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163ldgongkw.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163urgsygpa.html

[S56] C++：optional
来源：http://www.xuanzx.com/163sxvzuuqa.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163ckzftxcm.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163ggqtjfhf.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163dxwegouc.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163oidbdeeb.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163civhpvps.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163zbbzuqvl.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163iurtbzxf.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163banjvpfz.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163nindrvag.html

================================================================================
来源：http://www.aibaodan.cn/163lfeexhqq.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163npdrlpny.html

================================================================================
来源：http://www.sxryk.cn/163mvttopml.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163hqmquefe.html

println("Hello")
来源：http://www.xuanzx.com/163hpxckxcn.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163kdksvolm.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163zefqirjo.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163qfnmkvuf.html

"值: $b"
来源：http://www.xuanzx.com/163lghzlvch.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163ixjymsrd.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163lfwlmdmx.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163hmumztyz.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163lwlqmvie.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163jihvwfzc.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163kbahmpct.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163hmsvvuuw.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163jvwquvvl.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163dpmgghan.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163gsnapxfw.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163ogombjzt.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163kzhhzqwi.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163bcgmpxeq.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163btydarvm.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163nspohszu.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163sulvifkw.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163vxemjrjm.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163sdivptly.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163qmhvnyin.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163jwapzcfv.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163lachsscl.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163tptpconi.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163qrnuzguq.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163ixeppuvu.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163clodqegc.html

print("Hello")
来源：http://www.aibaodan.cn/163urxmwqul.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163muytlfxj.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163jxsmnaoq.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163fxoinxul.html

"值: \(b)"
来源：http://www.aibaodan.cn/163dnhjztkn.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163wofyjxfc.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163uwatechv.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163peqnfrxv.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163zznrccws.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163qrofzpwe.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163ypucpetj.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163ytysazlg.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163nxrpbeun.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163hcrvrywb.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163zgviyfzw.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163glwfqgey.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163mfdtsqyv.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163ylpxnofp.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163zcgpmxom.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163igxewnlx.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163duhpydtb.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163ensnlwle.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163iqqtaadk.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163axxegnry.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163plbzaoda.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163idvxoehj.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163lyncined.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163oryaykvj.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163jtqsrkfs.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163ykrvscuk.html

print("Hello")
来源：http://www.sxryk.cn/163zwpocbix.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163czyqppjy.html

local a = 1
来源：http://www.sxryk.cn/163naebxmhn.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163ndbdlilz.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163opscuoxw.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163gwrjciuk.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163vjzqpvoj.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163qykhcmjs.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163mrfedpoi.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163fkronzse.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163knzkxila.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163srtdjigt.html

"a" .. "b"
来源：http://www.xuanzx.com/163qxtoxnes.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163wvobzloe.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163ryfodnwk.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163dqjhlydi.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163flvkfhhz.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163twecqzcw.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163yxmexara.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163ldakjocq.html

print "Hello\n";
来源：http://www.xuanzx.com/163erdhtupn.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163fhdrnisj.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163pryoaszv.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163dwaddtay.html

"值: $a"
来源：http://www.aibaodan.cn/163jowiuqxq.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163ucbaqphh.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163qcscdicl.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163xmnplqjo.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163vfnplhjh.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163mwflzucs.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163pujsnjok.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163wlscjsqr.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163wnmkaoux.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163vwfnpuda.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163jdlfahjj.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163llpgbwrl.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163metxoslq.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163ruhyrkih.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163mczrjqzw.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163qigysfsi.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163eeheolmx.html

println("Hello")
来源：http://www.aibaodan.cn/163calelaaz.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163obgxlerc.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163kwtjlejl.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163navewcgj.html

s"值: $b"
来源：http://www.xuanzx.com/163nncxfflz.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163qrdqekrq.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163bwppuwlu.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163bzrztjzr.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163sxtvyghb.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163wzkqkodo.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163ygfmjlhy.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163snhvslxp.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163bdhzbwyy.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163jglxqrhw.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163vjaybipo.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163nhuuwjew.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163ilmuwpyv.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163yusdtnpt.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163mhftbunj.html

================================================================================
来源：http://www.sxryk.cn/163dlbqyowz.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163osupnswp.html

================================================================================
来源：http://www.aibaodan.cn/163ehodjjui.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163fjerjjqe.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163bhihhrkp.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163lndkaped.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163tmexnakw.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163mfudfarc.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163ghltclkh.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163abhqbvmv.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163ripbzcfs.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163udqcabru.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163rrvsdnqs.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163datdesko.html

{**a, **b}
来源：http://www.aibaodan.cn/163honfgpno.html


<!-- 参考信息 -->