外链999!wailian999！

[Q78] 当前时间
来源：http://www.sxryk.cn/163qmaiekkv.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163lrtffpsy.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163pcescirz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163fekloqff.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163bjdcnahx.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163kqqeahef.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163bskvcbaj.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163toctprck.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163ahacwfjx.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163qgtkvdvw.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163akxwomus.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163sysarjfi.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163xyjfllvq.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163dejpxkjf.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163lgjuftpx.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163utuownzp.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163lujzgwzr.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163sjkfpztz.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163azvsfnip.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163hkemqyvx.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163kmeehkec.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163cjjbfvxf.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163qxuvlegi.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163pucquxlc.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163ljbjdxxu.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163rpybqxvb.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163tijhkffh.html

================================================================================
来源：http://www.aibaodan.cn/163xafpwuqf.html

R. Bash 专题
来源：http://www.sxryk.cn/163qipgoidl.html

================================================================================
来源：http://www.sxryk.cn/163bgvouuem.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163sfiepfbm.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163xraeblcw.html

set -euo pipefail
来源：http://www.aibaodan.cn/163psuojczd.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163omzwfpew.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163nvohcjvl.html

[R03] 只读变量
来源：http://www.xuanzx.com/163hwhqzwkl.html

readonly PI=3.14
来源：http://www.xuanzx.com/163qpemjomw.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163qiktldvf.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163qdskouci.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163aacddsii.html

name="${1:-default}"
来源：http://www.sxryk.cn/163ipuqwfad.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163acsovdmh.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163pdwizbxs.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163eazawlkt.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163luldhhji.html

[R08] 数值比较
来源：http://www.sxryk.cn/163fxhznfqr.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163wguxdywj.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163jayxusun.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163fgdmvhtg.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163arckjgrj.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163zkhyiprj.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163ucuzfftt.html

case "$1" in
来源：http://www.sxryk.cn/163znstlzne.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163xbozhzhl.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163oxemgjed.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163yfnrftdf.html

esac
来源：http://www.sxryk.cn/163kyxmopmp.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163ukydlsoh.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163gvcjumqk.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163osbpzpvb.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163qbuolqut.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163sfrkctcv.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163iuosjjld.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163yxwkpvvy.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163nwekdeka.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163lhgiayag.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163cykqdzko.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163toilduch.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163oebemofc.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163gibcgmvc.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163wynkmsjd.html

[R19] 数组长度
来源：http://www.sxryk.cn/163bveuspjv.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163wycjumdt.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163padtvdqv.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163ahivhqyz.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163gbgtfyjh.html

echo "${#s}"
来源：http://www.aibaodan.cn/163kgdngufb.html

[R22] 截取子串
来源：http://www.xuanzx.com/163jafelptk.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163jtvetmue.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163drffgkbd.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163cvppiiac.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163gymbsbei.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163upxuvzvf.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163fdsapsae.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163fgcsllsm.html

[R26] 命令替换
来源：http://www.xuanzx.com/163tuxhapve.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163pnlyosof.html

[R27] 算术展开
来源：http://www.sxryk.cn/163vgtxsykm.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163kbfjulym.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163lgrmztbt.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163gnxnmyrc.html

[R29] 定义函数
来源：http://www.xuanzx.com/163opnlhonu.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163vymzzlzo.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163nkczxlkw.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163nxlciuyr.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163utntcwmo.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163kaelodcq.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163sxhzwwyb.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163qzxhnohh.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163vmbyaaei.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163mhzvxruq.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163jrztsqnb.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163nhnnbpaw.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163uyjuelyt.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163otcitepx.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163eguibgdv.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163lrjvvrpo.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163iugoldqt.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163meujzomt.html

[R38] 管道串联
来源：http://www.xuanzx.com/163duuyzoay.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163phtklwjb.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163jiagshbk.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163cltglieq.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163dhmfcezn.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163bplfusul.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163xlphzdzf.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163lyehanrp.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163izsqeohz.html

wc -l < a.txt
来源：http://www.xuanzx.com/163zgiowexn.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ewlxkzpw.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163lqxxbagt.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163rxscddan.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163kcsqdmga.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163qduealzj.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163hmsdqbnh.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163bkgsjxpa.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163btmzfcqy.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163ueleycws.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163cycemqgx.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163kdwcmhkr.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163zazwmgtr.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163zojyindk.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163ktsjdeds.html

[R50] awk 求和
来源：http://www.xuanzx.com/163emkcpnjv.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163kdrndkfe.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163sneruzkp.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163awadmqap.html

[R52] 统计行数
来源：http://www.xuanzx.com/163gltbrulq.html

wc -l a.txt
来源：http://www.sxryk.cn/163kcdklxbv.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163zedbhotn.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163djynxdcp.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163hkocluzx.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163jcmjoxoq.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163qronkhbd.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163qqnnecmt.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163vtppbiop.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163acrmkpcy.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163zhtxkioz.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163ujztyoat.html

[R58] 下载文件
来源：http://www.xuanzx.com/163vzksntvm.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163dklsgxrz.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163ydynpapl.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163nbhydvvj.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163imunkkfs.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163vhymocgx.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163svzhwixt.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163makfeaqt.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163cfvhxpxw.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163fodaxymu.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163oawtxyyd.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163dagvdoxf.html

[R64] 结束进程
来源：http://www.xuanzx.com/163sxsyzglh.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163wtcrwysq.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163rjzpvwoa.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163uesxywii.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163sdejpkcm.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163wnilzzcw.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163slieulsg.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163nipsgkkp.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163csimyhiq.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163yizfwkfh.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163amedtaur.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163jsoijtgd.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163ceajeycp.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163bmikdjza.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163ujfeiakr.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163ofsirhfv.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163qfgdszrq.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163hhuqxzxn.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163aqdihiiy.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163hyprdzgw.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163hlqfloep.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163unaddrxc.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163kefbjryi.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163uvlebqem.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163qurpgoym.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163yfgsveka.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163bedveltr.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163yjkzcxph.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163vltxxqwp.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163slqmjrzw.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163lksxvray.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163enywutfm.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163mbvklguk.html

time ./run.sh
来源：http://www.xuanzx.com/163ejtjnwnx.html

================================================================================
来源：http://www.xuanzx.com/163ruzmhrbx.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163wftbhljl.html

================================================================================
来源：http://www.xuanzx.com/163nbxxfysg.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163hepnszwz.html

#include <stdio.h>
来源：http://www.sxryk.cn/163ugurtoay.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163npizgdck.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163xxlmsyab.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163ekiysako.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163axoavmul.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163yrhxcbhf.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163cpbhiido.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163opzebadk.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163kmxhsosa.html

strlen(s)
来源：http://www.sxryk.cn/163tjcllqit.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163iabxssea.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163tqikfrub.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163mgkdvptz.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163wyojphxr.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163kscokakb.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163qtmpgugs.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163xrxfcigh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163vqlmfpga.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163ykyyxxpi.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163lswdbprt.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163tvjhsbsw.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163tdkjelnn.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163usdhjyqj.html

fclose(f);
来源：http://www.sxryk.cn/163iepadpme.html

[S12] C：写文件
来源：http://www.xuanzx.com/163wtshppdr.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163rczumhjw.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163qttjjxyf.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163ygunuyui.html

[S14] C：枚举
来源：http://www.sxryk.cn/163czhylhtm.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163jterqmok.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163zvmohznl.html

(double) a / b
来源：http://www.xuanzx.com/163iuaqtscs.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163lvkacjsn.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163tonvewin.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163wccgbkte.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163epqazbxq.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163apirlitx.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163duornzvx.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163tgsqgpho.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163etdxbcag.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163jrzmavuc.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163rywmzddo.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163xstisdwv.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163rdfqklez.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163qmdmylyo.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163splmddgr.html

[S23] C：随机数
来源：http://www.sxryk.cn/163lmceaasj.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163wvjrvcct.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163hrpqqeqq.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163fqkrpunc.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163pmxvpixg.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163fenaldyf.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163afduwcqp.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163bcxsgyyq.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163uafhgzgd.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163bkjveruw.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163bddylbzf.html

static int counter = 0;
来源：http://www.aibaodan.cn/163orskmgxy.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163rdrwrgzb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163bigdeyrl.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163kelaiqqe.html

#ifndef X_H
来源：http://www.sxryk.cn/163zeblsprc.html

#define X_H
来源：http://www.sxryk.cn/163citvlrsg.html

#endif
来源：http://www.sxryk.cn/163dwugrrdx.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163yabdssxo.html

#include <iostream>
来源：http://www.sxryk.cn/163hjpheoyv.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163mlghdksn.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163vtxhlkgf.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163ngumlswo.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163btxnwpmg.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163mkqxgmdt.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163cfhbkquj.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163tvmyyhoz.html

[S35] C++：map
来源：http://www.xuanzx.com/163lfyceyhz.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163lzfgaewl.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163kfxmnnbv.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ogvisyyp.html

[S37] C++：set
来源：http://www.sxryk.cn/163exvwypxf.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163zrscomfr.html

[S38] C++：排序
来源：http://www.xuanzx.com/163kigguoec.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163okzriugi.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163tkhjswlw.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163yyhtdpso.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163tjkmyahv.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163phqrfdzl.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163rbrbmwqf.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163hknnuegy.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163ajginzpk.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163awzxqmrj.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163ptfrdmac.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163vtxshaif.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163pshoqnpx.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163irpelpvo.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163hrqtbhru.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163naictbao.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163gkfyhwdn.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163xkmwzvbi.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163fstadccd.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163kjsrhetf.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163zfqpsipu.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163atqqdglz.html


<!-- 参考信息 -->