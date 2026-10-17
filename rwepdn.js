外链999!wailian999！

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163kwovjowt.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163ghykyrwi.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163ihgeoggm.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163pskjkjli.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163dmiqdyjw.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163mwndktla.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163hdaouxeq.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163ymclysyx.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163lyprlaon.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163uxwwsnoy.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163ihhaprkx.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163qsewfscg.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163nueacqbx.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163lhstbxvp.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163maaxtgbo.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163fzqixgke.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163ngoyexjq.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163szrptvto.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163apuljsqe.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163cjptscbp.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163qvkqkboc.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163zlvmmbqc.html

wc -l < a.txt
来源：http://www.sxryk.cn/163munyuvtj.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163vasvyilj.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163zmvjpini.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163vuufwgbx.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163ugrcuohr.html

[R45] 批量删除
来源：http://www.sxryk.cn/163cunlalzx.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163obdffjco.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163sapkgttd.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163crtnfveq.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163hqjzkfzo.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163wzamwlln.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163nzdkuarj.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163fqqykvao.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163rrfaqyal.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163jmbujiuh.html

[R50] awk 求和
来源：http://www.xuanzx.com/163dewsljvj.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163fzwkfswb.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163oqfcdtze.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163siqgyoyx.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163raubvebv.html

wc -l a.txt
来源：http://www.xuanzx.com/163zrxewwnk.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163glqpilyb.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163pqkvdjew.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163albarjyy.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163cwqviqac.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163wdurbtiq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163kbevguac.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163qmfjsnmi.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163xuzkrxze.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163ylnebppk.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163gywilvpj.html

[R58] 下载文件
来源：http://www.xuanzx.com/163xpmskrnj.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163gfqylfug.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163ohdxezxg.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163yvgrxfak.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163rkvtqkec.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163lqpbsmur.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163xsgdxlsb.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163celmulyj.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163irmqjvan.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163cyakmtld.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163qpohayvv.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163bnfkzrmx.html

[R64] 结束进程
来源：http://www.xuanzx.com/163ewrtfpjd.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163gcvgsdtv.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163lkcaonsn.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163lnzsihzt.html

[R66] 定时任务
来源：http://www.xuanzx.com/163eueieqwy.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163kqplwopq.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163iqywhpfv.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163csmbdenw.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163chansrvf.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163mmaorrre.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163hjiullmt.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163wxwhbehl.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163cjfhnmjj.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163culuvtmv.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163rsycswrd.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163flgkwtaj.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163fcjujdsa.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163bvueeion.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163mpleeoxt.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163sujapjuw.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163geqhmxtr.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163qirvqgnn.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163fsceltff.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163kphxfqqn.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163zjawqmvw.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163sfjkkyzo.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163nusuuege.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163gaabnfui.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163qnuxeood.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163gnkutwlo.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163iarpxuif.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163kttqfhnh.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163lcjtnotu.html

time ./run.sh
来源：http://www.sxryk.cn/163cbnknftz.html

================================================================================
来源：http://www.xuanzx.com/163cexayrxz.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163vhfltijn.html

================================================================================
来源：http://www.aibaodan.cn/163kqvottba.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163tpryqtih.html

#include <stdio.h>
来源：http://www.xuanzx.com/163icpftbiy.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163krgikkci.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163mpinzuuj.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163zeaszjjg.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163zhwedmle.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163stchyghi.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163hgkpgokv.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163ueuftsxh.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163ntotqucl.html

strlen(s)
来源：http://www.aibaodan.cn/163iguwzbxa.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163fkcxqofp.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163afpcijqc.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163wbymtour.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163xhgebpny.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163zsxxtmgq.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163steurwjg.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163hakieqcc.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163kdbygneq.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163buhaypht.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163hrbvwquk.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163wloraysq.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163lpoeqmdi.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163tbndfssv.html

fclose(f);
来源：http://www.aibaodan.cn/163tpibuoee.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163gvxbsgrk.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163oziaalgp.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163gmnqtpuz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163fuselmav.html

[S14] C：枚举
来源：http://www.sxryk.cn/163oxobynyh.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163hfgwyfcx.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163hfovaosz.html

(double) a / b
来源：http://www.xuanzx.com/163sgnwnrbd.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163hcaowrlz.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163bnbckuuv.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163eogjktkq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163jlgwwinq.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163uhqhunul.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163vonhgvrf.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163dyorrhrn.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163wmibyokb.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163qqzrngyw.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163jxdycoqp.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163yvianfjc.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163seicqdpj.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163gntrilfq.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163texdqgbu.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163lbfxcpzj.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163kkhxvyzi.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163tkcgbhin.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163cpjogwxp.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163ghkmjsha.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163zhzwzcgr.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163fuoawsri.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163dskgutbh.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163vbxjggky.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163kmsanvse.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163ihpvuhma.html

static int counter = 0;
来源：http://www.sxryk.cn/163sqlzpftr.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163ezddckuv.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163muaamshq.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163vpqekttj.html

#ifndef X_H
来源：http://www.xuanzx.com/163yututxkv.html

#define X_H
来源：http://www.aibaodan.cn/163sutplqsb.html

#endif
来源：http://www.xuanzx.com/163yhunnrxd.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163ltvlisvw.html

#include <iostream>
来源：http://www.aibaodan.cn/163vkwqefwi.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163iitdlchu.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163kbmciqbv.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163taosqesv.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163hdkvpppk.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163sxokchqr.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163bpevpssm.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163yuuavkyz.html

[S35] C++：map
来源：http://www.sxryk.cn/163ikkrfbbb.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ztsrfosc.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163jibgqjki.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163cfqpvftk.html

[S37] C++：set
来源：http://www.aibaodan.cn/163oskopzey.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163pevxpwjs.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163sgvpsfzu.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163tctvkfwp.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163ruuyipqr.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163gelfpnpi.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163unkpspwd.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163tckpvisz.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163eloelwur.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163vlgivzfm.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163detxrvre.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163bexqxila.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163bmsmzxjw.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163qsjzuqss.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163fertsqur.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163nfjxyxjx.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163tyiqoddd.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163ummrrzcs.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163gkuwhcbj.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163hqsslepx.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163kesawrpl.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163frtpccoj.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163vcwbonct.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163hwphaaof.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163nsvnstvb.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163czkwyyvn.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163xbbxarls.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163mdwqnwck.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163lowvgphe.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163qgunydgp.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163qmmpsbpd.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163rcmxspjg.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163bopblrgw.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163sughncsa.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163feffojuv.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163cebyaqlz.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163lqqyxkll.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163zqllrpah.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163wzbhbrhu.html

[S56] C++：optional
来源：http://www.xuanzx.com/163xmjcidwr.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163zinpmwur.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163mhfknvja.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163hlnzyxvw.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163umadaghs.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163aztbboqe.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163fnbwwmvb.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163bywyyekb.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163oibbgyjk.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163gkxfloct.html

================================================================================
来源：http://www.sxryk.cn/163enwwyavn.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163miyhsctg.html

================================================================================
来源：http://www.xuanzx.com/163mjqbwunj.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163stxskmpx.html

println("Hello")
来源：http://www.sxryk.cn/163yxqrsrlx.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163gehveest.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163mfqwzdrl.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163tkgatqpy.html

"值: $b"
来源：http://www.aibaodan.cn/163dvxmdrla.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163hdkixyje.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163fioihmxh.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163zlmxqman.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163kgtgrzry.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163wzxreaar.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163dcgmykgr.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163julogqwq.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163smubwdcd.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163tcowlqzo.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163zcihorme.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163hltqulry.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163cqlbmyzs.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163dxdxseau.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163ubcopves.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163dlrreqxq.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163bxxvstyd.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163cwxiqbwq.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163loigicze.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163xgbcdeas.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163hkmlnzgh.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163ryreigur.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163eqojhxwy.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163akmjesic.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163pltbdecx.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163uocugipm.html

print("Hello")
来源：http://www.xuanzx.com/163llftwqsf.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163gdciqbxs.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163hoegcavj.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163tgfuulkg.html

"值: \(b)"
来源：http://www.sxryk.cn/163gjvnivgo.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163vayeajml.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163fhjtyiak.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163dmrdwjce.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163muxcooxk.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163twiuiywt.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163ocqsmiwp.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163gqbbjbmj.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163ngvquaam.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163vilyryot.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163hdtxsdis.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163ciejlnyl.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163eivonuvn.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163hjllpqnp.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163chrtpkod.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163rcfcrhjd.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163atclpjaj.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163qbhcfduk.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163rxvlffyp.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163uyzngcou.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163exuoxwiz.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163mxxxuurh.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163pjewcjdb.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163ehertncu.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163hhpunmsw.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163xganmhpv.html

print("Hello")
来源：http://www.aibaodan.cn/163uumfhski.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163bxccpzas.html

local a = 1
来源：http://www.sxryk.cn/163puaudkwi.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163qvkrntnl.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163ahotbaei.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163mcothkkg.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163jnpxlfwb.html


<!-- 参考信息 -->