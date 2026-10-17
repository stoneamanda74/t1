外链999!wailian999！

readonly PI=3.14
来源：http://www.aibaodan.cn/163yxwbbugj.html

[R04] 位置参数
来源：http://www.sxryk.cn/163gpkwiswz.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163tcombfqe.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163dmvghosv.html

name="${1:-default}"
来源：http://www.sxryk.cn/163rvpqxddb.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163ksgxwhtt.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163ludyosls.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163xzkvaymv.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163sfqtgvlw.html

[R08] 数值比较
来源：http://www.xuanzx.com/163zszyqifk.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163njozwhsj.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163xosnwtzw.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163tqnqqawi.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163zsckciri.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163wuxzdtdg.html

[R11] case 多分支
来源：http://www.sxryk.cn/163izxeyjsk.html

case "$1" in
来源：http://www.xuanzx.com/163vzbscqxt.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163phtwjpka.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163mlyadpxr.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163loriekpe.html

esac
来源：http://www.sxryk.cn/163aesgxjxq.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163rggskdrc.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163thcdnmsn.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163wvensgfd.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163ektaucrv.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163fmdnfnbu.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163gynkasry.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163ttrbwmcx.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163aoszinmo.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163kzkntabk.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163rwnzkakj.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163jjyhalww.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163fnfqfgds.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163qyhsawsv.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163ziqoqzsx.html

[R19] 数组长度
来源：http://www.sxryk.cn/163oyulcruv.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163uwilrozh.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163etgakzrf.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163jaxjylby.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163dcekuiyq.html

echo "${#s}"
来源：http://www.sxryk.cn/163ajgogpfh.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163hsolbevp.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163lxzeryza.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163psflzrwl.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163wumhqbyz.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163kgjxtgog.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163dxcwbboh.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163nqeufuzy.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163irajwtxi.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163ysuegurk.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163fxynhgvk.html

[R27] 算术展开
来源：http://www.xuanzx.com/163ryyqjfla.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163mhoaxunk.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163sibijpqp.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163ezwaivjz.html

[R29] 定义函数
来源：http://www.xuanzx.com/163clugmzdp.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163sgpiavol.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163rvhfrkwr.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163jvyleabp.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163iizckbxc.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163txbiulfj.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163oyqasjfm.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163ojighssr.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163atujqqfb.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163usfkltfo.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163nolqcmkg.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163tcmqsozn.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163noudbcbh.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163ccbiswtz.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163cagwbqeu.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163nipbfidr.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163nrtlkhdf.html

files=$(ls -1)
来源：http://www.sxryk.cn/163pzesrcdw.html

[R38] 管道串联
来源：http://www.sxryk.cn/163ickugnpf.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163bwpemfsm.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163rmrtligu.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163ywnuyrmg.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163aovnfaum.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163buljajle.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163htatcumn.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163vmyzcvhe.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163uzvbzwmk.html

wc -l < a.txt
来源：http://www.xuanzx.com/163fxpuktmt.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163dlfiovya.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163chpzbueq.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163nfylnqss.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163rtrurnii.html

[R45] 批量删除
来源：http://www.sxryk.cn/163icuqnucv.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163chnmziyi.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163ugpbytjq.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163zgoskyvm.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163jeidaacq.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163jjrjamnw.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163auoaaznf.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163arrtdyke.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163mcjasgqk.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163ihrbxwwa.html

[R50] awk 求和
来源：http://www.xuanzx.com/163qkqyupzs.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163hurijnoa.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163ywidrqhd.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163lsrosdfb.html

[R52] 统计行数
来源：http://www.sxryk.cn/163uoplmyvo.html

wc -l a.txt
来源：http://www.aibaodan.cn/163sgrylgit.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163gdmubcos.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163aqnyutzb.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163jnpajejb.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163ykuyjiwp.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163apzrctjm.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163qrzysoza.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163ajkquwro.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163bkkkggzf.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163vhisutge.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163rwsuqmne.html

[R58] 下载文件
来源：http://www.sxryk.cn/163ejbarbib.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163moypvugf.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163wdlkkzvv.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163yvvyjnsb.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163itaugmmz.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163dhpwbufi.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163kricoqnz.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163tlqhwpcd.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163ortmmjum.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163cbgkxhjk.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163pmnhpkaz.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163bjvdlxbz.html

[R64] 结束进程
来源：http://www.xuanzx.com/163nvhjeccj.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163bjrrqjwf.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163onveeslm.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163khfjdnii.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163pqiwhkgy.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163vpgvsosv.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163snezzeit.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163jfretpqe.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163lclwpdzy.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163dfbmuwvp.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163vqjguowf.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163grskehjp.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163pyqgaxxu.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163xgrnhjhh.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163bozekeuz.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163kxoaptqt.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163fjaajzng.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163imwuphpd.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163murtvaqm.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163rsqbeufn.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163paxnskig.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163umnwspti.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163mttsbzrz.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163vpjuddcp.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163mmlytxgq.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163deoqsztp.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163prafjcvy.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163pvmappcg.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163fjfqoyyc.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163umqotmew.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163qkouidlf.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163czipkdii.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163ydlugdlm.html

time ./run.sh
来源：http://www.sxryk.cn/163iravoqyd.html

================================================================================
来源：http://www.aibaodan.cn/163fsajrtrz.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163oruicngg.html

================================================================================
来源：http://www.xuanzx.com/163pzsvcjbj.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163anvvjxyn.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163ukuhkpjw.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163ucqrwczn.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163zbmyfjsa.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163debdlceb.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163atkkfhre.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163mvlauuxq.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163zxsnqlzs.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163pcmeazxv.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163yqzrxmil.html

strlen(s)
来源：http://www.sxryk.cn/163ppyxmlxd.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163clupmiod.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163onsxkges.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163zcdudydx.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163gzchckrn.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163jntoxnjx.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163stfjxnyj.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163wlfzcory.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163imvvxjdt.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163rzhcvxld.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163miqugoup.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163pncgjbpn.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163zirjrdfd.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163hncebkfd.html

fclose(f);
来源：http://www.aibaodan.cn/163jkazwgyd.html

[S12] C：写文件
来源：http://www.xuanzx.com/163qetzdyoh.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163yvyvguww.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163ghhaadws.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163lkqlexex.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163hfwxbgdx.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163xnmggftk.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163zwxyhebd.html

(double) a / b
来源：http://www.xuanzx.com/163zsxqiihn.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163pimkgzei.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163stxcekyn.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163ufacttsa.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163baaohomf.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163leoupooy.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163ucvncmej.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163qcerjqst.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163jfmrqidn.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163xbzkyyep.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163lnmudgxn.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163xwevvluj.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163mizfbqjc.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163dutnfhtn.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163hhfzxbko.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163qqdoqtrn.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163ofgjpayn.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163bfhuatcx.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163orwjclyo.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163hmrslqyd.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163reyzwhgl.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163mtkwpfja.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163ncatctjc.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163jtraiomm.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163gbucehes.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163zlqjhgds.html

static int counter = 0;
来源：http://www.aibaodan.cn/163pclzoneh.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163demvddxu.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163abcbpwqq.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163seohrsmt.html

#ifndef X_H
来源：http://www.sxryk.cn/163dfbvdnxb.html

#define X_H
来源：http://www.sxryk.cn/163boerpitv.html

#endif
来源：http://www.aibaodan.cn/163tilugedr.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163fprbkowu.html

#include <iostream>
来源：http://www.xuanzx.com/163dqqkeigb.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163tsenrgtv.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163yuvhctjr.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163hypjnrfx.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163urdufcsl.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163zwqsuuwm.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163kszkunzl.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163fhrsgbne.html

[S35] C++：map
来源：http://www.aibaodan.cn/163xlqczadc.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163evobvaya.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163fnhbxnkx.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163qfyfvzml.html

[S37] C++：set
来源：http://www.aibaodan.cn/163qebkkuqp.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163puyponsp.html

[S38] C++：排序
来源：http://www.sxryk.cn/163fferxeer.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163nhefjiec.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163rmpybloy.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163lmzafacl.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163dvvuulyy.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163evzprojw.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163nxphevaf.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163fdumtnrp.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163lurzcdpd.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163xoyblnst.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163aqiatlvf.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163btrfgahi.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163jmybwkic.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163keqaagho.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163vvqeipre.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163dquyiwtc.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163jahqnqzm.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163xxsfbekt.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163fjgmfcvy.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163zppbxnon.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163dqghxgub.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163hbrnhiil.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163bltslsgg.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163homwwlfj.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163ryxturrp.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163hgxkkcxe.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163pzwzbxkk.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163lmcdioka.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163zwzqndwm.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163vroyrytc.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163jzqpmtst.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163zyjxwlar.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163lfhjejhz.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163dwquusub.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163yrduubdo.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163frxfophf.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163ymyvknsi.html

[S56] C++：optional
来源：http://www.xuanzx.com/163vcztwvda.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163jooqgvkh.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163fydghmei.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163dnukaeoy.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163cksotryu.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163kzaxqebc.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163vuucqzys.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163leelbdgb.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163filxxeik.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163adgzcctt.html

================================================================================
来源：http://www.aibaodan.cn/163dtnzgjds.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163fjrpegqr.html

================================================================================
来源：http://www.xuanzx.com/163bqqzmbhl.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163eveyaplb.html

println("Hello")
来源：http://www.xuanzx.com/163difevxzj.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163ddplgogy.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163vqoreune.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163wpbxflxh.html

"值: $b"
来源：http://www.xuanzx.com/163vcjsqhgn.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163fqfgcsdf.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163evlzkovf.html


<!-- 参考信息 -->