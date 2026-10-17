外链999!wailian999！

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163adzoplgy.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163wqmzctug.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163cvxbuhen.html

================================================================================
来源：http://www.sxryk.cn/163hmnxrjcr.html

R. Bash 专题
来源：http://www.sxryk.cn/163dqcgbcbb.html

================================================================================
来源：http://www.sxryk.cn/163qhzecqvo.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163oexgzugw.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163rjpnekoj.html

set -euo pipefail
来源：http://www.xuanzx.com/163khfsikis.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163stlcvccd.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163ffcpgorb.html

[R03] 只读变量
来源：http://www.sxryk.cn/163jthkchsp.html

readonly PI=3.14
来源：http://www.sxryk.cn/163flbugmzi.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163shqpenbj.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163ttuduuxy.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163dujajicy.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163bluqchkk.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163tcqciljp.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163khtlxvbd.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163rizkpxmg.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163douanqen.html

[R08] 数值比较
来源：http://www.sxryk.cn/163vhiusmok.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163purwiwhz.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163vjgbneks.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163pxwdrjua.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163grfxmeqn.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163lroijwtz.html

[R11] case 多分支
来源：http://www.xuanzx.com/163lduvefxe.html

case "$1" in
来源：http://www.sxryk.cn/163aphscaai.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163dwabwfwo.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163nbuiioyb.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163uzgqdndr.html

esac
来源：http://www.sxryk.cn/163zqcnsicn.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163tnjfgbor.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163pdpewmka.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163kcnogsej.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163neygvdzb.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163jlpdfxme.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163bvddvorr.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163hnmtcwie.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163mulbsjdb.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163tuddqrza.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163psgyneeh.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163qvvwyktv.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163ppwvcykx.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163xrzmsdgr.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163kawtgnpe.html

[R19] 数组长度
来源：http://www.xuanzx.com/163jczftdpz.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163dllfxydv.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163chvpcpwk.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163rybncxan.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163tzhhugvr.html

echo "${#s}"
来源：http://www.aibaodan.cn/163qylmgtcu.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163wzfqjgds.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163ktpobyfj.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163jiylyevi.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163otvisakj.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163hwsahzep.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163jdujiywx.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163cbxvhszw.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163hohzhxkd.html

[R26] 命令替换
来源：http://www.sxryk.cn/163ktfunxla.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163zfplwfzx.html

[R27] 算术展开
来源：http://www.xuanzx.com/163fcgrldla.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163iruddxrz.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163dmccllwh.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163dtzksztl.html

[R29] 定义函数
来源：http://www.xuanzx.com/163umiaenij.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163yoaclhqo.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163rzlnwnfn.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163qiynhlvs.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163ysabrlgd.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163hqjrijwm.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163vdhjspho.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163yjblulgi.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163chpavbcz.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163yyzfjsaq.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163nyevldyn.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163fryuiusf.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163fnywrazk.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163sqptxlon.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163aguhopqu.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163hvmqiiyy.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163jdjzlmro.html

files=$(ls -1)
来源：http://www.sxryk.cn/163fnosagnf.html

[R38] 管道串联
来源：http://www.xuanzx.com/163tzmfczan.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163gnvpuijh.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163ohqjovxm.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163tzbkqxri.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163jhitfonu.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163avjbyenp.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163ooecrapo.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163dlrplvqs.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163xbxbxibp.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163druphnem.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163yuasjtga.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163pthulnab.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163hesakndb.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163mvqlzyfr.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163qbxxhnlb.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163eayofmuo.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163plqoqyby.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163xcdfxibl.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163caozeeam.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163jsztdmsi.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163xswtfaiz.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163vkuaymbg.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163oozbkuoo.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163sluwsayj.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163fpgmnuzj.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163jzdzaxnc.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163kxfwouws.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163lxaqhmck.html

[R52] 统计行数
来源：http://www.sxryk.cn/163tgzkbedc.html

wc -l a.txt
来源：http://www.sxryk.cn/163bpihhtgu.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163lrwvosiq.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163uadeqcyo.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163mrwifqrn.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163cwtxkvfp.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163frjtjidk.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163ynspisdc.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163pkrnwgfb.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163htmpnoow.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163lyddpmsa.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163yjfuvcgd.html

[R58] 下载文件
来源：http://www.sxryk.cn/163hjyoqltw.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163bpdttbyu.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163edvisfzq.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163zwmhgjfe.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163jqihpnrt.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163ypmcrbun.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163sclupxbw.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163ighkggnh.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163nbeyzuhp.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163efyhrgal.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163kdqychab.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163abobzkrx.html

[R64] 结束进程
来源：http://www.sxryk.cn/163hkfjunhb.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163ullenzwh.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163hbbmtwvm.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163lyhdzkyo.html

[R66] 定时任务
来源：http://www.sxryk.cn/163pltisfzq.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163xymevtes.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163euhplsmq.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163hmtsgehn.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163dzhsqeeh.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163jtdkkivz.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163wgaphbta.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163recjgsfj.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163cxtukzsm.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163mkgohstb.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163ipvatvon.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163nxhlfqoz.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163srjcbwbj.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163eqduiuaz.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163yfxpcdqe.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163rxnuwsvf.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163pnfdkxin.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163dvnmlalq.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163gmraylsv.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163mcupfksy.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163gtdqwcwh.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163htkqovlq.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163vwsqynxe.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163ccimqmqr.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163sefgluzt.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163pyazdxwa.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163jwlbhdid.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163xyhhxjcj.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163sskttklh.html

time ./run.sh
来源：http://www.sxryk.cn/163jsygrdvr.html

================================================================================
来源：http://www.xuanzx.com/163qolfehro.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163fwawdrgh.html

================================================================================
来源：http://www.xuanzx.com/163xgxbserc.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163tpzwusgg.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163rzpnuxlj.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163zmqujpmo.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163zgngikee.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163cblhybcn.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163vkjpsyft.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163efdhopbq.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163pnfiuote.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163ifyfdaqh.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163esdugvom.html

strlen(s)
来源：http://www.xuanzx.com/163enycjxyd.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163tzgrcxwx.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163tqbtljib.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163pwbkdxag.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163wuklltpj.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163gxpzaccm.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163eqoplqkw.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163sxbrhlkd.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163fvznmwge.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163nmqcyela.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163zvrxhvwt.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163ukyjmzwi.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163lpoecgoe.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163jrxnywjb.html

fclose(f);
来源：http://www.aibaodan.cn/163llsyhgkk.html

[S12] C：写文件
来源：http://www.sxryk.cn/163srzqqqnx.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163vlrcdyqc.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163umbhqszz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163psowzjjh.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163crttfhsf.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163hiprotnn.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163lvabbwpp.html

(double) a / b
来源：http://www.aibaodan.cn/163iwlrpqhv.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163icfgkkgp.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163gcwypnwd.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163augkutmc.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163ugioxima.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163pbpjdbfa.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163kqvvccfx.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163cmsftbvw.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163gbgmpigb.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163lxqtmiyb.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163uvlsqhhv.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163agpufdtz.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163ijurwdoi.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163xjkyjwbp.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163mbbbatvx.html

[S23] C：随机数
来源：http://www.sxryk.cn/163vjorbdej.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163svfakxth.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163pbrztzpw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163oaadcrbg.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163clrcvlxs.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163wrfwgevl.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163ggwsiixi.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163jqevczan.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163bperpsho.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163nlwrflbr.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163yrzpfast.html

static int counter = 0;
来源：http://www.aibaodan.cn/163whnfsquk.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163xqzkqsxb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163vanvielr.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163leoqpmev.html

#ifndef X_H
来源：http://www.aibaodan.cn/163ptdgsooi.html

#define X_H
来源：http://www.xuanzx.com/163owngwpxw.html

#endif
来源：http://www.aibaodan.cn/163loivbewy.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163lekbdhnw.html

#include <iostream>
来源：http://www.xuanzx.com/163fvdcimle.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163rrswkjnc.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163aggrsflf.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163tixwixvr.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163ftszjerf.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163ywyqfmrf.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163prcxqrhs.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163gvwzcbqs.html

[S35] C++：map
来源：http://www.aibaodan.cn/163rwgxshyg.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163xjpudbrn.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163kxotsgja.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163lxmonudy.html

[S37] C++：set
来源：http://www.sxryk.cn/163hsvizpfq.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163srwonfpp.html

[S38] C++：排序
来源：http://www.xuanzx.com/163sapwvmsl.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163fbnlyusi.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163dnqiujax.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163lkfhlmdd.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163fhlawnqu.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163kpoumkfl.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163qccysbpn.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163cmqemnke.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163twrdmwbn.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163jhpusrfu.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163zrjyvfsc.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163tjeyravx.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163cigxfgfa.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163kpzkoyku.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163addkjosj.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163azbjsfpr.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163whmpykeh.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163lzbozwmg.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163kaywrtvk.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163hhicjxyk.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163wukfyflc.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163cvhhadfm.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163eiztjuov.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163zowrpbdn.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163gskovbpe.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163xsvqmvwc.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163pbgdcjzz.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163lqqhzowc.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163axoqleqh.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163kylpwdqy.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163svjpdtsm.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163ebxuxebr.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163udmownts.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163pjlwfydv.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163cjiboppb.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163xjgsewmo.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163laqglxeg.html

[S56] C++：optional
来源：http://www.xuanzx.com/163islivysb.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163srwgrxaz.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163wtdisyqx.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163wchlzxiq.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163cxumltqm.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163opvpcxdb.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163qzvfeuuh.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163knwhfxue.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163wudukswy.html


<!-- 参考信息 -->