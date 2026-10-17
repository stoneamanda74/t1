外链999!wailian999！

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163ntfivved.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163lfssosnz.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163ehaonrkp.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163leozxoyj.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163ysesgrtk.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163ssnryzcg.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163rubuhngb.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163sbtcrcav.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163jvthotag.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163glmbrlda.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163phagioht.html

[R19] 数组长度
来源：http://www.sxryk.cn/163ghepkpme.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163ryerhztn.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163wbfwwoga.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163jkphyfnj.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163tkdsfbdo.html

echo "${#s}"
来源：http://www.xuanzx.com/163ypuwwxkn.html

[R22] 截取子串
来源：http://www.sxryk.cn/163zrmuuefc.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163yafzeeei.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163evgddfsk.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163isakbxfa.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163varrioja.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163iwocztph.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163qsmylprp.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163uzppsown.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163uunxgwxn.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163ykdhwtjp.html

[R27] 算术展开
来源：http://www.xuanzx.com/163ougnfflz.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163bbhbkerg.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163iccwdwxf.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163pvduceka.html

[R29] 定义函数
来源：http://www.sxryk.cn/163wmqpnbxp.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163cnluacmj.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163kvrdypwy.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163uhbhivmw.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163jsysryds.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163ysnlergg.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163glpkyodz.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163eigkljau.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163lpctlsfg.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163gxvklqpz.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163zboqxope.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163fubxdkep.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163oehgaqpy.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163qulpegbl.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163leknwmae.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163nvpxzpyp.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163yisrfjmo.html

files=$(ls -1)
来源：http://www.xuanzx.com/163ixlxqbgp.html

[R38] 管道串联
来源：http://www.xuanzx.com/163knnjvsjd.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163deeytywh.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163duimoxpy.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163qjjwllle.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163xrxmcndj.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163sbkcskwh.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163fuicvfpw.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163edffxphg.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163ckvgmccd.html

wc -l < a.txt
来源：http://www.xuanzx.com/163ywpeoxcp.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ssomdibr.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163uerzvaft.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163xvjdltlc.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163qwfrrizl.html

[R45] 批量删除
来源：http://www.xuanzx.com/163bixhezwl.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163lzdlymjx.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163pznmlxas.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163cvzxlpul.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163esajegde.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163nbudqryz.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163tgdnrlgq.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163gttuylyo.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163hfglrrin.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163vgdxpidy.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163fcufhtvi.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163jtmqevrp.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163curinnkv.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163cmwoiefs.html

[R52] 统计行数
来源：http://www.sxryk.cn/163czpgslnz.html

wc -l a.txt
来源：http://www.aibaodan.cn/163sowoibsr.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163cbdaoyvn.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163sldppqgz.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163wmzavycr.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163kppixzvi.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163zspmzgzs.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163kgifogjo.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163gipkmplj.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163pemeycgf.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163jhnmfrhk.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163ankpqbfb.html

[R58] 下载文件
来源：http://www.xuanzx.com/163gxqtwxjr.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163fmbbexsj.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163iajvufxs.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163kubkklad.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163hdvlpfbf.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163otnkpcqs.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163niylxccl.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163ionhijdx.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163vzxnmvkg.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163vaglzzaz.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163egaxfddy.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163qzqezikt.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163htjzloxf.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163otryjott.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163xjqpewrs.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163nyiwxdez.html

[R66] 定时任务
来源：http://www.xuanzx.com/163vpgliqil.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163uvouqpnl.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163lqgtaevk.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163nhmkwlxv.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163rysfrxfi.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163vbxqzfid.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163agabfcyk.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163mcngkabs.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163qamrfmqp.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163qdgedjer.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163qqdkpybm.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163paixlpay.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163rusevnsy.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163onuvcpkm.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163cqjhrkeu.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163rjnphdlm.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163tncynppn.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163pxcanawr.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163sunzzapi.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163vpwlwiag.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163hahfakfa.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163elacbxtq.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163oruocbgg.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163pcblzjjd.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163yfyuqeak.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163buoxnkpd.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163ujzidusx.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163vequzdmm.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163eqrsbpap.html

time ./run.sh
来源：http://www.aibaodan.cn/163ezbxibdf.html

================================================================================
来源：http://www.sxryk.cn/163pzcjrquq.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163zvgzmqzg.html

================================================================================
来源：http://www.sxryk.cn/163pkivvgnd.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163uyxzwaea.html

#include <stdio.h>
来源：http://www.xuanzx.com/163nvwmbgur.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163evgofamy.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163xawiovfv.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163dmrmhzlz.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163zclwpthl.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163bjeakjet.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163pttlgcly.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163fyxyiikj.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163zxzbfktv.html

strlen(s)
来源：http://www.xuanzx.com/163mdkyyemw.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163adqdxwer.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163vkjjugpn.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163ucmwkouz.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163hujpoktp.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163kmywozcv.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163bbspdwyf.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163urkrcwuj.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163vbmnzfuq.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163mbngaybe.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163bhawacei.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163ijymuzdx.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163jlsytvdv.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163rljdvghp.html

fclose(f);
来源：http://www.sxryk.cn/163ddfrcxdp.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163qxksveae.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163gcobgupc.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163xsssvtij.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163gzzvozue.html

[S14] C：枚举
来源：http://www.xuanzx.com/163hjifccyj.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163vppthxpf.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163maeanzfh.html

(double) a / b
来源：http://www.xuanzx.com/163vytlqexc.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163vdjulkzy.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163kerknxlz.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163iqgnonxy.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163kxyxwgbo.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163kveyqrcd.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163oeqnjpci.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163ckgdvnoq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163odjzrjqz.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163wrycyfnv.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163myqmhhha.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163wdjldtru.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163qysmxrvr.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163swdxhhru.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163ybdtzzed.html

[S23] C：随机数
来源：http://www.xuanzx.com/163mgaiwsww.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163yiikbnye.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163lomolivr.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163ikjupfxh.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163lskylhxb.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163gdntrcko.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163ssplinwo.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163xcjjekxd.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163mfdfnkpc.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163kisnhioh.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163wtrwcyzk.html

static int counter = 0;
来源：http://www.aibaodan.cn/163tuoxmgor.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163tfpvuqlj.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163siewkwva.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163ohlbhykz.html

#ifndef X_H
来源：http://www.sxryk.cn/163qmzoltqm.html

#define X_H
来源：http://www.aibaodan.cn/163czhsajtp.html

#endif
来源：http://www.xuanzx.com/163hzsnkrzs.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163gkljzvmx.html

#include <iostream>
来源：http://www.aibaodan.cn/163osyhhezn.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163jfubdbjs.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163wazxjirl.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163hkvlogrx.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163qxdkksvj.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163gdcapyan.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163owaackeh.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163mlobkfac.html

[S35] C++：map
来源：http://www.aibaodan.cn/163iwurjzaj.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ldxcbdrm.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163azanjntq.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163drwhkkei.html

[S37] C++：set
来源：http://www.xuanzx.com/163iydaejxd.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163zeuaphlm.html

[S38] C++：排序
来源：http://www.xuanzx.com/163haaiagzx.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163qqvuekql.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163wlgovsoq.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163kpditdfn.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163cprftrrm.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163bolpdkkc.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163qpevrdxg.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163foatlchg.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163ckriepym.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163aidvhmfs.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163nxotdfad.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163soevqqap.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163szxvsnel.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163nlwmgfez.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163nazdjijj.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163gmbqaciy.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163readtlxm.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163kkjqeytx.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163utrwwosp.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163mymjvrfq.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163rmxqvhko.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163dpldyvpe.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163clbfbfgt.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163gcqsikiz.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163fmkyetiw.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163djylvgbl.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163ewrkjmly.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163tfrlalfh.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163yhblavvm.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163hizbtdnm.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163fdsrlgbe.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163xzapwfcc.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163dnvmdqjp.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163qaddaofs.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163eamwdenn.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163qyqucdcm.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163fvguqkka.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163rcoepnsx.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163yuadhkwh.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163oemceglu.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163semsvpun.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163noxseija.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163ankvebva.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163gvyqpsgk.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163swmxcdee.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163ueembqxt.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163zdeeckfd.html

================================================================================
来源：http://www.aibaodan.cn/163ovnsapqh.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163bbunzrzy.html

================================================================================
来源：http://www.sxryk.cn/163uzwlmdgd.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163isyqflfb.html

println("Hello")
来源：http://www.xuanzx.com/163xmepljqt.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163vvkaorgp.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163bkpcoeja.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163cpoxlqfd.html

"值: $b"
来源：http://www.xuanzx.com/163uhrziuks.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163vunchtkm.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163themzbpm.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163akinhwvg.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163mafnnsfz.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163yaflhpfk.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163anihbknm.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163ypzzxswh.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163llnnzcmv.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163slwbewya.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163ypsucmde.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163tshbpybw.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163nfbcydhm.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163nzbgxgcx.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163ooihfjbc.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163yomvwfmw.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163ejijbzlx.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163rxbodzez.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163aguqvxbb.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163kburftfl.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163dunevlnn.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163xhbjkebk.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163ptthdsos.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163ibsxxskf.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163kgsxyank.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163gwszcuvh.html

print("Hello")
来源：http://www.xuanzx.com/163uknoxyzz.html


<!-- 参考信息 -->