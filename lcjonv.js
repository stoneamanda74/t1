外链999!wailian999！

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163lmfvlcui.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163aokwwnfs.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163yxfzzdvt.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163dvckvpff.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163bgnlokbx.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163jiqicrup.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163kiqrrzmo.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163itdpkvbg.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163pqsmotih.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163pcfonllm.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163ygimwdqa.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163rrrhzito.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163sokmrfvp.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163cdlmjsmw.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163asnxrulo.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163fpovdopp.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163xrqwwrcr.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163hpzwpeym.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163qekdymim.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163xdusmyru.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163ogkrrrdg.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163ymhornzn.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163uvubxgjn.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163azwrxhbc.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163pcxffdhs.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163czxzloeq.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163gopsrtdh.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163doqgnvyc.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163bplzxpxa.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163lqzmnxeb.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163euujfvdh.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163fhbflkgu.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163gifqvejf.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163fbtjxwsl.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163rvfvqmvi.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163wunzhyfr.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163pvdiahyt.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163zfbflrmx.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163duwqxlhc.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163rtrjfbgs.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163cxtvjyzn.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163bgaxhupw.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163izbyflaj.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163jvydzzas.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163xbwonuoa.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163qsyhrzuq.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163lmlwvlje.html

================================================================================
来源：http://www.aibaodan.cn/163qmkwemrj.html

R. Bash 专题
来源：http://www.aibaodan.cn/163fpxbwodg.html

================================================================================
来源：http://www.xuanzx.com/163njtunnhh.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163yszyefzq.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163ovnppcol.html

set -euo pipefail
来源：http://www.xuanzx.com/163alxzuyej.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163indkrkek.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163ftrgmlzc.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163ojnruvpn.html

readonly PI=3.14
来源：http://www.sxryk.cn/163vcjyowur.html

[R04] 位置参数
来源：http://www.xuanzx.com/163jkhvblcz.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163tpzpfijx.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163kpoienxi.html

name="${1:-default}"
来源：http://www.sxryk.cn/163gqcstydi.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163hruomyks.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163hpmjscks.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163fimjxzsc.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163wnvpdjdu.html

[R08] 数值比较
来源：http://www.xuanzx.com/163ejqovues.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163utltixki.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163gtacohdp.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163rjdvchgs.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163lxhveynw.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163vvhukazw.html

[R11] case 多分支
来源：http://www.sxryk.cn/163wvpoupom.html

case "$1" in
来源：http://www.sxryk.cn/163lpxabsvb.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163cpihedlv.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163mahnegkp.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163kiihmrhg.html

esac
来源：http://www.xuanzx.com/163jikjcgwo.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163rhzgplyv.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163eecyrkki.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163zhshzrgx.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163nahtgoti.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163ixvfuddn.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163qvuptxsk.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163upaluukr.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163vtpvxazh.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163wugsausx.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163acvsifds.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163jwgzghub.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163uuoqjobd.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163nziobgie.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163ryywhonu.html

[R19] 数组长度
来源：http://www.xuanzx.com/163zqqbmqai.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163kjjyfvuy.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163hljnocoy.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163lnistxyx.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163ldbigczv.html

echo "${#s}"
来源：http://www.aibaodan.cn/163zculkhiu.html

[R22] 截取子串
来源：http://www.xuanzx.com/163ftwjyhlj.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163wepmwmwn.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163rehaktud.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163qqwcyfcp.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163kbiynwna.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163dlkoidir.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163accbbvjt.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163ivpvnywn.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163hqwmevao.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163ajklpitk.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163pbxgjobe.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163tbezlhoe.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163grqqppuc.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163yvocmkid.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163igduuuin.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163lhvavvkh.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163rokdadwb.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163ogxwflcl.html

[R31] 局部变量
来源：http://www.sxryk.cn/163ionawbpb.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163wdgejpbo.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163djociwjj.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163xnvnvfsp.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163iubqekme.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163oyvzclhn.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163vawhodpl.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163hprirekp.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163nansntac.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163ajsapune.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163yxuacews.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163vzczrrgk.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163qvsdlmcy.html

files=$(ls -1)
来源：http://www.sxryk.cn/163nkdqxtlr.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163xugcndnp.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163layggxqa.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163cepbjdhq.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163befvdiwj.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163rcsdwadz.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163zovjwoia.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163bnprwmuu.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163pagcltkm.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163vijscwca.html

wc -l < a.txt
来源：http://www.xuanzx.com/163otldpuyx.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163nlprhicc.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163dtbbmpzr.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163rqqmmvmh.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163nvwqiahj.html

[R45] 批量删除
来源：http://www.xuanzx.com/163fvazhsry.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163xjyioluu.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163sjbrrvpe.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163owbboydz.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163qvkmzqxr.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163builxcbc.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163heriljsp.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163pkqbdrvo.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163zajzexkq.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163fnjvvwhb.html

[R50] awk 求和
来源：http://www.xuanzx.com/163wydkdary.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163dwzcejzs.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163ohqulnao.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163cbgyqyvx.html

[R52] 统计行数
来源：http://www.xuanzx.com/163mxndjgnj.html

wc -l a.txt
来源：http://www.sxryk.cn/163wkzwvbeb.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163fhvvgtyz.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163onnnqswu.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163uifybipd.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163nkipesdl.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163eddsjftd.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163glpxazre.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163ywrtvvfn.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163gngujmzp.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163jzvjzads.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163vogiobdx.html

[R58] 下载文件
来源：http://www.sxryk.cn/163sneaypui.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163oaenpvbc.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163uenyotht.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163xoiccjvy.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163gwmyxeun.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163ukksmqvj.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163aqgnnvub.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163foxoyncy.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163duwiovms.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163czlfexlm.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163svktlynn.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163annzwgpu.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163uxxfhtpe.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163koyhinyo.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163dpddwggj.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163rbduapgu.html

[R66] 定时任务
来源：http://www.sxryk.cn/163udwsqizg.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163yasswzvn.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163tbwvlkto.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163moewomis.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163bctcvtsq.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163pqdsxxqo.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163ojqzqkhc.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163eeooyxqu.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163duefwrbt.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163ouschvam.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163fvfvrsex.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163drmnwpnz.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163zmxoadgo.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163vizsvuje.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163yrrjupzz.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163kkfhuisr.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163pwvdqvov.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163brdikhvn.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163yhehkjhc.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163thqqhmmq.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163hkbpbidh.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163zkavjozg.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163ckxcgwxp.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163zsmalepi.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163lfosuhhn.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163njfgjbry.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163ysagbxbq.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163zewgubnf.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163hnrjmmbp.html

time ./run.sh
来源：http://www.xuanzx.com/163vjnusout.html

================================================================================
来源：http://www.aibaodan.cn/163nlrmrftz.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163bvaufdwb.html

================================================================================
来源：http://www.xuanzx.com/163rdqtcxlm.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163rokzsinn.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163uqnxqnuf.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163wppkjrpq.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163lpwmjppd.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163xdyhsack.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163rcnthfwm.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163arxwfzml.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163wnqtqylt.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163mbohslrl.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163occlyvus.html

strlen(s)
来源：http://www.aibaodan.cn/163qjcnxcdr.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163saphxbcf.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163yrznyuxr.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163ytsqduvg.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163hjoodwkg.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163cieqblqm.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163eaceshps.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163grdztyyl.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163gegcqhkj.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163baeddeno.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163uhxqbyut.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163nqtqghqq.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163tnlcttbf.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163hbhelxsw.html

fclose(f);
来源：http://www.sxryk.cn/163pashadfq.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163kaynajwv.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163pjatdgez.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163prefdqde.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163mywhzyka.html

[S14] C：枚举
来源：http://www.xuanzx.com/163lsxsvamr.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163bzvulxmx.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163wuvufqlt.html

(double) a / b
来源：http://www.xuanzx.com/163wyugfkqr.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163zfdsmpfn.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163kijsughn.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163mtllfxcr.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163xnayrlmg.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163sospbcni.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163bnqilkru.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163jwifhwxb.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163jfporgha.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163ldudvbdi.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163kbcbpttj.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163nhkiagnj.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163fybdreac.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163jbwjtpco.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163lrzzumjf.html

[S23] C：随机数
来源：http://www.xuanzx.com/163cmmwoyja.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163lxzlgsee.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163asggwjtx.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163kjbynbmr.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163jevkycmk.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163yhtrmkur.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163tigwffim.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163vrgefgul.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163rohaatef.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163ouwtiwjl.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163cfwtmlnd.html

static int counter = 0;
来源：http://www.aibaodan.cn/163pfeyvtey.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163nydzrexb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163zzboqkuo.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163nmshodha.html

#ifndef X_H
来源：http://www.sxryk.cn/163ufyfogeg.html

#define X_H
来源：http://www.xuanzx.com/163ocyeosqa.html

#endif
来源：http://www.sxryk.cn/163fixelkmo.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163jgqwlzbj.html

#include <iostream>
来源：http://www.sxryk.cn/163ytnajimo.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163joysfwni.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163wdvilmlt.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163xjklqtlz.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163pgdjyjai.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163zxgkncgl.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163epaxewun.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163biudorwj.html

[S35] C++：map
来源：http://www.aibaodan.cn/163hmxnhlin.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163srehhbup.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163tjnxtqpz.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163hpymyfob.html

[S37] C++：set
来源：http://www.sxryk.cn/163qnbgzlxc.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163akvpoydj.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163cjgevnsa.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163xlfafsxf.html


<!-- 参考信息 -->