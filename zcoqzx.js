外链999!wailian999！

[Q78] 当前时间
来源：http://www.sxryk.cn/163mlaszbaw.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163sxtcyoxf.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163erukcuuy.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163qfsalrbi.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163ixdbtauu.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163pmkixcyt.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163nkwibyep.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163nlzaekrl.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163lknqorxw.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163afizxxwo.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163cvbrgghg.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163gjnyhyip.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163yatdmfej.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163mlzdoajw.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163ywffhhtl.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163buqrvsie.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163kotrukfx.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163zfnolykk.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163sjnckbtk.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163fxgavmvk.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163hohdimyu.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163mjmpgfqa.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163sqabdtaz.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163frdzowie.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163edemqvna.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163vmysyhxg.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163tmqvkbeh.html

================================================================================
来源：http://www.xuanzx.com/163pfkpwlcc.html

R. Bash 专题
来源：http://www.aibaodan.cn/163qkfnbozz.html

================================================================================
来源：http://www.aibaodan.cn/163thshvhvl.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163faasuamx.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163wmlwbcft.html

set -euo pipefail
来源：http://www.xuanzx.com/163pnoevmuh.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163mbqwphol.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163wmovxnhj.html

[R03] 只读变量
来源：http://www.xuanzx.com/163wfbgpxon.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163ohkwafdq.html

[R04] 位置参数
来源：http://www.sxryk.cn/163ynjkplcn.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163ldkurtsy.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163mxgkvzmp.html

name="${1:-default}"
来源：http://www.xuanzx.com/163ndygrmhl.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163ouarbuqj.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163mlwulvac.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163stnhrazf.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163esolbiya.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163neddpfph.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163bzintivq.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163tucicnot.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163rrshspiy.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163dwindfpj.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163olcwgwfi.html

[R11] case 多分支
来源：http://www.sxryk.cn/163eyvcntlq.html

case "$1" in
来源：http://www.sxryk.cn/163ygbphgsw.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163zpjccvvq.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163ognteztr.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163lzccwbnq.html

esac
来源：http://www.xuanzx.com/163yllhvsjk.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163swzgworp.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163xksugtwn.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163vqmhzgld.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163xvhzuwdf.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163fqcroyzh.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163cyfmwsbk.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163akssxlxw.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163uxhdgkal.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163nezagaly.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163vvmqyume.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163xscdmhdd.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163zeuafyjk.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163cwgyemiu.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163pyhijhve.html

[R19] 数组长度
来源：http://www.xuanzx.com/163xgmxsvxz.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163wrbvmmrk.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163voehluar.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163aisrpizw.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163hhbtqttu.html

echo "${#s}"
来源：http://www.aibaodan.cn/163imxsokxd.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163odaikttr.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163agkirggv.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163vjrgbqgz.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163zugjbkdx.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163qkyfvbhs.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163qppfpwws.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163vhqaaxmy.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163ftoabdbf.html

[R26] 命令替换
来源：http://www.xuanzx.com/163tikdrkam.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163wxtlowxn.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163ojglrbvm.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163rhneoiuh.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163rvikplub.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163ybiazjvs.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163wbcphgnv.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163xsnmbsok.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163mpgjaldi.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163cvynunsb.html

[R31] 局部变量
来源：http://www.sxryk.cn/163afgyvaec.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163gzciukgs.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163waqobduj.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163qzjkcuoc.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163ybriuacb.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163dlfouhfq.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163xhzlexkk.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163hrejwvgq.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163tsqgtuat.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163ftqdzxrj.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163ivapdcju.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163nukrfnoy.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163ivzlcxrd.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163oxrcynyb.html

[R38] 管道串联
来源：http://www.sxryk.cn/163dymkyaio.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163oqswoczd.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163cgygmufz.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163sjdbzibl.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163uuasqpww.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163pdsgkqsk.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163nnjlntgj.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163qilztgol.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163rjhmhaqu.html

wc -l < a.txt
来源：http://www.xuanzx.com/163criphdts.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163davpaqbl.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163eancsjsb.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163daaxgezj.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163mjljubpk.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163xedgyqgw.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163wbxjonxm.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163fzkgtzux.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163lqhrvetr.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163phibfrlm.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163dvmavzrt.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163hirezeod.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163ofyojkyj.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163sognllsm.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163pxjhwhml.html

[R50] awk 求和
来源：http://www.xuanzx.com/163ripsntvt.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163fasqcoux.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163xtdmxxmx.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163fqbupnfz.html

[R52] 统计行数
来源：http://www.sxryk.cn/163dlkpsfif.html

wc -l a.txt
来源：http://www.sxryk.cn/163seafpmxv.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163bsbnicih.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163hltlfcti.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163lhglxjun.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163rpiykjby.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163hmuhxmkt.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163rekxdori.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163gpjxomya.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163lfppfugk.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163tybwddyq.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163loutolmz.html

[R58] 下载文件
来源：http://www.sxryk.cn/163crbxoxgv.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163hsupxdav.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163rnipqfzd.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163jmvbabyt.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163vnzmfgmd.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163jzckwlfm.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163rpwaximy.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163mqbucxqq.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163snegipyl.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163owccdgfx.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163ozakmhhs.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163farrkvik.html

[R64] 结束进程
来源：http://www.sxryk.cn/163vvobvdln.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163lmhibewm.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163sxutcoxc.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163vcpviqes.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163zncpzbsc.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163wkjixejr.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163qefacpri.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163makotjny.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163ktexdotp.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163gyjwhqgd.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163zjsyidtp.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163waekakkx.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163ljjrpucj.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163aggktjit.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163znwiuhlg.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163aqogrwys.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163wfupmbxj.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163ueqjhnxw.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163jnnldjdp.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163ihaggizq.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163ydpdojfs.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163bnlzibeg.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163tkftidyc.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163woohootr.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163fwdngdwy.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163iypsuytl.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163ggtpifxt.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163ehkxhplj.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163ayfkspoe.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163pqudzvwa.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163sxtabgwa.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163ehrqmrqt.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163auuoovdc.html

time ./run.sh
来源：http://www.xuanzx.com/163mzekxmbh.html

================================================================================
来源：http://www.aibaodan.cn/163viiwfldl.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163xhptcgvg.html

================================================================================
来源：http://www.xuanzx.com/163ctjvncxp.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163jmefzsfm.html

#include <stdio.h>
来源：http://www.xuanzx.com/163orzbfutt.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163pfhtczvc.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163ynyqbckk.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163gjqybjjq.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163wtgoldgl.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163monybhtg.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163jqzkrpwx.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163rkzphldn.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163utvwzftn.html

strlen(s)
来源：http://www.aibaodan.cn/163axobykyq.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163folvtpcg.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163rzwdrjzc.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163rkzprfrg.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163afmyeymd.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163iaxntomv.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163swtfzbom.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163vklepsax.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163lyutgift.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163kxhgaxiw.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163hpmljzup.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163skowasux.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163saqykinh.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163wdhnnkhn.html

fclose(f);
来源：http://www.aibaodan.cn/163dmnwhffz.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163fsmguplp.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163zverjxth.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163imhvrjas.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163hfgjnrrj.html

[S14] C：枚举
来源：http://www.xuanzx.com/163agrmregv.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163apvjrhft.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ceabfyfs.html

(double) a / b
来源：http://www.xuanzx.com/163gwretstd.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163dkvzqjck.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163nanietaa.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163llwfgpei.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163jehsdzsu.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163mhokqcgg.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163twfwrugz.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163vimgvtlm.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ysgmikrg.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163dwlmrdfr.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163catiszce.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163sxvbmdta.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163xjwwcfxq.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163zmxppdmc.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163acomcwcp.html

[S23] C：随机数
来源：http://www.sxryk.cn/163oxopkvec.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163xvixjhxu.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163jazmadir.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163vlvaoegn.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163eaioktec.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163gkxscvje.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163bxonconm.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163gpsdzrwl.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163ekpvrokq.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163whytpsmz.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163xnjlaclw.html

static int counter = 0;
来源：http://www.sxryk.cn/163xnuvkiei.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163fdmouxon.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163wbdfodky.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163dpgrgceo.html

#ifndef X_H
来源：http://www.sxryk.cn/163jbuhapqt.html

#define X_H
来源：http://www.sxryk.cn/163ubftfpay.html

#endif
来源：http://www.aibaodan.cn/163ctunkppj.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163gtxfkcot.html

#include <iostream>
来源：http://www.aibaodan.cn/163rkydgnsn.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163zhbwebmc.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163rcrifwho.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163hvjssrej.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163oxzztbxs.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163ntxbpcdf.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163xxmllrmg.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163kauebhyr.html

[S35] C++：map
来源：http://www.sxryk.cn/163rgbxgrcl.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163rfdklxxy.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163tuhhsmjy.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163darxueem.html

[S37] C++：set
来源：http://www.aibaodan.cn/163hpjknupl.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163yioukbnm.html

[S38] C++：排序
来源：http://www.xuanzx.com/163ioylroth.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163mhrepisu.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163iwhkidox.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163ejvnmkju.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163pghntfby.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163uzmonteh.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163zffddelv.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163jqqucgut.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163kzbkpujs.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163gydulroy.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163xjxvlgmf.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163bczehxna.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163adbzhbgc.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163sdgogugc.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163eabszehf.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163agdqwcuu.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163trvyadgk.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163kocprjlc.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163fokiaryz.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163zwkzoydt.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163pmihrmvy.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163mjbtwszb.html


<!-- 参考信息 -->