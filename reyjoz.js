外链999!wailian999！

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163cbswyoka.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163ggptquss.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163pztzeyxm.html

[R31] 局部变量
来源：http://www.sxryk.cn/163lphleagg.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163wwlxlemq.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163yzzxzsma.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163jostnhej.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163taapsvsp.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163eyifuqhq.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163pomvvypx.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163dpchawnf.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163gaikoxkw.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163lcozuhzk.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163jyiytjkk.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163efseojop.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163xoteqctd.html

files=$(ls -1)
来源：http://www.sxryk.cn/163bcljiudc.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163dznmorax.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163mcigwwjv.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163lltijjmr.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163trvvezyo.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163wqtfngix.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163qdohthod.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163owagzzsk.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163fqbowqwn.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163vgwgojyl.html

wc -l < a.txt
来源：http://www.xuanzx.com/163qealgksk.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163qxynbwmz.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163rmunlnla.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163dmejmujl.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163npikxvfw.html

[R45] 批量删除
来源：http://www.xuanzx.com/163nfnwyclx.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163qexqvfaw.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163oeetfgph.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163pnskqmpe.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163xrobqwpo.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163hfouifwk.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163fykwaqoh.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163ccbjqkcn.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163dwgyyalw.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163uabeffys.html

[R50] awk 求和
来源：http://www.sxryk.cn/163jnvwsnqm.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163rpepjreb.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163hgbcdjda.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163iueuaovu.html

[R52] 统计行数
来源：http://www.xuanzx.com/163auzboxhd.html

wc -l a.txt
来源：http://www.xuanzx.com/163oxymghpx.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163swzdnatd.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163uyonnpsi.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163hrhtfrqb.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163bweshxlp.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163fszlmaic.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163dkiomgvw.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163zcdpskyk.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163zxowfcdu.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163vilyqkcm.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163okmadtjd.html

[R58] 下载文件
来源：http://www.xuanzx.com/163dgbonjmc.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163ukmgyytj.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163bhydeqwb.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163vffhtqyc.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163crtkfnli.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163wkngrvyx.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163dzejpzwr.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163ryyhtiqz.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163zsgbjobz.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163cjpinbbu.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163aykwtgpg.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163qvwpaiqx.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163wofzyfjh.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163qklaqzis.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163bfetmcnr.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163lezfffob.html

[R66] 定时任务
来源：http://www.xuanzx.com/163lvbdpckf.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163tnjnkjnn.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163rmwgcxam.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163czkhfmom.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163otoeczqj.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163agczkfew.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163egrplolc.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163xbrznklx.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163bfgycaqf.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163uimqncaj.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163ofhyrlbj.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163hdlpjseu.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163djbdxash.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163fwhxpeuf.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163znbkbmnu.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163dypnbasy.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163ddzkfdwo.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163gajxmhmq.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163ipsxbtxt.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163czhlraux.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163djuhudea.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163wqqeczdy.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163vrmuytuj.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163dqzlsojx.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163whvhpkzo.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163dyrpwngw.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163aakucmyc.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163aolbswbd.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163konemndv.html

time ./run.sh
来源：http://www.aibaodan.cn/163edhjqhgv.html

================================================================================
来源：http://www.sxryk.cn/163qqowxpbr.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163jlzisrmp.html

================================================================================
来源：http://www.sxryk.cn/163pnsvremt.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163hocjykjc.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163hhirqrky.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163kwwhrumh.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163xyirdlnw.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163zwgsczxb.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163nlnaglba.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163fjwirdpo.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163jhawaucx.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163puqkvugj.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163qcgggovo.html

strlen(s)
来源：http://www.aibaodan.cn/163infosqzx.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163scdfmgfv.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163neggdmbw.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163bbtojflj.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163libtphde.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163egsfxybn.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163wpsgkktn.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163cyryjhay.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163ubsradyh.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163mafzyguy.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163rbcccmht.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163lbhodkvk.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163tbrbygob.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163djxwdktz.html

fclose(f);
来源：http://www.xuanzx.com/163dkfuyigw.html

[S12] C：写文件
来源：http://www.xuanzx.com/163lbibrpxf.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163dijqcrcd.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163nigotvem.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163kvhikuaj.html

[S14] C：枚举
来源：http://www.sxryk.cn/163chtnzfnw.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163oiuypxvm.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163xxyfcydw.html

(double) a / b
来源：http://www.xuanzx.com/163nxvajgtb.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163qnbgwowy.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163yrkncycu.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163fwpqrtew.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163xmtezcor.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163vquzjpnk.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163kembmpph.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163tyauqtrz.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163puvvmpfr.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163tmefrvxj.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163yguoddoe.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163lyvvaquu.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163qlkdnxim.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163xseelgez.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163zuvgizdm.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163ihxrtmnp.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163toqvgwuj.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163ubfyshgl.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163dxglzvra.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163zrevvldr.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163dpfqdpvp.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163qsqhfrvb.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163bferxzar.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163tqbooisb.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163hwatjdif.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163qdxwkmiv.html

static int counter = 0;
来源：http://www.sxryk.cn/163yrzpnrom.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163eokdskbq.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163lmyeujdn.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163bbwprxri.html

#ifndef X_H
来源：http://www.xuanzx.com/163bwcpvoue.html

#define X_H
来源：http://www.xuanzx.com/163rwcevmrv.html

#endif
来源：http://www.sxryk.cn/163profzsju.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163ovocpzxq.html

#include <iostream>
来源：http://www.xuanzx.com/163hspkednl.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163escggcwk.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163msanvfcy.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163lqrhiwkf.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163hxqpyyde.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163kmwcdjxk.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163zzyvtlui.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163npimtdpm.html

[S35] C++：map
来源：http://www.aibaodan.cn/163icyiqlqa.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163wwibwmbj.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163wcjykqxs.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ynznkcyb.html

[S37] C++：set
来源：http://www.aibaodan.cn/163nldgfdsl.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163fcwpvysy.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163afcmvrba.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163ydzkudxy.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163kipyferg.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163ifndrdak.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163bohfuchx.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163lumqhdna.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163gnysnrln.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163zpaxbygw.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163rkszuuvr.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163idvlptmh.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163dcbzmfcw.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163epxyyuct.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163xguizgcj.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163wkxaungf.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163faiflyey.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163cbjusjdc.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163cqzhypwg.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163bysdvqam.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163lrgsyafn.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163djmvmkqq.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163mqpvpxrb.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163romugkry.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163zzecdzzg.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163szteercb.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163cehjgadz.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163mpbnmkwc.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163ewrrgodw.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163dkaewbft.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163sbrkdqsx.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163hbjheads.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163dktslkqh.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163nmvnypgy.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163lmvbexwi.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163mfgqueqr.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163celoblxg.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163hqerxngb.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163xxcsdyur.html

[S56] C++：optional
来源：http://www.sxryk.cn/163rsgubyft.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163slmxvhvz.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163qwxzlzdz.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163fbczisay.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163ybvaepts.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163fixqdkrk.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163iafhnzlk.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163aohhqhoj.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163kzhkhypy.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163tjfgobsc.html

================================================================================
来源：http://www.sxryk.cn/163cqygmvhg.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163lqdymwth.html

================================================================================
来源：http://www.xuanzx.com/163cetjmnyg.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163djeuqzit.html

println("Hello")
来源：http://www.xuanzx.com/163hyuexmoz.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163nspxeuvt.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163kacossfb.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163acbllomq.html

"值: $b"
来源：http://www.aibaodan.cn/163vjrtagaw.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163trbkpufm.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163plxfepju.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163ikahjsbj.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163iqvrawcj.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163qrgqbxeq.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163itacpgak.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163ppsrrltc.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163gnwdfbne.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163qkbwdhtz.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163iygeeaej.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163bzksjldd.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163woikuele.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163nvvqjkiv.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163rqhiogvj.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163mkabbbdu.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163fybmfstb.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163nujuztku.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163ozyhgcma.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163vhxbqamf.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163mvmspgev.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163jzleywmz.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163nfzgqcgn.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163djzhmuta.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163hlpcyayp.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163heiajuid.html

print("Hello")
来源：http://www.sxryk.cn/163mysibron.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163tpxycnaa.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163mjgblitv.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163mpfuxhky.html

"值: \(b)"
来源：http://www.aibaodan.cn/163sxdcsyyl.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163vfthmjax.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163jnpccewr.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163lvlnafum.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163zeqjhpkk.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163wcxnebln.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163thsddzht.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163znrgwnla.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163obzheztc.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163fqrldkdv.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163cggwbard.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163ucrheqwl.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163pwgpiokd.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163mknlecmm.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163nvlcfdty.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163ustfcxlz.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163siiuctwb.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163lalxgarv.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163kuaxgekw.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163firlxzkx.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163tmgvwfbl.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163iknahabf.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163hfgvclxo.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163rmxuydvl.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163xreasmpz.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163fdbuervi.html

print("Hello")
来源：http://www.aibaodan.cn/163oyxncbzm.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163crdngwij.html

local a = 1
来源：http://www.aibaodan.cn/163uexrcami.html


<!-- 参考信息 -->