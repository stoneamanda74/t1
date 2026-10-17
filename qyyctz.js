外链999!wailian999！

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163vrmazkoq.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163mylmwypl.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163ipvfjzfi.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163kzxdmish.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163gvkubuee.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163vjujdrti.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163ncwdjngz.html

[R27] 算术展开
来源：http://www.sxryk.cn/163fnvcqglb.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163gkoxwvfr.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163mndovlxd.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163cglnfwhx.html

[R29] 定义函数
来源：http://www.sxryk.cn/163fzopytda.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163wbjkgmwx.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163gkarnpal.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163bxlbkggo.html

[R31] 局部变量
来源：http://www.sxryk.cn/163awkkyoyn.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163hiwzifbw.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163usyteusy.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163adswrvzv.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163gjgdrohj.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163mnmoypns.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163nzlmdajn.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163rakhdkxc.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163kybczsll.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163iqjdyvuv.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163dmuceadp.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163ieresypm.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163qzfbkjfa.html

files=$(ls -1)
来源：http://www.sxryk.cn/163jzawhnui.html

[R38] 管道串联
来源：http://www.xuanzx.com/163fwmxpwfu.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163rogfqffl.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163hcjqgrna.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163dticgpvl.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163ufohksfv.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163raftbkzm.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163nrmhamhs.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163psufrxot.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163mayzseyt.html

wc -l < a.txt
来源：http://www.sxryk.cn/163ofhrtyya.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163rfcvwiec.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163pthkvvcf.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163qcirnihd.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163bkshmhjg.html

[R45] 批量删除
来源：http://www.sxryk.cn/163qkbnadrb.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163yktobvfg.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163hbyoonab.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163uvpgehnd.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163mbjkvhjk.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163yicvpwmr.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163yfjlsxia.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163cmhqrasj.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163bxfdqosm.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163besdmouj.html

[R50] awk 求和
来源：http://www.sxryk.cn/163nfqfbune.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163spxwtfrt.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163iyqvmzzr.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163kffctbxu.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163xpuhnbxp.html

wc -l a.txt
来源：http://www.sxryk.cn/163zjxlzojy.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163njtixooc.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163acmrlofh.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163nyblanqz.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163zzyazxnk.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163jpbfnkqh.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163pnscbzjc.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163cgqwawqz.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163arvayepw.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163bqffpusb.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163sierffwi.html

[R58] 下载文件
来源：http://www.sxryk.cn/163knkvyzpl.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163easnilvs.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163gtisvaye.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163cpypxdgf.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163lkgrvmuf.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163jvelpvmf.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163osdapxqu.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163kshtxyms.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163sothvqls.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163yuwwmytm.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163omrhcccp.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163yhjxcmog.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163vhqqbcej.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163bfqzmwsw.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163zunjzrvl.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163aujnrfsn.html

[R66] 定时任务
来源：http://www.xuanzx.com/163nyrhftbv.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163nyizblgn.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163vllvuqdm.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163hdmlwqcf.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163qxglpwab.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163tszpdizb.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163owqnxeeg.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163uccjjbnq.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163snupeuot.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163whyfwlzp.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163gbnoiloz.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163pxzzqdfl.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163uezztqnw.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163abrwngaq.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163jxrvmsjy.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163quxubwlh.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163vvfxsgms.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163evfciale.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163ftaqxfpd.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163vqrhtdwd.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163fmdqnsue.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163tyxodyzp.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163jhjvdekj.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163qunucwke.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163hsmgrmho.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163xgiroxju.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163gltcrppq.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163zzayxwst.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163mxmcgmqd.html

time ./run.sh
来源：http://www.sxryk.cn/163gggirnws.html

================================================================================
来源：http://www.xuanzx.com/163wnqlmhlt.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163lsuhtrya.html

================================================================================
来源：http://www.aibaodan.cn/163qpantkmg.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163bxxhddzr.html

#include <stdio.h>
来源：http://www.xuanzx.com/163xasrarcr.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163rkouynzg.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163qpztjqjv.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163dkpyjgov.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163rugruklj.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163txqhutsi.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163dfepggay.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163dbpbfizv.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163dslthrcw.html

strlen(s)
来源：http://www.aibaodan.cn/163koogooog.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163mgiacjgv.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163hgoybipl.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163adamlvyb.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163jqqiinoi.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163yvcsxryf.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163queqsrbp.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163fjlvvkru.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163chzehwqr.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163ptprdekp.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163tvjrftys.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163huqjlokt.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163rgcjnitj.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163xjaumhtj.html

fclose(f);
来源：http://www.sxryk.cn/163nkvvtdzm.html

[S12] C：写文件
来源：http://www.xuanzx.com/163vfwsdpyh.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163uknjxxmz.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163eaensdxb.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163vuqptocs.html

[S14] C：枚举
来源：http://www.sxryk.cn/163tdwhpgzv.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163mxhurtwy.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163ibrgdyex.html

(double) a / b
来源：http://www.xuanzx.com/163ccosivwu.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163stbcqzxw.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163bgwooxyi.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163cehmycki.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163jmcgdqje.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163qfmtgbxd.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163owfhpzub.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163lmrtzgou.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163icdkpwsw.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163lgyptmnz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163hbhtbowi.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163ecfkfeeu.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163eztljsul.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163hmqnlgbm.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163rfhxogqz.html

[S23] C：随机数
来源：http://www.xuanzx.com/163hqcowvtz.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163ypeiauae.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163rwiwtfag.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163dshwsaeh.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163gakhgbni.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163yuwuwmoy.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163qjeulwnp.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163sbfrhyak.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163abdmfikf.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163nmromcft.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163ylbusabb.html

static int counter = 0;
来源：http://www.aibaodan.cn/163gdfmbqbc.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163mtribupu.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163uegkyorf.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163whblazfl.html

#ifndef X_H
来源：http://www.aibaodan.cn/163ephwkexn.html

#define X_H
来源：http://www.aibaodan.cn/163xikmfhnp.html

#endif
来源：http://www.aibaodan.cn/163qnqyekrh.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163qqnsocul.html

#include <iostream>
来源：http://www.xuanzx.com/163ylhsxxwa.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163wpgkjsuc.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163uyspmrqh.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163uecphevh.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163mkvqqxfo.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163spcywqnp.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163fovbucqo.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163pyawzfab.html

[S35] C++：map
来源：http://www.aibaodan.cn/163iqcuombx.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163opqwrmob.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163zedldvzo.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163zfldqjop.html

[S37] C++：set
来源：http://www.sxryk.cn/163dxzgtesc.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163vsaxeprl.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163zonzrsml.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163rhqpweql.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163ujpgarqu.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163hqzhytnu.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163vcnbcuxn.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163ryxvtwfo.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163gwimyawf.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163cmczyzoq.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163lcsuwgyy.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163pkulzmeg.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163jcbtcjiy.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163tfnhwvya.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163xjthalqx.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163afplkfgg.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163epyfhfme.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163dtjlixbe.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163ayskgotm.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163lidoiiab.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163qlwiczsz.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163msrflgje.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163cjzeafzt.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163qcygskyn.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163srdhrjql.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163wwtdnmmd.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163geirfrhy.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163tkcsczgo.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163pqinsiez.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163tnvlnnua.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163xqckllyx.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163vdyqcitr.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163bdcvkhxl.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163fkvcrzfl.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163xzxromho.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163yyuuliyl.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163qslzkddx.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163yznfcqjl.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163ascokmbf.html

[S56] C++：optional
来源：http://www.sxryk.cn/163olnewkxd.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163hqtycfmr.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163ptwaddkh.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163xzgvngud.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163cbauaghm.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163lgwjtebi.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163nvmsunka.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163xxlfubvu.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163qfhqevgu.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163jxortwwz.html

================================================================================
来源：http://www.aibaodan.cn/163yqbhvtdo.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163rbxgxezy.html

================================================================================
来源：http://www.sxryk.cn/163paxdqier.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163cwwhessd.html

println("Hello")
来源：http://www.aibaodan.cn/163sndcerqw.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163nuifrxgq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163jrutyzpf.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163zreeeprk.html

"值: $b"
来源：http://www.xuanzx.com/163bobahzor.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163gtbygotv.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163cwuxcwcq.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163zrorvrnr.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163wtcupetl.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163fryqaoet.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163woiwzwgk.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163ussxgcij.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163luhbsbfa.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163gdcjppjb.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163izolycys.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163kblozakg.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163pobdfukj.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163dsrjseba.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163bffwcqpb.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163bixsrnkc.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163womzyiqk.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163jnaagzyp.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163hiqjpccp.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163yriddmix.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163ujdqimuh.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163wvhughpw.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163fypssuyd.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163zkxedhrs.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163qjebcmxc.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163nmmnhqye.html

print("Hello")
来源：http://www.xuanzx.com/163xwijsctw.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163embtyovr.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163twtxyqby.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163ashpipzn.html

"值: \(b)"
来源：http://www.aibaodan.cn/163oggxieys.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163qevdquju.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163afqzmvks.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163foxseiwd.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163eavgczmh.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163qxifvcxd.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163ngltjhad.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163ahcqlmmf.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163qdzfdfbp.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163dthmnvdt.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163zuyoqjhv.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163kfxhxspz.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163djbnzihx.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163xykedyob.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163yxvsdzcw.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163oqasdudp.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163rxebjjxw.html


<!-- 参考信息 -->