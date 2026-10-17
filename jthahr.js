外链999!wailian999！

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163foswxwov.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163kksshsdu.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163xfignypv.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163rkeyogmf.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163qwkqgppx.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163moufdnzm.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163qfkzbigk.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163aatowsrb.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163nmktiazb.html

[R50] awk 求和
来源：http://www.sxryk.cn/163klxtdytv.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163qkrvrhjs.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163vftcjbny.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163yyzcrgjb.html

[R52] 统计行数
来源：http://www.sxryk.cn/163fsdldmsj.html

wc -l a.txt
来源：http://www.sxryk.cn/163lalhuoot.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163vhtxzjxc.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163zkaipkcp.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163anglkhkr.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163wosglghl.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163qlifbrdm.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163xtpjcqvk.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163tvjlxnxn.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163cvkjpnbj.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163taopqvph.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163gqgrlbqj.html

[R58] 下载文件
来源：http://www.sxryk.cn/163kskfvhll.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163oduqklox.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163touompqd.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163hpysmizo.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163xiczarhm.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163mxtwaona.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163gsumchde.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163kltjkort.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163tmdpbxng.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163lpvlqlxc.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163bhfqadpk.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163xeeaybwr.html

[R64] 结束进程
来源：http://www.xuanzx.com/163lcixvbfy.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163iozqgpox.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163exujavtm.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163mwrkoixt.html

[R66] 定时任务
来源：http://www.sxryk.cn/163szmpvqiu.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163ajhmlnvm.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163xbxkdorq.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163jvuosacf.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163ardhbpou.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163etnhrrga.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163ebubgwqp.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163qoyetkrt.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163ywkfjzmx.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163uoqxqbye.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163imygxohw.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163uwdctwih.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163wpeqgrcg.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163vwwrcybw.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163ajudobyo.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163mmfqfxon.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163yapnauib.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163rgfwpxba.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163gkhhqhkk.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163izepukox.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163sztxdlym.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163irsefhxw.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163ovkbozbl.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163ysyrfdju.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163tawbtoqk.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163efzixjmz.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163rhobbxai.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163naxftidf.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163enajtscs.html

time ./run.sh
来源：http://www.sxryk.cn/163ooxeyzag.html

================================================================================
来源：http://www.aibaodan.cn/163hechsxcb.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163dsvpqzgc.html

================================================================================
来源：http://www.xuanzx.com/163ufvalsno.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163otkzlhyd.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163sfrqieil.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163bkdblrtp.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163pxuthtwl.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163zmtacnlu.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163aodqkmtr.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163xtfeplic.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163rosagaqe.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163ljijzkqn.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163ufjanrad.html

strlen(s)
来源：http://www.xuanzx.com/163fekeulms.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163vonlbxoy.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163syjitgqp.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163mpeshhbx.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163oowhrkly.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163xrcgmvfd.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163fuafuqmk.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163zgowawyi.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163qcdwqgqe.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163grdjucqx.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163cjmpxede.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163yjrhkqiw.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163jkmfllnh.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163gclzycwe.html

fclose(f);
来源：http://www.sxryk.cn/163nxhbhrri.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163bnvxgjwp.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163qzfqvcsa.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163ovhgzkgn.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163avcyagkb.html

[S14] C：枚举
来源：http://www.xuanzx.com/163cvyihljb.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163oenqvqig.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163exgqfybt.html

(double) a / b
来源：http://www.xuanzx.com/163urftkemx.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163xjmpbdxb.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163evipvyjr.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163ckarjjtl.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163zdrybsak.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163laxxrecl.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163xebyuntj.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163srchvbzh.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163dlegektm.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163sidajlzb.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163qdewgoux.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163xoyqkcgt.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163decesbff.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163yyaiyput.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163ggdzmyor.html

[S23] C：随机数
来源：http://www.sxryk.cn/163dfodatso.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163gmzfxqod.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163ftnnkcpw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163xlssiyjm.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163vucljghl.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163ofmcnike.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163gdhbalcg.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163prfrllgi.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163pngyzrif.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163aqspsgkh.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163rhbnwzzf.html

static int counter = 0;
来源：http://www.aibaodan.cn/163pafwmhrb.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163hgubygsb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163lxnbotvp.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163nvisjqto.html

#ifndef X_H
来源：http://www.aibaodan.cn/163mkidxnit.html

#define X_H
来源：http://www.sxryk.cn/163mbazdkqa.html

#endif
来源：http://www.xuanzx.com/163mxvhddnd.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163tawypgcp.html

#include <iostream>
来源：http://www.xuanzx.com/163shmfzmep.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163xksferfo.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163asfeqpnm.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163fufsnrsn.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163xpjxlhgj.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163ufntiulo.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163rvmaavsg.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163kdoilfpg.html

[S35] C++：map
来源：http://www.aibaodan.cn/163irmljhbg.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163kbmyjplv.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163moidkakw.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163hemcfazh.html

[S37] C++：set
来源：http://www.sxryk.cn/163iyhuvxkd.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163krhfjpoz.html

[S38] C++：排序
来源：http://www.sxryk.cn/163cvcyfylu.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163wtycctkp.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163vrkeimtp.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163qpvkhluu.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163vfipruub.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163mkrrqjpn.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163sgzkhewu.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163blqdzciy.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163eueoepml.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163orhygbnq.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163ytsituse.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163pygbsknc.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163rngnwtnl.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163dryzcpdi.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163qpnjtugi.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163bubmyoty.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163zechcifr.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163mojpwqyy.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163npuzkeog.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163fhvyfgvu.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163hjluyukz.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163rcpsrbje.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163ayriuipg.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163ggyuxica.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163svkakevz.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163uneiyfda.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163aqohpvpk.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163hsccjtbd.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163ausezomr.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163vjooornu.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163adcnbdzs.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163vfahufoi.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163hqfrekbc.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163nkvrkdyf.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163lxtsztxn.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163hpolcfow.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163ijugjqst.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163cmcmjbtg.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163vcidpmrq.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163upotatdd.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163qktirxhs.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163tdtxfqne.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163dxxrrbei.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163udjmbwvy.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163mgghzcak.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163pergpmmj.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163jhmygzsi.html

================================================================================
来源：http://www.aibaodan.cn/163usgrjbws.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163tfhdolno.html

================================================================================
来源：http://www.sxryk.cn/163jpvmrjyf.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163rylkaeuq.html

println("Hello")
来源：http://www.sxryk.cn/163irsindnd.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163yzhemspk.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163njebtuaf.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163orcubkya.html

"值: $b"
来源：http://www.xuanzx.com/163ioluxybx.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163qhetiwhp.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163cvdrzhdg.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163pchwxtno.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163jmjjmdap.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163qstmnhrt.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163apydvmri.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163ounzgxmc.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163xbtymwpr.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163eqnqkghe.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163ezcctjoa.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163pnhhlcjq.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163vexdivkf.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163qhyizajd.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163liseezdk.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163ijnbqmay.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163jlfiveld.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163dfhwyepm.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163dmmeahcv.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163cnqlwtuk.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163ubizvwan.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163vuhavrcf.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163doaswxum.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163xuvnfkrb.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163peroppbc.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163snzbwhdu.html

print("Hello")
来源：http://www.sxryk.cn/163lfmbxkei.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163ldulqnmo.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163prbuqhxi.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163sjnemaba.html

"值: \(b)"
来源：http://www.xuanzx.com/163fllgqtta.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163xanzrsdr.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163smbancmm.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163ojtrclfc.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163btmrswzo.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163kjopezss.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163fdmedwdy.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163xcijuswv.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163rqcbpyak.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163loctdswy.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163imrucrzj.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163djejisnm.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163gcxiuuci.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163wnpfcbdc.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163hdndxryf.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163pumywcyx.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163cupcgbas.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163memqnuhm.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163rweebbim.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163afrvaepp.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163hzdjsige.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163ptqokcvb.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163ondmaymo.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163jgjnozjy.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163fzqgpjrs.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163qcgykcmb.html

print("Hello")
来源：http://www.xuanzx.com/163anepwjpx.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163oefjigve.html

local a = 1
来源：http://www.xuanzx.com/163jjluvvfd.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163wdwimuvp.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163cegjgwkb.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163bkzjkxjw.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163gosqnfae.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163didcgpjg.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163zggaejvd.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163xrnqtfjk.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163vetydbfp.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163quqwkmrl.html

"a" .. "b"
来源：http://www.aibaodan.cn/163wtkjbpsi.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163ahvlkfqy.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163gtazjvwf.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163iziwkquw.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163cqbgtpiq.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163wacdsphz.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163gzoehzll.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163jevnwykd.html

print "Hello\n";
来源：http://www.aibaodan.cn/163wooxerdd.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163rrtpiqpo.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163lickxjmt.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163ppbrakus.html

"值: $a"
来源：http://www.aibaodan.cn/163fvikobzj.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163apeaarhp.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163aewcouor.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163yijbulsv.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163mngnjmjq.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163edzesgdk.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163yknhvyuu.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163cgqhpvpz.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163gjcamgvy.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163hjwrjaku.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163kvgwddru.html


<!-- 参考信息 -->