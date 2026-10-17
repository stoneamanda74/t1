外链999!wailian999！

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163kiaijibu.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163liyopwed.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163vscxrsjw.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163foxpeqrc.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163jnzgsrhn.html

[Q54] 清空表
来源：http://www.sxryk.cn/163vrnxijmp.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163puyxsxrx.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163zxgmtiex.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163blruekum.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163nwvotykn.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163qikyqdfu.html

[Q57] 行号
来源：http://www.aibaodan.cn/163qqrftabw.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163vddvqcfu.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163jxicersm.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163mueeeqwv.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163tbuephly.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163bkqeaezx.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163pojnkpjv.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163rhbdzpzt.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163bxfyadcb.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163viinglro.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163oydossqi.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163wzzzwzct.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163eefgvvse.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163cqfkhslf.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163fapowrwd.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163qyiqcsii.html

COMMIT;
来源：http://www.aibaodan.cn/163bwjjzody.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163noxktmdg.html

ROLLBACK;
来源：http://www.aibaodan.cn/163ixzfbnbr.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163ykxtginv.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163mtkrqzmj.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163mmhicxrl.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163xdpfycjb.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163wsjrdoup.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163shneqkds.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163fkkidlye.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163rwhopmxx.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163niraroye.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163vgjcwdhc.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163izebihst.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163jhtualrh.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163dxxzlhaq.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163byuyelqj.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163unwgxqaf.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163hbfknuik.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163odfpdpic.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163hzmxanjp.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163yqrhmglo.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163khupwvya.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163uwtbvjwn.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163fzrvriya.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163vvdjbqjs.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163cdyponut.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163zhmbnpgq.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163vvyrvsnb.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163xwjydcsr.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163pyyllttd.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163zalmomcg.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163vhnoreyq.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163fzdcozhk.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163zryqggrw.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163jfyqrxkt.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163xvrtlgmi.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163cuvqkfmi.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163akatgolj.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163mmfkcggc.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163vwskwlkv.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163jeioztan.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163oixsaamq.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163mmerqgmp.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163kapsjmtc.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163tpqalyxu.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163cgepgucw.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163bzbqofag.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163aapwqnpx.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163kyrpyllx.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163towvgbff.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163ztbcrxlu.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163jgklzipe.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163blbxrysb.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163quqcydju.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163jslxdind.html

================================================================================
来源：http://www.aibaodan.cn/163fhiblihm.html

R. Bash 专题
来源：http://www.aibaodan.cn/163kvksefiv.html

================================================================================
来源：http://www.xuanzx.com/163ysqunkma.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163nuivtyxu.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163qiwxbaox.html

set -euo pipefail
来源：http://www.aibaodan.cn/163fudtnakp.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163gonnmcaj.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163udnmjnwa.html

[R03] 只读变量
来源：http://www.xuanzx.com/163drnhfpse.html

readonly PI=3.14
来源：http://www.xuanzx.com/163tnziieah.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163pkpnfwct.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163uxunedpr.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163tkdwxxfa.html

name="${1:-default}"
来源：http://www.xuanzx.com/163resgfgur.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163docjgjrb.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163degeuklc.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163sjfjxsfc.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163lyhfvqhk.html

[R08] 数值比较
来源：http://www.sxryk.cn/163mqiroegl.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163muhhoazk.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163ndmsxtij.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163vozyatfc.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163yeqmqise.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163jfmzclue.html

[R11] case 多分支
来源：http://www.sxryk.cn/163ylyazwat.html

case "$1" in
来源：http://www.xuanzx.com/163quayywjc.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163ycffttkv.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163aygnbhfc.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163amefppji.html

esac
来源：http://www.sxryk.cn/163mmltklkd.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163ksjqgmvx.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163pgrrjgki.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163oyrehgow.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163plubnbsk.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163wdeuvrny.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163zbaqftgy.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163fiuxshlp.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163qkvnvwyp.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163axbjuqyj.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163bevwtppx.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163rgvmuoia.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163frfisyrj.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163iojuzutv.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163ozbodatn.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163kybqgtzi.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163vkomjjtc.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163qifugiya.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163bdylawgb.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163mldnqvum.html

echo "${#s}"
来源：http://www.aibaodan.cn/163rsdwvimh.html

[R22] 截取子串
来源：http://www.xuanzx.com/163hmckjpzp.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163qpfgcyuz.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163qrhykkie.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163xrjkoyct.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163slmhgkjq.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163sgbwjzcf.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163gysrbnbo.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163ozkbmmjg.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163kcvzhpre.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163onifhoue.html

[R27] 算术展开
来源：http://www.xuanzx.com/163yfxkbovk.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163yynvvush.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163zxdxzuvh.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163elibuhud.html

[R29] 定义函数
来源：http://www.sxryk.cn/163dayelrgk.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163vjyfpgbo.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163pmlibodg.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163bjbvqste.html

[R31] 局部变量
来源：http://www.sxryk.cn/163ooiqjepp.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163eigtqmqm.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163iwoggryg.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163fphexcec.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163rahpbtry.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163bpptbghu.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163hgvgawvf.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163brqjbzaz.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163bsnisilo.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163hridltbo.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163qggsovhc.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163vslavlix.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163wczzpoar.html

files=$(ls -1)
来源：http://www.xuanzx.com/163tlqyuojp.html

[R38] 管道串联
来源：http://www.sxryk.cn/163cbyarmwg.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163qqrqrhki.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163xdwtxoar.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163asxpfpgp.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163yvgfaqyw.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163ukxvwagu.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163lvsqlaju.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163pvryyczw.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163yfibmgdv.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163uolrjkst.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163hcwnjglk.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163hxjcjbsw.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163sbshaxis.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163bfypixjj.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163ffhawziu.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163mvqknups.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163ylnudzys.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163weaobwxv.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163qkhoyzuc.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163dkhugvtm.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163xooiivao.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163yvdgqxhy.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163ipiuvwop.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163fogynzdx.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163wbmeuetp.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163kqkowltf.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163ksavrego.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163pcvknspd.html

[R52] 统计行数
来源：http://www.sxryk.cn/163isniglgc.html

wc -l a.txt
来源：http://www.sxryk.cn/163fkswrvxl.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163ecikjcwn.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163ftnrhcki.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163kxdaleiw.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163tlisedzn.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163kauixkkm.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163cpkhqvnn.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163zxusrimh.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163pmndgrpv.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163hxuvavju.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163hsvjwrir.html

[R58] 下载文件
来源：http://www.xuanzx.com/163tjdxwifk.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163tvgoqfvj.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163xyysarar.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163wwhuouxi.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163zihklvmm.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163hgomadjd.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163ytnhqxob.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163wyqbhudx.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163xwgmqmry.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163dxmcngby.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163wqwjnzqd.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163khhkvcxl.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163gcctlajn.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163noomkdan.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163pipmhpcf.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163uwnvmgzn.html

[R66] 定时任务
来源：http://www.xuanzx.com/163wwcfwkqk.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163khpzsoze.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163acuncuqh.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163wajduhsq.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163qmidpkba.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163piomohph.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163nwhlvzti.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163rgbfhpxp.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163dwthprgh.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163fwvkevdn.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163awikjzbz.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163ejsaplpd.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163sfrfesnc.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163bpucdvkh.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163mzinfoxu.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163ivcgopfg.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163eruzrxeq.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163radzawrc.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163fhorkgqj.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163kjxwdhpn.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163oopujbmn.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163bhdbijak.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163bwfvwbbt.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163gqnnxlmc.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163rufacbpu.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163dwdbkpgh.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163gpjjrupz.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163kcztwgmw.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163qzvnaceb.html

time ./run.sh
来源：http://www.sxryk.cn/163tbtubzcn.html

================================================================================
来源：http://www.xuanzx.com/163veglrdcd.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163qfuldmcq.html

================================================================================
来源：http://www.xuanzx.com/163tqeqguur.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163ynatvnpr.html

#include <stdio.h>
来源：http://www.sxryk.cn/163mhvmpdgc.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163vzoshdjy.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163kjqxuiec.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163lwoufnlv.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163osontrqv.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163pwowggei.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163jcsjavlg.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163qfmwglbq.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163arfwymgx.html

strlen(s)
来源：http://www.sxryk.cn/163lnawcrhb.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163juzkpfdw.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163atmxjmft.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163fsaledvy.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163gtmjohns.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163swspexfj.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163nipsvrox.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163msyaqkki.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163iymhuvhf.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163qxgictes.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163droowsxk.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163kzmvfsvv.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163zthqaomf.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163fhagfjwf.html

fclose(f);
来源：http://www.aibaodan.cn/163kklkoiyf.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163vnrqzrpb.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163ovtjjmvt.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163fogwnobz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163vilyawix.html

[S14] C：枚举
来源：http://www.xuanzx.com/163robixfpo.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163rzawxvxc.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163dcgfzdsn.html

(double) a / b
来源：http://www.sxryk.cn/163qjmlasax.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163pmavomds.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163lhfiqkgl.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163wssytqcw.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163tbffseaa.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163ulojrmmp.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163qdevacau.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163ixnpoidn.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163kfjdxrhv.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163btjshbac.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163zuukxtbd.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163gzqyvldt.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163ajmltdfg.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163pgfpbvat.html


<!-- 参考信息 -->