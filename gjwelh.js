外链999!wailian999！

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163vpoctngf.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163iacnlesn.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163wzxrtznk.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163ekppwxhc.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163ddeohzbq.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163cwhagedz.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163gnemergj.html

================================================================================
来源：http://www.sxryk.cn/163yahwdwcp.html

R. Bash 专题
来源：http://www.xuanzx.com/163giklwazd.html

================================================================================
来源：http://www.sxryk.cn/163ajwsmwhz.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163tzjvarjh.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163dufupneg.html

set -euo pipefail
来源：http://www.aibaodan.cn/163yjcqyqxj.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163bnxjctmd.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163xnarncap.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163cisobznq.html

readonly PI=3.14
来源：http://www.xuanzx.com/163vliyuzwv.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163bmsjnyae.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163xxwxgvmq.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163kkjwrbtn.html

name="${1:-default}"
来源：http://www.xuanzx.com/163owcecvdj.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163jfwyeduy.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163zqghyhqu.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163mywwffib.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163nbcovcjr.html

[R08] 数值比较
来源：http://www.xuanzx.com/163akbeayzk.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163nxobmumq.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163hdkqxovw.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163yfqygsgu.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163kvxuiews.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163wauzqhgz.html

[R11] case 多分支
来源：http://www.xuanzx.com/163tdwqfmgc.html

case "$1" in
来源：http://www.sxryk.cn/163bvtfkdqd.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163mpfmqbps.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163karsepby.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163pfwswyzo.html

esac
来源：http://www.xuanzx.com/163jxbpdqdx.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163zqdqtrmk.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163nvswhjlp.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163tpojunpb.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163nhbbwyjq.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163cgmecxvn.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163gqwmdejr.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163tinbotnu.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163lkcrycle.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163erbxgjwc.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163lsyyytqn.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163bcujaclp.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163seljlnks.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163krftsqqy.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163zkimyhxm.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163kjoyxlxc.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163awycvlsp.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163boknqsmi.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163eijxgqfx.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163atcmygkx.html

echo "${#s}"
来源：http://www.sxryk.cn/163muhemowi.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163ppesuzsi.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163wtcxqumt.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163jralvexs.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163icklabep.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163nnwezyjo.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163mdwkqtce.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163suxypvud.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163uqifhlyj.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163scuxltfw.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163bbsionqo.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163uqwypeku.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163navrxafn.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163xkvngpho.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163wefuifkf.html

[R29] 定义函数
来源：http://www.sxryk.cn/163naqanisu.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163wuplgnii.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163gthhujbg.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163mdbusuhz.html

[R31] 局部变量
来源：http://www.sxryk.cn/163maeyockh.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163rgkvhkuf.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163rawufqgu.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163dysanlpf.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163zdpweefp.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163crxrmnwj.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163qdhrtcrf.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163mgqbzbkm.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163hhictbak.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163clsfayus.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163bnyepisv.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163kzkkwarg.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163wvpdbiwv.html

files=$(ls -1)
来源：http://www.sxryk.cn/163xnhfadwb.html

[R38] 管道串联
来源：http://www.sxryk.cn/163kavknpfl.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163jsxdjtgm.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163lsuvqfoc.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163vygnvjii.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163cuhsflqw.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163lxzwbdox.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163ssfpirtp.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163gzmwgdej.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163cxsvcouo.html

wc -l < a.txt
来源：http://www.sxryk.cn/163retmakzh.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163wjmouueb.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163oosjrhnn.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163gonjudej.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163djevrgfx.html

[R45] 批量删除
来源：http://www.xuanzx.com/163ohwxwcqu.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163yiphskdf.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163zfdgitsn.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163bdrcafdu.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163fevgpkxx.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163bacnmhmt.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163gpsvhmtp.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163lfmxbktj.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163pxzqmmqd.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163pserizyd.html

[R50] awk 求和
来源：http://www.sxryk.cn/163hesmkqal.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163eqalbzae.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163nvzhidxb.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163qwybzcls.html

[R52] 统计行数
来源：http://www.xuanzx.com/163fualcbas.html

wc -l a.txt
来源：http://www.sxryk.cn/163kduvpkeu.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163cfofzgdw.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163ofquiwft.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163pbcsordq.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163dohzjetp.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163bdbpipsb.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163upgwjqtp.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163uydokixl.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163jokodbfi.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163ajebirri.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163ifpexiyg.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163fmomxfar.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163ctudllmp.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163yzprlkkv.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163gabehvpl.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163ansjalwd.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163rzbllxxc.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163ruzhimes.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163mqcsxxcn.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163jxjbaych.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163idjmeawz.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163xslycxst.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163dqxijrxa.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163pkwmkagu.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163wskaqzky.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163wnqnjzqm.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163fbifrogh.html

[R66] 定时任务
来源：http://www.xuanzx.com/163wfzsescq.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163hgryvvzh.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163ruhxdzgo.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163ngsdlxyn.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163aoealvqg.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163ujqolibj.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163hqymfcly.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163ptgeqiku.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163mecmzlfy.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163yniomsrq.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163qmjbgeky.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163okjvfkmi.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163zvjqzzyr.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163qbrhzdyv.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163wafadlle.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163spzsczoi.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163ysylsdin.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163kpgzgvfu.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163rkdvyslw.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163chkdhlmr.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163ygyzjcdr.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163vosipngo.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163pyzfoqok.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163btawqngh.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163pxtumjtb.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163adiqoaae.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163iwncdzyy.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163pfshtpbd.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163wcvgeatq.html

time ./run.sh
来源：http://www.xuanzx.com/163cxfqkyoz.html

================================================================================
来源：http://www.sxryk.cn/163cgmulwqb.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163qpmgozlg.html

================================================================================
来源：http://www.aibaodan.cn/163jorfhajo.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163qopjcimi.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163coaahsrc.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163ddwayrve.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163ibuvxeez.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163hajfszym.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163whtdvmdz.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163rglkggro.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163dmmgptro.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163dbmqlcfd.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163sgozzckl.html

strlen(s)
来源：http://www.xuanzx.com/163qckowkqe.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163cwfjuhwk.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163hnekasgi.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163fwmsheqs.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163kaddsmlg.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163zlzacmxw.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163ihnnaetv.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163ozvlppbq.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163besbifid.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163xogpdjpm.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163wogpqmtm.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163qouxwnfs.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163talsdfuo.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163xmncpgsv.html

fclose(f);
来源：http://www.aibaodan.cn/163iwwpvwzu.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163dryjupql.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163kepfuqpm.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163iebunfhs.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163jkoehooa.html

[S14] C：枚举
来源：http://www.sxryk.cn/163rwnzkglh.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163vcjlgecp.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163wokfvpis.html

(double) a / b
来源：http://www.xuanzx.com/163zswydnjc.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163nwjvndzc.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163ixumqfyi.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163wvfjrapv.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163sqvmtkvg.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163jntedkdg.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163xmyitavo.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163aoluwhow.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163udpwslue.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163lzmjfrmc.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163frwaoxsp.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163oqlxkrkz.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163omthdkro.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163vfdefxsh.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163jvvvfyyt.html

[S23] C：随机数
来源：http://www.xuanzx.com/163fvuwrnyk.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163jaytpgnl.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163qzrajvfv.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163xmrapupt.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163wvghdazc.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163rttwutgf.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163obxmkseq.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163zkvznkof.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163sfmidbhj.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163optrghtc.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163jvfwougt.html

static int counter = 0;
来源：http://www.sxryk.cn/163jcvjddjo.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163ylxqahgm.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163cbjfndiu.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163rikepyev.html

#ifndef X_H
来源：http://www.aibaodan.cn/163cyqfivth.html

#define X_H
来源：http://www.sxryk.cn/163mvliztum.html

#endif
来源：http://www.xuanzx.com/163keyssgth.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163svkeelmx.html

#include <iostream>
来源：http://www.xuanzx.com/163ezbxtdug.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163kzpkqace.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163kyukijia.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163kkfcgion.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163rjrvvytm.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163uhqrqanf.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163dgkgipad.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163ujnjvfbu.html

[S35] C++：map
来源：http://www.sxryk.cn/163ylhjycis.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163zjcyebnh.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163glrhyodt.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163rnbmujdt.html

[S37] C++：set
来源：http://www.xuanzx.com/163ufmgkfxx.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163cidttdai.html

[S38] C++：排序
来源：http://www.xuanzx.com/163twtbxedf.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163hnufyhsd.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163oyccoqhs.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163vmgvhova.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163cicgqzjl.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163ppryparl.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163thpcvrwf.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163opbxgram.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163ajwfappo.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163lomomsng.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163sennjrsb.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163qjklnvgp.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163ergkpbko.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163igamojzr.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163nhqxould.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163uvenvsrm.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163rzadmvqq.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163kkbdxjob.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163uerslfku.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163wgbgrbdv.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163pwsqersg.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163kdbrumee.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163lqctrokj.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163fjjlvlaw.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163xflqzzso.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163plfwaiud.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163zmdujvsh.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163ilxvmior.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163lrszgxdk.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163hggcwmhz.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163mfledxkk.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163aycyetoe.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163yymcjxtx.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163ldroakbn.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163prcwnjgw.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163lmhfjnei.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163drnousqd.html

[S56] C++：optional
来源：http://www.sxryk.cn/163lkiviyii.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163jknkomgd.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163fijdzway.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163lvlmpuoy.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163efzkwtus.html


<!-- 参考信息 -->