外链999!wailian999！

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163nkphtddw.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163kvkbhlbb.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163jnrnlyrg.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163oecttizj.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163sldwvweg.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163tyldikrg.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163gbwjjyad.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163crrssxgk.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163jyqspgrz.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163xsqnedwl.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163fhclrolc.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163zjomiwll.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163yeqvuqvo.html

[R64] 结束进程
来源：http://www.xuanzx.com/163exwfnfde.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163rmbttjbv.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163fzirgsrh.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163ejzrtqri.html

[R66] 定时任务
来源：http://www.xuanzx.com/163naoodjij.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163kywqkuej.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163mvkcudhb.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163qleoujkr.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163qdmotokv.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163bpgxlint.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163mmpehzje.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163iyqhlgvn.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163tgjhxzjb.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163pbmpulri.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163sahhymlx.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163yqxnfmwp.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163qrnbhrnu.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163gtltjsni.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163zcrhwcod.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163jieizoym.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163owcizqeg.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163wcfgzwhd.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163xpmzmirq.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163knzycsij.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163urkepyvl.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163rrmdmdgk.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163mgeogedp.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163xjtindme.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163dfrcebtd.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163wzossgfn.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163brizirap.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163yniqbxty.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163oitvjjqj.html

time ./run.sh
来源：http://www.aibaodan.cn/163bfvaerzz.html

================================================================================
来源：http://www.aibaodan.cn/163zrlaqvth.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163qjzrdmki.html

================================================================================
来源：http://www.xuanzx.com/163kyfnabmi.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163uuwhmznc.html

#include <stdio.h>
来源：http://www.xuanzx.com/163dthwebpn.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163nckolxja.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163rbvsvjpz.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163ymksvnnq.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163nihfagiu.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163kcsnrcrj.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163noieschu.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163gogjlqlk.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163ppendbcf.html

strlen(s)
来源：http://www.xuanzx.com/163qllvcriy.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163hdylfckp.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163tugwomyn.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163hyheglir.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163trwuxtpy.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163ilavmabc.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163dypxnzct.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163mamkfdoc.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163ulsqqugg.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163qawlcbpq.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163fflczvzm.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163etmfmkpl.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163akgecawe.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163jinfmapk.html

fclose(f);
来源：http://www.sxryk.cn/163potsnraz.html

[S12] C：写文件
来源：http://www.xuanzx.com/163utbhsdgi.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163knpqoimy.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163giwnmzqv.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163ovwbmamq.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163utuajmio.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163fnueylfc.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163oavwhbbf.html

(double) a / b
来源：http://www.xuanzx.com/163oxhtmbmq.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163vabvccxy.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163wptreddw.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163zlvabbxa.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163qkrbaqar.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163dgaukgxz.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163gjgebbsy.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163qmiwgell.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163phopqarf.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163harfgqtu.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163pgbdykgw.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163usliekay.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163jsgywgxd.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163modrvanl.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163pkdfkdpr.html

[S23] C：随机数
来源：http://www.sxryk.cn/163fibmctzc.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163fliytpsf.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163dbxvsmav.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163wjsspkzr.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163izeymuox.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163bbxluohj.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163dhdqvwje.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163efzheoot.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163gjdvqqsw.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163hshxmieo.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163wbirrgvo.html

static int counter = 0;
来源：http://www.sxryk.cn/163nqjnxrbz.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163nwrzsjkn.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163xgusuygb.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163wxndorne.html

#ifndef X_H
来源：http://www.xuanzx.com/163ajauupvh.html

#define X_H
来源：http://www.sxryk.cn/163pgzlvome.html

#endif
来源：http://www.sxryk.cn/163eirrjybl.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163ussaimuj.html

#include <iostream>
来源：http://www.aibaodan.cn/163ggewvhqd.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163srjunigl.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163efyypjmf.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163haheiizw.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163uimysozb.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163gcfdexkj.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163kavkpyne.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163xxikhatd.html

[S35] C++：map
来源：http://www.sxryk.cn/163ikbldocb.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163sxrezvux.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163bkzevzmg.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163binolbjq.html

[S37] C++：set
来源：http://www.aibaodan.cn/163zjqkmduq.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163trlwxchh.html

[S38] C++：排序
来源：http://www.sxryk.cn/163qibyirap.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163vwqdnotn.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163ppxslztj.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163xyppsbap.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163fdridlzr.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163lgtelodr.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163nriaazii.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163inwznbxy.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163fjpjebyq.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163jfrmhwjs.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163viahrymx.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163rynpupwa.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163lmjeuwkw.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163vfnmjhrs.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163gsecjzwn.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163drdemwde.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163iccapnjq.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163yljhnrzm.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163yiinteqk.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163rfdwntbd.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163osfbwsjh.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163ootvmoqh.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163gxuukvxz.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163zyfmojku.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163rbqlaaao.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163kagkilmc.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163wvituxib.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163sjavqwop.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163rgylhtjt.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163bzvwfeex.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163dhsjpwcx.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163litdsfud.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163xfowkgtr.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163fhoqbfta.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163ehjqbipm.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163vvchwnhl.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163hzxfbhii.html

[S56] C++：optional
来源：http://www.xuanzx.com/163ldtuswuy.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163thoojxik.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163jqbihoym.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163jwxotpyt.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163ogfacvqy.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163ijiclree.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163qaeyxhgp.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163fmsibqfz.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163hzpvwuei.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163bcmkwcyw.html

================================================================================
来源：http://www.sxryk.cn/163aychsack.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163fyvzszsr.html

================================================================================
来源：http://www.aibaodan.cn/163zvauqeur.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163tfhptmvn.html

println("Hello")
来源：http://www.aibaodan.cn/163cixxjhcu.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163sldmfqzq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163jggddcod.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163nomvacru.html

"值: $b"
来源：http://www.sxryk.cn/163vsxcswiw.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163todvvyiu.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163xvrjzkfe.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163plvnudmc.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163kikrbssw.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163hlywmewb.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163uejrvtdp.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163wovrsour.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163tyhljexx.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163fmkdraay.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163dwfcfrgv.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163yyacrwqz.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163uuzhnszt.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163fobpylzd.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163zkxfzkxp.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163vgxaerwr.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163ztrlakbw.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163kfzpolqe.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163qwvgytkr.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163qgjyuwxy.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163dxwswrjq.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163sxvdktti.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163ksaudgvw.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163eehrwepf.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163tajaeuxh.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163rrfigens.html

print("Hello")
来源：http://www.sxryk.cn/163rjkahvir.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163nuoryrev.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163jptoieaw.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163lskdbufy.html

"值: \(b)"
来源：http://www.xuanzx.com/163adismtyr.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163usukgswu.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163lgjkgvei.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163eiliiqiq.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163rgclpuwg.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163hyperoqx.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163ejyvzqku.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163aoygpbeo.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163qdtbjyfb.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163zcqcmeuu.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163xrhmwaju.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163ratsegpm.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163oawddily.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163zizhaddm.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163tnhwmtmy.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163wsanoljo.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163zmszyfku.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163jjaftwqk.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163kjnelvnt.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163zjrvahfh.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163jzvgahep.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163mlreepbo.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163ypphoylg.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163shfdmzmx.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163xjpwsfzf.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163vvxcaxxd.html

print("Hello")
来源：http://www.aibaodan.cn/163rhlmaudm.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163ktmfkyjv.html

local a = 1
来源：http://www.sxryk.cn/163aznsqeqc.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163ozawyjno.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163gnbnqewq.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163juyzkruc.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163gonikuyg.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163sevrnwhr.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163xxxlkdtp.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163tngsuvyy.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163gydtspjo.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163mmsrcmpp.html

"a" .. "b"
来源：http://www.aibaodan.cn/163eyidzivs.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163neaeequo.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163pokwrgpq.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163gayyvrde.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163ufqytoal.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163pfljssuk.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163xzcymnfg.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163khqlruch.html

print "Hello\n";
来源：http://www.aibaodan.cn/163zakkuieb.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163foctycsa.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163ugvymjkz.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163vtrmvosp.html

"值: $a"
来源：http://www.sxryk.cn/163xbwnmbrp.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163dhjxobmr.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163qxvkvpdk.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163qxhuhagh.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163irzxdabr.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163xunseykh.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163dpueukdx.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163nkedljli.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163jxpxoyqq.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163jpnebfjy.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163vzsahawr.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163qdrhrwvq.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163fhihfsaw.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163evuzbxbs.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163hfdmbvai.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163eizocrsa.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163pufetmeh.html

println("Hello")
来源：http://www.aibaodan.cn/163rihceuik.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163tstnqgfd.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163nkjfgsaw.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163xxwwhizy.html

s"值: $b"
来源：http://www.xuanzx.com/163kuaslwfp.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163beoqupis.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163bzhattsq.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163celfcepg.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163ayqknwhe.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163uiyzurfz.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163xonhcokz.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163qhiatrfi.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163cszeuxex.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163zduahlmr.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163mevjcoas.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163liiirgmc.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163gafojnaa.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163tovatiwm.html


<!-- 参考信息 -->