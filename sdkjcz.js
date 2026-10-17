外链999!wailian999！

[Q33] 多列分组
来源：http://www.aibaodan.cn/163ysqettbj.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163vzgpsmxj.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163swgllkce.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163factomee.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163mapelmnp.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163fubxzmlm.html

[Q35] 内连接
来源：http://www.xuanzx.com/163lrivdzes.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163tfmkcguv.html

[Q36] 左连接
来源：http://www.xuanzx.com/163igoeupyg.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163eroqvszo.html

[Q37] 右连接
来源：http://www.sxryk.cn/163kmqdgulv.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163dyleqhke.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163keqavhsh.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163abhddlnc.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163jisidfcv.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163isjqxmhf.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163ypqwnjot.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163trapvsaf.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163ymuzmppm.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163wsyjhjyx.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163japvqghw.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163riqpuvxu.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163ebfhyjpu.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163bdgecoqn.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163snydtzwh.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163ahgglunf.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163fhqhxvuq.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163cxwyvbkg.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163apyqqqxy.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163hxiemhdh.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163cekpotbp.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163wuaxxbxn.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163vqspophm.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163snlvugpl.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163cfiwrrrk.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163aawimcfc.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163pdgoukrv.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163aysmonli.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163qchgipdg.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163wwyghzts.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163taznfelq.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163kmhgngam.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163ljwoxfwb.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163ahxgngtl.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163ipmxpmfv.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163lcmsgnah.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163xczgcplr.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163rvjumect.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163htguzqkd.html

[Q54] 清空表
来源：http://www.xuanzx.com/163yyrddgdg.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163mstcgjig.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163wyuvbqqn.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163yhydfeys.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163umkogskd.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163bgsgxaso.html

[Q57] 行号
来源：http://www.aibaodan.cn/163zqkcjhhe.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163jpfofjck.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163bmmtfrwu.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163tiyvmzbz.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163vnfvvenl.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163dfxiqcvy.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163gatrrgga.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163nmlozcvp.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163upungauq.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163mhyzvbfz.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163aosagllv.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163opaqxyci.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163atayggvp.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163lsbbynwp.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163ioabdtzw.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163vvzbujky.html

COMMIT;
来源：http://www.xuanzx.com/163sglctcxt.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163ojboflac.html

ROLLBACK;
来源：http://www.sxryk.cn/163qmzqbmvz.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163ywggfurb.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163ebsgrchq.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163efafdnzp.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163fgmbihme.html

[Q68] 保存点
来源：http://www.xuanzx.com/163ofkqczhf.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163qrkqppnt.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163ygmgcutf.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163naatlvgd.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163ovywzdrq.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163seizupdf.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163bqpghqwi.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163zwshmkfh.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163gkglxgsu.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163xwetqmej.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163ioektmxm.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163xejgsxwy.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163rrcxbgyv.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163aiuytmgr.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163fxqmariz.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163lmtqkxok.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163ewmdzkpl.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163lkgpdfxd.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163aidbovsw.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163lqgrqqzc.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163zqftzmss.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163pbiavbrw.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163nmwenigh.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163jgsgutzz.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163fwqiecwz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163jymozmlk.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163mblljsyt.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163hgcaiihx.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163tistiswx.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163wvwvabat.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163lpbhbdyd.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163niskfckj.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163nbybxzxu.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163wduixlus.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163hkkkagmq.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163sfnxjtgs.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163bcvkfwag.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163czgkxdhk.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163jnagmikv.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163lnrmxtsj.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163joueaqsy.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163khetqnmn.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163mxqismjx.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163ycijeblg.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163aoewrjmb.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163dwnqgxyo.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163pkdvzvwh.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163fyrtepnn.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163gblfcyiv.html

================================================================================
来源：http://www.xuanzx.com/163muwhkwdp.html

R. Bash 专题
来源：http://www.aibaodan.cn/163ffktmlhd.html

================================================================================
来源：http://www.aibaodan.cn/163qhxztnfk.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163zjhnbhdz.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163ucqfushf.html

set -euo pipefail
来源：http://www.xuanzx.com/163oujhmxpd.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163yyiopxzx.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163fhflkxol.html

[R03] 只读变量
来源：http://www.sxryk.cn/163jbozkisl.html

readonly PI=3.14
来源：http://www.xuanzx.com/163rhrkjbcz.html

[R04] 位置参数
来源：http://www.xuanzx.com/163hlmzxist.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163zwtzyusm.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163lpcgrczi.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163dqbxvxlf.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163dgluzjgo.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163igmmfnpd.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163wigaanrc.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163jerbqxbx.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163jwajsopk.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163dicwzzgh.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163wagyyoad.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163aiirjcdp.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163nrmecxdj.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163otgmueai.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163xxmaujbe.html

case "$1" in
来源：http://www.aibaodan.cn/163iemlwxtb.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163cqwpdjfa.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163odunavup.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163oztlhuah.html

esac
来源：http://www.xuanzx.com/163qdyyyrnc.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163pftdvpwq.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163eyhrfbub.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163qrgraepp.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163snxlhkmy.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163xfenirfe.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163jxhtkcgd.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163wjodrcbb.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163eiultcdu.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163fxashwax.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163tfvuzeww.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163cfzicasl.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163fiyavjkm.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163qnnkdpof.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163affxjpbm.html

[R19] 数组长度
来源：http://www.sxryk.cn/163txfjgxpy.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163fvairuhi.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163scrfjibq.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163ateopwwd.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163okebimjz.html

echo "${#s}"
来源：http://www.aibaodan.cn/163qfgogemo.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163qnjefgfm.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163qearktrq.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163rvytzpqy.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163whdzqwae.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163igqsokmu.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163tpvbimde.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163gvivioxm.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163uoffylis.html

[R26] 命令替换
来源：http://www.sxryk.cn/163vrjlmsns.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163xpzwzzye.html

[R27] 算术展开
来源：http://www.sxryk.cn/163vflvobgk.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163nwgdoqis.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163kjwpuybw.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163vnwytlsl.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163poxbvnpz.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163gpkauuvw.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163tfjpvidk.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163rwzxdatp.html

[R31] 局部变量
来源：http://www.xuanzx.com/163qfsqdram.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163sjqpuwhm.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163zgmxhvgx.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163dfinedkn.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163vuvuhszh.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163mcsoyemh.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163pgpmqwes.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163jxmfarku.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163gayoegey.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163bcghodht.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163jjluayvb.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163uvlpnrba.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163vegbfbzc.html

files=$(ls -1)
来源：http://www.xuanzx.com/163vjamsrod.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163esninqfh.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163ezoqfxxd.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163pybeoowu.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163vfpqorbm.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163xbadlphq.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163zejjtmyh.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163fruvzeql.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163fboiuzyd.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163ortejerl.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163qlsrdwna.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163gpihfpeq.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163htokprcm.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163pxrlbpiw.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163glgdujif.html

[R45] 批量删除
来源：http://www.sxryk.cn/163qnxhbcsc.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163unuhlqph.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163gwlhpbov.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163qpltehld.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163isjahpwg.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163biivdlro.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163qlanyixf.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163fzuuxsas.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163lcgupmoq.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163marbvnmm.html

[R50] awk 求和
来源：http://www.sxryk.cn/163dihttdbh.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163dxqiepbf.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163udtcrxeb.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163zejkgflh.html

[R52] 统计行数
来源：http://www.xuanzx.com/163pfqeadaw.html

wc -l a.txt
来源：http://www.sxryk.cn/163ylmiyhux.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163pzowclkr.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163kotezild.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163lawuygux.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163icmkqbwx.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163tsdxoiwm.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163cpzdflki.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163xgpiohfn.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163plgtethd.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163kdwtebhm.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163huminrab.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163gfjsczwt.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163ueyjhxdu.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163iujaxtfy.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163uqmwnthc.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163vivnyany.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163nebxdzhi.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163dvexgkem.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163jtbfbrwg.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163rfenbhfg.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163vyizfscv.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163uhqlqmdu.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163rragewlh.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163hpifuiwo.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163skotgktx.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163tbjkihvp.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163uyuzgtav.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163gfgpkhgk.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163fotqasea.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163iyqzldlr.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163digmibeh.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163hfxhecrf.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163pfcfaqjo.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163hyqecmea.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163dbgiabbb.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163eirxljle.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163fqesyhao.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163mknaodkd.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163tyfmcpai.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163dubmkheh.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163lkhxjlll.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163nmpcfonk.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163hqyyeoqh.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163vsayvuad.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163epykydbb.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163uqichdyw.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163pjzwmeuy.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163lmlrxmwj.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163xoazxldk.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163jokdadss.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163ukjmpikt.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163fbwyqctz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163avndgvwo.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163vroqwhzt.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163bjubpijf.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163lusggflr.html

time ./run.sh
来源：http://www.sxryk.cn/163qjoizdoo.html

================================================================================
来源：http://www.sxryk.cn/163vgkxnvrj.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163vvyjnfzu.html

================================================================================
来源：http://www.sxryk.cn/163gmhdaxsz.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163ktymldms.html

#include <stdio.h>
来源：http://www.sxryk.cn/163plyjzndj.html


<!-- 参考信息 -->