外链999!wailian999！

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163junomday.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163twbuelkh.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ffyibqvx.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163aooylidy.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163lvqbmlbt.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163iejlawnj.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163evowwpwb.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163txpfcqlm.html

[A14] 注释写法
来源：http://www.xuanzx.com/163gqxzhnaw.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163uydtssve.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163dildtfko.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163meupkdug.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163zpacbprr.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163sffsbhth.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163czvlqrxa.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163opyoxmbf.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163zvfuhldi.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163fgkuxugr.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163hsaedhlz.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163udssbkia.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163vxxevied.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163lwjzjxse.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163mvinlwbc.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163kdcdyebc.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163nhbwceri.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163jtqcnzkk.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163wkxlegyx.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163iapdpont.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163ahebgiri.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163cqewdmfh.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163fzyqhhnz.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163hayfinrw.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163azteuxxb.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163dbzejgnh.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163uokowzgv.html

[A17] 位运算
来源：http://www.xuanzx.com/163ezpgwhtb.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163gbwdjnbt.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163vpuukqyq.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163xdhxfals.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163dohmofez.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ovljwopx.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163fqftcnsi.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163nsljvxxm.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163zgpxvwqy.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163xikpuays.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163cseultee.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163gattuigx.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163hfqrwmcl.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163dvbundlj.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163giufhexc.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163bnvcxuml.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163fjlaopft.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163lqblpnxu.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163hjuimmiw.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163dggyhiji.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163wvizorct.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163xurwnhnr.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163pqrudfwj.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163ybicnbnv.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163cpjsktsx.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163zxhccyge.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163klaofouv.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163tjofkxvz.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163rxswkkjl.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163kjsmumxf.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163lvuzfhdl.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163dfcxtxzh.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163inpvwlzc.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163xwmkmbyx.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163fjwuajfd.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163dccyhsoq.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163epgvwcbt.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163vceqceup.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163kffwhtbc.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163ndabqjgz.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163nzeotlgd.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163plpsciel.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163vywjxeuu.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163dcwrepcy.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163bawlfhlq.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163jfzmexqm.html

Py:   len(s)
来源：http://www.sxryk.cn/163fustmtcs.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163fzuawqxx.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163emvijkjx.html

TS:   s.length
来源：http://www.aibaodan.cn/163jkfuryry.html

Java: s.length()
来源：http://www.sxryk.cn/163tnrpyhkg.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163riwreemo.html

Ruby: s.length
来源：http://www.xuanzx.com/163okgmjgml.html

C#:   s.Length
来源：http://www.sxryk.cn/163gpoccceh.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163lfiijrcq.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163vgmxcoae.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163axyirfcc.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163tcsnqybi.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163blviqmib.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163rapndbbq.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163sotxokwr.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163qrfdbbwe.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163ybrsbkch.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163vuqbmuhy.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163avchgqdo.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163rbqurqap.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163jjslwsuq.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163mhmsgwjj.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163jpvweoaq.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163paipyvpu.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163dbhyeobe.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163csmqyila.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163rnajeasu.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163opqotida.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163katoppon.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163nwahzugf.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163ncvrlxby.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163dtjezmwy.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163hrojpigf.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163urkhlkgw.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163jaizgyda.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163brffzepm.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163dbkpzdco.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163rjqrufkh.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163svitjfol.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163gawllury.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163kuoeceza.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163vvpfxinx.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163mwpqczdl.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163rvrosalp.html

================================================================================
来源：http://www.xuanzx.com/163xcnfkkus.html

B. 流程控制
来源：http://www.sxryk.cn/163yncubdkn.html

================================================================================
来源：http://www.sxryk.cn/163xjfjcizv.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163jevhlhtn.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163gczhsdna.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163qvpyybvn.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163qmzcbwab.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163crpcxfhx.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163wmxphyxq.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163xtdukiiq.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163uispvzww.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163fvebmaps.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163ootugtfw.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163vwfoqzmj.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163klqywpzx.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163wwxoewzq.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163hkqyxuyc.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163atoqsypp.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163fobqmtpj.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163gmmexjrm.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163gerhhcuh.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163sufzblmx.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163oesvunqd.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163tvgwjlcd.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163jlgjadkw.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163tmeqnehq.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163mjyzxhxe.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163thypgkat.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163tsuauugc.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163ivhvbeku.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163euxmqact.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163iwuumbde.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163gspwcebh.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163adquhxbf.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163pgjaogdd.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163snfnqqfi.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163vqchpfiw.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163drrrkkhw.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163sampmrmw.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163yqwxaehf.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163ahofcing.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163jbtebawp.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163bksuzqbd.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163xollugpn.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163finvspwr.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163dgkdnluy.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163umbuelkg.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163eqanwhrd.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163xnigcskn.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163xxbqyuuj.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163zvldisgm.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163xnrqwmza.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163hxvnrise.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163yrnkgoty.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163afitozhf.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163auiboyuf.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163axakgjqp.html

[B07] while 循环
来源：http://www.sxryk.cn/163teqngcbi.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163haqzmfpu.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163dhgpqftp.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163eqymynil.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ikmqifot.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ebpabioq.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163dlpczjam.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163jfltrfrc.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163bygigwzq.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163xnhpqiju.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163tmaxfrsd.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163vomlmeaw.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jkktdzjm.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163tajxiaui.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163uiilltpj.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163jupawcpt.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163myivfohp.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163igcntdfd.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163rwzrruif.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163homhkjui.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163ucxnidcn.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163xqgjuamw.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163xknnltae.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163pibvhpys.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163ktvwgivx.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163obkjvefo.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163zhyixtuy.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163hfdyoppk.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163xolencjv.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163blqmafnh.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163vulumbez.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163ffvxyqpt.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163tvkmsnel.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163flfiufza.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163uwwnvqvz.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163fiicnmmr.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163wzegbjaw.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163bmpflroi.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163tsgdrdkw.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163etaapnrp.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163vsuvurli.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163asyrfqwl.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163vtrhphwh.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163jcqwyoap.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163vqtpjvrq.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163macnmtur.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163ruxrqbay.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163ezrrvdkt.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163gffhgxcc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163nmfzhypd.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163fdnmvpup.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163erncqijl.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163gzxflghy.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163vjleadwd.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163umwposrh.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163ijtlgahk.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163nstfxuwo.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ujzigjdl.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163cqfgjqup.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163qvymwgxf.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163jexcxibe.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163wugdvjet.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163xfyihoal.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163auevbagu.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163evllkpaa.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163enoismiw.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163kbnorgvg.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163evchkhls.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163icanlmnx.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163buktkekv.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163gnbaqejb.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163wgzzutsf.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163cwsstyog.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163sybdpdir.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163szzzbbdg.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163esegualj.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163jcfpuypn.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163xdelyash.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163wppriwbr.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163iawpugct.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163dsbvwbab.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163bednuvqw.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163ouayrulr.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163prasxxwg.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163nsgbvlrj.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163cwqihcfw.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163wxjbktkb.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163hjlogjfu.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163uqgtwipz.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163ainomqsa.html

================================================================================
来源：http://www.xuanzx.com/163txvfobip.html

C. 函数与作用域
来源：http://www.xuanzx.com/163ybjupgxo.html

================================================================================
来源：http://www.xuanzx.com/163falelebp.html

[C01] 定义函数
来源：http://www.xuanzx.com/163jnrjozyp.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163ndlhbkqc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163vbmysiij.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163rsessuaa.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163qeaupnsu.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163kyevirzz.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163bddjcrvk.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163tfdmjgev.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163hysxrzwa.html

[C02] 默认参数
来源：http://www.xuanzx.com/163xegljjpv.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163vingnunf.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163bwzlmwaz.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163ctrfvoie.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163wbwcguqp.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163uwuydegr.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163tlgzyoia.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163vlucwiub.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163yplcbyer.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163wflkttus.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163qjhldxcg.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163dthrwdrf.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163mnuxlnsb.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163yfyrdehm.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163efubvyds.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163jyzpnqei.html


<!-- 参考信息 -->