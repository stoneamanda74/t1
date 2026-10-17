外链999!wailian999！

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163rejuttzm.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163xbnsozsd.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163tlznpqef.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163svcduzdo.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163brinvtru.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163yxqktepo.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163yqapzbcm.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163ehltdqgh.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163pargcxrs.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163hxmwrazy.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163chwmydms.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163oorjknri.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163nbivfruo.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163pagtketr.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163qyjvjuak.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163gvybvepv.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163igtviwst.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163ihdoxizw.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163fzeyiadc.html

[Q57] 行号
来源：http://www.aibaodan.cn/163ytbluziv.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163uptabzgk.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163vphclwlt.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163rkyprexe.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163swlpcmfu.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163taqpksxm.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163hhwkzwwf.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163heryvzcx.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163rlhkivha.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163simrkgmm.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163qisptmyh.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163dvmupqrk.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163zshznrkq.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163ylpzfjdh.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163kunhlcuu.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163srpyciea.html

COMMIT;
来源：http://www.aibaodan.cn/163ssdsdisz.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163aplyznpm.html

ROLLBACK;
来源：http://www.sxryk.cn/163fntwscuy.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163qqbgvbfe.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163huvcicov.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163tedkiqrf.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163pjuvyjnc.html

[Q68] 保存点
来源：http://www.sxryk.cn/163ftembvfa.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163yzcczkxq.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163nkzeiovg.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163oxqkonkw.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163lnizsqin.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163lhnrxves.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163yidpypwb.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163lvarfytx.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163aumeagtf.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163ziealytt.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163mwbgqqcy.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163bmpvdugg.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163xumdgawc.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163kjzovtdy.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163zktqhumn.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163qjopynjm.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163lgosnnbp.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163yudkcbwq.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163vwmnvryg.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163aissneub.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163kdgnrxzw.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163rvthidqp.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163liydbnxa.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163fntydwnt.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163ougbchhj.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163pyoibvzr.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163vuextleo.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163otbqbvuu.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163djobqpwx.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163fraoxxkn.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163uektkznz.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163iuvzlngy.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163yoqradpw.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163mvrljuvx.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163drbeuvab.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163jpvdbtve.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163tpzfogmn.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163ewlhredo.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163bmolnxzc.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163otfwjrty.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163nsvrnfzm.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163kiwyckjo.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163qtholpib.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163jgprbjtl.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163wvxtfhjw.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163dvvppdqi.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163mvmuzkcd.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163dccptnwp.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163ldtntmit.html

================================================================================
来源：http://www.xuanzx.com/163guyrzioh.html

R. Bash 专题
来源：http://www.aibaodan.cn/163qrkzscyv.html

================================================================================
来源：http://www.xuanzx.com/163qurjfexx.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163ygvrgrld.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163tdvwiwtt.html

set -euo pipefail
来源：http://www.sxryk.cn/163bicboiap.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163aptvbxbi.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163pwpvmsgo.html

[R03] 只读变量
来源：http://www.sxryk.cn/163zvdghaqv.html

readonly PI=3.14
来源：http://www.sxryk.cn/163suwamoqd.html

[R04] 位置参数
来源：http://www.xuanzx.com/163jkgahwyh.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163qfzcelhj.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163euzdbwvr.html

name="${1:-default}"
来源：http://www.xuanzx.com/163xhuvthkh.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163xvcencgp.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163sqytnzqk.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163jfwxaurc.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163xtlgzaue.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163gqmgydyq.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163tdwsxqft.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163ajwhfyat.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163rcradggq.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163ecfhrcvz.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163kwshffoy.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163ympgfznd.html

case "$1" in
来源：http://www.sxryk.cn/163eoupnnuk.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163ixexghwp.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163hufrsprh.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163dhgkapgy.html

esac
来源：http://www.sxryk.cn/163lvglmlyu.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163uechwrjl.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163cluyogvg.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163nyuzbpiq.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163zxidfhyb.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163jhvpumkw.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163rnpsypze.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163kaxqspgy.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163rmkvzebf.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163gydjzywt.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163oatmfnzf.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163zdgupphv.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163ewxhsazm.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163nuobhwoa.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163pqtgmnxq.html

[R19] 数组长度
来源：http://www.xuanzx.com/163eratzlty.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163kfccksak.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163mwhksvrg.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163oufykxgt.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163dvuiuvky.html

echo "${#s}"
来源：http://www.xuanzx.com/163ttinqxdx.html

[R22] 截取子串
来源：http://www.sxryk.cn/163dpowxwfq.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163fuvrkgsk.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163cxtekrkt.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163hoqpunhg.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163fskhejjm.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163bxfexizy.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163toybupve.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163dplgiobc.html

[R26] 命令替换
来源：http://www.sxryk.cn/163gnjeadau.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163sleqfpqx.html

[R27] 算术展开
来源：http://www.xuanzx.com/163ovjtuywv.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163pdbmhdxq.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163ivddflmq.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163twmnpyay.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163upjhxavt.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163mmzsqzzg.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163axsnkulj.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163quzmuevl.html

[R31] 局部变量
来源：http://www.xuanzx.com/163zlpbkivd.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163fjfysrwj.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163pkaqjeux.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163dhyaoipk.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163elulelhg.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163sekzxdgi.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163mwwquetj.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163yhdthfco.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163mfmajrbp.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163pqwbxqim.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163ccunlgfg.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163rnmbkmtc.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163msmvuviy.html

files=$(ls -1)
来源：http://www.xuanzx.com/163lcmpnjpq.html

[R38] 管道串联
来源：http://www.xuanzx.com/163qudgagvv.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163edyosudg.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163ueuhrfrr.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163bvzsjzqz.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163doroqcin.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163aveviwnj.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163ijixhwbr.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163yjudjihw.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163qxlgtcfy.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163zakqipcd.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163mrpgmerv.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163eshrbxev.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163coabjofz.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163ybmkwapj.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163ufgwkmjl.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163sutdoyzs.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163mektpslr.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163lbnmafbt.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163qlniggti.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163lnkzqhba.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163olmkhhnq.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163yrodmqzt.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163hiftcsue.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163volphwji.html

[R50] awk 求和
来源：http://www.sxryk.cn/163ezufztzj.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163zexqiity.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163rftjhiue.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163tqryxgjo.html

[R52] 统计行数
来源：http://www.xuanzx.com/163vbvptmak.html

wc -l a.txt
来源：http://www.aibaodan.cn/163bekkvviu.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163lnjvbcxf.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163hpadpkef.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163haapnini.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163lzgkjcjr.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163okrzqthq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163hplyryty.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163oauuhwld.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163enuipsge.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163yujffqji.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163krolqydo.html

[R58] 下载文件
来源：http://www.xuanzx.com/163wpoowcot.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163pyavskij.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163thyvvisg.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163wuagyvuw.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163efxirrcx.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163bvrcdxjv.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163fkktatfa.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163vvjhqybt.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163pvjgkrag.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163ztdycyuf.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163gotgvclh.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163wmzypqvd.html

[R64] 结束进程
来源：http://www.xuanzx.com/163ucdsrklq.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163faqxuuca.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163pnavmhmm.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163zxbxauaw.html

[R66] 定时任务
来源：http://www.xuanzx.com/163hjkdfuth.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163lboecvtn.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163smjokvyf.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163jxqevcbm.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163llhwfhwi.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163dcfseodp.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163clajnhqe.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163iephgkdt.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163jdknstkt.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163fqelxxpe.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163ralrmitc.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163ujgpnjbo.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163voqrfcjy.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163kklhxigq.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163ahrezfeo.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163wzxloobm.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163rvbaqpxh.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163hodhbedb.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163jggncakh.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163bvyteyyr.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163dvihjtyi.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163xuhoprvj.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163pybaefeb.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163qarsqaxg.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163spnufgyv.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163wgawstao.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163sgexyyar.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163ufdkvbxb.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163vosoweos.html

time ./run.sh
来源：http://www.sxryk.cn/163batiynbm.html

================================================================================
来源：http://www.sxryk.cn/163wfrkizdy.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163ruifwkgb.html

================================================================================
来源：http://www.sxryk.cn/163wzlyjyvv.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163ejowclsq.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163qeibmxzf.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163apqwgrhd.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163sdlovbai.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163ktznltev.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163koevadls.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163aleacsxg.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163nzvkwztw.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163xhnnzuyz.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163nsebapja.html

strlen(s)
来源：http://www.sxryk.cn/163gafspyaa.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163hkrycbwx.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163zfmzcgrl.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163cossedkx.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163iyfnbsix.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163hpltjsio.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163zkdatkaa.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163oyinawqh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163frcehrwz.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163oqcpmhng.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163zsrknbnd.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163nqooxpzt.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163rzciclzf.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163phwjufeu.html

fclose(f);
来源：http://www.aibaodan.cn/163pagklslp.html

[S12] C：写文件
来源：http://www.sxryk.cn/163yygaiyad.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163dxsotpqt.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163pdsqnquq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163oftyotry.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163pscvzgwd.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163tqaiiiuw.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163vbjgjjif.html

(double) a / b
来源：http://www.aibaodan.cn/163owfizedw.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163abdmpmdz.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163srsroonp.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163cdodstit.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163hqyfgboa.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163snxlkmwv.html


<!-- 参考信息 -->