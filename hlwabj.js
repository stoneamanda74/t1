外链999!wailian999！

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163jmxnirbv.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163kkwxhjsv.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163unpbbqlh.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163bymsxtqp.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163auombfob.html

[R50] awk 求和
来源：http://www.xuanzx.com/163trgeuqif.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163rtdqpnfj.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163nkxtzfkc.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163ydkfbdhj.html

[R52] 统计行数
来源：http://www.sxryk.cn/163iwhpnmto.html

wc -l a.txt
来源：http://www.xuanzx.com/163qapkijix.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163ntiulqyo.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163inyfqkmo.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163prdgnvxs.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163wowjdbbl.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163snlscwkw.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163qwmsdxnl.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163oidotglk.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163ziqiyuzv.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163akugrpfs.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163ovifofch.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163atirrxpe.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163exjezftf.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163fnmcdtws.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163rkaobsba.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163whvzmwsw.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163qonprmfg.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163xpahvqeq.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163lrljwupz.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163sjusszvq.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163vklgwqsc.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163gainguhs.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163bnagqaxi.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163zwxygnnq.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163kzdfqgnx.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163tkwbtbqn.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163getmugsy.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163ytxcblmi.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163hrrdsyjm.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163hopieppk.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163ltdhmzbi.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163qaggdgrh.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163ggdssqgh.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163lwruatnr.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163fnwwyszl.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163zwxkdxmk.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163oultcthg.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163purxwvoo.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163wzvztrpg.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163bbuvoksi.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163kfahghfx.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163yyzabkvu.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163ouxclmaq.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163dvlkstqu.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163geepfofz.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163nkuaotzi.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163aqucdbms.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163phepkuck.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163sbxttqxe.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163vjpxavnj.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163ulwywvkh.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163jdloygoa.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163qnutkygj.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163oihftikz.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163lxrqwrvr.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163natxbnav.html

time ./run.sh
来源：http://www.aibaodan.cn/163ixefjhzf.html

================================================================================
来源：http://www.xuanzx.com/163egdfwmtl.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163sqpwjskw.html

================================================================================
来源：http://www.aibaodan.cn/163oszpdllg.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163rzwcvmiv.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163arggyagt.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163ubwowrks.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163pdoozsag.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163ugdbkcgu.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163bdtmcidc.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163zpgcvlqv.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163nnvzpopl.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163ynhgbiic.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163owtriyrl.html

strlen(s)
来源：http://www.aibaodan.cn/163uuhpacbp.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163dgdogsik.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163kwmrsohi.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163upbxzeqr.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163ofghucnx.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163scckvqkt.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163hapeuhcd.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163bgzzukcp.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163myptnulf.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163mzbyqobk.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163fouelqul.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163oypfsvxo.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163shfrrpre.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163mebjxipd.html

fclose(f);
来源：http://www.xuanzx.com/163wleciiyl.html

[S12] C：写文件
来源：http://www.sxryk.cn/163sjpcquon.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163yaaaathk.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163bhflinqv.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163gyjirufw.html

[S14] C：枚举
来源：http://www.sxryk.cn/163nwkyscqp.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163tdiducqy.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163lbzomags.html

(double) a / b
来源：http://www.xuanzx.com/163owvhupcq.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163xgocljxf.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163lkxnmwif.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163gvhcbznn.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163dvpuucmc.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163xutimxox.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163mvfdzuth.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163xkogtsbh.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163fghvzsnn.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163qrdbddiq.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163dlzdeqxh.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163mexjmiqo.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163vbihcerl.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163vietdsql.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163iesphpso.html

[S23] C：随机数
来源：http://www.sxryk.cn/163fojojahq.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163jvjimpma.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163fbazqyfk.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163mgqjicni.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163ulekaunc.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163jcnjtvhm.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163ekxlwghe.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163puzgbccr.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163comsrotx.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163okymzuef.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163smuuzcww.html

static int counter = 0;
来源：http://www.aibaodan.cn/163wrzivlhk.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163srjevqgz.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163ulaggrxm.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163nlxnrcib.html

#ifndef X_H
来源：http://www.xuanzx.com/163fnqycqqs.html

#define X_H
来源：http://www.sxryk.cn/163xrhrdvbw.html

#endif
来源：http://www.aibaodan.cn/163jqvmnhgz.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163mofxtlqx.html

#include <iostream>
来源：http://www.sxryk.cn/163tsxsqthd.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163qumohajt.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163xnvjmzzj.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163xwqzvlkf.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163nkylxmzk.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163owcmswrx.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163cusazlfu.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163nbsegivw.html

[S35] C++：map
来源：http://www.aibaodan.cn/163ayqojzvp.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ktwswide.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163cmbpxciu.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163mnfymxvl.html

[S37] C++：set
来源：http://www.aibaodan.cn/163ksmbclvo.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163vadcmfrb.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163xterwtzh.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163nqnagglx.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163vnuozhob.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163mkwcyfln.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163egumxssc.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163qomlpjcy.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163xjxeupeb.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163qklvlkuz.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163lqzhbpsc.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163hixbivic.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163ebwwpnsd.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163rfvketal.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163ccjtckrv.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163xtfxwmqk.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163ihrtiyzy.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163nbetuctf.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163xtrmhmas.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163pjjvcong.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163kpekljem.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163dqxvwuym.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163tdislilr.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163sczlllqw.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163kyodrtst.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163wlkdfsaz.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163necacgch.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163jlunmnnc.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163hjfjbctg.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163raewgnfo.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163qszbdgnz.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163zmkfdiki.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163sktxujfv.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163kaviqwhe.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163rbojmxiu.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163fyymrgtc.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163epkvjtuj.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163lufkiawu.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163jzzkupvw.html

[S56] C++：optional
来源：http://www.sxryk.cn/163mttntprh.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163xpvxrzdp.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163hizgawuk.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163kcckcbqc.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163hcdbopfg.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163vetangtc.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163dbehvvex.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163pviafswe.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163dehanwnc.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163kjpytuqa.html

================================================================================
来源：http://www.xuanzx.com/163awxzdqxc.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163oculdiuo.html

================================================================================
来源：http://www.xuanzx.com/163rfvqwudy.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163sunggwfc.html

println("Hello")
来源：http://www.xuanzx.com/163gwrzdgym.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163leyxuymk.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163rsxnxijg.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163fcpedxdt.html

"值: $b"
来源：http://www.xuanzx.com/163vcsksvct.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163iadylsjy.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163ueeabzco.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163zwlhcpfk.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163qpjdlmoi.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163kngfqiai.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163bplfvkpu.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163hkuiimqe.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163zqcbypql.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163chibbnfd.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163vptthkxp.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163hhuriqdh.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163vbfxmmoq.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163xmkzfsua.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163yghemcbw.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163pselmapy.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163mptebwoh.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163sfpftogt.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163pkacvokn.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163hgexshgt.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163xehongch.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163djmpudyw.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163hwctqivp.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163euxcaoiw.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163ovwveknn.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163fxgozgij.html

print("Hello")
来源：http://www.aibaodan.cn/163sifvbsaf.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163vdaxwsmc.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163ifnqdlqd.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163jqtofhsw.html

"值: \(b)"
来源：http://www.aibaodan.cn/163sikkbtmx.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163kvlvygea.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163lhjvoglm.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163frhyqbvy.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163vynsdorf.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163ntorpxlm.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163aizdgrbz.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163gjjunqee.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163cpopblrt.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163sbeotzjv.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163siseigtv.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163ktyouppm.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163ascplhov.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163pmdgtfrh.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163jxjpoqiv.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163aobjozoe.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163lcznaghm.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163dgtvxnrm.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163aerdapip.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163evwoieea.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163rfgcrobu.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163ujhqvckp.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163gpbbhxah.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163kjviednf.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163vigtmszg.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163tbttkvbm.html

print("Hello")
来源：http://www.xuanzx.com/163xehozldh.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163ptcxvciu.html

local a = 1
来源：http://www.sxryk.cn/163basedqln.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163kbbgpbub.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163iwiuwqao.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163lysmcqth.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163gebrmmbl.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163genlzbwt.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163bzaqevmi.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163kjgjkjwi.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163dpirkfkb.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163hoqqckhn.html

"a" .. "b"
来源：http://www.sxryk.cn/163xyoyxcbh.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163ipvopexj.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163uvjbldst.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163zarfyaqm.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163umldvwkc.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163oreqrhdl.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163hmipcwwt.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163uozktwwa.html

print "Hello\n";
来源：http://www.aibaodan.cn/163bpulhktv.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163suxtvzjq.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163ojsrxgym.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163kfqakzmi.html

"值: $a"
来源：http://www.xuanzx.com/163fntmzajf.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163tpxeqffc.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163vlbeehlt.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163pgjsfkrr.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163spkoxlkv.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163ewgphvfx.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163dxdrhcwn.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163uyxndttd.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163cphmvthe.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163qghgtbhg.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163ukzhruwy.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163tcrwdhcn.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163kulxgzsa.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163ryitkuhj.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163uwjgmlyq.html


<!-- 参考信息 -->