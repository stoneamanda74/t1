外链999!wailian999！

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163gilhouez.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163fgibqqvd.html

wc -l < a.txt
来源：http://www.xuanzx.com/163ocqxghka.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163bbaeileu.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163mfjwpzqu.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163axzwiybw.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163bdoptxoh.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163wjkcoalw.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163wjdbxzar.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163qywxioep.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163oautymks.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163ehorugnf.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163wjcoqzyh.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163hcbwxbjd.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163cjkedqdx.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163ffqtkvms.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163cetefulf.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163qjtmfjpw.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163yyfnkbdr.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163wtjycqlm.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163qbuhmkom.html

[R52] 统计行数
来源：http://www.xuanzx.com/163syjdfuhs.html

wc -l a.txt
来源：http://www.aibaodan.cn/163iikmntmd.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163hilnsymu.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163ipaewcyy.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163hxhfjejw.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163vttwohhu.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163zjnpaffl.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163lswbwpka.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163spmkmskz.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163uusvksdh.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163sdomjrxv.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163nerpywsb.html

[R58] 下载文件
来源：http://www.xuanzx.com/163sapvohpj.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163zexjrtli.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163qierojzx.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163uawaaimu.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163ipidtgjf.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163dkokpxwe.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163fnivailu.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163eznbksgh.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163mebwzhmh.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163zdpfwhel.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163sbmmzlxb.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163zzpptcyr.html

[R64] 结束进程
来源：http://www.sxryk.cn/163xpfvgtmr.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163fpbatlhj.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163krocxbuf.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163vgvsbibu.html

[R66] 定时任务
来源：http://www.xuanzx.com/163wtaemnrd.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163roxhexaj.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163szjydbuz.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163flcnnppa.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163hajzubur.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163vuwgjmqu.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163xckekbhn.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163lyzbwjtl.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163lbbanibr.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163uubzzvut.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163nddnuscg.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163hsovlygz.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163xrdwprcg.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163guzsgrsc.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163ktgrvyqe.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163fkipupfb.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163rmlqntjy.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163enmcjnwn.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163hkzpxwwn.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163yhpswrfu.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163odkfbabo.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163qlqwhmxd.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163nepwahny.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163rqflfjsb.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163mnhuaqek.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163ekmukkbt.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163lccotobx.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163slxetmsk.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163eelwvxjk.html

time ./run.sh
来源：http://www.xuanzx.com/163tdvgfbdc.html

================================================================================
来源：http://www.xuanzx.com/163rdyegzqy.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163cvtvihan.html

================================================================================
来源：http://www.aibaodan.cn/163dcpaopmr.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163fqwtqjtt.html

#include <stdio.h>
来源：http://www.xuanzx.com/163ybpluuve.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163dmqzimdp.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163wjktbdve.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163ddcbulbl.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163wlssyoxv.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163lmwshghb.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163gknqeaae.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163swwdroor.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163byarvlim.html

strlen(s)
来源：http://www.aibaodan.cn/163zsauyomo.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163xvzudukd.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163wtgebipl.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163jgwfdaay.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163jtnvbqhc.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163sazyfnqk.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163tfpsbyzl.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163zrlyyqxn.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163osevenul.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163zebnbkeg.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163uvpvwduj.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163mvnhyraz.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163iqqxagtt.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163hmyccgpa.html

fclose(f);
来源：http://www.xuanzx.com/163tlixqzvj.html

[S12] C：写文件
来源：http://www.xuanzx.com/163rgrrkruq.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163tslaicah.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163motueluc.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163fjekqqkq.html

[S14] C：枚举
来源：http://www.xuanzx.com/163twcoyzkz.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163ftojnnzs.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163qhtkjkwr.html

(double) a / b
来源：http://www.xuanzx.com/163ibiyfiyu.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163puincjpr.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163fecbglrw.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163dhucmast.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163quhsjmfr.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163twfxczjn.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163pgtkyozu.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163vznawlok.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163auaibedl.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163qixtzhlf.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163nexkcrnf.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163fgsbrlvn.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163uzsauxzz.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163ibsgsjrd.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163hzlpqfkz.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163xskjryfz.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163bzyeqzzi.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163bvsymqla.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163ubsbpjxm.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163bobrmhex.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163dhaaggkh.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163bxbaqlkp.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163rrjzfltr.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163otsnimuk.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163hjnxlbmh.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163zcghputh.html

static int counter = 0;
来源：http://www.aibaodan.cn/163xdgzvvuk.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163saqhxzns.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163orbqhdlj.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163sfgtnfhj.html

#ifndef X_H
来源：http://www.xuanzx.com/163nrwxhhap.html

#define X_H
来源：http://www.aibaodan.cn/163ksecfcao.html

#endif
来源：http://www.xuanzx.com/163wdecmgcp.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163uxuqdvww.html

#include <iostream>
来源：http://www.aibaodan.cn/163wlspglxd.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163tihvwhyb.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163wxiraaut.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163xwbeihag.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163aowbcebo.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163owspyxnz.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163ujhmvlcc.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163xvvpjskg.html

[S35] C++：map
来源：http://www.aibaodan.cn/163ktpizggn.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163vflijlyd.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163tgtixqqt.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163mtxuxwnj.html

[S37] C++：set
来源：http://www.aibaodan.cn/163ornoxket.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163octxwxyn.html

[S38] C++：排序
来源：http://www.xuanzx.com/163vguypmka.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163nituzfkd.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163onqxprmu.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163bdgoiorh.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163wpijjhiv.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163qrmtcuim.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163bflsgzhe.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163wtfngqtn.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163oqdpxroj.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163gdtepavp.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163qgufchic.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163tlrmluum.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163tdbikzpo.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163wchthuzm.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163ozuucjvg.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163fcipguuo.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163tvsgcblx.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163rhovljtd.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163uajyqbut.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163crlyowce.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163jsjzbtis.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163mcnqoiga.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163zblbmvhc.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163gxezovuq.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163vibjnisc.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163tvvngalk.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163lgyhzzqr.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163ihimdiys.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163xtujnjyc.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163lntjpqzd.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163eojezvvv.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163gbzzzizd.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163txqhgmoh.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163jvqznvsv.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163bwohzdgn.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163fwqulljv.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163gbvdgkol.html

[S56] C++：optional
来源：http://www.xuanzx.com/163qsicyhaw.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ktdlsfhp.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163rvnalhdp.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163uirfghli.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163jplneela.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163draaiwwn.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163eqltvvdx.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163zpmgcpji.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163kztzggof.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163upbdnjdc.html

================================================================================
来源：http://www.xuanzx.com/163spifqqnu.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163wxbokiwi.html

================================================================================
来源：http://www.aibaodan.cn/163nqqtnpmy.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163wzuukwvh.html

println("Hello")
来源：http://www.sxryk.cn/163ksuimecp.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163vmfrqvsi.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163xknyvesd.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163jcdaagyb.html

"值: $b"
来源：http://www.sxryk.cn/163mcvoxluq.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163tpmaqfeo.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163bxngtfrx.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163hmvemygz.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163jpnpeqmw.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163qwgzvwac.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163mjowyght.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163vwmmruyk.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163xiwlwwdh.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163copdsxvl.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163cucqskhr.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163mejsnkut.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163ggjsaiyp.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163fzbnryuh.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163takvtnxp.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163qgmktarp.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163pammawvt.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163jcbjvctr.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163hkvogvtb.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163ntvvjjmq.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163spmeejjk.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163izrcaefe.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163icjbebss.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163fqpmgriy.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163apaccqri.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163jmzwhonv.html

print("Hello")
来源：http://www.aibaodan.cn/163syhdiigv.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163saqkmdvo.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163kgmvfpct.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163ewtmszak.html

"值: \(b)"
来源：http://www.xuanzx.com/163hcwztiuj.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163bqyvaoze.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163wjjmbidu.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163kptseite.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163vuisykxc.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163wxhaaqju.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163qugkivym.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163kaeygdxf.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163sdeywfny.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163fejnlwpq.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163jkgxpniv.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163senlxwqh.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163mxmqxtsd.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163lfgitxcn.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163fjrysoib.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163laphggpi.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163asybpzps.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163umwpamoo.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163kwzgpyfs.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163cixhwdxx.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163bqkbilss.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163ecehkfgv.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163mkkmnhzy.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163gjylxttd.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163tjzuzvay.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163ozxvyoey.html

print("Hello")
来源：http://www.sxryk.cn/163cetmmlnz.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163wxebvvnd.html

local a = 1
来源：http://www.xuanzx.com/163sjghzrxf.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163lirhsxbz.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163plsdcfxy.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163busyanjm.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163pejukore.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163ffzfjfay.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163gnyyhpde.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163stsdwyct.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163uwlozkpt.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163oywfqmhr.html

"a" .. "b"
来源：http://www.xuanzx.com/163gfnckorn.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163ittgjgpl.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163zhkjgvze.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163isnkizdc.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163lihwdhoc.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163ynpptjap.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163mirlsrbz.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163keldvigs.html

print "Hello\n";
来源：http://www.sxryk.cn/163jarevzgo.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163uqhefeli.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163eptexqib.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163jverzbqs.html

"值: $a"
来源：http://www.sxryk.cn/163huqvbkwp.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163xhwrahuc.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163kxpoheqx.html


<!-- 参考信息 -->