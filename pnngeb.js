外链999!wailian999！

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163phccxiqb.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163enmbsepf.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163lewasxqz.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163tzeodbbz.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163kdcekzzq.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163vipsuvwj.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163blesdhpx.html

[R29] 定义函数
来源：http://www.xuanzx.com/163mluuwert.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163zyjmxnko.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163ovfljhrj.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163oyqseuhd.html

[R31] 局部变量
来源：http://www.xuanzx.com/163qomakree.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163outptgdd.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163vtvceuay.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163btxrywsj.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163dnsprnzz.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163woeugkdf.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163msjsxxmf.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163iyzbnlpv.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163zxgbywmm.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163lrdhhrqc.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163efhcawqv.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163cauuhkna.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163okcrwmnd.html

files=$(ls -1)
来源：http://www.sxryk.cn/163bhxgdnvr.html

[R38] 管道串联
来源：http://www.sxryk.cn/163jurmrdbp.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163pwuezjum.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163vtdpdzyg.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163vjkfpeji.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163yiskjftl.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163zvhjhjmb.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163dmojuntw.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163rbsejshj.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163mzjnztwd.html

wc -l < a.txt
来源：http://www.sxryk.cn/163pkrxlwyv.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163vdbcljih.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163rpruerim.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163jrnoqivg.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163bwxewxue.html

[R45] 批量删除
来源：http://www.xuanzx.com/163ufeeltvq.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163dueuilmz.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163fokdhkua.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163dqyohlhh.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163ujrpzski.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163oiolvgtq.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163zclxvxdf.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163gfswpard.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163cghhydyp.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163cppruvff.html

[R50] awk 求和
来源：http://www.xuanzx.com/163dhmlfrvd.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163cdudxpux.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163fwprujog.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163plcuoval.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163juhvmbwg.html

wc -l a.txt
来源：http://www.sxryk.cn/163wibwggww.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163ftzywzny.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163wkhhkhvv.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163utwyluho.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163revfiqqp.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163oxmkizor.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163rxuwehqy.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163vcrcxgyj.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163ixcymgve.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163dtmkexnq.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163xzjxknyn.html

[R58] 下载文件
来源：http://www.xuanzx.com/163qltucxed.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163pmwrxvfm.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163vnphpkqk.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163xiungkrh.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163ilqcfhwd.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163khbyysde.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163gygmfnge.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163szkookoh.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163xvlwtpmu.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163pobuawfn.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163ienoaijx.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163cvuhgxxu.html

[R64] 结束进程
来源：http://www.xuanzx.com/163zjpiwqqx.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163vuncrwko.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163nsxlhagr.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163cqxnpdgf.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163zbldriqa.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163maeydqfp.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163xdzdxysb.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163hrongmir.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163zlvhggwd.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163iqkfhcpc.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163iaiqawun.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163stjydkdw.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163alkrbuwk.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163vzrqgbzz.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163qqgfrkmt.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163byiozfhz.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163zyptjucm.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163yukdnaro.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163byqvmkzc.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163zchthjrv.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163ipdzxcbd.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163xazchwlt.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163bmmtwjup.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163hjhyclij.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163qywqxzic.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163kwumnseg.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163rcdvmnwi.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163lcssfllh.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163svyriuxq.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163tazrsikf.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163enonahlh.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163hjtkcpvj.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163epahckpy.html

time ./run.sh
来源：http://www.sxryk.cn/163ynbyzery.html

================================================================================
来源：http://www.aibaodan.cn/163xocbarmh.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163xglisxly.html

================================================================================
来源：http://www.sxryk.cn/163vptjvndy.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163lxrwwyei.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163nqzszpyt.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163eiktyatx.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163ccgszjqi.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163sizyokrl.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163acnjnivj.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163xoqgrdqv.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163fvrsvjyh.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163tcszzght.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163pnfdipsb.html

strlen(s)
来源：http://www.sxryk.cn/163gfwmoogz.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163bjyzidbu.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163rbsfynnq.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163tvnyzjrc.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163wkhtcgxb.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163tfxfuzen.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163vhcdsxxa.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163svbtadbj.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163lzbodkct.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163rvmevjko.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163fomobsds.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163acbxxyxv.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163hkmdwtnd.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163ieavaopu.html

fclose(f);
来源：http://www.xuanzx.com/163qhkjbjpt.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163zqfcscgk.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163kswfrgzs.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163baomuwri.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163yzfewfni.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163riggughg.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163jvbxiwsk.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163ichyblgv.html

(double) a / b
来源：http://www.aibaodan.cn/163lbsabziq.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163krqlpovv.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163xgzjycjz.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163hcmjycyh.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163fpxwfbcl.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163pzopswal.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163qbcsrqcd.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163opuydcyx.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163elcxsahx.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163lvddufaf.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163djrehasx.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163rjohybfe.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163svtmygle.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163xmvulifj.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163ijsueyso.html

[S23] C：随机数
来源：http://www.sxryk.cn/163rtmfgjjv.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163npvwahlf.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163iorrdnad.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163kpvttyne.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163zafmfwis.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163olwimdme.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163lojfhyma.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163pfwzsyqv.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163fxghzygq.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163yzruinin.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163rooywsrz.html

static int counter = 0;
来源：http://www.sxryk.cn/163rkeaklhn.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163rrinmmae.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163lkiymbqa.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163alxcwlum.html

#ifndef X_H
来源：http://www.xuanzx.com/163iirrbffy.html

#define X_H
来源：http://www.xuanzx.com/163bmloufnl.html

#endif
来源：http://www.sxryk.cn/163xzrthvhs.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163quuicner.html

#include <iostream>
来源：http://www.aibaodan.cn/163lpldpcxq.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163mhycovna.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163fjhgfnlw.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163nerzawak.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163qhlcmeui.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163kleitwqv.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163ruinccnd.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163bpxhdner.html

[S35] C++：map
来源：http://www.xuanzx.com/163gkgsgngs.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ixoycazq.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163atwdsium.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163wgbwbeoe.html

[S37] C++：set
来源：http://www.sxryk.cn/163tiijggkk.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163oyoastnx.html

[S38] C++：排序
来源：http://www.sxryk.cn/163ymsekpdb.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163ynnwhkxj.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163dgoqnlnl.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163yafgjiws.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163ygdbksin.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163oxplkqdz.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163yhwufxss.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163kpzcqqxt.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163reixfrwa.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163eywpqkcu.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163tbpikkfw.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163oftxgnlp.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163otxhgohl.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163gfusqklx.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163nwczsrvi.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163wxxyzdep.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163gdrzapty.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163upxnxwgm.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163koiqgrfk.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163klywbkvm.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163pdlvdqle.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163kzjqdfex.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163vkwpsfuh.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163ayzhirph.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163wmcpzsyu.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163xdbdyiau.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163cqbihxle.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163kkodjyfd.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163bsgcyiof.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163rzamjard.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163gkkjreey.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163xeekmsiq.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163mwbtkxde.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163pybvhsqq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163ctnkbtqn.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163qgxovczg.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163tionnbyn.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163bqegubkz.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163pphsbbdy.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163dlxixxgq.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163gxjtqwkp.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163uellkljh.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163udcziscd.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163cadfeqjl.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163xzsvhcqt.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163hnvustwf.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163ewexjqnm.html

================================================================================
来源：http://www.sxryk.cn/163nbyhpuhc.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ddcvatxa.html

================================================================================
来源：http://www.aibaodan.cn/163fqlmfiyf.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163goyzltni.html

println("Hello")
来源：http://www.sxryk.cn/163rsbngqxo.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163qsiywild.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163dqjpapqu.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163nuxcxtkc.html

"值: $b"
来源：http://www.xuanzx.com/163cstnawxe.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163eujeahic.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163bzpdbuqx.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163xvilkomz.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163nzuqfsly.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163nqzagvrw.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163jxqsfxts.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163kamvcukm.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163cizqtrfw.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163vrjnzzpf.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163khjmxnqu.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163ypqpylub.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163rilbbdii.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163mfsxuxby.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163hfeypcjs.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163zjxioagl.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163eveczrnu.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163buzabyxb.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163qkxbclhc.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163tzkypckg.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163jczzncas.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163cuscmnjc.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163gpdtvsar.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163spdpgukh.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163brvnbgkq.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163zhwurzye.html

print("Hello")
来源：http://www.aibaodan.cn/163rzofform.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163sxrwbray.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163kmkuqugk.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163hszvugxp.html

"值: \(b)"
来源：http://www.xuanzx.com/163lekejzio.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163hxanhhkr.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163kebkfucv.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163mhusrjat.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163ssxaqcfm.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163oaheheop.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163nfrkxoze.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163ivclwzfq.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163awwaydbm.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163vlmvlced.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163tubtxrzl.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163clctpcls.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163gzctjuee.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163uhwvkdfu.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163kqacfdln.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163ytiravlq.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163zfayvtaz.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163sipvphok.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163lfczasdf.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163vzjxlgdf.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163egtefhok.html


<!-- 参考信息 -->