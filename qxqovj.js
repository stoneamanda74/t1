外链999!wailian999！

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163oumhilbm.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163fvsiroyk.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163eigkfakz.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163ocxznxpg.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163scaeklmz.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163krhwrsdj.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163isnemxxt.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163znyoedci.html

files=$(ls -1)
来源：http://www.sxryk.cn/163tbcfpjht.html

[R38] 管道串联
来源：http://www.xuanzx.com/163jdmffpyj.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163ymrtpvwo.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163pzhphhqo.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163asipyzsc.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163yhigjoar.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163hndkkhky.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163hrizchzb.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163jdumvkox.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163hosketas.html

wc -l < a.txt
来源：http://www.xuanzx.com/163owilyzkd.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163vijvafrj.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163wtdndxdy.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163lteyfdwg.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163bzpczclp.html

[R45] 批量删除
来源：http://www.xuanzx.com/163upjfuger.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163ajbzqsyr.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163fdcmdvlx.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163fkaupphi.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163eiyiqlak.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163esvzkrlc.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163kxbedewm.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163lubywrqi.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163vttkuxge.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163xwneyrhi.html

[R50] awk 求和
来源：http://www.xuanzx.com/163ymgjjlat.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163gicnxekt.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163mvtfqzsy.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163ihlnvrwc.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163zmzghzba.html

wc -l a.txt
来源：http://www.sxryk.cn/163kprxkkcm.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163tmaimmar.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163svotclmt.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163rlfmnxko.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163xueclagn.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163bogenpwz.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163uqdeuyzo.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163shpfdums.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163mgfpnunc.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163haeihhpw.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163jkzhsvna.html

[R58] 下载文件
来源：http://www.xuanzx.com/163hldvwlyw.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163qgyqaznl.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163ihghcejq.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163wvhebdey.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163ksyoihbd.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163xgddarfd.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163ozcskugo.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163pkjzqenr.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163vljjupkz.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163hkzvgoox.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163vkdwkcqd.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163ouzmwana.html

[R64] 结束进程
来源：http://www.sxryk.cn/163uwgewfeq.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163rnonrmwn.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163ovmosbmt.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163elgqgzsb.html

[R66] 定时任务
来源：http://www.xuanzx.com/163vtuhtrxr.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163eqpruqis.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163dwtvttrh.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163gwlxpain.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163bjtuwlbf.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163fzjhafsg.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163pkmtxayk.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163vbvzkvkt.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163yzciugnh.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163fsrsoepu.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163nuvipaob.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163ydtppcwi.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163xurtzjdg.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163ipxbnbwf.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163fekiohbj.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163cngltbcu.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163qhflwkvm.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163kkhvwqjh.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163avbtxksm.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163qndobays.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163lrigwgcc.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163tyhcwqin.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163kviantyk.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163ehklchvh.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163mlhuqghq.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163uipucwwc.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163wfgwvdlp.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163xmlrfkry.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163wjztrxqp.html

time ./run.sh
来源：http://www.aibaodan.cn/163cnrcklul.html

================================================================================
来源：http://www.xuanzx.com/163bhttwxgx.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163raoqkqsv.html

================================================================================
来源：http://www.aibaodan.cn/163rtpaqhkw.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163oqqdpxow.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163enccntat.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163brgzffqb.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163ldlcurje.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163vgynptjt.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163zbsiqbpw.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163kemhjzdq.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163pqtxbrsi.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163fdxoretg.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163mwfkdoie.html

strlen(s)
来源：http://www.xuanzx.com/163lrmsksyu.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163xioatiek.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163xgqktoaq.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163esbeodjw.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163epoacmep.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163ybneyuxa.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163yuypbklo.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163oegbwrpe.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163dsfargag.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163pmqmehhu.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163zvcmmylx.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163swacniiz.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163hiybytri.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163crfeibjz.html

fclose(f);
来源：http://www.xuanzx.com/163qtltttyr.html

[S12] C：写文件
来源：http://www.xuanzx.com/163csqjmbzj.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163mznbxsdl.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163qedorygw.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163qluvmrba.html

[S14] C：枚举
来源：http://www.xuanzx.com/163mxcltlzm.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163qgppzskc.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163nzjvgjxq.html

(double) a / b
来源：http://www.sxryk.cn/163rdalockp.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163ihhtrauf.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163uwlqeglh.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163diescfmz.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163aiegerds.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163pmjafqcs.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163spigpdqz.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163eeeeblaq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163iwqgruts.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163mlzblchg.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ghjghdfj.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163mptecmwx.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163ontnzogo.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163edplossg.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163alejkfsi.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163upjbhmwz.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163dmmtnzkj.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163xyooqlof.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163tkmpbkkx.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163slojdstj.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163gulfzjmh.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163vjtipzde.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163xkjdriti.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163mqxwzcza.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163bazzruvy.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163gcautywa.html

static int counter = 0;
来源：http://www.xuanzx.com/163ikwyiktk.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163qonvhjrx.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163uhqessba.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163ufoejaaa.html

#ifndef X_H
来源：http://www.aibaodan.cn/163ychlvtih.html

#define X_H
来源：http://www.xuanzx.com/163eumslmgd.html

#endif
来源：http://www.aibaodan.cn/163faqmcxrz.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163kyyfhkft.html

#include <iostream>
来源：http://www.aibaodan.cn/163phlhmnns.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163ajxmvrpj.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163sutuchru.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163yqxjnbsr.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163ctitmkal.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163chsfbdzr.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163pxadwwzo.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163zmghawih.html

[S35] C++：map
来源：http://www.sxryk.cn/163wrsdxhfo.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163zilsgbiy.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163myofsnrh.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163swegxpyn.html

[S37] C++：set
来源：http://www.xuanzx.com/163sltoviqm.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163uybtzwzg.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163hnkrueyn.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163hzkbqboi.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163pcknzewa.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163nawjzdhy.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163foolfrng.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163ohzqppnq.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163dxtxfbtu.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163zdowuzxb.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163shzegwam.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163imqbnbxm.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163cczpiggt.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163zaxtjrwr.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163wchpobau.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163jhmbwtoo.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163advcgraa.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163zvytmnmh.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163kuaiawpf.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163geygflvz.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163ibbuvqjc.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163hpvvfimv.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163kgghrupz.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163xhntmnmo.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163rfnypvsz.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163oojxoqpw.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163ljmwxvjh.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163claogksh.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163utjqtxdz.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163jfvopnfj.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163ebzuqpxg.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163relfbvlc.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163cqfrgzyw.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163evcuhczm.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163dzibjwxq.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163axlazaym.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163jptylert.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163iyduolfy.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163sonbosms.html

[S56] C++：optional
来源：http://www.sxryk.cn/163zqplqjdd.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163brubmgoy.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163recqsrkj.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163xpsrauhf.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163wlqfgtsx.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163hjlrtduz.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163mtqezvtv.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163ryvocdas.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163ilxthbzu.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163xgmxnjdb.html

================================================================================
来源：http://www.sxryk.cn/163qwvyqkdp.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163jqoastxi.html

================================================================================
来源：http://www.sxryk.cn/163izvqvtnj.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163pnjlcrxg.html

println("Hello")
来源：http://www.xuanzx.com/163yvwohphc.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163hlsbourl.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163rgmyhijr.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163grznydjy.html

"值: $b"
来源：http://www.xuanzx.com/163gvkpmpog.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163srvewwye.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163eivcufwv.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163vecziyzf.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163lkazfljp.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163spjtnkfu.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163mwopkpdk.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163azgmwski.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163defnajdo.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163altqnisz.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163rmkrlegg.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163omugmtjs.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163wsriefzm.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163gskvznnp.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163tfvddkyb.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163plpbutuu.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163nrarrwvv.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163ivenwxdm.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163bukfparf.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163dexqkiuc.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163lsnuktes.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163kaiuzacc.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163pjluxjrl.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163wwkiidea.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163pfuknhac.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163lzsmzbhl.html

print("Hello")
来源：http://www.aibaodan.cn/163oiqhqsut.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163gllhapfi.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163pqieaavf.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163laftpoki.html

"值: \(b)"
来源：http://www.aibaodan.cn/163ieilukae.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163hbyolfoq.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163lhbpinbz.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163iaitljxa.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163xqjsectt.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163zjfddbmr.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163lkkzbyjl.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163qkjiipsn.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163qqlphktq.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163gxhvqhuh.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163abkzwtkg.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163fcexloea.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163amdcaezs.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163hgivmeyz.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163nqtqtbtu.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163ygbnjjvg.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163pbfxkpxn.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163nhgvsiqx.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163ampezazy.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163njtbbkax.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163kpkryzlr.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163tmkfbkri.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163xieldkal.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163tqwaiohv.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163qfbvwhhz.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163tsuygukl.html

print("Hello")
来源：http://www.aibaodan.cn/163ntzujlia.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163bycrumdh.html

local a = 1
来源：http://www.aibaodan.cn/163ueamyisj.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163liduxoyq.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163jitgahuj.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163umkusmnu.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163oacducdw.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163abdftjzc.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163qidnyqce.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163qrqyorkp.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163vgkuzroy.html


<!-- 参考信息 -->