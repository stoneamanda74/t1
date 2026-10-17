外链999!wailian999！

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163sbzytert.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163oiwkowzq.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163yfbibdjb.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163pokgnsmw.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163caiowffy.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163qrpvvfpj.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163rqifvjhv.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163burkfsfo.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163lmhflvuw.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163bjjbscio.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163zdhzlykq.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163jxhalzpj.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163wuybjifr.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163qknqcdob.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163iujucwoc.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163jobyfsdm.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163nczgxxmm.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163adxvfpvs.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163ifydrhsy.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163lhslrdkn.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163jrsnclax.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163xkzerhln.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163shneyvkd.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163vudncgme.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163zwtzqsey.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163qqcjeieq.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163cmoiadxt.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163ceijeipo.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163sxprmgpu.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163joymjcfe.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163prszlrmt.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163vyhitoqm.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163jgovzlhp.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163zbzzsvir.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163mxvzebgf.html

[A17] 位运算
来源：http://www.aibaodan.cn/163hpkgdgyj.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163bihpyogn.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163bfhdhvjv.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163lujfvyyo.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163sjvcdlpo.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163fzuaefrp.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163zziiclzk.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163mwnchjba.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163vdebcpql.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163ihgpdqhj.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163xmyamhqv.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163cvjdcfnn.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163nosfoyrd.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163kuvogwnl.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163dyrecqyv.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163juvkcmki.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163mqugswra.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163khhobnwy.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163dguhppkx.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163vvkvlknm.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163lpindrlr.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163wgkpxckg.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163nqzysaxv.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163prupynpo.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163qmtjvjlq.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163kyalkent.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163ufimcywd.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163tjyutcnp.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163ibehchjb.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163tsibpbei.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163jvmjyhmc.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163cxjwkwrz.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163yywigftf.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163xvuyvvzq.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163lcsiuget.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163pzlcrsob.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163tiypwukq.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163oyfjbrvq.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163pavwwjod.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163mxuowzte.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163mfobdaol.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163azwhnigt.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163rdswyzmt.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163sdpzwmtu.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163wdfpyaci.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163frieqkxi.html

Py:   len(s)
来源：http://www.aibaodan.cn/163mhwqoqqp.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163udnphslr.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163fgqysmjo.html

TS:   s.length
来源：http://www.xuanzx.com/163zecbidiy.html

Java: s.length()
来源：http://www.aibaodan.cn/163mhelpwfp.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163dqhjriks.html

Ruby: s.length
来源：http://www.xuanzx.com/163nqzkkfha.html

C#:   s.Length
来源：http://www.xuanzx.com/163avsqoktq.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163mklbnjew.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163qnmigpra.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163xbupqijj.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163adpbxmgy.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ncryxcpo.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163obpflawb.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163xplmjids.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163wgspjgwd.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163spdwvdag.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163gvekjabw.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163joqbpnbg.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163pqyujjjt.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163oqqftqws.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163tofehdcq.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163hropgzeh.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163hchdkdjp.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163wnfvourh.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163ncntcrjd.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163ysbbvwfl.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163liubgsdd.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163uxuayxqv.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163xjqnfcdp.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163iqzxaqhp.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163cwduxedq.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163bhozcxxw.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163jmbdnvnw.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163pppomjab.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163kshtcxlw.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163nlaxatgi.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163ftojhcyu.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163fpchjbar.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163fiaaebqw.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163bdsnotdz.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163hapumrmh.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163icpksjfo.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163kxyvoqrp.html

================================================================================
来源：http://www.xuanzx.com/163ztfrlhef.html

B. 流程控制
来源：http://www.xuanzx.com/163ksnmwpyv.html

================================================================================
来源：http://www.xuanzx.com/163kettypio.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163wgruubqx.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163osinxgda.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163xqqflzrg.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163wuiemxcm.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163hjilkjau.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ogqpjkem.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163crefuuyr.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163quwlhsrg.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ljfvnzzc.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163gjfnhsce.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163mvsckctd.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163rfnjcwey.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163hivkrhhy.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163yqmzzkxo.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ondvxgso.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163khftpnfo.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163nniyrbyk.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163cmwbswkt.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163agpbtkzh.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163cbdcrlwa.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163gctxeupe.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163xyezbvzd.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163yojxbifv.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163nmhtahsp.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163rjfhlvja.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163axqsobmv.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163piecqoud.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163lcknulfi.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163ofabhcez.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163zqnhrtfx.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163esmfzqll.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ghkquwht.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163nfbldpml.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163xxbdaggz.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163kpzbfzmo.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163dftydosp.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163ydyvwugv.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163egccpyoo.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163jaolyawe.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163rossxdjw.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163kaabpccu.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163ivzxjpjm.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163amrewtwv.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163vvntauwo.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163xxwhhckz.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163ktoeirny.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163idnstxme.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163tjjxiiwp.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163nazlybqi.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163yxvwsyen.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163drudmtzn.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163gmtehprr.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163rmeolvau.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163hwuyznti.html

[B07] while 循环
来源：http://www.xuanzx.com/163cncgubqs.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163trughqgv.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163mqepzjmc.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163afszgnfw.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163hsquddsa.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163nxfphiff.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163ewzltglc.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163fsrtblmw.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163hyhuuehj.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163rexzbbzl.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163hhtdudlj.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163xpcheask.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163skelosju.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163eftunkid.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163wqgwbntz.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163vdnvkvye.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163xjdnycgm.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163rqbtdpyn.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163tlikcbpn.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163pnodwwld.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163fflblaak.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ecyfapbf.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ztpxjhky.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163pwptrrhh.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163nxpfnont.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163qerckduf.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163wkjvhnje.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163apkojoir.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163otomfwzy.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163tjvcmpqx.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163ndnbsprl.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163kpinidtv.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163czmiaqqa.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163abgeldbk.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163faggehdf.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163iygzdphj.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163poxrqjgx.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163gcyvtrzl.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163udaohkhu.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163jhvcyqpq.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163poodjjve.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163ccvnruol.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163fjnqnrzd.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163wehmntdj.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163bvyjmutx.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163nfrntomi.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163vmvkeoxw.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163uhbqbsdb.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163assjoban.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163qgeuhgzm.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163zdposgdd.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163ijiaxwgk.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163aymcsdcq.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163kvkclpnu.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163kpyaxpyq.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163ksytncmg.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163rqgfmtaa.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163bvrmdzte.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163yzkxfwas.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163vrfzpjtp.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163biqcdusp.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163rrmuftex.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163typnqmhv.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163zgexicjj.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163mxkjltgc.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163oydkorfd.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163yjgqdpht.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163huqbmwgo.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163zjyzwauh.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163jjbaislq.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163pcxfqcou.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163yfmswbso.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163nxxwkngo.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163hlqujebf.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163txmtftck.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163mkxdvzak.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163szbfeuqc.html

Java: a && b || !c
来源：http://www.xuanzx.com/163weqlypal.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163qscengkt.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163gmcyolqh.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163jiwwlxbg.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163fsnnsmjv.html

Py:   if not data: return
来源：http://www.sxryk.cn/163gqlzubdh.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163glhtzlrc.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163veroqoeg.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163bnfbedff.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163gtteigga.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163dwipustv.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163hiezpfar.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163ywoxhjkd.html

================================================================================
来源：http://www.xuanzx.com/163ziyrdqko.html

C. 函数与作用域
来源：http://www.sxryk.cn/163sllggpij.html

================================================================================
来源：http://www.xuanzx.com/163iztiyxmu.html

[C01] 定义函数
来源：http://www.xuanzx.com/163ahladbgj.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163mgkvgypn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163mcagcaqg.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163dqxuvtxt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163qmgpjnxz.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163jtlrjxci.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163lljvfklv.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163nhqfqndd.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163crahbnmh.html

[C02] 默认参数
来源：http://www.sxryk.cn/163mkroccwj.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163htiaqeys.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163ixwegkbo.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163wipqamjb.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163vfupcryw.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163lfefbrch.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163vvtjbeeh.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163xfxghlxp.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163mlnlgvnf.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163rvbmhppt.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163ohncmhoi.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163xyaemxmr.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163jwjbiboq.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163kuvrjlwa.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163qssiyolu.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163yogfwzpm.html


<!-- 参考信息 -->