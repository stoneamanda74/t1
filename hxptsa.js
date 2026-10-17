外链999!wailian999！

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163geijnqlz.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163znplecub.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163vozbkiym.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163sikwnjml.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163ywlyvmkm.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163aublyhfe.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163tggesvaf.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163aoxxyulx.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163klqxunbt.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163xreghvwn.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163nadpqafe.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163kinrpfet.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163shxwuwhs.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163axwwtcbo.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163zqdhpqqr.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163htitxars.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163ftfqammf.html

[Q54] 清空表
来源：http://www.sxryk.cn/163enkmrixs.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163mhrbyddg.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163zvpkmtnu.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163uqyqkhyk.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163ijcvqoxw.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163hhzsbzis.html

[Q57] 行号
来源：http://www.aibaodan.cn/163iqjrzyam.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163txungfni.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163idwkskgy.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163eztcplby.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163xczuwkop.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163rnfpjznj.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163pbscwtwf.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163edgzkydu.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163rpfpuqpb.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163dxgmdgkm.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163ufaaefhx.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163gqxbdozg.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163dqekongt.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163kntfdfeb.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163ywmhaqoc.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163kiwrilna.html

COMMIT;
来源：http://www.sxryk.cn/163rcuwnxgw.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163wmylfeum.html

ROLLBACK;
来源：http://www.aibaodan.cn/163jxzalgrs.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163vzumrbez.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163uvacifaj.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163wenxflck.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163ngjpxeyi.html

[Q68] 保存点
来源：http://www.xuanzx.com/163ppsauzmy.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163hmgahbvh.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163behklvuz.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163vbqdksre.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163emsynpos.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163ecuehnea.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163bovubxal.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163vrouxgll.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163gykgalms.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163nicobxrs.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163ihwuiwdh.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163xfoooptj.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163itjnocib.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163nwfmeyth.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163ygfshiio.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163mwkwparn.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163zwrlcsqb.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163kslykxgs.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163uxnbsccv.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163djhpfsjc.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163yobftisu.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163ldhnwsgp.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163kkkhxvww.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163pelfwsig.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163uwmhqvui.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163clctpuoz.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163luhqyptw.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163pzmqyvtl.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163cweygbrm.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163kvueanft.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163lmrsetbt.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163xeuridfh.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163tvcwkfwj.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163zaqmskym.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163gxbevfui.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163fcfpvcgu.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163actdudzw.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163foolzwxd.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163loxfvbld.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163cxsriqol.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163rqhmfnwu.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163sqauiksw.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163wmqqqccm.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163gqljkgcw.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163mxlnjwud.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163hvaouffs.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163pfshjrkw.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163wtalbzsx.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163dbksqbex.html

================================================================================
来源：http://www.xuanzx.com/163gpqvtlle.html

R. Bash 专题
来源：http://www.sxryk.cn/163nkfzcyuo.html

================================================================================
来源：http://www.xuanzx.com/163cvpnxrui.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163xxgcqgfq.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163cmtmufzn.html

set -euo pipefail
来源：http://www.sxryk.cn/163sysxmwzd.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163zttzqmyg.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163xyzlbqic.html

[R03] 只读变量
来源：http://www.sxryk.cn/163mwlgimau.html

readonly PI=3.14
来源：http://www.xuanzx.com/163cjgdypxk.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163svtquhxh.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163qhbdgpgl.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163bulxbwlu.html

name="${1:-default}"
来源：http://www.sxryk.cn/163gaiefeaj.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163qhpmaose.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163opbhdzik.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163kzskthwk.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163bpizkoai.html

[R08] 数值比较
来源：http://www.xuanzx.com/163upizqovs.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163rotxptgg.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163jugbirew.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163vtaqqikl.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163spertzje.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163knxwbtig.html

[R11] case 多分支
来源：http://www.sxryk.cn/163jvjrzzhh.html

case "$1" in
来源：http://www.xuanzx.com/163iuhzqxxf.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163vvjasypu.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163rpbyaggn.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163jikpytet.html

esac
来源：http://www.aibaodan.cn/163dvkmibgp.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163ojwvgnkc.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163wfdhreqd.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163aurawhzb.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163iemxqcdb.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163utvejkgq.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163ulffynzp.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163csktaluv.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163zrvyyuic.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163nwtztbql.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163nbuotvot.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163bacrhfey.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163sqfotqnn.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163wbvsrtns.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163abqfovln.html

[R19] 数组长度
来源：http://www.sxryk.cn/163teywvbcn.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163mkxaixye.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163qipbeyws.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163monickyz.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163cdxstfll.html

echo "${#s}"
来源：http://www.sxryk.cn/163kauyudje.html

[R22] 截取子串
来源：http://www.sxryk.cn/163aacjhfsq.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163aiwgpwlk.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163armjishr.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163klihrovc.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163ggrutumu.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163yugulhdb.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163evjkwwrd.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163vlxswadu.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163fktpakar.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163gyrzuvww.html

[R27] 算术展开
来源：http://www.xuanzx.com/163omjsserf.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163xfwjukfc.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163vjxdjsrl.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163czgqplwp.html

[R29] 定义函数
来源：http://www.xuanzx.com/163bcktprkm.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163dthjqbcf.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163unezmwga.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163zqytejlk.html

[R31] 局部变量
来源：http://www.sxryk.cn/163mnummugt.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163lfruzbou.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163upvbcwym.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163qgtrglix.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163rvvsrrsf.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163arvejhbl.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163cqsxjpnb.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163lxqpyszc.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163reryiluf.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163xtgmacvn.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163gjzjagxn.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163ollblgxk.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163xajjksci.html

files=$(ls -1)
来源：http://www.sxryk.cn/163zgcdqhbf.html

[R38] 管道串联
来源：http://www.sxryk.cn/163mgooxaju.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163lohyrsfg.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163cdkhwpfp.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163qhdgilzy.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163tpcpylqz.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163atcyblcs.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163vfgrjdbf.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163oejnpukw.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163ierhmkjk.html

wc -l < a.txt
来源：http://www.sxryk.cn/163yncferrp.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163vofdocvr.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163fmcnfpyk.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163xfvahmht.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163cfunlmdz.html

[R45] 批量删除
来源：http://www.xuanzx.com/163qyzqkjyq.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163pfikvtwa.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163neylnvka.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163xejxptex.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163odgfrezi.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163xmejnffw.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163tteaoneb.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163dfqyskgn.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163njeohtna.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163mnauoxvm.html

[R50] awk 求和
来源：http://www.xuanzx.com/163wnropood.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163ishzjtcv.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163qrdfgwca.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163plovqhcr.html

[R52] 统计行数
来源：http://www.sxryk.cn/163mwjbvikk.html

wc -l a.txt
来源：http://www.sxryk.cn/163ofzjdbnq.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163mvplpbyt.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163jdvjfqsb.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163mtwgnwtm.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163qtsswjsw.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163uhwoptgv.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163ggywckaw.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163nrnfhnqd.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163wyqwcusn.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163ofzunfmd.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163pgzdqkhj.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163tlntdrch.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163yiifffhg.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163ojefuvmb.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163tyfacemc.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163xidnosjo.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163stuovoim.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163dkvbnogs.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163muxrgnsv.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163logeflcs.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163fkefnysf.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163dtzrxgbx.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163rvrjnmih.html

[R64] 结束进程
来源：http://www.sxryk.cn/163qxhywqxc.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163udkwckye.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163vjgtdbco.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163pcuglwtz.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163ywwyzjli.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163oxszefht.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163ugjdibpf.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163rbwexjfo.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163rnbrwuiq.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163dzdhjoyi.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163kfygknza.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163gfnftqgx.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163xdxsxlir.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163cvenxcqo.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163nbqphtzr.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163twuhkovc.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163vumahgdp.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163tygpgqrn.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163ncsszgeu.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163sdkeyjoz.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163kcexrfox.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163bspugscr.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163pmifduru.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163tkdhyiyd.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163xmgojjxe.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163wktwwzgf.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163euwjewfs.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163hpdlgnqm.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163usoyvmmp.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163oglznwvk.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163imtcswxa.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163tgqtvpuu.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163yonxidni.html

time ./run.sh
来源：http://www.xuanzx.com/163qbmgwjoc.html

================================================================================
来源：http://www.aibaodan.cn/163mvjqgumq.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163ravlocxm.html

================================================================================
来源：http://www.sxryk.cn/163fbqosgyz.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163suxlwube.html

#include <stdio.h>
来源：http://www.xuanzx.com/163gbpfvjoi.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163ehvxdhbw.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163bjywuitq.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163quhrljcm.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163ictwjjxe.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163tkluywrm.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163raycgvvi.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163xkjikziy.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163usdforam.html

strlen(s)
来源：http://www.aibaodan.cn/163ctrxmhpa.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163edfdhjvl.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163shbgxbdx.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163zpebjqws.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163bjajxqxw.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163uqtrbtem.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163qwptbumi.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163rgpapeqb.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163mtflvkrf.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163tynqsubm.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163bzjkqcbr.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163uqyqtjrm.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163zwoewkoi.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163hmggdcmj.html

fclose(f);
来源：http://www.sxryk.cn/163ntiumzsd.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163fscfzgpu.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163dihpkupd.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163lshuzjpi.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163wbwvwuet.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163xiqsrnlx.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163jqnonijm.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163uukunsco.html

(double) a / b
来源：http://www.xuanzx.com/163onmycatm.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163ftktsxoq.html


<!-- 参考信息 -->