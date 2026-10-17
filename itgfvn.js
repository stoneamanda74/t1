外链999!wailian999！

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163svwhqcdx.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163cpxsmkyk.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163tubamwrz.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163wuzwkchc.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163ncudmcck.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163fhrxopvn.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163hcpjwibv.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163ilxvgnsd.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163lxlqoyje.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163vghufzol.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163iikxqiyo.html

[R19] 数组长度
来源：http://www.xuanzx.com/163wpeadgry.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163bqniwfte.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163tovpkgsa.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163tybvufmm.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163vrvuiiaq.html

echo "${#s}"
来源：http://www.xuanzx.com/163nkmtcvah.html

[R22] 截取子串
来源：http://www.sxryk.cn/163ultwszik.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163zkynxgww.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163kguqwawt.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163thubwcev.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163pfousiaq.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163nsiplrux.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163qekbwfpy.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163rlirdtfg.html

[R26] 命令替换
来源：http://www.xuanzx.com/163rqhcocyt.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163pgpzlnot.html

[R27] 算术展开
来源：http://www.xuanzx.com/163gstxiuti.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163bxzdoywp.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163qhkapujk.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163jlacsgar.html

[R29] 定义函数
来源：http://www.xuanzx.com/163bgeyjvhq.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163qcawgrjx.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163gortpdlz.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163bxegsplh.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163xwumvvaw.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163tztdqglc.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163psdyhiyx.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163cwgyoavj.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163fwifxcyt.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163uqjkmnms.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163avxivlya.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163anpqbptd.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163blueiahb.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163stayrzyd.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163oqywfzju.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163hfgvcwmw.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163iwdrdxri.html

files=$(ls -1)
来源：http://www.xuanzx.com/163xhagtemx.html

[R38] 管道串联
来源：http://www.xuanzx.com/163fpkcskay.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163uhnfzuss.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163ceczxjkd.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163fncbodly.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163djkboksl.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163ucejthxn.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163pnmfcnzn.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163auiqgbmy.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163uksshayo.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163igtislll.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163rnfyqugk.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163yugimhia.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163gbaminvc.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163larumftl.html

[R45] 批量删除
来源：http://www.sxryk.cn/163rdnvetxd.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163ilyogapv.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163vshycqls.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163ybhdlncx.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163chykvslg.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163vtvjunpx.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163aaxyitcu.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163rmcwcamg.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163aaqrruah.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163jmrvhoma.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163eiypdbdt.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163idknfowe.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163tvzwhikl.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163rermtbmz.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163vodveeso.html

wc -l a.txt
来源：http://www.aibaodan.cn/163xeeaepou.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163aaeqmyas.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163eyziatjm.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163lwxkufdd.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163reouqfrb.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163lujkiosf.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163ogrburgk.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163xnnbtyvt.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163upotjapg.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163kzfcirgw.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163sgkpxwar.html

[R58] 下载文件
来源：http://www.xuanzx.com/163netlvojt.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163njcrhbzk.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163xuagsrkq.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163rnjmycwv.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163mcmggova.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163ioaawtby.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163hlsnmibc.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163oyslaabf.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163whylgouk.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163kztmszik.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163yirkidua.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163zxzmobpp.html

[R64] 结束进程
来源：http://www.xuanzx.com/163dbogumrt.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163vhpwehbd.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163ykegnujp.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163zsuarazy.html

[R66] 定时任务
来源：http://www.xuanzx.com/163jlktbusz.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163cnqehizq.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163zxqxiqpy.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163lspjzeuo.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163nhqnsqne.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163dhkmsqgl.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163naeqhpmb.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163xprtepiy.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163chxxopfp.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163aqwpqzgo.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163knbtgrux.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163hvldhzgn.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163suvdwwfd.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163hlsxsukz.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163fnewmwrl.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163gzawplpg.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163ftgzxrlb.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163ychpzooe.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163pdxqtivs.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163hovejgsi.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163aknhzzmw.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163xciewsas.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163xnyrbyup.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163yftesany.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163nrsqbzwu.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163eahtihcy.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163ovopdrob.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163tovqplec.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163qtgvlfec.html

time ./run.sh
来源：http://www.aibaodan.cn/163cjdlbuyu.html

================================================================================
来源：http://www.sxryk.cn/163twpvjiuv.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163plilhfdd.html

================================================================================
来源：http://www.aibaodan.cn/163fqhlcguz.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163nisuokol.html

#include <stdio.h>
来源：http://www.xuanzx.com/163nmprrjlu.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163twqstdsk.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163mpxcavxz.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163gumnpufo.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163hzvkuigk.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163uguriwdd.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163dbtxurxc.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163sydokpph.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163tngmvsad.html

strlen(s)
来源：http://www.aibaodan.cn/163kyhudlce.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163jgmwrupj.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163liqmmyyn.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163elzwtfge.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163hmfrdwog.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163kidwrbzo.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163caxdoeoo.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163gwhrpjuo.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163lrhwxgjl.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163vyfyycgr.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163tvkulzyu.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163ckgwtjbr.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163embfflfv.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163uxkcilpe.html

fclose(f);
来源：http://www.aibaodan.cn/163cxlucrpr.html

[S12] C：写文件
来源：http://www.xuanzx.com/163lsjuysrg.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163bihktfeh.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163ejlwfsan.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163olumchzo.html

[S14] C：枚举
来源：http://www.sxryk.cn/163tsgammug.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163skmqknmq.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163iuuiqdiy.html

(double) a / b
来源：http://www.aibaodan.cn/163baasiapa.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163ogrobqzg.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163auogpvoc.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163qxmobpbc.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163imyehtwa.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163lorgjwub.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163mcwyvbtt.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163ymfciysg.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163seudqfnn.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163umhvglxb.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163vzggqsuh.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163fzowmmai.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163bxnxboqv.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163sbhaqyok.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163hsyqossd.html

[S23] C：随机数
来源：http://www.xuanzx.com/163abyhsica.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163dficmxrm.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163jqnfissk.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163flbgskht.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163yxjxqnao.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163xgdsskqt.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163xbtvojwg.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163qrufxuzs.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163yaybyhlv.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163wvqlirol.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163jpogqycz.html

static int counter = 0;
来源：http://www.sxryk.cn/163stdpknvn.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163xiaefuhh.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163jcztzpzr.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163kksrrubn.html

#ifndef X_H
来源：http://www.aibaodan.cn/163utusawia.html

#define X_H
来源：http://www.xuanzx.com/163itfcmoqs.html

#endif
来源：http://www.sxryk.cn/163rbgsbquv.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163bgippmpz.html

#include <iostream>
来源：http://www.sxryk.cn/163ebwyamse.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163kcedxfqz.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163gcxglimi.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163islikubk.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163fntwtgiq.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163rqxasoce.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163xdqzulzy.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163uunrpfhj.html

[S35] C++：map
来源：http://www.xuanzx.com/163aewcybzk.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163izmmxgom.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163iskmdphl.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ikthbxkp.html

[S37] C++：set
来源：http://www.aibaodan.cn/163pfieovdh.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163gvtbduye.html

[S38] C++：排序
来源：http://www.sxryk.cn/163tvjfbbdg.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163ettsbufb.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163xcjcutpp.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163ivycbteq.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163wljocfsc.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163hswgjsus.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163trvzdryx.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163cwapiqrg.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163ruirubzf.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163qmwkbuxe.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163vvmyyuyb.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163itouqrjl.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163qxfwizmx.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163vqfuvdjd.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163fftspqif.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163ouuhxfgd.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163oangrrbc.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163xnjgodyh.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163sifavwfw.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163absouqga.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163xxcsuibg.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163xeyfoxsg.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163lkzlrjtz.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163qydrmobp.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163pnngkkmm.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163nppvpqxj.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163jzfkzdst.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163zcygritj.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163ardlmotz.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163suxmpdoo.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163hikfabko.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163ywcopgzj.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163eordgoxw.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163nvylwmhw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163sklwchql.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163onjkodiq.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163pxslgmrf.html

[S56] C++：optional
来源：http://www.xuanzx.com/163vzjvpnpi.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163vzjletxs.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163lrnqzgcl.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163svwbzvmn.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163kepghgpm.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163mswhqccu.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163zxwcfxpb.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163hvrcofqu.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163oxwtrmvu.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163vjytjtfa.html

================================================================================
来源：http://www.sxryk.cn/163uiqzacxh.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163zxkwzyez.html

================================================================================
来源：http://www.aibaodan.cn/163mltpvbto.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163axndcnmm.html

println("Hello")
来源：http://www.sxryk.cn/163fqzhdapj.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163zlqbmjkq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163hqdjtqvg.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163faxnkzwo.html

"值: $b"
来源：http://www.aibaodan.cn/163jztphbeu.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163kckhrogy.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163uefphfnw.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163sfcupcat.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163awpkcdok.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163uoelmbdz.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163ssgvgpsp.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163jlruvcld.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163hwqluipy.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163wsjkvydz.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163gaqiqqzo.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163ugycchoj.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163qttroflu.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163qjfnedbr.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163xtkrvknk.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163zwcqqglr.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163ktitcbhx.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163uhlngbaw.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163ncruufqk.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163nosuoces.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163jcgppluc.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163wrkcfjrn.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163tryvdyqy.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163mwwybfrc.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163csfcpqjb.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163ulqgudcp.html

print("Hello")
来源：http://www.sxryk.cn/163ducsrqwf.html


<!-- 参考信息 -->