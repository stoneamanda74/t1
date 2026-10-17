外链999!wailian999！

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163wuaavjxf.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163joqexqcn.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163pugnrxuu.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163uutcgtyg.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163rcnuoufn.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163ymbmkdpl.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163nkqrkuiv.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163lsjuhavl.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163btigvajg.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163oeyvywzv.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163uswkkjxy.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163itjgytzl.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163osdkuzcr.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163qcrepyus.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163fbylbuzd.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163pewylupy.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163excyssqn.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163bsccggem.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163gopkwhab.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163avaqaiuf.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163yxpyxbpj.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163jqpmzygc.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163gwtboyrg.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163xxdhbuhn.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163cqyumpah.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163mehyboir.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163knqpieyq.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163fiengmrh.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163uqbclfeh.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163luzjgnum.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163rzclmzjl.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163yrqqxigi.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163nbhbjnmf.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163ovhmtppy.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163iziqqwfi.html

================================================================================
来源：http://www.aibaodan.cn/163ykxikdfc.html

R. Bash 专题
来源：http://www.sxryk.cn/163eixpwnpc.html

================================================================================
来源：http://www.aibaodan.cn/163xhybgbbw.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163nvhlggqh.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163xomqjdsq.html

set -euo pipefail
来源：http://www.xuanzx.com/163vvvxbuhc.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163ibiemeyk.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163lyyyjgog.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163twuvhgbz.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163wzdwkhpm.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163jjdwsqdj.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163zrlewncd.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163lphmlvlv.html

name="${1:-default}"
来源：http://www.sxryk.cn/163yomryqyy.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163mozwhwui.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163rildmfxx.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163zpsxuvrh.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163clbwzflb.html

[R08] 数值比较
来源：http://www.xuanzx.com/163qeikzttf.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163csjucvfq.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163lxckvxaj.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163jtuughhf.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163ngybjbnl.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163irvonrau.html

[R11] case 多分支
来源：http://www.xuanzx.com/163vopbjyby.html

case "$1" in
来源：http://www.aibaodan.cn/163numqeynr.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163rajkfdpi.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163plklfegi.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163kecjrltu.html

esac
来源：http://www.aibaodan.cn/163fvsifjnu.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163xdsogyyw.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163bnmbzyzi.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163conpgunx.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163zooiqqxv.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163yzythsle.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163wigfodml.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163uzdrpcbk.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163prdlgvjq.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163lytxjigj.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163pymfxwnv.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163dpsxyidz.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163gagnaxsj.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163bldvozpt.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163zubyijfe.html

[R19] 数组长度
来源：http://www.xuanzx.com/163hzhsyxit.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163vufitqqp.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163jhgoiecd.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163nukoeovx.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163fpmuuoft.html

echo "${#s}"
来源：http://www.sxryk.cn/163chzmsofo.html

[R22] 截取子串
来源：http://www.xuanzx.com/163cpnwxjqw.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163wthiwmil.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163pawqlvsl.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163gzvzllsk.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163frdqoosu.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163bymijytv.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163guqviziv.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163ndthdbzy.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163cdluvlbv.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163alwabnvi.html

[R27] 算术展开
来源：http://www.xuanzx.com/163pnvukdyy.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163jnbglldk.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163yhxderwd.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163onviouha.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163hzsgbjmb.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163djufmkbq.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163hjfbehsw.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163ordbizfb.html

[R31] 局部变量
来源：http://www.xuanzx.com/163hsehlvgw.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163yeqwgpnz.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163ooftxfft.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163dfbfxxhn.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163zhksqmvc.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163ospvmlgn.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163miadgkso.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163vahkkvfr.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163jlwvbxlp.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163askoocjb.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163cbsaymrk.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163oucatrtk.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163rquuciaz.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163vdcyrhpk.html

[R38] 管道串联
来源：http://www.sxryk.cn/163yrqrzbjq.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163cqmggmbo.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163nsmwxmhk.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163srmmkmnk.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163qydjdeho.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163utgswcic.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163cqdrzxhu.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163snnphzau.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163aoakytlj.html

wc -l < a.txt
来源：http://www.xuanzx.com/163cqqvicad.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163mwijgkkq.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163xwbzhphd.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163izdcrsow.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163kucvyewy.html

[R45] 批量删除
来源：http://www.xuanzx.com/163nkkebjvy.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163zvnexwki.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163impulhqv.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163pzjambzu.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163bxrfdxiv.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163mtxuigib.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163lndfmeks.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163dpembrkd.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163tsawlsnz.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163biikujvt.html

[R50] awk 求和
来源：http://www.sxryk.cn/163fobhhtmv.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163qldxexgh.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163absvzhtn.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163eoempkly.html

[R52] 统计行数
来源：http://www.xuanzx.com/163gadqldui.html

wc -l a.txt
来源：http://www.aibaodan.cn/163gmvovhiv.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163zuvqctha.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163hvsgoqxb.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163hwqtbdpz.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163qlshbfra.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163ogmnyrvy.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163wwcvxvjn.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163trsuihad.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163qzqjdagi.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163hjhmennn.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163vuikpnys.html

[R58] 下载文件
来源：http://www.xuanzx.com/163ajvjdvhh.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163vpnmahqr.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163wdhreakr.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163rdsydqyj.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163qatbehdf.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163sjoyxgns.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163shatispg.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163comqgveo.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163rfzpfwbr.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163mmlvchiz.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163yzurwivb.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163gniaomgv.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163ikzxfoag.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163fxvwuoxp.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163yyehmfsf.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163qtqdmsem.html

[R66] 定时任务
来源：http://www.xuanzx.com/163jgressck.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163jnordgeb.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163esrcukxs.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163jtqofmqw.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163ziufkhan.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163yhfpqepz.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163szqwnluw.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163gswlrldm.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163emcuujmi.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163xqdzxawu.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163tikkexeq.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163ocufrnbm.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163eabtcbyi.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163dduxkffv.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163gjfhouzx.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163gkkzodgw.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163sdtuxruq.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163gemnidwd.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163toqbncfi.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163mcldgkgh.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163qszfwukk.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163iejobrrs.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163acuwbhuc.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163qpaqhwqu.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163sdtpfcge.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163vbwbxuav.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163orcaiymz.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163vpqwmdqt.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163oklonrob.html

time ./run.sh
来源：http://www.xuanzx.com/163ycuntxye.html

================================================================================
来源：http://www.xuanzx.com/163isqnnncs.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163lzkwozjz.html

================================================================================
来源：http://www.sxryk.cn/163hbjodcfs.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163hglbtvhs.html

#include <stdio.h>
来源：http://www.xuanzx.com/163lyxmuydb.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163szvcewfp.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163ufnvohnz.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163uaknefjg.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163jfvcivol.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163lszwktxr.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163fuitrujc.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163ozxywazr.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163qyzamuax.html

strlen(s)
来源：http://www.sxryk.cn/163amhxpiax.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163tibcfyfl.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163kiwbvnhq.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163bpgiaqlw.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163oubqyqmh.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163tajxfhkl.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163ikuoadvt.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163obobkcht.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163dqkkwsdy.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163costkicb.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163vizsrcfu.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163jowogbbt.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163pchbtwqb.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163jpnxsust.html

fclose(f);
来源：http://www.aibaodan.cn/163aatvrckm.html

[S12] C：写文件
来源：http://www.xuanzx.com/163lzxnczxf.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163zhpwfbcg.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163jmwakezn.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163cskiseci.html

[S14] C：枚举
来源：http://www.xuanzx.com/163lznauxtj.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163jmtmnftl.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163lvtjmcob.html

(double) a / b
来源：http://www.xuanzx.com/163pyhfcoyf.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163mqhovweu.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163ddwlyrfn.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163fkbcfcqq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163flhbypzc.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163hpwedlnp.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163ujibibli.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163llbpfhny.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163beazkacc.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163tcolaflk.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163cnlwygwp.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163fnrsoomu.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163kdmxsnux.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163eicldcqc.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163iajgycgg.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163egerfher.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163syogjkft.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163toujxhsv.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163hwubbndi.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163ifoeelsm.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163kxyjtlif.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163zlxcatzl.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163kdxviddz.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163zyeqekip.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163serkyhrt.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163qlpyetpl.html

static int counter = 0;
来源：http://www.xuanzx.com/163hfrhgzoz.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163jpogxpbq.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163ghpzfjtn.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163ylicvwmt.html

#ifndef X_H
来源：http://www.sxryk.cn/163hhsdjhzr.html

#define X_H
来源：http://www.aibaodan.cn/163nmprfirq.html

#endif
来源：http://www.sxryk.cn/163djtntowy.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163npffruov.html

#include <iostream>
来源：http://www.xuanzx.com/163xoxzkpxc.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163sjwtpcgw.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163cqpqtlpx.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163xjuereax.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163dsmfejzm.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163zzzlftdp.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163qmkszvdt.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163ymvadkfh.html

[S35] C++：map
来源：http://www.xuanzx.com/163srdouaul.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163epuougmd.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163foxkakmk.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163xekgamcv.html

[S37] C++：set
来源：http://www.sxryk.cn/163xxhuwppg.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163vzthhulz.html

[S38] C++：排序
来源：http://www.xuanzx.com/163hjqziylb.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163xsmekngh.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163ezwvoakx.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163jambttor.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163ktltirzm.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163rqoqvdob.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163pdyaydqz.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163teognvgv.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163twzjbwjq.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163wapyuqbf.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163zjxvbtuh.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163darekrbd.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163jzqywpub.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163qjtdpkrk.html


<!-- 参考信息 -->