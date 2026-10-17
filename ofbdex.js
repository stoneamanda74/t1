外链999!wailian999！

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163kllqlbti.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163vuicuhbp.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163bewwuajr.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163pwdlxaqw.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163bishkezn.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163qccwwzml.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163xninjzfl.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163zguvhamc.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163jzhuuord.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163hahzvxoe.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ohxahnjw.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163gopuooxc.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163jfkqapcl.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163qkkalawo.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163gcgzbwhk.html

SELECT * FROM (
来源：http://www.xuanzx.com/163wbtoqbrl.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163kcuaochf.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163knwyypwh.html

[Q35] 内连接
来源：http://www.sxryk.cn/163ucrbkdiq.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163kgprzkfk.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163eoftfser.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163gvvamlyx.html

[Q37] 右连接
来源：http://www.xuanzx.com/163ewmjppid.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163zjtqpvny.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163jwaxwsbg.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163kviufsvc.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163wnmiipii.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163whywawru.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163triituai.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163irtwhmwd.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163iphuqmqe.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163okepqroo.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163iueamhfy.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163fpmcisxh.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163eroapdwl.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163jxxzqgap.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163ceervxar.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163bbcddnwb.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163alvymnuy.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163aoahocqt.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163coffrjod.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163aopqudtx.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163rhdgvsmn.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163sgxaxois.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163hobhdiuj.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163cjbhbefl.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163mmojqwhs.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163cfwcgwxo.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163yszohigi.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163umifuzxg.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163oypdixta.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163hlisythn.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163umhkjnmp.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163xofbpkil.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163cjlalhjw.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163rpqduomx.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163clflbubs.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163weyenmnh.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163sdxelagt.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163fzrzlxxs.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163kvucqbrg.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163bmbfjeba.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163evpanbzr.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163isglwpos.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163bpqjiwqo.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163fbtkuasq.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163mwwfpakv.html

[Q57] 行号
来源：http://www.aibaodan.cn/163wlhgdwyh.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163zufehmoj.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163rphuwntl.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163ixpcsaij.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163ufhdefgb.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163kzttatmj.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163mthrkrtj.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163ptgnmpwi.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163tzbhhjoq.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163dfsuqdkb.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163kkdxraup.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163crlnuovg.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163uzywagze.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163ixytzoqq.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163aeoprrdc.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163pqpczuwi.html

COMMIT;
来源：http://www.aibaodan.cn/163jyceotkw.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163xhoullrf.html

ROLLBACK;
来源：http://www.aibaodan.cn/163vuazufmk.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163rlxcvbue.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163ldvheafu.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163eotwtruv.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163hjglsjfo.html

[Q68] 保存点
来源：http://www.sxryk.cn/163rqzxskaq.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163nlcwwxol.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163kblqnrdr.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163rwxpzvnr.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163ievxfmal.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163srtbarry.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163gclwdxtw.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163cvtintaj.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163xdtqtucf.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163znlvfrwy.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163stsadqje.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163ptrapyhp.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163ssvoskms.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163nnezqhed.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163sufuzhmr.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163lrizswmr.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163olnvdarc.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163lfxcqujf.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163jprvsnjd.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163gtmldngx.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163ugxnlimo.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163fygspfnv.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163qbnnvqpa.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163lcmuituz.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163cxwmkpnk.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163bzvnnfgo.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163kexdslyu.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163tpnhrbuw.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163nmhzgpqx.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163rzygxxbn.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163ovzbylpn.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163pwupboia.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163lrrkimzv.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163gymztmex.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163ypnhhdmj.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163nnaehzzk.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163jqbaqrcc.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163nxjiqbwj.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163ecvtjerw.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163oqotrdwx.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163ymvpxfjo.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163fkhgjcvl.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163rmrnduhx.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163tqxguiop.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163cohpzbmx.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163lnrbnuvp.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163nidmkaqi.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163ryttuqyg.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163tscdkxnq.html

================================================================================
来源：http://www.xuanzx.com/163urczvvuc.html

R. Bash 专题
来源：http://www.sxryk.cn/163ksanyefq.html

================================================================================
来源：http://www.aibaodan.cn/163ntkxgxzi.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163tzjmhzpd.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163weipugbg.html

set -euo pipefail
来源：http://www.aibaodan.cn/163cgkjomgl.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163mjvcejps.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163uqrjmsam.html

[R03] 只读变量
来源：http://www.sxryk.cn/163hdqulyji.html

readonly PI=3.14
来源：http://www.xuanzx.com/163ejrpogcm.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163uxmhezbz.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163dabdthxe.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163rhznqmin.html

name="${1:-default}"
来源：http://www.xuanzx.com/163xzfipjsr.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163usojugkv.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163dgpivify.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163xxuhynmi.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163pjaywvun.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163glyaukyk.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163aapzvxsq.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163ixwhmrla.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163mtzmogcx.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163tlnwlgjk.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163zfdwbenk.html

[R11] case 多分支
来源：http://www.xuanzx.com/163mqnzzgzx.html

case "$1" in
来源：http://www.aibaodan.cn/163yszytnsl.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163pkmlwtdp.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163lozkptcz.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163ofafkyio.html

esac
来源：http://www.aibaodan.cn/163jdxacnuk.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163rrfzbcwm.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163uuseqrmk.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163cdrcjexd.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163zxaikxmc.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163athyplmc.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163nnmdqisy.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163gjywvydm.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163bwxhucvy.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163ifvjuhmr.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163yfkrtjxz.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163buonmlam.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163piovfywj.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163liotyoha.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163oabrufmj.html

[R19] 数组长度
来源：http://www.xuanzx.com/163dbhoaykz.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163mvywszby.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163rsuyacgr.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163nsdcnfth.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163tbvkmrth.html

echo "${#s}"
来源：http://www.aibaodan.cn/163iwlfhknn.html

[R22] 截取子串
来源：http://www.xuanzx.com/163limxebwt.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163vqeamiop.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163jbwbeias.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163tajxnoci.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163qptblfot.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163rvxtbhjv.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163pobqvjko.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163zkgbolyh.html

[R26] 命令替换
来源：http://www.xuanzx.com/163zyjsxcww.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163bxyivgot.html

[R27] 算术展开
来源：http://www.sxryk.cn/163ptuhkhib.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163ijblecko.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163cigoroxb.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163zwhycqvt.html

[R29] 定义函数
来源：http://www.sxryk.cn/163bbcfppsu.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163dxzzfqnt.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163wbuwsnnz.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163xtsaawdj.html

[R31] 局部变量
来源：http://www.xuanzx.com/163tdkqdegq.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163jyiofpou.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163stiauuem.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163lwjzjdna.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163fsvibqbs.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163zpvaoosj.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163ldiithwk.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163lfxczdnj.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163jvumwxtu.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163nvahggqr.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163lymjwznj.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163rkyawmcl.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163gyzpveda.html

files=$(ls -1)
来源：http://www.sxryk.cn/163ixhwpywb.html

[R38] 管道串联
来源：http://www.xuanzx.com/163gnjlmwrs.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163fqoxrxgz.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163oghtgfbr.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163beodthaz.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163ikykccll.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163ldibnhyt.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163towdokfn.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163mrsansyb.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163gyrsyeye.html

wc -l < a.txt
来源：http://www.xuanzx.com/163gvhvydhy.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163wegtkjdm.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163xixceiux.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163rhgznzuh.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163uflqfeyo.html

[R45] 批量删除
来源：http://www.sxryk.cn/163wzuuvlne.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163fmifgptt.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163guemigwp.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163iwhodqgk.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163opzgewfi.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163cbhaqgwk.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163bicyptgs.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163gxgfvypt.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163uqooktsw.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163lzvxfqyo.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163dcftzsyv.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163amnuywry.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163qdadsxpq.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163kbehujrx.html

[R52] 统计行数
来源：http://www.sxryk.cn/163yeoguddr.html

wc -l a.txt
来源：http://www.xuanzx.com/163xcxvovcy.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163uvdrxclc.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163hecigmjj.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163jvyytvih.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163zramdqjh.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163zzxqqkov.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163ukmgzknx.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163itizhtcn.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163mdpgfvbr.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163byeepwlm.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163dzijrsbz.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163gbejbchs.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163qzuiyslt.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163aqyiagqk.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163loolwcdd.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163truxjwzx.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163zgdrddoh.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163pvdtyigy.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163zagdbfpb.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163yhgugaxq.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163raggipwm.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163iredztvq.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163svlszqph.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163hautwvad.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163jbgfmecb.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163nhifmink.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163gnkgdxxf.html

[R66] 定时任务
来源：http://www.sxryk.cn/163uuvblpkr.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163qenkbfbd.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163kwfzldmn.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163llfnfyfc.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163tpwhhhnl.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163kaqglqnc.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163vdkzkglk.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163lrlakopn.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163wcyfbwaf.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163csnibnvj.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163yihypysn.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163digahged.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163tkesyxwz.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163wzmhtapk.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163iusfwrbh.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163golmezvl.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163pkmabuwh.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163imjbdedu.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163pebeozrx.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163uqxnrcea.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163vlvpkxnk.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163euyisgdo.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163opaikvka.html


<!-- 参考信息 -->