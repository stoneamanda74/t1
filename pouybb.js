外链999!wailian999！

set -euo pipefail
来源：http://www.aibaodan.cn/163qjofaiez.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163lunlewmz.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163jsbjbhtt.html

[R03] 只读变量
来源：http://www.xuanzx.com/163aygbgred.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163hnujqorg.html

[R04] 位置参数
来源：http://www.sxryk.cn/163bbszlbmq.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163ahdjqkvb.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163egzzheda.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163aggbdord.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163kuqvcvaf.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163jjrebkqy.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163fjdwdcjl.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163donlgrsy.html

[R08] 数值比较
来源：http://www.xuanzx.com/163vmtkmhka.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163vrbqwmyu.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163jbaqdikp.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163ihsyklmj.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163ncmsgopu.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163yvxxqfhq.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163nckkgort.html

case "$1" in
来源：http://www.aibaodan.cn/163mserwkfh.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163pffjrayq.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163tispbkhg.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163obfmgweg.html

esac
来源：http://www.aibaodan.cn/163iyvzdpvs.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163fjoflert.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163shllqskf.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163dpgloznf.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163buwgpsoq.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163gvcovgvu.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163copfavax.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163tiefaevy.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163hjxjczna.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163yefkbxus.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163gsceatux.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163papqamox.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163pfbcrcxi.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163cgljgexn.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163nmmuvxfw.html

[R19] 数组长度
来源：http://www.xuanzx.com/163moofyabo.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163dyoocqgf.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163jhhmgpjw.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163vrxkjfjb.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163rgvlcdfm.html

echo "${#s}"
来源：http://www.aibaodan.cn/163bgqfxsja.html

[R22] 截取子串
来源：http://www.sxryk.cn/163ygvdlbul.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163hbafamaz.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163mjdvrrwq.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163ptukrwto.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163sydyazbw.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163ywgkuuuv.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163asxbokjr.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163sspdqgni.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163kyyuucsq.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163etvidrgi.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163tijdcadk.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163xcsivvkh.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163ifqhvuvf.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163yrsomksk.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163iramgmgg.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163omvuabhz.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163psbmtklm.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163theokjij.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163rkmvvxcu.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163xsejrkow.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163ciuzaesq.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163lebsdldb.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163zbvlqvmh.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163yzuasghk.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163unflnebr.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163wyyyyrdw.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163kntwsekn.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163vkmzdjbg.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163lldprqrc.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163ltlpgelu.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163tehxfayu.html

files=$(ls -1)
来源：http://www.sxryk.cn/163jbwpygjv.html

[R38] 管道串联
来源：http://www.sxryk.cn/163lgswlqht.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163ivzxcckn.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163jzivtlxh.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163ivhnhfzx.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163vjeisbaa.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163kysnbunz.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163hrvsrbbk.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163eqigpjwt.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163mflwirkx.html

wc -l < a.txt
来源：http://www.sxryk.cn/163htlwpray.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163edenodsl.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163cfnxmiwt.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163ghowusyh.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163palgamgj.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163cowxhtku.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163rucwxiue.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163lknppqyr.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163corvnazp.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163spuinbjr.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163zgojrjgx.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163dwvryrxn.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163azxnknsn.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163mvrdnrhp.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163xqbwmyce.html

[R50] awk 求和
来源：http://www.xuanzx.com/163uobqxbxj.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163euqcqyrk.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163dykzaofz.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163uawdheos.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163uwwvutnd.html

wc -l a.txt
来源：http://www.aibaodan.cn/163hvwwnnqb.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163wsoiwthv.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163rkrksisq.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163wwwvfxos.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163bbwfxrfs.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163ujhcdvgs.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163bnanuuse.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163zdpkvvka.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163murwhhnf.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163fjlmzfzh.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163ktkoqehb.html

[R58] 下载文件
来源：http://www.sxryk.cn/163pvpsukkq.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163siqwcjtp.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163eflcqgcg.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163zolconxg.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163mlevzbpp.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163axtfkftr.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163ikhjtpha.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163hxygvyxs.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163ctkoning.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163wgrfkxsp.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163ouaqffjt.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163jhcbuvbd.html

[R64] 结束进程
来源：http://www.xuanzx.com/163lzkjrkmx.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163uwvhqjah.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163mzmuydgk.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163omlecnyk.html

[R66] 定时任务
来源：http://www.xuanzx.com/163isbblkht.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163ngasbwio.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163mjfxspgy.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163qvvsnajw.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163lknbockg.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163tgaeycjo.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163qudrkwmg.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163bddhjfto.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163wvuhmrgy.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163dghqxxbb.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163fxdiamst.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163xzccsmqy.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163xdwarcvw.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163mfqrjueg.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163ugdfkoww.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163hebuovvs.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163ulchvefi.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163nvvefygm.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163jdamtydg.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163vpduasys.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163uvgqcimo.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163vatdqcsm.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163cqkuaqul.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163nljmzmdk.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163uyadqqug.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163sofvuqtw.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163uanchllx.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163zxbqlfee.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163zczluphr.html

time ./run.sh
来源：http://www.aibaodan.cn/163qxgpndor.html

================================================================================
来源：http://www.aibaodan.cn/163zacqlkaa.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163zmxlcfpe.html

================================================================================
来源：http://www.aibaodan.cn/163cturhfas.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163axttwhos.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163pbdrymcr.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163bbrjqaud.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163sffyorbc.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163lrpiouzb.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163qxtuwqtt.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163xzgltbhm.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163snqvzkze.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163vobytbrl.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163gqbkydrr.html

strlen(s)
来源：http://www.sxryk.cn/163oekgvwkx.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163tkacjihk.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163fknddxfv.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163glkbqtty.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163vkrrbobm.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163gfftschn.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163mpuklydz.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163rqcmryyg.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163fvacowbn.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163dozbugpq.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163ckyvjyol.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163prunefkz.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163cyomrkzk.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163thszwcvy.html

fclose(f);
来源：http://www.xuanzx.com/163yzlwdjnj.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163hdsyeard.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163vwkvfkhr.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163owapgitz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163xexvbjdp.html

[S14] C：枚举
来源：http://www.sxryk.cn/163whkezdni.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163hbnttmtj.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163iyyzcrab.html

(double) a / b
来源：http://www.xuanzx.com/163acgpzavl.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163lohplpzs.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163pcqlrlnt.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163hbuzdljf.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163ctestegu.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163cjjsmxue.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163pwnmblnm.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163babinwjq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163fkmiazug.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163xumwppeo.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ampflqln.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163qpozoxid.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163qygwfwer.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163zvchlbus.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163yiqzraoq.html

[S23] C：随机数
来源：http://www.sxryk.cn/163zijpmcrb.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163fzfwqrok.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163yfileqbw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163ppiudwfs.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163gvjirhae.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163tuhurjix.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163ocfhjtwd.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163vpijqcwu.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163egygwaxj.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163fkufgeeh.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163vxbvxnnm.html

static int counter = 0;
来源：http://www.aibaodan.cn/163xqwwgbsd.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163nzxjcwge.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163yzthdezw.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163sqmmijjo.html

#ifndef X_H
来源：http://www.aibaodan.cn/163xvmmmvbu.html

#define X_H
来源：http://www.xuanzx.com/163inxzqrmi.html

#endif
来源：http://www.sxryk.cn/163jfmbhuqq.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163guxlcpgy.html

#include <iostream>
来源：http://www.xuanzx.com/163fghzxxkg.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163gqeggadu.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163kqdfguif.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163upzubmfz.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163pvudzrcm.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163rrbeyaqx.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163xmfqpipy.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163fcpdbcca.html

[S35] C++：map
来源：http://www.sxryk.cn/163fyhgaccp.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163xrfuxlbl.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163pjthdigz.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163vypnmlzf.html

[S37] C++：set
来源：http://www.sxryk.cn/163gavhghoj.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163crogkqvj.html

[S38] C++：排序
来源：http://www.sxryk.cn/163jijyjqca.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163tggpivzk.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163audbikdj.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163rjsnhwnf.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163jhvgdjkm.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163ttdykuao.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163pxoejvfr.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163mitrslzj.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163iuvvcfxz.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163jojlzlej.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163srssgwlv.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163dafsakol.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163cyktckgo.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163vspwxqkv.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163qemfdxmw.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163oapytmgq.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163lqpkmfiq.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163kaxeuoet.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163uvxjsddr.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163cfuddpcq.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163icjxenhu.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163grvkedoe.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163krrzphwh.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163jzvisacl.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163jrfbgcuu.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163jipryzgr.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163ztuyukuj.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163zmhapjin.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163pnlpebwa.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163lqrwogey.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163koumcugk.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163fitijluk.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163iutlskrz.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163cwsvudoq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163pmhwubxu.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163igjzhbdx.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163fwlokfqq.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163fflxyfom.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163rspcghwr.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163ewlxyvmy.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163gwydqgvt.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163yhltrrdf.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163adslbqrg.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163dxluwfwl.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163wmlgxlqp.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163zreopaku.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163mlfjupdt.html

================================================================================
来源：http://www.aibaodan.cn/163phnepdke.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163lcuvlnpa.html

================================================================================
来源：http://www.aibaodan.cn/163chqbiyoe.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163hkeptghp.html

println("Hello")
来源：http://www.aibaodan.cn/163xoyrwlwn.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163vsfxpfdj.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163elhklsrx.html


<!-- 参考信息 -->