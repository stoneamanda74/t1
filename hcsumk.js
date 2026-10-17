外链999!wailian999！

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163knqbjtkm.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163afyabbtm.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163amdvrsaq.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163brhaluzg.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163ovhigyeo.html

[R26] 命令替换
来源：http://www.sxryk.cn/163bbjvqmsf.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163kkyjgzqj.html

[R27] 算术展开
来源：http://www.xuanzx.com/163vskeustm.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163mphuhsse.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163fvbyyjiq.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163dvdktjft.html

[R29] 定义函数
来源：http://www.xuanzx.com/163dcxsoels.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163saziyxcj.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163nzazbomj.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163mwidnqow.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163teardeah.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163hxabmhhe.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163bhegnayc.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163vtqthmha.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163unciwaxp.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163cgmrlgnm.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163lpqwxoef.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163qibskeeo.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163zepmisof.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163miaoftor.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163bfsjcpxn.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163bsibaenu.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163pihiprup.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163ewdpngbj.html

[R38] 管道串联
来源：http://www.sxryk.cn/163knrdwbvs.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163ughiyhwd.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163biioevsh.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163ihpkbduw.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163cptfaaai.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163sxkyqsee.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163fmnrwdnk.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163vgwniyxr.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163szuvfvaa.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ablqxusy.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163mfjogdgm.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163wvjbmzhg.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163bspaudst.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163ksfcsbux.html

[R45] 批量删除
来源：http://www.sxryk.cn/163lkckknhr.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163jfhisogq.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163lbcifwhf.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163yztpfjoe.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163ttzduzqq.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163ooowhuyk.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163yeqqjaxt.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163jsehwmot.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163rfksaoku.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163qdsvhhdp.html

[R50] awk 求和
来源：http://www.sxryk.cn/163qjipnxds.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163hjbjjylm.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163hdwutzwf.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163jcxrxiaj.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163krjnahip.html

wc -l a.txt
来源：http://www.sxryk.cn/163zujxswqk.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163qldtaftq.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163qwqcwyzo.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163ualvnfmu.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163qnmqxopt.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163nzdcdtfq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163urhlbeuq.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163xrzddpzh.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163zgwwndpa.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163vedzsxup.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163yiiyweds.html

[R58] 下载文件
来源：http://www.xuanzx.com/163ujxfakvt.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163yfxreoex.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163iddchbzq.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163vwcnqyzc.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163byjsheqw.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163iqejalxy.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163rjrsnjdx.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163eqpzxbfy.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163reiibatt.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163guxjikpe.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163pceckeiz.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163oycseaoq.html

[R64] 结束进程
来源：http://www.sxryk.cn/163rgucpxcq.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163djlssrdp.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163mkfakial.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163xcqvptvg.html

[R66] 定时任务
来源：http://www.sxryk.cn/163vlbmofiz.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163cqvnhyab.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163kdtyardk.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163zcxbwswd.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163iadppedl.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163ghgyxsot.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163glbbpfok.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163oumdjwbg.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163itgfjhba.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163sgexuouu.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163rjrqthev.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163wjvbgyvq.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163gdyeohmk.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163ngmvqtfp.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163adccphpi.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163intowigl.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163hvjwlhzx.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163ylivznzs.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163ugggmpgt.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163dfcoxvsx.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163xphzibdb.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163pvfwjzvf.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163ctahgcir.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163algdxeim.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163ikxnifcx.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163yrczuiep.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163qadktqnd.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163deoeazpk.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163vizfaeef.html

time ./run.sh
来源：http://www.sxryk.cn/163afljbdjy.html

================================================================================
来源：http://www.sxryk.cn/163nqgdwikr.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163vgvkslzi.html

================================================================================
来源：http://www.aibaodan.cn/163okwdlcil.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163thoayfuf.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163kvhdbyil.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163qzjehgxp.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163usvjajbx.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163kyzogrfz.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163pococzmu.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163ughjpaim.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163wgphfeym.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163kzgpklpt.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163aowdkwsc.html

strlen(s)
来源：http://www.xuanzx.com/163jyvztgxd.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163ffojspgd.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163npihxfag.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163wffqcday.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163jyhclrxr.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163qmrkkhmw.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163coavompx.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163nqcashey.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163ljdpcwim.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163pyyvbftk.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163thozitso.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163nhtequlh.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163ghmruzje.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163bonfizml.html

fclose(f);
来源：http://www.sxryk.cn/163zfdvnopc.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163cckgqocf.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163jzjctyrf.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163apyyifcb.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163blobnggi.html

[S14] C：枚举
来源：http://www.sxryk.cn/163nrhfnili.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163hqihcthz.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ovqonpfu.html

(double) a / b
来源：http://www.xuanzx.com/163bxpwtlgv.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163dgpidcgs.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163hkqwotsi.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163kbhymcxg.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163jabomqsp.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163amkwbzul.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163djnqzqso.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163sdlxueaz.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163odegxbyf.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163ugdhdpxt.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163slpodjff.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163lcckyxnj.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163giwjlmqh.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163fkjiacih.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163vbieclvh.html

[S23] C：随机数
来源：http://www.sxryk.cn/163exrrhhhd.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163zxbxvaez.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163pczwoube.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163wvrbeynv.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163ibzqactv.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163fqpyzjah.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163wbvwemuy.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163xrkezbms.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163kgjamebq.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163khuapslb.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163ogwmkret.html

static int counter = 0;
来源：http://www.xuanzx.com/163lneaicxw.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163uujzojps.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163uubplmqy.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163qbvixniy.html

#ifndef X_H
来源：http://www.sxryk.cn/163sxcguhsd.html

#define X_H
来源：http://www.sxryk.cn/163kqlfbczb.html

#endif
来源：http://www.sxryk.cn/163pjkhickv.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163ljhamdcf.html

#include <iostream>
来源：http://www.sxryk.cn/163uwjdcrmj.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163avhqfgce.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163xedldevh.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163rrcqfrol.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163lpxdmwfq.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163yttmwyhw.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163weroehld.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163belmrzdi.html

[S35] C++：map
来源：http://www.xuanzx.com/163qmxihvht.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163vyejommg.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163ntbsajeq.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163woojxcef.html

[S37] C++：set
来源：http://www.aibaodan.cn/163rwpbvast.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163vzrjqfdn.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163phalbalc.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163iberwsow.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163tgusgbvo.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163poncqoow.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163jueyuwnh.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163cvyzisyu.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163ewxuxkdp.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163igszetov.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163laumftzf.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163gaykkgri.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163manexbrt.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163yspnvhik.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163wxfojtgl.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163xeysvfmd.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163qnbevjtz.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163iikdhhhd.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163jyfajapl.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163ipettgrn.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163iuvgyjls.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163uwxcsasf.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163lfvvykne.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163dwjzplpk.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163oooxkncj.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163lpctsktf.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163ubadlmcu.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163mtephgum.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163kjkbxkpq.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163uvruebwp.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163wnmtxdkj.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163dbwdzdfq.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163acbznemy.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163nnetpibf.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163beheihvn.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163owtvsnwq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163knukilpf.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163uufdjetp.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163mvpsdgaq.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163tgaqlnas.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163jzaacjpn.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163ihwkryac.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163vsudklyl.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163lcujixbv.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163lauqmnka.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163pqgsequz.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163zhqrxiuf.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163lfyxwnnn.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163ikljixmw.html

================================================================================
来源：http://www.aibaodan.cn/163ryevsykb.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163deyocijf.html

================================================================================
来源：http://www.xuanzx.com/163jcgoltyi.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163xpkxtfek.html

println("Hello")
来源：http://www.aibaodan.cn/163juvrxsbq.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163fbwmxubs.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163fvvaluhs.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163uqpnigch.html

"值: $b"
来源：http://www.aibaodan.cn/163lzbrwjca.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163pxsdsdbf.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163kwsihyvq.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163grcyctfj.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163yutsacri.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163kilhyjfu.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163dudxulwo.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163mdwcluuv.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163ikmjwwiz.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163nasplsej.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163lixlizhn.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163djtaxipu.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163hgiwtbra.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163bqdrmzhy.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163fcqciazz.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163uumgfhbn.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163klqlwodx.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163ffukhujl.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163kbfoupxq.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163xoefvgdn.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163ksrtupkw.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163pgxllepl.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163mikdkjsc.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163ryizqapo.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163lmvkgfwa.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163dbtycvgd.html

print("Hello")
来源：http://www.xuanzx.com/163aplxpzwm.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163twudfjpg.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163yjlybdlu.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163dbntxrks.html

"值: \(b)"
来源：http://www.aibaodan.cn/163nncmyokl.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163twmiumxn.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163ojunozrk.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163dhjtvxhr.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163pvhtoney.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163kcgrkgmu.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163mosofrow.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163dlhdihpe.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163uaikqloi.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163tozzgexv.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163lkjksjkb.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163tbgwouub.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163aaiqysse.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163dktdulsa.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163jayhakpg.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163atokmuif.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163pgorxzvh.html


<!-- 参考信息 -->