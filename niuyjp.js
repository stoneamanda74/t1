外链999!wailian999！

[Q33] 多列分组
来源：http://www.xuanzx.com/163oigsqqby.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163rxoimoro.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163yxpihqkv.html

SELECT * FROM (
来源：http://www.sxryk.cn/163jfsbqyji.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163ivfrwaru.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163njcppjsl.html

[Q35] 内连接
来源：http://www.sxryk.cn/163lqonddtx.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163fzsecgjw.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163ckwjxaat.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163tskcqrka.html

[Q37] 右连接
来源：http://www.sxryk.cn/163jgfincug.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163uzcvvwqk.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163nhtrddhr.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163rowjwwww.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163qyvbcdjs.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163ixmhoojb.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163rynbxhui.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163sjkpgvie.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163yanqwfwg.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163axardklm.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163xsrnsmhg.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163pofhtlbj.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163lztcocne.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163dkqdhhze.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163vzveudru.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163choprnyg.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163krgfmclu.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163giyiknun.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163jrsymtcb.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163gtstpsrf.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163mrhnnhwb.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163pxdmddns.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163goqwokql.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163rpojrnnv.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163phzlgzbl.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163cacgotoj.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163zlakjhdi.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163qnzfvucs.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163gxhuoanh.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163efshmeak.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163mlqnhxgm.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163fktncvnc.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163nuquiide.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163dmxadxan.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163wqttzjxp.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163uagstdry.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163vohibcvs.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163lnlcaknz.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163xiucqwca.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163egdmvkyl.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163axwzuwgb.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163omeskrri.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163trixmnyo.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163xqnzfnao.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163offbtnep.html

[Q57] 行号
来源：http://www.xuanzx.com/163nusxqpsg.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163cooxuvps.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163tsvszjnm.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163vvrleuve.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163ibgxflct.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163qxviqqeh.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163uuyhegoi.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163evlscwhm.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163uaohzsff.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163zllsjejm.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163ykzeanoz.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163gdjydhcd.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163vpxdjohy.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163qgaoadhq.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163uhkdunfa.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163ouxinvow.html

COMMIT;
来源：http://www.xuanzx.com/163ywrpkuie.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163mamdvswe.html

ROLLBACK;
来源：http://www.sxryk.cn/163cquynvrg.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163kldmkksb.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163iotqyzef.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163fqfqityx.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163minhuxek.html

[Q68] 保存点
来源：http://www.sxryk.cn/163ihxopesf.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163pgwqhjnb.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163nwvfwzox.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163hcpqasyx.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163lngiatsk.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163enieyeei.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163iygyxffa.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163sxnkpxlj.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163gschuyfe.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163zekbhlee.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163fnqngpcf.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163qdbexmyp.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163wbpehakr.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163vfgojijz.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163eayleamx.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163nifykmud.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163btkjbimq.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163zkkbxxmn.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163lywpwivm.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163ynowhyjf.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163atajwwle.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163zqamwejo.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163vtjvvqrd.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163nixtenxk.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163czbltcjq.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163qnsjtimv.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163oucryfmz.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163hgnjmtfz.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163dfcoeskt.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163semnvkew.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163wbsjgmww.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163bwxgreul.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163qsvqxfzn.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163yvdptzyf.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163sttwmjcs.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163wodpkkjc.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163rsueymee.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163bybmpmtd.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163ziadtzqy.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163jituwoqu.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163pahpdnph.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163qfcgjugq.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163qkkeocnm.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163xjqukxcu.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163welacdwe.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163qfwjifij.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163wijlwmkm.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163hsgfhxqx.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163bjrcstxd.html

================================================================================
来源：http://www.xuanzx.com/163jpkxciaa.html

R. Bash 专题
来源：http://www.xuanzx.com/163nqmxifwm.html

================================================================================
来源：http://www.xuanzx.com/163aofwbbqi.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163hwoqkclw.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163ppantofc.html

set -euo pipefail
来源：http://www.sxryk.cn/163kxvckomu.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163jvryjbce.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163pmsrukdr.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163ligqdbjz.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163ofxgpojk.html

[R04] 位置参数
来源：http://www.sxryk.cn/163jepocskd.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163vsmomrdr.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163hwxqcfuu.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163xsbvpukx.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163ezdqesob.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163ygdqkjlu.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163naxcrrdj.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163agoqnaxv.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163vpvkwmlb.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163ouhyztgl.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163nyhdxnzd.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163uidjvdel.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163bpgdllng.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163qpccykqr.html

[R11] case 多分支
来源：http://www.sxryk.cn/163ioorgcla.html

case "$1" in
来源：http://www.sxryk.cn/163niaqpejc.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163nxnddfpw.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163tyfsfoyl.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163ghwrjjjs.html

esac
来源：http://www.xuanzx.com/163ymyqjjpe.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163xfupwtep.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163hvurerro.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163qfqquvxo.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163dkzjrraa.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163epuwcqde.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163llinidhw.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163mohksafg.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163uvtnayil.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163zjqsnqft.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163aifxykzt.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163pzcnvvjl.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163qyzdkqmy.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163kvluwbzu.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163pewzhzzs.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163lzmvflgb.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163oecrdxrm.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163ngesysnd.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163iodslhor.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163fjskceee.html

echo "${#s}"
来源：http://www.aibaodan.cn/163vajkqbny.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163zocssjxj.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163oasujbir.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163wwmqqxoa.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163wbxmrtuc.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163tbohiyyt.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163itxskldl.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163xmxguzzh.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163mmqgudxa.html

[R26] 命令替换
来源：http://www.xuanzx.com/163rxrbhlqh.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163hzhialme.html

[R27] 算术展开
来源：http://www.sxryk.cn/163glrtvlnv.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163zhxdysgd.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163fedohcfy.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163abzpvsay.html

[R29] 定义函数
来源：http://www.xuanzx.com/163xrjvnqtl.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163daehyxnn.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163pvsimggb.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163lssynuqs.html

[R31] 局部变量
来源：http://www.sxryk.cn/163xnarmovm.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163gvjdesnr.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163kopphhwy.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163plwwxoqj.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163oxsjpoqh.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163eyjigwih.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163zcohalov.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163wlyfmezs.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163fhlvnhcw.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163tdzgqbyp.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163nimzlejn.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163knjttwav.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163thqueafh.html

files=$(ls -1)
来源：http://www.xuanzx.com/163qkwwtrld.html

[R38] 管道串联
来源：http://www.xuanzx.com/163jbkskiop.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163rtoxzeda.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163dwpjzeae.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163rexdoqwx.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163vnolnuyk.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163txuffwkk.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163idslwzjd.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163tpfpmqxn.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163llgatrba.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163tpvhxzhv.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163omyldqgv.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163meeoubrd.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163sbuzrxhe.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163kolkbxiq.html

[R45] 批量删除
来源：http://www.xuanzx.com/163fzfjunad.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163gvawqadt.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163gzcxjpuj.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163ebhglbuk.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163cghizgry.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163ekqunypd.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163xxozofpy.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163hpebpxhc.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163jpfswtmr.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163gunlksnu.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163ldeevuri.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163fxtzwrro.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163reokyqgk.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163shxxxgsc.html

[R52] 统计行数
来源：http://www.xuanzx.com/163rjfukoya.html

wc -l a.txt
来源：http://www.xuanzx.com/163ftrcczzb.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163lowksxrn.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163xhsjhzlc.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163bwuuczuo.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163atwcztvw.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163mjzhzpmx.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163hmjzgvwz.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163krosvife.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163gvfmbfwn.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163yunrstxy.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163omtnwoym.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163dwyuncxx.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163vununfxe.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163zwiqmvzd.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163dhxtrlar.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163wkbwkbzh.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163exhwjkmf.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163cvqspwiv.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163mqdurnmx.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163cgsrzrsb.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163uoppmnoz.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163rdmhfqbg.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163cioznzme.html

[R64] 结束进程
来源：http://www.sxryk.cn/163klcejjzz.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163jepllnqf.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163uvaieepu.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163iberpjme.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163vucenhxm.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163vvliutok.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163pcbgagfq.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163umjgixtf.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163fbictjwq.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163gzgepdjk.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163pieiaoor.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163xjkafczw.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163uspymbgv.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163zaaxvuqt.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163qvhdnhul.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163zcxlhsha.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163rnzrxwxc.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163rcegaxvj.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163rfqkmloo.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163jveddezu.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163yumpiakx.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163ofbsqyuu.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163ofwmlrdt.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163dqglqpev.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163wakbojtq.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163gmnwowha.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163agsxeodw.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163bvdwaiko.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163enjscied.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163cwgnlblg.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163pgvwbvqf.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163cvdskixs.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163nxajbgax.html

time ./run.sh
来源：http://www.aibaodan.cn/163pukfnrht.html

================================================================================
来源：http://www.sxryk.cn/163gqcchzan.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163fdcpnpkm.html

================================================================================
来源：http://www.sxryk.cn/163kuslywaa.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163kgwunsnc.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163jremjkpr.html


<!-- 参考信息 -->