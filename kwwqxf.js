外链999!wailian999！

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163vgwuhlbh.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163rmrmedix.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163rvchguel.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163hnwfmspm.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163qseeltca.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163rqeisfyj.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163czxnmtub.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163idcrxvol.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163jhbwmlzj.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163lysduphs.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163ramvxkqw.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163hgfyavwt.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163klegazcv.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163pgeoinqu.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163asnjbhee.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163puknvaqt.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163iqblwelq.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163onplmipm.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163edffzxxv.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163webhizbo.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163qkgftyaw.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163yrcpfrhk.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163nradativ.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163bwzdktpb.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163gzhpyyle.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163xqvzdatm.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163qptslkcp.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163ytvuxrjq.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163bhcvqbaj.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163keochjmk.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163neojeuti.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163kfgyrxko.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163ygqguxpp.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163yynwruaa.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163upjmltap.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163ysmqbpvz.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163huoxqmzt.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163tzmdjibe.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163ntxkgbmh.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163hdmagzyp.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163upzuvgpq.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163yddcmuvl.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163rtpfvyti.html

================================================================================
来源：http://www.sxryk.cn/163grvjhtca.html

R. Bash 专题
来源：http://www.sxryk.cn/163iofmloto.html

================================================================================
来源：http://www.sxryk.cn/163zeomvfhe.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163yeiutaqn.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163ivratprv.html

set -euo pipefail
来源：http://www.aibaodan.cn/163jnigeeot.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163jlktxpwh.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163ywhilwjc.html

[R03] 只读变量
来源：http://www.sxryk.cn/163ofwlhefw.html

readonly PI=3.14
来源：http://www.sxryk.cn/163aglcpoid.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163posbtigp.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163ebptzwtl.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163nnvxcxrr.html

name="${1:-default}"
来源：http://www.sxryk.cn/163kibmzrwv.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163egivepgh.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163fwnpighj.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163ntrssjdr.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163ngfzyvgd.html

[R08] 数值比较
来源：http://www.xuanzx.com/163ccyfygyo.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163myusmrji.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163jtpsxnyz.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163yubjwipw.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163ibsiyjrf.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163uwmljcjs.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163vtljvmfo.html

case "$1" in
来源：http://www.aibaodan.cn/163dmsnjyux.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163eyubmdhq.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163rsrhzrnb.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163xqxvikyh.html

esac
来源：http://www.xuanzx.com/163rdsrvrht.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163zauschcc.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163spnmjqqw.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163bktmrfht.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163hhaipnqz.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163gssyxwvv.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163uhoddecr.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163acuironl.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163haidmfqm.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163nsvtudai.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163pnwhlrff.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163tiyskkew.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163gqufqvcr.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163vdqyunfy.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163nrveybly.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163ueadifge.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163vtshdwpo.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163edqmvtem.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163gnhhwura.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163ubkmjstp.html

echo "${#s}"
来源：http://www.sxryk.cn/163tugjqzka.html

[R22] 截取子串
来源：http://www.sxryk.cn/163omtewfgx.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163ckavjsvd.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163jdbquoyv.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163evfqcbua.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163fiivesic.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163jhbkpslg.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163twxhlfkz.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163fymciiwo.html

[R26] 命令替换
来源：http://www.xuanzx.com/163qwktkawd.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163tyibevzr.html

[R27] 算术展开
来源：http://www.xuanzx.com/163jhistrlh.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163lbgspaau.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163vvjzithe.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163qcuqodsh.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163vacsjxax.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163mrqizebe.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163fcvlezmo.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163wwhgxxhf.html

[R31] 局部变量
来源：http://www.xuanzx.com/163bgtnhiep.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163wjxjhpjm.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163atrcrzdo.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163humzpqhr.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163tunvqezv.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163oofysiin.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163muevyuzf.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ekhkfhkp.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163iomfrdvl.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163ppqtcono.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163cpyadafc.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163tihsrabm.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163xkqnmtqj.html

files=$(ls -1)
来源：http://www.xuanzx.com/163fsngjogl.html

[R38] 管道串联
来源：http://www.sxryk.cn/163gtemzaal.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163ocziomco.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163cjkjhfbj.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163jbxkgfyq.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163ieswouow.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163gdvxjnmo.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163fbxzwkvn.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163cxcyqwqh.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163fxyihslj.html

wc -l < a.txt
来源：http://www.xuanzx.com/163ctivsalm.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163shbjtzlb.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163yfcbscaj.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163wdooqyqi.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163pdxojglp.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163boavverc.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163bnzynani.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163cgjjekgw.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163mqsgbfii.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163fvxueuwv.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163utatbxmx.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163bfrnzhwh.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163ttffasyr.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163rxomajcr.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163kuvenrdr.html

[R50] awk 求和
来源：http://www.xuanzx.com/163jakmtbyl.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163qzcypuwi.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163wgleofli.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163embnyukm.html

[R52] 统计行数
来源：http://www.xuanzx.com/163bitdaozb.html

wc -l a.txt
来源：http://www.sxryk.cn/163icvikiam.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163etlktamz.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163jzmipthr.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163haivpptg.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163glyxpztp.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163yitbqstb.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163zajzdbbd.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163bcbfvyso.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163yvbfphed.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163iaygsqys.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163zdcfpyvl.html

[R58] 下载文件
来源：http://www.sxryk.cn/163fdtixmgk.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163bbztgwlo.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163yffbedvi.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163fcfucvbg.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163rkqkgjnl.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163dyvvsaai.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163qzjpmhtu.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163swnhvayq.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163cnvasanh.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163tkmtdepy.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163fvjtship.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163mnboqads.html

[R64] 结束进程
来源：http://www.sxryk.cn/163xqvhyglz.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163zyhfgimc.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163gmedsntb.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163zcotekaw.html

[R66] 定时任务
来源：http://www.sxryk.cn/163ascrlnus.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163rsnroexb.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163jophimjf.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163tfyatefr.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163ryuxskzk.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163kylmeioz.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163ksfeqrbv.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163dfjyirmo.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163tcoegmat.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163woqahgwk.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163ngoazcki.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163qoihvlcz.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163uiwaudxv.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163nrhbuybo.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163dgczibet.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163ijqwaeqm.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163ncdqillj.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163kfuyeoza.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163kbnmbmic.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163remedwnu.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163vysfnmsa.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163nnzntggm.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163wofcrvte.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163wawitkjv.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163zksqzpby.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163qwskdwkc.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163qaktlawr.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163qmdinpdw.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163eyigfybx.html

time ./run.sh
来源：http://www.sxryk.cn/163lwuuvkic.html

================================================================================
来源：http://www.aibaodan.cn/163jyptmawo.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163qqsszgqq.html

================================================================================
来源：http://www.sxryk.cn/163stthxxah.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163ttrwcral.html

#include <stdio.h>
来源：http://www.sxryk.cn/163smmdhtsx.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163gooumuge.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163xyprfwbh.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163gchcoomb.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163vtbpuqry.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163duglotuv.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163tiptwbjx.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163iekmnvvl.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163yybrjzek.html

strlen(s)
来源：http://www.aibaodan.cn/163emsctiko.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163dxveltmj.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163epiphqis.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163sbtuzqch.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163dydbunff.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163arrfwqwt.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163mhxagqjp.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163divpcmeb.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163anwltblp.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163srvtfejb.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163twvvqkca.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163gkzfsrna.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163sqsxiqzi.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163hmhqvlpo.html

fclose(f);
来源：http://www.sxryk.cn/163hsavycpi.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163guvigtyh.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163tmjqkgbd.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163hkgbxone.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163gyygrrta.html

[S14] C：枚举
来源：http://www.xuanzx.com/163rtrjzkay.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163hlnsulpm.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163ctgzsdck.html

(double) a / b
来源：http://www.aibaodan.cn/163pujgwytb.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163ooyvcwxs.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163uaodgwmr.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163emrhsqdu.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163drmklsnz.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163dtbqqgkp.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163vtluujxs.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163fubcubdn.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163thpngnkw.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163kklnncix.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163oghgejuz.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163fvzbwiam.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163tsnirpfo.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163afuksjol.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163tdalwldu.html

[S23] C：随机数
来源：http://www.sxryk.cn/163kbqwwkcx.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163rzisywql.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163ktairsds.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163urwjxjbd.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163poicqdoz.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163itabzoig.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163rqmrlifs.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163rtrmqhse.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163kywqhihv.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163shjwkksz.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163klzsbsro.html

static int counter = 0;
来源：http://www.sxryk.cn/163fexhifaw.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163jmdrtvjp.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163avsgroxm.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163dkmbldoe.html

#ifndef X_H
来源：http://www.aibaodan.cn/163qppztwer.html

#define X_H
来源：http://www.sxryk.cn/163jckvfmvk.html

#endif
来源：http://www.xuanzx.com/163yjgqvyef.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163nefqbifh.html

#include <iostream>
来源：http://www.xuanzx.com/163txaqkfbo.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163ogflmjkx.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163ugkgefsk.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163pnoeamhu.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163epqojchl.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163obbkyczh.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163zcckbbgd.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163ihwlpmlr.html

[S35] C++：map
来源：http://www.xuanzx.com/163yegwwqai.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163khbzhhma.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163iacxyuxr.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163tkmpbion.html

[S37] C++：set
来源：http://www.xuanzx.com/163aehdaqer.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163zyrtcwxx.html

[S38] C++：排序
来源：http://www.sxryk.cn/163fihbdkih.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163yopfhokz.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163axyfztqn.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163ktfwdfdg.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163owpweino.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163tfnkowqe.html


<!-- 参考信息 -->