外链999!wailian999！

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163witcfnoz.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163wtbwaggp.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163ljyuxndp.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163epbumbiz.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163mjhujmyy.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163agszkcjp.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163gfcgheeu.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163dagqjdqk.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163teytllue.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163yqyrpqea.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163zyzwrshl.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163ugyejloq.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163qnlsqdkt.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163pwgjcijy.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163ebcdfdzx.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163ehjbgtgi.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163hjznbczk.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163hdgomlos.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163bynuygcf.html

================================================================================
来源：http://www.sxryk.cn/163sqqjhfyf.html

R. Bash 专题
来源：http://www.sxryk.cn/163pxogkovj.html

================================================================================
来源：http://www.aibaodan.cn/163eztpaicb.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163iqpczqiy.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163ofmopfhm.html

set -euo pipefail
来源：http://www.sxryk.cn/163sjwludjg.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163qzhmpuvv.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163jwesbfvl.html

[R03] 只读变量
来源：http://www.sxryk.cn/163anranexd.html

readonly PI=3.14
来源：http://www.sxryk.cn/163elcpdihz.html

[R04] 位置参数
来源：http://www.sxryk.cn/163tpcmlopb.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163oquxszzo.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163bvqxhtil.html

name="${1:-default}"
来源：http://www.sxryk.cn/163hegfwgwe.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163iblxlbtu.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163wtuwcccc.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163xedkvcvk.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163idzfrmiq.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163xgfvyczc.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163pkeswjlc.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163blblntcf.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163gxisslkc.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163ewrklsre.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163wdnlhuzx.html

[R11] case 多分支
来源：http://www.sxryk.cn/163yupbbplc.html

case "$1" in
来源：http://www.xuanzx.com/163svbctdgo.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163wvsejffc.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163tesxjvug.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163hrtylghh.html

esac
来源：http://www.xuanzx.com/163lpfxstjc.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163vhrgaoru.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163gipgyuqg.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163rqvmlppe.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163ixzgbegn.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163rsjobrle.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163uurcqvge.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163ifhdxqtj.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163xjrmyizg.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163knirgsqq.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163aruhwbct.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163oubdtcaa.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163moxhkaxz.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163oswdzfrm.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163bizinyvb.html

[R19] 数组长度
来源：http://www.sxryk.cn/163psvwbauq.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163oeqsemaf.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163vpqxphkz.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163jbllpfoo.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163vdmfcxac.html

echo "${#s}"
来源：http://www.aibaodan.cn/163rhoukkct.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163vkyvnxqy.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163uidrcuby.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163wyqahpoz.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163qkauahrw.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163fbxsmkxf.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163crwvutgm.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163avwdyrgu.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163ohzghlzf.html

[R26] 命令替换
来源：http://www.sxryk.cn/163btlzvrze.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163voyfovrb.html

[R27] 算术展开
来源：http://www.sxryk.cn/163zjdayrju.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163gxbxrtsm.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163uusdnipi.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163ruytmqbf.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163bwhhqsfn.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163zxphdqtv.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163lxpcklzt.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163zgfhpvcn.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163oppvdyzh.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163lerznatl.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163afxrjywt.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163ppldhkmn.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163obgbferc.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163uweyszji.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163fcikenjt.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ziaymtic.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163vzaipakx.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163vwlrhkbn.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163xsenkibu.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163ygvtnppd.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163snfbyekm.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163hufslbzy.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163tuxbbftu.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163deeqmvij.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163tbqbcmlh.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163otduypfg.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163coysvyge.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163alvjjxgd.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163oftegqba.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163thfnnjep.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163kjxwkizi.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163gxqpxydp.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163mnvnlqmf.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163vzadjjer.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163wlsbeigm.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163aeyhjgmj.html

[R45] 批量删除
来源：http://www.sxryk.cn/163nmkcuopm.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163rwdahgsb.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163rkialfaf.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163hrbcupck.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163ldzcjgim.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163yxngacoj.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163xczzynay.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163akytlzhf.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163rodddset.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163djsfuear.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163rpnldawz.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163uhckuqih.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163dzprykxz.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163gjjnkubh.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163itdfmilo.html

wc -l a.txt
来源：http://www.sxryk.cn/163siewlfvt.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163bpqqvvez.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163tgqcucbo.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163bdyehnkm.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163lmjmmfwo.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163spapofdt.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163jbobcxth.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163rcxixcnx.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163mczccuiv.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163fxpburao.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163abozodkb.html

[R58] 下载文件
来源：http://www.sxryk.cn/163xbdvznuy.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163qglsfizp.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163wmkfgqvf.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163vnjrpuiw.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163wjzqchen.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163vdsnpkgf.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163oqrfkwfu.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163ydbtzlum.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163qaqelibh.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163lqyarftn.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163ivrpmodl.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163quzcdlqp.html

[R64] 结束进程
来源：http://www.xuanzx.com/163yyhwbeof.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163jryzdzoq.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163tdsxqmpt.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163essegzsi.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163zwgurbim.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163dyqefmzw.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163kdcjupuo.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163ibrxeokk.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163idcayzdm.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163nxhtyqed.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163zoqtedxx.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163dygrvsjd.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163noyqiicc.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163qygmruah.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163ejuollem.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163hvspollf.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163scdrarro.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163tfbnncdz.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163nggozyat.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163goumekzd.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163nvorougj.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163zcnuigqv.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163ujdzulbe.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163hwnbbbtd.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163kdylarud.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163zkrwztpk.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163odgzblkf.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163rdqgoxav.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163srapippz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163irmaudun.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163avctzevw.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163wenxywyr.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163tjbhaudx.html

time ./run.sh
来源：http://www.xuanzx.com/163ifjsmiqv.html

================================================================================
来源：http://www.sxryk.cn/163jeioiwhn.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163vlykhwyw.html

================================================================================
来源：http://www.aibaodan.cn/163btpjjldw.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163ycuznjly.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163nbslzxeh.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163ulgvppgk.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163qjsxpdwq.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163iyqlbpyd.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163uvcaqcpc.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163znatxzcx.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163fdpsvvfx.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163ombshgmp.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163euczjhla.html

strlen(s)
来源：http://www.sxryk.cn/163jufrtogs.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163mnegybwn.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163kumlwnoy.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163ikrzlulf.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163myeiqdlg.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163obxmfenb.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163woirryjx.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163ndmgmdag.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163pantbudo.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163ykmnmtdb.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163nimvequm.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163ykotonrr.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163erkdijtq.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163ctlcllhk.html

fclose(f);
来源：http://www.xuanzx.com/163hopdeskb.html

[S12] C：写文件
来源：http://www.xuanzx.com/163jytniggo.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163bjlttzmt.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163aagyltho.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163xtopsgzb.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163jwnehlmy.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163azirbesz.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ymqdjclo.html

(double) a / b
来源：http://www.sxryk.cn/163fglodpvf.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163vpdzrdpq.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163qsucmmwi.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163ldsellap.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163kiohbzkm.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163wtixsnzr.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163qedmffhc.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163rliyrput.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ddlohxlb.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163uzibeyvn.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163gbhscokm.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163urcwuolu.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163fluouwhc.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163fwchfoia.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163vxvkpnhz.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163xrkndvrg.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163vrehyglr.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163qmunlrfx.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163vygghchj.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163qvuskldg.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163vixwxotl.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163ghdrpcbx.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163hnkypcnt.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163nqugnomc.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163wcryraan.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163wjkomuwo.html

static int counter = 0;
来源：http://www.xuanzx.com/163ajienmax.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163vjwzlpdz.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163icgbulpt.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163njxgesse.html

#ifndef X_H
来源：http://www.sxryk.cn/163ofgyocqj.html

#define X_H
来源：http://www.sxryk.cn/163rzjggpul.html

#endif
来源：http://www.sxryk.cn/163rcrlihrm.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163rowxyati.html

#include <iostream>
来源：http://www.aibaodan.cn/163yaqblxko.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163ebpovbhx.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163xaovrbjd.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163aybwclvx.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163xyfuzisx.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163kshtgdgk.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163ihuanfsc.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163sqpnedut.html

[S35] C++：map
来源：http://www.xuanzx.com/163oxwvbvhn.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163rymcpdff.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163gfvalsdj.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163nurotmfi.html

[S37] C++：set
来源：http://www.sxryk.cn/163attffduo.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163gliplxwq.html

[S38] C++：排序
来源：http://www.sxryk.cn/163qdwsezcr.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163upkwntzh.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163mlgcrfgp.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163gezfrluc.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163wplxmxps.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163uawnvdgw.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163ovsrwosz.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163bddhkdrt.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163jgylyqpz.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163nisrycub.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163ghgexdqp.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163vdfbguxx.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163ihmxsdzf.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163bdsxulel.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163lbsfxpee.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163vkosnkvj.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163felsdana.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163ejnmhbgu.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163aipmwvuy.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163mjnhjgkq.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163xpmojrpf.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163ibmmjzoz.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163olgbgzqa.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163mriiolzh.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163iolkiota.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163fifdtjvj.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163sowfaarv.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163xrtwffaj.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163pwjwghtx.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163pjprblab.html


<!-- 参考信息 -->