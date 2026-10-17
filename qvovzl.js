外链999!wailian999！

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163qsxqnnpo.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163ukcnawyd.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163vjrxwlfr.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163gyeijxge.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ckryodnh.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163riqfodnp.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ojhbkhqu.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163kwgdfcwk.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163nucvfbrs.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163zaaeyoig.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163pobdouqo.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163uviobjpk.html

[A14] 注释写法
来源：http://www.xuanzx.com/163ztyqeekw.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163vgapppkv.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163jcpotpxd.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163nsryemew.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163wyoacesr.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163lhxbfwvd.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163kaiaduoa.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163lmeytuse.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163dfqsshaj.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163zorjkvit.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163yyuoxcit.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163pmcrufmd.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163fxtvbktn.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163iyjoczol.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163vngqhwfd.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163uzeuzhda.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163bbssthrr.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163ecyrdssc.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163sutzkhfo.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163gvpoltiu.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163mgiaihap.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163sxnwiuyn.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163pdzlvauz.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163pwrjjyco.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163afovvlaj.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163szsrocdh.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163dtiqmtuq.html

[A17] 位运算
来源：http://www.sxryk.cn/163bkrhxmgt.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163mzfavxze.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163baiwykec.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163qngxhcqe.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163dyxlufzd.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163syooqxvz.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163upqatcwq.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163bucbksiv.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163poswfxxs.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163qbsmzsst.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163fxecoxer.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163exqtszyw.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163hqnhltbm.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163qlhnrqnk.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163pzihnzoo.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163zssmnziy.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163psytwowe.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163vkrdxxyn.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163sqmjttox.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163mbsdknlk.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163wemymwta.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163tkfdfvaf.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163magbdgze.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163ubupomhy.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163zpuhbhiv.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163nbyebtea.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163ggghamdg.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163ururhdav.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163tboryhyp.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163yfhuhfie.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163lvaioxey.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163uwgfpbsv.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163wjvhtjpf.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163feuhhgtu.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163wnlfutlu.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163qtwajttb.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163iwnzulxq.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163nvpikyez.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163zhufnixv.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163wwdupjei.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163iquxbjac.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163qukhsljg.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163tkkulxpr.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163funlazao.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163kwswdpwt.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163vxqengrt.html

Py:   len(s)
来源：http://www.sxryk.cn/163kxiocayh.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163sifgveqz.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163lnelmmvl.html

TS:   s.length
来源：http://www.xuanzx.com/163diiuklcq.html

Java: s.length()
来源：http://www.xuanzx.com/163nvlgcukk.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163lvmlkxwm.html

Ruby: s.length
来源：http://www.aibaodan.cn/163gwlrjstn.html

C#:   s.Length
来源：http://www.sxryk.cn/163zfdpxwog.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163tqtgxqkr.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163gondypex.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163gktsveok.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163voklapdm.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163nujahmyt.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163wcwvhxtx.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163fiiyczqf.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163zvoctgyk.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163cefcjijk.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163jevjvted.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163uovrshyy.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163weiskhmo.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163eptvuraq.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163dircicqr.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163iogvgfyz.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163gcxeubto.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163qqnwinpa.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163pjfwrqaq.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163jdmnxpus.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163enfnnukt.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163rxamnmgs.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163rwvbravh.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163sivsggxj.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163vmilebpv.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163ebltrrqy.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163dumvtgni.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163wfvjbili.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163ypflvqfg.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163levcuucw.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163sliwjjmb.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163lymzrmgo.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163lewzgtlz.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163xofcnfqi.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163qvuvsuvu.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163kzmrruqm.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163marhtjms.html

================================================================================
来源：http://www.sxryk.cn/163ygjtgsya.html

B. 流程控制
来源：http://www.aibaodan.cn/163dueagfgt.html

================================================================================
来源：http://www.aibaodan.cn/163iucoiqou.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163dhufwyup.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163rcbkchwy.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163fwaytglu.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163yulwvrva.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163emdromcw.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163moeijtpg.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163xzypncvx.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163orfovulp.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163lerkoipb.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163plxgrulr.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163ukxfdqgh.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163jbmfojnv.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163sfwphkaa.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163jstaotob.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163vofzwbxa.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163vnkaoezm.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163dweipoll.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163gxsqncna.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163mrpxmvfc.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163zamzqbaw.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163xlooxlud.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163vznkblpl.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163toqxhxrl.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163aqwgnsqz.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163qezmotgq.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163tfphmhlw.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163kgayqimo.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163wkxrsfvf.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163zqxqhvnq.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163iivrjgib.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163gtfsbnik.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163jjyvtsfo.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163sflulaod.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163vxbmbnmc.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163xuhwhyyg.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163tuhifqls.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163orruyqpe.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163nnazqrli.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163xtpivadx.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163nhpeqfvf.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163dzkvjndh.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163bwgsdfjq.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163togyjloz.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163afumuwch.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163olpizswd.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163fjkmpede.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163dmaydtpq.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163qsojydfv.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163zpomveme.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163eeosqjdd.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163mlprwsfz.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163hvlnjtug.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163vofpsztd.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163rwkbwoxq.html

[B07] while 循环
来源：http://www.xuanzx.com/163rcjpzbhd.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163dijgovbu.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163mchgdkzc.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163enrkyugd.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zauekzdb.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163lfzaqptl.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163mlxypniu.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163zsvxmanh.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163yqewffnq.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163egujxyxa.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163azriqtpt.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163acipoezv.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ansrkxog.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163nanpxyna.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163rcheetnj.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163vbqurocc.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163cpwingbg.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163fieueubb.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163ovrhysgs.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163ylqyuzyw.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163vbsuxitw.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163tbsliihv.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163mfjwtqhs.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163exjcldzg.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163kqgczltw.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163holwxfkz.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163munrhafn.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163dgxtfkwl.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163beclkyhy.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163rsjjnuar.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163ltcurohw.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163jfqwyhkt.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163zvvqxuvi.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163ocquklsk.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163fffwnoph.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163ggibhyds.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163hgthcaqg.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163mkmmdlsr.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163apscrmav.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163xycunewa.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163hgvrobug.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163jkzjqaxx.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163yquqkgtz.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163htipctwd.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163utjiinqe.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163gixrvziy.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163badepxpv.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163yjyprhoh.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163qrvzxhhl.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163hoeonphk.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163vnixxjri.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163rfrkysld.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163dhcrfruk.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163bwyrtbag.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163cxoavobl.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163ovckzywz.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163civholbs.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163oeocwkdc.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163iqhsvrsa.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163ueegabrt.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163wfxadrpq.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163nrfoiokj.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163kgrtrisj.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163glvfgrzg.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163tskdixhp.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163nvitjyup.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ugxmspjj.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163obmkqopj.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163lwtidtrm.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163efpgkkmm.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163sadntpxz.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163yefmfjlb.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163rljbwvlr.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163earhawhm.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163muhgmiyj.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163cwkubfnu.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163jarepfvp.html

Java: a && b || !c
来源：http://www.sxryk.cn/163eybecxsl.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163kznxcpuk.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163ymuhgcai.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163fgspwffi.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163vpvuseak.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163fxgdamme.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163meintywm.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163hpmwzaaj.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163jxxbvjkn.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163uqptfffl.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163ebraqytx.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163fppgwftm.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163uoamwjjv.html

================================================================================
来源：http://www.aibaodan.cn/163jaawqkpc.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163vchsdriy.html

================================================================================
来源：http://www.xuanzx.com/163gkvtdlsb.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163qalqddzk.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163ubzuwwbw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163xlgxvpxn.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163hhixxxqm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163mjqowwil.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163yhszerpa.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163eovazemn.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163kqhwwohy.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163cecmfgbn.html

[C02] 默认参数
来源：http://www.sxryk.cn/163tvpfzzzg.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163dopiesvg.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163wvheqiqu.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163xxpqhsol.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163ojuomwky.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163yphfhumg.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163dvicwbfp.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163abdacixa.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163xxtrztve.html

[C03] 可变参数
来源：http://www.sxryk.cn/163sxjdrynp.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163luscmlft.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163jdcsksed.html


<!-- 参考信息 -->