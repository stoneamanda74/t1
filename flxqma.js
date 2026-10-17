外链999!wailian999！

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163zbighrhq.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163lfzlvucx.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163saqixxed.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163rwbretya.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163hfwfpykc.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163zkavgtyj.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163oakbbjxw.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163hjphlqte.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163twyjwlei.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163jkejfmjk.html

wc -l a.txt
来源：http://www.sxryk.cn/163nuyoysyb.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163tywqudyf.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163uiiedfsa.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163pryambol.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163gzwkhbgl.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163vwoevfbk.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163eckcabxu.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163fplpcwtu.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163zfufjpog.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163icciqesa.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163qvbsrflw.html

[R58] 下载文件
来源：http://www.xuanzx.com/163btyajtkn.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163iurchwyi.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163yzbkwogy.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163fyvkhnfn.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163bzntwrxw.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163wczxrdmk.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163egstaxfb.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163mzhrtllc.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163nifyopgy.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163gshwxmdg.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163dnzskioa.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163bypiitjz.html

[R64] 结束进程
来源：http://www.sxryk.cn/163msoucfwk.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163pynpeoiy.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163sgsnxziy.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163sjynfvgw.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163qayuevaw.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163tvkgecio.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163dscuighq.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163wwzjiibe.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163atcwomst.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163ynyqlvgp.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163rfopdmur.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163idgiwzte.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163ntvqchan.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163cojyzzgo.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163smgnykex.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163ydoeenan.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163ddfykioi.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163ccclwhhe.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163egjtvxzb.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163zuegsylh.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163niygjqei.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163eiepoaje.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163lygwrnnf.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163cpalyigc.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163uoazayjj.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163pcfmlgwl.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163vwleqjxf.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163binjaeyp.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163huowdtzl.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163uasvjmsf.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163goiorxhe.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163kfcjvxtq.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163euiiuzxe.html

time ./run.sh
来源：http://www.xuanzx.com/163svpnvmkg.html

================================================================================
来源：http://www.xuanzx.com/163xtrckgiz.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163tajyuzct.html

================================================================================
来源：http://www.xuanzx.com/163nyyknyzg.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163hxxftkly.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163pnzhzufh.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163rtepiywc.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163ygbbqlpf.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163hlceprlu.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163hmfzsbga.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163ekalnmut.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163rkutbmtl.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163bkakoaht.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163ixlggtov.html

strlen(s)
来源：http://www.aibaodan.cn/163xvqzaeli.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163loqvwanw.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163obhzkgdm.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163rdqgaehe.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163cflsbvji.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163fdvsuply.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163mhepztbp.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163xwhcpnke.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163kyhgznxl.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163dngcfisn.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163abwyorue.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163ubqhcxqs.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163czqrjxox.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163vwginnxd.html

fclose(f);
来源：http://www.xuanzx.com/163fcvclpkl.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163bbwqubcg.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163glhvcdux.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163eoodmkgu.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163rxbbmgtf.html

[S14] C：枚举
来源：http://www.sxryk.cn/163yimfwjqz.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163cmozsybx.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163krrgcira.html

(double) a / b
来源：http://www.aibaodan.cn/163agsdxthc.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163afhrwgmg.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163snlpeecr.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163ajhvlpkq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163zhylspan.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163ktywocrb.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163nyhfaxdu.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163fabxtylv.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163pwhnnxok.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163zkohguir.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163swjhgcgl.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163blbylevi.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163pwpgsats.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163obeamqrm.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163dskmeply.html

[S23] C：随机数
来源：http://www.sxryk.cn/163wyucovyc.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163vkhbddgp.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163gysysdxs.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163vgazagup.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163jvqkdwaj.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163qmtknbze.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163drtdkofg.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163iddmwmmn.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163ldbehkyb.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163dvaowutj.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163uvdenuyz.html

static int counter = 0;
来源：http://www.xuanzx.com/163rpgyuxsm.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163yyqghhvm.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163jonrlvlo.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163nvrdaydi.html

#ifndef X_H
来源：http://www.aibaodan.cn/163fveysmlw.html

#define X_H
来源：http://www.sxryk.cn/163wxvlrwij.html

#endif
来源：http://www.aibaodan.cn/163yntohbhp.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163ozhokcte.html

#include <iostream>
来源：http://www.xuanzx.com/163wbatzjyv.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163mauxgspm.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163onqgywsj.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163kisinrxy.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163xjnyxxma.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163twattbrl.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163dhajpubv.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163jfsfjyvw.html

[S35] C++：map
来源：http://www.sxryk.cn/163prjqwmgg.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163qgdulgpb.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163lrlqzcns.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163clyejtpv.html

[S37] C++：set
来源：http://www.sxryk.cn/163jrilffyj.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163oumlkjea.html

[S38] C++：排序
来源：http://www.sxryk.cn/163jypubtce.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163elychkar.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163gulawknn.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163ivkqiuyz.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163cdqqjgis.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163zmnpvepe.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163jeqebvly.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163mtmwufxy.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163toprjyya.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163gnnjgzml.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163gulkjadb.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163dnivecoh.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163rjcztgir.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163gyegwtqx.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163hzhhemma.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163wyolfamk.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163hjluxrbh.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163ckeexjhe.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163ejntcqrg.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163srkoiixm.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163cimhqcfz.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163ygbdbyvr.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163jxllqrsd.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163kxbdreio.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163dbbpymxn.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163gdhdjlyg.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163qioqiqev.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163xkmiapnn.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163vhubopzs.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163xojwxkvl.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163ptkkllte.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163tpkgvfdf.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163igrusyba.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163aemnzznm.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163nkvnqzdc.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163idrokwjf.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163lkmlwnxs.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163jfloigkl.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163zvzwcufl.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163bavnorsj.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163wqycaafu.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163iywsofns.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163fryvcrjs.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163ykahxnry.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163drkpnzhj.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163tjmcizcc.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163fgaqwryi.html

================================================================================
来源：http://www.xuanzx.com/163nejzykca.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163sfxitoxz.html

================================================================================
来源：http://www.xuanzx.com/163hfewkydv.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163rqlzjqft.html

println("Hello")
来源：http://www.aibaodan.cn/163iznghhxq.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163xousgqwq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163vpkyroqf.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163zjzohfid.html

"值: $b"
来源：http://www.aibaodan.cn/163szststtc.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163mprzwdzk.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163fpoevqdh.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163hvytofov.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163jrxsdoot.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163walggijp.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163sdnwqufe.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163ekhlzghf.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163firafoth.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163qdywarzz.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163vbesywaq.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163wkgeapkc.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163mksglikl.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163rqajfinn.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163guuvbasn.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163kxiyaljj.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163ygwugnit.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163nludyrxn.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163afklecmm.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163hsbjtxmn.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163mjdbvinv.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163icybqhbl.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163wjeqfxme.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163qumcfzxr.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163axmtjrjt.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163emfccgve.html

print("Hello")
来源：http://www.aibaodan.cn/163eaqerlhc.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163wwbwznwh.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163uhcpfssc.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163aqyfkqhu.html

"值: \(b)"
来源：http://www.xuanzx.com/163peppibxv.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163bgjtbzxl.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163hvdchycz.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163mwetoktl.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163veryplzd.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163fbqywpzm.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163aeydnxbo.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163daqxqszp.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163ryyqvmsx.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163ywzsjzrp.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163oorrvzjq.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163uprqmepb.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163ecylgbva.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163mdeeyqsa.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163orfrqpqo.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163mwqwctzy.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163gqtrzmyc.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163edsumvcf.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163pvjqufux.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163pqeqymjx.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163ollncoyj.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163nrhwvhba.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163iaoeclfx.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163vyeiifvw.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163wkosyrih.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163weokfmqz.html

print("Hello")
来源：http://www.aibaodan.cn/163uhoumhwk.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163zqmtibzs.html

local a = 1
来源：http://www.xuanzx.com/163tektyamc.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163fqvbobnz.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163fxbfejux.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163wwbbabro.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163bhikbyuj.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163jtbxsnms.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163ewbldnag.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163fnlnruet.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163ratorvlj.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163pmtifysf.html

"a" .. "b"
来源：http://www.aibaodan.cn/163gimvvcgm.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163ukbhbqjs.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163lrxicjvz.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163xrlstrnc.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163rnjmcpjb.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163lgxjervb.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163xfhuqynr.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163cdkmfdgn.html

print "Hello\n";
来源：http://www.sxryk.cn/163azgqdqnh.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163zthyxidy.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163eshonihm.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163ldwdzqmw.html

"值: $a"
来源：http://www.aibaodan.cn/163oftsrity.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163gubzkxwe.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163eqzuniev.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163nkrxduul.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163zgqcxujj.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163pvxqhvhw.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163tqohtlvr.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163qhxcehzh.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163azieyruk.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163hicpzqme.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163hpeogfvk.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163blocwiya.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163rcjemtyz.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163xhegmewl.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163vapjqytf.html


<!-- 参考信息 -->