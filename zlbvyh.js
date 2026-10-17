外链999!wailian999！

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163qmyvzrel.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163bakbwefk.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163prpabvdo.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163dlwpbldp.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163rmijyohl.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163jfiioxbq.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163kvxpiyfo.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163plvtksrg.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163qksznflg.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163jkowvrdy.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163snshucng.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163oghwdwni.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163gnpiivgj.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163iyjuzbfy.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163ydqbeake.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163kvmtncum.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163pqglxwnp.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163toznljsv.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163exfgrnzp.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163rvibpjds.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163iydvnsdu.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163atcitadl.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163wchguyjw.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163hucfwrrx.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163casdeppq.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163qhgyktfy.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163hcsoyuhk.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163kabbofty.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163xxtkrgct.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163ptwstkwg.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163znwoydio.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163ymppddsn.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163pvrafvry.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163cwmbwnnx.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163gvgjmpcw.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163sunmkiwt.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163croowyty.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163cbzxysky.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163evhcypzh.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163hdjbwrhn.html

[A14] 注释写法
来源：http://www.sxryk.cn/163vkcylmuy.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163qghyjpqd.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163gvrsrmlv.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163ipvdqfxt.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163qyvbclbc.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163mlrgdsxc.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163yjnyhzjj.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163jrvlzkmf.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163whhlxvpn.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163qazjaoye.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163moixxfsl.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163ynkynoru.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163iumfpvhk.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163xtxcveta.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163mzoodfyh.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163kbqgskkh.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163bmmbqyip.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163yenvlnze.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163zslcaygg.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163detcvkqv.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163vhhftipd.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163hhjrprvp.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163hngpprkj.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163glgsffus.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163diblmwie.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163ovmnpjbv.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163gytxlwxe.html

[A17] 位运算
来源：http://www.aibaodan.cn/163hlhdqcih.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163tvelmmok.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163iormqycp.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ufjfvqtp.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163depzqrxw.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163qxlnbfbr.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163sfpujexu.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163tlwqrbio.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163aqhqewwu.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163rfpthkld.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163whpnqquh.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163avbjfeft.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163juldfoyf.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163aheldkoa.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163jladdsxz.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163lowfcvpi.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163wllnwsub.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163jgvqqeqj.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163nadgjndd.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163wsemoctz.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163okkcagfx.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163lgkmvmhl.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163qmyqtsil.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163bbedlifg.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163kmmseiov.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163imewijwn.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163ndkgladi.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163qitiztss.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163vkovxwke.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163zjpfjrbl.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163ijbnnctt.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163qthvcswy.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163bcmfxtkx.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163dfuubhqe.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163wznpzacb.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163utarsbwa.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163gikjrzgi.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163rhzllgnd.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163lzigydxs.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163gbhsiivt.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163hfvolfnd.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163sdijvupx.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163cohxnzti.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ndezmvfs.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163peimqnej.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163lqogbwpv.html

Py:   len(s)
来源：http://www.aibaodan.cn/163xdntlfto.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163kxpxqwxn.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163oeoqkzoi.html

TS:   s.length
来源：http://www.xuanzx.com/163ufebivxz.html

Java: s.length()
来源：http://www.xuanzx.com/163mwypiuyg.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163ahpqcgxd.html

Ruby: s.length
来源：http://www.sxryk.cn/163zxjvlotq.html

C#:   s.Length
来源：http://www.aibaodan.cn/163cviwlwvb.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163mpvimxtr.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163fcnnjbom.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163bkwyddzv.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163xkaucbtr.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163hwzfemre.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163nozpfmgo.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163gbffwvna.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163lddulnjt.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163twzdlyxa.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163ndxesleb.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163jcgxiscf.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163ebgnqswp.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163ghfmysea.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163akpacbjn.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163sztmcdsl.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163jtmgtwug.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163fzzwuuyj.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163tempwlaj.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163sazowmqn.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163ptppojzj.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163dcowjeup.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163jbzzcffh.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ozgnngpr.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163dshuouop.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163kyupxvvn.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163qfhnwkme.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163vfxacxwd.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163rvukkdsg.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163hgkxujcs.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163tcbwrlrs.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163yknjrjjn.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163sypqpvxq.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163lmumowwg.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163stfuggqt.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163iixkvgft.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163enwuajkn.html

================================================================================
来源：http://www.aibaodan.cn/163emqrvcjt.html

B. 流程控制
来源：http://www.aibaodan.cn/163metfvasi.html

================================================================================
来源：http://www.aibaodan.cn/163qtuqcfdj.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163onvaztnm.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163iujrpegy.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163vtazpfgj.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163xvaqbpfm.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163fbgbqklb.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163gvviclay.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163efcbzuvy.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163iorfpaku.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163mleoijlu.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163snzypnyy.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163atyqlzhs.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163niqgddvx.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163zffuardb.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163xpzqllkb.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ticxfziz.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163myvhmiks.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163yhfzjhgd.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163oyjaaimg.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163atwojyog.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163iycudcle.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163vvnxswea.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163iigzatbd.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163pddklwhs.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163tnnzpfex.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163jtgomfxh.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163htzeqlab.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163pvgugesg.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163aufknflf.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163cinmpzhg.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163piezgpzv.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163jmllswvn.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163kmameimp.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163ewoafsqb.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163epcfujdp.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163fnnbpwur.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163qxvbddpk.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163ukqvrhfs.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163hirjbtuk.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163xkzydpkv.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ctatenzy.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163grwmoofc.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163ndmmbbhz.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163blxptkqg.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163vgvwebry.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163jpzfhfzs.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163pyqmwxyx.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163gxgnsyqp.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163slotalha.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163lqjaugaf.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163osdltera.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163eyueykoe.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163kpjyqsqv.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163juaobggv.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163rsgbpmbm.html

[B07] while 循环
来源：http://www.xuanzx.com/163dzvagrny.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163anknaycd.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163sbboqogg.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163fpnbrcpl.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163kemxnikq.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ldjfowgx.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163uuqjujch.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163brmwykeb.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163afnvvpvm.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163bomvpisb.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163zolofbor.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163ndvpqoyz.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163oumbxhrp.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163wqqzhebi.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163acrnsyyh.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163iqoggjir.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163yfwildno.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163kpzexogw.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163cfwqfaex.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163gcsnrrna.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163fxippkpp.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163kqdfdzzg.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163eksraevv.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163nkakxwpp.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163twhltxrx.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163onwbugsr.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163eadyokqn.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163ciwhymru.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163horzujbx.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163gmwwgibw.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163sfnveftj.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163cszvooyt.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163bpjgxvdr.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163nhvsvthw.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163gbxnkfwx.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163xmbdlycj.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163numgxreg.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163whsmszkc.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163kmrftsnv.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163cjhzqubx.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163mmufjazy.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163dixjqodu.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163fyfgawgh.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163ursavppo.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163dsqpmurs.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163wyxvqlor.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163rkrlhibv.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163kbrfkzzx.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ynyltyxi.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163vnyqmcyv.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163idzdrnts.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163vmhtlogz.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163wtdbmvas.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163gjcptyef.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163tfmpsvre.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163xkykwecz.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163cxeynetv.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163jlvtpwph.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163erfvooqv.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163jfzdgqnt.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163kpkjlvct.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163eghjoolj.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163onmjxgbr.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163qjednkuc.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163ejadvgqi.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163cwebkwhl.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163lmyzikgl.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163zunfbmdw.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163uggrlwex.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163pxpynqea.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163aquzbypp.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163zatazlbh.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163kgnstprh.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163bgkojtlu.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163zhjjyiok.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163vmhjtcgf.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163cpknonll.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163hstpkell.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163ejmxyzhf.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163yptsgirv.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163rhbxnoby.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163irgmggcj.html

Py:   if not data: return
来源：http://www.sxryk.cn/163kvhqjtbu.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163lrjnnoyb.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163emuaniae.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163nhsgmnsz.html


<!-- 参考信息 -->