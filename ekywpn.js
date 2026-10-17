外链999!wailian999！

[Q63] 开启事务
来源：http://www.aibaodan.cn/163uenrttdj.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163ojdvmige.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163tpwmislx.html

COMMIT;
来源：http://www.aibaodan.cn/163ahlipnsw.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163repryjnb.html

ROLLBACK;
来源：http://www.sxryk.cn/163yhpifwdz.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163luqvcaxc.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163noveomio.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163hcqjpqpt.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163encpekdt.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163jsxfxlfs.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163lealdcyu.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163ovbpefsc.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163mynvhmlt.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163gqtmcwnr.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163fjnnltlv.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163bmsnzruk.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163lveavuab.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163vhnznnhs.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163zhdkiqkj.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163upcztnrd.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163ixhrumkm.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163usferrwq.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163lpewzuoi.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163kbdbtqgy.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163jnacawtg.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163bjompngw.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163jhjspsgn.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163hmnekqrx.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163knlrsofz.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163bkhlcsuv.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163fpweksdk.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163pzrhidbj.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163khtkwzsj.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163ctntbdal.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163avpfivwu.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163havjubev.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163wqpjapyh.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163sggqxfjp.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163zcrithtw.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163rmauvpxh.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163ykshhhgn.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163rpnhulsk.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163gpcbwbir.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163eoirajyc.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163jjcekppr.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163xuwbzxzt.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163dpjnpclk.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163hhdlzyul.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163rzaeaggn.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163vlhhkdqv.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163ilewkaqp.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163addjsqwy.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163qzmueizn.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163fjvmzela.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163jhffosae.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163uswvptfg.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163yshmxkgs.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163mauccjdx.html

================================================================================
来源：http://www.sxryk.cn/163zupifgxf.html

R. Bash 专题
来源：http://www.xuanzx.com/163mftdydro.html

================================================================================
来源：http://www.sxryk.cn/163hmcaqbee.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163tddnkbez.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163woxxyhpt.html

set -euo pipefail
来源：http://www.sxryk.cn/163tkdndwzx.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163jpqpjkuo.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163pzzjjlnl.html

[R03] 只读变量
来源：http://www.xuanzx.com/163gldkuglg.html

readonly PI=3.14
来源：http://www.sxryk.cn/163gkpsqdww.html

[R04] 位置参数
来源：http://www.xuanzx.com/163boihzmej.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163tlxzdonj.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163vskmxrrs.html

name="${1:-default}"
来源：http://www.xuanzx.com/163ffcysmfu.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163aufbuiyd.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163mzjulcrg.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163ehhipabb.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163mtgsoctx.html

[R08] 数值比较
来源：http://www.sxryk.cn/163alpwyypt.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163rehdyuwy.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163ototegvt.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163bkszooxm.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163nrubdbvc.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163dorsewxc.html

[R11] case 多分支
来源：http://www.sxryk.cn/163vfshbkkq.html

case "$1" in
来源：http://www.aibaodan.cn/163bcmtwmbw.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163xmkcxbkz.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163wblxxwfa.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163vuphpzqc.html

esac
来源：http://www.sxryk.cn/163ixujjppl.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163nxulpqts.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163faysihhj.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163zaadvmji.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163fwxsdnzg.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163nhgsfomp.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163mgyibfpl.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163cygbyokj.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163awroickl.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163oiaazwol.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163mdvxodwd.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163ohsudmeq.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163nkvxrpac.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163hvwqdiyu.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163wqbznfws.html

[R19] 数组长度
来源：http://www.xuanzx.com/163qroofasi.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163mkvfnllq.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163ctzuoipf.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163rexnziux.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163ottvdvuq.html

echo "${#s}"
来源：http://www.sxryk.cn/163vqwpfjwn.html

[R22] 截取子串
来源：http://www.sxryk.cn/163rpqwjric.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163rfpacojs.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163smrrmmsf.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163oqztogmv.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163tepxzbid.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163ygrmiqra.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163ddvmdqpg.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163bpumcmpd.html

[R26] 命令替换
来源：http://www.xuanzx.com/163wcilygwl.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163wdyxdryn.html

[R27] 算术展开
来源：http://www.sxryk.cn/163xnwhxfiz.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163eatpkcla.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163clothkoh.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163kcchmvap.html

[R29] 定义函数
来源：http://www.sxryk.cn/163ypjkvyzn.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163sothyaaw.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163izzuhzhm.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163axdjaogr.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163ksosdlxq.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163avrcwxyf.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163umxgupgq.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163rwfohwyz.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163pqbljmlx.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163biengfqc.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163gnxetmke.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163zxclnmwo.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163xsmnvigd.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163nhpkdbif.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163tnucozse.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163rzyszooy.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163tnjdgyzo.html

files=$(ls -1)
来源：http://www.xuanzx.com/163mnpcpvun.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163wetdxihx.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163fxpekozc.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163iqdsfatc.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163gzrtvkeo.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163jmqzeikt.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163lqukazqn.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163wqvvjnmu.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163gtbnrjue.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163vcxsexlt.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163immbootu.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ongzlksn.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163lgjbqfow.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163gyniuqfy.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163qqyfazoe.html

[R45] 批量删除
来源：http://www.sxryk.cn/163vataygzq.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163zflwyccf.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163cpokyegn.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163jntfbhqf.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163pyzojqri.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163uysiorjm.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163sanvngtx.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163ylezqttv.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163atnsnexi.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163ecmghimr.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163qgdyvxwl.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163fbpesgaa.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163ddaxzqgp.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163khjzhfic.html

[R52] 统计行数
来源：http://www.sxryk.cn/163hyhjeqkg.html

wc -l a.txt
来源：http://www.aibaodan.cn/163uofwpfex.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163vebylpqe.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163pcjmqodd.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163aojlneys.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163huqlbdir.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163feibraiq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163zzmclwxz.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163kdrmbsxu.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163rcqdialo.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163jjuaerjj.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163mrtxrhug.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163zdbyqudb.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163rfubbltj.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163wqdhgmmx.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163giecufje.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163lecoonkn.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163soeclgda.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163nxuofqpz.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163cqjrbakn.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163jaiznvtn.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163orfwcdye.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163fqpvigdi.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163geuvnodi.html

[R64] 结束进程
来源：http://www.sxryk.cn/163knjdaygq.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163oigdhhkf.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163rdaawftt.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163dxkobogc.html

[R66] 定时任务
来源：http://www.xuanzx.com/163aqbcqwul.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163ifvdfqit.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163lbyxkejt.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163ysxpmohy.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163qpwwhfci.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163uikqgvtz.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163shfywiil.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163blbrnjee.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163fnjbdmfy.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163fvqszber.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163jnwoezqp.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163hkqvjbuu.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163qwplpamz.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163wopmupnj.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163vmctqdro.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163skemoran.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163xdewdlsf.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163oaltnror.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163gahqgpnx.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163piiyyeft.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163xodclkmg.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163pwdpezrv.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163yiubjude.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163facbgdyb.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163jnhrfvaw.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163zpnywfuv.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163tjwvppft.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163tfrazlzk.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163knigjtlw.html

time ./run.sh
来源：http://www.aibaodan.cn/163nehdsgtp.html

================================================================================
来源：http://www.sxryk.cn/163cmzjuexg.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163fbvicade.html

================================================================================
来源：http://www.aibaodan.cn/163dixlrnoi.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163vcxtffsb.html

#include <stdio.h>
来源：http://www.sxryk.cn/163cqxjuniq.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163vdaskbto.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163jzetqqrb.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163cxxsuiia.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163rfymkyje.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163whhqrlvk.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163dcfkbisc.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163mxnkfoxj.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163gmhgaoga.html

strlen(s)
来源：http://www.aibaodan.cn/163zhkfopdt.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163cdxanvoa.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163nqnpwhja.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163cntwrydx.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163khcrmhpw.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163sonxxywl.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163vmvptzcj.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163yqiroggp.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163hhhccssx.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163ltbpszdf.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163vicpkztg.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163ylimexod.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163ieoiptjw.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163yzqgauqu.html

fclose(f);
来源：http://www.xuanzx.com/163yhexlpkd.html

[S12] C：写文件
来源：http://www.sxryk.cn/163mxnkfhgg.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163ejepdhpv.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163mhfxmjjt.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163veooptkt.html

[S14] C：枚举
来源：http://www.xuanzx.com/163kmqvkaor.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163brrdgnzo.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163sglewjpq.html

(double) a / b
来源：http://www.sxryk.cn/163hvzfpixv.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163taspsuoz.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163dfsxfshc.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163pdkcipqc.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163pmiyepqk.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163osweetem.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163ekcfrfhf.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163qkoglhuk.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ltfjbxsk.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163nyvrdqds.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163nbytjajy.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163xcpavydl.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163yomvrgme.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163omrmaosh.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163iuhodpsg.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163dhmehnjt.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163kdrpbrcp.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163fmrtqvji.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163aymbuikr.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163ldicrnbs.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163rgjfctwu.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163jehyutad.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163qxkvusei.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163ebzlggke.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163eamkygth.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163gscghrzm.html

static int counter = 0;
来源：http://www.xuanzx.com/163vnfvduhc.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163psjafgbg.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163iuddetgr.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163azhdrnek.html

#ifndef X_H
来源：http://www.sxryk.cn/163aucjekhy.html

#define X_H
来源：http://www.xuanzx.com/163sskssgqn.html

#endif
来源：http://www.xuanzx.com/163wlcjfbef.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163zsxabgdk.html

#include <iostream>
来源：http://www.xuanzx.com/163dxhylgqe.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163areugcie.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163zpujxdzk.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163cflaeeft.html


<!-- 参考信息 -->