外链999!wailian999！

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163ilabgcyc.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163ffesdouf.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163mskdwdtp.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163bonfzfqd.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163qughdmof.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163gdpsyzvi.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163hlzxdkxg.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163grebqnag.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163lzamzumf.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163dpsxvoys.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163ttblfplv.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163ceolydbp.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163jsskubbx.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163wrdsxmfp.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163xajificd.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163piofimkj.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163xfxwaulo.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163wjedcafd.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163dejohvqa.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163vspxqdhy.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163pewfxbls.html

[Q54] 清空表
来源：http://www.xuanzx.com/163twrvqscx.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163xbtgnvvu.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163mpabatxp.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163yiuhbebi.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163arbnuffy.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163gzpwkyqr.html

[Q57] 行号
来源：http://www.sxryk.cn/163prtmscme.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163kahbxeij.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163uiuikkbd.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163oexqwpwt.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163dwjugsic.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163igccrfqr.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163fnzqpnep.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163rwgaywjh.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163pfmsebmc.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163gxxltqza.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163uosjnrvn.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163qlbezdqk.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163fhbckhpp.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163pvcvkspo.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163nuvcvtyg.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163jxzfhoxb.html

COMMIT;
来源：http://www.aibaodan.cn/163ynseznbb.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163bdxmycet.html

ROLLBACK;
来源：http://www.sxryk.cn/163lrvouxyr.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163fyjxwlml.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163zxubvxpn.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163dzouphgd.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163fadlbcib.html

[Q68] 保存点
来源：http://www.xuanzx.com/163jszdqzro.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163iqffaykr.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163hqhpwfky.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163siscmnck.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163zlucazfo.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163qeugaqxh.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163vtkilxme.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163mymfccbt.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163xxytrwfc.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163znoewaph.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163xfoeawio.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163xmhizbzn.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163enjiblvf.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163zuebnwgt.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163vbtrmftn.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163xlknmtbc.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163ivsrheut.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163hhslnoek.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163twnkkkuf.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163hfjrxupj.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163bpachbbj.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163gvqvxofc.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163gykudakf.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163xcexjbra.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163cujgpexw.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163sabjlyug.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163ajutnfja.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163lgyiayly.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163ehwzmsjh.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163rgptbkjy.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163nhlrmczy.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163wkdvpcwl.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163lxputuwe.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163xfityxlz.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163yjpcdqmg.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163kusgfdei.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163vfrfcpfm.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163lbvqvgmu.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163mplinfjx.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163nzydinzk.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163xoauvzaa.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163sqqzlgwk.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163yhebfqqr.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163rvaclpnh.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163qknstmws.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163ukwwcukn.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163gmblzxdz.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163zlhjinkj.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163awaubleg.html

================================================================================
来源：http://www.aibaodan.cn/163pasilkws.html

R. Bash 专题
来源：http://www.sxryk.cn/163eroehvft.html

================================================================================
来源：http://www.sxryk.cn/163ajphvngl.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163qcylhjcj.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163aunhqeiz.html

set -euo pipefail
来源：http://www.sxryk.cn/163stzcdxbb.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163guzktbqh.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163mtjpsgmz.html

[R03] 只读变量
来源：http://www.xuanzx.com/163mxkesjwy.html

readonly PI=3.14
来源：http://www.xuanzx.com/163kehitkyi.html

[R04] 位置参数
来源：http://www.xuanzx.com/163nopmjvpo.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163croxuhbh.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163xhuvpapm.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163iqfxexnq.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163xnpmwshg.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163pzgruejc.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163hcfrlrua.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163zfqjpafi.html

[R08] 数值比较
来源：http://www.sxryk.cn/163ttrsrfsu.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163bkqhzbxp.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163dvgurihx.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163wkcfqqrg.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163pohrxbxm.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163qtegiymd.html

[R11] case 多分支
来源：http://www.xuanzx.com/163taxrcvea.html

case "$1" in
来源：http://www.aibaodan.cn/163rupnhmqw.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163csutbnpu.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163betabiir.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163nirvnuml.html

esac
来源：http://www.aibaodan.cn/163wqqsnzwd.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163tqsdtral.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163qqwvkfqe.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163sdeakivj.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163bgrletyr.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163qqnqysbx.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163kobihhgj.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163vzmdizmn.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163lrjxkncy.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163iozamxkf.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163ysbahnwe.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163ifikucfw.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163herjmyxk.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163pneswlnc.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163inhhyyjy.html

[R19] 数组长度
来源：http://www.sxryk.cn/163kpljwzid.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163zovzyyhp.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163qsiqppel.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163lqmktqto.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163vjbruozd.html

echo "${#s}"
来源：http://www.sxryk.cn/163murpxhdb.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163bevzqqjb.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163qzrdlbcs.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163strahpbu.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163jxieycsg.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163xidsalhh.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163keleeuco.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163mqxvfjaf.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163exmruwds.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163stajjorv.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163alpnwucb.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163ikbnvems.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163bfvnltzx.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163vghpunfz.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163ujwlelib.html

[R29] 定义函数
来源：http://www.sxryk.cn/163mdwjfkje.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163scyhszli.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163jtcviiot.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163gndhldkg.html

[R31] 局部变量
来源：http://www.sxryk.cn/163tvwkqkin.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163koycpkor.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163fqclidjq.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163qbumxwzq.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163mujdajqo.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163zkeosygm.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163jwdxzapy.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163mmsxmhdd.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163vlobmnzg.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163ceeofnxg.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163lvoqwvag.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163vhxeypet.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163upastszv.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163fpoggvco.html

[R38] 管道串联
来源：http://www.sxryk.cn/163opuoqitm.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163hyykspke.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163xxijjyum.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163bbdoejwr.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163vglcafnk.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163rjxebhbe.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163ivtiecgg.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163mloiojge.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163vqrtwdai.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163fhnnuxsr.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163bnshyhzc.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163dpykjiwo.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163kzjrazeo.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163cbkzlptb.html

[R45] 批量删除
来源：http://www.sxryk.cn/163djalfcto.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163ruazbjyt.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163miwdfhbg.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163lhgtyruh.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163msrqsynr.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163nqybgcqt.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163gktlyshf.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163szscvfnt.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163okjspwzf.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163ilqksdqx.html

[R50] awk 求和
来源：http://www.xuanzx.com/163btqkwyaw.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163jmbfmlfx.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163lkkhhmwt.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163wrqhsahh.html

[R52] 统计行数
来源：http://www.xuanzx.com/163skoojook.html

wc -l a.txt
来源：http://www.sxryk.cn/163jomhzedr.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163egodwrix.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163xidkaewc.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163fxggdssu.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163vhqslkoc.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163ouezjexb.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163rokhhkum.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163mbwfxpcx.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163tdcnzlur.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163xkgzngks.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163nngaqqnz.html

[R58] 下载文件
来源：http://www.xuanzx.com/163qcgymkyr.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163gabzpdbk.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163rwsfmalz.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163ttosdxhk.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163acbxdwwj.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163pyaaetnx.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163osijfpeb.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163ktkrtpue.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163kjcnlfpv.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163gsybihsx.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163ygqapfjg.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163dxthpxzc.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163plkemlbn.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163rqxtppka.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163xkvjmeel.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163unzvleje.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163yzyxeatr.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163uzkzqjgl.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163rtlxatcw.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163yyuxbxhh.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163sudbqgiw.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163jhcryfvk.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163zfwnjfct.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163mnckipre.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163bmxiytli.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163hupucxws.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163rxxlsrsv.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163igijjwht.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163hdidjyip.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163mhqwjgdk.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163rlrjyvcb.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163eexkmxga.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163rcoxnigy.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163ghekgtoc.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163cdvtwdbi.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163lyqrasbv.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163hxncnirk.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163neyykydc.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163dntarnyy.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163hdwydjpi.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163plaubynz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163feglzdrw.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163uolhnpeb.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163zwomquip.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163ebupgiea.html

time ./run.sh
来源：http://www.aibaodan.cn/163kgbcclai.html

================================================================================
来源：http://www.xuanzx.com/163aobymgah.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163twjlgcbk.html

================================================================================
来源：http://www.aibaodan.cn/163fndygmne.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163mljnpgrt.html

#include <stdio.h>
来源：http://www.xuanzx.com/163fkuynwqd.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163gkjfarrm.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163qxvtircb.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163phvcgqoi.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163mwaexomv.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163pzwvttcg.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163bpnpnfpi.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163wbvwudxn.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163lsduysiy.html

strlen(s)
来源：http://www.aibaodan.cn/163zjmbteha.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163uonqskuo.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163oozmcmkv.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163nhnsenxo.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163dovfgqds.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163rzhxdnep.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163vpzpncwr.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163bdzaykam.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163zqacnrce.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163lvvsxdqp.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163nzijbtxg.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163djxixbxl.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163wfqcmcoh.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163zbyaticm.html

fclose(f);
来源：http://www.sxryk.cn/163nluhlzvl.html

[S12] C：写文件
来源：http://www.sxryk.cn/163jnhsdwdp.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163zmxyvtwg.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163iyfxihsp.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163bubntufz.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163squopjxs.html


<!-- 参考信息 -->