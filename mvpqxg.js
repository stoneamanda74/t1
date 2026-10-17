外链999!wailian999！

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163gshelpmy.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163ohtbhqkr.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163ksdqthqi.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163fnxdzpwj.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163rnzsvnit.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163iiipqtei.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163tvztrndk.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163nvzaxkxs.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163yspnranb.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163ubeqfqcx.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163dnikrplx.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163nifayxvc.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163rshjgngf.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163qkvtpovx.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163qkraylpv.html

================================================================================
来源：http://www.xuanzx.com/163fyjolyeg.html

R. Bash 专题
来源：http://www.aibaodan.cn/163asijsuom.html

================================================================================
来源：http://www.sxryk.cn/163rbaszmwp.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163bzfooxsr.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163swfaovbx.html

set -euo pipefail
来源：http://www.sxryk.cn/163innyexqg.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163xwdxybcp.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163zwnvxzql.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163vyhycang.html

readonly PI=3.14
来源：http://www.xuanzx.com/163irpdosfo.html

[R04] 位置参数
来源：http://www.sxryk.cn/163mihbcjfc.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163jgldzitk.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163avprtfhj.html

name="${1:-default}"
来源：http://www.sxryk.cn/163xveqpgka.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163jbcdfihh.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163jvzhshlw.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163pgpyibep.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163ovkpozgy.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163ausorjya.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163gpdeptfz.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163lxlgloaj.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163meqicedt.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163lsljwgxe.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163oxpoxaws.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163kxcwvugv.html

case "$1" in
来源：http://www.sxryk.cn/163juwzgddy.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163dvxmistm.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163vlkbuqko.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163kdccrngb.html

esac
来源：http://www.aibaodan.cn/163wwjyclmq.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163rchlciny.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163lbfpyahv.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163njeiowjx.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163hfmqwgxd.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163kaigugcf.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163gcjxzfpq.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163tzxfoxop.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163vkzeoicp.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163ykxkboos.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163kuygxcma.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163lryfgiae.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163siupmygn.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163zzxwbhzi.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163pofeuhqi.html

[R19] 数组长度
来源：http://www.xuanzx.com/163pzsczfqe.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163yjkyuats.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163wmdwfbts.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163ivzlgpmc.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163xjkfnueq.html

echo "${#s}"
来源：http://www.xuanzx.com/163oxuqcgbu.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163ssjjsgne.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163iamkqdza.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163xilgpgeo.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163laonlooe.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163crryazgo.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163criyeqmd.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163etrvqcqk.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163moupckae.html

[R26] 命令替换
来源：http://www.sxryk.cn/163hgbrmoin.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163hozhdldb.html

[R27] 算术展开
来源：http://www.sxryk.cn/163bakizcdx.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163qwrigase.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163ryryucpt.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163dkyzpqqx.html

[R29] 定义函数
来源：http://www.xuanzx.com/163wllnogou.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163mfydtvty.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163lqdfhivv.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163zxpsixds.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163uclrapmz.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163iawqexab.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163fdelbiuy.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163xkwbrtbr.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163cbnigkel.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163pcpdndxg.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163wvqrwzex.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ajheravy.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163xzkzfzex.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163mneowtpz.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163iopenukk.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163ylwxiiju.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163mhzmxveq.html

files=$(ls -1)
来源：http://www.xuanzx.com/163yjyotgoq.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163mkttpjkm.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163hgdlusnh.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163unyemaxg.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163dldygmus.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163uxqatfjx.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163kxqymlvt.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163aooeewqe.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163pyqcghpq.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163meuqknpo.html

wc -l < a.txt
来源：http://www.sxryk.cn/163dfpnmxjh.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163tcztirnj.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163ybgpsdod.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163rriqvfoc.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163wdgshyxr.html

[R45] 批量删除
来源：http://www.xuanzx.com/163mggquvrq.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163qfrcoczv.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163rllsbpai.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163iiucwgjf.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163twvhaoos.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163zdpweunz.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163mxrtdcib.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163iugyhtng.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163iekvspqs.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163oigsuyae.html

[R50] awk 求和
来源：http://www.xuanzx.com/163jgtanamp.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163hqypjbxn.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163nkldsltg.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163bixpvryd.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163owpfhpah.html

wc -l a.txt
来源：http://www.xuanzx.com/163gwhrkjel.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163kktcmjsf.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163lywmodxs.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163npdcwlpv.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163fqvdilyv.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163ojfnmhph.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163yycqveer.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163tbchjwyu.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163mmjmrubd.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163enjrcwhu.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163mausxeyd.html

[R58] 下载文件
来源：http://www.xuanzx.com/163atiuocsd.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163xbxtuphs.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163yarmubhl.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163ifauhaps.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163sgeatarv.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163uyxzfpsl.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163iqczwxmq.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163qauajdco.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163cwmsomng.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163enplvozn.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163onbvtnjh.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163gmexqeso.html

[R64] 结束进程
来源：http://www.xuanzx.com/163dkcjgbzv.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163zvbzgukr.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163bbtdzqts.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163lyesqvdt.html

[R66] 定时任务
来源：http://www.xuanzx.com/163cmxrssfj.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163chvslbki.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163qdbipsay.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163ocfsxcca.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163wbncaqtl.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163nswjxsbx.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163bhfrilwz.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163pinzwvon.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163obpjftmb.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163tjcojqhg.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163feegirxz.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163ilpmtgxi.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163ithonplc.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163qpvonoqj.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163rzcjoczm.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163tlrmypil.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163deieictz.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163dqbakpvq.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163grvleaal.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163yszoiiur.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163kvmrigdw.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163dbbzwcvl.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163xnyoefct.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163wartnovt.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163lnflvsmz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163hckoviwe.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163xbgyerkh.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163ishbzqmz.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163wuvmnlfs.html

time ./run.sh
来源：http://www.aibaodan.cn/163whcselce.html

================================================================================
来源：http://www.aibaodan.cn/163libvwuvk.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163tfzatxyl.html

================================================================================
来源：http://www.xuanzx.com/163ewerlzib.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163mgjpwsvh.html

#include <stdio.h>
来源：http://www.xuanzx.com/163fsfniwsi.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163yjbfzzti.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163cgkyxhyg.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163lvgiuilc.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163kiradvjl.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163ysrwbsro.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163byybecfe.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163rondwjua.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163dezkrmow.html

strlen(s)
来源：http://www.xuanzx.com/163wcvhxkfl.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163htgqwyie.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163gwztvutj.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163rmcsiwir.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163idniyyvt.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163qyrmalnt.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163sqpvvubz.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163romzorfh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163tvlmhuzh.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163rjzommwe.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163jmdbzant.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163kvxyibiw.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163bolrlpfx.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163gxdfbsmv.html

fclose(f);
来源：http://www.sxryk.cn/163veaoesmz.html

[S12] C：写文件
来源：http://www.sxryk.cn/163twrjbcoz.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163sitpbdwp.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163ebkuvkpl.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163bkjpjlyo.html

[S14] C：枚举
来源：http://www.xuanzx.com/163utyorxen.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163isbkyizw.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163gaxexepx.html

(double) a / b
来源：http://www.sxryk.cn/163uryyrjme.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163eohsafsv.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163hhoqibwb.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163qutglywh.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163dmbbnlnw.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163tcbbaopr.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163zipbzhbs.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163grcbhaps.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ixtcrcig.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163heiqbayq.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163mdwpmtww.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163jgrjyijp.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163ljpmelsq.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163avfeycap.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163saqvvpet.html

[S23] C：随机数
来源：http://www.xuanzx.com/163nbeblemf.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163bphrumti.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163rxipyjmg.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163kwryzhje.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163vayunuvu.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163ikysfwrz.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163ikoxbbpw.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163dttyniwy.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163hcyyfbdv.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163ylguekzt.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163evpjffpm.html

static int counter = 0;
来源：http://www.aibaodan.cn/163hrfsvjhh.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163lhdkopug.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163nuwtbqpb.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163vixrtwon.html

#ifndef X_H
来源：http://www.sxryk.cn/163ohiiwruq.html

#define X_H
来源：http://www.xuanzx.com/163uwykxopo.html

#endif
来源：http://www.sxryk.cn/163pmghbrop.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163eigcjykm.html

#include <iostream>
来源：http://www.sxryk.cn/163jucbrrjt.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163feokhkpd.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163odjwpwvb.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163ndiaauzz.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163kjbafkuw.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163dsxjndvx.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163miwukmuy.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163zmlfgang.html

[S35] C++：map
来源：http://www.xuanzx.com/163vwgtcyhh.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163bztwntle.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163zgxxxduc.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163nofmabqo.html

[S37] C++：set
来源：http://www.xuanzx.com/163tichcijk.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163ohidncdx.html

[S38] C++：排序
来源：http://www.sxryk.cn/163mjjotoei.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163nkntwigx.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163xnibhiua.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163lbkgczld.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163lwdgbkhj.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163jpdpbdow.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163katmdknu.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163ukyiwhoj.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163bqbvqxfd.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163gxeclqpv.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163azljumww.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163ovterbah.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163gzwsmucj.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163moqjuicv.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163npnutdiz.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163ysajixhr.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163ptyvqoln.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163cvhvhbzv.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163ficpsiyp.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163urwwxhir.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163vqnlwdnj.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163altlpcxf.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163mgbyszsw.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163wgowzjlg.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163llsnxjsa.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163qrrtvwym.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163ufzzieqt.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163jslrizqr.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163svxiailq.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163vdfitepz.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163hooxjcif.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163yvrvkles.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163staqjxnm.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163xnxssolp.html


<!-- 参考信息 -->