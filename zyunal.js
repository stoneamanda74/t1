外链999!wailian999！

R. Bash 专题
来源：http://www.sxryk.cn/163hsvutvfd.html

================================================================================
来源：http://www.sxryk.cn/163lfvunwac.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163vrggleiq.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163sohkppgz.html

set -euo pipefail
来源：http://www.aibaodan.cn/163uvolepap.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163wnhwztvd.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163idswinex.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163bwyhtxun.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163eqhkqaxk.html

[R04] 位置参数
来源：http://www.sxryk.cn/163llfgdzih.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163gfhjltan.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163bakyxgah.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163qygvmcqh.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163wwlvhaxr.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163rgsgtwtd.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163jnnuxvlm.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163nfoaxztb.html

[R08] 数值比较
来源：http://www.sxryk.cn/163lozeiesp.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163jbfwpztt.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163gpamhnxw.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163zphonrpk.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163csylxogi.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163okgxoroy.html

[R11] case 多分支
来源：http://www.xuanzx.com/163mblhrvqu.html

case "$1" in
来源：http://www.aibaodan.cn/163avoraefb.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163qgcqgtsg.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163cprpzcax.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163jewokqmy.html

esac
来源：http://www.xuanzx.com/163unhsflsy.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163ajjzjgqb.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163prqfeggk.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163rxaupnvr.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163ewbcchss.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163oosblmpr.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163oibcbtam.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163spwlqwzt.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163psnreyiz.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163tvnyotln.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163ndnmsomb.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163tbmwfkgk.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163iperehaz.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163kgpgkjqg.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163kudgivzt.html

[R19] 数组长度
来源：http://www.sxryk.cn/163osfwmdpb.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163pkmtwrht.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163dasayecq.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163rwzgiodp.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163sqxqvevv.html

echo "${#s}"
来源：http://www.sxryk.cn/163jkhbqxnc.html

[R22] 截取子串
来源：http://www.xuanzx.com/163vcuaakos.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163zvykzxjw.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163kymsmvdr.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163ausjrpzw.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163lsurdpep.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163mackrfmy.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163rkrkecmo.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163hpwgtioj.html

[R26] 命令替换
来源：http://www.sxryk.cn/163abdycxlz.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163hugcugpd.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163esmkufpl.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163hdwamfgz.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163fqrqqkvx.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163mnvmzpbj.html

[R29] 定义函数
来源：http://www.xuanzx.com/163gbimmhtc.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163gvbpitzq.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163irjrtlgj.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163rortlumk.html

[R31] 局部变量
来源：http://www.sxryk.cn/163vspzyqik.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163juoqtvmv.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163cxlvywch.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163uwknkuzm.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163dqqfhevc.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163deulqmkz.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163xtjepzbx.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163exsbmpfn.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163tpzwiiox.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163umrditjk.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163fxkwmgnq.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163soxahtzx.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163eclahuah.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163cpxquzzk.html

[R38] 管道串联
来源：http://www.sxryk.cn/163lxlresyq.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163zhjttbqm.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163mrjckysr.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163asjokxct.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163xcsaehcv.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163szidvfgl.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163wxrvmtqk.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163jjctnmgo.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163fthlxmmc.html

wc -l < a.txt
来源：http://www.sxryk.cn/163uyixqhtl.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ayhzdodi.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163utetvorm.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163nunekylr.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163nrmemleb.html

[R45] 批量删除
来源：http://www.sxryk.cn/163mwgugeqp.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163yaxdqawb.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163hkgkfjnk.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163gjxsblpp.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163ttzaoxeo.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163cityobxr.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163hcdoqhgt.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163cnvdcmzl.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163ehalvgzv.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163rlzifmnu.html

[R50] awk 求和
来源：http://www.sxryk.cn/163oyflzmwx.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163xlhxvvsp.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163jkjdsnbs.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163mpnnctag.html

[R52] 统计行数
来源：http://www.sxryk.cn/163orixjudi.html

wc -l a.txt
来源：http://www.sxryk.cn/163bdyqjzbl.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163cpkyryje.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163wthesgot.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163bikpbzvz.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163vksyaprt.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163tcftokui.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163kceygzmn.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163sbjrpybq.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163ejtggyoy.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163ihppqacg.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163ilvsbzly.html

[R58] 下载文件
来源：http://www.xuanzx.com/163phvzzsvt.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163ryyygpmd.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163raqdomkw.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163ndrqrqas.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163myvqvthu.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163tebvkxzl.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163uwajivic.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163qcbgvsdw.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163oshhbrob.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163jgkbcqqv.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163rphhobkz.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163faciwork.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163piwugjfm.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163kwotarhg.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163rrfpwnpp.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163dvwmifvc.html

[R66] 定时任务
来源：http://www.sxryk.cn/163qvnhvume.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163pkegahuk.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163ozmirgff.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163okwynbik.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163wolhgduh.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163cgipjbnt.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163xtixgeoj.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163yymyiugv.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163mpmrkecu.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163jlokkauv.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163wbluqnze.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163tmifemwh.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163gpacliij.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163lxuxktaj.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163rptdnrhz.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163gkpulkuk.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163foaptbhc.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163fnanjeqm.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163dyaszvws.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163qwdujmqv.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163tegmvemk.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163xfjabzkc.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163profxjwl.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163jfybkstn.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163ugqpbsld.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163tpjzusak.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163phpyemtc.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163ahlroprh.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163kqwmpsyb.html

time ./run.sh
来源：http://www.sxryk.cn/163cyovxiff.html

================================================================================
来源：http://www.sxryk.cn/163dmfubzdn.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163qoadllhk.html

================================================================================
来源：http://www.aibaodan.cn/163bkigvizs.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163kivoqwyb.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163tmroftiv.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163wlmhhrvy.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163nbphspec.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163puzgxrze.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163ygkaswuz.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163jzakinja.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163urkvilxd.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163olehjewg.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163wnlnewlb.html

strlen(s)
来源：http://www.aibaodan.cn/163bsomurkg.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163nigwyhcz.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163gldmghat.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163zyezshmb.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163xtmxchai.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163hwzjaeew.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163nrgcvmxq.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163tsoyrowv.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163qbpowjub.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163dadappka.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163ylenrdij.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163yosljlhv.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163khckykeg.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163hjgaetgy.html

fclose(f);
来源：http://www.aibaodan.cn/163ibsqydza.html

[S12] C：写文件
来源：http://www.xuanzx.com/163eaeddqzp.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163wfiyzrfw.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163ioyxtxge.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163noqpcgna.html

[S14] C：枚举
来源：http://www.xuanzx.com/163cfiuozrl.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163pteepyys.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163mxfugofy.html

(double) a / b
来源：http://www.sxryk.cn/163iohdbvlm.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163isbrsyrf.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163fvwufaty.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163ojjahmxu.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163vmqyyaci.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163fhbptkuz.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163esyelmqf.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163ogczgtic.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ktvwpsjx.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163zxkqqrgs.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163gbcxkdwq.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163fmgxdaxh.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163gjnhyrrb.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163ahxevfcv.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163rsgvktun.html

[S23] C：随机数
来源：http://www.xuanzx.com/163kwvoujwj.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163yztrisjp.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163mgoillxg.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163nvvlkspe.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163qietzims.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163aknorrtt.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163xhzshptf.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163nadooqty.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163hjjjafdy.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163xrwershr.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163ktbwkyya.html

static int counter = 0;
来源：http://www.xuanzx.com/163utkcotdl.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163rabtqjbi.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163biymgdjm.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163aunkvrnv.html

#ifndef X_H
来源：http://www.sxryk.cn/163ovspwaqg.html

#define X_H
来源：http://www.sxryk.cn/163lpqpvnfc.html

#endif
来源：http://www.aibaodan.cn/163ngicuxko.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163mivwfwap.html

#include <iostream>
来源：http://www.aibaodan.cn/163inocmmml.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163jbsmdrev.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163bwwlzzjc.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163uvovarpo.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163oozifyfu.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163uxsqndyk.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163zslpoisn.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163zmqwflbv.html

[S35] C++：map
来源：http://www.sxryk.cn/163ulxvqoay.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163rtgqdkex.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163ypohtfzd.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ggvgrrxt.html

[S37] C++：set
来源：http://www.aibaodan.cn/163usqcgnam.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163bjqxdnzl.html

[S38] C++：排序
来源：http://www.sxryk.cn/163jaemdqup.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163zfojhefa.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163aroattkd.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163wtggnsmj.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163xzvanhug.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163ykggqgnf.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163ypsgjnfh.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163yuoiekwn.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163onsutjyo.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163jchyhuod.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163wcvcbgvg.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163rhfxybco.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163wdykqjjw.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163unwwgtrr.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163aysfojky.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163czpiukms.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163tnayjvec.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163asldphxt.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163krturhyi.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163nhgrwmki.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163alybkvze.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163chneseqk.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163fzpkaepg.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163theweueg.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163pkwmsneq.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163hrcqfnkh.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163eytqtzon.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163gswnqpul.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163bgykliej.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163epmjskyu.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163lshrwqqu.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163zptpvuoh.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163xwyghhcj.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163ptephqiz.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163fjublnol.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163kkmuoauq.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163xgbpzume.html

[S56] C++：optional
来源：http://www.sxryk.cn/163hwfteago.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163ryhbexqp.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163eidsvwbe.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163logqrcdf.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163nnntallw.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163indchqyt.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163wrqssbmi.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163fwlglkly.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163juiscwim.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163mutvmxjp.html

================================================================================
来源：http://www.xuanzx.com/163tsmcnwcn.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163gvjoggdu.html

================================================================================
来源：http://www.sxryk.cn/163jwunenen.html


<!-- 参考信息 -->