外链999!wailian999！

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163sjtiriel.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163jmnywful.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163lisjploi.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163owxvgacj.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163fvnqckos.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163kmjimpgy.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163nbgihpeo.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163kfkmmsoy.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163ktzairvu.html

[Q54] 清空表
来源：http://www.xuanzx.com/163xnkxrqzd.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163nmekslsa.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163sgwvprud.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163alktcshi.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163usdplagz.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163opzvppez.html

[Q57] 行号
来源：http://www.xuanzx.com/163jdhleqxd.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163hjjlqqjo.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163zfqsaowp.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163jwcjjyji.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163xpcpgfzz.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163sqrwyifd.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163hxtizzpt.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163drxwhzoe.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163coiwdoax.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163bzlodoyx.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163qsppbtgm.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163fkeobtly.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163wjanoiza.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163phpqqijg.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163szmhofjo.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163tfcdsfkm.html

COMMIT;
来源：http://www.aibaodan.cn/163pbcpchhd.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163bukwydgx.html

ROLLBACK;
来源：http://www.xuanzx.com/163mjbpyhiw.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163gfsnnwye.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163znxwfotm.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163dymhtnzd.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163nuavrlzr.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163nswjlbwb.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163cwocolrl.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163rbkcdeky.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163tblgoajh.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163sjcsmlui.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163fauwllby.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163tmingjxv.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163nmsuqbvh.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163emzqwtic.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163kxqjoudu.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163mjcvysee.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163zsoufopu.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163gcfagtns.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163yvdpldbe.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163pnyqtrjs.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163tybtzbff.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163dxxeduvn.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163fsvqcgum.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163nwlhupec.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163lzcfxzik.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163xbqkqexy.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163sskmphsk.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163bsstgoxu.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163fcieiueb.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163hbgmocub.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163ykxyuhcj.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163ijegjhgu.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163ppmzgiff.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163gypdhfot.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163vbalkmae.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163lnyndntm.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163eezmztpx.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163dxljupqa.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163hkixfwwa.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163rgiqpuub.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163lmsxikvj.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163hesmnysi.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163fxkgsrwm.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163magswces.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163aftlobgk.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163fqefcodw.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163uimlnrpg.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163fxoraiba.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163zjbmoqtx.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163bgcijccx.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163eszxqnca.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163pfvlabod.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163xsalcftf.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163wlkpcclk.html

================================================================================
来源：http://www.sxryk.cn/163vkaarmlf.html

R. Bash 专题
来源：http://www.xuanzx.com/163klgkfllz.html

================================================================================
来源：http://www.xuanzx.com/163nfgrkcqd.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163hurhniuv.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163repawuzl.html

set -euo pipefail
来源：http://www.sxryk.cn/163ftqfrlhr.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163mgkidnia.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163ifdrqcft.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163bpxfgbga.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163ptlbfego.html

[R04] 位置参数
来源：http://www.xuanzx.com/163mmdscnhf.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163seleelto.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163caoywgnt.html

name="${1:-default}"
来源：http://www.xuanzx.com/163rimgnvmm.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163cejitjuu.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163whskwfsr.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163cobosabv.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163qtijlwxi.html

[R08] 数值比较
来源：http://www.sxryk.cn/163vcybbiki.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163yighxzch.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163pljniyov.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163panfuxcx.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163zmpczczq.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163vqxecufn.html

[R11] case 多分支
来源：http://www.xuanzx.com/163qabsrgia.html

case "$1" in
来源：http://www.sxryk.cn/163yncxqdhm.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163agkyfaxp.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163qoqkraht.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163uqqsfhwa.html

esac
来源：http://www.xuanzx.com/163irabngec.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163skvgqqbr.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163jkcgthzb.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163ivbqfvzk.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163qglvthjt.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163ksdvgqah.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163zugkseyv.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163mczetrmb.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163dcgxvpvl.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163zppsjaza.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163amrsgndz.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163zyhvhulu.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163nuzujeko.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163ztlrthtk.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163bbcqqtde.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163xfmvgnge.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163ulfuxvtm.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163kdtykrhk.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163vnxshtfh.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163qfszlvuc.html

echo "${#s}"
来源：http://www.aibaodan.cn/163jigjvurl.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163fvfszigr.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163uvemssiw.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163oiqdsmhr.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163sevlumml.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163qhoofpsf.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163fvjtnfbu.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163woojayvd.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163hdyscosu.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163trunawxq.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163bgukdery.html

[R27] 算术展开
来源：http://www.xuanzx.com/163vckyldof.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163motihaam.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163ywtqhiko.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163bmtlarmq.html

[R29] 定义函数
来源：http://www.sxryk.cn/163haumvmgd.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163iirlaiez.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163ncyujtue.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163typiybkt.html

[R31] 局部变量
来源：http://www.xuanzx.com/163giickqjr.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163nnjcnezb.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163rsjkioct.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163hbyszplj.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163abnmstlb.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163vgpphtfl.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163bogzrlwi.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163cwkjlocr.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163vswfdybs.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163baezunky.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163jivffdka.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163ryiyckot.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163ijmoxjdn.html

files=$(ls -1)
来源：http://www.xuanzx.com/163xhjewvfo.html

[R38] 管道串联
来源：http://www.xuanzx.com/163ftgrdtty.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163ocgavmox.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163qvtrbxnk.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163chikksjd.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163xlhfkydw.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163smktihjq.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163hppfkyzu.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163mhmnecfe.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163pokjuhkm.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163cjiohkgb.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163nhudpygn.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163ilbgfxnb.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163yduccjjt.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163tkpdcnpm.html

[R45] 批量删除
来源：http://www.xuanzx.com/163onweyvdo.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163xmraamtj.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163izghwafd.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163dnjkgeau.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163idcjzsxm.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163xlfpooee.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163kmmtombu.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163amtfkvbb.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163lqujzeap.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163odensdll.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163ntupszap.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163rmbuywsf.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163zhjbgcsd.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163sfzcokwn.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163rxpchmac.html

wc -l a.txt
来源：http://www.xuanzx.com/163amrqcney.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163jxbaehjc.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163vpoywqag.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163ttnpigfo.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163ffunsabo.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163vamdgrgn.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163jgawpwck.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163rfynhdbh.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163dcjfkhcu.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163qxzyyrzr.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163wcwjiuki.html

[R58] 下载文件
来源：http://www.sxryk.cn/163wmxlxesu.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163qywizqmc.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163gdozbgce.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163ltezzfte.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163quprrbug.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163akypsznk.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163hkfewyyw.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163xtabooys.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163uympfhix.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163jdybcxqp.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163qvglpagf.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163oijhttpi.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163wkiwnvak.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163nqspjeja.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163hswpikkr.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163hmokwwrs.html

[R66] 定时任务
来源：http://www.sxryk.cn/163rzerfkbo.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163lrhmtalf.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163ltruwpec.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163whtnchtc.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163hbuakqcw.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163gvulxcek.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163vwvjwkeq.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163dtjiveao.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163ffuprxls.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163tdqocpzl.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163tkipjtrx.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163adclrtib.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163fpirdaxh.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163vtpyqbkh.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163axepdicb.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163igtrqgid.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163deaepjsw.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163ozoihsas.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163viljfgyu.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163mdlawjie.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163hjxvetfm.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163aqdwfntd.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163okraomcc.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163aqbjobjk.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163ymlhqrde.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163gytzzpio.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163svomjlai.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163sjccxulg.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163neelqrye.html

time ./run.sh
来源：http://www.xuanzx.com/163tneigmce.html

================================================================================
来源：http://www.aibaodan.cn/163xxgqcjrp.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163tffaceku.html

================================================================================
来源：http://www.aibaodan.cn/163vwprbavb.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163pzvevlas.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163xdtzwzgg.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163bteyfixl.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163lbiajfoh.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163tfjslmxm.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163cnuvmjpw.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163jqddljcy.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163fnijqhqz.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163ecsldncg.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163ehofvdho.html

strlen(s)
来源：http://www.aibaodan.cn/163yjsscgak.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163xwuofiny.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163wseakwua.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163fliersoh.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163pcpuxqba.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163igcvaazt.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163zcbpmvgw.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163mwxyokjj.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163szosrqrv.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163xoblmujo.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163cioljjok.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163sjbcdjgk.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163vucokbeo.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163oeobrnhj.html

fclose(f);
来源：http://www.xuanzx.com/163dblpmzod.html

[S12] C：写文件
来源：http://www.xuanzx.com/163aqsffpwn.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163gcxvkqzy.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163hmhavost.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163urzybfku.html

[S14] C：枚举
来源：http://www.xuanzx.com/163wcynrhta.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163wvmdiyle.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163twpcliim.html

(double) a / b
来源：http://www.sxryk.cn/163rygxlxyq.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163cslsenhb.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163ojrqdojd.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163brcslcqz.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163oycfrvlf.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163pccwbnqk.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163qaxitzvz.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163lhvoltdd.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163fjszkgtq.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163zaqxtkth.html


<!-- 参考信息 -->