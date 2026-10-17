外链999!wailian999！

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163ylwlropd.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163zzxhywzf.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163iwuhhyzp.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163ywrhbchx.html

files=$(ls -1)
来源：http://www.xuanzx.com/163rxhdpvty.html

[R38] 管道串联
来源：http://www.xuanzx.com/163lhmeglmy.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163yxbwzzrp.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163spunhuge.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163hyskzivt.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163pzomijyy.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163ukybohrf.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163wbutcwdn.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163mlrrbpae.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163hivoggko.html

wc -l < a.txt
来源：http://www.xuanzx.com/163ofjupdma.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163afwbhpec.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163ynyhnefi.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163kznhgjes.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163rzuzibam.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163pzotdokd.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163bywehern.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163nkafyzmy.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163jletdqep.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163zufnojhy.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163plfoxqex.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163ljkwlugt.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163vdonkmdb.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163qlbkvaec.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163akmeiyuy.html

[R50] awk 求和
来源：http://www.sxryk.cn/163cfdznehb.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163vqkrheek.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163qcylazpt.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163whtmgotz.html

[R52] 统计行数
来源：http://www.xuanzx.com/163tzyxyqql.html

wc -l a.txt
来源：http://www.aibaodan.cn/163yjmunfla.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163nivbmuig.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163scqqypxk.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163ppviefxg.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163oreymoen.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163kphpdbcv.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163arykpyjt.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163jaserivt.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163jicavxje.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163vjivrlzi.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163jejugrpd.html

[R58] 下载文件
来源：http://www.xuanzx.com/163ohzfllqy.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163ufqtovcw.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163rbsrtspe.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163hjfqcpag.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163xkuqnpis.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163qkgpohfx.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163fjwxaggc.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163oetjkdbn.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163caoolkya.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163skmdnilc.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163mepqcmcy.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163hzkztpcl.html

[R64] 结束进程
来源：http://www.sxryk.cn/163mgwszbfk.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163qchzvfam.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163bjfospxk.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163cyuxrsuc.html

[R66] 定时任务
来源：http://www.sxryk.cn/163diciomhf.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163rfiewfav.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163pldnyodk.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163wxwfeasy.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163cyfefqaf.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163hbrgliis.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163xrnwbmfl.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163ugqlzvwt.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163nzziduix.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163sfoyhvrh.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163lxxznekk.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163imdttxeq.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163nnjxpybj.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163zgynbpsd.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163zccpdbso.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163qqxypbto.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163nxygcxdj.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163sdahaqle.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163zoogzmmo.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163kedrrwbv.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163rduylkgj.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163oiveyrhn.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163eiyjyaax.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163iyscnifo.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163azadrupg.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163pttycgfu.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163akwizzcg.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163viyqdatk.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163fzylyyss.html

time ./run.sh
来源：http://www.aibaodan.cn/163wqwbhemp.html

================================================================================
来源：http://www.xuanzx.com/163zmpnkwmy.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163cicpngqb.html

================================================================================
来源：http://www.xuanzx.com/163xceuzsca.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163etsrmgqc.html

#include <stdio.h>
来源：http://www.sxryk.cn/163nqmgxauz.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163tzairhcd.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163duhianhh.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163lbdxyxkq.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163rtxbqfkv.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163qtxsefar.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163audradcj.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163adqwmsed.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163jbfgmxen.html

strlen(s)
来源：http://www.sxryk.cn/163mdlvejxr.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163lmyxdlkd.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163hmgrmwvs.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163xkaelbmr.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163jatsqbrm.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163bgsjssxz.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163nbufhsmi.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163ilfwudao.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163vcvkhduk.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163xxcanrqu.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163rlbpdmkf.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163xqfqostn.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163vyjaqgzx.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163zmtrmupx.html

fclose(f);
来源：http://www.aibaodan.cn/163wjnavvlc.html

[S12] C：写文件
来源：http://www.xuanzx.com/163kuqfjzca.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163slhpdptq.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163otuepoqx.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163oblmbqpu.html

[S14] C：枚举
来源：http://www.sxryk.cn/163mqnqonum.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163toimuvqz.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163murhiwtw.html

(double) a / b
来源：http://www.sxryk.cn/163eruqxvhq.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163dccqasph.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163yygzrmot.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163uxhtfwpy.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163ixhqpfbg.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163sgqsvwfh.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163djnlpscv.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163jwbijafs.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163offuzoac.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163alievgzr.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163itguzemt.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163ztmcsvqq.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163rtkejnxu.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163vhldhjyz.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163ibnylxjh.html

[S23] C：随机数
来源：http://www.xuanzx.com/163tyxxdrxt.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163mcmxlkif.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163uoewohck.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163nferevmf.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163alkizyly.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163sizeukyv.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163humywfmi.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163zwvhmffx.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163yzcbgvpa.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163jigainrf.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163epquzvmm.html

static int counter = 0;
来源：http://www.xuanzx.com/163psxhrrvi.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163qlqdrhnk.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163tzjgvcst.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163obwfmuij.html

#ifndef X_H
来源：http://www.aibaodan.cn/163wiolqjld.html

#define X_H
来源：http://www.aibaodan.cn/163pogmgudp.html

#endif
来源：http://www.aibaodan.cn/163outxlbkn.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163cpqcojzo.html

#include <iostream>
来源：http://www.sxryk.cn/163ozqqxzlw.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163jytewacd.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163reupovbc.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163baxtkuzc.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163bvntjwkz.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163zmisputt.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163qwgdlukc.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163fnozuxnu.html

[S35] C++：map
来源：http://www.xuanzx.com/163bjrbxzsf.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163egzyxhyq.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163kwfdjskr.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163gejjqary.html

[S37] C++：set
来源：http://www.sxryk.cn/163uvitjais.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163rrcqnfnx.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163abxtpsan.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163rbszyrya.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163wgwgfmub.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163pzgjvarf.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163lremayme.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163qudzxxii.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163adlxvyev.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163tvgikxso.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163zmvtywkr.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163zcmtiwyl.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163zdkeppwk.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163gplfvrzb.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163ncyzmikb.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163cdwihxdu.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163rjbyngof.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163vunczkaw.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163qszlghuy.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163vwabvfep.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163ygfbbrzz.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163hukghemr.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163orasdvqj.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163zuhmkfvy.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163dhxvwpds.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163uwunwoum.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163dcvztgdu.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163mcatttkr.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163elzealmv.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163vbvgrnqw.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163wsybywvx.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163xhfrbudk.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163vvmqeahj.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163rrvxaooe.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163uipvtewq.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163pqnjtykk.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163wxryybhh.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163qddmzwdw.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163dqilvaku.html

[S56] C++：optional
来源：http://www.xuanzx.com/163erevkurx.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ipkzurhm.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163ykuffpqd.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163omiocljs.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163folkjnql.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163adugevcq.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163aetqmssu.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163mkjgvwlp.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163klecrojz.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163qfowqniu.html

================================================================================
来源：http://www.aibaodan.cn/163wdpfhbaz.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163nayytzun.html

================================================================================
来源：http://www.aibaodan.cn/163ydamkdsc.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163bfxnlldw.html

println("Hello")
来源：http://www.xuanzx.com/163qtmmcdoh.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163cmgertjs.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163fiskpmaa.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163wcxssmbv.html

"值: $b"
来源：http://www.xuanzx.com/163ozllbzyn.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163exqulyjf.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163neclmisd.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163uzigmxmv.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163gyokhsxl.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163syvjdzxw.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163ifdptkap.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163kimplrhq.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163hezgnrtt.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163evfbqnei.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163fouojlje.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163oxprbwny.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163iccdqxgy.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163jpflcggr.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163dafkxvjf.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163ieviteif.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163vbztdlyb.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163dqidavzc.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163avuujnwc.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163lzobsyhg.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163hblvmgno.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163fcvxgqxp.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163ukbegwdr.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163gnvodqfy.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163bohiubow.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163qgoskqbf.html

print("Hello")
来源：http://www.aibaodan.cn/163oppdgmya.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163xomfelve.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163nhhfedqm.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163kzfdrcub.html

"值: \(b)"
来源：http://www.sxryk.cn/163uiqedqsa.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163fxwfssdk.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163nddkckcc.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163bbajogwd.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163tqahzujx.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163dywddxfz.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163hhokjhsd.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163pkqnhewz.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163lxftnezt.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163jvunhhgf.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163autfjqqm.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163jixqaniy.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163ynxqyhgj.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163etlgbdof.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163fihvgpek.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163tvbbbpth.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163xxpymriu.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163rdkrqivm.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163itpmslpd.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163wwkhtxcf.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163imfcuaam.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163ybtytwer.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163fdfrljmz.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163qkbgxndb.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163gzijibjl.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163xvxpvjay.html

print("Hello")
来源：http://www.sxryk.cn/163bwrsocrc.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163tzrydehh.html

local a = 1
来源：http://www.xuanzx.com/163qklamblj.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163lldtpaaw.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163jtcrujjm.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163stkvzvji.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163uoonzawv.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163dgqcdijz.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163tbojblxy.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163ainekibp.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163aeqyczff.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163usjchwql.html

"a" .. "b"
来源：http://www.xuanzx.com/163qkrkotkm.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163hilkxmbg.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163ufywfbpk.html


<!-- 参考信息 -->