外链999!wailian999！

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163gishqhig.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163naaznhsr.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163zkycgzuw.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163btjkhqbj.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163uuuayoiv.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163lwoiqcsa.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163ybpvbeji.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163lrhsthfz.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163zmjfbjpu.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163ogpyimfs.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163bjxhwxhj.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163gnswnwch.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163ijukwzpv.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163cyzmhmzx.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163rjcbhxfi.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163qqdafsts.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163qscehwfh.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163hzjewvps.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ojtyqmse.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163umtdmmxw.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163tjwwkypq.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163bznbuuel.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163jhpiirbi.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163leeqnwyo.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163vaqcrlrj.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163kjyunkon.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163mwiuaqin.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163ppjqxbbf.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ryrwkxot.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163khwzwirr.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163vfwkeoig.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163dhlntvwx.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163esosvksi.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163awkkkxan.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163zpemyjnq.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163cpksdhyh.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163zxlusura.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163utstuffv.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163senotxai.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163evejkyvi.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163lnoufuae.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163ikqpfoek.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163comjzaiv.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163cchzpure.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163webuxiah.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163yhzaqzee.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163ezosgvtv.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163gvubdfrs.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163zgrtvrys.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163cjknphgf.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163wevguwkp.html

[A17] 位运算
来源：http://www.sxryk.cn/163nmflwveu.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163hesiydif.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163oozmseit.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163uyttugjl.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163mpfzqidb.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163weyltveh.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163dhqxwcxi.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163xkhxmyxl.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163fluecsxu.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163fliamcus.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163eritfqex.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163rbvkcszl.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163igitnfjp.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163ddjtcnil.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163kahxcove.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163vxarzoww.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163oneetlmn.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163oojfaune.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163qrdqkxsu.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163pwwakftz.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163ggczxstg.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163bxafyngv.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163bfrhbcqj.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163fvvzaimc.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163ilcrhgea.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163xyepqfxw.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163dkubtitk.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163mjxnamgs.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163hbrqnhkj.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163ioilonno.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163daerwwry.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163oexotisn.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163fntxoftb.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163oqugrqdw.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163lgwtvura.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163srjcqwsa.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163ezbljhrv.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163fuvvpxoo.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163dfvapkkb.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163pzhkpmul.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163ljsmosrv.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163qdwnmfmo.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ccncmmap.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163kiybbwih.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163xzzzowza.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163kkjwjhxh.html

Py:   len(s)
来源：http://www.sxryk.cn/163dhrveyiv.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163uecaokpv.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163uvmeesxu.html

TS:   s.length
来源：http://www.sxryk.cn/163ybvkbgtc.html

Java: s.length()
来源：http://www.xuanzx.com/163hyqrnmei.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163fxyslkzd.html

Ruby: s.length
来源：http://www.xuanzx.com/163zjwgkgzg.html

C#:   s.Length
来源：http://www.xuanzx.com/163lemffuwb.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163qkpjulij.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163jgyyetrz.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163bnhpuuqx.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163mjgbznaq.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ezziojfu.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ukeqfsce.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163onfvvucp.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163bjggirca.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163jfokgzzr.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163dadthhmq.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163ogflsvfq.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163bqfpvrmj.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163ohhowxbj.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163zrzqvqot.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163ddaxhgyv.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163biawtqob.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163gqyyftaf.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163hirzctex.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163lebaotep.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163aiyeeopr.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163nmapptbo.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163rnwttsqp.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163fgwytgeg.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163fiwvssli.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163fnfvtaei.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163jjrnydlq.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163hctefkne.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163wuhietla.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163moyctofb.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163ervosdch.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163rzvbylhl.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163pnoospny.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163gkrjslgr.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163qnkjsrii.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163rlrjdduv.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163bdqauksy.html

================================================================================
来源：http://www.xuanzx.com/163qoprqumv.html

B. 流程控制
来源：http://www.xuanzx.com/163voiovcgk.html

================================================================================
来源：http://www.xuanzx.com/163impxywyo.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163nfsmqjya.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163tcjoahbu.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163idzlcezy.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163myixykww.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163gnjrobtq.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163jwwclmqq.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163syxymfua.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163ananvhop.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163fjcqfpkd.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163dpxsocjg.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163zirmlazd.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163fbpdflwc.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163euhyclok.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163jfljawuv.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163jrmwipjb.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163jlkqqrdx.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163kjwbtfik.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163fboqnfme.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163vogbfihs.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163sdvqkehn.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163cqzcnpcl.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163cjcnrkjv.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163hlcojuxy.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163sqxcsixs.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163dmqjszfe.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163ulbbaver.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163ksldahdr.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163elwgwkiz.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163ihjozwrj.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163exqeqinm.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163iuldyims.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163cdlzimtd.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163auuwraaq.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163yamduikc.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163keofqntl.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163nysimxny.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163tqqieifr.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163wugityfr.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163uejmztgr.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163sefdtkhb.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163xwfakiig.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163dcpwguxh.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163ruqrtwga.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163axlmtcsh.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163yctjdtbx.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163eyojtgzz.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163pvynqpwu.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163iuixujbp.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163twnjmxky.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163eisccwzq.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163qlbisksn.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163vwrwgena.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163vtvuufyf.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163nyxnzktr.html

[B07] while 循环
来源：http://www.aibaodan.cn/163vtjcaybp.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163kfmmxhyw.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163nsbnsqid.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163kjiopyav.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163emgefmeb.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163kfdbjhay.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163bxvlryjy.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163ltjycukd.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163hazcfmkp.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163jtsqzwft.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163rsvznsoy.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163kpulmrdy.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163pzrjjmqd.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163xmnsnmgf.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163yzjmfetb.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163uzryeuaf.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163ewuwgxif.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163jryarare.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163zzbouemb.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163pxbwvfkw.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163itvuraxg.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163siqxpcck.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163pbblvtpl.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163bhggkzfl.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163crrunyfc.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163dnqecdvj.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163xlfhcqyb.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163pgbbjetv.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163stjmfusi.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163tqifunrs.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163xfruoxlj.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163izaorobg.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163xsdnznla.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163oxcacfrp.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163asmxitop.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163hvvshrmp.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163kxbdzhkp.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163nqixiboe.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163gzdxwqts.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163onwlodpx.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163gocacqiy.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163vbzysvvn.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163cnughpbd.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163mvjwbpsj.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163mrhsjbpp.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163fbwhfnfo.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163qhnylgwt.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163njwxffgb.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163vrpcysws.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163clnkolfe.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163tqokatbv.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163nstadwxg.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163xhmmaglj.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163gkfsawvs.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163zkasicna.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163nzwrblzv.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163minxjjbl.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163zadkcnpa.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163btbyqrcj.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163clyacqfy.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163vfkxdiiw.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163lixnbmdj.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163cdqwkaoc.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163gecdxipr.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163qjqivyjg.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163tnahetjg.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163rjyvzjpu.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163coycwxtz.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163atcokwxe.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163ndijltva.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163cwsctuwi.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163cecpnhjb.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163ucehksac.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163kzqgqoee.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163reeksisy.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163wdhntctv.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163tmuiephs.html

Java: a && b || !c
来源：http://www.sxryk.cn/163sccupkus.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163micdcjct.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163fjgfdymk.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163ulxzuetw.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163wmtikazg.html

Py:   if not data: return
来源：http://www.xuanzx.com/163lginyzjg.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163aasrzhrc.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163zgojipfi.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163rlozymsm.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163asytvlwg.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163popzboix.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163vpegfwlx.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163tkrzxbzd.html

================================================================================
来源：http://www.aibaodan.cn/163mwzzfram.html

C. 函数与作用域
来源：http://www.xuanzx.com/163sveggenp.html

================================================================================
来源：http://www.xuanzx.com/163rvwqjbjr.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163bscibjqp.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163vdfgkivo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163hnizbrzo.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163kakglwfp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163efifptgi.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163weeglsux.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163xbxhpvzc.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163uzagqsyg.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163avqeuhec.html


<!-- 参考信息 -->