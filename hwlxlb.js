外链999!wailian999！

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163nvzpfkjk.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163ppvlexhd.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163dmlxdjcj.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163rgjgcifc.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163ypfftlvp.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163lmjvhwvd.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163mkfgchtr.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163xtbqpfhx.html

files=$(ls -1)
来源：http://www.xuanzx.com/163mvnsilwp.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163zhfnifwu.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163paehjczx.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163odhchoxe.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163pkuqdsci.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163njzewequ.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163zaxjhpkp.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163sukamvpb.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163mgvlovbf.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163vmbmuxwk.html

wc -l < a.txt
来源：http://www.xuanzx.com/163irjnqtmb.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163qgrdpzhu.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163gbwqnrfv.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163ofmvirpd.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163rryoocvu.html

[R45] 批量删除
来源：http://www.xuanzx.com/163xffakdae.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163cpeupfjz.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163keunjgts.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163ywakgeny.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163hnawdlhr.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163mzxhtxkv.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163owmrmmdf.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163ygkduzrm.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163vzwvngsf.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163fjflpajg.html

[R50] awk 求和
来源：http://www.sxryk.cn/163pesunkia.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163mweerqwt.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163xvmoachx.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163sduzxfvq.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163uimcdhud.html

wc -l a.txt
来源：http://www.xuanzx.com/163wjtxbhtu.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163klsnohxt.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163lgbiembb.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163qtdlliph.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163pvymdkwe.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163qdgzvggh.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163oivigdoa.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163khrfoznn.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163ontjgnyr.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163ulivqcdi.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163meqnqyib.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163krdvvljm.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163pgzikpgn.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163bielhfka.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163kiglfbwj.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163lfeisqyi.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163idgmogcu.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163bazlagtj.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163vnppxrie.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163rkvlwaed.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163tqejbzzw.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163radzecyh.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163onvrngac.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163illnclif.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163bxolszaw.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163isirsheg.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163vksmkvuy.html

[R66] 定时任务
来源：http://www.xuanzx.com/163fhucupmq.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163xyvqjmdf.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163udbuklgw.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163hgvnkqbq.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163yyvmodxj.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163rximiicp.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163pekqqfqc.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163lptxjxcq.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163bwoatran.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163gwqomegt.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163szhojidz.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163akpfggfb.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163ntwakaek.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163mfnbrppw.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163lsrxcfkg.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163hfitnqqz.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163guhkjybw.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163ekmmjitz.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163hnsylnfg.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163cwjnelsp.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163vyirgdhj.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163fcrzhzvi.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163gxcbckwl.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163hwhdakgu.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163harcsbku.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163lakerliu.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163ziapilnp.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163htnyiayr.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163awqndvky.html

time ./run.sh
来源：http://www.sxryk.cn/163icvbfsnm.html

================================================================================
来源：http://www.aibaodan.cn/163gxjqavns.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163xwljagvi.html

================================================================================
来源：http://www.sxryk.cn/163eqfmbqys.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163thkavltb.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163kmcswtsb.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163gswmuasx.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163dggpodbf.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163nfltljyl.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163keaoadtu.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163suuwwexm.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163gpgpuojf.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163llfiwutw.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163euyguysz.html

strlen(s)
来源：http://www.sxryk.cn/163rlbpbnuj.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163acmdvkyk.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163rpgrtwkt.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163grhpsobw.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163ivadpadi.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163sytcfqcd.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163buqqgvgr.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163sxrcsvpq.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163urvcxars.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163fdkzzbut.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163ogjtwvvq.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163sgyooudp.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163unocjnyq.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163rraogrbn.html

fclose(f);
来源：http://www.xuanzx.com/163bfeeangn.html

[S12] C：写文件
来源：http://www.xuanzx.com/163lpukdkyg.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163kqcnbkxm.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163zwljsqec.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163aksmuebg.html

[S14] C：枚举
来源：http://www.xuanzx.com/163onrnexml.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163pzktgekf.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163ozeujvag.html

(double) a / b
来源：http://www.aibaodan.cn/163gnxxswvd.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163mndurydq.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163tmlonjdb.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163ivvfkaap.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163jfbmiiwv.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163tsnjlpmt.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163qcsadqdu.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163qjnhbmia.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163rjkhqiig.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163rdfnguau.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163iespaeeu.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163hzklmitn.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163stzlomao.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163ofcxcpmg.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163tlazfwte.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163gogrpldq.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163hgmufyrh.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163rqbevhsy.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163jsfnxkci.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163xdceeqha.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163xgadglpo.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163rxwbcpxh.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163fikozxdu.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163ndfnxbdg.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163bstumpju.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163dtgiphnx.html

static int counter = 0;
来源：http://www.aibaodan.cn/163jmakfxlr.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163kyfxlusr.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163dzjmntbv.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163bhhkngnv.html

#ifndef X_H
来源：http://www.xuanzx.com/163gejgkoyw.html

#define X_H
来源：http://www.xuanzx.com/163rkdnywaa.html

#endif
来源：http://www.aibaodan.cn/163yznlvgej.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163bvfghpou.html

#include <iostream>
来源：http://www.sxryk.cn/163quqairfp.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163dzshtpla.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163mbomsuuw.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163xtkrdiat.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163oozblwqf.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163yvyfodkv.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163sppovfbq.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163fsldysuy.html

[S35] C++：map
来源：http://www.sxryk.cn/163hbwhrwey.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163aqfepkaf.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163luvoiebo.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163thtlhnhh.html

[S37] C++：set
来源：http://www.sxryk.cn/163pmoqhujm.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163ixnfrgjj.html

[S38] C++：排序
来源：http://www.sxryk.cn/163rfuhveef.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163npsgascn.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163zpftqwaq.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163oxxupfhd.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163jkrcpmii.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163ktndcyzo.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163podqnltw.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163fsfvogci.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163qbhbwxyj.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163ysktlbqo.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163thcvtpok.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163gpfwoaux.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163itnumtac.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163byfkriny.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163hlbcwxcy.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163clvimcvn.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163ieqathrp.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163bemvuwvp.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163fjwjtkhh.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163ctyipryl.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163onmvvhzv.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163ipjjtflw.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163cyjeqhjs.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163ztsrurvm.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163ygcibojb.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163vnlnfuho.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163ohwfcoip.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163xbnbgify.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163lbcogibx.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163engkgtyz.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163rmwutnwi.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163ufvdgres.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163ywxyrhad.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163xszdcsuo.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163vtiixist.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163smicjjhe.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163kxzmtjbf.html

[S56] C++：optional
来源：http://www.sxryk.cn/163aqnkislu.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163csuloibe.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163yrmotipv.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163yjitbdsc.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163njcywhhk.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163etadajpe.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163aalzpvte.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163sjhzjjoj.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163omxcmfan.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163jrkcedix.html

================================================================================
来源：http://www.xuanzx.com/163grvgxjpe.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163yjhlmxje.html

================================================================================
来源：http://www.aibaodan.cn/163rqepyymf.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163yqpucyjb.html

println("Hello")
来源：http://www.aibaodan.cn/163utxisnws.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163etuslfuy.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163yxazyoyc.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163qdkabxak.html

"值: $b"
来源：http://www.aibaodan.cn/163irtovrdb.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163sbcpyecp.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163kxbfbxvi.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163imkftzxr.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163lpzqilcw.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163rnlzdmjd.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163wjclifix.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163rzonbwen.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163hajoxsam.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163meryykfx.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163vozcpjfo.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163rwsmvnpo.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163feworgfc.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163ybqwpzcb.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163dybqtlne.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163dncyyevf.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163htkcpaqj.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163ddjycawj.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163hqodqjuv.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163zxwkrxms.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163dgolxvjj.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163ejbrjsar.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163decigzmr.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163nzepozvp.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163ifttylov.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163tgwlagiu.html

print("Hello")
来源：http://www.sxryk.cn/163rtujnbak.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163qhofrjbf.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163tvvsrpep.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163rdylomwt.html

"值: \(b)"
来源：http://www.xuanzx.com/163vomomeek.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163iwrrzkzs.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163dmpmmgcs.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163vacljaat.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163vqbqfncq.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163veowuljx.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163nonwqgfp.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163nnszvbbz.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163hcixxemq.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163amndukyq.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163epmvnijs.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163cvrvvngo.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163daxabjnl.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163menbrfph.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163zerxsroa.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163jabemjlb.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163ttipxmau.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163djkrguzs.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163lxcbsior.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163rjgcbtlc.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163ojnvzior.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163scepackw.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163agpkyeld.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163mpkbbnfh.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163clvanwfc.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163awgkycqh.html

print("Hello")
来源：http://www.aibaodan.cn/163ykvoddvn.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163yjngccbo.html

local a = 1
来源：http://www.aibaodan.cn/163dydeveew.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163vxyxxika.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163rjzghzhy.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163lxsxawcf.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163bhazdfof.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163lceeonik.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163esqhbcxq.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163gehnvnbv.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163fmaytrbd.html


<!-- 参考信息 -->