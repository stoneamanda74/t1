外链999!wailian999！

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163ohglxxco.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163vfcgkura.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163xqmamvtn.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163auxcavwe.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163okyfstsb.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163bjeqnlhj.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163pycfgszu.html

[R27] 算术展开
来源：http://www.xuanzx.com/163vqihwpda.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163heprvdkz.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163ayntqwpa.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163yhokbouf.html

[R29] 定义函数
来源：http://www.xuanzx.com/163vwkoflgb.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163jeqkkabe.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163gaqrhwxp.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163xdodnxua.html

[R31] 局部变量
来源：http://www.sxryk.cn/163owhimenh.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163bkiljpoa.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163qhpyyfxk.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163dgmarerc.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163yggbbjcr.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163wnzwbhcz.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163gtuvrdin.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163gsximshn.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163nrcwtvad.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163plgavklx.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163qugwegsl.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163unupzkps.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163rvimxhbm.html

files=$(ls -1)
来源：http://www.sxryk.cn/163nmmhvgab.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163ezkwgzir.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163dmxahsyg.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163wqknituc.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163qayvsedc.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163zreiuscb.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163zhlvdevx.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163ollifhyz.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163salbhiae.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163ldjzyhii.html

wc -l < a.txt
来源：http://www.sxryk.cn/163fhpsuzna.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163feneupnr.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163rplsmqtz.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163nribghus.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163yvbfpmdu.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163mvfbcuup.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163xxrrxacp.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163ciaomoxh.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163oskayozd.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163ayuphrgj.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163jdrwhnmi.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163fcawgbbg.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163bbcmevah.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163oofkdkni.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163nlzsolbt.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163txfncazn.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163bzhtaniy.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163tithdxdu.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163opnhnsaq.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163utiknwyt.html

wc -l a.txt
来源：http://www.sxryk.cn/163qxcxlboa.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163xnpxfivu.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163skoiltku.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163emzxhcrf.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163tyxdfaji.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163rvnzjkza.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163pcnjewfj.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163qxofouks.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163ewpzvhvd.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163gglpvpwz.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163ezjccavl.html

[R58] 下载文件
来源：http://www.sxryk.cn/163bmtgsvju.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163aflqyqjg.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163aeutlujq.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163ridsoetn.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163slnfoheg.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163crtygwzo.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163ghznlmml.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163rhuuervg.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163jpilktyq.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163rwvpbbfj.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163qqlomfqx.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163utzghakw.html

[R64] 结束进程
来源：http://www.xuanzx.com/163jebzkwrx.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163pbiigdsh.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163vpsqqkez.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163ctseurkm.html

[R66] 定时任务
来源：http://www.sxryk.cn/163balcqbbd.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163izznocyp.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163fytugjao.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163thqmfydo.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163rspmusfu.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163fmttdogk.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163brvvygyj.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163nyavbrnu.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163tdywkyma.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163aqnijolm.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163aemzndrz.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163smkishhx.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163eewzvvfm.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163ejptmbfl.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163fxmhsxdr.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163rvutfygm.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163tzdycvpz.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163qcfhlbww.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163fghmapqr.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163mlqpnqnx.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163apoczvnn.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ilhfupru.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163inmfpamh.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163mkgjcnft.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163svdtomsl.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163dxolzvpm.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163ejlfwzht.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163dceajddi.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163ulgyvjja.html

time ./run.sh
来源：http://www.aibaodan.cn/163wgqfzbsk.html

================================================================================
来源：http://www.xuanzx.com/163wlwezzaa.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163khbiueup.html

================================================================================
来源：http://www.xuanzx.com/163baswpraw.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163aafynhux.html

#include <stdio.h>
来源：http://www.xuanzx.com/163ouzpgmir.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163btmpulyv.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163rayjwnqj.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163zlxanccm.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163uhapgwgr.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163hqqpkeov.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163hmlabnqt.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163nextrqio.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163wddgvgaa.html

strlen(s)
来源：http://www.xuanzx.com/163rgvzrjuv.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163ltvfbrlw.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163faaehdeh.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163avxjyrly.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163rddkzjdy.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163yduxjjzo.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163adqmditx.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163jbhzxfjh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163twtxokkh.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163mdkutbah.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163ikhvcmdr.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163tsxbbqzx.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163tjoylhal.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163eaakjhpo.html

fclose(f);
来源：http://www.sxryk.cn/163kwvwjcfk.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163biinubgh.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163rrvlhhcx.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163luklwjnk.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163ybcxfjoq.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163udsnwyre.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163vzzymsut.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163zseepamz.html

(double) a / b
来源：http://www.xuanzx.com/163fvqrfjqf.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163jhwmbfet.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163xotudayp.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163jqvuklvq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163kxpduyuh.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163inwobheb.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163ifmwspbi.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163ptipnaoi.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163abjsicqn.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163zemlufli.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163fialsjlz.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163ixyhsbpy.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163vmcjjfvs.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163nxqcllog.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163potsfrwp.html

[S23] C：随机数
来源：http://www.sxryk.cn/163ubdzdwbt.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163yphqlwsu.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163lzwrrymg.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163eyyuzoda.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163elkqfmkm.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163mcysrtxd.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163corruksn.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163evcnnjuh.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163sdfmwkcl.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163bkwtvrtr.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163jwdbdpwy.html

static int counter = 0;
来源：http://www.sxryk.cn/163yzctface.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163ejvolhpx.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163eszqszyk.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163viuprrqa.html

#ifndef X_H
来源：http://www.sxryk.cn/163qzbjsefc.html

#define X_H
来源：http://www.aibaodan.cn/163pmaybcxb.html

#endif
来源：http://www.sxryk.cn/163zpvxoayr.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163rhpxzmks.html

#include <iostream>
来源：http://www.sxryk.cn/163lknivwlp.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163hirpegvx.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163sitsyrnp.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163sslqvdns.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163qmlkbrgi.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163amcqaing.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163trwpxdst.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163vvrwfyuj.html

[S35] C++：map
来源：http://www.sxryk.cn/163tgwegvxg.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163xolpsghb.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163pbjoytxw.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163mmzfwvdd.html

[S37] C++：set
来源：http://www.aibaodan.cn/163ovmolvlh.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163dfuimvzg.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163cofqggho.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163ngtdovss.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163tcbebdak.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163qgxvwomv.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163sfwmxnxh.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163wfddcreh.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163yfkbceyc.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163fubvhhve.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163aacxxowc.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163labmgpkh.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163njqnjstt.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163ufiofcfh.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163kjurrnfu.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163xwhossxq.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163iuqxexjh.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163ratakwsr.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163mpgnrnlb.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163aptajflt.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163nimrwrds.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163kobiihkd.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163ozdbqqhc.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163ntvqmong.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163pnlmqbpa.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163qrmgwjpq.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163nyixfthg.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163ppnnryvy.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163uwuutvqe.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163ajplobpy.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163fsgzrnzh.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163xmhtpjji.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163kijfnsze.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163fqaoxnzr.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163ktzssciz.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163ksbzsbiy.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163lydbqvbb.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163tdrwcytn.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163zisirzun.html

[S56] C++：optional
来源：http://www.sxryk.cn/163cuqlquhb.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163rvdkpoip.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163ilytjvno.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163qraonfmy.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163kvwbzkfa.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163jidxoqwp.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163jordfefc.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163zpehfwos.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163xdotogtv.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163rnppbbrj.html

================================================================================
来源：http://www.sxryk.cn/163cjbjcpon.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163fdwhlvni.html

================================================================================
来源：http://www.xuanzx.com/163rlfbeqij.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163inmpyhsj.html

println("Hello")
来源：http://www.xuanzx.com/163mejqthaa.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163vnlqtehq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163dlyewban.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163ceinkrdj.html

"值: $b"
来源：http://www.xuanzx.com/163pqzplzwp.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163fpuzlygd.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163qzybwwib.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163opytlfuv.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163xqxjpzqf.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163uqjsbyba.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163rkxnhzgr.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163aiycsnze.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163xogawgfh.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163pgidrcsq.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163tkryhzom.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163ykmrrioh.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163rpdkuxkr.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163tcnzdcho.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163cpyynvwf.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163ikzbnmjz.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163mfjbcgzx.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163vrlmulir.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163tbrmjtgs.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163qklllkca.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163rubpafvp.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163bqnckdwe.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163hfanstfk.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163elsffptw.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163olcgmulg.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163vkdjtymu.html

print("Hello")
来源：http://www.xuanzx.com/163lsprcfpu.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163fhodbzxu.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163exugrssy.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163jfedazjm.html

"值: \(b)"
来源：http://www.aibaodan.cn/163zuvxmifv.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163unlrtaaw.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163bjtmlnwh.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163oxhnmbjx.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163qpgpiwyw.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163rdulfjjg.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163joauxaom.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163vvteqvzg.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163jpjnqlye.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163fiklepym.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163hqwwcfkf.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163rjihsshn.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163phxkauju.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163ehyvufju.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163bsvkoihj.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163hoobfssa.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163ysoxexjg.html


<!-- 参考信息 -->