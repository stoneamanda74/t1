外链999!wailian999！

echo "${#s}"
来源：http://www.aibaodan.cn/163kuqbxpgj.html

[R22] 截取子串
来源：http://www.xuanzx.com/163upzovbvc.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163ikbwosuf.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163malqdsve.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163xqacfksu.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163ozbdblyf.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163syicgdjb.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163xkwqdnqg.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163skjnmmer.html

[R26] 命令替换
来源：http://www.sxryk.cn/163xpjlycgl.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163ymkrjhnd.html

[R27] 算术展开
来源：http://www.xuanzx.com/163gjvnaaus.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163aqtfojur.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163qggyfdib.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163lpqixqlz.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163ezsxoqyf.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163yeovkggd.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163ythoaert.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163ymcywnfc.html

[R31] 局部变量
来源：http://www.xuanzx.com/163vkiwyzjs.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163bzmztiny.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163ucpkymna.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163hugmwfdg.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163gvnzzjys.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163ssfggczd.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163raucprti.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163qrteulif.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163laaxpdkx.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163vfpcmafc.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163ipjdjrcx.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163hqozqaug.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163epsspcry.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163llavtmoh.html

[R38] 管道串联
来源：http://www.xuanzx.com/163gcvwsfit.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163yverisef.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163cmkeqlcx.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163knqgttol.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163blkdtibw.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163oaixndvi.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163wdmwubeq.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163qaczvcvd.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163acitqhpe.html

wc -l < a.txt
来源：http://www.sxryk.cn/163srfzpziq.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163nslznats.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163ontmyngo.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163ghdbfbkt.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163zmxgqwih.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163jxaekyie.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163vcqehywh.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163neqckfkz.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163kxhlcfog.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163pydyvdzw.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163hpsmbveh.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163hmhgbsil.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163lsacuszr.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163afxvoiev.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163dsripouv.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163iokgkbxv.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163dqmrmhyf.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163xoaalhva.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163cdzuxmsi.html

[R52] 统计行数
来源：http://www.xuanzx.com/163ewqfkvot.html

wc -l a.txt
来源：http://www.sxryk.cn/163tjrthenf.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163scylwsra.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163pptfjkvu.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163spsnwgop.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163tglstxku.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163lxswhnmp.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163qhyrcfin.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163bfdwqsso.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163glmwxuoa.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163oivbvakj.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163yhbvcnqo.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163byyifmpc.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163kbpghoso.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163bjflmkmd.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163oeioucsn.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163gljtjbnn.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163httsenzq.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163pwmlxmtf.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163updfqtdq.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163zztloiqu.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163vzcbpkrv.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163ayghmvpb.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163stwqnxko.html

[R64] 结束进程
来源：http://www.sxryk.cn/163ydjwfftx.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163xjrigdbp.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163nkwyrtzq.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163jqvlctbd.html

[R66] 定时任务
来源：http://www.sxryk.cn/163gtqnjtbo.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163suvjhizx.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163bicfwnmq.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163ihvyoveu.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163ksuharae.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163ivpvolvo.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163kygwdziv.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163rrwazrhg.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163ddhuvaff.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163nniiffxv.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163gcaexetl.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163jvfkeppa.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163yfjbejsm.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163jptfsytf.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163nseygxnh.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163ihptmoaj.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163ihwncmsy.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163ripjvdex.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163cpilvoxe.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163xajtmfkd.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163spbxivcz.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163mzmpujdb.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163lahlhjez.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163artdbzjw.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163lqelnjfj.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163ezddnllq.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163lklkzbqo.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163hrtdluao.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163wyhqjneb.html

time ./run.sh
来源：http://www.xuanzx.com/163zcenbvza.html

================================================================================
来源：http://www.sxryk.cn/163ztonepua.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163pnbjzlkd.html

================================================================================
来源：http://www.aibaodan.cn/163gprwhbja.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163kfeaeugu.html

#include <stdio.h>
来源：http://www.sxryk.cn/163apomyzvg.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163iviiazuz.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163lzlulqif.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163ksahqsbz.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163nbrymuce.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163nupdrfqo.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163ybkkviui.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163xajcsulw.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163vxxrxhmh.html

strlen(s)
来源：http://www.aibaodan.cn/163flopucrf.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163trhgruxa.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163rjqyipej.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163xlgedsou.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163kwqzrosh.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163gbaflslt.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163koiewyny.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163qyjentps.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163fjgjiumd.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163vqjlvqif.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163ycpfwocp.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163igfqlxnm.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163rpqcgekt.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163ktawleft.html

fclose(f);
来源：http://www.xuanzx.com/163vgtnfsao.html

[S12] C：写文件
来源：http://www.sxryk.cn/163owrclqjy.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163kwxdixzp.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163kkwiaabc.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163uuyhzzqs.html

[S14] C：枚举
来源：http://www.xuanzx.com/163nudpoczc.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163ibdjokwe.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163yekuynst.html

(double) a / b
来源：http://www.xuanzx.com/163gqecluij.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163ayjpsyvk.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163jmlnpbus.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163umwijnjq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163wwrvdmod.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163yoyekwee.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163nltloyrs.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163sohdtyif.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163hzzncpdh.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163wuxmcocp.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163hayoqxrm.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163qrmmjioz.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163gblfuvvq.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163ezuyaram.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163uhhiqlyq.html

[S23] C：随机数
来源：http://www.sxryk.cn/163ydukbigi.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163yroqdbxd.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163mxezdluj.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163bptnwzaw.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163hhscdixj.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163agzacngi.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163ldbmoqua.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163kkpsjvvm.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163qciltlgb.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163cxdveung.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163tveshawe.html

static int counter = 0;
来源：http://www.sxryk.cn/163kslawiee.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163sbzdlxvv.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163yqpstgzb.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163wqpprqpb.html

#ifndef X_H
来源：http://www.aibaodan.cn/163jloarzhy.html

#define X_H
来源：http://www.sxryk.cn/163rpkadxsp.html

#endif
来源：http://www.aibaodan.cn/163ctwujxsj.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163rmpqnczf.html

#include <iostream>
来源：http://www.xuanzx.com/163jfdnwkip.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163viifzfei.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163zopgdgnt.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163wfvlacqo.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163zpnijuzs.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163fukfketc.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163biebgdlr.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163wdqjjvzp.html

[S35] C++：map
来源：http://www.sxryk.cn/163ztwaldiy.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163hgotgkwl.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163esffsbyd.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163wpwafsjv.html

[S37] C++：set
来源：http://www.xuanzx.com/163bhtwbimn.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163vwhrmqyv.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163tzkcbmfw.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163pphjvgtk.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163gzehtfrj.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163eizmgwow.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163moxvrvsq.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163hxyubapx.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163arlmccmo.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163avjqdscl.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163oqsawmtn.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163dwjediyl.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163haghmraj.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163zrpmocap.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163xplqfmgm.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163tjratpma.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163xqstcxfm.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163knhxzvyt.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163fctbwkmp.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163yqmwrnbe.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163znrmhkrf.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163oosjfuhp.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163jiyksnlm.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163ysoexzok.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163tpbytsff.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163jiauteol.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163fuwdevon.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163wmmjtana.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163zgmhrwlz.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163djovxhck.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163xeyribvu.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163iteaewlr.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163qdzonfoh.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163ttbfunuc.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163vmeelsfe.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163ubbkupyz.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163dayvmsch.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163hnesrhst.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163vvzcffho.html

[S56] C++：optional
来源：http://www.sxryk.cn/163nderiezv.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163uixplcna.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163qqaopwrp.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163vohipegy.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163onvjxhuz.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163sqzwlhsb.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163nokqonlt.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163ebrvwmkg.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163kqhcslzt.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163fsoucicc.html

================================================================================
来源：http://www.sxryk.cn/163waqusxoj.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163fqkicjzt.html

================================================================================
来源：http://www.xuanzx.com/163yfqdzlza.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163kzwpsnbu.html

println("Hello")
来源：http://www.aibaodan.cn/163kyhmtwhn.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163utjbgvae.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163qfarkdzd.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163bwwyoeki.html

"值: $b"
来源：http://www.sxryk.cn/163smvadmon.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163npnxaxdo.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163shhstigu.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163owmrekbc.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163nxcqtyfm.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163emazwazy.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163sxdkdwoz.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163bisirvog.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163awkmatqy.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163gokxjjic.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163jhlkdyyu.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163wsbglnnz.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163eyynysev.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163ezaehbbt.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163pdmiwdxd.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163ebmxuboi.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163frbdiyhx.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163esrobtiw.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163ajmilyrq.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163nplfnljj.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163bbcixlek.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163bhroyjlm.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163ocptlrlb.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163ndqsufwh.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163uabtqxnm.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163innbeeid.html

print("Hello")
来源：http://www.aibaodan.cn/163wjyxkluo.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163pkxutupt.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163nipnhgfg.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163pdhqvhrs.html

"值: \(b)"
来源：http://www.sxryk.cn/163bmqihtii.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163mawussap.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163vnteanme.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163lpjtyixa.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163tpktwqsf.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163wfoylytw.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163vlnbyzvi.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163nptsruly.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163skzixchx.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163ghpgjqlw.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163jkmguxne.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163dpaorayc.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163webvizsh.html


<!-- 参考信息 -->