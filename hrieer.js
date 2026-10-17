外链999!wailian999！

[Q65] 回滚事务
来源：http://www.xuanzx.com/163sznblgqw.html

ROLLBACK;
来源：http://www.xuanzx.com/163mavrzqfh.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163jldinvfo.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163erezvnef.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163jynicuwy.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163saxawrku.html

[Q68] 保存点
来源：http://www.sxryk.cn/163bguqvqkj.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163vxilijux.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163umtbxwbx.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163mfbrapvu.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163btbdrewt.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163udupgcvp.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163hfofxqrt.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163feaownyn.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163ftcgmrqw.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163awthjsyy.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163zqrcrano.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163tbquhvhv.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163jwddmexw.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163hukvcglm.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163pscjmcig.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163ylmhdqzs.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163jwlduevb.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163wzzupqce.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163bdqbsspg.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163eibjtbba.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163xflwofrb.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163wqqtlnpk.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163bdwhtioh.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163ubbdgede.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163jbjehovm.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163ymxwyfsm.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163tbisfgqg.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163ryordxrb.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163reqwfeza.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163hidwukdk.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163avggrixo.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163cxgjjapz.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163efpafglt.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163oiuzurex.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163bgpsiihx.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163bkruxmnv.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163fqwjcspk.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163ztivwryn.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163funuptcp.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163drsvxyod.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163peefhvie.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163zrfvvjnu.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163hrmqtiiy.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163geriefqn.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163hwdbfwzg.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163jwkffxtl.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163yvypmmxb.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163lfpnnami.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163ojicivqy.html

================================================================================
来源：http://www.aibaodan.cn/163nponeivv.html

R. Bash 专题
来源：http://www.aibaodan.cn/163bzvzpcpo.html

================================================================================
来源：http://www.aibaodan.cn/163hnxkevjh.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163vbwvmque.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163jlyepomd.html

set -euo pipefail
来源：http://www.xuanzx.com/163zsrrvwln.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163ibdlezzs.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163depgwqio.html

[R03] 只读变量
来源：http://www.sxryk.cn/163pogzaqti.html

readonly PI=3.14
来源：http://www.xuanzx.com/163acasjfzj.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163debfbwhu.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163tfoinwny.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163oiwncten.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163wfncogeh.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163nrfojspy.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163cqkzvjje.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163qfwqdbci.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163kwyluapl.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163lnrndhrs.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163lbevzptj.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163jypjucsb.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163srxmybfb.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163nihlumrd.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163hhtnfmtn.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163helvzitf.html

case "$1" in
来源：http://www.aibaodan.cn/163eqigppyw.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163xcpijrgz.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163nbdgeiis.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163lpghxkur.html

esac
来源：http://www.aibaodan.cn/163qmmvblqp.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163yjvjxmvi.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163jdvvlver.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163xmmhineu.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163kynaougm.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163zsfvthya.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163scvulklu.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163zypazzoa.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163wyuclpbn.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163sawzdiut.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163legzwnnf.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163qhpkjvus.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163xxpgaixd.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163euxtfmir.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163qjqnpdgi.html

[R19] 数组长度
来源：http://www.sxryk.cn/163cbzpscyl.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163urbbobds.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163ynbfzemn.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163gccwkiod.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163cmscharj.html

echo "${#s}"
来源：http://www.sxryk.cn/163ylkizhkr.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163morapmcy.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163puijmdum.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163fhhwulsk.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163cyyuxipe.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163mvijaijo.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163iwjknkad.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163lbbqclgp.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163wwtxrbja.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163lyndieye.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163xyxxqrhb.html

[R27] 算术展开
来源：http://www.xuanzx.com/163jusypjzs.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163qgvezmfj.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163qaprrjwj.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163uldcjfkm.html

[R29] 定义函数
来源：http://www.sxryk.cn/163ivbwhxxw.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163wgpkgbjj.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163dklhcogw.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163fzdxtyby.html

[R31] 局部变量
来源：http://www.xuanzx.com/163gsqbupdh.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163mvrgmcrg.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163fhwuwikt.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163yqxqgpdk.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163ktcexixs.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163oiayjker.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163ciruyaww.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163xcbosqke.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163nywblcxo.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163fkuohbvu.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163pfeldaez.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163strrxqjc.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163tltypmts.html

files=$(ls -1)
来源：http://www.sxryk.cn/163wvrbafjs.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163arweqkbg.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163aovbqfuj.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163poyvcbrb.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163gemaekzy.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163mcgdtfoc.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163qwacrrff.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163hqolplhc.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163wsadvunz.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163srntafgb.html

wc -l < a.txt
来源：http://www.xuanzx.com/163drirowin.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163yizglidi.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163xnjbqrgp.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163mrtpqiyg.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163dpwebhov.html

[R45] 批量删除
来源：http://www.sxryk.cn/163becwkkcz.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163ydxeubxl.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163rnckcqpo.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163kvnzmpwb.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163iergerrr.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163hplmjkvn.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163yfuhdsny.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163vetbypvi.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163huamsvmy.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163gwmezbnl.html

[R50] awk 求和
来源：http://www.sxryk.cn/163uflixeuq.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163mviyfotz.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163iaifcvyi.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163zunlvqkv.html

[R52] 统计行数
来源：http://www.sxryk.cn/163gzcuntks.html

wc -l a.txt
来源：http://www.sxryk.cn/163tinunajl.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163gzrpmsbr.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163modmppcu.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163suypgaxc.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163xvwalmsa.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163qmzafnsh.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163nskhonhd.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163ntchwhbi.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163lcaodcge.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163ugelbpou.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163vttycwtz.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163annkhhma.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163tpsrzmdv.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163xljizouk.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163jsoubzaj.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163qqhmhenl.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163cohyflsc.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163rmafmkwh.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163mmdgzzql.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163rwkgzlce.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163tgqmjejz.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163yctdjyic.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163kauiihkw.html

[R64] 结束进程
来源：http://www.sxryk.cn/163zfizorju.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163sjklogic.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163cpmxudhz.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163psrfflek.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163obtirrpw.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163ibegnvhc.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163fuazujjr.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163iltkwtrv.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163wbacssce.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163sqvghjcf.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163emrbrcxm.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163nqcjgygh.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163smqdmmyw.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163phiyucpm.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163enduafeg.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163zyxmauwi.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163nnidqdkl.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163zdxhskom.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163nungjvew.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163dtbjzohe.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163ljiuizfq.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163ruwsfbzi.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163gwxtapum.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163eiaaszzi.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163jgeceplq.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163kqmfxbzo.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163gvyzqgxv.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163qczwbnwv.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163mqvxcrrv.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163lmtrizad.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163rpjczgce.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163jcgriger.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163vahtmaiw.html

time ./run.sh
来源：http://www.xuanzx.com/163fuhziuhl.html

================================================================================
来源：http://www.aibaodan.cn/163akphyeqk.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163dicozjjw.html

================================================================================
来源：http://www.aibaodan.cn/163solphwmc.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163cihetkaq.html

#include <stdio.h>
来源：http://www.sxryk.cn/163xfjwecxr.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163ajcowcsv.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163mapcfeey.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163hboyozvn.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163ceyhtdkd.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163vpcbzefk.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163zrxqzchr.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163xbrhxvuh.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163wwnltyyi.html

strlen(s)
来源：http://www.sxryk.cn/163bhjoajkn.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163ovnashbt.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163sgpvewuz.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163yslwjadq.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163qkryrcac.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163sjwwsldm.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163puoefjfd.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163dyxdbnvu.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163ieyaoqmh.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163txfbgopb.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163yzlmksik.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163eqyqeghs.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163syzllznh.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163utovfbzz.html

fclose(f);
来源：http://www.xuanzx.com/163ubtkzwkj.html

[S12] C：写文件
来源：http://www.sxryk.cn/163zajbgifa.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163rcrnmxmc.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163unxwvril.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163xzdifghe.html

[S14] C：枚举
来源：http://www.sxryk.cn/163cmwoaalz.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163jxewnymy.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ygiziwgf.html

(double) a / b
来源：http://www.xuanzx.com/163wstrvztq.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163jpudogtu.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163eluszeyq.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163cogoqfdd.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163szficxcc.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163vxerftnw.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163tezsndwn.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163bdvisvaq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163plrhxlnk.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163wygbiabm.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163euzczdqc.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163pktcwcip.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163okrbyglp.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163kipimuxn.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163bjnjfdrs.html

[S23] C：随机数
来源：http://www.sxryk.cn/163mgvepvfd.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163avzjfwmz.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163igjievux.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163rxhwknyq.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163oujronvx.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163zubyqinm.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163rrrlbzfd.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163pcgrcqwa.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163sjbtdgzc.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163ttkwarky.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163dnxswtgf.html

static int counter = 0;
来源：http://www.sxryk.cn/163vyeqhqbh.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163xnvtihsm.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163nkqozaqz.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163mrqxgwbe.html

#ifndef X_H
来源：http://www.xuanzx.com/163qbwbsksd.html

#define X_H
来源：http://www.xuanzx.com/163eakqobra.html

#endif
来源：http://www.aibaodan.cn/163qwoqivnn.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163uofjtgnr.html

#include <iostream>
来源：http://www.sxryk.cn/163qxaxyrev.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163zrbdslco.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163ftqnbjuc.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163fohtpldn.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163gwqempri.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163mklscrjx.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163summfzvf.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163xvedqhln.html


<!-- 参考信息 -->