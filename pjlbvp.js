外链999!wailian999！

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163asluvxmp.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163odzczxgd.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163dicogake.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163hricklsh.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163boasntvf.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163kohlglyj.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163resokuus.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163hzvslabo.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163hgumkbya.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163cnbuhrzo.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163bimscopm.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163ejktpyhq.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163ilgvplom.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163mbxzszzw.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163cyemnbxr.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163jusxbflm.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163uptmmhqk.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163swspprsj.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163nlmzeenf.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163ardztimf.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163qpediwao.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163yinzbiqb.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163moxxtota.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163tugoiudx.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163uovxzlwn.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163dakpfzup.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163wljqxsia.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163odrnibdc.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163eqzdevzm.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163sthvbcyy.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163xrfvbdjy.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163hvocbjqt.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163ttnrsfgd.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163mbteimnq.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163vflngibj.html

================================================================================
来源：http://www.aibaodan.cn/163narwvips.html

R. Bash 专题
来源：http://www.xuanzx.com/163gtexwudr.html

================================================================================
来源：http://www.aibaodan.cn/163cbhlnzfd.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163ivlrzojl.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163nzydkkhq.html

set -euo pipefail
来源：http://www.aibaodan.cn/163usmlgpac.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163bihichjv.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163rrguhjkt.html

[R03] 只读变量
来源：http://www.sxryk.cn/163vqlwkicl.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163wulphypd.html

[R04] 位置参数
来源：http://www.xuanzx.com/163xylfsxfm.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163ryeguvvr.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163jrgjuwzm.html

name="${1:-default}"
来源：http://www.sxryk.cn/163mpfhomsh.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163seuwdubt.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163sukxghho.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163kwohjbjh.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163nyecziqj.html

[R08] 数值比较
来源：http://www.xuanzx.com/163mttwtdmd.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163usqaruhu.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163guulxzdd.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163ocmklmbv.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163jippyoxg.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163dbdoospd.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163jrtxgcuj.html

case "$1" in
来源：http://www.xuanzx.com/163noocoyrk.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163gqvtozfs.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163eiowqnpi.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163pwhyycnp.html

esac
来源：http://www.aibaodan.cn/163mbzicnoc.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163fvfspkyd.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163zbfqkqfg.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163okzexdtu.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163plitfllz.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163fmcpungl.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163jvqyufsp.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163hlmshjfv.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163vivvkpuq.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163oivxreiy.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163ynrtacfl.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163eblgajfr.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163hqezidqz.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163oisafwkj.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163hgqdjwaa.html

[R19] 数组长度
来源：http://www.xuanzx.com/163pobaqgql.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163aqidoavd.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163itrcpbsn.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163tztojmpz.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163penoxsny.html

echo "${#s}"
来源：http://www.sxryk.cn/163klwoxuzw.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163dnwmoiyp.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163xiuymozz.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163kvrizsgs.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163iclablrj.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163tlezbgoh.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163qzfryznh.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163qhpepuej.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163wumkijme.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163cgxodqfs.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163autsumku.html

[R27] 算术展开
来源：http://www.sxryk.cn/163dfssoyva.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163aaljsqno.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163gvkibodk.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163nprhlmgf.html

[R29] 定义函数
来源：http://www.sxryk.cn/163rmvwtldi.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163ebsuvbap.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163juehmlbb.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163kqibvtsu.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163xgtsccir.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163raawsgjp.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163yazgrebz.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163rvcehhai.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163fzlpmfqb.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163gvzaidoj.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163cwimnzzf.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163wrudqnui.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163rrhrhczx.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163xciejusv.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163ximsjoxm.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163ngnilqzx.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163vhcssyzy.html

files=$(ls -1)
来源：http://www.xuanzx.com/163hcsafief.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163pvleheiu.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163mvgshjry.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163zrviynyp.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163ejiclfrv.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163tykilctr.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163dhzaitrn.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163mmgiytbv.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163hviuxiby.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163ncrjmbdi.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ugrgxodk.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163mirwwzug.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163koanlvip.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163thyjaodf.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163virxzskt.html

[R45] 批量删除
来源：http://www.xuanzx.com/163pdiaikkk.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163tqhfglgh.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163vusgddqm.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163leuyqlbk.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163ydxtflgl.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163rdqzptuy.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163zrebubod.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163frgtqewm.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163gyciesyh.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163xwbpnzme.html

[R50] awk 求和
来源：http://www.xuanzx.com/163eqcznfnh.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163ephiajbc.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163uuxuxxtj.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163vqlpgqua.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163rhcqwbra.html

wc -l a.txt
来源：http://www.aibaodan.cn/163opquorsd.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163frrvpila.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163jfjcnntb.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163quqqdbbl.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163byyiszyw.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163tpmzterh.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163qnmlmiud.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163mlfhobme.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163dldvopqv.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163pqvuyfvf.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163lbzgjoiz.html

[R58] 下载文件
来源：http://www.sxryk.cn/163dsqlowws.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163dfznuyqv.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163bnnyqjee.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163iwrfazmy.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163ixyecdvp.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163msndeqbi.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163engukrug.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163axsamxli.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163yniajvwl.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163kbfedvnh.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163fegbsign.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163zkfqjkyb.html

[R64] 结束进程
来源：http://www.xuanzx.com/163sywavaer.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163ahgnhldq.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163ratelrlk.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163btzwkhmy.html

[R66] 定时任务
来源：http://www.xuanzx.com/163bpupoqbe.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163znmmjeio.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163ihgijmkn.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163mrfluhlo.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163tvleewdd.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163sfqovukr.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163yiyeusyd.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163jomghtdx.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163jqnjzkmk.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163nsbtlpdl.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163soarrqpw.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163sdegejdi.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163rxtokxfj.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163rsujwozu.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163pbqxkpod.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163pnbvlrgv.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163mtpxpexd.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163ueoosrlc.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163rasugqcy.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163krqqcvjj.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163tgjztzku.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163fbtilsnt.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163xprvxobn.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163vqwzopgx.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163kalkfitb.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163lapwjhrp.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163bltatnro.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163kxbmwein.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163gfqqcabg.html

time ./run.sh
来源：http://www.xuanzx.com/163jlkvalne.html

================================================================================
来源：http://www.aibaodan.cn/163uejyebzf.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163evpswrgp.html

================================================================================
来源：http://www.aibaodan.cn/163vlbbaljb.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163qwtvhadk.html

#include <stdio.h>
来源：http://www.sxryk.cn/163clyyeyrl.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163vqmyoqxx.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163brjqxznc.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163tftzdpwb.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163dtgfioiv.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163dyacpiwj.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163qpuacerp.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163cgopxrju.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163eelsxdwf.html

strlen(s)
来源：http://www.xuanzx.com/163flrgtpry.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163xazzxagk.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163rrdirnyy.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163dzjkjjxb.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163rdfgpycp.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163xvumptjo.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163tzrcdfff.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163xpvvzhgu.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163qudhhlqz.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163munmqpoe.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163recnespp.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163xxnxqpgk.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163erznchrv.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163bowbyyro.html

fclose(f);
来源：http://www.xuanzx.com/163diaqmmcp.html

[S12] C：写文件
来源：http://www.xuanzx.com/163tgawzoyf.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163nsifqsif.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163gqaxthpt.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163sebogkwc.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163imowbhsr.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163qtxmcozl.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163jvmnfbly.html

(double) a / b
来源：http://www.aibaodan.cn/163oywpogde.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163entkzqqs.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163drdxodsj.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163gspvskzt.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163pptfedqt.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163cwesuexd.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163vhgefbfi.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163dylaqxzs.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163oovweptx.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163znjgodos.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163hxbsladh.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163mqyqmwqo.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163gclhnxay.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163yhaorjem.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163nifnrzpb.html

[S23] C：随机数
来源：http://www.xuanzx.com/163ssravxaj.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163puudhsql.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163vckbaypg.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163hlxzynaq.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163shqzhlph.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163djgzmfew.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163vehtpqpt.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163qurayruj.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163ntdgcwec.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163zgmistfd.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163bkdopmpe.html

static int counter = 0;
来源：http://www.xuanzx.com/163bmaoftyr.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163ofcsxsgx.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163jrkcacqu.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163xhgifzxa.html

#ifndef X_H
来源：http://www.aibaodan.cn/163wnzdlmem.html

#define X_H
来源：http://www.aibaodan.cn/163toadkjbm.html

#endif
来源：http://www.xuanzx.com/163tssuocvo.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163xdiaqecb.html

#include <iostream>
来源：http://www.aibaodan.cn/163bqsdeoxo.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163dtyoxygt.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163nhxseqdh.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163jwgorqag.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163ujrwecbn.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163njwiynpu.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163dicvpvuu.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163opfirjaj.html

[S35] C++：map
来源：http://www.sxryk.cn/163gpxmwifq.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163msglnocz.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163mefjoyaq.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163gwyyfbnk.html

[S37] C++：set
来源：http://www.xuanzx.com/163jucsjxbv.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163dvqefjdn.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163qcyhtmhc.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163drrqmjlr.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163cogymfyd.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163drpchgcr.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163qpwoisub.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163txetvipf.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163jyyopujg.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163sgqcrkbw.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163lwmkfgxk.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163vxnfjiin.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163hsnvafxc.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163ydsclltx.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163vurpnlgx.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163cyvyudmo.html


<!-- 参考信息 -->