外链999!wailian999！

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163fnhzpdnj.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163defpuzev.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163nimbijnr.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163ljgzgvat.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163rbpbszhs.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163klwxrzhb.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163qjckrzqj.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163pbjwexhi.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163jjdbkskc.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163jmwwrvsx.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163slqkzwgb.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163botqzplv.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163gfzoovdt.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163obwkpzmn.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163uutooqcj.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163tmzurphl.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163jrcvzyhr.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163qljqzhmv.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163lfnhjjnw.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163vuxsgsfd.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163gvaurjzu.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163pexqvvwm.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163xyytqvuj.html

[A17] 位运算
来源：http://www.sxryk.cn/163dhofwcgt.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163nybiwnkr.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163dwknudig.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163wnsdogfc.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163gtsteiri.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ilesgsuw.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163jruyqtka.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163pdbtcrsy.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163dhbqtpnx.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163bjmnoynp.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163cmymjnom.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163xzwoaygs.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163lpodqaec.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163etrnrtoo.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163flyrcsds.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163tztbezzy.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163uuetgopc.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163fizvumjc.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163kvclzkli.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163ksbnwxlb.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163cukzjjum.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163tduislfx.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163qmqynion.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163fkdcwulv.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163dbsifcsr.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163yajpuqvm.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163ztfcgvsq.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163kbqpdpwk.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163ghyyjmsk.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163jjfdufpt.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163qevvhprd.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163gaihkdoz.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163ztxgubqy.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163vaxuwnjo.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163craljgld.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163insernjq.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163nezxgrwe.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163gnwpywso.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163kickrlsu.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163bjlwkxlm.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163pcplyvei.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163cjxigggl.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163cqglzhsx.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163qmetbopp.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163sakzfrrj.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163pzdtnjdo.html

Py:   len(s)
来源：http://www.sxryk.cn/163eaqgbmro.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163kuhhxzlb.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163ljuhvpmb.html

TS:   s.length
来源：http://www.aibaodan.cn/163beojxmqe.html

Java: s.length()
来源：http://www.sxryk.cn/163fczwnyhp.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163etvrcqzz.html

Ruby: s.length
来源：http://www.xuanzx.com/163xdcozyky.html

C#:   s.Length
来源：http://www.sxryk.cn/163ryapftcn.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163kphhmcpm.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163nwamlsee.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163wyfabakq.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ilvhrquw.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163iipcnkte.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163knjuaota.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163cxbrcdvp.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163cquppscg.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163jopooccd.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163yfsblsyt.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163tpwacnio.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163xciubvmw.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163gxbwicxn.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163pqepkumh.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163xlvufogg.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163rzhydukh.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163vtrdvmjf.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163jlonvyhg.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163clearaxi.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163laiqpuff.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163cavklqjh.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163mefbjsxv.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163pcpewigm.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163qytdshkt.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163mtsdbvph.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163lxphcvni.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163pkazxkkm.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163moiktdkc.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163rzchmnec.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163uttlgxmr.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163amklwbjw.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163itazybht.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163ebcerbze.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163vbhchqcl.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163eiggzunh.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163xoeogmgk.html

================================================================================
来源：http://www.sxryk.cn/163efhjadyc.html

B. 流程控制
来源：http://www.xuanzx.com/163oynmrvxk.html

================================================================================
来源：http://www.xuanzx.com/163lwororjl.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163bdaechja.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163iwuresdn.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163gpwrkgzu.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163femtsoga.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163pstoemal.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163xddqmnvl.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163piknbnet.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163uiawitqn.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163znnuajer.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163eiedndya.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163ehhxpxbm.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163xqiemcvj.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163rrtkyaxf.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163bhlztjui.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163xyndvdrp.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163qqlvtake.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163evqfunyv.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163mvsjqfne.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163epkgzawg.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163aiyaliaw.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163vowajlvi.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163qjdmnctn.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163dlnnldic.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163biyipplj.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163hwgipqfy.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163sszwjibt.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163tmrkwsxu.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163ebjemffl.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163ftufzegw.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163rjamkjvt.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163agrvorgq.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163guowytcl.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163hgwwjbzd.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163rgplejkv.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163owwzphit.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163eyjcxvzy.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163lqqdrofd.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163otwoypxu.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163yqsrzjov.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163hrbsgfvc.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163dohourwd.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163prjliddv.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163tkgsboua.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163pxdjegge.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163mfdlgchq.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163vhscpksd.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163zfesycug.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163cophlsod.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163xohknbhk.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ysizlxbu.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163xjamiooc.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163tkmflsnm.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163fyinirgk.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163wqgbozja.html

[B07] while 循环
来源：http://www.xuanzx.com/163cvoyvjca.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163gshxzkba.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163ytxpnjse.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163oppzqfiy.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163bqdbvkcf.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163rzfblbsh.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163tqeqvuol.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163eoazncyw.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163omnajtyl.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163aamktgak.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163qieogxyo.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163akhfbkjb.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163rdbkkxvy.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163cibjcbby.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ytgwauml.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163hdrzctzx.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163ykxtmzxy.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163vslbvbxq.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163hahwgaon.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163ltxuknwl.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163tshtatqv.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163wnxsotpu.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163umkhqzes.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163rdexpcts.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163gxlckmrm.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163crewjnqu.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ezrdcqas.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163werlwjxs.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163pnaouetq.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163bubhzxby.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163btaagwwm.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163trzyqdxg.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163ksszobwj.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163cyrtzkvo.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163biylqlch.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163bozeswqb.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163zpodzxod.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163kwwnrxdu.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163dofdreaz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163futwbkbt.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163zoohaxku.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163sdihaodw.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163kyzwxagc.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163enlccsdk.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163jteftsbg.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163obcferum.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163kprtccxh.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163vmgwlfku.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163tmyadpuq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163tislapfj.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163umadolkp.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163qhmvrdpv.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163qlykywia.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163ucaqcdwr.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163epcdhgzf.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163fketaifu.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163zqrulcny.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ydgfdtlx.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ciwaccuv.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163smbczyge.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163nsjbugzg.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163fykhtcia.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163axzajhka.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163cwwvoqwz.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163uofpomwl.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163uyycwmub.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163jvlibxnn.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163vzkunekn.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163zmaqkgor.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163hixgmgap.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163htcjdccl.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163ifcdpwyn.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163jhvcolpn.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163iotgvrke.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163fsgtwopl.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163exmcngvu.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163owzgjbar.html

Java: a && b || !c
来源：http://www.xuanzx.com/163emeyetkz.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163vaaztkqe.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163jpmdthab.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163timunvqs.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163vacqmknv.html

Py:   if not data: return
来源：http://www.xuanzx.com/163nwcaxuaz.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163eaoablrt.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163ejakvwrn.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163qjjqvklr.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163uivzqcsk.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163kqdpnidb.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163gfvcfpmz.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163lchtfuzo.html

================================================================================
来源：http://www.xuanzx.com/163dklunouq.html

C. 函数与作用域
来源：http://www.sxryk.cn/163yfczpnsd.html

================================================================================
来源：http://www.aibaodan.cn/163zvazufcg.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163hmlkagmr.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163oncrrmha.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163arbtnfme.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163emmqtzeo.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163dvsjzdax.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163rrkfhpau.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163pwzfgano.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163vszwdtwc.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163txoowggn.html

[C02] 默认参数
来源：http://www.sxryk.cn/163xflumenn.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163mslvcldy.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163muodknrb.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163hcthdgrq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163wbmlflse.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163fqtzfrgz.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163owfdpqli.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163evhudede.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163zzdgweiu.html

[C03] 可变参数
来源：http://www.xuanzx.com/163auiylymt.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163hnoehcrq.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163hjhkoadj.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163prynunbg.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163skbcxxal.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163lmsqpmrn.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163tjxdcbku.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163hgrzasce.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163hxyxmoym.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163rjbgqajm.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163wizzkosx.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163rnqaksmo.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163jxrsyqkc.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163kohynzhc.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163ovwqhjsy.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163rnbkhdla.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163flzieioh.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163kygvyhne.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163vwkttejt.html


<!-- 参考信息 -->