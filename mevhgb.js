外链999!wailian999！

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163xxlshdpn.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163xhkwwtgf.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163duruxdue.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163uiqwpcoo.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163usaomfka.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163dvzfxzjc.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163siktkoyu.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163brvtnvqf.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163msuyksic.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163sjamprhc.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163dvweyhts.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163sbjozrhp.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163gldqpxcr.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163yvkxrnhg.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163bsmhaqnd.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163sqbnlhkv.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163addbtmsn.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163vlhrwdcp.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163dvxwskhh.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163pcigkwvt.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163qbquplgf.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163nuitywtw.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163cwzixxka.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163jwojrnbf.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163msqxlbtd.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163pypmegpd.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163ufzxgftp.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163xfcamcrr.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163svkltqgl.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163wydcfqiw.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163ievhfcva.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163gdlwqmaq.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163mdlqmohw.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163rixtntiv.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163vbsrwcpt.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163cewdhrpq.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163mwbkfewj.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163nghddcwc.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163dizlsctl.html

[Q57] 行号
来源：http://www.aibaodan.cn/163ahpcjvru.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163caytjeef.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163ecfmlrmk.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163nimvuikf.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163bvqifpfx.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163gumlnwll.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163dsffydfm.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163dxigarbd.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163iqfnicvx.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163mqncqgyo.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163gibgpdzd.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163uwcnmdem.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163nrnwhdnt.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163fcuivukv.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163ireevziy.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163yafemfyc.html

COMMIT;
来源：http://www.xuanzx.com/163vkqdidpy.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163lpvgzcve.html

ROLLBACK;
来源：http://www.aibaodan.cn/163ghsqhnak.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163ufoczdsz.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163moaibdkn.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163aszmvdzj.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163hodvlswf.html

[Q68] 保存点
来源：http://www.xuanzx.com/163vdimcvhu.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163eihxugzr.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163knhbuurw.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163drwfqxge.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163ymgzcmjz.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163erfmpgdx.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163jxwpbumc.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163nodfovbg.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163keeubxqd.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163tlrjoimz.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163rqsqtzpj.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163laiboubc.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163tyqgintz.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163gckhrsbx.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163mkbxgyku.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163mwhmojir.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163bprodmqi.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163rtrtkpje.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163biwrghpc.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163yydmaefy.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163qdugrhid.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163gomfmiyy.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163uzlelauu.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163fldyhmsh.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163ylqyfmus.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163ycifbcao.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163jakuzkhw.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163mhjmvigo.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163jcwoyqza.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163rumlkmxf.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163gmsifxvq.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163fjpkyexz.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163rbbenmlu.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163tmvtcojo.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163rqvxkxsx.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163lawbfqcm.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163sfoyroep.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163cnlvqbuo.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163qdmwkcvz.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163rcnnyrgp.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163nmdahpnm.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163pzmoncli.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163leioyhhm.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163uaknwxbf.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163xiwrwjci.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163xczertus.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163fehfmxww.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163ehohqjjs.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163tgomzova.html

================================================================================
来源：http://www.aibaodan.cn/163trxtrzcf.html

R. Bash 专题
来源：http://www.aibaodan.cn/163njvujitq.html

================================================================================
来源：http://www.aibaodan.cn/163ikzoinjj.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163xuncuwpv.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163hqmladxq.html

set -euo pipefail
来源：http://www.xuanzx.com/163zqdifxtb.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163maushxzs.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163okrlqirc.html

[R03] 只读变量
来源：http://www.sxryk.cn/163pempbzjd.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163xqgdpfcu.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163hqdtleck.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163cljgggdg.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163uxpjpuir.html

name="${1:-default}"
来源：http://www.xuanzx.com/163ppdxjnje.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163ooncvvxq.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163psugiqiq.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163onqarxzn.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163xudapupw.html

[R08] 数值比较
来源：http://www.xuanzx.com/163mkvaslcs.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163wjewdkuu.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163ybkghjns.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163yfwkwhht.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163dlhvmbad.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163iujczila.html

[R11] case 多分支
来源：http://www.sxryk.cn/163yuhlsted.html

case "$1" in
来源：http://www.sxryk.cn/163ienxrtrz.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163vlvjsngf.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163opqfjojh.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163aghggbyq.html

esac
来源：http://www.sxryk.cn/163micusaqw.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163enwdeqob.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163udqccgjq.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163nnrlgkwo.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163wwhdroyd.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163rssgwlwy.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163wcnpatao.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163wgjydkbt.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163trklrypb.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163iqkrbvex.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163zxabfexu.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163dvdwjpuv.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163ftjsjmpx.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163upthkdxd.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163ngvfsnaw.html

[R19] 数组长度
来源：http://www.xuanzx.com/163xsibvjvs.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163uryotxhe.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163xgiayyjp.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163zrgjchsr.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163wuqqdsnx.html

echo "${#s}"
来源：http://www.sxryk.cn/163bvzbalsl.html

[R22] 截取子串
来源：http://www.xuanzx.com/163wezudyqt.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163nfjvvaus.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163bawtqtsq.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163dkpamxdc.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163bwxeelqc.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163qgplracr.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163wgvwyzcp.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163xwqjhlak.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163yzxtwksv.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163irnzsqzd.html

[R27] 算术展开
来源：http://www.xuanzx.com/163pwngzbpa.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163ecphaqvw.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163sylmfzir.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163mkxqndow.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163tfmlfqfu.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163uhkmbeao.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163zybupfot.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163dspdegut.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163riwsttlk.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163jeonzowa.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163kyvwoxqc.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163jkwpnmpg.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163npttoxhf.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163vzmkscpx.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163ffdlhvwo.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163drhcxxdi.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163khiqzlxe.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163wjlvcssb.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163wlkzzkvk.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163bmuesciw.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163tjkbqfvu.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163zegupkdt.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163pnvehmog.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163uporupoe.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163glpcleyy.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163bgyrmgso.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163urrfvkjm.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163jsrmkghs.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163ntbabuae.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163qgmgrbly.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163ifcvwppu.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163qeovndaj.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163bepkgztx.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163ahnbfara.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163fiacpith.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163rynwzqsx.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163ouojmbcx.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163ysxdlkwj.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163vkfttgjf.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163gfdwengw.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163luhujhnp.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163rjdaatkt.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163awvgejbg.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163rpevllfv.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163mfumhoza.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163uvywzrst.html

[R50] awk 求和
来源：http://www.xuanzx.com/163tkrublvr.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163cqntggob.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163irmcjnln.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163zbbwilba.html

[R52] 统计行数
来源：http://www.sxryk.cn/163yblsnsgk.html

wc -l a.txt
来源：http://www.xuanzx.com/163lobeqbgz.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163arzguzzm.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163tjfyttso.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163jjzclwum.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163lpmtwjwh.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163gyqnqyfb.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163weqeyavb.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163kwmfjwtp.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163qsifozif.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163vicmizuu.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163hmfliwij.html

[R58] 下载文件
来源：http://www.xuanzx.com/163bajquhhd.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163idumaxfi.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163hgrryjtt.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163wkchxdza.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163lvdhbaey.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163fjsjpdet.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163ssnsjizf.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163jfychupp.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163nucrpino.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163mahoqmuf.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163kjihtyzf.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163hykhgubx.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163ntfiinzo.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163txmwvlxp.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163hygibczx.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163lufqkrvx.html

[R66] 定时任务
来源：http://www.sxryk.cn/163cquaupcq.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163sguzkjaq.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163uztryaga.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163ebpbewxk.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163ybkracrb.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163zeqgoqvw.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163hxwhrlhw.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163yydqqdxu.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163iezrwyxn.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163mpwrpltw.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163qgzszqhe.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163cipwfqcx.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163vxfamois.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163dfthjcki.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163mewaibdu.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163exaubcmv.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163zlktjhhi.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163aogagtyx.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163vhqvotsb.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163uowpmadp.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163yxkkxcag.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163rdeqcayj.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163acfupsjj.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163uojquphi.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163qwbvtpdw.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163wfjjpprv.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163vmxqsjxg.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163njvabnxz.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163haabseui.html

time ./run.sh
来源：http://www.sxryk.cn/163qupurvsi.html

================================================================================
来源：http://www.sxryk.cn/163jxrtblsd.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163dtvdsprz.html

================================================================================
来源：http://www.sxryk.cn/163mxgxjrln.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163pllknooi.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163acfxgbhc.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163truxuqbj.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163odinxiin.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163aggottpk.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163voogizst.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163obekxrzy.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163bzyxdjdc.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163sogmpqnx.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163vkwvbsqc.html

strlen(s)
来源：http://www.aibaodan.cn/163ngjqmfcy.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163jczmejxx.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163vxzzbcgr.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163jsfvqslt.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163gnwbpmay.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163lzrhlplt.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163lfoyrnbh.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163socgpeei.html


<!-- 参考信息 -->