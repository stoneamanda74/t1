外链999!wailian999！

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163thuiundt.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163kqoxqjcx.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163vjfwochi.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163plhimtlr.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163aqzgrksr.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163tywgslyj.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163uaynyfzp.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163jtkuestn.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163bolpeurv.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163jqarldcz.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163zgozieca.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163heebarey.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163dxdbgahi.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163wwmpdulz.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163mtkiipsa.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163pagrrnws.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163pjnqmqlp.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163uhaayjyn.html

[Q35] 内连接
来源：http://www.xuanzx.com/163vrpxvgyz.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163nnwakalj.html

[Q36] 左连接
来源：http://www.sxryk.cn/163avtrbfhp.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163vvfxwvnx.html

[Q37] 右连接
来源：http://www.sxryk.cn/163ecfxxmay.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163tokctygc.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163hutxjmrx.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163gzyxsvws.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163jdvdiltq.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163pksdcbfb.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163irofsvih.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163pqpekexr.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163xdxiqvos.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163hjqfbkel.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163hojfgpvt.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163ydtvwvag.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163xqlsmzol.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163cvnmmumm.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163icsheehs.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163nuzdnxde.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163mpcycsbs.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163orbtuzyz.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163wdwjvddh.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163pjrpapsl.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163fwszxshj.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163nxxwezuw.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163gtsopgge.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163jtvhaccy.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163wprezbba.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163rddqvsas.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163rttmyncp.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163uedibymd.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163rcbaihvx.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163calotnyl.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163jfxsgbbd.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163usukxfuc.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163xycwwnts.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163mbbcwcnf.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163yngzjlfe.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163cisrqnqj.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163tfzazxpz.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163idswnzxi.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163gugydhyi.html

[Q54] 清空表
来源：http://www.xuanzx.com/163ywtgvqxy.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163vjeehhfn.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163wltuzxfy.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163uwyxhaia.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163ubgawlig.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163kkwuqbim.html

[Q57] 行号
来源：http://www.aibaodan.cn/163nblmpmix.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163tpelrlfm.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163ngitodnl.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163jikahpyp.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163vsrhuoel.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163pudsspmn.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163gpljqsvu.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163rtbgizei.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163bhjwhzhk.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163gzfysaeb.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163xapcclzy.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163rayravjz.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163fowpxjdm.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163txzkdsvu.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163wmweuzlp.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163ivhblbog.html

COMMIT;
来源：http://www.xuanzx.com/163mvpyhnid.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163erhfjswn.html

ROLLBACK;
来源：http://www.aibaodan.cn/163jcztxlvj.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163zymikpwa.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163xsneksdx.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163qlsjktpi.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163kjmtgjzv.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163bvcklduh.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163vxclewhj.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163iraluvzw.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163afvvsadn.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163ftsdbktl.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163glwaawwd.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163kmzgcovd.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163yqabwivm.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163eijguzai.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163atmnolxb.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163khnnwpgv.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163conjfvnh.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163oiejgwrf.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163gbohpmei.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163vegsdmic.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163cogwmpxb.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163jdoozwsx.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163uzkugpyd.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163qosgoeal.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163bicsudsl.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163drlhdcum.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163xrvsohso.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163hvnvkhiv.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163sjcziois.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163mnqkhjpa.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163dxqulolg.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163gptvdsvw.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163fghtqtuy.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163zanggpqf.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163brpmxmek.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163ybkwocdm.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163fsmzdlnq.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163dupxxefk.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163cnesevas.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163nixnnekb.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163xesrqpiu.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163lriyczxo.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163epyslhaj.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163ubhwlnqk.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163idacdosu.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163htfdtjzl.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163lagfrjwp.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163hjvjnzwj.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163lbuwlcdn.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163rattfenx.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163fhqbjacw.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163fbpqkjtq.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163ovujoixt.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163hxuizhph.html

================================================================================
来源：http://www.sxryk.cn/163vcfrpmgr.html

R. Bash 专题
来源：http://www.aibaodan.cn/163gfmuzpuy.html

================================================================================
来源：http://www.sxryk.cn/163vukyfflu.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163khjdccrm.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163wzfxfvap.html

set -euo pipefail
来源：http://www.sxryk.cn/163pbrrsxvs.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163bxatesiy.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163teoscwhz.html

[R03] 只读变量
来源：http://www.xuanzx.com/163adqfvmal.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163xcdpmrhq.html

[R04] 位置参数
来源：http://www.sxryk.cn/163dmilrbbp.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163fddcchyn.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163zcganaoo.html

name="${1:-default}"
来源：http://www.xuanzx.com/163tkkwqibn.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163zprxuexd.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163myzkxlmm.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163gicbyjyk.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163lcvehgzq.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163sulaywwz.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163crjsjcaz.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163ckyajjxo.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163mnmuqkdj.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163wkyeepyy.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163fqikwjzj.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163ymtozxgy.html

case "$1" in
来源：http://www.sxryk.cn/163nrpslidg.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163jqdlfoyj.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163nrmdvihz.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163erbuwgyo.html

esac
来源：http://www.xuanzx.com/163ikyheevh.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163xignklpm.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163smknvsds.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163sewdjhin.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163kmvadesv.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163zrxjiyqf.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163evjgtlsa.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163hazshweo.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163rogdhcyo.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163frghrgcl.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163ipswocnv.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163eubanrpw.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163gzabilca.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163rgaeplie.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163xponbsjr.html

[R19] 数组长度
来源：http://www.sxryk.cn/163voygerhv.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163zjxkvdco.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163wtszprjz.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163kyyzdezs.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163xnpcgskc.html

echo "${#s}"
来源：http://www.aibaodan.cn/163lewdpwkj.html

[R22] 截取子串
来源：http://www.xuanzx.com/163tskqptpd.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163xrszvqry.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163awcytudw.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163jbgrrvyx.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163akahloks.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163zdpsymjq.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163qwgsfzmf.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163srzbsmti.html

[R26] 命令替换
来源：http://www.sxryk.cn/163povxnede.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163lpefibwb.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163tbkbcfij.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163vxpqhuwt.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163laodkzwg.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163xqphosho.html

[R29] 定义函数
来源：http://www.sxryk.cn/163skfnposx.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163ciirnzpd.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163tfetarit.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163lpuvgdrw.html

[R31] 局部变量
来源：http://www.sxryk.cn/163pzaicckt.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163xzyhgfmy.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163aiyjklke.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163jqdoubgn.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163zerghbua.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163jtlbabve.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163fidtivic.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163rprdioos.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163lqoqkriq.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163qtbdswtg.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163tceggekq.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163gvzehjnb.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163frvncnug.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163ycmfjgwb.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163zxxixdsc.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163xzmkrtlk.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163rrbousrh.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163abqueqqf.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163zdjincuk.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163inakpwhe.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163cgwxicav.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163sntxcsbq.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163buqzorvl.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163nrnhptbo.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163obbggjqw.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163dswvatqx.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163qtmnxcik.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163crafcwmi.html

[R45] 批量删除
来源：http://www.sxryk.cn/163apgmvvue.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163qimpldnp.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163wftjggfm.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163lmffrzcp.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163imlmucxh.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163pgjfcuwk.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163fcizebcw.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163zfiquyqz.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163nsrhoaoc.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163hoigqrbe.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163rtqgvdyd.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163levnqsbj.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163rornmrmr.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163qffgqamb.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163dbwlmpjx.html

wc -l a.txt
来源：http://www.xuanzx.com/163bmijvcjf.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163zpeqfpnb.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163pbehkxdz.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163fhmxnety.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163uuiwosue.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163dpdzdrua.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163upyaxhcb.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163ygfdsfsk.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163oepqcyph.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163fpuvwmsc.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163swkhyjxc.html

[R58] 下载文件
来源：http://www.xuanzx.com/163munbzorv.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163gwrsilgg.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163kgxzggdq.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163npmweeft.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163jcuvanun.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163thvozfza.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163oxjsamwp.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163mgxczbqe.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163sujhewvn.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163odmjsumj.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163aabzhizw.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163zzasinxb.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163vhzefblo.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163tcfpneue.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163ctjypofr.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163nuheymsu.html

[R66] 定时任务
来源：http://www.sxryk.cn/163kfwliqba.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163lacqypkq.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163zspnykgy.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163fihefqof.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163ezrojhki.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163mvqsqapw.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163xhyqhrsp.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163iyyxtdke.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163ijbhfnux.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163cnadhzcp.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163iuiosuai.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163jvtxuksw.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163xuoartvn.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163qlczgauf.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163zcunnseu.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163xekloire.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163dbwbmcby.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163qwqwreri.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163utojdrfg.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163minupqoe.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163nspacfbk.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163eckvcxqb.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163ljdyxvch.html


<!-- 参考信息 -->