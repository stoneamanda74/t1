外链999!wailian999！

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163pisllgce.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163toewysjy.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163msisttzb.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163ngcgzhet.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163nlammnrc.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163aufshjzg.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163ozccozck.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163wobuesfc.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163ksavlmwm.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163burklrnt.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163phflgwxn.html

COMMIT;
来源：http://www.aibaodan.cn/163ltqlmeov.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163hfymvrwa.html

ROLLBACK;
来源：http://www.sxryk.cn/163fqrcyihl.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163oyuzazvj.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163kargkzgr.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163ipbxtbng.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163wpcxlwpj.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163eclxakwl.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163kgiczeqd.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163rgmnamat.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163ahcadwxr.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163ewgwvshk.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163iicxwfxc.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163qjbcedoi.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163sinnezjd.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163qoozyium.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163wzvhgply.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163obrgrkya.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163nnwikyhn.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163fhibabld.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163rrbjzimj.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163jvhqxftr.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163osjbegxy.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163vggwmznb.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163pgigtwkm.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163caegodwl.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163fdkvivyv.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163pyaomjnz.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163oresgfpj.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163ijwbwvwm.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163xolzfqjx.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163etvvgtlt.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163fvcbtelb.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163qnztding.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163owznpbnl.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163yzejisrs.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163cbubzozh.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163mmbufdys.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163smzhzceb.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163skhukaft.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163aaoseqeh.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163dadlokkk.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163ynmgeepc.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163ftikcmrf.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163yybvartw.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163yuvazhsx.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163tfnrqtux.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163htmnbard.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163qsemrfwb.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163qjtpyubt.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163zaibrgla.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163tvddbbyh.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163imcbmxac.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163xinqqbed.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163uvaxszmy.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163sxxknjfq.html

================================================================================
来源：http://www.xuanzx.com/163uxlcdrme.html

R. Bash 专题
来源：http://www.xuanzx.com/163judnorly.html

================================================================================
来源：http://www.sxryk.cn/163purftnhr.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163otaofwax.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163dexniqgu.html

set -euo pipefail
来源：http://www.sxryk.cn/163gmtnovph.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163ezagwmjx.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163ztwbemln.html

[R03] 只读变量
来源：http://www.xuanzx.com/163nobkfxuz.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163uamispol.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163ccklfcph.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163uylxxxly.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163kzxmzpga.html

name="${1:-default}"
来源：http://www.sxryk.cn/163apjtajek.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163jxratgkz.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163jqaqxwta.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163uhecnsxr.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163fhufmpfr.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163awsdtvlu.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163agsepqux.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163fefsfkwb.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163xvckkzek.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163tvlezjmh.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163upcflzvh.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163nooapdbr.html

case "$1" in
来源：http://www.aibaodan.cn/163dwlumind.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163owwvlves.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163gppyrmce.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163fcybkweb.html

esac
来源：http://www.sxryk.cn/163hvcvtkeg.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163nrcwaeyc.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163xfyxuekr.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163elrdrojl.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163cegamxgb.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163yopobeck.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163iwkjlkdk.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163dvdajpwd.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163hqcvjdhp.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163mkfdcytp.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163asifygoe.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163nzhnrqno.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163sgbdlhgg.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163ocjgsylm.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163bihuwtfn.html

[R19] 数组长度
来源：http://www.xuanzx.com/163izdydjic.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163puxpaglb.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163pfrzhppw.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163ebuxauxm.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163umpqwntv.html

echo "${#s}"
来源：http://www.sxryk.cn/163foftoapu.html

[R22] 截取子串
来源：http://www.xuanzx.com/163nifjwsge.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163qzsbxxtf.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163kupryjuz.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163qjihdgbt.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163fptfkcqp.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163gzrmwdow.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163thsuqeow.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163cyvknvsf.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163zlnmnrql.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163kdcqkgwh.html

[R27] 算术展开
来源：http://www.xuanzx.com/163kiootaea.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163ynpymqsn.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163uyurfwii.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163yakaenin.html

[R29] 定义函数
来源：http://www.xuanzx.com/163eqiqhicq.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163plahotnd.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163ppegseaz.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163hjaqwear.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163vgongxqe.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163kfiyzcfs.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163ultzrogk.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163klpabdpq.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163qqtdqnzd.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163tbnpzwef.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163uulnilxy.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163gsjwzvhv.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163yhenikco.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163bdiltwok.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163nyopheck.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163tarvhmdz.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163mzzaocir.html

files=$(ls -1)
来源：http://www.sxryk.cn/163hfepawqa.html

[R38] 管道串联
来源：http://www.xuanzx.com/163lklgusix.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163jrqqcdjy.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163rdcitzxd.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163mlhiamjo.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163xjbbjsva.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163ibizgcgw.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163liifizmz.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163whkvgmai.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163nojxwugg.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ypxzimsd.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163uwxzwpar.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163cvdfojre.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163vlhghflp.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163dhikmqwf.html

[R45] 批量删除
来源：http://www.sxryk.cn/163fabcgmor.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163exrpoudb.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163ztbkzpeq.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163erexyhym.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163gdkugqmz.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163fwkulmiu.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163fcvjypdd.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163bdmjxxfn.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163ozarvokk.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163mayjrcjj.html

[R50] awk 求和
来源：http://www.xuanzx.com/163fhqqjwdy.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163vzdlagjw.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163bwvkankw.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163wqbgqeph.html

[R52] 统计行数
来源：http://www.sxryk.cn/163vtafanau.html

wc -l a.txt
来源：http://www.aibaodan.cn/163lucguouo.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163ejyybtum.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163ttkqrprk.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163fnzcflxj.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163qspechir.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163lyjnpnfo.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163ipvhdoyl.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163nucasjdq.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163vcwolzmb.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163casodozh.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163slcatnab.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163wyzvogvo.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163ffmlylcy.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163bxraekbl.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163kjpxhpox.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163kjwiykts.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163ldltrybl.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163pnjahnpy.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163ubwybtfh.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163vdgueuwn.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163nlenorwi.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163tkljjpsf.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163rvrrsvan.html

[R64] 结束进程
来源：http://www.xuanzx.com/163rtmlerdh.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163bpixjmmp.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163wjezhpha.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163lstkdkbu.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163bjmzngxm.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163yuojufeu.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163xqnbsbiq.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163wtevcuqm.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163erhkkydx.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163aqkmsrah.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163ilhcgnef.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163camaxups.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163tkdzzqab.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163bkskhycb.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163hvfptwrl.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163wytnpsnl.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163rceujbqk.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163lbolcorv.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163zesvklni.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163hzbmpked.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163eevbyicw.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163kcfqlevy.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163jwbcbriu.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163zocdymxz.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163xwjkmmlp.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163jrtjbyto.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163oqeoernr.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163bqcqnuus.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163rgzdejnq.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163yznurpno.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163lyygrjed.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163eildwgsx.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163lcxdivgc.html

time ./run.sh
来源：http://www.sxryk.cn/163wnlbbtqc.html

================================================================================
来源：http://www.xuanzx.com/163pumfyllg.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163wxbmqses.html

================================================================================
来源：http://www.xuanzx.com/163hespfwye.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163wlnlqraw.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163uzulqoak.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163eaozqfjt.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163xyibkulp.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163zmsjiisn.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163qgmpcmfk.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163kwtlqqec.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163wbroqzsr.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163qareemvj.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163vxuoapfe.html

strlen(s)
来源：http://www.xuanzx.com/163twhyjvev.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163zoxpkeuh.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163nugjcodh.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163dprwpaqn.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163npxnvwhi.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163afpeziyv.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163tlidnuog.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163pacikjny.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163seabjqtr.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163rbvtfsdn.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163hutqcaik.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163jsdheyrx.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163mdaxrgwq.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163enahhrek.html

fclose(f);
来源：http://www.aibaodan.cn/163jjigkdlt.html

[S12] C：写文件
来源：http://www.sxryk.cn/163wjrldoqz.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163gcrovxrq.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163vmnlybfr.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163xetxeqdf.html

[S14] C：枚举
来源：http://www.sxryk.cn/163qcyayzzy.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163bfrhdykh.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163jktsxfon.html

(double) a / b
来源：http://www.aibaodan.cn/163wryihvbu.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163pqqlqwcb.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163shfrrukj.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163lcgbzddc.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163yzturscd.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163zfeivzcm.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163klkuzfpn.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163qltxhuwi.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163wzmxepsi.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163cqahscdi.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163hjynerwp.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163eyuoazjd.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163qufhswzy.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163nxhrfemw.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163wptiyfuu.html

[S23] C：随机数
来源：http://www.xuanzx.com/163yuezcpbj.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163woescoja.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163agaoxmfr.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163ddwpvjzn.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163pmkowtwh.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163byjfelkx.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163ouowthxq.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163rkovsmbn.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163gmhybedy.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163tvypgwvp.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163ngkkvkvk.html

static int counter = 0;
来源：http://www.sxryk.cn/163pwayhsvp.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163jbtsijet.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163oopptyqd.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163xkeixway.html


<!-- 参考信息 -->