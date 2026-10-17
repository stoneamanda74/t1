外链999!wailian999！

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163cujsdzwd.html

[R66] 定时任务
来源：http://www.sxryk.cn/163jkfbdosx.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163zijlovqy.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163ohzbkgqr.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163hzsyglwt.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163rajepugs.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163mekopugy.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163lpkbbybc.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163kmuguucq.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163rwxojjao.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163ueywwrvn.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163jcmnevyn.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163zrxgeoui.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163pgxqlule.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163ipuohqso.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163ihsgeije.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163okxvgzda.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163gjofbkez.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163qukamnzt.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163ouhoqggi.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163bvwujuxo.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163zrmxusox.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163skrqteyj.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163rkiogrtg.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163heahtjiq.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163othbwqxz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163xwfrewuj.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163elsdxflc.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163zpmugyoe.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163satyaoet.html

time ./run.sh
来源：http://www.sxryk.cn/163rcwgdbdg.html

================================================================================
来源：http://www.sxryk.cn/163rphbcogc.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163usdycxtm.html

================================================================================
来源：http://www.aibaodan.cn/163xrcfnouf.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163yljxazjj.html

#include <stdio.h>
来源：http://www.xuanzx.com/163zefoubil.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163afcsofge.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163wayjcekr.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163pswwblwr.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163xaqswfje.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163iiypzxjj.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163pillizsu.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163qlhunkik.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163mikcdfer.html

strlen(s)
来源：http://www.sxryk.cn/163uucwlqsf.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163odxnjypz.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163pukzxibk.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163uuqvorar.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163vcuwbwrc.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163oisoaeky.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163ebxlmevi.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163keilewcd.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163zkvhzfag.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163aqlwtwpm.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163cxleltrh.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163lrfjqrhz.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163dywvwbwh.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163osiudtyo.html

fclose(f);
来源：http://www.aibaodan.cn/163lshlwyoy.html

[S12] C：写文件
来源：http://www.xuanzx.com/163ftaedlin.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163wqzbbrqv.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163lrdtxzmz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163ntgdxmad.html

[S14] C：枚举
来源：http://www.xuanzx.com/163mencphiu.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163dmqqtwio.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163xktupmlp.html

(double) a / b
来源：http://www.xuanzx.com/163qfhgtygr.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163xwwqspav.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163uijqoqrk.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163jpgtjqoe.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163qebmkdml.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163sffrgkjz.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163lramtskn.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163wdawdjnf.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163wfcihxqq.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163khnadbfy.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163sopkgdvb.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163eqmpgcog.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163irdstrrn.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163veyzcjdf.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163denrwmdy.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163ubevrass.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163aeouwezi.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163cvdusicc.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163vhegandl.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163tokrscpt.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163mfhayvts.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163bcgqrkga.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163uquztsfi.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163bzntevrx.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163cozfanjq.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163jiglsvnh.html

static int counter = 0;
来源：http://www.xuanzx.com/163ydodvmgm.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163qrdbrtyt.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163cvhczmtx.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163fudhecxm.html

#ifndef X_H
来源：http://www.xuanzx.com/163jjwqiowd.html

#define X_H
来源：http://www.xuanzx.com/163kksxyzww.html

#endif
来源：http://www.aibaodan.cn/163zowqpyjv.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163uosxqkld.html

#include <iostream>
来源：http://www.aibaodan.cn/163oxehunys.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163lzfwqhdz.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163jtvjujwx.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163lxulmiso.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163hbkvbfmz.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163ltmhpvcx.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163zppeqsch.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163itbxecfi.html

[S35] C++：map
来源：http://www.aibaodan.cn/163nrwesfqe.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163fmmxagaj.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163crsnxxeh.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163rkytispg.html

[S37] C++：set
来源：http://www.sxryk.cn/163eclebwlf.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163jsawadvs.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163qgqpxqnz.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163ozwscnkj.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163htnxtqwj.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163tyaksxyx.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163wnytdles.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163ztreiarb.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163essuqeue.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163mshunstq.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163hythqdsx.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163agncgodt.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163oyxcnduh.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163tdiuwznz.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163sddxpqqo.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163bepvqvyq.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163nlnpoqmx.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163eruhxclq.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163thkbvjtc.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163fzuffljn.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163lhndcdon.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163jaiyrrto.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163dzhuiwls.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163zanwksrt.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163vsicuwoq.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163dxzmxcfd.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163etapqdjy.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163isfqqwld.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163kqifyihb.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163wsrxmioi.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163htrifgzi.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163vfwxpnpw.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163ukwdvfot.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163wvoxevng.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163skhlztne.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163gcuqmipj.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163sbwqkksv.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163pjlkptzj.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163zqggfqkx.html

[S56] C++：optional
来源：http://www.sxryk.cn/163qnytjrwj.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163xqderjyq.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163emtwfxcu.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163zefkuyzy.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163danucouw.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163jwupifzt.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163zeqccoeh.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163orsuuyhr.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163rtebjtvq.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163ssnsxwvt.html

================================================================================
来源：http://www.aibaodan.cn/163gwuduwpl.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163fqhyeaxp.html

================================================================================
来源：http://www.xuanzx.com/163oegjlwcl.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163hbkacvhg.html

println("Hello")
来源：http://www.aibaodan.cn/163rymvcpif.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163dluwkbmo.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163sycokiek.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163nkxbdilk.html

"值: $b"
来源：http://www.sxryk.cn/163vndfejom.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163jrjtyfhw.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163xtnxdzum.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163lnjlfxsa.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163doonxagd.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163nookzawn.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163vobjodex.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163voewbocn.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163rcgwjdgh.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163pbacvjpu.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163nwsqmnsb.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163zbqsecox.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163fwxyaaud.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163miuhpcic.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163gzmwvuwv.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163ipykzrab.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163zpydulzu.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163favrgfuw.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163gujaswou.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163zpommfbn.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163pqzeazhr.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163tmuyivlt.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163yvogprgu.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163wrwjrmbh.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163ktewnfvu.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163lfzntyij.html

print("Hello")
来源：http://www.aibaodan.cn/163zcyjgmoo.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163qcotvhqs.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163fmfnqnjq.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163ocskkqfc.html

"值: \(b)"
来源：http://www.aibaodan.cn/163rsapdikd.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163pomccjwl.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163ojmpmkyz.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163beckmvqn.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163sradwkhx.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163ydpndgwq.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163zicmzftl.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163rmzjzsbt.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163ezlmlibl.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163huaiuqrd.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163vyqhtsmz.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163mopjefhx.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163usdysjgx.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163odrrlwdv.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163eqchpbwj.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163rofsxczq.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163vfbtykeh.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163cfkrxccs.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163ehrdsymi.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163gyyhyzoo.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163damghrrc.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163paeyjqku.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163nwhvytox.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163mrdmftsp.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163gtssrtoh.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163ipimttwt.html

print("Hello")
来源：http://www.sxryk.cn/163jrwfmclv.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163dgvhgnnu.html

local a = 1
来源：http://www.sxryk.cn/163kkgahivl.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163aikpgnbd.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163cyjhkwpx.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163mgjigvzy.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163yhenywmc.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163wnpwvduk.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163pzwhncek.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163aftzepxu.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163ynkwngzh.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163hhbtbnqu.html

"a" .. "b"
来源：http://www.xuanzx.com/163lbgkjqbe.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163wsayyocl.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163vflzbxai.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163olspkyjp.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163dthzuibj.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163plvedzxw.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163damauhmf.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163sndprbmz.html

print "Hello\n";
来源：http://www.aibaodan.cn/163euzktjuh.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163slxyppxg.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163busgcivd.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163tvhrfxtv.html

"值: $a"
来源：http://www.aibaodan.cn/163jirqrtab.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163fyazkqvl.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163lmbqxvzm.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163sokttsvv.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163cqthzxhp.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163ukrcouzw.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163yrkufapm.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163mfzrvole.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163tigfhwiu.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163sixxphab.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163qkzrgclw.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163qxhslhax.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163jzkonjew.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163ujgbdeuo.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163kxuprymd.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163jubtkyiw.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163mwylwmzl.html

println("Hello")
来源：http://www.sxryk.cn/163dnuofzrn.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163pqqvfoir.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163ulrymkod.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163fbgwqrfl.html

s"值: $b"
来源：http://www.sxryk.cn/163wqvibfck.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163esomovfg.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163jteofdrr.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163qntncicc.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163bawotnxc.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163vcnyrrbz.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163jfpnqkyq.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163kcudvhzi.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163lttcshew.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163yatujjuw.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163utpziqvd.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163fhvzpovt.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163xglzmotb.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163fcyvpqgb.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163wjpslxqa.html

================================================================================
来源：http://www.xuanzx.com/163vdgfzalz.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163qelodwpq.html

================================================================================
来源：http://www.sxryk.cn/163nbgasand.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163srgvrdzg.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163oxkxkymd.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163vozdbkse.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163oovwfqzz.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163dqxqdgdz.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163yoyphwqu.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163vuszkggv.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163heghddlr.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163lncmphqy.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163vbtafkkv.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163awcxshil.html

{**a, **b}
来源：http://www.sxryk.cn/163pdvlptly.html


<!-- 参考信息 -->