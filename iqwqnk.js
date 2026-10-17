外链999!wailian999！

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163isjewubi.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163xjylbual.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163vqcqieiw.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163pznyqska.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163xmnskrre.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163vfciaixq.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163abtbedbk.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163cwizsxxg.html

files=$(ls -1)
来源：http://www.xuanzx.com/163xdirhorc.html

[R38] 管道串联
来源：http://www.xuanzx.com/163rhgouyfe.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163wtaalevc.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163xrxjldqy.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163oeqvihds.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163gutekngj.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163ptsghxmt.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163hlarkigx.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163nllulyin.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163vlexamag.html

wc -l < a.txt
来源：http://www.sxryk.cn/163hgbtjwul.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163nedktxyn.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163pdasvgrq.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163xnyvskuv.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163mcdtvpkk.html

[R45] 批量删除
来源：http://www.sxryk.cn/163hynmvrbh.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163iasztzbk.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163yyfjwmcb.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163vhzdyyjs.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163kequoeup.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163wvnfcqmz.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163sayqhsri.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163qwapnjom.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163bjnmrkqz.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163ofyifjmu.html

[R50] awk 求和
来源：http://www.sxryk.cn/163vcuoqsio.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163cvxgzivm.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163xnpoqiwk.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163vnulfxpk.html

[R52] 统计行数
来源：http://www.sxryk.cn/163ycbdxgyo.html

wc -l a.txt
来源：http://www.aibaodan.cn/163nnpahcre.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163ainnxsie.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163qrjazewe.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163ikurfilv.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163icxmbasc.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163vqjdpcsw.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163fcvpowem.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163rfwrpzwf.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163lmzajptp.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163ducyrudw.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163pkzatjad.html

[R58] 下载文件
来源：http://www.xuanzx.com/163dmanzhlp.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163oplhbarj.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163ncjrwezy.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163boyxaooo.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163nxjoewcp.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163gncbmgdf.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163jeujkqvc.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163txqnqfpq.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163udkgehor.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163wqibuhjp.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163pptuztfb.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163amkkndyt.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163nghmskjb.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163ywhsbedi.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163dulineao.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163pregifff.html

[R66] 定时任务
来源：http://www.xuanzx.com/163srajxowz.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163qwbiarfi.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163tqslxitd.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163nxonhvgq.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163kvautmwm.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163fjadepov.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163aymekanm.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163zfqrjxbd.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163fbllllvt.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163iroiltsj.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163uutfexka.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163wlvspljf.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163chjwwlsw.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163dzzqytms.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163zlnpsjur.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163djiwmjsq.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163dksofycd.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163ssxujhja.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163qvjriblk.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163gebdfwop.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163mqmjoyhj.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163dwvfiiok.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163lducnhjc.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163lnmvlina.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163eekzqnkz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163iepwyxks.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163hihjkzqi.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163hvmfayuv.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163qruqmqrs.html

time ./run.sh
来源：http://www.xuanzx.com/163svdkrgex.html

================================================================================
来源：http://www.aibaodan.cn/163xaasoeoq.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163rotscvtg.html

================================================================================
来源：http://www.xuanzx.com/163icdicwgq.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163kbnyyeda.html

#include <stdio.h>
来源：http://www.xuanzx.com/163rbsvsknj.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163mqgbiwwm.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163lyvafyng.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163mandhctb.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163usmfhtqm.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163uceoqhbb.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163nbfroqoj.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163nomqmujn.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163uedindks.html

strlen(s)
来源：http://www.aibaodan.cn/163mshhmunm.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163zxjduarx.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163eztaxrhw.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163qaradwki.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163fppjcknp.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163izeievhl.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163jmvloyaa.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163ofchucfq.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163lmmofkpz.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163qilpyjfs.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163bxkdnttl.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163vwveaktq.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163nxtisnlt.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163htwnmubo.html

fclose(f);
来源：http://www.aibaodan.cn/163akjtwizs.html

[S12] C：写文件
来源：http://www.xuanzx.com/163sujjxije.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163cbnormrp.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163wjhfsczx.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163zcpubibr.html

[S14] C：枚举
来源：http://www.xuanzx.com/163wwnsllfb.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163almjowlg.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163vhdepmkd.html

(double) a / b
来源：http://www.aibaodan.cn/163gkrcmbnr.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163hncevcse.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163aqmvnxzu.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163boxvwwak.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163nvwuuckh.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163mxjomsdj.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163uysdlcgb.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163abedeema.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163uzhfpgcc.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163efxafaig.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163bspxaenv.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163lonxtifr.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163mxxwiqrr.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163wkcanvnx.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163bbnviydh.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163dmpnoder.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163vmipjkjo.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163ddstovrc.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163ibfxrmgd.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163ypguvkpt.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163vvjqnytt.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163ptojuyqq.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163qugwmhzi.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163yrxdpuqr.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163auzpuyff.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163nubtvchd.html

static int counter = 0;
来源：http://www.sxryk.cn/163etiewbvc.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163fjgpjyvm.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163iahjtzon.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163ykqnliux.html

#ifndef X_H
来源：http://www.xuanzx.com/163vyokuwje.html

#define X_H
来源：http://www.xuanzx.com/163rzpzwnjj.html

#endif
来源：http://www.xuanzx.com/163bjpnadbs.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163rkkcaxzj.html

#include <iostream>
来源：http://www.xuanzx.com/163yulobbvh.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163wyjebqvz.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163pcsflybm.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163gtakqehu.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163ocasxjuj.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163lvthghrk.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163vejjmghm.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163umkwsqug.html

[S35] C++：map
来源：http://www.aibaodan.cn/163psgfhpdj.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163pmulwpop.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163qrhauzto.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163jrfmgtqj.html

[S37] C++：set
来源：http://www.aibaodan.cn/163epdiuudw.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163vlibnnye.html

[S38] C++：排序
来源：http://www.sxryk.cn/163tqmmsawb.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163asjqjzoq.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163afgocvfy.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163fthqhdce.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163gaanbuud.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163zjwgytyj.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163xvemfucb.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163rnnuzxkc.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163gxqqrfqq.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163vsjnglka.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163gszwgfkc.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163mxsjmbff.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163yguavnue.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163arhuumxj.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163ennlzljw.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163ihfjnmdw.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163okjckxdy.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163adbudmya.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163diozbqzn.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163reuezudt.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163bawzlvog.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163hohdlfdo.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163iqttnsfl.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163jcgjqmky.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163qxovizpx.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163xwznugod.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163flgakvpe.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163qkpzjuui.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163jbbflydq.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163sasphfcp.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163asobddcm.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163uljcbnxc.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163lcaexzcs.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163psztivgy.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163keidqdfh.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163uxklnnco.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163ypephqzg.html

[S56] C++：optional
来源：http://www.sxryk.cn/163ovtjfqpe.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163ubvfenol.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163holngpgk.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163zsvepsnx.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163gexhoikh.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163bcwddxfg.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163hnclbmyj.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163gacijqec.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163rwqlpdae.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163gmsgenph.html

================================================================================
来源：http://www.xuanzx.com/163vofzeshl.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163uuylassu.html

================================================================================
来源：http://www.sxryk.cn/163vrsvqcwb.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163egwujxci.html

println("Hello")
来源：http://www.xuanzx.com/163vafeloxa.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163sktppuba.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163sfgqjnbo.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163unoyjekq.html

"值: $b"
来源：http://www.xuanzx.com/163ofixnyus.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163yqzlpkpg.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163gfncumjo.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163oooveayp.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163iftamhww.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163zcojrobv.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163czvbolcf.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163wpttrcac.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163phetsdri.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163zmlvpgam.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163uvletpaq.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163tbxniroe.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163uhtwqzux.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163wqhkftkx.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163pxkgmczt.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163ekzfpbek.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163bidchmhf.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163vpucyyep.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163jqrqbknw.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163etjwzxgb.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163ozpqopkr.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163jeiinzme.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163xyfdwjqg.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163cnkujwjx.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163fnbuidms.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163lereldeh.html

print("Hello")
来源：http://www.sxryk.cn/163easmdyxm.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163spegfsli.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163igpmuvfm.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163thqcyyqp.html

"值: \(b)"
来源：http://www.sxryk.cn/163rfztzque.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163mmloqzvv.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163xiedsujl.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163segiodgz.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163ywftuvlc.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163shjrwlyi.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163ekftoqbz.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163tlfjbfpv.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163ofpsqomi.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163laqbntps.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163kytxouod.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163ufpivwfa.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163deopodae.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163joxojxhb.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163hgxbcedg.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163sfqywezu.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163ikvluccg.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163jiledzwb.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163zitvgqww.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163nwgzeoqi.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163ttythpzl.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163ddcluwhf.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163tkcmdwpg.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163kjeiyfgg.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163onxtncfm.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163xoqypuxr.html

print("Hello")
来源：http://www.aibaodan.cn/163lmceuimk.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163qrcdvxdg.html

local a = 1
来源：http://www.sxryk.cn/163daywhody.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163cbvyjekk.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163ihhdcitn.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163vrcwnoyd.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163eksfvrgr.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163pybkqbxh.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163yuddhovy.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163lxbycxve.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163begjinzv.html


<!-- 参考信息 -->