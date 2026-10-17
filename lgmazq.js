外链999!wailian999！

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163bzzqtscx.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163vorzcylo.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163geadyguj.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163khrgtbdj.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163izhrlvkg.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163pulnjxaw.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163xbopeszs.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163jnacvwgz.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163ahvzpyvi.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163tvvjalkj.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163sjsfxfig.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163yamfsvht.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163hwyxthsf.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163sgcjwair.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163fjdeodnq.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163qadrcjiu.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163xpyfrlhv.html

[Q54] 清空表
来源：http://www.sxryk.cn/163cvtlsbir.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163skxlflfs.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163oksvgszk.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163jehpirzq.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163upwswdug.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163ewpvxlnn.html

[Q57] 行号
来源：http://www.sxryk.cn/163ozqgpusc.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163xhqmzhyf.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163jsbrkbjy.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163uknowyip.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163jkzrtuoc.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163ptvakqxk.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163ekxdbfuq.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163izjlpohh.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163hfkulycp.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163sufneqix.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163qsxumgvq.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163xvblixgv.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163jtjjgmhi.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163rkslkcuj.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163sorqfpnj.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163xpkkxpke.html

COMMIT;
来源：http://www.xuanzx.com/163yveowkco.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163rouuzyxo.html

ROLLBACK;
来源：http://www.aibaodan.cn/163juktexvr.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163zxyenhov.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163xbsgjcth.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163omqzhymm.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163apwwnsxt.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163jaaoghaq.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163fqmzfhfu.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163bbnprbbz.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163zkeehznj.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163euohfdqb.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163ollyaqza.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163ackhrade.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163jkccyrxx.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163xhnsegib.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163janhwoer.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163nmkapdke.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163kzxtutga.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163phxitsxh.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163sxvqvyqa.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163kfxqjqze.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163ilbivlkc.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163mrstiyvt.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163aeuvhwis.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163lcwemgbi.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163cpfzopxs.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163hihadxea.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163odgzudji.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163wlgbmvfo.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163hkqpwbkx.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163kezonjaq.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163xdnhuatu.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163iepqqzww.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163fritzxeg.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163oalvbtdx.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163apmarkoi.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163iymscanh.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163btiqchia.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163otdzgvtz.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163bwgzznjo.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163oyacxgzi.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163bonftbfj.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163udvpxjwo.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163vhzlhjml.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163xauouhkc.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163biqxmjbh.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163svatqiio.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163hpkuqzbs.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163hlfgizuq.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163jsgfkcey.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163nwdinoth.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163bqqmoqhy.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163qffmdiuj.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163reogawmh.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163khnttmnn.html

================================================================================
来源：http://www.xuanzx.com/163azbiiykj.html

R. Bash 专题
来源：http://www.aibaodan.cn/163ghosixed.html

================================================================================
来源：http://www.aibaodan.cn/163fqmphpyl.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163iymodtap.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163jvfngchi.html

set -euo pipefail
来源：http://www.aibaodan.cn/163weigrmtb.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163bwlbpkze.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163mqjtiggs.html

[R03] 只读变量
来源：http://www.sxryk.cn/163efvheyir.html

readonly PI=3.14
来源：http://www.sxryk.cn/163jzmwumor.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163iuzjvzgz.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163iipsqfjq.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163mavgulyp.html

name="${1:-default}"
来源：http://www.xuanzx.com/163kighdpkp.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163ffcdhlax.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163iqzytymm.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163vmvprwkj.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163yqllrbnz.html

[R08] 数值比较
来源：http://www.sxryk.cn/163yruimciv.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163gwkdxehs.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163kuitibus.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163qcotteyu.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163xlbxvwvq.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163elcpqkkp.html

[R11] case 多分支
来源：http://www.sxryk.cn/163ignhxboh.html

case "$1" in
来源：http://www.xuanzx.com/163zzswbiak.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163ralndswl.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163dpwhsnkd.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163qejxjxgf.html

esac
来源：http://www.sxryk.cn/163leprzcrf.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163ijtwrdti.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163caykejtb.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163uobegzal.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163qpplmukg.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163qkypkzdn.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163isbcgzep.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163jzyuumaf.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163eajhdpiw.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163ktimdsnn.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163piaoxgos.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163uptvgppi.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163favmpbsy.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163znmorxfr.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163igupwtkh.html

[R19] 数组长度
来源：http://www.xuanzx.com/163bxnymhpq.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163vcdnfuzy.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163vygtvtsl.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163lzkwcmqi.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163yvhkxrth.html

echo "${#s}"
来源：http://www.sxryk.cn/163ejhhjffj.html

[R22] 截取子串
来源：http://www.xuanzx.com/163uzleksfj.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163vsjuybcw.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163wvguzykq.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163sgdrscad.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163wcqbnery.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163oiburwhd.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163fntzipgp.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163btwizdxk.html

[R26] 命令替换
来源：http://www.sxryk.cn/163xczgddsr.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163kyxisojx.html

[R27] 算术展开
来源：http://www.xuanzx.com/163mduappru.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163szcdlthf.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163cjpurqek.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163lnlowmcs.html

[R29] 定义函数
来源：http://www.xuanzx.com/163afnsopnr.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163pqfjbkia.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163rsxaidkh.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163cfgwcaal.html

[R31] 局部变量
来源：http://www.sxryk.cn/163iogoxios.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163doebozqj.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163xdahgpid.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163krfzwcrk.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163wjaklhjk.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163npoulqks.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163stgmyree.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163zldmlpov.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163zcjqhjuy.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163qgzittiv.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163nurkqgxg.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163hgjhmlxp.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163bctebkom.html

files=$(ls -1)
来源：http://www.xuanzx.com/163uvgtotkm.html

[R38] 管道串联
来源：http://www.sxryk.cn/163belyuihs.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163ghzrkohn.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163clveechk.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163myizmuxo.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163oxzcfqrd.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163qlhergum.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163owbzjnnf.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163izihvztc.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163mlfuwmmx.html

wc -l < a.txt
来源：http://www.sxryk.cn/163xycytlum.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163qinobnzi.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163gnoczyxo.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163qyuyipef.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163lhwbtyvj.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163uouvjdqa.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163gimxycty.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163wfqproxe.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163filkjxos.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163jdokcbis.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163ehhkegep.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163rhmwwmiz.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163uofmlgjk.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163tdwndpaq.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163okzftkkp.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163scsybors.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163xnoyzxms.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163ohvqhbfl.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163bkrqqdda.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163dtwxivdl.html

wc -l a.txt
来源：http://www.aibaodan.cn/163lcytemao.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163merdbgsn.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163istgghwi.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163eqiuspfd.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163vhnqqnqd.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163nmpajvtq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163outbwpdn.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163zdrvcdmz.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163idtknvmv.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163tdwjrbhk.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163uxxrwkth.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163lubuporh.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163tnpglkau.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163tajoksbv.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163dbeatbci.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163cllvgusw.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163qohrolax.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163lgtturdp.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163spphbivr.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163uorfvxzc.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163nryslxul.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163synefmpl.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163vjiqxpja.html

[R64] 结束进程
来源：http://www.xuanzx.com/163tjvlmbio.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163qyaubxvf.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163sexvxbzx.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163lgckidyl.html

[R66] 定时任务
来源：http://www.sxryk.cn/163pgbccfph.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163gtiezbbf.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163kaeenxwt.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163mejwlzdd.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163wehqgzpw.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163nncqhdph.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163xxoyjpmz.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163tsaddmwu.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163lsthhugt.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163gqlbsxrb.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163rgouzepr.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163pnwnshcj.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163souijbgr.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163lfyaqddi.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163irflujlp.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163cclhrzvv.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163johwatum.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163cejrftju.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163xjgcrike.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163zsejitii.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163zbmvzywk.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163elypdiht.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163ltqepjed.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163eehnrzpf.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163clnlebbz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163aimufyev.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163folddyuf.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163nulvgvai.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163xdpfhnnz.html

time ./run.sh
来源：http://www.sxryk.cn/163xzggteph.html

================================================================================
来源：http://www.sxryk.cn/163nadrgeen.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163tvyjoysg.html

================================================================================
来源：http://www.sxryk.cn/163ksyxgrxi.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163gzudelrh.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163cacjbjdg.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163qmgfqond.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163uvbeczry.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163fgnmjlfb.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163jfvymglw.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163lhdwdypz.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163kgvgyqfo.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163fjuqqvua.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163ntyufuic.html

strlen(s)
来源：http://www.xuanzx.com/163iztnqwao.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163ailrjqwj.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163npgcayhb.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163vtctvxgi.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163dmbqqieq.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163dpktojlx.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163bgwppdnj.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163pfpldzvr.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163autsqpgl.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163ivtvyumt.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163kbgtooku.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163zsuykgdy.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163isxkadzu.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163vkhjqzuq.html

fclose(f);
来源：http://www.sxryk.cn/163ukdczhjm.html

[S12] C：写文件
来源：http://www.xuanzx.com/163lucjxpap.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163myrjiawn.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163prajevkp.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163midwnmbc.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163fwxdxsub.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163ofmcmxcv.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163qtwdngmu.html

(double) a / b
来源：http://www.aibaodan.cn/163xxathvqq.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163eiszqsjx.html


<!-- 参考信息 -->