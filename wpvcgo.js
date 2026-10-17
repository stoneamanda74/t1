外链999!wailian999！

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163yemydwlj.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163oufdbbnq.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163cfpulwip.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163icrabcmv.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163mgmmspxt.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163elmieyqk.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163gaxwiiwj.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163avmlhhyw.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163xgyesdvp.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163dyrtsadk.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163zgekufaf.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163orrcbqfa.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163khieifyt.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163cqntwvrv.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163voflpvvn.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163wtbcpkni.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163fyfyecyq.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163tgfdqhtb.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163nmyrehwy.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163vcymcrxg.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163vildmecr.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163oahymuhc.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163manntqag.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163hfahgrqj.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163teowsyhc.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163aicqrkvt.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163atnaaoxr.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163tmgnxelf.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163vuphirlj.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163mkknsqtx.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163vntasswc.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163rnvucglz.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163audtkeim.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163qatldgtv.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163isjqrvgu.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163bbhlhmao.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163fjjpizwy.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163riaogtrh.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163kmtkragg.html

[Q57] 行号
来源：http://www.xuanzx.com/163bvgzsbpa.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163wxgkipor.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163qsefkhhj.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163jnhpoxfh.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163kqkhggih.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163hyxmzmcp.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163predxvkl.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163erorklsv.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163fchxdffo.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163keuwplnw.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163imonsfex.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163ocfyvyto.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163mhpafigq.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163sgxqyabx.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163kgbfxwfg.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163ybrllihb.html

COMMIT;
来源：http://www.xuanzx.com/163clltoepl.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163bllvprro.html

ROLLBACK;
来源：http://www.xuanzx.com/163ltyftqsd.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163mwpxktxj.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163qiejnydz.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163haxfexkh.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163tetorlfs.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163sjmbebvc.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163pxxtaadz.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163tbdgotwh.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163tnqowetd.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163afhtoegh.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163abdrwpjb.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163qbrhjfdk.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163ptmfsfpo.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163egjvnwow.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163euauewxq.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163drmuaktq.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163mdnechuk.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163wczpsnyw.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163smghrpyf.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163ebrrpynh.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163giyqigfe.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163clbmcojg.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163gntrgaqr.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163snevwnyg.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163zakhlhoh.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163ctbsiaua.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163tnfagvtt.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163zpgswnsh.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163sqtfssmc.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163lvticwzg.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163upkzxcmp.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163ecdzebvn.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163noaiartw.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163zafpfymn.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163lfnlnipf.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163zxwewwcr.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163edtobumb.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163wthgaxdz.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163aoynpxcn.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163zsjxxzqo.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163necrkpga.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163dwpfxcgx.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163fnfcnjpf.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163idgrrlln.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163ymkzgrdy.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163fjiilozy.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163mbxsfvzx.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163wxdnlpff.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163vdzaoknj.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163vponrzin.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163hoeujzzx.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163yirhpgiz.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163etvhpwnc.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163fxdgijsn.html

================================================================================
来源：http://www.aibaodan.cn/163qjnsnfdt.html

R. Bash 专题
来源：http://www.aibaodan.cn/163ksqratlq.html

================================================================================
来源：http://www.sxryk.cn/163dunolomg.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163gakiqkze.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163pludqtof.html

set -euo pipefail
来源：http://www.aibaodan.cn/163kvsynrzc.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163hbqtlcjh.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163gwpucnws.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163rkwkfdlk.html

readonly PI=3.14
来源：http://www.xuanzx.com/163vnkvuwtb.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163hefebtpp.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163useabsty.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163amnvgyra.html

name="${1:-default}"
来源：http://www.xuanzx.com/163vpogldfm.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163izdlxtkh.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163xbclvjce.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163seniezvb.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163qjyulhbi.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163nthyrxwf.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163jghvkbit.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163wdwlpyqh.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163flpfljck.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163rocqpsjl.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163zbopnugo.html

[R11] case 多分支
来源：http://www.xuanzx.com/163czfdudqj.html

case "$1" in
来源：http://www.sxryk.cn/163jnybwagu.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163egpljtan.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163uedvcctl.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163biwcnrsa.html

esac
来源：http://www.xuanzx.com/163wfteulyr.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163tjaurrmt.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163etroviqs.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163rltrltkz.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163keqnjzhg.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163rptkjrcp.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163cjekhupm.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163dvrnzxsf.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163qtayojxg.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163nidcbtbb.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163ryddqpba.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163vufsqvwe.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163pszovvev.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163smsogzxl.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163pwpbesac.html

[R19] 数组长度
来源：http://www.sxryk.cn/163dxtozfyb.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163qtqqoctz.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163unxjisho.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163xuulmdbr.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163nllthova.html

echo "${#s}"
来源：http://www.aibaodan.cn/163tpccsmwf.html

[R22] 截取子串
来源：http://www.xuanzx.com/163yukltxfg.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163gvvifwau.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163ienhvctb.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163ydumipme.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163qnnnlfoq.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163lmcuskzl.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163ykvzpywj.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163kcklzdlm.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163edigqyzt.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163ycjxvfhm.html

[R27] 算术展开
来源：http://www.sxryk.cn/163cylhbooz.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163qsuzftvd.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163ntugbfgz.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163fxctfafy.html

[R29] 定义函数
来源：http://www.xuanzx.com/163hidurdne.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163lchvutlf.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163hytegpln.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163xemizkav.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163xfwyselv.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163pkrvvohx.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163zvholxjp.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163iwvfoomg.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163inkicoza.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163sieyjplz.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163mbdqjhnb.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163sogkvion.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163tflmgolx.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163tvghqmtr.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163jroqwhyj.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163sxcieyuz.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163nsjjsyed.html

files=$(ls -1)
来源：http://www.sxryk.cn/163blfmgkmg.html

[R38] 管道串联
来源：http://www.sxryk.cn/163hqcshwpo.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163hfavxeka.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163qwrxorca.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163uhztzksc.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163zflemopa.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163fpwucexp.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163lyobstjo.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163aqjhweuu.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163zlrnxqbb.html

wc -l < a.txt
来源：http://www.xuanzx.com/163aptbsqbc.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163slmvlsmi.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163ebimbrsm.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163maviszhx.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163fffcvxka.html

[R45] 批量删除
来源：http://www.sxryk.cn/163gyzvhjgm.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163vvtsormw.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163fujawrcu.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163zaqnbkmo.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163gcwipciu.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163zbwzofqi.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163pzprdsum.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163dllftzvh.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163sbjsiuex.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163yvlehwjs.html

[R50] awk 求和
来源：http://www.xuanzx.com/163uuekrcni.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163nmwexiwg.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163jnmbonqa.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163snbxmhqu.html

[R52] 统计行数
来源：http://www.sxryk.cn/163swcmzfup.html

wc -l a.txt
来源：http://www.aibaodan.cn/163ktxsgnnh.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163vapelmjl.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163lyopuhsi.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163dcjtmpil.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163aswlyltf.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163enqvksmi.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163dhejqrjk.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163gdjahknm.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163caabvobk.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163opitfjii.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163vulrbvtt.html

[R58] 下载文件
来源：http://www.xuanzx.com/163ftekgnun.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163dlmetqpl.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163uaziavzx.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163ddfozhge.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163gexxzmir.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163icthymtu.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163cbfyjnfm.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163jwcxxnsh.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163cfqgnrpu.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163fbysjblj.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163okmqqnrt.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163hvhgmkvm.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163wbeqjuey.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163gflxeluy.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163szamtfmq.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163kcfplgls.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163vsuaeatx.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163gnzfdgio.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163tyngznmf.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163slpsscod.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163mltsakof.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163pzhtyufo.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163awtuiqux.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163gxvcbanr.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163rdqiuncp.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163cqtskevu.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163cejhgmpg.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163sddoaypi.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163rzqgkkul.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163roeeegml.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163jqpxhbli.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163nquujccc.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163wvadwpub.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163xlfbqlxb.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163pkdmftae.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163vykiszlp.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163cykeygig.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163rpongzag.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163dzazhjpl.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163zjinswnu.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163rmnpbpqs.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163xsykqhol.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163hjqreacw.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163wkvfoncu.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163nceutjkc.html

time ./run.sh
来源：http://www.xuanzx.com/163wwpsodqe.html

================================================================================
来源：http://www.xuanzx.com/163mrtbtgoa.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163jhnszhsp.html

================================================================================
来源：http://www.aibaodan.cn/163whmgybzr.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163phjuubyj.html

#include <stdio.h>
来源：http://www.xuanzx.com/163gptzsrie.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163aumaziyw.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163katnhuow.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163giixlkol.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163wminzfbx.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163ouvtkinh.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163xpbvrobw.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163rgttftcq.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163gqwbevei.html

strlen(s)
来源：http://www.sxryk.cn/163ebzjkeam.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163ngxlyyio.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163exzzzuay.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163eeygossz.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163ajinbpwu.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163bfuihgyy.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163ymhogbta.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163hmdfynqg.html


<!-- 参考信息 -->