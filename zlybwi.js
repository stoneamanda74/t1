外链999!wailian999！

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163gpeifnno.html

[Q26] 计数
来源：http://www.sxryk.cn/163qroreaef.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163swlfhczn.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163physyvvf.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163gtyejwtj.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163rwwgkkep.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163vwduxmmx.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163jjhmdbza.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163chmhxgom.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163seygwtuy.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163uihihyxz.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163tvbidsfb.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163dcxvbmhb.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163ybmaowww.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163sxvjzxvi.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163rhqqaert.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163ppzzbsed.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163joyhzavm.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163knhpwsjf.html

SELECT * FROM (
来源：http://www.xuanzx.com/163vtcwdygx.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163hbmnuwzj.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163ltzatums.html

[Q35] 内连接
来源：http://www.sxryk.cn/163fdcpglqp.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163yrrfwudt.html

[Q36] 左连接
来源：http://www.sxryk.cn/163ysmcipeg.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ewefyjsn.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163kxctopby.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163twrovkle.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163rjbrtngu.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163bsyhgtxe.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163bpgaiybp.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163pdrcrbsu.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163aeudznzr.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163htxcbbjs.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163efmgnith.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163ksxrtesv.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163bmdnjejh.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163rmtghuvl.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163rocynzmc.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163vkouosvm.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163sirjkchg.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163hibsnrwm.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163sbosalsu.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163ecvvztty.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163wwurztoj.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163gsqutvls.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163lyhsuhbp.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163qfwcdsst.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163ukpzqjov.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163cvyokhmh.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163viadwgtj.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163kbruzaqc.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163dcpeszcq.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163otonzocd.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163pdrisbdb.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163fuljavhy.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163yidldhjq.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163mvhlgnpk.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163bjnavpuc.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163uhlnyjfn.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163lsdqaqfb.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163uznvhadq.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163povvvykc.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163mevdpavz.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163bwftvlkk.html

[Q54] 清空表
来源：http://www.xuanzx.com/163equjcpbq.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163fqibwfyq.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163xceovytv.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163ewmrauva.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163hyvfhvnp.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163skhkhwss.html

[Q57] 行号
来源：http://www.xuanzx.com/163bqrkswto.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163wmcxszfg.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163dspkxbcj.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163szzvcdot.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163spgvyvou.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163wiyxtuxj.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163glagxeqc.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163zoqyupzz.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163vmscfita.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163jqonecto.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163wvunnddk.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163qsszdimh.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163mwvwudew.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163cvbquiba.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163ywuejvyp.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163gydnqiyo.html

COMMIT;
来源：http://www.sxryk.cn/163wchiudga.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163mgqyknyi.html

ROLLBACK;
来源：http://www.aibaodan.cn/163balyzodc.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163qlxffpxe.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163aqyrjkkp.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163ylsfozhx.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163jdsfdrds.html

[Q68] 保存点
来源：http://www.sxryk.cn/163leolnjbv.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163qgibeudd.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163loshyukj.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163rgwsgajo.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163wbzhuekx.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163iewdavzw.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163qcpawbsb.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163mebyawim.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163jyqqjhbq.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163ttegzwwr.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163hvrayjgl.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163yuxwpvzj.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163ffmyvdcf.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163fzqjpzlc.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163xxvocbmp.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163nuapmuvk.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163ufijqmcl.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163epuynyrh.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163hcjzscgr.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163mgpcdzhe.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163xmrahyqz.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163adnbhpzt.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163hsldeieb.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163ghgtfdbv.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163jvyrsazo.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163tblsyqch.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163titkjhko.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163egirlxsi.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163qzozdyyr.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163arusbcdx.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163wjphouno.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163xcauaypt.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163gaamwjcj.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163qavomkcq.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163qhqkcdcj.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163xudsiykd.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163xauqbbuk.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163dauqekle.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163sugmuvcc.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163iuwqmvuj.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163bywgtlhc.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163rzduvylk.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163rerbkoku.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163fxeleehs.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163kwydtrqo.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163qttmlihv.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163ffjzbzbx.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163okqynlxq.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163opdlfsti.html

================================================================================
来源：http://www.xuanzx.com/163oaqtowzl.html

R. Bash 专题
来源：http://www.aibaodan.cn/163qroqaqwd.html

================================================================================
来源：http://www.aibaodan.cn/163yexppaff.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163nwfixewc.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163wahuxogt.html

set -euo pipefail
来源：http://www.aibaodan.cn/163exuqiqxa.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163cyoxwdyy.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163kjomehbi.html

[R03] 只读变量
来源：http://www.xuanzx.com/163jwmpbivm.html

readonly PI=3.14
来源：http://www.xuanzx.com/163glpexuvc.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163bywtioxw.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163irljitpy.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163ufkzdgwq.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163bexokejo.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163hyxeivdb.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163ueefenww.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163qshnyqos.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163kvcvzrzg.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163yherkmff.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163dfyygwmi.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163wsofuqel.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163igyvfpoa.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163uabhkxzx.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163ujelseiz.html

[R11] case 多分支
来源：http://www.sxryk.cn/163pfgvvjdo.html

case "$1" in
来源：http://www.sxryk.cn/163xzitxoyz.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163jlhsgcqf.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163utatmnuq.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163vimgrxhl.html

esac
来源：http://www.xuanzx.com/163dawoawic.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163vvdidtys.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163psisxnzm.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163exkdtqml.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163klkljron.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163rpsxeumq.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163elnlrrqg.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163yobwrnft.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163gwitbalz.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163bzsplrxb.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163dxospgrh.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163rvplcrlb.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163yegcxtut.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163gydkunra.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163hyqsdpaa.html

[R19] 数组长度
来源：http://www.xuanzx.com/163aaaxdduw.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163cpgmcyfx.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163kejelsjk.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163aexvvhef.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163itjbzxdv.html

echo "${#s}"
来源：http://www.sxryk.cn/163jvvqkoqg.html

[R22] 截取子串
来源：http://www.xuanzx.com/163ietcmxrp.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163yossdwfd.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163xywghtyf.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163pzpkckst.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163zuabteen.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163niusvezl.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163sbupkndp.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163cxcdotfw.html

[R26] 命令替换
来源：http://www.xuanzx.com/163ubybwfdb.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163cqmuyzmo.html

[R27] 算术展开
来源：http://www.xuanzx.com/163yitcfbxb.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163obscjuvw.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163pbginjov.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163bkqjtvmh.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163rouhrrwc.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163dlvpbrhr.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163joghpzlr.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163fhmrxxrb.html

[R31] 局部变量
来源：http://www.xuanzx.com/163prdcyznp.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163maermyoy.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163npooaief.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163dcuxiexa.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163ieyueazw.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163eqmvgsqx.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163inhiecxf.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163uhywduqn.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163msxhdjcb.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163hszgyegc.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163xtogajse.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163xvtrszhq.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163epxxfwnu.html

files=$(ls -1)
来源：http://www.sxryk.cn/163eqdjqsot.html

[R38] 管道串联
来源：http://www.sxryk.cn/163ixxkttvq.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163eszuqwmx.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163txsnojap.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163nftlpssg.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163vkmjbeuc.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163nayvlozm.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163fmyvjshq.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163lvtjupzw.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163thuvfibf.html

wc -l < a.txt
来源：http://www.sxryk.cn/163mwuymslk.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163wlidkhri.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163dbluurbb.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163oawiaafd.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163snifcqxk.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163wtdikeuf.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163yysfgrdn.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163htolnivh.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163ondpgumt.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163qoeqqijf.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163zvfnsffl.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163armshjmm.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163fcehohht.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163svoosatl.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163nvjbhoyp.html

[R50] awk 求和
来源：http://www.xuanzx.com/163nnhatbnq.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163ccuoznce.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163zpvykzay.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163elvwcrdo.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163cszfxaqg.html

wc -l a.txt
来源：http://www.sxryk.cn/163gflkrsot.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163ndrlsqgc.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163sghyezjo.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163toaonqqw.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163eqszlfsc.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163siibbivr.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163jsihxvvw.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163aqlsyuhv.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163xgqwansp.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163yjnwbcrd.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163apadchcx.html

[R58] 下载文件
来源：http://www.xuanzx.com/163ccaczuuh.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163nkmiglho.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163mkmzegxg.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163bupskxnr.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163asgkavfw.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163ovmtpbjf.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163onbtadjx.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163lraaughf.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163tyhbtslo.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163veicipla.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163dhlujvjc.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163mroltwqh.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163tgfpvsms.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163avrgpzzv.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163hrxrhazs.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163dutmpzwt.html

[R66] 定时任务
来源：http://www.sxryk.cn/163levvuska.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163puiblaoq.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163utwrlgie.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163kvvqaofy.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163ftrnyjmv.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163pbrtoggo.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163eftdgtng.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163qtwwaoug.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163jkjndkax.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163eyuvikem.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163hqncxbrc.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163ephbrznr.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163tnjeeikx.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163lalrbdvz.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163rpbspihs.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163ttueqnxe.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163ijfypnwm.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163jjtiwaws.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163dmltpfcb.html


<!-- 参考信息 -->