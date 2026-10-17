外链999!wailian999！

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163jsdgmnsf.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163hlknothj.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163vmqexqpe.html

[R31] 局部变量
来源：http://www.sxryk.cn/163louojnbd.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163mcxjquoa.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163uibzmykh.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163sqnyjplh.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163ngvzcfgw.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163ahjgmltv.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163pqtmpeek.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163dkmwmxss.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163pqyprcei.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163hnuqqzsk.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163dpmrshow.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163gqdyaaes.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163arkevkwr.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163fdkhsihz.html

[R38] 管道串联
来源：http://www.sxryk.cn/163ttkwiems.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163usrusrwg.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163jqnckdse.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163gioytqoy.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163hwmdzfcc.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163oxubvlub.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163efvujreg.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163syffhbxr.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163ojjeibzw.html

wc -l < a.txt
来源：http://www.xuanzx.com/163ffupejtl.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163degnlsro.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163yipuaalt.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163bxebmccb.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163akwtxjsx.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163gmrqpatn.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163ahjaxllu.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163moykexda.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163vgyobodj.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163tnxxitlx.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163vxfipvpr.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163lbiwghav.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163izgjyjwx.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163fmteawip.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163fpcsmfhq.html

[R50] awk 求和
来源：http://www.sxryk.cn/163dnozrhmj.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163angmqkdn.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163cmtqfjbk.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163fiooornb.html

[R52] 统计行数
来源：http://www.xuanzx.com/163aqvemnhl.html

wc -l a.txt
来源：http://www.aibaodan.cn/163vmcztmug.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163jihijsey.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163yeahvnem.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163sebtskpj.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163ewombwwn.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163uivzhmgd.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163yntdkfxf.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163ezomqhng.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163siirgtge.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163utmhboqc.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163yzffjete.html

[R58] 下载文件
来源：http://www.xuanzx.com/163xgvsazqa.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163zfalmzvz.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163yzvzsdoi.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163hdvjppfx.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163kxtplffm.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163hyhdaxxu.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163rhdfsybk.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163fknbnmfy.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163emwwzili.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163yhxeqcjh.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163qvjeficv.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163qbmhjesk.html

[R64] 结束进程
来源：http://www.xuanzx.com/163udrpsuuy.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163xaktrnqt.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163brbkrilq.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163engijxfe.html

[R66] 定时任务
来源：http://www.sxryk.cn/163skcusbhs.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163hdsmqgkv.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163ogqpkccr.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163vthnullb.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163kaarftsb.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163aeipflob.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163yginnuyf.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163ydjgzbcs.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163sefvpuyf.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163egbkryuu.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163hbbwzczf.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163objancze.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163ouvdfpux.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163lztgggma.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163wnlgxpxi.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163wdloodyb.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163pmjxmyek.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163jmqhmtqp.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163rfmssccz.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163qtwgakrm.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163qretvpdc.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163hxupyxlo.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163hbqtcldb.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163dnrusurg.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163dgnfxads.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163lgmuzohq.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163vdabqhav.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163ljzypbmk.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163rtvehpnk.html

time ./run.sh
来源：http://www.xuanzx.com/163pntkmtjs.html

================================================================================
来源：http://www.xuanzx.com/163ikgwdmgs.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163kxtyvavh.html

================================================================================
来源：http://www.sxryk.cn/163fripukqo.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163xhwcwtmt.html

#include <stdio.h>
来源：http://www.xuanzx.com/163mprzqdip.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163uglorjar.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163nakzucan.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163urzvxcza.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163ysdamblp.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163osrkmorf.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163ygcmhqfb.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163kwotpqjm.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163jjnycnvw.html

strlen(s)
来源：http://www.xuanzx.com/163sxduekxn.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163jjfqilpg.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163gqfshrit.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163bvmcmegf.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163vrmbrfwu.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163jstlbwue.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163zascpmhd.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163jhuoedrh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163rzhyomaj.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163ghnmlohv.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163lswekjsp.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163voegturk.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163dwesghat.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163sxfuhphx.html

fclose(f);
来源：http://www.aibaodan.cn/163acnmmiwv.html

[S12] C：写文件
来源：http://www.sxryk.cn/163mjflkksn.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163gflkgrru.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163kwhyiapv.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163sdimqycg.html

[S14] C：枚举
来源：http://www.sxryk.cn/163zkeaswpx.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163tiyhnmre.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163wgefjidz.html

(double) a / b
来源：http://www.sxryk.cn/163qocfkift.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163ygdfnesi.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163pntkbkkf.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163ynjjrrwo.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163oyoinkfb.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163mohaetwn.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163ulxgerut.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163iafjjsqd.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163rjzmokyu.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163sgxpyzum.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163sfqrkrnp.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163ajnjafsc.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163tijdrtik.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163cajupgea.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163kvkiphhk.html

[S23] C：随机数
来源：http://www.xuanzx.com/163llvliubq.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163yreyflxa.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163udirilzy.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163nkfwdsxr.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163twyxlurx.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163qyxfexoc.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163vshrewmt.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163vkszsjms.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163leysyaex.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163jqcorsyk.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163sriwsgzn.html

static int counter = 0;
来源：http://www.aibaodan.cn/163howkaytk.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163maoewnrm.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163xupmjyid.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163gecoeprn.html

#ifndef X_H
来源：http://www.xuanzx.com/163vmxagtmd.html

#define X_H
来源：http://www.xuanzx.com/163xtcswkfp.html

#endif
来源：http://www.sxryk.cn/163amqxngkn.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163dzcsyonq.html

#include <iostream>
来源：http://www.sxryk.cn/163bxklwtap.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163iaeovawj.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163mxsrprro.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163koqzbjwh.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163tksbpnxk.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163uaavozwh.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163drccmjrl.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163nkqccccr.html

[S35] C++：map
来源：http://www.aibaodan.cn/163cexkuacl.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163czqzjktw.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163kpbbruph.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163yuejgbnh.html

[S37] C++：set
来源：http://www.xuanzx.com/163hpyvxpah.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163ebtdqcby.html

[S38] C++：排序
来源：http://www.sxryk.cn/163zskicsaj.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163vacdwlmv.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163rlflqels.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163mzcanxeo.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163gmkkcfyf.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163neiopjhk.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163zomfzxkr.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163mcpjbbeo.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163gjbhuakm.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163yodpiesm.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163zypzsjls.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163ywbotxnn.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163ofddkrmm.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163qrdfpmrg.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163nkhquclp.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163fhqqrugq.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163qvhpjlma.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163hxgfyyku.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163ntrbtukc.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163esxptaas.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163jqzssrms.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163nfbrkztk.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163idadpuaw.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163btueftfd.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163ilpdzmmf.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163mmnocluq.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163dmifcwjs.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163gnkaqsys.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163xpcsadtu.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163blknhnlq.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163vehtnywb.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163lwldmyyo.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163rdrbjowg.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163uosjaptr.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163tevaafex.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163eeubcqyc.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163bqlmaxxo.html

[S56] C++：optional
来源：http://www.xuanzx.com/163pauhacvi.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163gffdzqqs.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163ceiijyvl.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163llrntulw.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163zfrgoyyu.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163hifygdsa.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163qdzjecpy.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163ublnlmnb.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163ewrfbbuk.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163mqndqxca.html

================================================================================
来源：http://www.sxryk.cn/163coiqhstz.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163aoavyzca.html

================================================================================
来源：http://www.sxryk.cn/163bhmholrd.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163uhoeadkk.html

println("Hello")
来源：http://www.sxryk.cn/163yietaxyb.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163mftvhglh.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163alxixgah.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163mjmkdwmg.html

"值: $b"
来源：http://www.aibaodan.cn/163skdjbrbc.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163zffelcej.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163kvpguagt.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163mnnogfiy.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163ugabzagq.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163mfamzmye.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163vwuwdndo.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163mkwphggk.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163hvfnrviv.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163sdnovjnd.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163gzzaxznk.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163pqrnbyws.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163pjeprtzd.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163yevnisls.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163vpoibqjt.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163thvtznjy.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163xlkqhdbk.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163utxuatuo.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163rlqlznhk.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163gjuudrpr.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163kgslovil.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163nntpxgru.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163sziawmnx.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163emmrohvg.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163pzenhamq.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163fzebznll.html

print("Hello")
来源：http://www.aibaodan.cn/163qxoxogjj.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163lfoskdib.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163qfukvovj.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163xbxftnmv.html

"值: \(b)"
来源：http://www.aibaodan.cn/163bhtxwttq.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163fdiuraic.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163rgpcjlls.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163tzhphvlm.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163xodeozwr.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163dpiyhtdb.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163zipdguep.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163jxugfrpr.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163hsdaltlh.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163afmqdklw.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163srojykau.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163tckaeuqa.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163bklpyjdn.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163boufedqh.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163yycpygzt.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163fobzvslq.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163mvzkaiob.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163qvqzxgan.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163vnifaeao.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163oxakmztp.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163qstkgbvx.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163gncsiaaa.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163xyxdnksa.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163tyuqjmkc.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163qlbovyks.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163ywmhlygh.html

print("Hello")
来源：http://www.aibaodan.cn/163jdyodvwd.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163dzuswjsg.html

local a = 1
来源：http://www.xuanzx.com/163mafhksha.html


<!-- 参考信息 -->