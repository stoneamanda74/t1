外链999!wailian999！

[Q36] 左连接
来源：http://www.aibaodan.cn/163kcexvffj.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163dfkntbwx.html

[Q37] 右连接
来源：http://www.sxryk.cn/163wptfovwo.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163houwoemc.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163pdepcaqg.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163tfvgtaec.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163xqhujigi.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163scbarkoc.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163oexccmwn.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163tlxbbxig.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163hvqmzqqi.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163kswngrod.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163nenralyw.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163exxkevku.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163ecixyuhi.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163fdeoxftj.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163ajzayfub.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163brnzekze.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163pwydjxmu.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163srocigfh.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163mavsstah.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163cuiriokz.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163kusxwnvr.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163sstgqygm.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163upewhzpq.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163vzaavsvd.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163zixqrjpf.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163avuuzdxu.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163sdyzjpib.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163ksgawcvx.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163yfjdzssy.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163pnmrqqxg.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163hmxuizwf.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163mpnwarhy.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163itgrhboa.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163fzqzlxph.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163xigobhap.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163exnhdppc.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163dcjzooqi.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163izclphlp.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163mswjzgcb.html

[Q54] 清空表
来源：http://www.sxryk.cn/163xxlzfhku.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163pfdmdvup.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163tcwvwvzu.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163lzhtgfch.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163mjqinflt.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163vtxbqzxq.html

[Q57] 行号
来源：http://www.xuanzx.com/163iyosdldl.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163dntzotnj.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163zlnrriaa.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163iqmjslqk.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163cbzjvvsu.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163mltxuwna.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163odbzuprl.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163fipshgpr.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163zprynqmr.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163ragvegkr.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163gwfanbjp.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163oqfowjua.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163vbzykzwd.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163hbtxhbbl.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163sdaaoznw.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163igpfzzrd.html

COMMIT;
来源：http://www.aibaodan.cn/163uvzfjqvc.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163bmfcouwr.html

ROLLBACK;
来源：http://www.xuanzx.com/163ossdyqjw.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163hhqeirvs.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163ubxsfgkv.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163iekuholu.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163mwwdghlt.html

[Q68] 保存点
来源：http://www.xuanzx.com/163erlzbjeh.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163iypevfym.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163pbfwijru.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163kvgbpxmz.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163hqxaqyfl.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163zayfzhod.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163vlylkcmw.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163puyknhjg.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163wtabpenv.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163jnekpgun.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163wwdvwlkk.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163wufynzyx.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163rihqzarp.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163rbzispdv.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163tnqzxrhd.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163xojefnzt.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163avssbfch.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163sgtfhiar.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163vdxhegml.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163arstbgqr.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163svlqvgaj.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163texilpkv.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163dzthcqhm.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163ptvuqakr.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163fwgmgstx.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163ckjtxgco.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163pbzjyhsa.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163gisvoihg.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163mexeujoy.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163ulvhhsef.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163zlkblnqt.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163hbpvezgg.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163hngnkiuj.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163nxnvgthe.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163wbapvsil.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163fzbiqqkq.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163ctwjliah.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163wiyhnlxc.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163gqfkxytm.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163nuvjrfdr.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163sliatxcd.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163scfayvgw.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163nyjzwlqa.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163qaiokvse.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163ywkawndt.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163ehuwaoki.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163afpktyqx.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163fkzxxate.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163fxwtpbbe.html

================================================================================
来源：http://www.sxryk.cn/163iduegyuw.html

R. Bash 专题
来源：http://www.sxryk.cn/163wxxuhvjc.html

================================================================================
来源：http://www.sxryk.cn/163gejtapau.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163jsvcvzaf.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163hxwvqozr.html

set -euo pipefail
来源：http://www.aibaodan.cn/163gefpouwx.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163gxnecysk.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163yhdymvln.html

[R03] 只读变量
来源：http://www.xuanzx.com/163nthakdqr.html

readonly PI=3.14
来源：http://www.sxryk.cn/163pdbghpez.html

[R04] 位置参数
来源：http://www.xuanzx.com/163mjcspeob.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163rxircjrq.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163hlegfeps.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163gxheeoqu.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163vjbmbntd.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163cpnajypz.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163oxprayhg.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163qjyqrudr.html

[R08] 数值比较
来源：http://www.sxryk.cn/163xyezyplz.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163eyhxgklr.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163sjtqoltl.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163hwznbmcj.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163plmguuyq.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163hdkinead.html

[R11] case 多分支
来源：http://www.sxryk.cn/163wkjrothe.html

case "$1" in
来源：http://www.sxryk.cn/163bkjakbmi.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163ifcirbxt.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163lhphfpyy.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163ldlhgwiy.html

esac
来源：http://www.sxryk.cn/163hckoalef.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163vpllgugc.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163eporgrse.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163wmlpfqwd.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163jubctvjk.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163lolqjbyx.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163inejlgtd.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163yqanqlgf.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163jkcdwdtp.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163rrswpxit.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163kkcrapzd.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163uxpixizs.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163auunfagw.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163qvpbgofs.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163tecgvria.html

[R19] 数组长度
来源：http://www.sxryk.cn/163jwkesgtm.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163wfoxrxfu.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163pshiasei.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163kjleurac.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163hqyypjro.html

echo "${#s}"
来源：http://www.xuanzx.com/163xiqihhey.html

[R22] 截取子串
来源：http://www.sxryk.cn/163ijiftlhw.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163mrofncru.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163okyckooh.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163eedlbxlm.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163hevzuppa.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163oxlblfcl.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163hqwicony.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163symgbjvj.html

[R26] 命令替换
来源：http://www.xuanzx.com/163llppoqdb.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163qxdqffti.html

[R27] 算术展开
来源：http://www.sxryk.cn/163qtxdachc.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163hvaripuz.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163qmeycpmv.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163fjqlrcpo.html

[R29] 定义函数
来源：http://www.xuanzx.com/163upjejivo.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163hdmngeks.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163atjhrtaj.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163eaxcpupf.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163gzdkafyh.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163fltqfjui.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163onnxcmod.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163ananzrcg.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163fltxoqhy.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163xjcuiysz.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163yenjuvdp.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163pvazpmln.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163umodetgj.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163lqeoznlj.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163dfhqepys.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163omrfdmku.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163wjlaswhe.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163dlhsrdoo.html

[R38] 管道串联
来源：http://www.sxryk.cn/163fidotvpd.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163lkkfjgnm.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163xrcrfadd.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163wgifutfe.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163zlrludxs.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163lmubssvv.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163nmgokwcq.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163pzvfajoa.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163pzxfaztq.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163msivungg.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163bpptibhi.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163ucnovyfe.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163bvrlyrix.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163jugzmldo.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163zvljmpll.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163kimwxkka.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163tcuixexh.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163eflienzo.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163wnoayiwr.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163ijkmvggj.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163bnjqjduu.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163iizssztu.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163ehgaanqn.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163vhdqgtsg.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163vwlecebe.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163vnrnjpit.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163juuvmxlm.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163xypjxqnh.html

[R52] 统计行数
来源：http://www.sxryk.cn/163mqatfgdn.html

wc -l a.txt
来源：http://www.xuanzx.com/163uwvepefl.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163logncpcn.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163leqxfxba.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163lwclxuld.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163ffvhzdfp.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163fbuslnwv.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163oarawqod.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163uvkfhcvw.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163fjecgmec.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163qdvnzxlm.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163vxbwcmnj.html

[R58] 下载文件
来源：http://www.xuanzx.com/163tdzidgku.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163mflturqa.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163asaqlfrz.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163oamagksu.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163avkzedwa.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163yogumtzo.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163jrtzgnxa.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163efukyonh.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163cgscftfn.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163tlgneqwa.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163bdqjygmr.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163itausbqz.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163smhdsalp.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163fbffhipy.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163hlhfgtgp.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163phbilhkc.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163mpotxcaq.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163jaovvbyi.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163yvshphhc.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163kqwiurjb.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163gayfsxux.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163sgrcxbef.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163yvepjsit.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163yhgezwse.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163gqemlmyn.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163bemrhxda.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163ucuwjxxt.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163evbqiqtu.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163dlamklkb.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163otvristg.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163xpeprplq.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163hrwpsiak.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163swkgcumy.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163hcutwpzz.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163gbrayljr.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163pccdvoey.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163lhuslusx.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163qjeztrbq.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163xiaarbqx.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163qytrtode.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163ibpxbnpj.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163lmsdzrqj.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163xgzxgkgt.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163uyjtpprg.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163akdbfsnb.html

time ./run.sh
来源：http://www.aibaodan.cn/163dewfpqwj.html

================================================================================
来源：http://www.sxryk.cn/163laofrpal.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163dacuigsi.html

================================================================================
来源：http://www.aibaodan.cn/163ywnzpbxb.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163ntgrwuof.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163hzeyzwir.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163ltyzexrp.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163nojtbcrk.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163oifwtrkl.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163yeosypmw.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163bkdwqbkc.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163guwvajjz.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163qaccqguc.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163iahqdppo.html


<!-- 参考信息 -->