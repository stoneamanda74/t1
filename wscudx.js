外链999!wailian999！

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163rhzfriyy.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163vackbbpu.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163ppnfkhlm.html

================================================================================
来源：http://www.aibaodan.cn/163bifbobyo.html

R. Bash 专题
来源：http://www.xuanzx.com/163fwfsgdax.html

================================================================================
来源：http://www.xuanzx.com/163bkjfjqtt.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163nlrvlppo.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163duhzizjh.html

set -euo pipefail
来源：http://www.xuanzx.com/163jwdmlgip.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163esucnzyl.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163snlapmya.html

[R03] 只读变量
来源：http://www.xuanzx.com/163kzgaipgq.html

readonly PI=3.14
来源：http://www.sxryk.cn/163grdwmbww.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163yrctkleu.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163rpugkhga.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163uqrjnciw.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163mvpbfphz.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163wtqdgxeg.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163aalylynn.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163ismsonur.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163cqcvdnxf.html

[R08] 数值比较
来源：http://www.sxryk.cn/163wkfjnyjm.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163hhwzvrdj.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163fnslnovm.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163ukfuxobk.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163ogtizoew.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163mvyhasgh.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163etbcnnbg.html

case "$1" in
来源：http://www.xuanzx.com/163cwtsaegj.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163avplkvhf.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163bxmpckez.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163dxvrurhq.html

esac
来源：http://www.aibaodan.cn/163howrrppr.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163kguxiblq.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163wknsvgvn.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163kgzgxbgl.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163aafrvtmn.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163giznygpw.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163xxdcctkd.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163mjerkkqi.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163wftbczdr.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163ynifoojr.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163mqyoctql.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163fteodpft.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163hgacqhfz.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163uxdncubp.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163cznomoqx.html

[R19] 数组长度
来源：http://www.xuanzx.com/163jzfiturf.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163eebxjwga.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163xjhifigo.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163uvskkira.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163vfaamkup.html

echo "${#s}"
来源：http://www.xuanzx.com/163qcasnkjy.html

[R22] 截取子串
来源：http://www.sxryk.cn/163yykvlufz.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163qekwrbfy.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163woinoquf.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163rxaqlmgy.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163yzdvbkxl.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163hzcghqqb.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163ebnktiac.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163tgoiauyf.html

[R26] 命令替换
来源：http://www.sxryk.cn/163zdrxkbmn.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163vmmixsxi.html

[R27] 算术展开
来源：http://www.sxryk.cn/163kdwbolrp.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163uzbzkxsq.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163pioxhajf.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163fawfhlax.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163qhkddfdt.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163mdkrreop.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163anfahctn.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163nzgqypir.html

[R31] 局部变量
来源：http://www.sxryk.cn/163dgtxbeyo.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163mxaqosxu.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163hzrbkgyt.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163ysxawyot.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163aawnpubn.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163zqgmpplx.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163ftmdufzk.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163zntcxiik.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163nyravztb.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163lncknxnz.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163qpnbxlvv.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163njovajwx.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163hylqumvz.html

files=$(ls -1)
来源：http://www.xuanzx.com/163gzsratpa.html

[R38] 管道串联
来源：http://www.xuanzx.com/163wtkgvjeu.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163rpinntjb.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163poukwxbf.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163aectskbm.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163vptghquo.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163aksxpnbp.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163gsuaptsu.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163jlvxfcdt.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163thgmdnxg.html

wc -l < a.txt
来源：http://www.xuanzx.com/163rwsdxvsm.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163vehigwcx.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163hbgcguqb.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163eapqgitq.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163qbppmqax.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163cxurfeds.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163ttffaook.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163atebqdoy.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163sfulhbne.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163lgsowjyk.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163xnnuwdtr.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163yfkxxhhz.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163zudfsdmj.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163fjishptb.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163uupgkctw.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163ursxrhbv.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163njuchilm.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163pzsvtsbf.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163ogzugxxb.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163mjcfpdox.html

wc -l a.txt
来源：http://www.aibaodan.cn/163ffjdawab.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163woofdghp.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163gbtfgehk.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163rbscswqd.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163adjgikqd.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163vdbngdml.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163gksgjgku.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163ukakbffu.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163dydhkhdi.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163tmxxviof.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163apbqbamw.html

[R58] 下载文件
来源：http://www.sxryk.cn/163tjojnbao.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163xmszpqhk.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163qeeimzra.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163zwyayqse.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163ojpelazq.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163prvzshwp.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163rbjggxpv.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163rqgcxfre.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163hgnzexeu.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163qlfswkdl.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163kezqtnzq.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163tqqdwstr.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163psdbdymt.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163vekchslj.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163lkffncvo.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163btdliycg.html

[R66] 定时任务
来源：http://www.xuanzx.com/163gqybtlex.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163iujnclyx.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163ewhleeid.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163fcvvlmkt.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163yvxglgsb.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163bsbzmeye.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163gxtwegsw.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163ilzenjce.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163xedlyooj.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163wzfyrwgc.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163rrizxcrn.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163axjuiggv.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163kptjzvvu.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163wtphamxz.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163hqwzizmd.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163jeramnfy.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163sszycawp.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163skkrbzkp.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163osajavcm.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163ngfqqbtl.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163nrdauemv.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163riavvray.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163tmxqugti.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163istyiejy.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163dtkauwuy.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163prwmfglc.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163gvnoapdo.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163qrdvxwct.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163qpdwfgjm.html

time ./run.sh
来源：http://www.xuanzx.com/163vhpjcbgh.html

================================================================================
来源：http://www.xuanzx.com/163riahohao.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163mvvucmcp.html

================================================================================
来源：http://www.xuanzx.com/163obbyluix.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163vlstkfmv.html

#include <stdio.h>
来源：http://www.xuanzx.com/163liblsqzu.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163cckbhzek.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163lreoexqx.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163kgvwvebt.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163gcewlxqt.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163vinoboqu.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163erphpkqo.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163uxuoomds.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163nodmsmaw.html

strlen(s)
来源：http://www.sxryk.cn/163gitezduf.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163ymccxfct.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163cbbrrsqd.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163tvuhvrny.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163uewworsr.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163fowjdajf.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163vtwyskil.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163xydyfnvm.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163qmreikxz.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163yzmsgfsb.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163btbesepy.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163cjwumzvz.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163kjintudd.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163npjceqjn.html

fclose(f);
来源：http://www.sxryk.cn/163ygsbgpff.html

[S12] C：写文件
来源：http://www.sxryk.cn/163vldyjvot.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163isgwkczh.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163ovdctqgx.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163owvwnkcp.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163ipynowah.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163zdxmvwma.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163xmrfxndl.html

(double) a / b
来源：http://www.aibaodan.cn/163djxutyvv.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163xgksbxso.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163avkiwlhl.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163aouqlggr.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163mmznojjd.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163ipkgymhq.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163lyvudpac.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163eqtgbpnw.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163tukxccfp.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163jeoezasp.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163eroruymn.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163ptgrxuem.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163qddkkktm.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163olellgen.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163cfagvujk.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163huekailk.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163iwbbjqvd.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163kklbhlgx.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163vjtielmd.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163hiehofnn.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163vuemrzhf.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163iewsrgfv.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163uzxthvla.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163uuxibfwk.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163ketwjsth.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163tpbrthcb.html

static int counter = 0;
来源：http://www.xuanzx.com/163xgdpcimr.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163jppikwmw.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163txhwfydu.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163mifcyuxy.html

#ifndef X_H
来源：http://www.xuanzx.com/163rgognifc.html

#define X_H
来源：http://www.sxryk.cn/163sfescccf.html

#endif
来源：http://www.xuanzx.com/163phoxvmyb.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163mthhyvsd.html

#include <iostream>
来源：http://www.sxryk.cn/163olugtzmm.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163nkkdybuk.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163fpvejgsx.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163lcdcuyax.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163qrrpwmub.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163dxngvray.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163gacekhkv.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163qxmusilu.html

[S35] C++：map
来源：http://www.aibaodan.cn/163hlkcytqq.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163fhicshkg.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163yoodqvhy.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163nxgvinqy.html

[S37] C++：set
来源：http://www.sxryk.cn/163zbcziins.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163goparzom.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163nnfajtvk.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163lcqacfzy.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163xlgoalbx.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163ibmhtzcm.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163ttnjeevb.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163ywjbjood.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163zltidxpm.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163wjbococg.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163bivnmedw.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163pdayskcy.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163smqvzjik.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163zjbjyqrd.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163hfadyqil.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163ajsrwfkt.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163gsxgbxlt.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163jtjflwaq.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163drlexszs.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163nzmlrigx.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163siaevhbj.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163ziwckuoe.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163zddpwrqv.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163ispykgls.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163vsgadhvo.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163adzhdypp.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163ycolfgwx.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163ilywojti.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163sdombbda.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163cxesagey.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163pvtwelau.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163blxxeiul.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163fcrikgqc.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163dlvmurnc.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163tzcknqdv.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163nvpsulsv.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163newdbcnb.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163tqxlbzwn.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163hpnjptyr.html

[S56] C++：optional
来源：http://www.sxryk.cn/163fuumbwte.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163cmbtcbpb.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163cjrzwstq.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163qhkivzke.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163cgkubkkf.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163yiowohsw.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163jcaeowpz.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163wzjuzhbo.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163wwbmmnkf.html


<!-- 参考信息 -->