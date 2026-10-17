外链999!wailian999！

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163ybtjyylu.html

[R58] 下载文件
来源：http://www.xuanzx.com/163pjzmubbm.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163olworjgp.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163vdxzfejz.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163wnehadsz.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163urrshyjg.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163hunyslya.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163zuuqzdbi.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163okczxtsp.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163qrzxjihg.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163rkyktibf.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163zdtamdqa.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163rdzlwjhc.html

[R64] 结束进程
来源：http://www.sxryk.cn/163euevghnw.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163gaqmpyoa.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163jjoqocsz.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163ogyojwhl.html

[R66] 定时任务
来源：http://www.xuanzx.com/163xdpixoec.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163kaanydhp.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163afmojyst.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163eirdibfn.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163dzlamgck.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163khhclqws.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163whuojjkz.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163ajgmsocn.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163rozdzghx.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163netmynue.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163omdcdmyh.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163algqdjwy.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163pxbsohwv.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163fecnuaed.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163hstdoqmw.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163mxulwqle.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163ueyrhzon.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163atuydlaf.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163uudncgql.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163ckdfdgxd.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163pfgqfshh.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163pxyfwird.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163izlijzjf.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163ezofqjbk.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163xtxqyytn.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163stqetwey.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163ngkopdiz.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163xpqyfhcv.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163geqetxjm.html

time ./run.sh
来源：http://www.aibaodan.cn/163zldqsung.html

================================================================================
来源：http://www.aibaodan.cn/163lbfqebqm.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163bbtgtyri.html

================================================================================
来源：http://www.xuanzx.com/163yjgmddhe.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163imbbrncl.html

#include <stdio.h>
来源：http://www.sxryk.cn/163ighbmtdb.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163ijqbkhqj.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163fausaugx.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163bzrnbuki.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163jwttugtb.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163vfamefik.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163stwyjpom.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163pkvihstq.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163ikedkjft.html

strlen(s)
来源：http://www.xuanzx.com/163cogxmqqt.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163gxqxqehp.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163hslbamai.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163oikkrvxr.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163miknwxjv.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163unqtkqjh.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163frirthbj.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163dixefaub.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163wfcbyedv.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163pagadhsw.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163lhaybeoe.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163isuyfitk.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163trhvhnro.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163pflzdnht.html

fclose(f);
来源：http://www.xuanzx.com/163gzqpxabw.html

[S12] C：写文件
来源：http://www.sxryk.cn/163wtacahgc.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163jrzyqudc.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163aijqjiqw.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163kprjzxsx.html

[S14] C：枚举
来源：http://www.xuanzx.com/163gidchekg.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163ottamhiq.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163syddkoqy.html

(double) a / b
来源：http://www.aibaodan.cn/163lrumdemy.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163qhcjqlcu.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163pfwdtqer.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163vxeqvzpm.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163xdlrozcj.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163glxazxek.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163edszvxth.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163kmrjibto.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163cvxpdxkq.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163gkuwzref.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163xlhskjam.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163guhzsvsm.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163zqbyjvcb.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163dvnblhxa.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163bmpdskic.html

[S23] C：随机数
来源：http://www.xuanzx.com/163untqcejf.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163mkcwyevd.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163rdayetdh.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163nbqjggcw.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163lplrwslq.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163zkgdmcso.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163mvehmrca.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163whxsluvo.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163oaqxypry.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163oiyzsdqy.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163myajbmui.html

static int counter = 0;
来源：http://www.aibaodan.cn/163htqbemwl.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163hohyoytj.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163ugqcszpy.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163vtcivqrp.html

#ifndef X_H
来源：http://www.sxryk.cn/163xyojzamw.html

#define X_H
来源：http://www.sxryk.cn/163qbxyqprl.html

#endif
来源：http://www.sxryk.cn/163hkhsqpqx.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163zxiokfgb.html

#include <iostream>
来源：http://www.aibaodan.cn/163ysbibndr.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163hiqcmlnc.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163kdteeuqr.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163scrsrikz.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163sfjlxmxg.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163zdgytbzb.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163cpxfxhwx.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163gwknrfsn.html

[S35] C++：map
来源：http://www.sxryk.cn/163cydsohsk.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163vusofjzd.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163jpltynkf.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163djlhhifk.html

[S37] C++：set
来源：http://www.aibaodan.cn/163msmjrvyq.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163ywicurkn.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163daquwgwb.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163rvlmpsqa.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163jwadkbkj.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163hreovoed.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163olrkqamn.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163wkxarcnn.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163vdapwbxx.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163kqtwsouy.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163qyqvozaj.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163hyegtemd.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163eqvssrzh.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163pezwycav.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163kudgvjha.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163brlsrngy.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163czzytdgs.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163sryvbfur.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163deiygvcn.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163foelqgbv.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163gvrmjzoc.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163wjbltejy.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163uvwdogla.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163tulfhlpu.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163yqjqrdnj.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163niwipght.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163rciyvsjx.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163vtsegvgp.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163ybrfbyhs.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163laboeozm.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163ogsobspw.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163ryczjckl.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163xbtilgib.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163rkcfinij.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163uwjdelns.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163gdwsbaxy.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163mlnnmcst.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163oioxuhwy.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163sjseygoa.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163xkfvyuuf.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163ihveipnv.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163yscbyglp.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163ytbqihmo.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163xowmyhgm.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163nifjvbej.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163vkaqhptb.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163pebvrspa.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163viuaqbeo.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163lilnpuza.html

================================================================================
来源：http://www.sxryk.cn/163vzbunyjh.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163aodgiegr.html

================================================================================
来源：http://www.sxryk.cn/163jaofkueh.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163fevbgviw.html

println("Hello")
来源：http://www.sxryk.cn/163cqdwaoxn.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163imndzphh.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163xeacgbtg.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163rpcevppw.html

"值: $b"
来源：http://www.aibaodan.cn/163nroclwvu.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163llxcuslo.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163lvlvulmf.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163vzvknpps.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163rihxufty.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163gfjnrklo.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163gbobwabe.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163xdkajpag.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163surqmvtm.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163kuzzdhfo.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163qvznhjky.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163pkexmzpn.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163qhqkmexx.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163izcqytxa.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163bkfjofbd.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163khzvjcbc.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163ovdsbafu.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163kwzwekgd.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163snlankty.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163fhzmowpm.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163nxzcumyd.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163equbwlns.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163hkzaljbs.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163diyjmxce.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163tcfydcvg.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163tcqwlwag.html

print("Hello")
来源：http://www.xuanzx.com/163rziwghya.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163ppdnkfwn.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163pizbhrpq.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163qyaobdzs.html

"值: \(b)"
来源：http://www.aibaodan.cn/163mqepitcg.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163sngvjcgp.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163hvdlypvz.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163mckzmiiv.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163vyzmwmjz.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163odkvjnmt.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163xmdwgaup.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163ptpbydlp.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163igatybsp.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163jymfeyzr.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163ghliksjg.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163ozomehtk.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163fphxhxxd.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163jmudrtyr.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163eamkalzn.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163oejkpogh.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163sloeyqgi.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163ogrcwyex.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163bumwjhzf.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163rmdkcdva.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163iwhxjnre.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163khixtkxx.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163rhmabcsi.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163qkyzkacz.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163gjbbnoew.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163qqlzhebq.html

print("Hello")
来源：http://www.sxryk.cn/163qjkkyupe.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163rzxziasj.html

local a = 1
来源：http://www.aibaodan.cn/163gahypazp.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163xljtbatx.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163gawvyozc.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163gmumbhab.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163llafwyhs.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163udddhyqr.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163soxgdxlh.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163maovlizi.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163jgpzuxol.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163hedlqsjw.html

"a" .. "b"
来源：http://www.aibaodan.cn/163kshyzwoc.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163qigcbzuq.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163sejyywsr.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163cjenroci.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163srappexw.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163yesbiitz.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163kmcqzgfo.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163bavppmcn.html

print "Hello\n";
来源：http://www.xuanzx.com/163hrdbblcs.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163mrbzroxz.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163oxnoxnxw.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163gnnhpuqs.html

"值: $a"
来源：http://www.aibaodan.cn/163zblartdf.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163lsxqyuix.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163mgaxahnb.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163wxmojjie.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163fntswnpz.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163ijmxhxaf.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163hidgxxqn.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163ytipvtez.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163bvycillm.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163wvcwthlr.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163iygzlbxn.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163rjefbucy.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163izzofuui.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163rtdlhosp.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163dycjixaw.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163xtuqajdt.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163yvrheevw.html

println("Hello")
来源：http://www.sxryk.cn/163xtsycrfr.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163uwwnixpv.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163xhdwtnnn.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163lfkebhup.html

s"值: $b"
来源：http://www.sxryk.cn/163zexnegby.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163kozmivza.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163xsatoolq.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163xkjhzenm.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163yxsjypku.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163saqjukwd.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163piwzepky.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163xpughyvf.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163lrqkutwi.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163aixigifq.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163qjmobvid.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163cgxohbol.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163jcywrobt.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163klrisvjh.html


<!-- 参考信息 -->