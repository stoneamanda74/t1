外链999!wailian999！

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163nckmxhiv.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163jblqjdwg.html

[Q35] 内连接
来源：http://www.sxryk.cn/163tpbsmsvk.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163liidrwlg.html

[Q36] 左连接
来源：http://www.sxryk.cn/163qudjpjno.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163sdwpadqg.html

[Q37] 右连接
来源：http://www.xuanzx.com/163csqgbzis.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163vvelbntd.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163uehotyct.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163eukzrnqt.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163bugtrpxd.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163obpxkufx.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163bxyhanme.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163uanstjig.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163zdseiydx.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163cdysbaii.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163pbhsuhsy.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163sygxkatj.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163stpxntme.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163rdbdanes.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163vxvqdyjw.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163gjyozqmf.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163pouxdpto.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163mofraxtj.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163nsgnfqft.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163fzyqictu.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163pscyvjuv.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163dqiazkga.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163rrurggzk.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163herwmtcq.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163iddkciqh.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163gzwkzaia.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163rjoyzjtq.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163sndjodhu.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163blthgjjj.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163kfzhgbli.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163lysbtcab.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163whafyysr.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163tofwruuz.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163jfaschnw.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163mzqjazhn.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163olvoemgp.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163xgvarjsb.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163xhdcswhd.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163rnftyapb.html

[Q54] 清空表
来源：http://www.xuanzx.com/163cofmyjbn.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163rzbltrnm.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163xkgipngi.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163ccjjsgrj.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163cwskqtji.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163aomyjocd.html

[Q57] 行号
来源：http://www.aibaodan.cn/163egqviwvn.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163wqlixyql.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163orwcbmnj.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163hufmlwct.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163ezhoopsh.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163isechmwo.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163yivbvqck.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163sknuejlz.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163hgoeamnh.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163jcwvaoii.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163hqqqkato.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163pdsmiciv.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ontekggw.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163vuftpuph.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163rjnvscgp.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163quigfert.html

COMMIT;
来源：http://www.xuanzx.com/163bdidtzuu.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163sydnsaja.html

ROLLBACK;
来源：http://www.aibaodan.cn/163hkliiskf.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163vzknmzxe.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163mkciqfys.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163kplrbtxp.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163eqieaone.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163ecizlnxb.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163ehkcpgfo.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163ntondbea.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163ofztarqq.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163lqhzatdu.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163qywbqwei.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163qbmglxvw.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163mesjftui.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163decrhqll.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163ygecpypw.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163dweioibq.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163yrkeonco.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163pkcbukop.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163btnotqho.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163kvclhpmk.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163ynqrnpbp.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163oacxwbdk.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163ybjjxvws.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163ndqmlvcz.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163bmixjnzo.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163lhvorsjd.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163xbtwcieo.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163yttdrcpf.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163pxqdbgum.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163zgarcdjb.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163rvyskchr.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163rfjlofhc.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163bbdasxbw.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163jqcpwqwi.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163jpvebmjg.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163gaxymrbo.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163ioeoqpvb.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163nrsyyhwh.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163ijofakjg.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163czcalrwv.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163nsgdghpm.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163askbnoar.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163dbijimxu.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163mjxfeuyw.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163nmfzgrfh.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163ttyfusza.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163frusxfeu.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163ekhtfcxs.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163giiznkpk.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163oavakraa.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163ynmogqhw.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163oqgzqulr.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163svjpztbh.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163oowsjvko.html

================================================================================
来源：http://www.xuanzx.com/163lmgebhvn.html

R. Bash 专题
来源：http://www.xuanzx.com/163qdrjrywo.html

================================================================================
来源：http://www.sxryk.cn/163awpepwuc.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163lafkrvhh.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163daqjxxeb.html

set -euo pipefail
来源：http://www.sxryk.cn/163gdkweeoe.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163cekeyqzh.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163dnmhzdab.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163yirgdhsl.html

readonly PI=3.14
来源：http://www.xuanzx.com/163jrqenalp.html

[R04] 位置参数
来源：http://www.sxryk.cn/163iwcaehdz.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163qyiueglr.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163iyzpclnd.html

name="${1:-default}"
来源：http://www.sxryk.cn/163fvepwbyr.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163zanhoykw.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163vgekbvwy.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163pnbtvqnm.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163rlphwrpj.html

[R08] 数值比较
来源：http://www.xuanzx.com/163gknqyngv.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163xpqrbhdf.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163qrnldsxb.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163fharyhth.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163hfxwnbyp.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163pbvnzajd.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163hiupzmru.html

case "$1" in
来源：http://www.sxryk.cn/163ymwbdvzl.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163iwrhcnzf.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163evgazfle.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163hhlbijdd.html

esac
来源：http://www.xuanzx.com/163joiyqfke.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163unphfoph.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163fuogkzme.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163hoaxsoez.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163txumhvzg.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163nmnfmrek.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163khfefuqf.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163qnnwsjve.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163shpivnbs.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163dzsaplfq.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163kfsdhtgd.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163ztcjohxz.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163uebctxuq.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163augznlkf.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163lhwpaiip.html

[R19] 数组长度
来源：http://www.xuanzx.com/163kzwsfael.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163upyvotvx.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163lxzlwwfw.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163abwahafd.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163ehcbzncg.html

echo "${#s}"
来源：http://www.aibaodan.cn/163pbopjkyx.html

[R22] 截取子串
来源：http://www.sxryk.cn/163lvtujenq.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163ymnspwaa.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163wfytmchn.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163jsyqtuym.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163ylfsdkqj.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163jytsdxgj.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163xaoipshk.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163ykkkhypo.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163gqiftwht.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163acpxdfer.html

[R27] 算术展开
来源：http://www.sxryk.cn/163ycydcdiz.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163gxbexkqq.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163ivpggdrm.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163vwsvezhj.html

[R29] 定义函数
来源：http://www.xuanzx.com/163gqivhrhe.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163wvvhwdni.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163fayxykhf.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163kkmpxomy.html

[R31] 局部变量
来源：http://www.sxryk.cn/163thyzrszg.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163cxtnvvmx.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163fngoeqgd.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163gtzwyzqd.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163eklhrpye.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163optusqjq.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163qfffzkaj.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163lveosnpi.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163lkuetpmt.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163pfvhxfjz.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163zmrbljxt.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163ugaudkmc.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163loeruhgc.html

files=$(ls -1)
来源：http://www.xuanzx.com/163fchkekrj.html

[R38] 管道串联
来源：http://www.xuanzx.com/163utcdzpjp.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163lrtfnvsf.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163vhroemex.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163xumaiugr.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163szoblykw.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163rmfbgwlp.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163ilzpvuri.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163izofzvvd.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163miqpqqxc.html

wc -l < a.txt
来源：http://www.sxryk.cn/163ucjessfw.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163yadbveos.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163dvlahmfx.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163yitdjlde.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163fswdodns.html

[R45] 批量删除
来源：http://www.sxryk.cn/163mkrctika.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163dlkrugfw.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163ybdevuxh.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163qtsqlowd.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163jeavvyyr.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163glmhqddx.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163blkrwqdf.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163yhotqzas.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163angnlcls.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163obbzwmjx.html

[R50] awk 求和
来源：http://www.xuanzx.com/163xskdkxiw.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163fjanmegs.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163yfbcqhhf.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163eymzzvau.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163pmpdmnrr.html

wc -l a.txt
来源：http://www.aibaodan.cn/163fevvnakt.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163hnsqgdor.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163oobwqpzm.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163xqfmgulz.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163bqgamciy.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163gjybpozw.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163hmjapujj.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163bvyrqvdt.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163spuoovwy.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163vzeyzwla.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163ussqjavy.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163eurvljwh.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163kicsjsuv.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163wusiocot.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163kqivrxvf.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163bluzjfru.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163rpnaoama.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163jyckbonn.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163ksuxmpba.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163ultrvues.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163qtukgdkg.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163yrxzlvrp.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163nwjiuojl.html

[R64] 结束进程
来源：http://www.sxryk.cn/163cmnufrpz.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163kkgdtieh.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163xpnxpbgh.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163jwbjwbyk.html

[R66] 定时任务
来源：http://www.xuanzx.com/163ycualmjg.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163ydwsscng.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163yaopvwiy.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163wgkhwjlu.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163sfzergdg.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163hvmixuvj.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163twugdcat.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163cplkycls.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163uybdpaym.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163qwigqwqr.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163odgdrdef.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163wrroeznt.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163cafqowsh.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163bfvaifsq.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163vxsmgoxf.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163hhxhrvyq.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163wogahgpo.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163cmatkwld.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163qaowheck.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163xfhpqhrc.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163ltqlbtza.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163jfomfkgc.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163dzmujqju.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163ysjjdmcm.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163hpvsndvt.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163wmvakmfi.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163otrphtnx.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163lndmvjfz.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163fwsoxyst.html

time ./run.sh
来源：http://www.aibaodan.cn/163uwcibwbr.html

================================================================================
来源：http://www.xuanzx.com/163bqfmaexy.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163guepkpth.html

================================================================================
来源：http://www.aibaodan.cn/163rjaynwhd.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163okqgzkmo.html

#include <stdio.h>
来源：http://www.xuanzx.com/163clqdnzxx.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163telaekln.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163hdsuqlgb.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163ysqrlngr.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163dlsfbukb.html


<!-- 参考信息 -->