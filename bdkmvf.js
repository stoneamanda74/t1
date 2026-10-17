外链999!wailian999！

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163linyefhj.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163roejodzi.html

wc -l a.txt
来源：http://www.sxryk.cn/163trrpyvhm.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163xuyhjxls.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163rfczizcw.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163nqtzmunf.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163qftarjto.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163tavshsvi.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163zyakechu.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163musmlbkd.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163meucnmho.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163jghukyrj.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163mwqczmov.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163cuzmfgav.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163nklueknh.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163hzsoqfje.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163fnjkygwf.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163zjipqfke.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163unpwsnab.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163wzasdxmk.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163oikvebhy.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163ymwtfrkm.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163pvupbikf.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163mxfewzye.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163qczpqhye.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163tgktpnzo.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163feisqqjm.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163ykudwvyg.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163wgvprmgk.html

[R66] 定时任务
来源：http://www.xuanzx.com/163hvxynzih.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163gwpuamjw.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163qymuxegm.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163ztyjpxof.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163msilfmak.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163qwsnjodw.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163ejgzlvbl.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163nuaikhei.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163tsgyalsc.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163iywlfkeo.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163jitpctce.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163vrkurjbz.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163msfyqznk.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163fibpnrwg.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163czednsxn.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163qbbjyjoy.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163myjjjwob.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163teyunaal.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163asuhwxsm.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163eqkioctr.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163bdbxqehg.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163gdywtwgw.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163lwtjdlcj.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163yehasbzu.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163tvsujlqk.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163qahyvvzv.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163yebueiuj.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163hstnyune.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163roljewlj.html

time ./run.sh
来源：http://www.xuanzx.com/163ilixusye.html

================================================================================
来源：http://www.xuanzx.com/163jiyvztmg.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163wwzlnecw.html

================================================================================
来源：http://www.sxryk.cn/163ussafgxn.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163aniruwoe.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163zcipahon.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163msecvqft.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163jtwylbak.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163dvhexlei.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163amsvqgcr.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163odiblwcp.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163vmofjtnv.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163kchjqssg.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163fnwgnnpm.html

strlen(s)
来源：http://www.aibaodan.cn/163xmfcjbvm.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163bqicxcho.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163fjesqdze.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163vklpxjsm.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163eclhjlvj.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163vhaxwwzc.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163mhwteuxj.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163dfywqnsf.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163cvywvttc.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163hfdocycg.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163baqivkdj.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163yhtpidtr.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163bwvyndvz.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163bclqwqdz.html

fclose(f);
来源：http://www.sxryk.cn/163epctelna.html

[S12] C：写文件
来源：http://www.xuanzx.com/163noxikhnt.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163hbcbyojm.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163tsvszywt.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163rwvvwxgg.html

[S14] C：枚举
来源：http://www.xuanzx.com/163uibpfsve.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163fboedhdr.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163zduozkur.html

(double) a / b
来源：http://www.sxryk.cn/163cyytpdhd.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163mzipajyx.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163hzpdfmdp.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163ptswozji.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163dudlgoex.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163khybnllc.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163osltuefk.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163svdqtpvw.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163jouxfuvu.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163xxdfwkgg.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163dbemlbdm.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163uhsrbsrq.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163slrkgzhn.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163gpoalsmi.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163xnwltqmh.html

[S23] C：随机数
来源：http://www.sxryk.cn/163ybaefuoy.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163mvvdbyez.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163belgmwhw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163cgyuehny.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163gzmrnhrf.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163onbymdku.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163tvufgmqy.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163xwaaxuzi.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163hnpcsdyy.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163lsrfzdnp.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163aipuqtnk.html

static int counter = 0;
来源：http://www.aibaodan.cn/163eoruvzbh.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163umgugszm.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163qqwxptfk.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163pcxlkatj.html

#ifndef X_H
来源：http://www.sxryk.cn/163fghhpcqe.html

#define X_H
来源：http://www.xuanzx.com/163llhmswhu.html

#endif
来源：http://www.xuanzx.com/163vhfgtwlz.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163oapntwrn.html

#include <iostream>
来源：http://www.aibaodan.cn/163jddaomri.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163lpxdjanx.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163thhnawkh.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163tgrjlgbg.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163jrpofthz.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163wthwqjge.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163ktffrbvm.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163bmfvaxft.html

[S35] C++：map
来源：http://www.sxryk.cn/163kqtypqur.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163uyyhzjeg.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163eabkkbrr.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163szbmhngz.html

[S37] C++：set
来源：http://www.xuanzx.com/163acfkucri.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163wuplmhpa.html

[S38] C++：排序
来源：http://www.sxryk.cn/163ffjrqdfj.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163ojyydjqx.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163ureqjtgw.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163thewxsgx.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163ialneeco.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163shusywdk.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163rlexjrjx.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163oazbkxbr.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163nbbkurzy.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163hgajxkyd.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163wfcniico.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163bqrgcfza.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163duennqyr.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163sgfdyfml.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163lsxjvocy.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163muwvemhy.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163ulsilrhd.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163uvdvvzso.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163fnvrrogi.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163hhbspaur.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163ycwvnfil.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163occjnieq.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163mzewuqws.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163yhpjjftj.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163ylfwzygr.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163czbrgnmm.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163tceiqlep.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163qflebhza.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163xegkbhtt.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163gdfnprpg.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163gfbxldfo.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163qjqmxiew.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163ofzyufky.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163fahxjsej.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163tdyqfsdj.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163fslyodhx.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163sbckivqe.html

[S56] C++：optional
来源：http://www.xuanzx.com/163xsdmrppl.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163ejfbkbwv.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163mbnclxlu.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163yajgrleo.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163pnxtafix.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163woioouoa.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163pgqpprnl.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163yfvqqhuh.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163eozfyxyh.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163lonoiqbi.html

================================================================================
来源：http://www.xuanzx.com/163yxzikdql.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163talxhyvg.html

================================================================================
来源：http://www.xuanzx.com/163hozignog.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163ppppsarl.html

println("Hello")
来源：http://www.aibaodan.cn/163ryujrxac.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163pkfxcode.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163jigtclbl.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163riyxlfme.html

"值: $b"
来源：http://www.aibaodan.cn/163ezxvywdi.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163jcnahqey.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163mkopdqit.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163sypauscw.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163uuumelpw.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163ygrqkfsk.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163hoawfean.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163sobkqtxu.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163shjfsvjg.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163ewhksoxm.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163xpgyyfkh.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163wavjwues.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163rreylzqi.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163yugbiueu.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163quijwsor.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163tsykuzyw.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163fqnpkeew.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163glfvqsti.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163ndkyhugu.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163pmusbjqf.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163yzjvncod.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163jazbvzyu.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163oavvohud.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163ldznbgpx.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163fhnpqegv.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163zsdzfqzx.html

print("Hello")
来源：http://www.aibaodan.cn/163kdhprslw.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163aqovhrhx.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163kbqhnwsa.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163ekdroesn.html

"值: \(b)"
来源：http://www.xuanzx.com/163ebrwzgfo.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163pefyqccr.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163madfwkjo.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163xzswgmla.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163gdsnsgfj.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163ysqjachd.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163xbeenisu.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163jppaadkk.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163gepmpgka.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163geadtjec.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163aqxwceem.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163ksisvubg.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163nnfmrfeo.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163bgaxfbeh.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163cjtzkfda.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163ttaedonc.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163lypbvkow.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163fccydika.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163wujmpkxs.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163laxrhkxk.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163jobmfzsh.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163egaojaxj.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163xnwsdihv.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163mptjbwzo.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163dzuyqduo.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163qshviynm.html

print("Hello")
来源：http://www.sxryk.cn/163calaxxfx.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163ogqgyqql.html

local a = 1
来源：http://www.aibaodan.cn/163kzsgwnxr.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163civjmyyp.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163wswalolz.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163aoocsovk.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163kkszcnjc.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163cwktwufm.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163gugzlyyk.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163tjefsqdo.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163xgdnddna.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163mxxeaxpe.html

"a" .. "b"
来源：http://www.xuanzx.com/163vtrfcwke.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163uxlfxrtz.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163xlociluk.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163vygfqcbk.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163hbehunxy.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163kypstwlp.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163edgpdrjm.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163jvgdfhaf.html

print "Hello\n";
来源：http://www.xuanzx.com/163wmqvgbga.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163qqvlvglo.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163dvlehfgo.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163cpclxosq.html

"值: $a"
来源：http://www.xuanzx.com/163gjzotttc.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163lmvwqmfq.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163wasagrzb.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163woodmvmn.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163tfzwavvg.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163qgizxprr.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163qgxspfvg.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163fkqenxsw.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163nnjcrqke.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163vjnvfkqy.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163ujahfepb.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163xavywysq.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163fzvpfahx.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163oyyypdox.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163zsxmvxgf.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163kofyndqc.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163edibtbqt.html

println("Hello")
来源：http://www.aibaodan.cn/163ybxsytnu.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163jkbcrihy.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163fuxbawsm.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163dldudrfv.html

s"值: $b"
来源：http://www.aibaodan.cn/163nkothcrd.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163xfjquwrl.html


<!-- 参考信息 -->