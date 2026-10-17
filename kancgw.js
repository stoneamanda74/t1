外链999!wailian999！

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163ucxvtmhx.html

[Q26] 计数
来源：http://www.aibaodan.cn/163ziiblbxk.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163qvwszkir.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163lmidcmsw.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163wohxkydg.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163ddqvboxn.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163earjroyc.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163qsbeypti.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163yhjvucwd.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163hrhrqagz.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163fgpdnhdz.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163mptefcij.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163allljjro.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163qhdzzpdh.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163oedorsdv.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163ftfbtzzx.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163aqaavnlg.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163ksqanamp.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163czkwlihq.html

SELECT * FROM (
来源：http://www.xuanzx.com/163jmbzwsfq.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163ufxnrtfo.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163ogruvvaa.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163uolsdrgx.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163cmdxfoqo.html

[Q36] 左连接
来源：http://www.sxryk.cn/163vibeaaev.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163micoqywj.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163nrbahfag.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163yesefcgr.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163hgwrpsvj.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163fouphpyj.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163hjlmqakf.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163fanalxie.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163ftkjzzsm.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163wgknibrf.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163okivpbsr.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163qdwummdu.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163suxvwfej.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163vkakkgiu.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163gafrlqbb.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163iowakfwy.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163msvngsjv.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163arvntcbw.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163rchvoxlm.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163dxmbmhnq.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163zkhlyjid.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163knvdpkhl.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163zignoncy.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163zxwapjsg.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163tnagpwdq.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163rpevzlhy.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163gbbdpcul.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163qkfbdunk.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163bgefqvkk.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163leeigewx.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163ynvuyfna.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163splvuwlx.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163idwiebbd.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163hxvcpazw.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163xjvbsmnb.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163wvctkusc.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163bcyxmxdv.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163fwiipwrb.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163wmfllgax.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163ggquqqjt.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163yfjfivod.html

[Q54] 清空表
来源：http://www.sxryk.cn/163ypmpklef.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163wcljvaec.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163uqodidwb.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163dqnvrhgq.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163uczhxqmb.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163wkutdtcn.html

[Q57] 行号
来源：http://www.xuanzx.com/163kjqzowht.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163fewgancg.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163hbhkqhej.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163lonzzpcs.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163ekgxusig.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163wejtyaot.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163wrvloved.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163ccnunxlt.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163tqduppbf.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163jqzymluw.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163vlvjydeu.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163brabpkyd.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163mzqiwhjq.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163rhhqyleb.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163srztrpwu.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163agozmpwq.html

COMMIT;
来源：http://www.xuanzx.com/163ybrhkdtz.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163onfosnzh.html

ROLLBACK;
来源：http://www.aibaodan.cn/163xrxppkdl.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163wsackwcc.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163nlaquoxq.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163khgclrnw.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163exggzqtn.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163zkotudyx.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163uakzweay.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163hkzqtuyc.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163wcwiyzyo.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163jxusjvdj.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163yixawnip.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163delrauqe.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163agwkxdwg.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163rcdigkad.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163gsadvorz.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163lqtrrnmi.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163dwrdxptl.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163ewguzosb.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163qkpyzdyg.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163doylesqj.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163zuhkfkcx.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163tahytgpc.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163xmpiamlu.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163zdomayde.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163gbhlgzyu.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163jmkxijsw.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163aancdpuv.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163ghkcaftx.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163nmywnibi.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163nvyrdccr.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163uhvveosp.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163owbpgfpy.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163olzckhoa.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163zorsgpmx.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163aaqqskze.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163qiifnakh.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163gypaiwzj.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163hwjrftyt.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163prxupyaz.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163xysvlvgv.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163otctqqle.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163saibamjs.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163xrucxbwg.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163vhyufsil.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163mwjevzwp.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163wrjmqmvv.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163uysggsoa.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163lyzhpopr.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163hgickegx.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163zcwcxpcy.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163qltncuhn.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163xzirsjkp.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163bwlvuink.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163axegaouy.html

================================================================================
来源：http://www.aibaodan.cn/163zbrzlqcb.html

R. Bash 专题
来源：http://www.aibaodan.cn/163vwtuldsz.html

================================================================================
来源：http://www.sxryk.cn/163upipldid.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163ylrtzhpf.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163lnyxaliz.html

set -euo pipefail
来源：http://www.aibaodan.cn/163bsgviika.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163xzkdwlyq.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163uoifyjwj.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163yuundioh.html

readonly PI=3.14
来源：http://www.xuanzx.com/163onypvhjs.html

[R04] 位置参数
来源：http://www.xuanzx.com/163gzrltzgb.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163mafyizeq.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163omukaldl.html

name="${1:-default}"
来源：http://www.xuanzx.com/163nbeuvyhy.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163jrltjkss.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163eswyltsm.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163tbllewzs.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163vglcxjau.html

[R08] 数值比较
来源：http://www.xuanzx.com/163ntwttwwg.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163qopytvhi.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163ztcclwci.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163btavugqu.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163uyoypxmh.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163bagytsta.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163falrikcp.html

case "$1" in
来源：http://www.xuanzx.com/163cbeagyfo.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163qeibmfvf.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163gjknbgwb.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163nnmeejvq.html

esac
来源：http://www.sxryk.cn/163kxamxrut.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163iqvpmboj.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163hqlwvcsr.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163fnjffmvv.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163dzfstjpx.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163rxwxgnpk.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163gzhvlusy.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163jlttojmi.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163lpkfnbml.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163famsvqvt.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163ecfsxqhv.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163qndjpwdn.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163ahjggewi.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163yjmjcnpo.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163jygomxjs.html

[R19] 数组长度
来源：http://www.sxryk.cn/163pnvlsfyo.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163paoacxzh.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163tztuqypn.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163limkxdaa.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163lczatyts.html

echo "${#s}"
来源：http://www.aibaodan.cn/163hqgrubge.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163rvzvywrq.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163gjesswwb.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163gjizgjaa.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163vypldfhl.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163byfxhriz.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163lxuuxmfx.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163zyhbccry.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163hahkvhvs.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163tfecmafk.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163gufaodfo.html

[R27] 算术展开
来源：http://www.sxryk.cn/163lqirzapb.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163jmichtis.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163ynczmjko.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163dyeidgqw.html

[R29] 定义函数
来源：http://www.sxryk.cn/163kxnqucbc.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163ecmdbyxp.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163atptnzyx.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163dnyxowxh.html

[R31] 局部变量
来源：http://www.xuanzx.com/163abtlhffq.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163yulwdsrd.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163pazzvizj.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163suxxhknc.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163sxjcioyt.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163fyckzlfu.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163ivhlvsvj.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163lvmyepfa.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163pgodfgqi.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163jnauqjia.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163qregihcv.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163yjrviils.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163ciqpzqef.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163cjeweuka.html

[R38] 管道串联
来源：http://www.xuanzx.com/163hlpkpvlq.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163vudztrbs.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163mrrricsy.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163jqmjqdia.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163uhzfwfbx.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163jwnqddsf.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163fkcieppn.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163gtknfbgc.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163dbdxirmb.html

wc -l < a.txt
来源：http://www.xuanzx.com/163yrcvaazp.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163tmruibwe.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163vbvxeujf.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163olrudhjh.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163zzqtvlfe.html

[R45] 批量删除
来源：http://www.sxryk.cn/163rayxsmns.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163pfuhevzo.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163vualvxzw.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163mskggplp.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163stdgfvcg.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163wtmgtxap.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163ifhhlcym.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163wfmaxxzl.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163zcxdyrgj.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163xocbuaad.html

[R50] awk 求和
来源：http://www.sxryk.cn/163pnriiivc.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163bpkafzlj.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163ogdffxva.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163mzfqkltq.html

[R52] 统计行数
来源：http://www.sxryk.cn/163mahidgzm.html

wc -l a.txt
来源：http://www.xuanzx.com/163uyomzuke.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163muoqkfar.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163octsrdjb.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163yywrdfep.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163vsjfuldq.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163wmzqagqs.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163ubixeonz.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163geuozvgl.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163sclraphh.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163ztzqkogj.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163twopkdxl.html

[R58] 下载文件
来源：http://www.xuanzx.com/163zkfrpers.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163yttzyeri.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163zqamidwk.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163mkgejkjk.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163wyydjciu.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163brvxuyxd.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163pydfdinb.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163tvvnaczm.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163zeriwtqz.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163xquegzed.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163kipesvat.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163pqubieye.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163urrjcmru.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163fsitlqan.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163aimgziko.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163hiegqygv.html

[R66] 定时任务
来源：http://www.xuanzx.com/163ewmbxynu.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163doiiwadu.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163cabffnmv.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163oogkgqtq.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163ednxoiiz.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163ztlatkiq.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163vbzabjod.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163stusgxid.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163qxhzzova.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163vavtjahm.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163dcgrorbo.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163hijvfoeg.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163mynffgjx.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163vwcdzqro.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163vlzxjvcn.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163hdfyzniq.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163axfhyzth.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163asargkfd.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163dtpkjbdl.html


<!-- 参考信息 -->