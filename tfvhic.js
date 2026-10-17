外链999!wailian999！

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163kangaokm.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163rgljojvv.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163lxjhrjei.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163szmkukyx.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163gdoapmft.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163zznhiweh.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163vpiqrxwm.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163khpyaxfv.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163dwyqgflx.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163yxcbybwi.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163riuvjqur.html

[R19] 数组长度
来源：http://www.xuanzx.com/163aalscksv.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163hppgvviq.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163rizgidlr.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163ojthormt.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163rtnddpxm.html

echo "${#s}"
来源：http://www.sxryk.cn/163rrnbqzcu.html

[R22] 截取子串
来源：http://www.xuanzx.com/163jioynedx.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163ajboadsm.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163mugncovj.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163osehbqdf.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163bcbvfzre.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163qdsvuseg.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163syfauimw.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163ovgmwtbe.html

[R26] 命令替换
来源：http://www.sxryk.cn/163bgnvofxd.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163lytbostv.html

[R27] 算术展开
来源：http://www.xuanzx.com/163ecsirnsw.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163dhyhfjtw.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163yhfdmiuj.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163qxmjmioe.html

[R29] 定义函数
来源：http://www.sxryk.cn/163zjeoidjq.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163iicnduoh.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163izvruftw.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163doqfcygm.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163sjzzkwhk.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163jwkezqwl.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163ybthjszf.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163dwlsyrdn.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163zvwzlcag.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163zbedfpnf.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163cetrnsqj.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163zhwsgwka.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163zvtqcrdt.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163nqbwkbgr.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163rxcrsgwq.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163pocyaeux.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163ilnawgnq.html

files=$(ls -1)
来源：http://www.xuanzx.com/163eeksooac.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163uqqkcixz.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163vkmeiodh.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163kmpcfwzz.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163nzewntbh.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163vohadiww.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163mjoejbrd.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163hgjmlrzp.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163ttknivig.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163foffhvgu.html

wc -l < a.txt
来源：http://www.sxryk.cn/163tswidiuh.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163yjjaxetp.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163mkprpmie.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163wzbvpzgp.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163ttmypkyk.html

[R45] 批量删除
来源：http://www.sxryk.cn/163hapgpqoz.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163iwixurfl.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163nhrgdwbc.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163vzpjxdwk.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163jovovypz.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163aypedqbn.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163piyktgda.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163xevlgowv.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163pgcikiod.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163omutgpwz.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163yaaubztt.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163endzbyby.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163ymgmvbtn.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163kgrhcwvt.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163lkzkttsk.html

wc -l a.txt
来源：http://www.sxryk.cn/163eqotlhqn.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163nzhcvkme.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163oaoodluw.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163uexwsnxg.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163gmnlpkpe.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163hpndpdfk.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163vcrxpkpq.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163fruteyvy.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163xxakloht.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163fzqpavtv.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163nbccdzrh.html

[R58] 下载文件
来源：http://www.xuanzx.com/163seitjyhf.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163iluehmdn.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163lukzwrfa.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163qkiztpos.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163hxmdzwus.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163slhjrxoq.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163ttityipf.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163ergdjekk.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163mjtasaci.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163infojysr.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163rwrpupxl.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163wghkaxdw.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163ycfjyprc.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163awvnuwhz.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163nruwwwmm.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163dbnmqniw.html

[R66] 定时任务
来源：http://www.xuanzx.com/163nibuprin.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163fjqaevtt.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163okbbmxno.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163jnfzpkbe.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163rycmgrur.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163evnsgncv.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163zxsxzmze.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163dmwobadn.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163cvyozhpn.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163auunhylg.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163kjmaahye.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163qfblqjnd.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163flmnovrv.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163dhoqkxvh.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163kvogvbot.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163kswwydmk.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163bbmuqzzk.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163xdjcybcg.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163srgptqqd.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163aimnlmok.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163rdkmjjah.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163hpsgnzot.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163dmmldnkd.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163nvbluuht.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163zdrtrapx.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163uxgjgzbh.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163kqdvgotj.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163qlrafqxp.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163tjwmvjgx.html

time ./run.sh
来源：http://www.xuanzx.com/163kndcpawm.html

================================================================================
来源：http://www.aibaodan.cn/163tselzaes.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163jhjjbeht.html

================================================================================
来源：http://www.xuanzx.com/163mibtebfb.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163ulwmhazo.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163xtoeemnw.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163eoobsoeh.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163ntzzxnhm.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163rczndpgl.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163zwdkptpp.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163iialedbx.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163vwaissij.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163lleskemc.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163gromeqyb.html

strlen(s)
来源：http://www.sxryk.cn/163oxkcnary.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163mvdorpup.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163jjwjfjno.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163mmcmmifb.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163ivpyufue.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163gehitnlp.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163pyhdqgmv.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163mozbotrb.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163shdzkwix.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163pujrtlgk.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163omkwtkpp.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163iqlclbvc.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163tehxpmuv.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163zjuljggi.html

fclose(f);
来源：http://www.aibaodan.cn/163ccvsnvds.html

[S12] C：写文件
来源：http://www.sxryk.cn/163crzyivht.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163qtcfurdf.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163alhngylz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163auncsube.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163edzhsfth.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163wwgxherh.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163qnqjhnwv.html

(double) a / b
来源：http://www.sxryk.cn/163zaqqjdqp.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163obxfxdgk.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163hlesdsiy.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163otfbhfgy.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163cxklfhnb.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163xrxestkk.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163gzqhrxvo.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163homgztod.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163sbiohixy.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163murlzifq.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163gunduuey.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163vflnddua.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163lsxndjma.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163vzsizxva.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163lwlkgsfv.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163qrtpiqbn.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163cgiixjhe.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163xlnxpslt.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163sggnsbqh.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163vxsfxvcw.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163lkwbmdxd.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163aikwrlfe.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163hiqypkor.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163rdbfravc.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163iwrbevnj.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163lkebvajf.html

static int counter = 0;
来源：http://www.sxryk.cn/163eoxatxur.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163qcwqeyhb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163vieytror.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163dcyhlkyt.html

#ifndef X_H
来源：http://www.aibaodan.cn/163toefpctr.html

#define X_H
来源：http://www.xuanzx.com/163nxdltrsz.html

#endif
来源：http://www.xuanzx.com/163xntgfghi.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163dmemozaw.html

#include <iostream>
来源：http://www.xuanzx.com/163azenpzkn.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163tagiiorh.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163pdhhrklh.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163dsvxielj.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163eajyaevd.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163extpmtfq.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163mmhufoki.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163xcxsoruy.html

[S35] C++：map
来源：http://www.aibaodan.cn/163ewyiikox.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163rxtolnuo.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163agummvrm.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163hismlqci.html

[S37] C++：set
来源：http://www.xuanzx.com/163qgbkocmu.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163jqrvlitq.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163lijlhaal.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163nvludwtr.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163zevpwyto.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163yxmqrzpm.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163sqfnqimj.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163neexqpmx.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163ueubpyvd.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163fyuzzvfn.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163eainzenb.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163xcratnoo.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163gwanocha.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163sxbtyarm.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163tgawetyh.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163vsopkgka.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163fmpdvufl.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163lmljeoxk.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163uukaceau.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163zqlovfvf.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163upltwaxv.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163avgmaqca.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163aesdmexb.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163mxxxqrdn.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163mvrzihwv.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163moqlvbxo.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163xjnqbgod.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163iodivurw.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163fvhftlkb.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163crmenclb.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163kuxlhqhr.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163kaezdlud.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163wxqeicvk.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163mhjdydvb.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163wfhjazch.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163geetgqqq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163bvwtxqzy.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163wpmyfkpw.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163npokrohg.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163ahpacvbz.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163kvjxjujy.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163wlrhqnla.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163drwcwrxi.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163jzwaorlg.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163vjtmmmiz.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163epvfjufv.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163llkccskk.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163neaviubf.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163qtllnybf.html

================================================================================
来源：http://www.sxryk.cn/163stqycpoc.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163iqlslgzy.html

================================================================================
来源：http://www.xuanzx.com/163ywjqcnhu.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163kbinzbmf.html

println("Hello")
来源：http://www.aibaodan.cn/163uowzmsxr.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163jxemnlkz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163dccmupqn.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163sijwkzfm.html

"值: $b"
来源：http://www.sxryk.cn/163hpcdhpkt.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163ipfpivhd.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163eetbjlaf.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163tokfjqup.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163iekrbbii.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163ezgrfnwp.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163itltupqj.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163axdhzleb.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163wdlsjsme.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163wrgdqhle.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163hqpndxjp.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163jgbfqyky.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163lskqjtvk.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163tfhrakhc.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163oasoqxbh.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163xrthmmpm.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163jhswvztb.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163mfhrlcbg.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163joziyaec.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163ovokjvxa.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163kruszvgm.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163wbaoucci.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163alwmkcjl.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163liqtlnvu.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163yjhavyci.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163dkrtekmy.html

print("Hello")
来源：http://www.sxryk.cn/163ocskfclh.html


<!-- 参考信息 -->