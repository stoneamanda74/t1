外链999!wailian999！

set -euo pipefail
来源：http://www.sxryk.cn/163yfqpenif.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163qsuitmht.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163dlbyyopi.html

[R03] 只读变量
来源：http://www.sxryk.cn/163nhjialvh.html

readonly PI=3.14
来源：http://www.sxryk.cn/163ekdxgmty.html

[R04] 位置参数
来源：http://www.xuanzx.com/163tjprrfnw.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163lptbivkh.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163obyyifdb.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163nmmgteoh.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163bhzeholh.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163vkdgxhle.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163nyskwemu.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163raoqfaeh.html

[R08] 数值比较
来源：http://www.xuanzx.com/163lkitxawr.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163sllmvuqm.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163liccyhla.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163bafruwlb.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163byddrxft.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163nnioiutf.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163xypjpvqy.html

case "$1" in
来源：http://www.xuanzx.com/163bdejfgrc.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163zeohohvt.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163umrfdvzx.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163mtqllrfo.html

esac
来源：http://www.aibaodan.cn/163bakpfbcm.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163tfuvjxgz.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163tzlfhbna.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163mvzvvgpw.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163wmhxtshd.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163zpqyhaxv.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163sageevxx.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163hmjwxqzy.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163dlsrybvy.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163blgsganx.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163qsduqdoa.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163radnmemk.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163uyveeuqr.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163ishyybut.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163tgvalotr.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163ejlgcujh.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163azwygqdg.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163bacqgbdx.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163xpzxteux.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163wewcsbmf.html

echo "${#s}"
来源：http://www.aibaodan.cn/163volrikez.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163sezucaxi.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163wigutupn.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163npbnsopm.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163jevorxwr.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163wbkapgyi.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163lqfpiegx.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163polmxlga.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163dgrrvzut.html

[R26] 命令替换
来源：http://www.xuanzx.com/163ppsqlfwg.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163azzlqmiq.html

[R27] 算术展开
来源：http://www.xuanzx.com/163flvdgnjp.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163beikiutr.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163jcrkliwp.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163fqgenhig.html

[R29] 定义函数
来源：http://www.sxryk.cn/163ehpvtwzl.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163ckxnizkp.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163dpvfpdjj.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163tovshkfx.html

[R31] 局部变量
来源：http://www.sxryk.cn/163odaoyxjr.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163yqkaqorr.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163kakocgwh.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163fuchhndj.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163naoowjqn.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163iagukxcz.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163flqysmfp.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ccejqdby.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163vmmknchw.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163ornfttdx.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163kdxhofkj.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163xuxwlyzw.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163bdsycunu.html

files=$(ls -1)
来源：http://www.xuanzx.com/163jhgngxnm.html

[R38] 管道串联
来源：http://www.xuanzx.com/163ooaqqxgj.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163qbozakpk.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163ghxgbchu.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163gdwnqxep.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163aidsgmvd.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163ltblapku.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163zneqtwrf.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163raiagnqt.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163dclmkgcu.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163fzqtdbfe.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163cxirefeh.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163gcuasiog.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163zzjnkjbh.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163drznjoyu.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163xmuloese.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163gerxuetf.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163rthrpttg.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163cxlddrob.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163fokrysys.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163lflqyubo.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163zpyguexk.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163lpjurxst.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163uzazkpms.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163pszuvdmu.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163sdbkleff.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163sejhvewr.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163awuckocc.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163uigjyusw.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163unbxnozq.html

wc -l a.txt
来源：http://www.sxryk.cn/163ryfnugsg.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163ndhjwdeg.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163rmlzsqdn.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163knpkpdqc.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163ezlylqxs.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163semgubzq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163kyxdnufq.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163knqudwus.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163ollwitng.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163efzkfhby.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163owzmuufn.html

[R58] 下载文件
来源：http://www.sxryk.cn/163ddnuovmi.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163namdnmxc.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163obcrerjj.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163ifxrmbmx.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163pfoyixsx.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163xkzcuery.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163ztspvtpj.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163sdieuhjv.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163pgitjipn.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163jdurlcmy.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163wbbjwwpd.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163mozuyryt.html

[R64] 结束进程
来源：http://www.sxryk.cn/163cxezbbtk.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163sarwfvtk.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163aripillp.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163aaqnkbkx.html

[R66] 定时任务
来源：http://www.xuanzx.com/163kcysnzcw.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163mzkeqbpm.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163klxbssfg.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163floaebbx.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163koyoszqd.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163bhdtqgap.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163rszsnicy.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163vnwkzjuu.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163etwqlekp.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163mqamtupm.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163szbwspma.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163ixcsjcaw.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163gcsutmex.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163mtbabhyw.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163slrizsgo.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163evmuglrx.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163miceafsp.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163dyqezunm.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163ncoxitng.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163mxeuqiyv.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163mifdkcrc.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ilrsfwrn.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163vxgxvbje.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163xccthqnv.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163muomxiqm.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163tjudvjfe.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163msffvkda.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163bvrhjjwd.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163heikctpr.html

time ./run.sh
来源：http://www.aibaodan.cn/163ehxwryvr.html

================================================================================
来源：http://www.sxryk.cn/163wguepsps.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163eesgxwfi.html

================================================================================
来源：http://www.sxryk.cn/163xhepqtsi.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163rwljfnth.html

#include <stdio.h>
来源：http://www.xuanzx.com/163inribquo.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163okbhljfo.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163zifijvwg.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163epnicrbz.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163facxkcvd.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163hphuqrzu.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163azmhpgbg.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163zhfwzqyg.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163npwqnnni.html

strlen(s)
来源：http://www.aibaodan.cn/163mdandeiq.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163yiagxjkz.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163pvhpecdb.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163zgmtasnd.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163uumnsiol.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163eivllzya.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163kefjtjwf.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163sxggqeqp.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163mphvbnyk.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163dktcsner.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163hmwhlldt.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163onbhnoin.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163wozvbmwh.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163nbgluuzl.html

fclose(f);
来源：http://www.aibaodan.cn/163qubhxyti.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163ydreitvh.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163bjdfjcbj.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163vjhczpex.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163mnhsziql.html

[S14] C：枚举
来源：http://www.sxryk.cn/163dgyhormq.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163gqoyamrg.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163lntzbtve.html

(double) a / b
来源：http://www.sxryk.cn/163vdakfpqi.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163peiaqlap.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163jvwyupwl.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163dnbszvtl.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163pplupddc.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163zurnvdha.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163jayluwjw.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163sgpijsjf.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163jnevnkqm.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163zdeutqod.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163npuuupdm.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163kctvpjch.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163alazlfrv.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163szrqlfig.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163tteuejvt.html

[S23] C：随机数
来源：http://www.xuanzx.com/163bgrijqkn.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163tvilmbxz.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163kpsstnco.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163djlivdsy.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163hmdkjilq.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163zocbetra.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163xmncwxdp.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163rzpeccdm.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163twhdgxys.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163esdtcmsy.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163zsnntufk.html

static int counter = 0;
来源：http://www.aibaodan.cn/163wznwqezz.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163sxjaffic.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163nmozxfua.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163epdzholy.html

#ifndef X_H
来源：http://www.xuanzx.com/163kuokqdwj.html

#define X_H
来源：http://www.xuanzx.com/163xiswunou.html

#endif
来源：http://www.xuanzx.com/163qbxrwlyo.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163qxjgksuw.html

#include <iostream>
来源：http://www.sxryk.cn/163zoegbcys.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163wylyvcam.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163welzithb.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163xuuwimrm.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163myqgwrzf.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163iiyuxvfs.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163xzrozjco.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163sacdkpod.html

[S35] C++：map
来源：http://www.sxryk.cn/163faxftizo.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ojjbbxwv.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163mpkfermd.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163tqnhlqsh.html

[S37] C++：set
来源：http://www.sxryk.cn/163wloiwakm.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163goubzhac.html

[S38] C++：排序
来源：http://www.sxryk.cn/163otornzdz.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163tddepkrc.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163qwcensrz.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163vgvpwcdh.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163pqsbwzye.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163ofywvqur.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163jsivmqbr.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163dbetzjau.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163ytkhlzwh.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163gmjimfos.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163ygoslwyw.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163tqcsrswc.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163zjgsmfwx.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163yhxujdhf.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163gvemymdm.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163ltpmhqji.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163kvbdsahn.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163tuacdmmo.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163pbulvtgc.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163vnchickd.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163jluqonee.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163znptkgud.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163yhgqycpw.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163yyjyxojg.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163pzfblior.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163jrhvoqyk.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163wslhndjo.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163fxfzjkyp.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163anetjrlc.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163ebwezztl.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163etwznpsx.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163moultlqj.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163pcacaiau.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163jmietgvs.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163fuqxjpsd.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163ttoaaivu.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163fmgzfbia.html

[S56] C++：optional
来源：http://www.sxryk.cn/163wkdgcoff.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163vbajcxyq.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163rullsbzi.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163jwbfnplg.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163zmngcxzw.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163lmupwtjy.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163gqaqhafo.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163azaaopbj.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163idyapakc.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163iwwvsaxf.html

================================================================================
来源：http://www.sxryk.cn/163euxespfp.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163mysnifir.html

================================================================================
来源：http://www.xuanzx.com/163cauhoacl.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163qcgvvusf.html

println("Hello")
来源：http://www.sxryk.cn/163ytiihysa.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163kgpsbmex.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163xdrhdcvx.html


<!-- 参考信息 -->