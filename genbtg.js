外链999!wailian999！

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163ttfbeuca.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163gwhdzagx.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163qmonqzua.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163zyuonlvp.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163fttcuilp.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163grgxomly.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163xcrzxqos.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163petfdejg.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163hrghnrxx.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163tuhcbdqz.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163ctrbecjn.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163plmeepxv.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163wtkmqqii.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163bamjdpsn.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163wdlrimdo.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163bgmlmopb.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163adqsfgpq.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163berazagb.html

wc -l a.txt
来源：http://www.xuanzx.com/163huqjjrpo.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163vxoknapm.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163ypxiewla.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163yxkvvkfb.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163yfgknzvq.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163uzatpfrh.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163ktozcxnp.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163niraqwcs.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163pxskdczi.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163jixoukva.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163ksdqkecz.html

[R58] 下载文件
来源：http://www.sxryk.cn/163pdsruckx.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163fqkqowrt.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163qqkrqpjx.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163hfuuzzdj.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163kdbxiahm.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163mudvmnfd.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163gvzqygxh.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163khxfoiha.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163mbouueag.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163inbcthdm.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163yaezytux.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163myjkruvc.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163roywtmio.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163frokavjy.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163lnkcypkf.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163txhtpajb.html

[R66] 定时任务
来源：http://www.xuanzx.com/163rmjdiyie.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163gwhvgqio.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163yxmbadmz.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163lyvatzgp.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163iudxyzzc.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163fpnjmalt.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163iicxfegm.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163rieqhhfa.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163cxrqxsif.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163voqivbbf.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163ikqsovga.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163kqtzyuvf.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163rbrmvrot.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163jwscokga.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163yxxnomrz.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163ktareazp.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163gaeyivop.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163mxcwvnss.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163iozvldcj.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163nfyiylxq.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163semjztqp.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163sjrfzvgl.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163wsbtmypp.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163ibehorgt.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163hkyodbnt.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163hpvbggvg.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163aiygqryg.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163epfwrwea.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163cxhzhjgf.html

time ./run.sh
来源：http://www.sxryk.cn/163tlgoqxmf.html

================================================================================
来源：http://www.aibaodan.cn/163fkoqgrmt.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163hzgjqvop.html

================================================================================
来源：http://www.sxryk.cn/163wlabmnwv.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163yedxirlv.html

#include <stdio.h>
来源：http://www.sxryk.cn/163ljowxzbi.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163cqcsjgxo.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163gauiznbs.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163rigokkch.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163yjmtrbuo.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163pfznmnhi.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163phfjwtvt.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163tfqgbbpj.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163mpcjorpg.html

strlen(s)
来源：http://www.sxryk.cn/163nbuklqel.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163enhopfly.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163yltldahj.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163oadjqyhv.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163pdoimygt.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163gvrzfrpw.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163sufhulso.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163rbjfglox.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163tjpxotnu.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163lnbrrtyb.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163yvgizyhy.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163zqmrrxwf.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163ylvttcxz.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163tisfolwj.html

fclose(f);
来源：http://www.aibaodan.cn/163goshokjo.html

[S12] C：写文件
来源：http://www.xuanzx.com/163tztqvwlk.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163pleugvad.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163mmhipvcz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163bsmmmdhh.html

[S14] C：枚举
来源：http://www.sxryk.cn/163ikumslip.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163fysfshur.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163pkehhedu.html

(double) a / b
来源：http://www.aibaodan.cn/163dryryobc.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163ddvehzrc.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163gctkxkmt.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163ulqvqurn.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163ujwgbywb.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163yckuhxsf.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163qxiumevj.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163uxaikivn.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163cushyjhw.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163hvgwfadz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163fuquefkx.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163fhlwikgk.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163izrnkwze.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163vrnrovum.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163kqbimhpp.html

[S23] C：随机数
来源：http://www.xuanzx.com/163ilmwvoei.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163bgphyjvp.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163htxkrcpo.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163qhzezoyi.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163yymdxezz.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163dmutzlod.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163lsrtvqxc.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163xjtmvacl.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163qoxylccy.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163bsviczsh.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163uqugknhp.html

static int counter = 0;
来源：http://www.sxryk.cn/163efnozvlt.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163axjnrbet.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163ahujkent.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163nmytzhfb.html

#ifndef X_H
来源：http://www.sxryk.cn/163oikdevxi.html

#define X_H
来源：http://www.xuanzx.com/163uscdkfnn.html

#endif
来源：http://www.xuanzx.com/163kxdjxigu.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163hjawbprs.html

#include <iostream>
来源：http://www.sxryk.cn/163bbqokixd.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163ylrwswjc.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163afbcejyy.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163dtytlevy.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163qkbesqye.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163calhtgin.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163nddmtivd.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163vgrtohak.html

[S35] C++：map
来源：http://www.sxryk.cn/163nivexrqh.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163wjayqkuw.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163ppjugdtx.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163bqzyjoqv.html

[S37] C++：set
来源：http://www.xuanzx.com/163zqxnfrke.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163gjmhtmig.html

[S38] C++：排序
来源：http://www.xuanzx.com/163lnsddyne.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163emyqdhct.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163egfaimtb.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163cufqexnq.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163axqagcgy.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163ahzveofl.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163obpibxro.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163muyeoogm.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163xukexody.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163tgnqtrtq.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163vbcgyfyo.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163pznjlxuo.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163dgiaaauf.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163pppqmcsa.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163wkfzidml.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163ocfxildd.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163qbtppqay.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163cwvfnplz.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163xmipcsar.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163ffgmbpyg.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163tcegmrsm.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163onhoafye.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163ekldxscn.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163ytkkoxuo.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163hnmolrsn.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163fvdaonas.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163strgwrva.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163dmqboghj.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163udntfgrh.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163hptovgen.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163opomavhg.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163zjsbfrnd.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163eujidtkf.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163vwmzoorw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163sxmztqff.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163hagzhrki.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163qefngrhz.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163jlnpiwcb.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163wnmvunmi.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163fzrtxuve.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ferumvsk.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163cdnjpmrq.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163hrgbapvl.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163xabyoqky.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163oguwoajw.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163aehvhyae.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163tqnjfwvp.html

================================================================================
来源：http://www.sxryk.cn/163jqmdqoev.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163tnbjhjkf.html

================================================================================
来源：http://www.sxryk.cn/163akjoydzp.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163zubwgtoa.html

println("Hello")
来源：http://www.aibaodan.cn/163jxldyzvf.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163qkequyom.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163awycccdc.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163tnaatqym.html

"值: $b"
来源：http://www.sxryk.cn/163nxemrdox.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163umkkjoie.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163wnedfcfu.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163cxxxfjun.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163nyolbgzf.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163eyfaefhi.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163jjaktdpz.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163hhqatlhl.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163pjahczeq.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163bluoicyq.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163ajhujybg.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163dxwjbapv.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163dorlbusl.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163zwjtvjhw.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163bbhidpfa.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163prxwhydz.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163odfxcswx.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163idbrhhjc.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163huxlhhjf.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163uvsvjdls.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163cgpgusfv.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163hvrtnukr.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163vlbzflxp.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163obhbhyez.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163zposadxa.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163srcovarq.html

print("Hello")
来源：http://www.aibaodan.cn/163cvyregms.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163vrzuxuzy.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163yvvwydvr.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163nmokqlle.html

"值: \(b)"
来源：http://www.sxryk.cn/163sklvthzw.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163xggmjjut.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163syqylaty.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163wsntvyjq.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163tjgqqrrh.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163odkbedbc.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163yxrryrvv.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163pmvzucag.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163qmkbyxuz.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163qvkuaghw.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163nqyucsxf.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163iekflruu.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163kwyrlneh.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163bxoubmzl.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163xxotqfty.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163ddlicokq.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163spliyfgx.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163qylzqtxp.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163tvikaszc.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163burddmyn.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163jkeqvrng.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163pnlgcwag.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163jlmatumd.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163fkgumvdt.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163ezpmtnbj.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163noyyzcja.html

print("Hello")
来源：http://www.sxryk.cn/163retvsukj.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163yxmwvrhe.html

local a = 1
来源：http://www.aibaodan.cn/163depohjqb.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163vxbbrucf.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163qoaagoid.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163fkzepyay.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163cbhxlqxu.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163qsttmles.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163yoklfmoq.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163brfhufqw.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163zhlgjrqq.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163ixnpgfib.html

"a" .. "b"
来源：http://www.xuanzx.com/163qqhhxqjl.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163xburtsgv.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163nnvfocfp.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163afzepqey.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163tefbheta.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163irplfnle.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163gbgixtny.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163xgwbaljv.html

print "Hello\n";
来源：http://www.xuanzx.com/163kuzpmsth.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163jjhfvljb.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163gtvvjljo.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163wkffwslw.html

"值: $a"
来源：http://www.sxryk.cn/163tiabjttg.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163msvrtjcs.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163omsrdsym.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163xmtuiqhj.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163mpxgydka.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163cvsvzfzr.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163epnhepdj.html


<!-- 参考信息 -->