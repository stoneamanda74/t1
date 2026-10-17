外链999!wailian999！

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163xkfblqpq.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163knluugrh.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163yipteokm.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163mkegsbda.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163rhizkmnq.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163awjuzyhf.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163wyxjrfag.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163pnzkelco.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163nsoycpkd.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163hzlgkruz.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163bwiwltmp.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163cvxmdmro.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163jcgbzzwn.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163rphlgpge.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163ghdukuay.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163cirgkddu.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163mqurnjkz.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163ucvwstkl.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163qwygjvsh.html

[A17] 位运算
来源：http://www.aibaodan.cn/163cfevaszm.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163aaujwcxv.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163nwlbuvdz.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163nywpaclu.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163djyxpnnk.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163pkbmuyot.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ahbtqwwa.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ldhbsalq.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163gxdmxlua.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163lyzobcab.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163udlnwruc.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163pmoirbpd.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163tiuicwgl.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163ixlhbadp.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163klrtfgcj.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163xayzjpsw.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163vucrdmay.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163euovyiec.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163zhsnyggt.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163kajoqjvn.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163kjamoxhl.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163ctjoswkr.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163hecltjxw.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163xlthpxme.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163ejxgpkcn.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163vfncojeh.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163xlhwdyfa.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163mfzkvnlq.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163fawkvszt.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163lkxrmgpz.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163jtjknxoy.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163etisdufd.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163pwrfbixq.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163bzygosmf.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163yqehjuxf.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163kmbrmwau.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163ewjgjfzd.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163migenzng.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ofnsbmrv.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163wxeaalph.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163emcawijl.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163jlobrqdk.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163vaarqbka.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163aouriisk.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163gblznnrp.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163tfzskbzx.html

Py:   len(s)
来源：http://www.sxryk.cn/163ntbipbiq.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163ogbqakgd.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163jogcxanc.html

TS:   s.length
来源：http://www.aibaodan.cn/163pebpbshn.html

Java: s.length()
来源：http://www.aibaodan.cn/163vjmzxnkq.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163jcsgdfbe.html

Ruby: s.length
来源：http://www.xuanzx.com/163ioceodnm.html

C#:   s.Length
来源：http://www.xuanzx.com/163qwbiindj.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163xcubfbzy.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163lteatcgs.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163bmuynzux.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163hzepnoik.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163xrtkgfuz.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163vmdmmwav.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163jiqrhkpa.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163vahrtymw.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163jgonswiy.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163rradhzyk.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163vxkfnsfm.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163gmiupiuz.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163zxztnscn.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163yknctses.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163kmjwjsui.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163fxokyjus.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163rhklbvbx.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163syikeujt.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163rziwyevk.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163noglgchg.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163dpiyhhyy.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163afppdbkp.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163tfudinda.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163tnjovnzo.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163pmxhfnsf.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163oeajxsep.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163iongilrc.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163ybkdwwtj.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163vbtqbuqx.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163hvyctusi.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163ixzzoigl.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163dvvvikkj.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163scgrvvaz.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163ofutxfyy.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163zimjrbhm.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163ooqykweb.html

================================================================================
来源：http://www.xuanzx.com/163qihybzuj.html

B. 流程控制
来源：http://www.xuanzx.com/163pdorqzwu.html

================================================================================
来源：http://www.aibaodan.cn/163wgrsysmd.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163vtkverhz.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163wumobatx.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163nasiqrst.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163mdgfcqqf.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163zwlaginq.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163nlpmyibb.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163bxbfegre.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163jeqmxkbb.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163yybgkilo.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163bsyseelq.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163cbsagwlj.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163drhpxpqp.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163sxchzprp.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ygpfsdyn.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163hlzaguns.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163kagdyvnt.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163yqopvsif.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163bvgxfgvt.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163usbympfu.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163yjopkpzk.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163cfdhpuuw.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163btjpdiko.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163umywgrcb.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163ajceqtga.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163mbkblgfd.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163xonkemqb.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163reuhqsni.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163hhhnwdqx.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163abwwdteh.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163bffaxxoc.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163ckqkdwhy.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163qaeorrty.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163rhumcfii.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163gsgnovcz.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163sieosqwr.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163isyuzdsk.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163nsukhaux.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163dlyfxyzm.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163yglbezer.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163gffpwesa.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163dclkefjb.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163ktejietx.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163trjlitug.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163qjhoyzcs.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163rczoflcv.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163jzcrtnat.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163lcwcpprh.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163hlnoxsno.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163qsqryyhg.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163mpwlkgds.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163zllzvcqx.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163fbiuwplj.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163uxwsytlr.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163pjzbhbxo.html

[B07] while 循环
来源：http://www.xuanzx.com/163yxdgxxoj.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163bdskkpwc.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163dvtgnwpl.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163gtrfpobh.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163tbvpcvno.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163bdfgbiai.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163aaerhzge.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163rhevlwzr.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163zxkktpom.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163kzxufrhh.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163lmqmpdjg.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163avlqzrhj.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zcghsnas.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163xgjqiywl.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163tirjtnor.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163dpiojooh.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163ebjcyhdn.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163kjxexjbf.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163wnooceys.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163ffvhnwcy.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163gekbgiin.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163astdyrrm.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163abbhauxq.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163jhudrdyq.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163wcgcbiip.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163xvuunmfh.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163gotqdccq.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163biztodgu.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163sqrqdctj.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163qbyvvxak.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163ofhobkif.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163edycwpdw.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163gvnjalal.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163tqnbkdaw.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163fytkcown.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163qipizfbi.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163fpadpyhj.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163icokpqsv.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163bgwwppvm.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ygnaoqua.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163nnysorln.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163utscincb.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163vigwzpeh.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163qmlbjgvw.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163owaapbvs.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163pnxodkjw.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163hbfvgvxf.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163grbxazbe.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163gsatpkcw.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163unajfonz.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163pyfwzcja.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163ndrqntus.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163mkkarefd.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163kpirtauo.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163bqhfugif.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163uxxvqfzw.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163cudlghtv.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163poeuayzl.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163egvkesqx.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163ttwulsoy.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163crgkjbvm.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163hkofeyrc.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163gqtovson.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163sqlobied.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163wmiqdesu.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163punscvok.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163anowsvzv.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163agxnfcen.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163romgxjez.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163dvtdssxm.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163xkbaakcs.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163fjdyptnx.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163fufhdcyp.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163guzfzgob.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163spkpxevc.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163elqxtouc.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163mmrpcmyt.html

Java: a && b || !c
来源：http://www.sxryk.cn/163fotuempc.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163dqeqgtvz.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163uqlmjrsi.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163uxrtgnxk.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163qotefmwv.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163fuuraesp.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163bzaiixdd.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163bnnjwxda.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163bffofwpw.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163rrvxymkh.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163iadihxsu.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163laqhdcqp.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163ewqxqsws.html

================================================================================
来源：http://www.sxryk.cn/163khtepeip.html

C. 函数与作用域
来源：http://www.sxryk.cn/163dfaeywmj.html

================================================================================
来源：http://www.aibaodan.cn/163tpyowyur.html

[C01] 定义函数
来源：http://www.xuanzx.com/163cwhnmcue.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163qhjuuprr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163lesnyuko.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163ubaubtrq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163erivsrvl.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163uholiqzd.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163gbfgmply.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163dntuijyb.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163lixremdb.html

[C02] 默认参数
来源：http://www.xuanzx.com/163xiazegjk.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163hjqmecpm.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163ecqpgmpw.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163qifvgycb.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163jiokxvmw.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163cvddncpc.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163abwletwu.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163xyexnrsb.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163trxznqtu.html

[C03] 可变参数
来源：http://www.xuanzx.com/163zcguhpgn.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163yumhqkla.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163dssyahso.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163rzekbldf.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163wywjyaoj.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163typmhvgo.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163damotclz.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163gjoowgij.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163adyikdjn.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163sdmwbvzw.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163wjrfxftx.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163ylambfas.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163zayotnog.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163xpjsgnfe.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163vnuzavdv.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163jirqbbhg.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ufqogwsg.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163kzyyiwqo.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163ekpeqsxv.html

Py:   return a, b
来源：http://www.aibaodan.cn/163tvvgemur.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163uxyxfwzt.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163yypkkyby.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163fnosahcr.html


<!-- 参考信息 -->