外链999!wailian999！

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163iupfcroe.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163ujrsepmb.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163waeglapr.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163grbqelzm.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163cjmtynrx.html

[R66] 定时任务
来源：http://www.xuanzx.com/163skbweeuc.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163nkbcfxjz.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163ledfvume.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163udbaipsx.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163muirnfpm.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163wbxsfluq.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163mpfjwuea.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163sinrwnmx.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163kjnesown.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163qoffvcmy.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163twzsikee.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163rimlktgg.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163mwprejko.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163qkkrtczv.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163kwyiibwg.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163mghqfbar.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163ucxffgjc.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163vpxqfmlk.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163qjxdatzs.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163qdixwuvd.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163dxaeungn.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163shnvcgxz.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163uowzrben.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163xllrqqkx.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163vrjenclp.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163gctceoae.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163udozcpza.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163qeblgpkb.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163kjmsphvw.html

time ./run.sh
来源：http://www.sxryk.cn/163mmfjgies.html

================================================================================
来源：http://www.xuanzx.com/163hlkdraes.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163ogdiisaz.html

================================================================================
来源：http://www.xuanzx.com/163oziosasu.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163kikinplu.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163drbagsyw.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163ljvfekni.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163clwammpv.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163oqhibnlv.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163krtpsoft.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163hxlhhtgc.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163yizphzpr.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163fxhujxqs.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163baubtmkt.html

strlen(s)
来源：http://www.aibaodan.cn/163fpphuvgy.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163qontzdae.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163bzxfsmeu.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163jvjsbceo.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163vmgfwwob.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163otywycqf.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163psnuilma.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163nzzvanrw.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163qtmucwpl.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163agmhqomp.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163uxnvhbts.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163zieblexj.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163zzoqywru.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163otfkbvzz.html

fclose(f);
来源：http://www.sxryk.cn/163abqydswr.html

[S12] C：写文件
来源：http://www.xuanzx.com/163ihlilojv.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163ypeupadl.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163rgirlrtq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163kpgvxtaw.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163calvxixb.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163dlcfezni.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163kepvifzh.html

(double) a / b
来源：http://www.xuanzx.com/163fthkslmf.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163qlujkqpp.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163mdlgqnxd.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163fgumadxc.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163iripmhbl.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163badcjdhu.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163orsouhgq.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163vevgmvzl.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163dubydgwk.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163gkmllzxq.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163hqatjngz.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163tkdurikk.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163qeppfnah.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163kroawkag.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163ibgagazt.html

[S23] C：随机数
来源：http://www.xuanzx.com/163pajswouv.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163atacepmg.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163wjnivdwl.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163kdpcpqoc.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163mbqrfaje.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163gwkiqotd.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163xfpxsojw.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163qleiojqm.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163annqwvcj.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163nvvrjnta.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163lotvtono.html

static int counter = 0;
来源：http://www.xuanzx.com/163dduyzcup.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163rqrzxxxf.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163nzibdxvf.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163piixkhkv.html

#ifndef X_H
来源：http://www.xuanzx.com/163ddksqlbn.html

#define X_H
来源：http://www.xuanzx.com/163ketxykgq.html

#endif
来源：http://www.aibaodan.cn/163jftafril.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163khdnupbe.html

#include <iostream>
来源：http://www.xuanzx.com/163rcmgrkce.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163ufogyvzq.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163itcdbhtf.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163qqandmya.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163naablpnd.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163ojhgqqik.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163goewpcmy.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163swgkxrqx.html

[S35] C++：map
来源：http://www.sxryk.cn/163ayqnkwpj.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163kzpylyfm.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163yolmpezq.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163vlaxyrwv.html

[S37] C++：set
来源：http://www.sxryk.cn/163sgjkwjfo.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163ugwyvuqf.html

[S38] C++：排序
来源：http://www.xuanzx.com/163ubfujyde.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163lfultlpq.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163dbmlinik.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163owutugys.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163pbvoapwk.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163mcwqeoyf.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163czydmcmp.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163xxwdehbb.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163rlbsxtqv.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163ltflxfza.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163hdapsgbl.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163wwmelswf.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163lkeptahy.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163ndujateb.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163kyxuxnyx.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163nqvhybka.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163enufjvqu.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163oiqgleco.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163wsccyaqt.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163yridmgdl.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163cyigmivy.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163qenkxezx.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163ymilzqbx.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163ayhvsuze.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163ylaltfvc.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163ezkqrslk.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163hafvifya.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163zxpkjbhk.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163pkezepzg.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163zqonsdcy.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163qvklracz.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163axtsrlwb.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163rzoywsub.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163ndacnixs.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163kttweyli.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163nhxnqymh.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163kyouxvcp.html

[S56] C++：optional
来源：http://www.sxryk.cn/163ayeudkbr.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163jcoscmrz.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163alhxerdm.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163mlgjoszp.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163vfvlhzwh.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163jlpvqzqc.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163bjokvxzu.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163agmgsfdu.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163iqkevozr.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163jrsbukps.html

================================================================================
来源：http://www.aibaodan.cn/163fphewqan.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163nhcvteec.html

================================================================================
来源：http://www.aibaodan.cn/163ifbotjbt.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163ruhflysn.html

println("Hello")
来源：http://www.aibaodan.cn/163ansgrkiq.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163lfnwgkmk.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163zexyimdf.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163vczfhllr.html

"值: $b"
来源：http://www.sxryk.cn/163vbbqgbij.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163zsfcvhsm.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163aqvijyvl.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163pajgnowu.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163vupzariz.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163dhoyumea.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163maevwphx.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163gzpsegvk.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163kaomuwgc.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163ttxeugzf.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163bledidyh.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163iifrwfqm.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163ntxtdrbh.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163zimzwyuj.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163dwlovgde.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163eczdoycs.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163frarpjyu.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163qgtlafvb.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163zfyxzbnq.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163kfzdzfow.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163tcvjerot.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163tujpgnct.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163cqgcydzf.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163tqibeumi.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163xehwvbfc.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163vjvkeead.html

print("Hello")
来源：http://www.sxryk.cn/163zhmqpago.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163fwiuecxy.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163buurrdnq.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163yfudtjjr.html

"值: \(b)"
来源：http://www.xuanzx.com/163eyotkewf.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163hjglwbby.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163iylwunqu.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163zhogdfpp.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163bzcebdju.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163ugnicktq.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163drkjxybi.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163sjlhpoib.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163jsqbilbu.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163ooiiqqfn.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163osvfkhbi.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163ftgzmlll.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163cuwsohnw.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163czzofmzv.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163xqkmgryl.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163epswllhn.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163luuatoqf.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163qzmqpocr.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163wzqazsff.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163dfczmtwp.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163tehqswkd.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163wikekcuv.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163jqetujqw.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163kgazsrkn.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163ngricmex.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163wwolihba.html

print("Hello")
来源：http://www.xuanzx.com/163lpgcpqoi.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163ubduualr.html

local a = 1
来源：http://www.sxryk.cn/163tlfeqtty.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163rrzanzlk.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163cplukbma.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163clihtwjj.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163twfalfis.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163jkscwyrq.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163qhpeauyb.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163pgyrofgf.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163uhjelwoo.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163tlwatydo.html

"a" .. "b"
来源：http://www.aibaodan.cn/163uhneapbq.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163iidyjiaz.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163widurohe.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163cbxhlgbx.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163fqnevhwh.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163xkvoowoz.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163dkbsdfiv.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163uxyfhiwy.html

print "Hello\n";
来源：http://www.xuanzx.com/163qxtspvkp.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163cloyllzl.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163esjqmvvq.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163mqizrpsd.html

"值: $a"
来源：http://www.aibaodan.cn/163biqsnloi.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163zzwpvidd.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163busibmkv.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163jlwynppb.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163xolqnqhj.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163ickomasw.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163qkhstmzy.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163ainermpk.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163ocrrtidr.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163icxagcgy.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163dsxlsfsy.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163wcgmlyou.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163thksoazs.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163juhqglwn.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163gzdnmuoq.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163yxziexwz.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163wjnyugnz.html

println("Hello")
来源：http://www.aibaodan.cn/163mandizqd.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163sydklala.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163qqsjsbaf.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163tudftgoa.html

s"值: $b"
来源：http://www.xuanzx.com/163cwkpmmlx.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163catcfyxv.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163viqlxpwh.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163yaecphpq.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163qkbszqbf.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163dwruozdx.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163olfkhpla.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163hgtzkclc.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163odgbnrff.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163cukzumzr.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163fzrwpusv.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163gmourwya.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163kwychrtz.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163ftnwanbg.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163rkwpxtmv.html

================================================================================
来源：http://www.aibaodan.cn/163iawpocjs.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163wubekmch.html

================================================================================
来源：http://www.xuanzx.com/163iwpjlksi.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163dmmdwkhm.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163wftcfigj.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163mcdrsmnn.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163ldkcyzrr.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163faxxqjpe.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163hkrykhxu.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163ivrrmrxx.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163bnrwwxhx.html


<!-- 参考信息 -->