外链999!wailian999！

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163mmzjcfcy.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163prhkegsp.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163tzzkogir.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163bjlqfzfo.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163wrczqcfq.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163pnfvzjbk.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163oiranskw.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163nhdtvvvr.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163zxiwroso.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163wemvcloq.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163kvaxluzk.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163fpaxmmvp.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163obrcuqim.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163gpnvnrjt.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163gqhqqiap.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163ikbexwxn.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163fytbwahm.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163wvskcqrg.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163ekcchwnd.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163rodxqxxl.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163vigtaiwe.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163mpbayqsw.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163rjxcjsei.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163stjlfznz.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163ophlkooy.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163ujlfdnnr.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163kmikleeh.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163rzefxnuk.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163cejusqcp.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163mqkpgvvp.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163nfklodjf.html

[Q57] 行号
来源：http://www.aibaodan.cn/163vjisnwvu.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163dueaetpa.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163zurlirah.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163wxaosiwt.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163zobfbwle.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163uattpbkb.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163lwdgaafu.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163duosxnue.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163egkijhdq.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163laqimdxp.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163lilxjxha.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163lmsintdw.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ysotbktz.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163fyyvnkog.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163zcfaqkqt.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163kyenzdjh.html

COMMIT;
来源：http://www.xuanzx.com/163tmpvylgx.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163dpacvrpu.html

ROLLBACK;
来源：http://www.aibaodan.cn/163uqhvisap.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163jasyizxo.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163cfbiguhd.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163vpivtsrs.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163vswrujbv.html

[Q68] 保存点
来源：http://www.xuanzx.com/163zagcdsnx.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163dmoyhzsb.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163vpfcilsz.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163rajukbzt.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163uxkvmyvn.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163yfkplels.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163lidpzphq.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163rfixhmci.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163kwatdtha.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163qrafkild.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163fcnifpit.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163awnjqtqo.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163kgbvdaht.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163xgrgvogs.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163iqcqftlf.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163mhmzwpfs.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163zbxndhyr.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163sqjfedwj.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163vfvxxwvy.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163aaytlobv.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163theujuig.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163jiaciatd.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163lhlbpmis.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163neuoqbqq.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163hnbzeuvr.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163mkhkimgx.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163jlfyhcbg.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163kynusyie.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163btulmzsk.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163cdfkorby.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163mqvtjxvj.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163rxmftary.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163kzmqwxie.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163nggyogjn.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163uydoaege.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163yempnkfh.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163itxumggr.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163jiygqydx.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163akhbqmdu.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163urpmpero.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163awhidopp.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163gjoiacjt.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163xmcxspch.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163ngwenfue.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163itdjojxk.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163sfuvojmi.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163jxecyitd.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163qqputazb.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163aurzrbmp.html

================================================================================
来源：http://www.sxryk.cn/163yhwmdxsz.html

R. Bash 专题
来源：http://www.sxryk.cn/163ctrmibgc.html

================================================================================
来源：http://www.aibaodan.cn/163uqdaseaq.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163lewfjlxj.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163infeamsq.html

set -euo pipefail
来源：http://www.sxryk.cn/163rosrekvr.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163fdpriydg.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163mftkrthp.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163skzegwfi.html

readonly PI=3.14
来源：http://www.sxryk.cn/163puyjrpty.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163bzgghvjf.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163ayhspilx.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163dtdbdthj.html

name="${1:-default}"
来源：http://www.sxryk.cn/163gejqfkpr.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163opjdbmkp.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163zyswqtxr.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163iiidvicx.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163yrigoiky.html

[R08] 数值比较
来源：http://www.sxryk.cn/163mfjzfbzp.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163xggrfoni.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163bkrhiwjt.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163gfnxuwyb.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163lwfrmdlb.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163arapjnkj.html

[R11] case 多分支
来源：http://www.sxryk.cn/163gflexyei.html

case "$1" in
来源：http://www.sxryk.cn/163lkfmvvxs.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163ohvilwjm.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163kmyibjhg.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163utymoora.html

esac
来源：http://www.xuanzx.com/163zpwochke.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163qztgight.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163slxauflm.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163wtnfckhp.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163uhuxszxm.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163osqctwte.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163gelosocu.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163uhprzcwh.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163hetwubek.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163qlxxfedt.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163anvfdihq.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163xkvooaiv.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163ncqvjfkj.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163tahkgjbl.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163tdiwvwvj.html

[R19] 数组长度
来源：http://www.xuanzx.com/163oqeygbzi.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163pobwtbal.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163sljivrts.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163cqqlzbfd.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163pkqrbujt.html

echo "${#s}"
来源：http://www.aibaodan.cn/163doelbcam.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163omnizgnd.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163rmasdxbt.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163sywnzuxx.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163gzeetwbm.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163pkbegsni.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163svobyhqi.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163xjlxulfn.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163kjjjqoza.html

[R26] 命令替换
来源：http://www.xuanzx.com/163otlwifru.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163xacztnxv.html

[R27] 算术展开
来源：http://www.sxryk.cn/163udrjpwlt.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163bfjjodkm.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163evsxopqx.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163llsjazqi.html

[R29] 定义函数
来源：http://www.xuanzx.com/163ircheilf.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163ogworsza.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163qfgbdavu.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163xhcwreno.html

[R31] 局部变量
来源：http://www.sxryk.cn/163ybhutqoa.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163jixrhird.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163torhldkb.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163ocuuujrx.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163kqhefxwh.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163mtdewesk.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163eamhtope.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163zuhuozvh.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163govbisan.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163twwvhfnt.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163dsgcywvi.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163ofsuitio.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163wzbxboam.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163nltqynen.html

[R38] 管道串联
来源：http://www.xuanzx.com/163ufcuhsth.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163pmmnccss.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163vftsumil.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163ipoaxwdi.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163irwicnrz.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163elnclkle.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163gygfmdzk.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163kzbjdwpp.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163fpymrwro.html

wc -l < a.txt
来源：http://www.sxryk.cn/163nwigmpmf.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163dyeugzlf.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163mkcivgii.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163hyorgtim.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163ztgjccvr.html

[R45] 批量删除
来源：http://www.xuanzx.com/163ggipjkrp.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163kfvxgndk.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163wajgldob.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163erfjgfis.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163fqeyrwqk.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163kkvdvkor.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163bjkuxvjm.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163ikinmdcc.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163hghzmbmt.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163pyqqbfux.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163jbeibrmq.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163iwbrlush.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163yfpgudmz.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163abybbenh.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163njanyyug.html

wc -l a.txt
来源：http://www.aibaodan.cn/163qiqxtcps.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163cukqshby.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163egnjexsc.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163gicivakj.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163fqibdopx.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163fifjmyna.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163czrsuvjl.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163yccgimki.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163ygcjrnaz.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163agjiezkl.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163awrjwckv.html

[R58] 下载文件
来源：http://www.xuanzx.com/163ovsjdrfo.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163zccqauhv.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163zleunkdz.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163momtwmke.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163xnbuxtfb.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163zvsallqp.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163vbpdkgzu.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163nodsriaz.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163aiilidyo.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163ebusikuu.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163uspcymrd.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163bfioibib.html

[R64] 结束进程
来源：http://www.sxryk.cn/163asvoaurh.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163cxfnczsw.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163qedcqwmx.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163iioftgay.html

[R66] 定时任务
来源：http://www.xuanzx.com/163gkyzrzuj.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163peqdldks.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163iqxpfqra.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163intrlwcd.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163yxigganl.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163sourbskf.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163pgisjmzr.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163bqvbrfye.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163ymsrnywf.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163mlbpaeyn.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163hesvvqfa.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163gxbzzbju.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163ffodnuhc.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163glenfvqn.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163dtrmefsq.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163szsanjgn.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163ocaxvzvj.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163omrcqgfm.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163jvgobvfk.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163gqqifuma.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163paotqcdp.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163gktltxkg.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163fiebsvtu.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163xlckzkex.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163fgmzjxwb.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163vlgvlfok.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163bqkchxts.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163fbtegote.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163tdyptxxw.html

time ./run.sh
来源：http://www.xuanzx.com/163jcvhjlvc.html

================================================================================
来源：http://www.aibaodan.cn/163jisbckrg.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163zxckflyq.html

================================================================================
来源：http://www.aibaodan.cn/163vnkakxas.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163sgtukfsr.html

#include <stdio.h>
来源：http://www.sxryk.cn/163ltgqttbp.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163wxzzrnww.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163cimruzii.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163garbyzzh.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163halsqeaa.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163edorndmh.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163omtwektc.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163vrtmdybv.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163eziqciav.html

strlen(s)
来源：http://www.aibaodan.cn/163nkwaqgdy.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163ublydent.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163lxzlcxjy.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163xbbkzllt.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163tuiabpbi.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163hllxqnym.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163wnulkxax.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163mpypyrdu.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163rjnjbyjb.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163rgdykosr.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163ldafykia.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163vgypoena.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163whrfuwkg.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163vxhwmpso.html

fclose(f);
来源：http://www.sxryk.cn/163otwcrama.html

[S12] C：写文件
来源：http://www.xuanzx.com/163lbrhrrsr.html


<!-- 参考信息 -->