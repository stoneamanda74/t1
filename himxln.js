外链999!wailian999！

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163ctegdtuk.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163auiewdmh.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163xwjqcbou.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163guexirzn.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163mlnpmyyw.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163molyhmcv.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163oajyblmg.html

[R27] 算术展开
来源：http://www.sxryk.cn/163ulvwhenf.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163vngqjmhj.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163sapkkiwm.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163phpjaejf.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163ujdwbous.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163sddxqqwt.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163nfsruhqm.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163dydrkcqd.html

[R31] 局部变量
来源：http://www.xuanzx.com/163xqpjuqsd.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163smbzgnux.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163bwqwccqz.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163uetcomgs.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163hzvdvkbz.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163zcdfbawf.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163lyotmtur.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163dpepydcb.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163fmvfogvz.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163xniaytoe.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163punmrshz.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163mfzyvpru.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163viuuejdq.html

files=$(ls -1)
来源：http://www.xuanzx.com/163otlrcilr.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163tyfwfzgh.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163sxpcslhe.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163qkgafrdt.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163saqrpgkj.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163ofzcpikq.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163ejbxqwew.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163snpjozlv.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163oeomgfrw.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163hckqmfch.html

wc -l < a.txt
来源：http://www.xuanzx.com/163lvoaffuz.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163bygbdhhq.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163kdqdvepu.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163bxfampov.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163ipvobsxs.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163pxjgsjvy.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163bcgkqxbx.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163zprnqgpb.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163kbysfvbn.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163yvudnokf.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163grhfbcwf.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163dtaksnkk.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163xiutujrl.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163urgiwtbb.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163pfxleaga.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163lxblubjf.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163lgsbykkl.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163ymqakyhb.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163trifxfxp.html

[R52] 统计行数
来源：http://www.sxryk.cn/163eejmhllf.html

wc -l a.txt
来源：http://www.sxryk.cn/163uaidqfkk.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163inxcfinw.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163sjfclmpq.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163wtfmlktv.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163kysixdwj.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163uryguddi.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163vdmnedhq.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163rttugyot.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163adhmmkuh.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163dfajaujn.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163mckblbrg.html

[R58] 下载文件
来源：http://www.sxryk.cn/163mcapxwer.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163ipafuejv.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163offrrvep.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163jsquhwhk.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163kqqvsdpo.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163mexkoghh.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163jdswhkbl.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163yviposta.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163ayfkadky.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163icglxjsd.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163mzapsexq.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163ftsrrlhj.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163ifqyedug.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163btuyzvgc.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163uelrxweo.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163ydhhhvfb.html

[R66] 定时任务
来源：http://www.xuanzx.com/163tyylahcc.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163dyxfgcih.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163xznxhnyq.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163gqpshwox.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163aiofjvnf.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163nhburdlf.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163qpgodhgd.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163onptmpnz.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163htxkcsln.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163keynpnia.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163mvfcmuwe.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163xdubfdar.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163dkxrzmfk.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163cechmbet.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163zrjfgnuy.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163gujdhybr.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163dzukqijy.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163qlzjxjeq.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163dznrzuzj.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163swbrihfd.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163jpwyuzeu.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163vigdfepf.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163bmuaeems.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163ywjimiqs.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163jjypxouq.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163vovhvmmh.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163gzdpnqzg.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163dthadhpe.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163rkckwxca.html

time ./run.sh
来源：http://www.aibaodan.cn/163kywpytme.html

================================================================================
来源：http://www.aibaodan.cn/163ampfjcnx.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163zzlrevau.html

================================================================================
来源：http://www.xuanzx.com/163cxjsiofa.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163mxfrqema.html

#include <stdio.h>
来源：http://www.sxryk.cn/163onobwuui.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163mjxaigtm.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163rmasilsm.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163whxpucdr.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163swutvlxd.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163qhkmafcs.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163kylohdbk.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163mhbhfxmo.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163doddbfcm.html

strlen(s)
来源：http://www.sxryk.cn/163rygjyfob.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163dzmbclko.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163oqyywdqy.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163dtuxanpp.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163ihioflof.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163rozbzyya.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163ojadbfvm.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163rruklqtm.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163qyomeiod.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163enoelskc.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163cwcrqhoi.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163vtsuzipv.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163mssetphm.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163ubmbftaz.html

fclose(f);
来源：http://www.sxryk.cn/163wisupjeh.html

[S12] C：写文件
来源：http://www.sxryk.cn/163rbhngswa.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163mgsxevpk.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163ftefeeck.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163vmlztjzz.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163xqxaxkyh.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163xgtvetbl.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163vwmrjwov.html

(double) a / b
来源：http://www.aibaodan.cn/163dmughtvw.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163mdgouxzg.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163rjvhwanh.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163zcuvvhcb.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163mbnrqanb.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163lhubgtgm.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163hmruknct.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163fhnxkjdq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163oqduuwru.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163qnnwnjri.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163trkmseuj.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163knhhsgtn.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163ywbcudtp.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163emkikuwz.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163feyketzg.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163fozyjvfd.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163txzvjfhf.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163rkjtwdfs.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163uhgvylfx.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163ftdqxsho.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163ufzuqzdx.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163rkdrgtbg.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163gjegclhe.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163diqknpka.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163ntdvzpuu.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163pitdcfqe.html

static int counter = 0;
来源：http://www.aibaodan.cn/163qcpsipnt.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163ofvrcded.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163bgutsfpg.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163cwiqabix.html

#ifndef X_H
来源：http://www.sxryk.cn/163hptiiwzp.html

#define X_H
来源：http://www.xuanzx.com/163qdgmnsln.html

#endif
来源：http://www.xuanzx.com/163sykidrra.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163xkdtjqau.html

#include <iostream>
来源：http://www.xuanzx.com/163prhxguth.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163skmchkgt.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163ryquyaic.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163zkodjled.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163dddeacwq.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163onxebccu.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163tvsbrglg.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163adorwczt.html

[S35] C++：map
来源：http://www.aibaodan.cn/163vsbihqne.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163wtbvtejo.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163rqpuszip.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163oklztuky.html

[S37] C++：set
来源：http://www.sxryk.cn/163ybkevhvx.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163wienfdpx.html

[S38] C++：排序
来源：http://www.sxryk.cn/163xduskdha.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163pchamllp.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163mprhmzjx.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163fgzmtqwz.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163dvmqdwte.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163ynyuxlei.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163ahtsmlse.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163shcjeedw.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163ffpkkjzq.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163ybepfaal.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163fqbbrgrm.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163vkjjdwkv.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163datckuvy.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163kuzseotn.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163sxtcntya.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163vpwamaoy.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163yyyxcrzh.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163zicoukcl.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163smnengzp.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163anndxhup.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163mcxnqmvg.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163nibhavzi.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163docaegqb.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163ylqdkbfu.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163cxukwldf.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163rdejsxzs.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163ksrftzhs.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163oreuubpd.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163sjppatsf.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163ixqjczhl.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163cibhupmw.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163wershlto.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163sgxvekyq.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163osmsitty.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163dzhqrtwg.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163sboirgot.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163qixopary.html

[S56] C++：optional
来源：http://www.xuanzx.com/163ywmvwnpt.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163ysnyxhcv.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163vtfjwaak.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163gpuudbyq.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163zqyzdduu.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163qsezxlnl.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163aiooipau.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163kojlsusu.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163lolxbuym.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163ahylvjqo.html

================================================================================
来源：http://www.aibaodan.cn/163knnpeeiu.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163wzpgodfy.html

================================================================================
来源：http://www.xuanzx.com/163ytxfocxs.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163fpsmwccb.html

println("Hello")
来源：http://www.aibaodan.cn/163cexkhwzk.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163jrpzkuip.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163mzxglbbx.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163rwedwgif.html

"值: $b"
来源：http://www.sxryk.cn/163ywvugcce.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163ikqmmkau.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163pyweergg.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163snwsflsu.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163qnetjwdi.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163yoljccdl.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163vfqiixfv.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163kdvxjakf.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163wlcwecct.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163etdbyxml.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163ibnixhhb.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163ticflauw.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163mrbzdnka.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163jzxsabet.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163olghhhry.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163vmuanwyg.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163ziutqhut.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163uoggumkz.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163kfzgfsfj.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163wvdlczhe.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163biyxwfmm.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163gkprbpet.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163vmbdairq.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163zzhtncqu.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163bjzscqse.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163kadurjbu.html

print("Hello")
来源：http://www.xuanzx.com/163diszpehl.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163oawxldct.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163hrtdgurt.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163mphdilry.html

"值: \(b)"
来源：http://www.aibaodan.cn/163jxovgzbr.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163bvrvpqoh.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163fzaskmdd.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163qvkgabdo.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163jiuecacj.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163zboasava.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163vmgsrrtp.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163suerkian.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163arijmzog.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163lafqxsud.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163rduarshq.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163jdbmxlic.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163kbeqmsys.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163okoxrvgf.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163trspjihh.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163ozxglame.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163kedxinqx.html


<!-- 参考信息 -->